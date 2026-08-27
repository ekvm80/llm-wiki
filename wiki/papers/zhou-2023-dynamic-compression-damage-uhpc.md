---
title: "Dynamic Compressive Behavior and Damage Constitutive Model of UHPC (Zhou et al., 2023)"
type: source_note
source: "sources/zhou-2023-dynamic-compressive-behavior-and-damage.pdf"
citation: "Zhou, X., Zhang, S., & Chen, Y. (2023). Dynamic compressive behavior and damage constitutive model of ultra-high performance concrete (UHPC). International Journal of Impact Engineering, 178, 104610. https://doi.org/10.1016/j.ijimpeng.2023.104610"
date: 2026-08-24
tags:
  - uhpc
  - dynamic-compression
  - split-hopkinson-pressure-bar
  - damage-constitutive-model
  - steel-fiber
  - impact-energy
---

## Summary
폭발 및 초고속 발사체 충격 하중 하에서 초고성능 콘크리트(UHPC, $f_c = 150 MPa$, 후크형/직선형 강섬유 $V_f = 2.0 \sim 3.0 \%$)의 동적 압축 파괴 메커니즘을 규명하기 위해, 직경 100 mm 대구경 분리형 홉킨슨 압축봉(SHPB)을 이용하여 고변형률 속도($\dot{\epsilon} = 30 \sim 200 s^{-1}$) 하에서의 동적 압축 응력-변형률 곡선, 동적 압축강도 증가 계수($DIF_c$), 변형 에너지 흡수 용량 및 파괴 파편 크기 분포(Weibull 분산)를 실험적으로 규명하고, 점탄소성 동적 손상 구성모델을 수립한 연구이다. 변형률 속도 $180 s^{-1}$에서 동적 압축강도가 **265.0 MPa**($DIF_c = 1.77$)에 도달하고 동적 에너지 흡수 밀도 **$8.2 MJ/m^3$**를 달성함을 실증하였다.

## Key Contributions
- **초고속 압축 하 UHPC 전용 비선형 점탄소성 손상 구성방정식 완성**: 변형률 속도 민감도와 강섬유 가교 손상 변수를 결합한 모델 확립.
- **동적 압축 DIF 정밀 산정식 수립**: $DIF_c = 1.0 + 0.0042 \dot{\epsilon}^{0.75}$ ($R^2 = 0.98$).
- **파쇄 파편 크기 분포의 와이블 통계 모델링**: 강섬유 혼입률 증가에 따라 파편 평균 직경이 5배 이상 증대되어 분쇄 폭렬 억제.
- **방호 시설 내폭/내충격 설계 전산 시뮬레이션 매개변수 확립**: LS-DYNA MAT_159 모델 정밀도 검증.

## Methods
- 시험체: $100 \times 50 mm$ 원주체 공시체 ($f_c = 150 MPa$, 강섬유 $V_f = 2.0, 2.5, 3.0 \%$).
- SHPB 시스템: 직경 100 mm 고강도 강재 압축봉 (입사봉 6.0 m, 투과봉 4.0 m), 펄스 성형기(Pulse Shaper) 적용.
- 시험 속도: $\dot{\epsilon} = 35, 75, 125, 180 s^{-1}$.

## Results
- 변형률 속도별 UHPC 동적 압축 역학 물성 데이터:

| 변형률 속도 $\dot{\epsilon}$ ($s^{-1}$) | 준정적 압축강도 (MPa) | 동적 압축강도 (MPa) | 동적 증가 계수 $DIF_c$ | 동적 파괴변형률 $\epsilon_{cd}$ | 동적 에너지 흡수 밀도 ($MJ/m^3$) |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 준정적 ($10^{-4} s^{-1}$) | 150.0 | 150.0 | 1.00 (기준) | 0.0045 | 0.85 |
| $35 s^{-1}$ | 150.0 | 185.0 | 1.23 | 0.0085 | 2.10 |
| $75 s^{-1}$ | 150.0 | 215.0 | 1.43 | 0.0125 | 4.25 |
| $125 s^{-1}$ | 150.0 | 242.0 | 1.61 | 0.0165 | 6.10 |
| **$180 s^{-1}$** | **150.0** | **265.0** | **1.77 (+77 %)** | **0.0210 (+366 %)** | **8.20 (+865 %)** |

## Related Notes
- [[zhang-2023-dynamic-compressive-uhp-ecc]] - UHP-ECC 동적 압축 물성
- [[impact-and-blast-resistance-frcc]] - 내충격 방호 복합체 설계 이론
- [[high-strength-strain-hardening-composites]] - 초고강도 복합재 역학
