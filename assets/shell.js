// Shared page shell: header, nav, and the few helpers every page needs.
// Every URL here is relative -- the site is served from /<repo>/ on GitHub
// Pages, so a leading slash would resolve to the user-page root and 404.

import { t, setLang, applyStatic } from "./i18n.js?v=9769426c";

const PAGES = [
  ["index.html", "nav.graph"],
  ["catalog.html", "nav.catalog"],
  ["concepts.html", "nav.concepts"],
  ["about.html", "nav.about"],
];

export const TYPES = ["concept", "source_note", "reference_book", "overview"];

// The two editions are separate repos serving byte-identical assets, so the
// switch is just a cross-site link. Note slugs match across editions, which is
// what lets it carry the current page and query straight over.
const SIBLING_SITE = {
  ko: "https://ekvm80.github.io/llm-wiki-en/",
  en: "https://ekvm80.github.io/llm-wiki/",
};

/** URL of the current page in the other edition, keeping page + query. */
function siblingUrl(lang) {
  const base = SIBLING_SITE[lang];
  if (!base) return null;
  const page = location.pathname.split("/").pop() || "index.html";
  return base + page + location.search + location.hash;
}

export const TYPE_COLOR = {
  concept: "#2563eb",
  source_note: "#64748b",
  reference_book: "#059669",
  overview: "#d97706",
};

export const typeLabel = (ty) => t(`type.${ty}`) || ty;

// The wiki is one output of the lab, so its footer mirrors the lab homepage's
// (ekvm80.github.io/cmlab) brand block and section links verbatim -- same
// wording, same order -- so the two sites read as one property.
const LAB_SITE = "https://ekvm80.github.io/cmlab/";
const LAB_LINKS = [
  ["research.html", "Research"],
  ["professor.html", "Professor"],
  ["members.html", "Members"],
  ["publications.html", "Publications"],
];

let subtitleKey = "";
let activePage = "";

/** Insert the header and nav. Language is not known yet, so text is filled by
 *  paintShell() once graph.json has been read. */
export function mountShell({ subtitle = "", active = "" } = {}) {
  subtitleKey = subtitle;
  activePage = active || location.pathname.split("/").pop() || "index.html";
  document.body.insertAdjacentHTML("afterbegin", `
    <header class="site"><h1 id="siteTitle"></h1><p id="siteSub"></p></header>
    <nav class="site">
      ${PAGES.map(([href, key]) =>
        `<a href="${href}" data-i18n="${key}"${href === activePage ? ' class="on"' : ""}></a>`).join("")}
      <a class="langsw" id="langSwitch" hidden></a>
      <span class="spacer"></span>
      <span class="count" id="navCount"></span>
    </nav>`);
  // Footer goes at the end of <body>. On the graph page the body is a fixed
  // flex column, so style.css gives it flex:none to keep the canvas uncropped.
  // Left empty here: paintShell() fills it once the language is known.
  document.body.insertAdjacentHTML("beforeend",
    `<footer class="site"><div class="footer-inner" id="siteFooter"></div></footer>`);
}

function paintShell(meta) {
  setLang(meta.lang || "ko");
  document.getElementById("siteTitle").textContent = t("site.title");
  document.getElementById("siteSub").textContent = subtitleKey ? t(subtitleKey) : "";
  document.getElementById("navCount").textContent =
    t("site.count", { n: meta.n, m: meta.m.toLocaleString() });

  const sw = document.getElementById("langSwitch");
  const href = siblingUrl(meta.lang);
  if (href) {
    sw.href = href;
    sw.innerHTML = `<span aria-hidden="true">\u{1F310}</span> ${t("lang.other")}`;
    sw.title = t("lang.switch");
    sw.hidden = false;
  }
  paintFooter();
  applyStatic();
}

/** Brand block + lab-site links, mirroring the lab homepage footer. */
function paintFooter() {
  const el = document.getElementById("siteFooter");
  if (!el) return;
  el.innerHTML = `
    <div class="footer-brand">
      <strong>${escapeHtml(t("footer.lab"))}</strong>
      ${escapeHtml(t("footer.dept"))}<br>
      ${escapeHtml(t("footer.copy", { year: new Date().getFullYear() }))}
    </div>
    <div class="footer-links">
      ${LAB_LINKS.map(([href, label]) =>
        `<a href="${LAB_SITE}${href}">${label}</a>`).join("")}
    </div>`;
}

let graphPromise = null;
/** Fetch data/graph.json once per page, index it, and localise the shell. */
export function loadGraph() {
  if (!graphPromise) {
    graphPromise = fetch("data/graph.json", { cache: "force-cache" })
      .then((r) => {
        if (!r.ok) throw new Error(`graph.json ${r.status}`);
        return r.json();
      })
      .then((g) => {
        g.nodes.forEach((n, i) => { n.i = i; });
        g.byId = new Map(g.nodes.map((n) => [n.id, n]));
        paintShell(g.meta);
        return g;
      });
  }
  return graphPromise;
}

/** Adjacency as an array of index arrays. */
export function buildAdjacency(graph) {
  const adj = Array.from({ length: graph.nodes.length }, () => []);
  for (const [a, b] of graph.links) { adj[a].push(b); adj[b].push(a); }
  return adj;
}

export function escapeHtml(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

export const viewerUrl = (slug) => `viewer.html?note=${encodeURIComponent(slug)}`;

export function debounce(fn, ms) {
  let t;
  return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); };
}

export { t };
