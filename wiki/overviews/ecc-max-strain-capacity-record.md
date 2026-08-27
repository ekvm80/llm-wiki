---
title: "ECC/SHCC 최고 인장 변형률능력 계보와 최고 성능 배합 (Wiki Query Synthesis)"
type: overview
source: "wiki/papers 내 변형률능력 계보 노트 원문 대조 검증"
date: 2026-08-24
tags: [strain-capacity, ultra-ductile, record-lineage, pe-fiber, psh, overview]
---

# ECC 가장 우수한 성능은? — 인장 변형률능력 기준 최고 기록 종합

## 질의

"ECC 가장 우수한 성능은?"에 답하기 위해 위키 985노트 중 변형률능력(strain capacity) 축의 신기록 계보 노트를 원문 PDF와 대조 검증하며 정리했다.

## 결론

인장 연성(변형률능력)을 성능 척도로 할 때 이 위키에서 확인되는 최고 기록은 다음과 같다.

**전체 최고: Lương et al. 2023, 알칼리 활성 슬래그 복합체(AASC) 22.34 ± 0.48 %**
- 배합: GGBS 0.90 + Ca(OH)₂ 0.10, 실리카 모래 0.80, 크럼브 러버 0.05(400 µm), PE 섬유 1.75 vol.%(12 µm × 18 mm, 2700 MPa).
- 핵심: 혼합 절차 개선(M1)이 동일 배합의 변형률능력을 9.81 → 22.34 %로 2.3배 증대. 압축강도 53.6 MPa 병행.
- 근거: [[luong-2023-ed-aasc-22-percent]] (sources/IJP7123E_Extremely-ductile AAS_CERI.pdf, Ceramics International 49: 12069-12078)

## 신기록 계보 (모두 PE 섬유계)

| 연도 | 노트 | 매트릭스 | 변형률능력 | 비고 |
| :--- | :--- | :--- | :---: | :--- |
| 2016 | choi-2016-ultra-high-ductile-aas-pe-composite | AAS 무시멘트 | ~7.5 % | 그룹 초기 초고연성 |
| 2019 | nguyen-2019-mechanical-properties-self-healing-slag-composites | AAS 무시멘트 | 8.8 % | 자기치유 병행 |
| 2021 | [[nguyen-2021-ud-egc-13-7-percent]] | FA 지오폴리머 | 13.68 ± 0.85 % | SMP/SH = 1.5 |
| 2022 | [[luong-2021-crumb-rubber-ultra-high-ductile-slag-composites]] | AAS + 크럼브 러버 | 10.7 % | CR 결함 설계 시작 |
| 2023 | [[nguyen-2023-egc-activator-pretreatment]] | FA EGC | **18.62 ± 1.59 %** | 냉각 전처리(CP) |
| 2023 | [[luong-2023-ed-aasc-22-percent]] | AAS 무시멘트 | **22.34 ± 0.48 %** | 전체 최고 |

경쟁 계보(외부 그룹): Lao et al. 2023(Hong Kong PolyU, [[lao-2023-ultra-high-strength-ductility-sh-aasc]])은 강도 축 최고로 압축강도 120.4 MPa에서 ε_u 10.8 %를 동시 달성했다. 연성 단독 최고는 아니지만 강도-연성 곱 관점에서는 최상위이다.

## 시멘트계(OPC) vs 무시멘트

- 시멘트계 고연성 상한은 대략 8~9 % 수준이다. 사용자 그룹 HP-SHCC·URSHCC([[chun-2024-rc-beams-impact-resistance-hpfrcc]], [[chun-2025-strengthening-impact-rc-beams-hpfrcc]])가 9.08 %·6.09 %.
- 이론적 해석은 [[chen-2026-interfacial-bond-pe-fiber-alkali-activated]]가 제공한다: DP형 섬유(UHMWPE 등)만이 완전 마찰 슬립으로 CMOD를 공급해 6~12 % 이상이 가능하고, DR형(강섬유·탄소섬유 등)은 수학적으로 2 % 미만으로 제한된다.
- 따라서 역사적 신기록이 모두 PE/UHMWPE 섬유 + 저인성 매트릭스(AAS·지오폴리머) 조합인 것은 필연이다.

## 연성 극대화의 공통 설계 원리 (PSH)

1. 매트릭스 파괴에너지 최소화: K_m 0.06~0.11 MPa√m, J_tip < 1.3 J/m²(nguyen-2023 Table 6).
2. 첫균열강도 대비 가교 용량 마진 확보: σ₀/σ_fc ≥ 2(chen-2026 임계 마진; zhou-2010 R² = 0.98 실험 상관).
3. 의도적 결함 도입: 크럼브 러버 400 µm(luong-2023), 경량골재·PP 비드(wang-2004-tailoring-preexisting-flaws-ecc)로 c_mc 제어.
4. DP형 미세 직경 고강도 섬유: 12~24 µm PE, V_f = 1.75~2.0 %.
5. 공정 변수도 성능의 일부: 동일 배합에서 혼합 절차만으로 2.3배 차이(luong-2023 M0 vs M1).

## 트레이드오프 주의

- 최고 연성 배합의 평균 균열폭은 199~212 µm로 자기치유 임계(≈100 µm)를 초과한다([[crack-width-control]], [[self-healing-ecc]]). 내구 지향 설계라면 13.7 %(ω_c 136.7 µm)급 또는 PVA계(균열폭 수십 µm)가 실용 선택이다.
- 강도 축과의 상반: nguyen-2023에서 WP 배합은 f_ts 8.72 MPa지만 ε_sc 10.97 %, CP 배합은 f_ts 5.54 MPa에 ε_sc 18.62 %. 목적에 따른 최적점이 다르다.

## 데이터 무결성 기록 (2026-08-24 lint)

원문 대조 검증에서 심독 재작성 산출물 3편의 수치 오염을 발견·정정했다.
- luong-2023: 22.4 %→22.34 ± 0.48 %, 허구의 미시역학 표(K_m 0.28·β 0.92·J'_b/J_tip 26.5 등 원문 무관) 삭제, 서지(Ceramics International 49권) 정정.
- nguyen-2021: citation 권호(123:104183)→122권 104133 정정, 허구의 J'_b/J_tip 15.8·균열수 145개·CO₂ 72 % 등 원문 무관 수치 삭제, UD-EGC 4배합 실측표 이식.
- nguyen-2023: 14.2 %→18.62 ± 1.59 %(CP), 허구의 τ₀ 1.82 MPa·β 0.85·W/B 0.28 등 원문 무관 수치 삭제, WP/CP 실측표 이식.
교훈: 재작성 산출물의 '기념비적' 수사와 수치는 원문과 무관하게 생성될 수 있다. 정량 인용 전 원문 추출물 대조가 필수다.
