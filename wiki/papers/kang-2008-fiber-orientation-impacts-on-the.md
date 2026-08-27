---
title: "Fiber Orientation Impacts on Flexural Behavior of Steel Fiber Reinforced Ultra High Strength Concrete (Kang et al., 2008)"
type: source_note
source: "sources/2008-fiber-orientation-impacts-on-the.pdf"
citation: "Kang, S.-T., Kim, Y.-Y., Lee, B.-Y., Kim, J.-K. 섬유의 방향성이 강섬유 보강 초고강도 콘크리트의 휨거동 특성에 미치는 영향 (Fiber orientation impacts on the flexural behavior of steel fiber reinforced high strength concrete). Journal of the Korea Concrete Institute 20(6) (2008) 731-739."
date: 2026-08-22
tags: [fiber-orientation, uhpc, steel-fiber, flexural-strength, image-analysis, casting-direction]
---

# 강섬유 보강 초고강도 콘크리트의 휨거동에 미치는 섬유 방향성의 영향

## Summary

SFR-UHSC(RPC 계열 매트릭스 + 강섬유 2 vol.%)의 타설 방법(실험체 축방향 vs 수직방향)에 따른 섬유 방향성·분산성 변화를 이미지 프로세싱으로 정량화하고, 휨인장실험과 이론 모델로 방향성이 강도에 미치는 영향을 규명한 연구. 초기균열강도는 타설 방향에 거의 무영향인 반면 최대 휨인장강도는 최대 61 %까지 차이가 났으며, 실측 배향분포를 적용한 강도 모델이 축방향 타설에서 약 5 % 이내 오차로 실험값과 일치했다.

## Key Contributions

1. **타설 방향 → 섬유 배열 규칙 확인**: 섬유는 유동 흐름이 큰 방향과 평행하게 배열되어 단위면적당 섬유수·분산성이 그 방향에서 최대가 됨. 축방향 타설(F2-L) 시 길이방향 절단면에서 αf = 0.38, Fn = 49 개/cm², Fc = 0.70(평균 배향각 θ ≈ 45°); 수직 타설(F2-T)은 유동 방향(수직 절단면)에서 αf = 0.40, Fn = 36 개/cm², Fc = 0.62.
2. **균열발생강도 vs 휨강도의 차별적 민감도**: 초기균열강도는 F2-L 19.97 MPa vs F2-T 18.93 MPa(+5.5 %)로 차이가 작지만, 휨인장강도는 35.43 MPa vs 21.99 MPa(+61 %). 초기균열은 매트릭스 지배적이라 섬유 가교 영향이 작고, 최대강도는 가교 작용의 직접 반영이라는 해석.
3. **배향계수 기반 강도 예측 모델**: 혼합법칙 σct = ηl·ηθ·Vf·σfu + Vm·σm에 휨환산계수(σmft = βσm, β = 1.5; σcft = ασct, SFR-UHSC α ≈ 2.0)를 결합한 식 σcft = αηlηθVfσfu + (α/β)σmftVm으로 예측. Xia 등의 PDF(p,q 피팅)보다 이미지 분석에서 얻은 실제 분포함수를 쓸 때 더 정확: F2-L 예측/실험비 0.954~0.974(오차 ~5 %), F2-T 1.179~1.181(오차 ~18 %).
4. **고배향각 과소예측 요인 규명**: 균열면에 대한 섬유 방향각이 클수록 균열면 걸침 섬유 굽힘이 커져 섬유 휨응력과 매트릭스 압축응력이라는 이차 응력이 발생 → 복합체 휨강도 저하(F2-T에서 모델이 25.9 MPa로 과대예측, 실측 21.99 MPa).
5. **정량 평가 지표 체계**: 분산계수 αf(균일분포 시 1), 단위면적당 섬유수 Fn, packing density Fc = A_ob/A_cc = d/l = cosθ(단면 기울각 정량화)로 구성된 이미지 프로세싱 평가법을 UHSC 단면에 적용. 수평 절단면에서 중심부 섬유 결핍·외연 집중 패턴 관찰.

## Methods

- 배합: 시멘트 1.00 / 물 0.25 / 실리카퓸 0.25 / 잔골재 1.10 / 필러 0.30 / 고성능감수제 0.018(시멘트 질량비), 강섬유 2 vol.% — 인장강도 2,500 MPa, 직경 0.2 mm, 길이 13 mm. 플로우 230 mm, 압축강도 198 ± 3.44 MPa(φ100×200 mm 원주형).
- 시험체: 100×100×400 mm 각형 휨시험체, 타설 방법 2종(축방향 F2-L / 축직각 F2-T) + 무섬유 대조군. 전체 길이 4등분 후 중앙부를 수직·수평·수직 방향으로 절단, 고해상도 촬영.
- 휨시험: 3등점 재하, 250 kN UTM 변위제어, 중앙 LVDT.
- 강도 해석 파라미터: ηl = l/(2lc) (l < lc), 1 − lc/(2l) (l ≥ lc), lc = σfu·df/(2τfu); ηθ = ∫g(θ)cos²θ dθ (평행 시 1, 수직 시 0). 참고 배향효율계수(Aveston 2D 2/π·3D 1/2; Laws 1/3·1/6; Allen 2D 1/2).

## Results

| 항목 | Non | F2-L | F2-T |
|---|---|---|---|
| 초기균열강도 (MPa) | 12.68 ± 0.80 | 19.97 ± 1.05 | 18.93 ± 0.09 |
| 휨인장강도 (MPa) | — | 35.43 ± 1.03 | 21.99 ± 2.68 |

- 배향계수 ηθ: F2-L 0.677(PDF 피팅 p=0.905, q=1.895)/0.704(실측), F2-T 0.369(p=3.785, q=2.210)/0.367(실측); ηl = 0.2550 공통.
- 예측 휨강도: F2-L 33.82~34.52 MPa(실측 35.43), F2-T 25.92~25.96 MPa(실측 21.99).

## Related Notes

- [[kim-2008-fiber-classification-and-detection-technique]] — 동일 연구진의 PVA-ECC용 검출 기법. 본 논문의 Fc = cosθ 배향 산정과 ANN 분류 아이디어의 근원 관계.
- [[fiber-bridging-constitutive-law]] — 배향각 φ가 브리징 응력 σ_B(δ)에 들어가는 snubbing 효과와 본 논문의 '고배향각 시 이차 응력으로 강도 저하' 관찰이 같은 방향.
- [[pseudo-strain-hardening-criteria]] — σ_0 ≥ σ_c 강도 기준에서 배향 불량은 유효 σ_0을 낮춰 PSH 달성을 저해하는 경로.
- [[hambach-2017-properties-3d-printed-fiber-reinforced-cement-paste]] — 3D 프린팅 노즈가 만드는 인위적 배향(프린트 경로 = 배향 제어 수단). 압출·성형 기인 배향의 극단 사례로 본 논문과 같은 논리선.
