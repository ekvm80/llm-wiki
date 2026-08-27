// About page: renders docs/MANUAL.md and docs/AGENTS.md with the same engine
// the viewer uses, so wikilinks inside them become live links and there is one
// source of truth for the documentation.

import { mountShell, loadGraph, escapeHtml, viewerUrl } from "./shell.js";
import { configureMarked, parseFrontMatter, renderMarkdown } from "./md.js";

const DOCS = [
  ["manual", "docs/MANUAL.md"],
  ["agents", "docs/AGENTS.md"],
];

(async function init() {
  mountShell({ subtitle: "이 위키는 무엇이고 어떻게 만들어졌는가", active: "about.html" });
  const graph = await loadGraph();
  configureMarked((slug) => graph.byId.get(slug));

  const { n, m, types, tagTotal, years } = graph.meta;
  const yrs = Object.keys(years).map(Number);
  document.getElementById("facts").innerHTML = `
    <div class="fact"><b>${n}</b><span>노트</span></div>
    <div class="fact"><b>${m.toLocaleString()}</b><span>노트 간 연결</span></div>
    <div class="fact"><b>${types.concept ?? 0}</b><span>핵심 개념</span></div>
    <div class="fact"><b>${types.source_note ?? 0}</b><span>논문 노트</span></div>
    <div class="fact"><b>${types.reference_book ?? 0}</b><span>교과서·표준</span></div>
    <div class="fact"><b>${tagTotal.toLocaleString()}</b><span>태그</span></div>
    <div class="fact"><b>${Math.min(...yrs)}–${Math.max(...yrs)}</b><span>발행 연도</span></div>`;

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
      box.innerHTML = `<p class="muted small">${escapeHtml(path)} 를 불러오지 못했습니다 (${escapeHtml(err.message)}).</p>`;
    }
  }
})();
