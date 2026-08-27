---
title: "Compressive Behavior and Constitutive Model of UHPC under Dynamic Loading (Wang et al., 2022)"
type: source_note
source: "sources/wang-2022-compressive-behavior-and-constitutive-model.pdf"
citation: "Wang, Y., Zhang, Z., & Chen, Y. (2022). Compressive behavior and constitutive model of ultra-high performance concrete (UHPC) under dynamic loading. International Journal of Impact Engineering, 164, 104198. https://doi.org/10.1016/j.ijimpeng.2022.104198"
date: 2026-08-24
tags:
  - uhpc
  - dynamic-compression
  - strain-rate-effect
  - split-hopkinson-pressure-bar
  - constitutive-model
---

## Summary
충격 및 방폭 하중 하에서 초고성능 콘크리트(UHPC, 정적 압축강도 $150 MPa$)의 동적 일축 압축 거동을 분할 홉킨슨 압력봉(SHPB)을 이용하여 변형률 속도 $\dot{\epsilon} = 30 \sim 250 s^{-1}$ 대역에서 평가한 연구이다. 변형률 속도 증가에 따른 동적 강도 증가 계수(DIF), 피크 변형률 증가, 에너지 흡수 밀도, 그리고 파쇄 파편 크기 분포를 레이저 입도 분석으로 정밀 분석하였다. 변형률 속도 경화와 연속체 손상역학(Continuum Damage Mechanics)을 결합한 비선형 동적 압축 구성 모델을 수립하고 유한요소 해석 프로그램에 탑재 가능한 사용자 서브루틴(VUMAT)을 개발하였다.

## Key Contributions
- **초고속 압축 하 UHPC의 DIF 경험식 및 역학 모델 수립**: $DIF = (\dot{\epsilon}/\dot{\epsilon}_0)^{0.045}$ ($\dot{\epsilon} \le 80 s^{-1}$) 및 지수 급증 구간 모델화.
- **강섬유 체적분율($V_f = 1.5 \sim 3.0 \%$)의 동적 파쇄 구속 효과 정량화**: 섬유 혼입률이 높을수록 고속 충격 후 파편의 비산이 억제되고 파쇄 모래질 분말화가 방지됨을 입증.
- **속도 의존 손상 소성 구성 모델 완성**: 정적/동적 전 구간에 걸친 응력-변형률 곡선 예측 오차 5 % 이내 달성.

## Methods
- **재료 배합**: $W/B = 0.16$, 실리카퓸 25 %, 직선형 고강도 강섬유 ($V_f = 2.0 \%$, 직경 0.2 mm, 길이 13 mm, 강도 2600 MPa).
- **시험 장비**: 직경 75 mm 강재 SHPB 장치, 반도체 스트레인 게이지 및 고속 비디오 촬영.

## Results
- 동적 압축강도: 정적 $152 MPa \rightarrow \dot{\epsilon} = 220 s^{-1}$에서 $245 MPa$ ($DIF = 1.61$).
- 충격 파괴 에너지 흡수 밀도가 정적 대비 3.8배 증가하여 방폭 및 관입 저항 성능 극대화 입증.

## Related Notes
- [[ke-2023-dynamic-compressive-behavior-uhpc]] - UHPC의 동적 압축 거동 비교
- [[impact-and-blast-resistance-frcc]] - 고강도 섬유 복합체의 내충격 해석
