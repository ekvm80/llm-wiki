---
title: "Steady-State Cracking of Fiber-Reinforced Brittle-Matrix Composites (Li & Leung, 1992)"
type: source_note
source: "sources/li_JEM92_steady_state.pdf"
citation: "Li, V. C., & Leung, C. K. Y. (1992). Steady-state cracking of fiber-reinforced brittle-matrix composites. Journal of Engineering Mechanics, ASCE, 118(11), 2246-2264. https://doi.org/10.1061/(ASCE)0733-9399(1992)118:11(2246)"
date: 2026-08-24
tags:
  - steady-state-cracking
  - fracture-mechanics
  - fiber-bridging
  - engineered-cementitious-composites
  - j-integral
---

## Summary
섬유보강 취성 매트릭스 복합재료에서 균열 선단 파괴에너지와 가교 섬유의 응력-변위 이력 사이의 상호작용을 $J$-적분 파괴역학 이론으로 정식화하여, 정상상태 균열(Steady-State Crack)의 개구 및 전파 조건을 수학적으로 확립한 역사적 원전 논문이다. 균열이 진행함에 따라 균열 선단 응력확대계수가 임계 파괴인성($K_m$)에 도달하고 후방의 섬유 가교 영역이 평형 응력 상태에 도달할 때, 균열폭이 일정한 정상상태 개구량($\delta_{ss}$)을 유지하면서 하중 증가 없이 또는 완만한 하중 증가 하에 평평한 균열면으로 전파하는 조건을 도출하였다. Marshall-Cox-Evans(MCE) 연속 섬유 이론을 단섬유 무작위 분산 복합재료로 확장하여 ECC 미시역학 설계 이론의 근간을 완성하였다.

## Key Contributions
- **단섬유 복합체에 대한 정상상태 균열 에너지 평형 조건 확립**:
  $$J_{tip} = \frac{K_m^2}{E_m} = \sigma_{ss} \delta_{ss} - \int_0^{\delta_{ss}} \sigma(\delta) d\delta$$
  정상상태 응력 $\sigma_{ss}$ 및 정상상태 균열폭 $\delta_{ss}$를 섬유 가교 법칙 $\sigma(\delta)$로부터 직접 유도.
- **임계 섬유 체적분율($V_f^{crit}$)의 해석적 폐형 해법(Closed-form solution) 제공**:
  $$V_f^{crit} = \frac{12 K_m^2 E_m}{g \tau_0 E_f (L_f/d_f) \sigma_{fu}^2}$$
  섬유 직경, 길이, 강도, 마찰 부착력, 매트릭스 파괴인성 간의 무차원 설계 공식 수립.
- **취성 파괴에서 연성 변형경화로의 전환 경계 확립**: $\sigma_{ss} \le \sigma_0$ (가교 피크 응력) 조건을 만족할 때 단일 파괴 균열이 억제되고 다중 정상상태 균열이 유도됨을 입증.

## Methods
- 비선형 파괴역학 및 $J$-적분 경로 해석.
- 3차원 무작위 단섬유의 배향 및 인발 미시역학 모델링.
- 캔틸레버 및 판상 인장 시험편에서의 균열 프로파일 형상 함수 도출.

## Results
- 섬유 체적율 $V_f > V_f^{crit}$ 조건에서 균열 선단은 일정한 $J_{tip}$을 유지하며 평평하게 전파하며, 복합체 전체는 파괴되지 않고 연속적인 다중 균열을 형성함.
- 매트릭스 인성($K_m$)을 낮추고 섬유 마찰 부착($\tau_0$) 및 종횡비($L_f/d_f$)를 최적화할 때 $V_f^{crit}$를 $1.0 \sim 2.0 \%$ 수준으로 낮출 수 있음을 수학적으로 입증.

## Related Notes
- [[li-1993-steady-state-multiple-cracking-frcc]] - 정상상태 및 다중균열 이론의 포괄적 완성 논문
- [[pseudo-strain-hardening-criteria]] - 정상상태 균열 에너지를 기반으로 한 PSH 기준지수 체계
- [[fiber-bridging-constitutive-law]] - 섬유 가교 구성 방정식의 기초 이론
