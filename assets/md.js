// Markdown -> HTML for the note viewer.
//
// Math is handled by marked *tokenizer extensions*, not by running KaTeX's
// auto-render over the output HTML. That ordering matters here:
//
//   - 6,300 inline spans in this corpus contain `_`, and 1,405 lines carry two
//     such spans, so markdown's emphasis rule would eat the text between them.
//   - marked resolves `\\` as an escaped backslash before KaTeX ever sees it,
//     silently collapsing aligned/array environments.
//   - notes contain real currency: `PVA $25.71/kg vs PE40 $9.67/kg`. Naive
//     `$...$` pairing renders `25.71/kg vs PE40 ` as math.
//
// Extensions run before every built-in tokenizer, so raw TeX never enters
// markdown processing at all, and the Pandoc pairing rule below leaves currency
// alone.

import { t } from "./i18n.js?v=ae4d14f9";

const escapeHtml = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function katexHtml(tex, display) {
  try {
    return katex.renderToString(tex, {
      displayMode: display,
      throwOnError: false,
      strict: "ignore",      // silences \%, µ and Unicode inside \text{}
      output: "html",
      trust: false,
    });
  } catch (err) {
    // Two notes carry ingest-time corruption (du-2023, choi-2015). Degrade to a
    // marked-up code span instead of blanking the page.
    return `<code class="math-err" title="${escapeHtml(err.message)}">${escapeHtml(tex)}</code>`;
  }
}

const mathBlock = {
  name: "mathBlock",
  level: "block",
  start: (src) => src.indexOf("$$"),
  tokenizer(src) {
    const m = /^\s*\$\$([\s\S]+?)\$\$\s*(?:\n|$)/.exec(src);
    if (m) return { type: "mathBlock", raw: m[0], text: m[1] };
  },
  renderer: (tok) => `<div class="math-display">${katexHtml(tok.text, true)}</div>`,
};

// Pandoc's inline-math rule:
//   the opening $ must not be followed by whitespace
//   the closing $ must not be preceded by whitespace, nor followed by a digit
//   no newline inside
// `$25.71/kg vs PE40 $9.67` fails on the trailing-digit guard, so it stays text.
const mathInline = {
  name: "mathInline",
  level: "inline",
  start: (src) => src.indexOf("$"),
  tokenizer(src) {
    // The final atom is either a plain non-space char or an escape pair whose
    // second char is not a space -- notes routinely end a span with `\%`, and
    // requiring a bare trailing char would reject those.
    const m = /^\$(?![\s$])((?:\\.|[^$\n\\])*?(?:\\[^\s]|[^\s$\\]))\$(?![\d$])/.exec(src);
    if (m) return { type: "mathInline", raw: m[0], text: m[1] };
  },
  renderer: (tok) => katexHtml(tok.text, false),
};

/** [[slug]] / [[slug#heading]] / [[slug|alias]] -> viewer link. */
function makeWikiLink(resolve) {
  return {
    name: "wikiLink",
    level: "inline",
    start: (src) => src.indexOf("[["),
    tokenizer(src) {
      const m = /^\[\[([^\]\[|#]+?)(?:#([^\]\[|]+))?(?:\|([^\]\[]+))?\]\]/.exec(src);
      if (m) {
        return {
          type: "wikiLink", raw: m[0],
          slug: m[1].trim(), hash: m[2] || "", alias: m[3] || "",
        };
      }
    },
    renderer(tok) {
      const node = resolve(tok.slug);
      const label = escapeHtml(tok.alias || (node ? node.t : tok.slug));
      if (!node) {
        return `<span class="wl-dead" title="${t("view.deadLink")}">${label}</span>`;
      }
      const hash = tok.hash ? "#" + headingId(tok.hash) : "";
      return `<a class="wl wl-${node.ty}" href="viewer.html?note=${encodeURIComponent(tok.slug)}${hash}"`
           + ` data-slug="${escapeHtml(tok.slug)}">${label}</a>`;
    },
  };
}

export function headingId(text) {
  return String(text).trim().toLowerCase()
    // keep Hangul so Korean headings still get usable anchors
    .replace(/[^\w\u3130-\u318f\uac00-\ud7a3\s-]/g, "")
    .replace(/\s+/g, "-");
}

/**
 * Configure marked once.
 * @param {(slug:string)=>object|undefined} resolve  slug -> graph node
 */
export function configureMarked(resolve) {
  const renderer = {
    // Several notes carry 8+ column mix-design tables; without a scroll box
    // they blow out the page on narrow screens.
    table(header, body) {
      return `<div class="tbl-wrap"><table><thead>${header}</thead><tbody>${body}</tbody></table></div>`;
    },
    heading(text, depth) {
      const id = headingId(text.replace(/<[^>]+>/g, ""));
      return `<h${depth} id="${id}">${text}</h${depth}>`;
    },
  };

  marked.use({
    gfm: true,
    breaks: false,
    // No note body contains raw HTML or fenced code (verified across all 975),
    // so escaping stray `<` is enough and we can skip a sanitiser dependency.
    // Revisit if a future note starts embedding HTML.
    extensions: [mathBlock, mathInline, makeWikiLink(resolve)],
    renderer,
  });
}

/** Split YAML frontmatter. Handles both inline and block tag lists. */
export function parseFrontMatter(text) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/.exec(text);
  if (!m) return [{}, text];
  const fields = {};
  let current = null;
  for (const line of m[1].split(/\r?\n/)) {
    const item = /^\s*-\s+(.*)$/.exec(line);
    if (item && Array.isArray(fields[current])) {
      fields[current].push(item[1].trim().replace(/^["']|["']$/g, ""));
      continue;
    }
    const kv = /^([A-Za-z_][\w-]*):\s*(.*)$/.exec(line);
    if (!kv) continue;
    const [, key, rawValue] = kv;
    const value = rawValue.trim();
    if (value === "") { fields[key] = []; current = key; }
    else if (value.startsWith("[") && value.endsWith("]")) {
      fields[key] = value.slice(1, -1).split(",")
        .map((s) => s.trim().replace(/^["']|["']$/g, "")).filter(Boolean);
      current = null;
    } else {
      fields[key] = value.replace(/^["']|["']$/g, "");
      current = null;
    }
  }
  return [fields, text.slice(m[0].length)];
}

export function renderMarkdown(body) {
  return marked.parse(body);
}
