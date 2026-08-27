---
title: "Conditions for Pseudo Strain-Hardening in Fiber Reinforced Brittle Matrix Composites (Li & Wu, 1992)"
type: source_note
source: "sources/1st PE_li_condition_for_PSH.pdf"
citation: "Li, V.C., Wu, H.-C. Conditions for pseudo strain-hardening in fiber reinforced brittle matrix composites. Applied Mechanics Reviews 45(8) (1992) 390-398."
date: 2026-08-22
tags: [psh, micromechanics, critical-fiber-volume, steady-state-cracking, fracture-mechanics, design-theory, scan-ocr]
---

# 취성 매트릭스 복합재의 Pseudo Strain-Hardening 조건

## Summary

연속 정렬 섬유(CA)와 불연속 무작위 섬유(DR) 복합재에 대해 pseudo strain-hardening(PSH) 발생 조건을 통일된 파단역학 프레임으로 유도한 이론 논문. Rule of Mixture 기반의 종래 Aveston 임계섬유체적비 개념을 매트릭스 파괴에너지·계면 마찰·섬유 인자로 재구성하고, Spectra PE 섬유/시멘트 페이스트 시스템으로 검증했다. ECC 설계 이론의 원전 문헌이다.

## Key Contributions

1. 임계 브리징 인성비: PSH 필요조건을 G_d/G_tip ≥ 약 10(CA)/약 3(DR) 형태의 브리징 인성-균열선단 인성 비율로 표현(Eq. 14). 이는 [[pseudo-strain-hardening-criteria]]의 에너지 기준 J′_b/J_tip ≥ 1의 엄밀한 원형이며, Kanda-Li 여유 지수 개념의 직접적 선구.
2. 임계섬유체적비의 재정식화: Rule of Mixture 식(Aveston)을 대체하는 Eq. 15 — V_f,crit가 매트릭스 파괴인성 K_m과 계면 마찰 τ, aspect ratio L_f/d_f의 함수. 낮은 K_m·높은 aspect ratio·높은 τ가 저 V_f,crit를 허용. DR 시스템은 CA보다 훨씬 높은 V_f,crit 필요(Spectra 예: CA 0.001 % vs DR 0.3 %; 강섬유 예: CA 0.4 % vs DR 9 %).
3. 보조조건(Eq. 16) 신규 발견: G_d가 V_f에 단조 증가하지 않음(개구량 감소로 마찰 일 감소) → 실해가 존재할 추가 조건. CA에서는 섬유 강도 하한·계면 결합 상한, DR에서는 aspect ratio·결합 하한으로 해석.
4. 과도 균열 크기 c_s와 충분조건: 초기 균열이 c_s 초과일 때 다중균열 보장. K_m^crit(DR 0.188, CA 0.376) 초과 시 PSH 억제 — 고 V_f에서도 오히려 PSH이 억제될 수 있음을 예측.
5. 설계 사례 검증: Spectra PE(d_f 38 μm, L_f 12.7 mm, E 120 GPa)/OPC 페이스트(K_m 0.2 MPa√m)에서 V_f,crit = 0.3 % 예측, 실험으로 확인. V_f > V_f,crit 복합재의 궁극변형률은 미달 복합재 대비 약 220배.

## Methods

파단역학 해석: 응력강도계수 중첩(K_I + K_r = K_tip), 타원 균열 형상 가정, 일반화된 브리징 응력-개구 관계 σ_b(δ)(CA/DR 상수표 Table 1, snubbing factor g 포함). 준정상균열 강도는 과도 크기에서의 첫균열강도 평가(Eq. 19).

## Results

- 첫균열강도 σ_fc는 균열 크기 의존, 준정상균열 강도 σ_ss는 무관 — 두 곡선 교점이 c_s.
- 타원 가정으로 인한 σ_ss 과대평가 약 20 %(수치해석 대비).
- 실험: V_f 0.1 % 취성 파괴 vs 1 % 현저한 연성+다중 아평행 균열.

## Related Notes

- [[li-2023-ecc-micromechanics-critical-review]] 리뷰가 추적한 발전 계보의 출발점 중 하나(Table 1의 1992 PSH 도입 항목).
- [[fiber-bridging-constitutive-law]]의 일반화된 σ_b(δ) 형식과 snubbing 인자 g의 원전.
- [[sahmaran-2009-aggregate-type-size-ecc]] 등 후속 실험 연구들이 인용하는 설계 이론의 근간.
- [[cho-2012-basic-mixing-and-mechanical-tests]] — 강도/에너지 조건으로 무시멘트 HD-FRCC 두 배합의 변형성능 차이를 해석한 적용례(KCI 2012).

## 비고

- 스캔본이라 OCR로 전문 확보. 수식 일부 왜곡 가능(예: 상수 값) — 정밀 인용 시 원본 PDF 대조 권장.
- [[li-2003-ecc-review-jact]] — 이 이론을 10년 발전으로 총결산한 Li 초청 리뷰(2003)
- [[morton-1976-effect-metal-wires-fracture-brittle-matrix-composites]] — snubbing(경사 인발 마찰) 효과의 실험적 원전(1976)
