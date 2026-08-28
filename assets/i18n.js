// UI strings for both language builds.
//
// The Korean and English wikis ship as separate repos but share this codebase,
// so every user-facing string lives here and the active language comes from
// graph.json's meta.lang (set by build.py --lang). Static markup opts in with
// data-i18n="key" / data-i18n-html="key" / data-i18n-ph="key".

const STRINGS = {
  ko: {
    "site.title": "LLM Wiki — 시멘트계 복합재료 지식 그래프",
    "site.count": "노트 {n} · 연결 {m}",
    "site.lab": "전남대학교 건축토목공학과(건축학부) <b>건설재료연구실</b>",

    "nav.graph": "그래프",
    "nav.catalog": "카탈로그",
    "nav.concepts": "개념",
    "nav.about": "소개",

    "sub.graph": "노트 간 인용 관계를 그린 지식 네트워크 — 노드를 더블클릭하면 노트가 열립니다",
    "sub.catalog": "전체 노트 카탈로그 — 제목·태그·저널·요약 검색",
    "sub.concepts": "핵심 개념 — 위키에 들어가는 가장 좋은 입구",
    "sub.about": "이 위키는 무엇이고 어떻게 만들어졌는가",
    "sub.viewer": "노트 뷰어",

    "type.concept": "개념",
    "type.source_note": "논문",
    "type.reference_book": "문헌",
    "type.overview": "종합",

    "graph.search": "제목·slug 검색",
    "graph.hits": "{n}건",
    "graph.degree": "연결 ≥",
    "graph.neighbours": "이웃만",
    "graph.fit": "전체 보기",
    "graph.tagsAll": "태그 전체 ({n}종)",
    "graph.detailEmpty": "노드를 클릭하면 상세 정보와 연결된 노트가 여기 표시됩니다.",
    "graph.links": "연결 {n}개",
    "graph.open": "노트 열기 ↗",
    "graph.connected": "연결된 노트 {n}",
    "graph.andMore": "외 {n}개",
    "graph.tip": "클릭=선택 · 더블클릭=노트 열기",

    "cat.search": "제목 · 태그 · 저널 · 요약 검색",
    "cat.typesAll": "유형 전체",
    "cat.yearsAll": "연도 전체",
    "cat.reset": "초기화",
    "cat.count": "{n}건",
    "cat.colType": "유형",
    "cat.colTitle": "제목",
    "cat.colYear": "연도",
    "cat.colJournal": "저널",
    "cat.colLinks": "연결",
    "cat.empty": "조건에 맞는 노트가 없습니다.",
    "cat.prev": "이전",
    "cat.next": "다음",

    "con.orderTitle": "처음이라면 이 순서로",
    "con.topicsTitle": "관심 주제부터",
    "con.cardsTitle": "핵심 개념 {n}개 — 인용이 많은 순",
    "con.cardsNote": "개념 노트는 이 위키의 허브입니다. 개별 논문 노트들이 개념 노트를 향해 연결됩니다.",
    "con.linkedCount": "연결된 노트 <b>{n}</b>개",
    "con.inGraph": "그래프에서 보기 →",
    "con.topicLinked": "{n}개 노트 연결",

    "view.loading": "불러오는 중…",
    "view.source": "원본",
    "view.noPdf": "(원본 PDF는 저장소에 포함되지 않습니다)",
    "view.doi": "원문 DOI ↗",
    "view.inGraph": "그래프에서 보기",
    "view.rawMd": "원문 .md",
    "view.toc": "목차",
    "view.connected": "연결된 노트 {n}",
    "view.showRest": "나머지 {n}개 보기",
    "view.links": "연결 {n}",
    "view.notFound": "노트를 찾을 수 없습니다",
    "view.notFoundHint": "카탈로그에서 찾기",
    "view.backToGraph": "그래프로 돌아가기",
    "view.loadFail": "노트를 불러오지 못했습니다",
    "view.deadLink": "대상 노트 없음",

    "about.h": "LLM Wiki",
    "about.lead":
      '시멘트계 고연성·초고성능 복합재료(ECC · SHCC · EGC · UHPC · 지오폴리머) 논문과 교과서를 ' +
      '읽고 한국어로 정리한 연구 지식 베이스입니다. ' +
      '<a href="https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f" target="_blank" rel="noopener">Karpathy LLM Wiki 패턴</a>을 ' +
      '따르며, 각 노트는 <code>[[위키링크]]</code>로 서로 연결되어 하나의 네트워크를 이룹니다.',
    "about.lead2":
      "이 사이트는 그 위키를 읽기 위한 정적 대시보드입니다. 노트 원본은 <code>wiki/</code> 아래 " +
      "마크다운 그대로 들어 있고, 화면에 보이는 모든 내용은 그 파일에서 실시간으로 렌더링됩니다. " +
      "원본 PDF는 저작권 문제로 저장소에 포함하지 않았습니다 — 각 노트의 서지정보와 DOI 링크로 " +
      "원문을 찾을 수 있습니다.",
    "about.credit":
      "<b>전남대학교 건축토목공학과(건축학부) 건설재료연구실</b>에서 제작했습니다.",
    "about.howTitle": "이 사이트 사용법",
    "about.howGraph":
      "<b>그래프</b> — 노트 전체의 인용 네트워크. 드래그로 이동, 휠로 확대, 노드를 클릭하면 " +
      "오른쪽에 상세 정보가 뜨고 <b>더블클릭하면 노트가 새 탭에서 열립니다.</b> " +
      "연결 수 슬라이더를 올리면 허브만 남아 뼈대가 보입니다.",
    "about.howCatalog": "<b>카탈로그</b> — 전체 목록을 제목·태그·저널·요약으로 검색하고 연도나 연결 수로 정렬합니다.",
    "about.howConcepts": "<b>개념</b> — 처음 읽는 사람을 위한 진입로. 추천 읽기 순서와 핵심 개념 카드가 있습니다.",
    "about.agentsSummary": "위키 운영 규칙 (AGENTS.md) — 에이전트가 이 위키를 어떻게 쓰고 갱신하는가",
    "about.manualLoading": "매뉴얼 불러오는 중…",
    "about.docFail": "{path} 를 불러오지 못했습니다 ({err}).",

    "fact.notes": "노트",
    "fact.links": "노트 간 연결",
    "fact.concepts": "핵심 개념",
    "fact.papers": "논문 노트",
    "fact.refs": "교과서·표준",
    "fact.tags": "태그",
    "fact.years": "발행 연도",

    "order.pseudo-strain-hardening-criteria": "ECC가 왜 유연한지의 원리",
    "order.strain-hardening-mechanism": "인장 변형경화 메커니즘",
    "order.multiple-cracking-behavior": "미세 균열이 여러 개 생기는 이유",
    "order.fiber-bridging-constitutive-law": "섬유가 균열을 잡아주는 법칙",
    "order.crack-width-control": "균열폭이 좁으면 좋은 점",

    "topic.self-healing-ecc": "자기치유",
    "topic.impact-and-blast-resistance-frcc": "내충격·방폭",
    "topic.lunar-isru-materials": "달 기지 건설",
    "topic.3d-printable-ecc": "3D 프린팅",
    "topic.alkali-activated-materials": "지오폴리머",
    "topic.sustainability-low-carbon-binders": "저탄소·지속가능성",

    "lang.other": "English",
    "lang.switch": "영어판으로 전환",
    "view.altMissing": "이 노트는 아직 한국어판에만 있습니다.",
  },

  en: {
    "site.title": "LLM Wiki — Cementitious Composites Knowledge Graph",
    "site.count": "{n} notes · {m} links",
    "site.lab": "<b>Construction Materials Lab</b> · Department of Architecture and Civil Engineering, Chonnam National University",

    "nav.graph": "Graph",
    "nav.catalog": "Catalog",
    "nav.concepts": "Concepts",
    "nav.about": "About",

    "sub.graph": "Citation network across every note — double-click a node to open it",
    "sub.catalog": "Full catalog — search titles, tags, journals and summaries",
    "sub.concepts": "Core concepts — the best way into the wiki",
    "sub.about": "What this wiki is and how it was built",
    "sub.viewer": "Note viewer",

    "type.concept": "Concept",
    "type.source_note": "Paper",
    "type.reference_book": "Reference",
    "type.overview": "Overview",

    "graph.search": "Search title or slug",
    "graph.hits": "{n}",
    "graph.degree": "links ≥",
    "graph.neighbours": "Neighbours",
    "graph.fit": "Fit to screen",
    "graph.tagsAll": "All tags ({n})",
    "graph.detailEmpty": "Click a node to see its details and connected notes here.",
    "graph.links": "{n} links",
    "graph.open": "Open note ↗",
    "graph.connected": "Connected notes ({n})",
    "graph.andMore": "and {n} more",
    "graph.tip": "click = select · double-click = open note",

    "cat.search": "Search title · tag · journal · summary",
    "cat.typesAll": "All types",
    "cat.yearsAll": "All years",
    "cat.reset": "Reset",
    "cat.count": "{n} notes",
    "cat.colType": "Type",
    "cat.colTitle": "Title",
    "cat.colYear": "Year",
    "cat.colJournal": "Journal",
    "cat.colLinks": "Links",
    "cat.empty": "No notes match these filters.",
    "cat.prev": "Previous",
    "cat.next": "Next",

    "con.orderTitle": "New here? Read in this order",
    "con.topicsTitle": "Or start from a topic",
    "con.cardsTitle": "{n} core concepts — most cited first",
    "con.cardsNote": "Concept notes are the hubs of this wiki. Individual paper notes link toward them.",
    "con.linkedCount": "<b>{n}</b> notes linked",
    "con.inGraph": "View in graph →",
    "con.topicLinked": "{n} notes linked",

    "view.loading": "Loading…",
    "view.source": "Source",
    "view.noPdf": "(the original PDF is not included in this repository)",
    "view.doi": "DOI ↗",
    "view.inGraph": "View in graph",
    "view.rawMd": "Raw .md",
    "view.toc": "Contents",
    "view.connected": "Connected notes ({n})",
    "view.showRest": "Show {n} more",
    "view.links": "{n} links",
    "view.notFound": "Note not found",
    "view.notFoundHint": "Find it in the catalog",
    "view.backToGraph": "Back to the graph",
    "view.loadFail": "Could not load this note",
    "view.deadLink": "no such note",

    "about.h": "LLM Wiki",
    "about.lead":
      "A research knowledge base of papers and textbooks on high-ductility and " +
      "ultra-high-performance cementitious composites (ECC · SHCC · EGC · UHPC · geopolymers). " +
      'It follows the <a href="https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f" target="_blank" rel="noopener">Karpathy LLM Wiki pattern</a>; ' +
      "every note is joined to the others by <code>[[wikilinks]]</code>, forming a single network.",
    "about.lead2":
      "This site is a static dashboard for reading that wiki. The notes live under " +
      "<code>wiki/</code> as plain markdown, and everything you see is rendered from those " +
      "files at read time. Original PDFs are excluded for copyright reasons — each note " +
      "carries its full citation and a DOI link to the source.",
    "about.credit":
      "Built by the <b>Construction Materials Lab</b>, School of Architecture, " +
      "Department of Architecture and Civil Engineering, <b>Chonnam National University</b>.",
    "about.howTitle": "How to use this site",
    "about.howGraph":
      "<b>Graph</b> — the citation network across every note. Drag to pan, scroll to zoom, " +
      "click a node for details on the right, and <b>double-click to open the note in a new tab.</b> " +
      "Raise the link-count slider to strip the graph back to its hubs.",
    "about.howCatalog": "<b>Catalog</b> — search the full list by title, tag, journal or summary, and sort by year or link count.",
    "about.howConcepts": "<b>Concepts</b> — the entry point for newcomers: a recommended reading order and cards for each core concept.",
    "about.agentsSummary": "Operating rules (AGENTS.md) — how agents read and extend this wiki",
    "about.manualLoading": "Loading the manual…",
    "about.docFail": "Could not load {path} ({err}).",

    "fact.notes": "notes",
    "fact.links": "links between notes",
    "fact.concepts": "core concepts",
    "fact.papers": "paper notes",
    "fact.refs": "textbooks & standards",
    "fact.tags": "tags",
    "fact.years": "publication years",

    "order.pseudo-strain-hardening-criteria": "why ECC can deform like a ductile metal",
    "order.strain-hardening-mechanism": "the tensile strain-hardening mechanism",
    "order.multiple-cracking-behavior": "why many fine cracks form instead of one large one",
    "order.fiber-bridging-constitutive-law": "how fibers bridge a crack (the σ–δ law)",
    "order.crack-width-control": "why tight crack widths matter",

    "topic.self-healing-ecc": "Self-healing",
    "topic.impact-and-blast-resistance-frcc": "Impact & blast",
    "topic.lunar-isru-materials": "Lunar construction",
    "topic.3d-printable-ecc": "3D printing",
    "topic.alkali-activated-materials": "Geopolymers",
    "topic.sustainability-low-carbon-binders": "Low-carbon & sustainability",

    "lang.other": "한국어",
    "lang.switch": "Switch to the Korean edition",
    "view.altMissing": "This note may exist only in the Korean edition.",
  },
};

let lang = "ko";

export function setLang(code) {
  if (STRINGS[code]) lang = code;
  document.documentElement.lang = lang;
}

export function t(key, vars) {
  let s = STRINGS[lang][key] ?? STRINGS.ko[key] ?? key;
  if (vars) {
    for (const [k, v] of Object.entries(vars)) s = s.replaceAll(`{${k}}`, v);
  }
  return s;
}

export const getLang = () => lang;

/** Fill any static markup tagged with data-i18n attributes. */
export function applyStatic(root = document) {
  root.querySelectorAll("[data-i18n]").forEach((n) => { n.textContent = t(n.dataset.i18n); });
  root.querySelectorAll("[data-i18n-html]").forEach((n) => { n.innerHTML = t(n.dataset.i18nHtml); });
  root.querySelectorAll("[data-i18n-ph]").forEach((n) => { n.placeholder = t(n.dataset.i18nPh); });
  root.querySelectorAll("[data-i18n-title]").forEach((n) => { n.title = t(n.dataset.i18nTitle); });
}
