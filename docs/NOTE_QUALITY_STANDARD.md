# LLM Wiki 노트 품질 기준 (Note Quality Standard)

이 문서는 새 PDF를 ingest할 때 위키 노트의 품질이 일정 수준 이상으로 유지되도록 하는 단일 기준 문서입니다.
작업 전 반드시 본 문서를 읽고, 작업 중 수시로 참조합니다.

- 버전: 1.0 (2026-08-24)
- 적용 범위: `wiki/papers/`, `wiki/references/`, `wiki/concepts/`에 생성·수정되는 모든 노트
- 상위 규칙: `AGENTS.md`(스키마) → 본 문서(품질) 순. 충돌 시 AGENTS.md가 우선.

---

## 1. 충실도 3단계 등급

모든 논문은 아래 3단계 중 하나로 작성합니다. **등급 판정은 노트 작성 전에 한다.**

| 등급 | 분량 목표 | 적용 대상 |
|---|---|---|
| [심독] Deep-Read | 5~11 KB | 사용자 그룹 논문(DJP/IJP·이방연 공저), 이론 원전, 계보를 여는 고전, 랜드마크 리뷰 |
| [표준] Standard | 2.5~4 KB | 일반 연구논문 (기본값 — 애매하면 무조건 표준 이상) |
| [간략] Brief | 0.8~2 KB | 교과서·학위논문·표준·보고서 등 references형 전용 |

**판단 불명확 시 상향한다.** 얇게 쓰고 넘어가는 것이 최악의 실패다.

### 등급별 실물 예시 (이 위키의 실제 노트)

| 등급 | 예시 파일 |
|---|---|
| [심독] | `papers/chun-2024-rc-beams-impact-resistance-hpfrcc.md` (10.5 KB), `papers/choi-2021-fiber-hybridization-aas-healing.md` (11.6 KB) |
| [표준] | `papers/park-2022-pe-pva-hybrid-healing-comparison.md` (3.5 KB), `papers/lao-2022-seawater-sea-sand-egc.md` (3.6 KB) |
| [간략] | `references/aci-544-1r-96-frc-report.md` (2.5 KB), `references/afgc-2013-uhpfrc-recommendations.md` (1.2 KB) |

---

## 2. 필수 구조 (5섹션)

논문 노트는 반드시 다음 5개 섹션을 모두 포함한다:

```
---
title: "논문 제목 (저자, 연도)"
type: source_note
source: "sources/원본파일명.pdf"
citation: "저자. 제목. 학술지 권(호) (연도) 페이지. doi: ..."
date: YYYY-MM-DD
tags: [키워드, ...]
---

# 한 줄 제목

## Summary
## Key Contributions
## Methods
## Results
## Related Notes
```

frontmatter 결측 = 배치 종료 조건 위반. `batch_close_check.py`가 잡아낸다.

---

## 3. 섹션별 작성 요구사항

### 3.1 Summary
- 연구 목적 + 방법 + 핵심 정량 결과 + 결론을 1문단(3~6문장)으로 압축.
- **반드시 주요 수치를 포함**: 강도(MPa)·변형률능(%)·배합 치환율(%) 등.
- 나쁜 예: "이 연구는 ECC의 인장 거동을 평가했다." (수치 없음)
- 좋은 예: "PE 섬유 2 vol % 혼입 ECC는 인장강도 8.5 MPa·변형률능 7.5 %를 달성해 대조(PVA-ECC 4.9 %) 대비 1.5배 연성을 확보했다."

### 3.2 Key Contributions (3~6개)
- 각 항목 = **메커니즘 해석 + 정량 근거** 세트.
- 나쁜 예: "연성이 향상됐다."
- 좋은 예: "균열폭이 100 µm→59.8 µm로 감소해 자기치유 임계(100 µm) 이내로 유지된다."
- 번호 매기기(1., 2., ...) 필수.

### 3.3 Methods
[심독]은 다음을 모두 기록:
- 배합 비: 결합재(W/B)·부산물 치환율·SP 함량
- 섬유 스펙: 종류·재질·직경(µm)·길이(mm)·체적률(vol %)·표면 처리(오일 코팅 % 등)
- 시험체: 치수(mm)·개수·양생 조건
- 시험 방법: 규격(ASTM/JSCE/ISO)·가재 속도·계측기(LVDT/DIC 등)
[표준]은 배합 요약+시험법 1~2줄이라도 필수.

### 3.4 Results
- 소규모 정량 데이터는 마크다운 표로 이식 (배합표·결과표).
- 그래프만 있는 경우 핵심 수치를 본문에서 추출해 기술.
- [심독]은 표 1개 이상 권장.

### 3.5 Related Notes
- 기존 링크는 절대 삭제하지 않는다.
- 새 링크 추가 시 **실존 노트만** (glob/grep으로 확인). 끊긴 링크 = lint 실패.
- 각 링크에 한 줄 관계 설명: `- [[노트명]] — 어떤 관계인지`
- 권장 밀도: 3~7개 (너무 많으면 잡음).

---

## 4. 문체·표기 규약

| 항목 | 규칙 | 예 |
|---|---|---|
| 언어 | 한국어 기본 (요청 시 영어) | |
| 학술 톤 | 건조한 서술, 감탄·추측 금지 | "~나타났다", "~판단된다" |
| 숫자+단위 | 한 칸 공백 | `8 %`, `50 µm`, `36.8 MPa` |
| 각도°만 붙임 | | `20 °C`는 공백, `90°`는 붙임 |
| em-dash(—) | 금지. 쉼표·괄호로 대체 | |
| 한자 | 금지. 한국어 한글 표기 | 华南(X) → 화남(O) |
| 사람 주어 | 영문 스타일 금지 | "저자들은...(X)" |
| AI 상투어 | 금지 | "놀랍게도", "주목할 만하게" |

---

## 5. Ingest 절차 체크리스트 (편마다)

```
[ ] 1. sources/에서 미처리 PDF 확인 (장부 _ingest_progress.json에서 pending)
[ ] 2. pypdf 전문 추출 → /tmp/batch<이름>_<slug>.txt 저장
      - 스캔본: fitz(dpi=150)+tesseract OCR
      - subprocess text=True 절대 금지 / tempfile.mkdtemp() 실경로 사용
      - heredoc(python3 - << EOF) 금지 → write_file 후 python3 실행
[ ] 3. 추출물 처음부터 끝까지 직접 읽기 (표만 보고 쓰기 금지)
[ ] 4. 등급 판정 ([심독]/[표준]/[간략]) — 애매하면 상향
[ ] 5. 본문에서 서지 확정 (파일명 거짓말 대응 — 실제 저자·제목·연도·학술지·doi)
      - 파일명과 본문이 다르면 본문 우선
[ ] 6. 5섹션 노트 작성 (§3 요구사항 충족)
[ ] 7. Related Notes 링크 실존 확인
[ ] 8. 크기 확인: 심독 ≥5000B, 표준 ≥2500B, 간략 ≥800B
[ ] 9. batch_close_check.py --notes <노트> --pdf <PDF> → ALL OK 확인
[ ]10. 장부 done 갱신 (NFD/NFC 주의 — unicodedata.normalize('NFC'))
[ ]11. index.md 해당 카테고리에 한 줄 엔트리 추가
[ ]12. log.md에 append: ## [YYYY-MM-DD] ingest | 내용
```

---

## 6. 특수 상황 처리

### 6.1 중복 사본
md5 완전 동일 파일 발견 시:
- 기존 노트 source 필드에 사본 파일명+md5 보존 기록
- 장부 두 엔트리 모두 done 처리
- 새 노트 만들지 않음

### 6.2 시리즈 논문 (Part 1/2...)
- 초록 대조 후 같은 연구면 통합 노트 1편, 다른 연구면 각각 작성.

### 6.3 국문 논문
- citation에 원제 그대로 기재 가능(외국어 원제 표기는 허용), 본문은 한국어.

### 6.4 참고문헌형 (교과서·학위논문·표준·보고서)
- `wiki/references/`에 작성, [간략] 등급.
- 섹션은 Summary + Related Notes만 허용 (Methods/Results 생략 가능).

### 6.5 개념 페이지
- `wiki/concepts/`에 작성, type: concept.
- 계보 표·핵심 논문 링크·공식 포함 시 가치 급상승.
- 표준 예시: `concepts/fiber-bridging-constitutive-law.md`

---

## 7. 완료 후 자가 검증

배치 종료 전 다음을 확인한다:

1. 모든 신규 노트가 §2 구조 충족 (frontmatter 6키 + 5섹션)
2. 크기 기준 충족 (§1)
3. batch_close_check ALL OK
4. 끊긴 링크 0 (lint 스크립트 실행)
5. 한자 오염 0
6. 장부 pending 감소 확인
7. index/log 갱신 완료

하나라도 실패하면 배치를 닫지 않는다.

---

*이 기준은 ox-alpha 세션에서 검증된 실전 노하우를 집대성한 것. 개선 필요 시 AGENTS.md 워크플로우에 따라 본 문서를 직접 patch한다.*
