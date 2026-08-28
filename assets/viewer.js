// Note viewer: fetches the raw .md and renders it client-side.
//
// Navigation between notes is in-page (pushState + re-render) so following
// [[links]] never costs a reload and the back button still works.

import {
  mountShell, loadGraph, buildAdjacency, escapeHtml, viewerUrl, typeLabel, t,
} from "./shell.js?v=9769426c";
import { configureMarked, parseFrontMatter, renderMarkdown, headingId } from "./md.js?v=9769426c";

const DOI_RE = /https?:\/\/(?:dx\.)?doi\.org\/\S+/;
let graph, adj;

const el = (id) => document.getElementById(id);

async function show(slug, { push = false } = {}) {
  const node = graph.byId.get(slug);
  if (!node) return notFound(slug);

  document.title = `${node.t} — LLM Wiki`;
  if (push) history.pushState({ slug }, "", viewerUrl(slug));

  el("body").innerHTML = `<div class="spinner">${t("view.loading")}</div>`;
  el("meta").innerHTML = "";
  el("side").innerHTML = "";

  let raw;
  try {
    const res = await fetch(encodeURI(node.p), { cache: "no-cache" });
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    // Decode explicitly rather than trusting the server's Content-Type header.
    raw = new TextDecoder("utf-8").decode(await res.arrayBuffer());
  } catch (err) {
    el("body").innerHTML =
      `<div class="card"><h2>${t("view.loadFail")}</h2>
       <p class="muted small">${escapeHtml(node.p)} — ${escapeHtml(err.message)}</p></div>`;
    return;
  }

  const [fm, md] = parseFrontMatter(raw);
  renderMeta(node, fm);
  el("body").innerHTML = renderMarkdown(md);
  renderSide(node);
  scrollToHash();
}

function renderMeta(node, fm) {
  const doi = DOI_RE.exec(fm.citation || "");
  const tags = Array.isArray(fm.tags) ? fm.tags : [];
  // source: is either a PDF filename (not shipped -- show as plain text) or,
  // on concept notes, a list of wikilinks to related notes.
  const src = String(fm.source || "");
  const srcLinks = [...src.matchAll(/\[\[([^\]\[|#]+)/g)].map((m) => m[1].trim());
  const srcHtml = srcLinks.length
    ? srcLinks.map((s) => graph.byId.has(s)
        ? `<a href="${viewerUrl(s)}" data-slug="${escapeHtml(s)}" class="wl">${escapeHtml(graph.byId.get(s).t)}</a>`
        : escapeHtml(s)).join(", ")
    : `<span class="muted">${escapeHtml(src.replace(/^sources\//, "")) || "—"}</span>
       <span class="muted small">${t("view.noPdf")}</span>`;

  el("meta").innerHTML = `
    <div class="card">
      <div class="metatop">
        <span class="badge ${node.ty}">${typeLabel(node.ty)}</span>
        ${node.yr ? `<span class="muted small">${node.yr}</span>` : ""}
        <span class="muted small">${t("view.links", { n: node.g })}</span>
      </div>
      <h1>${escapeHtml(fm.title || node.t)}</h1>
      ${fm.citation ? `<p class="cite">${escapeHtml(fm.citation)}</p>` : ""}
      ${doi ? `<p><a href="${doi[0]}" target="_blank" rel="noopener">${t("view.doi")}</a></p>` : ""}
      <dl class="kv"><dt>${t("view.source")}</dt><dd>${srcHtml}</dd></dl>
      ${tags.length ? `<div class="tags">${tags.map((t) =>
        `<a class="tag" href="catalog.html?tag=${encodeURIComponent(t)}">#${escapeHtml(t)}</a>`).join("")}</div>` : ""}
      <p class="actions">
        <a class="btn" href="index.html?focus=${encodeURIComponent(node.id)}">${t("view.inGraph")}</a>
        <a class="btn" href="${encodeURI(node.p)}" target="_blank" rel="noopener">${t("view.rawMd")}</a>
      </p>
    </div>`;
}

function renderSide(node) {
  const heads = [...el("body").querySelectorAll("h2, h3")].map((h) => ({
    id: h.id || (h.id = headingId(h.textContent)),
    text: h.textContent,
    lvl: h.tagName === "H2" ? 2 : 3,
  }));

  const links = adj[node.i].map((i) => graph.nodes[i]).sort((a, b) => b.g - a.g);
  const shown = links.slice(0, 20);

  el("side").innerHTML = `
    ${heads.length ? `<nav class="toc"><h4>${t("view.toc")}</h4><ul>${heads.map((h) =>
      `<li class="l${h.lvl}"><a href="#${h.id}">${escapeHtml(h.text)}</a></li>`).join("")}</ul></nav>` : ""}
    <div class="rel">
      <h4>${t("view.connected", { n: links.length })}</h4>
      <ul>${shown.map((n) =>
        `<li><a href="${viewerUrl(n.id)}" data-slug="${escapeHtml(n.id)}" class="wl">${escapeHtml(n.t)}</a></li>`
      ).join("")}</ul>
      ${links.length > shown.length
        ? `<button class="btn" id="moreRel">${t("view.showRest", { n: links.length - shown.length })}</button>` : ""}
    </div>`;

  const more = el("moreRel");
  if (more) {
    more.addEventListener("click", () => {
      more.previousElementSibling.insertAdjacentHTML("beforeend", links.slice(20).map((n) =>
        `<li><a href="${viewerUrl(n.id)}" data-slug="${escapeHtml(n.id)}" class="wl">${escapeHtml(n.t)}</a></li>`
      ).join(""));
      more.remove();
    });
  }
}

function notFound(slug) {
  document.title = `${t("view.notFound")} — LLM Wiki`;
  el("meta").innerHTML = `<div class="card">
      <h1>${t("view.notFound")}</h1>
      <p class="muted"><code>${escapeHtml(slug || "—")}</code></p>
      <p class="muted small">${t("view.altMissing")}</p>
      <p><a href="catalog.html">${t("view.notFoundHint")}</a> · <a href="index.html">${t("view.backToGraph")}</a></p>
    </div>`;
  el("body").innerHTML = "";
  el("side").innerHTML = "";
}

function scrollToHash() {
  if (!location.hash) { window.scrollTo(0, 0); return; }
  const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
  target ? target.scrollIntoView({ block: "start" }) : window.scrollTo(0, 0);
}

const slugFromUrl = () => new URLSearchParams(location.search).get("note") || "";

(async function init() {
  mountShell({ subtitle: "sub.viewer", active: "" });
  graph = await loadGraph();
  adj = buildAdjacency(graph);
  configureMarked((slug) => graph.byId.get(slug));

  // One delegated handler keeps every wiki link inside this tab.
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[data-slug]");
    if (!a || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    show(a.dataset.slug, { push: true });
  });

  addEventListener("popstate", () => show(slugFromUrl()));
  await show(slugFromUrl());
})();
