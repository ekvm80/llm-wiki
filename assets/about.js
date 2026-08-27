// About page: renders docs/MANUAL.md and docs/AGENTS.md with the same engine
// the viewer uses, so wikilinks inside them become live links and there is one
// source of truth for the documentation.

import { mountShell, loadGraph, escapeHtml, viewerUrl, t } from "./shell.js";
import { configureMarked, parseFrontMatter, renderMarkdown } from "./md.js";

const DOCS = [
  ["manual", "docs/MANUAL.md"],
  ["agents", "docs/AGENTS.md"],
];

(async function init() {
  mountShell({ subtitle: "sub.about", active: "about.html" });
  const graph = await loadGraph();
  configureMarked((slug) => graph.byId.get(slug));

  const { n, m, types, tagTotal, years } = graph.meta;
  const yrs = Object.keys(years).map(Number);
  document.getElementById("facts").innerHTML = `
    <div class="fact"><b>${n}</b><span>${t("fact.notes")}</span></div>
    <div class="fact"><b>${m.toLocaleString()}</b><span>${t("fact.links")}</span></div>
    <div class="fact"><b>${types.concept ?? 0}</b><span>${t("fact.concepts")}</span></div>
    <div class="fact"><b>${types.source_note ?? 0}</b><span>${t("fact.papers")}</span></div>
    <div class="fact"><b>${types.reference_book ?? 0}</b><span>${t("fact.refs")}</span></div>
    <div class="fact"><b>${tagTotal.toLocaleString()}</b><span>${t("fact.tags")}</span></div>
    <div class="fact"><b>${Math.min(...yrs)}–${Math.max(...yrs)}</b><span>${t("fact.years")}</span></div>`;

  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[data-slug]");
    if (!a) return;
    e.preventDefault();
    window.open(viewerUrl(a.dataset.slug), "_blank", "noopener");
  });

  for (const [id, path] of DOCS) {
    const box = document.getElementById(id);
    try {
      const res = await fetch(path, { cache: "no-cache" });
      if (!res.ok) throw new Error(String(res.status));
      const raw = new TextDecoder("utf-8").decode(await res.arrayBuffer());
      const [, body] = parseFrontMatter(raw);
      box.innerHTML = renderMarkdown(body);
    } catch (err) {
      box.innerHTML = `<p class="muted small">${t("about.docFail", { path: escapeHtml(path), err: escapeHtml(err.message) })}</p>`;
    }
  }
})();
