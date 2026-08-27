# LLM Wiki — 시멘트계 복합재료 지식 그래프

시멘트계 고연성·초고성능 복합재료(ECC · SHCC · EGC · UHPC · 지오폴리머) 논문과 교과서를
읽고 한국어로 정리한 연구 지식 베이스, 그리고 그것을 읽기 위한 정적 대시보드.

**→ https://ekvm80.github.io/llm-wiki/**

| | |
|---|---|
| 노트 | **975** (핵심 개념 23 · 논문 861 · 교과서/표준 90 · 종합 1) |
| 노트 간 연결 | **3,447** |
| 발행 연도 | 1964 – 2026 |
| 태그 | 3,285종 |

[Karpathy LLM Wiki 패턴](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)을
따르며, 각 노트는 `[[위키링크]]`로 서로 연결되어 하나의 네트워크를 이룬다.

## 페이지

| 페이지 | 내용 |
|---|---|
| `index.html` | 975개 노트 전체의 인용 네트워크 (Canvas force graph) |
| `catalog.html` | 전체 목록 — 제목·태그·저널·요약 검색, 연도/연결 수 정렬 |
| `concepts.html` | 핵심 개념 23개 + 입문자용 추천 읽기 순서 |
| `about.html` | 위키 설명 (MANUAL.md / AGENTS.md 렌더링) |
| `viewer.html?note=<slug>` | 노트 뷰어 — 마크다운을 클라이언트에서 렌더링 |

## 구조

```
wiki/          노트 원본 마크다운 975개 (단일 원본)
data/          graph.json (노드·엣지·좌표) · catalog.json (검색용 텍스트)
assets/        페이지별 JS + 공통 CSS
vendor/        d3 7.9 · marked 12 · KaTeX 0.16 (woff2만)
docs/          MANUAL.md · AGENTS.md · NOTE_QUALITY_STANDARD.md
tools/         build.py · layout.mjs
```

노트는 마크다운 그대로 배포되고 뷰어가 실시간으로 렌더링한다. 사전 렌더된 HTML 사본이
없으므로 노트를 고치면 그대로 사이트에 반영된다.

## 다시 빌드하기

```bash
sh tools/build.sh               # 위키를 읽어 wiki/ 복사 + data/*.json + 레이아웃 좌표
python3 -m http.server 8000     # http://localhost:8000 에서 확인
```

`build.py --strict` 는 깨진 위키링크·중복 slug·수식 불균형이 있으면 0이 아닌 코드로 종료한다.

로컬 확인은 반드시 HTTP로 해야 한다. `file://` 로 열면 뷰어의 `fetch()` 가 CORS로 막힌다.

## 알려진 사항

- **원본 PDF는 포함하지 않는다.** 4.1 GB이고 출판사 저작물이다. 각 노트의 서지정보와
  DOI 링크로 원문을 찾을 수 있다.
- `.nojekyll` 은 필수다. 없으면 Jekyll이 frontmatter 있는 `.md` 를 `.html` 로 변환해
  뷰어의 `fetch()` 가 전부 404가 난다.
- 노트 2개(`du-2023-silicon-carbide-fineness-cement-composites`,
  `choi-2015-basalt-fiber-reinforcing-engineering-properties`)에 ingest 당시
  셸 확장으로 생긴 수식 손상이 남아 있다. 사이트는 정상 렌더되지만 해당 수식만 깨져 보인다.
- `udd-1996-fiber-optic-smart-structures` 는 `papers/` 와 `references/` 에 중복 존재해
  빌드가 내용이 많은 쪽(`papers/`)을 채택한다. `tools/build_report.txt` 참조.
