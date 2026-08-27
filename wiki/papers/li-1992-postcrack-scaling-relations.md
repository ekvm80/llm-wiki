---
title: "Postcrack Scaling Relations for Fiber Reinforced Cementitious Composites (Li, 1992)"
type: source_note
source: "sources/Post-Crack Scaling Relations for Fiber-Reinfor.pdf"
citation: "Li, V.C. Postcrack scaling relations for fiber reinforced cementitious composites. Journal of Materials in Civil Engineering 4(1) (1992) 41-53. Paper No. 1174."
date: 2026-08-22
tags: [frcc, fiber-bridging, postcrack-strength, fracture-energy, snubbing, scaling-law, pullout, micromechanics, classic, scan-ocr]
---

# FRC의 균열후 스케일링 관계 (Li 1992)

## Summary

무작위 배향 불연속 유연 섬유로 보강된 시멘트계 복합재(FRCC)의 가교 메커니즘에 대해 균열 전(prepeak)과 균열 후(postpeak) 응력-변위(σ-δ) 관계를 닫힌형으로 유도하고, 균열후강도와 파괴에너지가 미시역학 파라미터(snubbing 계수, 섬유 직경·아스펙트비·부피비, 계면 결합강도)에 대해 어떻게 스케일링하는지 밝힌 이론 논문. 강섬유(Visalvanich-Naaman 데이터)와 고분자 섬유 Spectra PE(Wang et al. 데이터) 실험값이 스케일링 법칙과 잘 일치함을 보여, ECC 브리징 구성법칙 계보의 원전 중 하나가 되었다. 스캔본이라 OCR로 전문 확보.

## Key Contributions

1. 균열후강도 스케일링 법칙(Eq. 9): σ_pc = gτV_f(L_f/d_f)/2. 보강지수 2V_f(L_f/d_f)에 대한 직선 관계이고 기울기가 snubbing 인자 g이다. g=1인 특수 경우는 Aveston et al. (1974) 결과와 일치. 강섬유/모르타르 데이터는 f≈1.0, Spectra PE/보통 및 고강도 모르타르는 f≈0.55로 잘 설명됨.
2. 파괴에너지 스케일링 법칙(Eq. 11): G_c = gτV_f L_f²/12 — 섬유 길이의 제곱에 비례. 탈결합 구간 에너지(Eq. 12)는 postpeak 인발 에너지의 δ* 비율 수준으로 무시 가능. 무작위 배향은 정렬 섬유 대비 파괴에너지를 절반으로 줄임(g=1일 때 factor of 2, Cooper-Kelly 대조).
3. postpeak 곡선의 형태(Eq. 7): σ(δ) ∝ g(1 - δ/(L_f/2))² 의 (1-δ̃)² 의존성을 개별 섬유 슬립 기여의 적분에서 이론적으로 유도. Visalvanich-Naaman(1982)의 준경험식(Eq. 8)과 Wecharatana-Shah(1983)의 경험적 피팅이 같은 (1-δ̃)² 형태에 도달했음을 지적하고, 경험계수 α를 g/2로 명시적으로 해석.
4. snubbing 효과의 정량화: 경사각 φ 섬유의 인발 하중 증폭 P(δ;φ) = P(δ)e^{fφ}(Eq. 3, Morton-Groves 제안). snubbing 인자 g는 f가 0→1일 때 1→2.32. 실험값: 나일론 f≈0.7, 폴리프로필렌 f≈0.9. gτ는 사실상 '유효 결합강도'로서 균열후강도와 파괴에너지를 동시에 증폭하는 승법(multiplicative) 효과.
5. 최적 섬유길이와 트레이드오프(Eq. 13-14): gt(=gτ)는 균열후강도와 최적 파괴에너지 사이의 트레이드오프 파라미터 — PSH용으로 균열후강도를 높이면 섬유 파단이 늘어 최적 파괴에너지는 감소. 또한 균열후강도는 섬유 직경 d_f에 반비례, 최적 파괴에너지는 d_f에 정비례하므로 PSH에는 가는 섬유, 에너지 흡수에는 굵은 섬유가 유리.
6. 측정상 주의사항: 첫균열강도가 σ_pc보다 큰 시스템(저 부피비 강섬유 FRCC 등)에서는 실측 postcrack strength가 진값의 하한(lower bound)일 수 있음(Fig. 9-10의 3단계 파괴 시나리오 해석).

## Methods

- 단일섬유 인발 해석: 마찰결합 τ를 일정으로 두고 탄성결합은 무시. 탈결합(마찰 슬립 활성화) 구간 Eq. 1: P = πd_f τℓδ/δ_b(선형 상승), 완전 탈결합 후 인발 구간 Eq. 2: P = πd_f τ(1 - δ/ℓ)(선형 하강). 선형화 근거를 Appendix I에서 (ℓ/d_f)/(E_f/τ) << 1 조건과 함께 검증(오차 1 % 미만).
- 복합재 σ-δ 곡선(Eq. 4): 균열면을 교차하는 섬유만의 기여를 배향각 분포 p(φ)=sinφ와 중심거리 분포 p(z)=2/L_f에 대해 적분(Li-Wang-Backer 1991 JMPS 모델의 통합). Appendix II-III에서 prepeak/postpeak 닫힌형 유도.
- 검증 데이터: (i) Visalvanich-Naaman(1982) 강섬유 모르타르 5계열(V_f 0.5~1 %, L_f/d_f 42~83), 각 점 5회 이상 반복; (ii) Wang et al.(1990) Spectra PE 섬유(고탄성 PE) 보통/고강도 모르타르(V_f 0.6 %, L_f/d_f 168). τ 정규화 값은 강/모르타르 4 MPa, spectra/모르타르 1 MPa.

## Results

- 균열후강도-보강지수 플롯(Fig. 4): 강섬유는 f≈1.0 직선 위에, Spectra 계열은 f≈0.55 직선 위에 정렬. nylon 직접인발 한계 데이터는 고강도 모르타르에서 f가 더 큰 경향.
- postpeak σ-δ 곡선(Fig. 5-6): 이론곡선(Eq. 7)이 강섬유·Spectra 모두의 실험 평균곡선과 잘 일치.
- 정규화 파괴에너지-Fig. 7(강섬유, aspect ratio 축)과 Fig. 8(log-log, 기울기 2 확인): G_c ∝ (L_f/d_f)² 스케일링 검증.
- 한계 명시: 섬유 소성 굽힘, 매트릭스 spalling, slip 의존 계면 전단저항은 미반영 — 그럼에도 주요 물리를 담아 FRCC 인장 물성 엔지니어링 설계에 충분.

## Related Notes

- [[fiber-bridging-constitutive-law]] — 본 논문의 σ(δ) 닫힌형이 통합되는 구성법칙 페이지
- [[pseudo-strain-hardening-criteria]] — σ_pc가 PSH 강도 기준(σ_0 ≥ σ_c)의 핵심 입력값
- [[li-wu-1992-psh-conditions]] — 같은 해의 PSH 조건 이론(App Mech Rev); 본 논문은 그 재료 파라미터 스케일링 편
- [[morton-1976-effect-metal-wires-fracture-brittle-matrix-composites]] — snubbing 개념의 실험적 원전(본 논문 Eq. 3의 출처)
- [[lin-1999-interface-property-characterization]] — 계면 3파라미터(G_d·τ_0·β)를 포함한 σ(δ)로 확장한 후속 이론
- [[kanda-2006-saturated-psh-design-criteria-ecc]] — 본 스케일링식을 PSH 성능지수 설계 프레임으로 발전한 후속
- [[li-2023-ecc-micromechanics-critical-review]] — 리뷰가 추적하는 브리징 모델 계보의 초기 노드

## 비고

- 스캔본 OCR 전문 사용. 수식 상수·첨자 일부 판독 왜곡 가능(Eq. 7-8 우변 배열 등) — 정밀 인용 시 원본 PDF 대조 권장.

