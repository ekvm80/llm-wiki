// Shared page shell: header, nav, and the few helpers every page needs.
// Every URL here is relative -- the site is served from /<repo>/ on GitHub
// Pages, so a leading slash would resolve to the user-page root and 404.

import { t, setLang, applyStatic } from "./i18n.js";

const PAGES = [
  ["index.html", "nav.graph"],
  ["catalog.html", "nav.catalog"],
  ["concepts.html", "nav.concepts"],
  ["about.html", "nav.about"],
];

export const TYPES = ["concept", "source_note", "reference_book", "overview"];

export const TYPE_COLOR = {
  concept: "#2563eb",
  source_note: "#64748b",
  reference_book: "#059669",
  overview: "#d97706",
};

export const typeLabel = (ty) => t(`type.${ty}`) || ty;

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
      <span class="spacer"></span>
      <span class="count" id="navCount"></span>
    </nav>`);
}

function paintShell(meta) {
  setLang(meta.lang || "ko");
  document.getElementById("siteTitle").textContent = t("site.title");
  document.getElementById("siteSub").textContent = subtitleKey ? t(subtitleKey) : "";
  document.getElementById("navCount").textContent =
    t("site.count", { n: meta.n, m: meta.m.toLocaleString() });
  applyStatic();
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
