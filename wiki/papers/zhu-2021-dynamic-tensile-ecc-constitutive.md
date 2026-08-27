---
title: "Dynamic Tensile Behavior and Constitutive Model of ECC (Zhu et al., 2021)"
type: source_note
source: "sources/zhu-2021-dynamic-tensile-behavior-and-constitutive.pdf"
citation: "Zhu, H., Zhang, Z., & Wu, C. (2021). Dynamic tensile behavior and constitutive model of engineered cementitious composites (ECC) under high strain rates. International Journal of Impact Engineering, 151, 103830. https://doi.org/10.1016/j.ijimpeng.2021.103830"
date: 2026-08-24
tags:
  - dynamic-tensile-behavior
  - high-strain-rates
  - split-hopkinson-bar
  - constitutive-model
  - pva-ecc
  - impact-resistance
---

## Summary
고속 충돌 및 폭발 환경($\dot{\epsilon} = 10^{-4} \sim 50 s^{-1}$)에서 고연성 복합체(PVA-ECC, $f_c = 48 MPa$, 인장 변형률능 $4.0 \%$)의 동적 인장 거동을 분리형 홉킨슨 인장봉(SHTB)으로 정밀 측정하고, 미시역학 기반 동적 점소성 손상 구성방정식을 수립한 호주 서호주 대학교 우청(C. Wu) 교수 연구팀의 연구이다. 변형률 속도가 $40 s^{-1}$로 증가함에 따라 동적 직접 인장강도가 **5.2 MPa에서 12.8 MPa**로 2.46배 급증($DIF_t = 2.46$)하면서도 동적 인장 변형률능 **3.6 %**와 파괴에너지 **$420 kJ/m^3$**를 발현함을 실증하였다.

## Key Contributions
- **초고속 인장 변형률 속도($50 s^{-1}$) 하 PVA-ECC 동적 구성방정식 수립**: 속도 의존 계면 마찰 슬립과 관성 구속 효과를 통합.
- **인장 DIF 포락선 수식화**: $DIF_t = 1.0 + 0.22 (\log_{10}(\dot{\epsilon}/\dot{\epsilon}_0))^{1.20}$ ($R^2 = 0.98$).
- **초고에너지 소산 안정성 실증**: 동적 인장 파괴에너지를 준정적 대비 2.4배 향상.
- **내폭 방호 구조물 해석 매개변수 완성**: LS-DYNA 비선형 해석 정밀도 96 % 확보.

## Methods
- 시험체: 도그본 인장 공시체 ($f_c = 48 MPa$, Kuraray PVA 섬유 $V_f = 2.0 \%$).
- 시험 장비: 직경 25 mm 알루미늄 합금 SHTB 인장봉, 고속 레이저 변위계, 10000 fps 초고속 카메라 DIC.
- 변형률 속도: $\dot{\epsilon} = 10^{-4}, 1.0, 15, 40 s^{-1}$.

## Results
- 변형률 속도별 PVA-ECC 직접 인장 역학 데이터:

| 변형률 속도 $\dot{\epsilon}$ ($s^{-1}$) | 초기 균열 강도 (MPa) | 극한 직접 인장강도 (MPa) | 동적 강도 계수 $DIF_t$ | 극한 인장 변형률능 (%) | 동적 파괴에너지 ($kJ/m^3$) |
| :---: | :---: | :---: | :---: | :---: | :---: |
| $10^{-4} s^{-1}$ (준정적) | 3.50 | 5.20 | 1.00 (기준) | **4.20 %** | 175 |
| $1.0 s^{-1}$ | 5.80 | 8.50 | 1.63 | **3.95 %** | 285 |
| $15 s^{-1}$ | 7.50 | 10.80 | 2.08 | **3.80 %** | 360 |
| **$40 s^{-1}$ (초고속 충격)** | **9.20** | **12.80** | **2.46 (+146 %)** | **3.60 %** | **420 (+140 %)** |

## Related Notes
- [[zhou-2021-dynamic-tensile-constitutive-hpfrcc]] - HPFRCC 동적 인장 구성모델
- [[zhang-2021-dynamic-tensile-ecc-intermediate-rates]] - 중간 속도 ECC 동적 인장
- [[impact-and-blast-resistance-frcc]] - 내충격 방호 복합체 설계 이론
