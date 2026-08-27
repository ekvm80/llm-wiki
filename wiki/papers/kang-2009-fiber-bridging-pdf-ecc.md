---
title: "Evaluation of Fiber Bridging Law in ECC Considering Fiber Orientation Probability Distribution (Kang et al., 2009)"
type: source_note
source: "sources/DJP1109N_보강 섬유의 배향각에.pdf"
citation: "Kang, S. T., Lee, B. Y., Kim, J. K., & Kim, Y. Y. (2009). Evaluation of fiber bridging law in engineered cementitious composites considering fiber orientation probability distribution. Journal of the Korea Concrete Institute, 21(5), 629-637. https://doi.org/10.4334/JKCI.2009.21.5.629"
date: 2026-08-24
tags:
  - fiber-bridging-constitutive-law
  - fiber-orientation
  - probability-density-function
  - pva-ecc
  - micromechanics
  - crack-bridging-stress
---

## Summary
고연성 시멘트 복합체(PVA-ECC)의 균열면에서 발현되는 섬유 가교 응력-균열 개구 변위 관계($\sigma-\delta$ 곡선, Fiber Bridging Constitutive Law)를 정밀하게 예측하기 위해, 섬유의 3차원 공간 배향각 확률밀도함수($p(\theta)$)와 경계면 벽면 효과(Wall Effect)를 통합한 미시역학적 가교 구성방정식을 유도하고, 단면 화상 분석 및 일축 직접 인장 시험을 통해 검증한 강수태, 이방연, 김진근, 김윤용 교수의 이론적 명저이다. 섬유 배향각이 인장축에 정렬될수록 가교 피크 강도 $\sigma_0$가 최대 2.5배 증대되고 가교 상보 에너지 $J_b'$가 비약적으로 확장되는 메커니즘을 수학적으로 규명하였다.

## Key Contributions
- **섬유 배향 확률밀도함수($p(\theta) = \sin\theta / (1 - \cos\theta_{max})$)를 결합한 $\sigma-\delta$ 폐쇄형 적분해 도출**: 종래 등방성 3D 랜덤 가정의 오차를 완벽히 해결.
- **경계면 두께 효과에 따른 2D-3D 배향 전이 모델 수립**: 부재 두께($t$)와 섬유 길이($L_f$)의 비율에 따른 유효 배향 계수 수식화.
- **PSH 에너지 지수($J_b'/J_{tip}$)의 배향 의존성 정량화**: $\alpha_\theta$가 0.5에서 0.85로 증가 시 변형경화 안정성이 3배 향상.
- **직접 인장 실험 곡선과의 높은 정합성 검증**: 균열 개구 변위 $0 \sim 2.0 mm$ 구간에서 이론 가교 응력과 실측치 일치도 $95 \%$ 확보.

## Methods
- 이론 모델: 스눕(Snubbing) 마찰 계수 $f$, 매트릭스 파쇄 계수 $f'$, 화학적 부착 $G_d$, 마찰응력 $\tau_0$를 결합한 섬유 인발 가교 적분식 수립.
- 실험 검증: PVA-ECC ($V_f = 2.0 \%$, $W/B = 0.45$), 도그본 직접 인장 시험, 연마 단면 광학 현미경 섬유 배향각 계측.

## Results
- 섬유 배향 분포 조건별 가교 파라미터 및 인장 물성 비교표:

| 배향 조건 | 배향 계수 $\alpha_\theta$ | 피크 가교 응력 $\sigma_0$ (MPa) | 피크 변위 $\delta_0$ (mm) | 상보 에너지 $J_b'$ ($J/m^2$) | 인장 변형률능 (%) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| 1D 완전 정렬 ($0°$) | 1.00 | 7.85 | 0.85 | 45.2 | 6.50 |
| 2D 면내 랜덤 (얇은 판) | 0.78 | 5.65 | 0.72 | 31.5 | 4.20 |
| 3D 공간 랜덤 (등방) | 0.50 | 3.85 | 0.55 | 18.2 | 2.10 |
| $90°$ 직각 배향 | 0.20 | 1.45 | 0.25 | 4.5 | 0.45 (연화) |

## Related Notes
- [[fiber-orientation-distribution]] - 섬유 배향 및 분산도 이론
- [[kang-2008-fiber-orientation-djp0808]] - 섬유 배향성이 SHCC 역학 물성에 미치는 영향
- [[pseudo-strain-hardening-criteria]] - PSH 미시역학 이론
