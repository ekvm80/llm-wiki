---
title: "Dynamic Tensile Properties and Constitutive Modeling of HPFRCC (Zhou et al., 2021)"
type: source_note
source: "sources/zhou-2021-dynamic-tensile-properties-and-constitutive.pdf"
citation: "Zhou, Y., Chen, X., & Li, J. (2021). Dynamic tensile properties and constitutive modeling of high-performance fiber-reinforced cementitious composites. International Journal of Impact Engineering, 155, 103905. https://doi.org/10.1016/j.ijimpeng.2021.103905"
date: 2026-08-24
tags:
  - hpfrcc
  - dynamic-tensile-properties
  - strain-rate-effect
  - constitutive-model
  - pva-fiber
  - impact-energy
---

## Summary
고변형률 속도($\dot{\epsilon} = 10^{-4} \sim 10^1 s^{-1}$) 하중 환경에서 고연성 복합체(PVA-HPFRCC, $f_c = 55 MPa$, 준정적 인장 변형률능 $4.0 \%$)의 동적 인장 강도 상승, 변형경화 포락선 변천 및 파괴에너지 소산 거동을 분리형 홉킨슨 인장봉(SHTB) 및 고속 서보 인장 시험으로 규명하고, 손상 점탄소성 동적 구성방정식(Dynamic Visco-Elastoplastic Damage Constitutive Model)을 수립한 동제대학교 저우(Y. Zhou) 교수 연구팀의 연구이다. 변형률 속도가 $10^1 s^{-1}$로 증가함에 따라 직접 인장강도가 **5.1 MPa에서 11.2 MPa**로 2.2배 급증($DIF_t = 2.20$)하면서도 동적 인장 변형률능 **3.5 %**를 유지함을 실증하였다.

## Key Contributions
- **초고변형률 속도($10^{-4} \sim 10^1 s^{-1}$) 하 HPFRCC 동적 인장 손상 구성모델 수립**: 변형률 속도 효과와 계면 마찰 슬립을 결합한 3차원 구성방정식 정식화.
- **인장 DIF 포락선 수식화**: $DIF_t = 1.0 + 0.18 (\log_{10}(\dot{\epsilon}/\dot{\epsilon}_0))^{1.15}$ 정밀 모델 확립 ($R^2 = 0.98$).
- **동적 파괴에너지 밀도 $380 kJ/m^3$ 달성**: 지진 및 폭발 충격파 흡수 능력 극대화.
- **다중 미세균열 발생 속도 의존성 입증**: 충격 속도 증가에 따라 관성 구속 작용으로 균열 개수가 35개에서 85개로 증가.

## Methods
- 시험체: 도그본 인장 공시체 ($f_c = 55 MPa$, Kuraray PVA 섬유 $V_f = 2.0 \%$).
- 시험 장비: 직경 30 mm 고강도 티타늄 합금 SHTB 인장봉 시스템 및 MTS 고속 액추에이터.
- 시험 속도: $\dot{\epsilon} = 10^{-4}, 10^{-2}, 1.0, 10^1 s^{-1}$.

## Results
- 변형률 속도별 HPFRCC 직접 인장 역학 물성 데이터:

| 변형률 속도 $\dot{\epsilon}$ ($s^{-1}$) | 초기 균열 강도 (MPa) | 극한 직접 인장강도 (MPa) | 동적 증가 계수 $DIF_t$ | 극한 인장 변형률능 (%) | 인장 파괴에너지 ($kJ/m^3$) |
| :---: | :---: | :---: | :---: | :---: | :---: |
| $10^{-4} s^{-1}$ (준정적) | 3.65 | 5.10 | 1.00 (기준) | **4.20 %** | 185 |
| $10^{-2} s^{-1}$ | 4.85 | 6.80 | 1.33 | **4.05 %** | 240 |
| $1.0 s^{-1}$ | 6.50 | 9.20 | 1.80 | **3.80 %** | 310 |
| **$10^1 s^{-1}$ (고속 충격)** | **7.85** | **11.20** | **2.20 (+120 %)** | **3.50 %** | **380 (+105 %)** |

## Related Notes
- [[zhang-2021-dynamic-tensile-ecc-intermediate-rates]] - 중간 속도 ECC 동적 인장
- [[yu-2018-rate-dependent-tensile-uhp-ecc]] - UHP-ECC 고속 인장 물성
- [[impact-and-blast-resistance-frcc]] - 내충격 방호 복합체 설계 이론
