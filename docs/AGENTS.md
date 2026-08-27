# LLM Wiki — 운영 규칙 (Schema)

이 저장소는 Karpathy LLM Wiki pattern(https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)을 따르는 연구 지식 베이스다. 도메인: 시멘트계 복합재료(ECC/SHCC/EGC/UHDCC/UHPC), 인장연화·다중균열·섬유브리징 등.

## 3계층 구조

```
llm_wiki/
├── AGENTS.md      ← 이 문서 (schema 계층, 에이전트 진입점)
├── sources/       ← Raw sources. 원본 PDF. 불변, 절대 수정·삭제 금지
├── wiki/          ← Wiki 계층. 에이전트가 읽고 쓰는 Markdown 노트
│   ├── index.md   ← 내용 카탈로그 (자동 갱신 대상)
│   └── log.md     ← append-only 작업 이력
└── (기타 운영 파일은 wiki/ 안에 둔다)
```

- `sources/`의 PDF를 직접 편집·이름변경·삭제하지 않는다.
- `wiki/`만이 에이전트가 쓰는 계층이다. 사람은 읽고 방향을 정한다.

## 워크플로우

### Ingest (원본 처리)

1. `sources/`에서 미처리 PDF 1개를 선택한다(사용자 지정 우선).
2. 원문을 실제로 읽고 요약 노트를 `wiki/`에 만든다. 파일명: `저자소문자-연도-제목슬러그.md`
3. 관련 기존 노트와 상호 링크(`[[파일명]]`)를 걸고, 개념 페이지가 없으면 만든다. 1개 소스가 10~15개 페이지에 손을 댈 수 있다.
4. `wiki/index.md` 카탈로그를 갱신하고, `wiki/log.md` 끝에 한 줄을 추가한다:
   `## [YYYY-MM-DD] ingest | 저자 연도 제목`

### Query (질의)

1. 먼저 `wiki/index.md`에서 관련 페이지를 찾고 필요하면 원문을 더 읽는다.
2. 답변에는 근거 노트(또는 source 파일명)를 명시한다.
3. 비교표·종합 분석처럼 가치 있는 답은 chat에 버리지 말고 `wiki/overviews/` 아래 새 노트로 file-back 한다. 탐험이 축적되어야 위키가 compound한다.
4. 질의도 `wiki/log.md`에 한 줄 기록한다.

### Lint (정기 점검)

사용자가 "위키 점검"을 요청하면: 모순되는 서술, 최신 소스에 대체된 stale claim, inbound 링크 없는 고아 페이지, 페이지 없이 자주 인용되는 핵심 개념, 누락된 상호참조를 찾아 수정하고 결과를 log에 남긴다.

## 노트 품질 기준 (필독)

새 PDF ingest 시 노트 품질은 `wiki/NOTE_QUALITY_STANDARD.md`의 기준을 따른다.
충실도 3단계([심독]/[표준]/[간략])·5섹션 구조·문체 규약·12단계 체크리스트가 정의되어 있다.
작업 전 반드시 해당 문서를 읽고, 완료 판정도 그 문서의 자가 검증 항목으로 한다.

## 노트 컨벤션

- frontmatter 필수 키: `title`, `type`(source_note|concept|overview|synthesis), `source`(sources/ 내 파일명 또는 외부 URL), `date`, `tags`.
- 논문 노트 섹션: Summary / Key Contributions / Methods / Results / Related Notes.
- 학술 표기: 숫자+단위 사이 공백(각도°만 붙임), em-dash 금지, 건조한 서술.
- 한국어 기본. 사용자 요청 시 영어.

## 특수 파일

- `wiki/index.md`: 전체 노트 목록(링크 + 한 줄 요약). 매 ingest 후 갱신. Query 시 가장 먼저 읽음.
- `wiki/log.md`: append-only. 형식 `## [YYYY-MM-DD] <ingest|query|lint|schema> | 제목`. 파싱 가능하게 유지: `grep "^## \[" log.md | tail -5`.

## 금지 사항

- `sources/` 원본 수정·삭제 금지.
- index/log 수동 조작으로 이력 위조 금지(log append는 예외).
- 근거 없는 위키 내용 생성 금지 — 원문을 읽지 않고 요약 노트를 쓰지 않는다.
- 이 시스템과 별개인 ECC Atlas(`~/Documents/Research_Knowledge/ECC_Research_Atlas/`)에는 절대 이 워크플로우로 기록하지 않는다. 두 시스템은 분리 유지.
