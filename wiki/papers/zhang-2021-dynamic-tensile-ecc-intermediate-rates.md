---
title: "Dynamic Tensile Behavior of ECC under Intermediate Strain Rates (Zhang et al., 2021)"
type: source_note
source: "sources/zhang-2021-dynamic-tensile-behavior-of-engineered.pdf"
citation: "Zhang, Y., Shang, B., & Yang, E. H. (2021). Dynamic tensile behavior of engineered cementitious composites (ECC) under intermediate strain rates. International Journal of Impact Engineering, 150, 103812. https://doi.org/10.1016/j.ijimpeng.2020.103812"
date: 2026-08-24
tags:
  - dynamic-tensile-behavior
  - intermediate-strain-rates
  - rate-sensitivity
  - pva-ecc
  - dynamic-increase-factor
  - energy-absorption
---

## Summary
지진 지반 운동 및 차량 충돌 시 발생하는 중간 변형률 속도 영역($\dot{\epsilon} = 10^{-4} \sim 10^{-1} s^{-1}$)에서 고연성 복합체(PVA-ECC)의 동적 인장 강도 상승, 변형경화 포락선 변천, 인장 파괴에너지 흡수율 및 단일 PVA 섬유 계면 마찰응력($\tau_0$)의 속도 민감도(Rate Sensitivity)를 난양공과대학교(NTU) 양언화(E.H. Yang) 교수 연구팀이 고속 유압 인장 시험으로 규명한 연구이다. 변형률 속도가 $10^{-1} s^{-1}$로 증가함에 따라 직접 인장강도가 **4.8 MPa에서 7.2 MPa**로 50 % 상승($DIF_t = 1.50$)하면서도 인장 변형률능 **3.8 %**와 파괴에너지 **$245 kJ/m^3$**를 유지함을 실증하였다.

## Key Contributions
- **중간 변형률 속도 하 PVA-ECC 동적 인장 지배방정식 수립**: 정적 대비 동적 인장강도 증가 계수 $DIF_t = 1.0 + 0.11 \log_{10}(\dot{\epsilon}/\dot{\epsilon}_0)$ 모델 정립.
- **동적 가력 하 점성 유체 브리징 및 계면 마찰 증대 메커니즘 규명**: 간극수의 스테판 점성 저항(Stefan effect)이 동적 계면 결합력 상승 주도.
- **충격 에너지 흡수 밀도 45 % 증대 실증**: 지진 및 차량 충돌 방호벽 적용 신뢰성 확보.
- **다중 미세균열 발생 밀도 보존**: 고속 인장 하에서도 35개 이상의 미세 분산 균열 형성.

## Methods
- 배합: PVA-ECC (Kuraray REC15, $V_f = 2.0 \%$, $f_c = 46.5 MPa$, $W/B = 0.45$).
- 시험 장비: 고속 유압 서보 액추에이터, 고정밀 레이저 변위계, 5000 fps 고속 카메라 DIC.
- 변형률 속도: $\dot{\epsilon} = 10^{-4}, 10^{-3}, 10^{-2}, 10^{-1} s^{-1}$.

## Results
- 변형률 속도별 PVA-ECC 직접 인장 역학 물성 데이터:

| 변형률 속도 $\dot{\epsilon}$ ($s^{-1}$) | 초기 균열 강도 (MPa) | 극한 직접 인장강도 (MPa) | 동적 강도 계수 $DIF_t$ | 극한 인장 변형률능 (%) | 인장 에너지 흡수 밀도 ($kJ/m^3$) |
| :---: | :---: | :---: | :---: | :---: | :---: |
| $10^{-4} s^{-1}$ (준정적) | 3.50 | 4.80 | 1.00 (기준) | **4.50 %** | 175 |
| $10^{-3} s^{-1}$ | 4.10 | 5.45 | 1.14 | **4.20 %** | 195 |
| $10^{-2} s^{-1}$ | 4.80 | 6.20 | 1.29 | **4.00 %** | 218 |
| **$10^{-1} s^{-1}$ (지진/충격)** | **5.60** | **7.20** | **1.50 (+50 %)** | **3.80 %** | **245 (+40 %)** |

## Related Notes
- [[yu-2018-rate-dependent-tensile-uhp-ecc]] - UHP-ECC 고속 인장 물성
- [[impact-and-blast-resistance-frcc]] - 내충격 방호 복합체 설계 이론
- [[pseudo-strain-hardening-criteria]] - PSH 미시역학 이론
