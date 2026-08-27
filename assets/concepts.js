// Concept hub: the 23 concept notes as cards, ordered by how many notes cite
// them. Doubles as the beginner entry point, so it leads with the reading
// order recommended in MANUAL.md.

import {
  mountShell, loadGraph, buildAdjacency, escapeHtml, viewerUrl, TYPE_LABEL,
} from "./shell.js";

// from MANUAL.md §2.1
const READING_ORDER = [
  ["pseudo-strain-hardening-criteria", "ECC가 왜 유연한지의 원리"],
  ["strain-hardening-mechanism", "인장 변형경화 메커니즘"],
  ["multiple-cracking-behavior", "미세 균열이 여러 개 생기는 이유"],
  ["fiber-bridging-constitutive-law", "섬유가 균열을 잡아주는 법칙"],
  ["crack-width-control", "균열폭이 좁으면 좋은 점"],
];

const TOPICS = [
  ["자기치유", "self-healing-ecc"],
  ["내충격·방폭", "impact-and-blast-resistance-frcc"],
  ["달 기지 건설", "lunar-isru-materials"],
  ["3D 프린팅", "3d-printable-ecc"],
  ["지오폴리머", "alkali-activated-materials"],
  ["저탄소·지속가능성", "sustainability-low-carbon-binders"],
];

(async function init() {
  mountShell({ subtitle: "핵심 개념 — 위키에 들어가는 가장 좋은 입구", active: "concepts.html" });
  const graph = await loadGraph();
  const adj = buildAdjacency(graph);
  const has = (s) => graph.byId.has(s);

  const concepts = graph.nodes
    .filter((n) => n.ty === "concept")
    .sort((a, b) => b.g - a.g);

  const link = (slug, label) =>
    `<a href="${viewerUrl(slug)}">${escapeHtml(label ?? graph.byId.get(slug).t)}</a>`;

  document.getElementById("order").innerHTML = READING_ORDER
    .filter(([s]) => has(s))
    .map(([s, why], i) => `
      <li>
        <span class="step">${i + 1}</span>
        <div>${link(s)}<div class="muted small">${escapeHtml(why)}</div></div>
      </li>`).join("");

  document.getElementById("topics").innerHTML = TOPICS
    .filter(([, s]) => has(s))
    .map(([label, s]) =>
      `<a class="topic" href="${viewerUrl(s)}">
         <b>${escapeHtml(label)}</b>
         <span class="muted small">${graph.byId.get(s).g}개 노트 연결</span>
       </a>`).join("");

  document.getElementById("cards").innerHTML = concepts.map((c) => {
    // strongest neighbours give a sense of what sits under each concept
    const top = adj[c.i].map((i) => graph.nodes[i])
      .filter((n) => n.ty !== "concept")
      .sort((a, b) => (b.yr || 0) - (a.yr || 0))
      .slice(0, 3);
    return `
      <article class="ccard">
        <h3><a href="${viewerUrl(c.id)}">${escapeHtml(c.t)}</a></h3>
        <p class="muted small">연결된 노트 <b>${c.g}</b>개</p>
        ${top.length ? `<ul class="mini">${top.map((n) =>
          `<li><a href="${viewerUrl(n.id)}">${escapeHtml(n.t)}</a>
               <span class="muted">${n.yr || ""}</span></li>`).join("")}</ul>` : ""}
        <p><a class="small" href="index.html?focus=${encodeURIComponent(c.id)}">그래프에서 보기 →</a></p>
      </article>`;
  }).join("");

  document.getElementById("cCount").textContent = concepts.length;
})();
