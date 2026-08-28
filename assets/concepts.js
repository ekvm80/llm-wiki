// Concept hub: the 23 concept notes as cards, ordered by how many notes cite
// them. Doubles as the beginner entry point, so it leads with the reading
// order recommended in MANUAL.md.

import {
  mountShell, loadGraph, buildAdjacency, escapeHtml, viewerUrl, t,
} from "./shell.js?v=9769426c";

// from MANUAL.md 2.1 -- labels come from i18n, keyed by slug
const READING_ORDER = [
  "pseudo-strain-hardening-criteria",
  "strain-hardening-mechanism",
  "multiple-cracking-behavior",
  "fiber-bridging-constitutive-law",
  "crack-width-control",
];

const TOPICS = [
  "self-healing-ecc",
  "impact-and-blast-resistance-frcc",
  "lunar-isru-materials",
  "3d-printable-ecc",
  "alkali-activated-materials",
  "sustainability-low-carbon-binders",
];

(async function init() {
  mountShell({ subtitle: "sub.concepts", active: "concepts.html" });
  const graph = await loadGraph();
  const adj = buildAdjacency(graph);
  const has = (s) => graph.byId.has(s);

  const concepts = graph.nodes
    .filter((n) => n.ty === "concept")
    .sort((a, b) => b.g - a.g);

  const link = (slug, label) =>
    `<a href="${viewerUrl(slug)}">${escapeHtml(label ?? graph.byId.get(slug).t)}</a>`;

  document.getElementById("order").innerHTML = READING_ORDER
    .filter(has)
    .map((s, i) => `
      <li>
        <span class="step">${i + 1}</span>
        <div>${link(s)}<div class="muted small">${escapeHtml(t("order." + s))}</div></div>
      </li>`).join("");

  document.getElementById("topics").innerHTML = TOPICS
    .filter(has)
    .map((s) =>
      `<a class="topic" href="${viewerUrl(s)}">
         <b>${escapeHtml(t("topic." + s))}</b>
         <span class="muted small">${t("con.topicLinked", { n: graph.byId.get(s).g })}</span>
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
        <p class="muted small">${t("con.linkedCount", { n: c.g })}</p>
        ${top.length ? `<ul class="mini">${top.map((n) =>
          `<li><a href="${viewerUrl(n.id)}">${escapeHtml(n.t)}</a>
               <span class="muted">${n.yr || ""}</span></li>`).join("")}</ul>` : ""}
        <p><a class="small" href="index.html?focus=${encodeURIComponent(c.id)}">${t("con.inGraph")}</a></p>
      </article>`;
  }).join("");

  document.querySelector("[data-i18n-cards]").textContent =
    t("con.cardsTitle", { n: concepts.length });
})();
