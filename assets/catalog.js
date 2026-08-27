// Catalog: sortable, filterable table over all notes.
// Search covers title, slug, tags, journal and the Summary excerpt, so
// catalog.json (the heavy text payload) is fetched here and only here.

import {
  mountShell, loadGraph, escapeHtml, viewerUrl, debounce, typeLabel, TYPES, t,
} from "./shell.js";

const PAGE = 100;
let graph, rows, view, page = 0;
let sortKey = "t", sortDir = 1;

const state = { q: "", type: "", tag: "", year: "" };
const el = (id) => document.getElementById(id);

function applyFilters() {
  const q = state.q.toLowerCase();
  view = rows.filter((r) => {
    if (state.type && r.ty !== state.type) return false;
    if (state.tag && !r.tg.includes(state.tag)) return false;
    if (state.year && String(r.y) !== state.year) return false;
    return !q || r.hay.includes(q);
  });
  sortRows();
  page = 0;
  render();
}

function sortRows() {
  const k = sortKey;
  view.sort((a, b) => {
    let x = a[k], y = b[k];
    if (k === "t") return sortDir * String(x).localeCompare(String(y), "ko");
    x = x ?? -Infinity; y = y ?? -Infinity;
    return sortDir * (x - y || String(a.t).localeCompare(String(b.t), "ko"));
  });
}

function render() {
  el("count").textContent = t("cat.count", { n: view.length.toLocaleString() });
  const slice = view.slice(page * PAGE, (page + 1) * PAGE);

  el("rows").innerHTML = slice.map((r) => `
    <tr>
      <td><span class="badge ${r.ty}">${typeLabel(r.ty)}</span></td>
      <td>
        <a href="${viewerUrl(r.id)}">${escapeHtml(r.t)}</a>
        ${r.sm ? `<div class="excerpt">${escapeHtml(r.sm.slice(0, 150))}…</div>` : ""}
        <div>${r.tg.slice(0, 5).map((t) =>
          `<a class="tag" href="?tag=${encodeURIComponent(t)}">#${escapeHtml(t)}</a>`).join("")}</div>
      </td>
      <td class="num">${r.y ?? "—"}</td>
      <td class="jr">${escapeHtml(r.j || "—")}</td>
      <td class="num">${r.g}</td>
    </tr>`).join("") || `<tr><td colspan="5" class="spinner">${t("cat.empty")}</td></tr>`;

  const pages = Math.max(1, Math.ceil(view.length / PAGE));
  el("pager").innerHTML = pages <= 1 ? "" : `
    <button class="btn" ${page === 0 ? "disabled" : ""} data-p="${page - 1}">${t("cat.prev")}</button>
    <span class="muted small">${page + 1} / ${pages}</span>
    <button class="btn" ${page >= pages - 1 ? "disabled" : ""} data-p="${page + 1}">${t("cat.next")}</button>`;
  el("pager").querySelectorAll("[data-p]").forEach((b) =>
    b.addEventListener("click", () => {
      page = +b.dataset.p;
      render();
      window.scrollTo({ top: el("tbl").offsetTop - 70, behavior: "smooth" });
    }));

  document.querySelectorAll("th[data-k]").forEach((th) => {
    const on = th.dataset.k === sortKey;
    th.setAttribute("aria-sort", on ? (sortDir > 0 ? "ascending" : "descending") : "none");
    th.querySelector(".arrow").textContent = on ? (sortDir > 0 ? "▲" : "▼") : "";
  });
}

function syncUrl() {
  const p = new URLSearchParams();
  for (const [k, v] of Object.entries(state)) if (v) p.set(k, v);
  history.replaceState(null, "", p.toString() ? `?${p}` : location.pathname);
}

(async function init() {
  mountShell({ subtitle: "sub.catalog", active: "catalog.html" });
  graph = await loadGraph();

  const extra = await fetch("data/catalog.json", { cache: "force-cache" })
    .then((r) => r.json())
    .then((list) => new Map(list.map((c) => [c.id, c])));

  rows = graph.nodes.map((n) => {
    const c = extra.get(n.id) || {};
    return {
      id: n.id, t: n.t, ty: n.ty, y: n.yr, g: n.g, tg: n.tg,
      j: c.j || "", sm: c.sm || "",
      hay: `${n.t}\n${n.id}\n${n.tg.join(" ")}\n${c.j || ""}\n${c.sm || ""}`.toLowerCase(),
    };
  });

  // seed from the query string so tag chips elsewhere deep-link here
  const p = new URLSearchParams(location.search);
  for (const k of Object.keys(state)) state[k] = p.get(k) || "";

  el("q").value = state.q;
  el("type").innerHTML = `<option value="">${t("cat.typesAll")}</option>` +
    TYPES.filter((ty) => graph.meta.types[ty]).map((ty) =>
      `<option value="${ty}">${typeLabel(ty)} (${graph.meta.types[ty]})</option>`).join("");
  el("type").value = state.type;

  el("tag").innerHTML = `<option value="">${t("graph.tagsAll", { n: graph.meta.tagTotal })}</option>` +
    graph.meta.topTags.map(([tag, c]) =>
      `<option value="${escapeHtml(tag)}">${escapeHtml(tag)} (${c})</option>`).join("");
  // a deep-linked tag may sit outside the top 40, so add it on demand
  if (state.tag && !graph.meta.topTags.some(([tag]) => tag === state.tag)) {
    el("tag").insertAdjacentHTML("beforeend",
      `<option value="${escapeHtml(state.tag)}">${escapeHtml(state.tag)}</option>`);
  }
  el("tag").value = state.tag;

  const years = Object.keys(graph.meta.years).sort((a, b) => b - a);
  el("year").innerHTML = `<option value="">${t("cat.yearsAll")}</option>` +
    years.map((y) => `<option value="${y}">${y} (${graph.meta.years[y]})</option>`).join("");
  el("year").value = state.year;

  el("q").addEventListener("input", debounce((e) => {
    state.q = e.target.value.trim(); syncUrl(); applyFilters();
  }, 160));
  for (const k of ["type", "tag", "year"]) {
    el(k).addEventListener("change", (e) => {
      state[k] = e.target.value; syncUrl(); applyFilters();
    });
  }
  el("reset").addEventListener("click", () => {
    for (const k of Object.keys(state)) state[k] = "";
    el("q").value = ""; el("type").value = ""; el("tag").value = ""; el("year").value = "";
    syncUrl(); applyFilters();
  });

  document.querySelectorAll("th[data-k]").forEach((th) =>
    th.addEventListener("click", () => {
      const k = th.dataset.k;
      // titles read best A-Z first; numbers read best largest-first
      if (sortKey === k) sortDir *= -1;
      else { sortKey = k; sortDir = k === "t" ? 1 : -1; }
      sortRows(); page = 0; render();
    }));

  applyFilters();
})();
