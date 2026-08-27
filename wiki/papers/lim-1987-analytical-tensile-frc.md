---
title: "Analytical Model for Tensile Behavior of Fiber-Reinforced Concrete (Lim, Paramasivam & Lee, 1987)"
type: source_note
source: "sources/lim-1987-analytical-model-for-tensile-behavior-of-frp.pdf"
citation: "Lim, T. Y., Paramasivam, P., & Lee, S. L. (1987). Analytical model for tensile behavior of steel-fiber-reinforced concrete. ACI Materials Journal, 84(4), 286-298."
date: 2026-08-24
tags:
  - steel-fiber-reinforced-concrete
  - tensile-constitutive-model
  - fiber-pullout
  - post-cracking-behavior
  - analytical-modeling
---

## Summary
강섬유 보강 콘크리트(SFRC)의 일축 인장 거동 및 균열 후 인장연화(post-cracking softening) 응력-변위 곡선을 예측하기 위한 초기 미시역학적 해석 모델을 제시한 고전 논문이다. 단일 강섬유의 매트릭스 인발 하중-슬립 관계와 섬유의 공간적 랜덤 배향(2차원 및 3차원) 확률 분포를 결합하여, 초기 균열 발생 강도, 피크 가교 응력, 인장 연화 구배를 정량적으로 계산하는 해석적 적분 기법을 수립하였다. 직선형 및 갈고리형(hooked) 강섬유의 휨 소성 힌지 변형 에너지를 모델에 반영하여 실험 결과와의 정밀한 일치성을 검증하였다.

## Key Contributions
- **강섬유 인발 메커니즘의 수학적 적분 모델 정립**: 단일 섬유 인발 특성($P-s$)과 배향각 $\theta$, 매립길이 $z$의 확률 밀도 함수를 결합한 전체 가교 응력 해석해 제시.
- **갈고리형(Hooked-end) 강섬유의 역학적 앵커리지 효과 모델링**: 직선 섬유의 마찰 부착 외에 갈고리 굴곡부 소성 변형에 의한 추가 에너지 소산($W_{hook}$) 정량화.
- **SFRC 인장 연화 구성 방정식 확립**: 유한요소 비선형 파괴해석에 직접 입력 가능한 일축 인장 응력-균열개구변위($\sigma-w$) 관계식 제공.

## Methods
- 3차원 균질 랜덤 배향 가정 및 평면 균열 가교 수치 적분.
- 강섬유 인발 실험 데이터 검증: 직경 0.4 ~ 0.8 mm, 길이 25 ~ 50 mm, $V_f = 0.5 \sim 2.0 \%$.
- 직접 인장 시험 데이터와의 이론-실험 비교 검증.

## Results
- 강섬유 체적률($V_f$) 및 종횡비($L_f/d_f$) 증가에 따라 균열 후 잔존 인장 강도와 파괴에너지($G_F$)가 선형적으로 비례 증가함을 규명.
- 일반 강섬유는 $V_f < 2.0 \%$에서 변형경화(strain-hardening) 대신 완만한 인장연화(softening)를 나타내며, 균열 집중을 방지하기 위한 후속 고연성 섬유 설계의 기초를 제공.

## Related Notes
- [[fiber-bridging-constitutive-law]] - 섬유 가교 구성 방정식의 발전 계보
- [[uhpc-vs-ecc-design-space]] - 강섬유 UHPC의 인장연화 거동과 ECC 변형경화 거동의 비교
