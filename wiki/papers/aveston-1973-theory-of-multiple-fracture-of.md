---
title: "Theory of Multiple Fracture of Fibrous Composites (Aveston & Kelly, 1973)"
type: source_note
source: "sources/aveston-1973-theory-of-multiple-fracture-of.pdf"
citation: "Aveston, J., & Kelly, A. (1973). Theory of multiple fracture of fibrous composites. Journal of Materials Science, 8(3), 352-362. https://doi.org/10.1007/BF00550155"
date: 2026-08-24
tags:
  - ack-theory
  - multiple-fracture
  - energy-balance
  - fiber-debonding
  - crack-spacing
  - theoretical-foundations
---

## Summary
취성 매트릭스(Brittle Matrix)에 연속 또는 불연속 섬유가 보강된 복합체가 일축 인장 하중을 받을 때 발현되는 다중 균열(Multiple Cracking) 및 정상 상태 균열(Steady-State Cracking) 전파 현상을 에너지 평형(Energy Balance) 관점에서 정립한 영국 국립물리연구소(NPL) 아베스톤(J. Aveston)과 켈리(A. Kelly)의 기념비적 ACK 이론(Aveston-Cooper-Kelly Theory) 후속 논문이다. 섬유-매트릭스 계면이 완전 탄성 부착(Elastic Bonding)된 경우와 마찰 슬립 탈착(Frictional Debonding)된 경우에 대해 균열 개시 임계 변형률($\epsilon_{mu}$), 정상 상태 균열 응력($\sigma_{mc}$), 포화 균열 간격($x$) 및 복합체 응력-변형률 곡선의 비선형 3단계(탄성 $\rightarrow$ 다중 균열 변형경화 $\rightarrow$ 섬유 지배 신장)를 유도하였다.

## Key Contributions
- **ACK 다중 균열 에너지 평형 지배방정식 완성**: 외력 일 $\Delta W$, 매트릭스 변형에너지 감소 $\Delta U_m$, 섬유 변형에너지 증가 $\Delta U_f$, 계면 탈착/마찰 손실 $U_d + U_s$, 매트릭스 표면 파괴에너지 $\gamma_m$의 완전 수지 정립.
- **마찰 계면 조건 하 임계 매트릭스 균열 변형률 공식화**: $\epsilon_{mu} = \left[ \frac{12 \tau \gamma_m E_f V_f^2}{E_c E_m^2 r V_m} \right]^{1/3}$ 도출.
- **포화 균열 간격($x$) 상하한 포락선 수립**: $x' \le x \le 2x'$ ($x' = \frac{V_m \sigma_{mu} r}{2 V_f \tau}$).
- **현대 고연성 복합체(ECC/SHCC) 미시역학(PSH 기준)의 원천 이론 제공**: 빅터 리의 정상 상태 균열 및 $J$-적분 이론의 모태 확립.

## Methods
- 이론 모델: 1차원 연속체 역학 에너지 수지식 $\Delta W = \Delta U_m + \Delta U_f + \Delta U_s + 2 V_m \gamma_m$.
- 계면 상태: (1) 마찰 슬립 계면 (일정 마찰응력 $\tau$), (2) 탄성 전단 계면 (Shear-lag 매개변수 $\alpha$).
- 해석 변수: 섬유 체적분율 $V_f$, 섬유 반경 $r$, 섬유 탄성계수 $E_f$, 매트릭스 탄성계수 $E_m$, 매트릭스 표면에너지 $\gamma_m$.

## Results
- ACK 이론에 따른 계면 부착 조건별 주요 역학 지배방정식 비교표:

| 항목 | 마찰 슬립 계면 (Pure Friction $\tau$) | 탄성 부착 계면 (Elastic Bonding $\tau_{el}$) |
| :--- | :--- | :--- |
| 임계 균열 변형률 $\epsilon_{mu}$ | $\epsilon_{mu} = \left( \frac{12 \tau \gamma_m E_f V_f^2}{E_c E_m^2 r V_m} \right)^{1/3}$ | $\epsilon_{mu} = \left( \frac{2 \gamma_m \alpha E_f V_f}{E_c E_m V_m} \right)^{1/2}$ |
| 최소 전달 길이 $x'$ | $x' = \frac{V_m \sigma_{mu} r}{2 V_f \tau}$ | $x' = \frac{1}{\alpha} \ln\left(\frac{1}{1-\phi}\right)$ |
| 포화 평균 균열 간격 $x_{avg}$ | $x_{avg} = 1.337 x' = 1.337 \left(\frac{V_m \sigma_{mu} r}{2 V_f \tau}\right)$ | $x_{avg} = 1.337 x_{el}'$ |
| 다중 파괴 발생 조건 | $V_f > V_{f,crit} = \frac{\sigma_{mu}}{\sigma_{fu} + \sigma_{mu} - \sigma_m'}$ | $V_f > V_{f,crit}$ |
| 복합체 극한 인장강도 $\sigma_{cu}$ | $\sigma_{cu} = V_f \sigma_{fu}$ | $\sigma_{cu} = V_f \sigma_{fu}$ |

## Related Notes
- [[pseudo-strain-hardening-criteria]] - PSH 미시역학 변형경화 기준
- [[stang-1986-failure-composites-pullout-fracture]] - 섬유 인발 파괴역학 기초
- [[fiber-orientation-distribution]] - 섬유 배향 분포 이론
