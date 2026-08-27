---
title: "Steady-State and Multiple Cracking of Short Random Fiber Reinforced Brittle Matrix Composites (Li & Leung, 1993)"
type: source_note
source: "sources/jsce_paper93.pdf"
citation: "Li, V. C., & Leung, C. K. Y. (1993). Steady-state and multiple cracking of short random fiber reinforced brittle matrix composites. Journal of Materials in Civil Engineering (JSCE Proceedings), 1993(478), 23-32."
date: 2026-08-24
tags:
  - steady-state-cracking
  - multiple-cracking
  - micromechanics
  - engineered-cementitious-composites
  - fiber-bridging
---

## Summary
단섬유 무작위 분산 취성 매트릭스 복합재료에서 다중 미세균열(Multiple Cracking) 및 정상상태 균열 진전(Steady-State Cracking)이 발생하기 위한 이론적 파괴역학 및 미시역학적 판정 기준을 정립한 기념비적 원전 논문이다. 평면 균열 선단에서의 응력 확대 현상과 섬유 가교 응력($\sigma(\delta)$)에 의한 균열 개구 구속 효과를 $J$-적분 에너지 평형 모델로 정식화하였다. 균열이 임의의 위치에서 무제한 개구되지 않고 일정한 균열폭($\delta_{ss}$)을 유지하며 평평하게 전파(flat crack propagation)하기 위한 조건인 $\sigma_0 > \sigma_{ss}$ 및 $J_b' > J_{tip}$을 수학적으로 유도하고, ECC 설계의 핵심인 섬유 체적율 임계치($V_f^{crit}$) 산정식을 제공하였다.

## Key Contributions
- **정상상태 균열 개구 에너지 평형식 도출**:
  $$J_{tip} = \sigma_{ss} \delta_{ss} - \int_0^{\delta_{ss}} \sigma(\delta) d\delta = J_b'$$
  매트릭스 균열 선단 파괴인성에 요구되는 에너지가 섬유 가교 곡선의 보완 에너지(complementary energy)보다 작아야 함을 수식화.
- **다중 균열 강도 조건($\sigma_{cu} > \sigma_{fc}$) 및 정상상태 조건 연결**: 첫 번째 균열 발생 강도(First cracking strength, $\sigma_{fc}$) 이후 가교 섬유가 파단되지 않고 하중을 추가 분담하여 인접 매트릭스로 응력을 재분배하는 조건 확립.
- **무작위 3차원 섬유 배향 스누빙 계수($f$) 도입**: 섬유가 매트릭스 균열면에서 각도 $\theta$로 인발될 때 발생하는 스누빙 마찰 증대 효과($e^{f\theta}$)를 브리징 구성 방정식에 통합.

## Methods
- 파괴역학적 그리피스(Griffith) 균열 모델 및 Barenblatt 점성 가교대 모델 적용.
- 섬유 인발 미시역학 모델: 마찰 부착력($\tau_0$), 섬유 직경($d_f$), 길이($L_f$), 체적분율($V_f$), 매트릭스 탄성계수($E_m$).
- 정상상태 응력 $\sigma_{ss}$ 및 정상상태 균열폭 $\delta_{ss}$ 해석적 해법 도출.

## Results
- 섬유 혼입률이 임계 체적 분율 $V_f^{crit}$을 초과하면 인장 하중 증가에 따라 주균열 국소화 대신 수많은 미세 균열이 포화 상태까지 순차적으로 생성되는 유사 변형경화(Pseudo Strain-Hardening)가 발현됨.
- 최적화된 마찰 부착과 스누빙 계수($f \approx 0.5 \sim 0.8$)를 가질 때 $V_f = 2.0 \%$ 이하의 적은 섬유량으로도 $3 \sim 5 \%$ 수준의 초고연성 인장 변형능을 달성할 수 있음을 증명.

## Related Notes
- [[pseudo-strain-hardening-criteria]] - 변형경화 및 다중균열 판정의 PSH 지수 설계 기준
- [[fiber-bridging-constitutive-law]] - 단섬유 가교 구성 방정식의 유도 및 매개변수 분석
- [[strain-hardening-mechanism]] - 시멘트 복합체의 인장 변형경화 역학 메커니즘
