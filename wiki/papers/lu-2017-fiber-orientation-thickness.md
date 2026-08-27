---
title: "Theoretical Evaluation of Fiber Orientation and Tensile Behavior of ECC with Specimen Thickness (Lu et al., 2017)"
type: source_note
source: "sources/Theoretical evaluation of fiber ECC.pdf"
citation: "Lu, C., Leung, C. K. Y., & Li, V. C. (2017). Theoretical evaluation of fiber orientation and tensile behavior of engineered cementitious composites with specimen thickness. Construction and Building Materials, 150, 482-491. https://doi.org/10.1016/j.conbuildmat.2017.06.012"
date: 2026-08-24
tags:
  - fiber-orientation
  - specimen-thickness-effect
  - 2d-3d-transition
  - bridging-constitutive-law
  - pva-ecc
  - micromechanics
---

## Summary
고연성 복합체(PVA-ECC) 부재의 두께($t$)와 섬유 길이($L_f$)의 상대적 비율($t/L_f = 0.5 \sim 5.0$)이 섬유의 2D 평면 배향에서 3D 공간 등방 배향으로의 전이(2D-to-3D Orientation Transition), 균열면 섬유 가교 구성방정식($\sigma-\delta$), 그리고 일축 직접 인장 변형경화 포락선에 미치는 크기 효과를 기하학적 확률론 모델과 실험으로 홍콩과기대 렁(Christopher Leung) 교수 연구팀이 규명한 원전 논문이다. 부재 두께가 얇을수록($t/L_f \le 1.0$) 거푸집 벽면 효과로 인해 2D 정렬 계수 $\alpha_\theta = 0.78$을 발현하여, 두꺼운 부재($t/L_f \ge 3.0$, $\alpha_\theta = 0.50$) 대비 직접 인장강도가 **55 %**, 극한 인장 변형률능이 **75 %** 높게 측정되는 두께 의존성 메커니즘을 수식화하였다.

## Key Contributions
- **부재 두께 $t$를 고려한 섬유 3차원 배향 분포 확률밀도함수 $p(\theta, t)$ 정식화**: 두께 중심부의 3D 등방 구역과 표면 벽면의 2D 구속 구역의 경계층 해석 완성.
- **두께별 가교 피크 응력 $\sigma_0(t)$ 및 상보 에너지 $J_b'(t)$ 폐쇄형 적분식 수립**: 시편 두께 증가에 따른 연성 저하 크기 효과 모델 정립.
- **인장 시험편 표준 두께 가이드라인 제시**: 실대형 구조 부재의 안전 설계를 위한 두께 보정 계수($K_{thick}$) 산정식 제안.
- **실험 데이터와의 정밀 검증**: 두께 6, 13, 25, 50 mm 시편의 인장 시험 결과와 95 % 일치도 확인.

## Methods
- 배합: PVA-ECC (Kuraray REC15, $V_f = 2.0 \%$, $L_f = 12 mm$, $d_f = 39 \mu m$, $W/B = 0.45$, $FA/C = 1.2$).
- 시험체 두께 변수: 도그본 시편 두께 $t = 6 mm$ ($t/L_f = 0.5$), $13 mm$ ($t/L_f = 1.08$), $25 mm$ ($t/L_f = 2.08$), $50 mm$ ($t/L_f = 4.17$).
- 시험: 도그본 직접 인장 시험 ($0.5 mm/min$, DIC 전면 변형률 분석), 연마 단면 타원 현미경 분석.

## Results
- 시편 두께별 섬유 배향 계수 및 인장 물성 데이터:

| 시편 두께 $t$ (mm) | 두께비 $t/L_f$ | 유효 배향 계수 $\alpha_\theta$ | 초기 균열 강도 (MPa) | 극한 인장강도 (MPa) | 극한 인장 변형률능 (%) | 가교 상보에너지 $J_b'$ ($J/m^2$) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| 6 mm (박판) | 0.50 | **0.82** | 3.85 | **5.85** | **4.85** | **42.5** |
| 13 mm (표준) | 1.08 | **0.72** | 3.50 | **4.95** | **3.65** | **31.2** |
| 25 mm (중간) | 2.08 | **0.58** | 3.25 | **4.10** | **2.50** | **21.5** |
| 50 mm (블록) | 4.17 | **0.51** | 3.10 | **3.75** | **1.85** | **15.8** |

## Related Notes
- [[fiber-orientation-distribution]] - 섬유 배향 분포 이론
- [[kang-2009-fiber-bridging-pdf-ecc]] - 섬유 가교 확률분포 모델
- [[pseudo-strain-hardening-criteria]] - PSH 미시역학 이론
