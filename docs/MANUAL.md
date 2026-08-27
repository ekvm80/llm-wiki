# LLM Wiki 사용자 매뉴얼

이 문서는 LLM Wiki(`~/Documents/Research_Knowledge/llm_wiki/`)를 처음 사용하는 사람을 위한 안내서입니다.

---

## 1. 이 위키는 무엇인가?

시멘트계 복합재료(ECC·SHCC·UHPC·지오폴리머 등) 연구 논문 907편을 읽고 정리한 지식 베이스입니다. 총 **985개 노트**로 구성되어 있습니다.

| 폴더 | 내용 | 노트 수 |
|---|---|---|
| `wiki/concepts/` | 핵심 개념 설명 (변형경화, 다중균열 등) | 23 |
| `wiki/papers/` | 개별 논문 요약 노트 | 876 |
| `wiki/references/` | 교과서·보고서·학위논문 요약 | 86 |
| `wiki/index.md` | 전체 카탈로그 (어떤 노트가 있는지 한눈에) | — |
| `wiki/log.md` | 작업 이력 (언제 무엇을 했는지) | — |

---

## 2. 처음 시작하는 방법

### 2.1 관심 주제를 찾는 방법

**방법 1: index.md 열기**

`wiki/index.md`를 열면 모든 노트가 주제별로 분류되어 있습니다. Ctrl+F(또는 Cmd+F)로 키워드를 검색하세요.

예: "self-healing"을 검색하면 자기치유 관련 노트 목록이 나타납니다.

**방법 2: concepts/ 폴더부터 읽기**

핵심 개념 23개가 정리되어 있습니다. 초보자에게 권장하는 읽기 순서:

1. `pseudo-strain-hardening-criteria.md` — ECC가 왜 유연한지의 원리
2. `strain-hardening-mechanism.md` — 인장 변형경화 메커니즘
3. `multiple-cracking-behavior.md` — 미세 균열이 여러 개 생기는 이유
4. `fiber-bridging-constitutive-law.md` — 섬유가 균열을 잡아주는 법칙
5. `crack-width-control.md` — 균열폭이 좁으면 좋은 점

이후 관심 주제별로:
- 자기치유 → `self-healing-ecc.md`
- 내충격 → `impact-and-blast-resistance-frcc.md`
- 달 기지 건설 → `lunar-isru-materials.md`
- 3D 프린팅 → `3d-printable-ecc.md`

**방법 3: AI 에이전트(Hermes 등)에게 질문하기**

"위키에서 자기치유 관련 논문 찾아줘"라고 하면 관련 노트를 검색해 요약해 줍니다.

### 2.2 노트 파일 읽는 방법

각 노트(.md 파일)는 다음 구조로 되어 있습니다:

```
---
title: "논문 제목 (저자, 연도)"     ← 제목
type: source_note                   ← 노트 종류
source: "sources/원본PDF파일명.pdf" ← 원본 위치
citation: "저자. 제목. 학술지, 권(호), 페이지. doi"
date: 작성일
tags: [키워드1, 키워드2, ...]
---

# 한 줄 제목

## Summary          ← 무슨 연구인지 1문단 요약
## Key Contributions ← 핵심 발견 3~6개 (수치 포함)
## Methods           ← 어떻게 실험했는지
## Results           ← 결과 수치와 표
## Related Notes     ← 관련된 다른 노트 링크
```

**빠르게 훑으려면**: Summary만 읽어도 충분합니다.
**깊이 이해하려면**: Key Contributions → Methods → Results 순으로 읽으세요.

### 2.3 [[링크]] 따라가기

노트 안에 `[[다른-노트-이름]]` 형태의 링크가 있습니다. Obsidian 같은 마크다운 편집기에서 클릭하면 해당 노트로 바로 이동합니다.

예: `pseudo-strain-hardening-criteria` 노트에서 `[["fiber-bridging-constitutive-law"]]`를 클릭하면 브리징 법칙 노트로 이동합니다.

---

## 3. 주요 주제 가이드

### 3.1 ECC/SHCC 기초
- 핵심 개념: `pseudo-strain-hardening-criteria`, `multiple-cracking-behavior`, `fiber-bridging-constitutive-law`
- 대표 논문: `li-2003-ecc-review-jact`(총론), `li-wu-1992-psh-conditions`(이론 원전)

### 3.2 고강도·고연성 계보
- `ranade-2013-hshdc-micromechanics` → `yu-2014-uhpecc-pe-fibers` → `nguyen-2021-ud-egc-13-7-percent`
- 핵심 개념: `uhpc-vs-ecc-design-space`, `high-strength-strain-hardening-composites`

### 3.3 자기치유(Self-Healing)
- 핵심 개념: `self-healing-ecc`, `crack-width-control`
- 대표 논문: `yang-2011-autogenous-healing-early-age`(원전), `park-2022-pe-pva-hybrid-healing-comparison`(환경 비교)

### 3.4 지오폴리머·알칼리 활성(AAS/AAF)
- 핵심 개념: `alkali-activated-materials`, `one-part-shgc`, `fly-ash-ggbs-binary-system`
- 대표 논문: `nematollahi-2017-one-part-pe-shgc-micromechanics`, `choi-2020-aas-shcc-micromechanics`

### 3.5 내충격·방탄
- 핵심 개념: `impact-and-blast-resistance-frcc`
- 대표 논문: `chun-2024-rc-beams-impact-resistance-hpfrcc`, `yankelevsky-1997-slab-missile-impact`

### 3.6 달 기지·우주 건설
- 핵심 개념: `lunar-isru-materials`
- 참고문헌: `heiken-1991-lunar-sourcebook`, `benaroya-lunar-base-engineering-series`
- 대표 논문: `cesaretti-2014-lunar-soil-3d-printing`

### 3.7 지속가능성·저탄소
- 핵심 개념: `sustainability-low-carbon-binders`, `fly-ash-ggbs-binary-system`
- 대표 논문: `scrivener-2016-unep-eco-efficient-cements`, `lee-2019-cfbc-ash-slag-cement`

### 3.8 NDT·구조건강모니터링(SHM)
- 핵심 개념: `ndt-and-shm-of-cementitious`
- 대표 논문: `kim-2007-fbg-smart-tendon`, `tran-2018-pulsed-thermography-defects`

### 3.9 3D 프린팅
- 핵심 개념: `3d-printable-ecc`
- 대표 논문: `zhu-2019-3dp-ecc-ultra-high-ductility`, `cesaretti-2014-lunar-soil-3d-printing`

---

## 4. 원본 PDF 찾는 방법

각 노트의 frontmatter `source:` 필드에 원본 PDF 위치가 적혀 있습니다.

```
source: "sources/Li - 2003 - On Engineered Cementitious Composites.pdf"
```

→ `~/Documents/Research_Knowledge/llm_wiki/sources/` 폴더에서 해당 파일을 열면 됩니다.

---

## 5. 자주 묻는 질문

**Q: 노트 품질은 어떻게 유지되나요?**
A: `wiki/NOTE_QUALITY_STANDARD.md`에 충실도 3단계([심독]/[표준]/[간략])·필수 5섹션·문체 규약이 정의돼 있고, 새 논문 ingest 시마다 이 기준으로 작성·검증됩니다.

**Q: 노트가 왜 한국어인가요?**
A: 이 위키는 한국어 사용자(연구실 구성원)를 위해 만들어졌습니다. 논문 원문은 영어이지만 요약은 한국어로 작성됐습니다.

**Q: sources/ 폴더의 PDF를 수정해도 되나요?**
A: 안 됩니다. 원본은 절대 수정·삭제하지 마세요. 오탈자가 있어도 그대로 두세요.

**Q: 새 논문을 추가하고 싶은데 어떻게 하나요?**
A: PDF를 `sources/` 폴더에 넣고 AI 에이전트에게 "이 논문 ingest 해줘"라고 요청하면 됩니다. 에이전트가 읽고 노트를 만들어 index와 장부를 갱신합니다.

**Q: 노트 간 링크가 깨진 것 같은데 어떻게 확인하나요?**
A: AI 에이전트에게 "위키 lint 해줘"라고 요청하면 끊긴 링크·고아 노트·한자 오염을 전수 검사하고 수정합니다.

**Q: Obsidian에서 이 위키를 열어도 되나요?**
A: 네. `wiki/` 폴더를 Obsidian Vault로 열면 `[[링크]]`가 클릭 가능한 백링크로 작동합니다. 그래프 뷰로 노트 간 관계를 시각화할 수도 있습니다.

---

## 6. 용어 사전 (초보자용)

| 용어 | 의미 |
|---|---|
| ECC | Engineered Cementitious Composites — 설계된 시멘트 복합재 |
| SHCC | Strain-Hardening Cementitious Composites — 변형경화 시멘트 복합재 (ECC와 동의어) |
| UHPC/UHPFRC | 초고성능 콘크리트/섬유보강 콘크리트 (압축 ≥120 MPa) |
| PSH | Pseudo Strain-Hardening — 의사 변형경화 (ECC의 핵심 특성) |
| AAS/AAF | 알칼리 활성 슬래그/플라이애시 — 시멘트 없는 결합재 |
| EGC | Engineered Geopolymer Composites — 지오폴리머 기반 ECC |
| HSHDC | High-Strength High-Ductility Concrete — 고강도 고연성 콘크리트 |
| J′_b / J_tip | 브리징 보완에너지 / 균열 팁 에너지 — PSH 성능지수의 두 축 |
| ISRU | In-Situ Resource Utilization — 현지 자원 활용 (달·화성) |
| MSI | Material Sustainability Indicator — 재료 지속가능성 지표 |
| PCM | Phase Change Material — 상변화물질 (열저장) |
| FBG | Fiber Bragg Grating — 광섬유 변형률 센서 |

---

*이 매뉴얼은 wiki/ 폴더 안에 두고 언제든 참조하세요.*
