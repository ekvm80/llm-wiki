---
title: "A Micromechanical Model of Fiber Bridging in Tough Fibrous Ceramics (Li, Wang & Backer, 1991)"
type: source_note
source: "sources/li_JMPS91.pdf"
citation: "Li, V. C., Wang, Y., & Backer, S. (1991). A micromechanical model of fiber bridging in tough fibrous ceramics. Journal of the Mechanics and Physics of Solids, 39(5), 607-625. https://doi.org/10.1016/0022-5096(91)90043-N"
date: 2026-08-24
tags:
  - fiber-bridging
  - micromechanics
  - snubbing-effect
  - pullout-behavior
  - ceramic-matrix-composites
---

## Summary
단섬유 무작위 분산 취성 매트릭스 복합재료의 균열 가교 응력-변위 관계식($\sigma-\delta$ 곡선)을 도출하기 위해, 섬유 인발 시의 경사각(inclination angle $\theta$)에 따른 매트릭스 모서리 마찰 증대 효과(Snubbing friction)와 섬유 파단(fiber rupture) 메커니즘을 최초로 수학적으로 모델링한 고전 원전 논문이다. 섬유가 균열면에 대해 경사지게 매립되어 있을 때 발생하는 마찰 증대 효과를 오일러-에이텔바인(Euler-Eytelwein) 벨트 마찰 공식에 착안하여 스누빙 계수 $e^{f\theta}$로 정식화하고, 섬유의 3차원 공간 확률 밀도 함수를 적분하여 전체 균열 가교 구성 방정식을 도출하였다.

## Key Contributions
- **스누빙 마찰 계수($f$) 도입 및 정식화**: 경사각 $\theta$를 가진 섬유의 인발 하중 증대식을 $P(\theta) = P(0) e^{f\theta}$로 유도하여 3차원 랜덤 분산 복합체의 가교 응력을 정확히 예측.
- **섬유 파단 경계 조건($\sigma_{max} \ge \sigma_{fu}$) 수식화**: 매트릭스 모서리 국소 굽힘 응력과 인발 인장 응력의 결합으로 인한 조기 파단 임계각($\theta_{crit}$) 산정식 도출.
- **완전 인발 대 부분 파단 가교 곡선의 해석적 적분해 완성**: 균열 개구 변위 $\delta$의 크기에 따른 2단계(탄성 디본딩 및 마찰 슬립) 가교 응력 $\sigma(\delta)$의 폐형 수식 제공.

## Methods
- 미시역학적 전단 지연(shear-lag) 모델 및 경사 인발 메커니즘 해석.
- 3차원 무작위 섬유 배향 확률 밀도 함수 $p(\theta, \phi) = \frac{\sin\theta}{2\pi}$ 적용.
- 가교 응력 구성 방정식 적분:
  $$\sigma(\delta) = \frac{4 V_f}{\pi d_f^2} \int_0^{\pi/2} \int_0^{L_f/2} P(z, \theta, \delta) e^{f\theta} \sin\theta \cos\theta \, dz \, d\theta$$

## Results
- 스누빙 효과($f > 0$)로 인해 경사 인발 섬유는 수직 인발 섬유 대비 최대 2 ~ 3배 높은 피크 인발 저항을 발휘하여 복합체 거시 파괴인성을 크게 증대시킴.
- 섬유 강도 $\sigma_{fu}$가 불충분할 경우 스누빙 효과가 오히려 조기 파단을 유발하므로, 섬유 종횡비($L_f/d_f$)와 계면 마찰력($\tau_0$)의 최적 매칭이 필수적임을 수학적으로 입증.

## Related Notes
- [[fiber-bridging-constitutive-law]] - 섬유 가교 구성 법칙의 발전사 및 수학적 체계
- [[li-1992-steady-state-cracking-frcc]] - 가교 응력 곡선 기반 정상상태 균열 이론
- [[interface-bond-properties]] - 계면 전단 마찰 및 스누빙 계수 측정 기법
