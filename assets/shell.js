// Shared page shell: header, nav, and the few helpers every page needs.
// Every URL here is relative -- the site is served from /<repo>/ on GitHub
// Pages, so a leading slash would resolve to the user-page root and 404.

const PAGES = [
  ["index.html", "그래프"],
  ["catalog.html", "카탈로그"],
  ["concepts.html", "개념"],
  ["about.html", "소개"],
];

export const TYPE_LABEL = {
  concept: "개념",
  source_note: "논문",
  reference_book: "문헌",
  overview: "종합",
};

export const TYPE_COLOR = {
  concept: "#2563eb",
  source_note: "#64748b",
  reference_book: "#059669",
  overview: "#d97706",
};

export function mountShell({ subtitle = "", active = "" } = {}) {
  const here = active || location.pathname.split("/").pop() || "index.html";
  document.body.insertAdjacentHTML("afterbegin", `
    <header class="site">
      <h1>LLM Wiki — 시멘트계 복합재료 지식 그래프</h1>
      <p>${escapeHtml(subtitle)}</p>
    </header>
    <nav class="site">
      ${PAGES.map(([href, label]) =>
        `<a href="${href}"${href === here ? ' class="on"' : ""}>${label}</a>`).join("")}
      <span class="spacer"></span>
      <span class="count" id="navCount"></span>
    </nav>`);
}

let graphPromise = null;
/** Fetch data/graph.json once per page and index it. */
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
        const el = document.getElementById("navCount");
        if (el) el.textContent = `노트 ${g.meta.n} · 연결 ${g.meta.m}`;
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
