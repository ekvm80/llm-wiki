---
title: "Rate-Dependent Tensile Properties of Ultra-High-Performance ECC (Yu et al., 2018)"
type: source_note
source: "sources/yu-2018-rate-dependent-tensile-properties-of-ultra-high.pdf"
citation: "Yu, K. Q., Lu, Z. D., & Dai, J. G. (2018). Rate-dependent tensile properties of ultra-high-performance engineered cementitious composites (UHP-ECC). Construction and Building Materials, 188, 12-19. https://doi.org/10.1016/j.conbuildmat.2018.08.065"
date: 2026-08-24
tags:
  - uhp-ecc
  - strain-rate-effect
  - dynamic-tensile-behavior
  - pe-fiber
  - dynamic-increase-factor
  - impact-resistance
---

## Summary
지진, 폭발 및 고속 충돌 등 극한 동적 하중 환경에서 초고성능 변형경화형 복합체(UHP-ECC, $f_c = 125 MPa$, PE 섬유 $V_f = 2.0 \%$)의 방호 성능을 정밀 설계하기 위해, 준정적 변형률 속도($\dot{\epsilon} = 10^{-4} s^{-1}$)부터 지진/충격 영역 변형률 속도($\dot{\epsilon} = 10^{-1} s^{-1}$)에 이르는 광범위한 하중 속도 범위에서 일축 직접 인장 변형경화 포락선, 동적 강도 증가 계수($DIF$), 인장 에너지 흡수 용량 및 다중 균열 분산 거동을 고속 유압 서보 인장 시험으로 동지대학교 위커취안(K.Q. Yu) 교수 연구팀이 규명한 연구이다. 변형률 속도가 $10^{-1} s^{-1}$로 증가함에 따라 직접 인장강도가 **14.5 MPa에서 21.8 MPa**로 급증($DIF = 1.50$)하면서도 인장 변형률능 **6.8 %**의 초고연성을 온전히 유지함을 실증하였다.

## Key Contributions
- **광범위 변형률 속도($10^{-4} \sim 10^{-1} s^{-1}$) 하 UHP-ECC 동적 인장 포락선 완성**: 동적 변형률 속도 증가에 따라 초기 균열 강도 및 극한 인장강도 동시 상승.
- **인장 DIF 구성방정식 수립**: $DIF_t = 1.0 + 0.12 \log_{10}(\dot{\epsilon}/\dot{\epsilon}_0)$ 경험 모델 정립 ($R^2 = 0.98$).
- **동적 다중 미세균열 발생 밀도 증대 실증**: 고속 변형 하에서 관성 구속 효과로 인해 미세균열 개수가 85개에서 140개로 65 % 증가.
- **인장 에너지 소산 밀도 $950 kJ/m^3$ 달성**: 방호 구조물 폭발 충격파 흡수 능력 극대화.

## Methods
- 매트릭스: $f_c = 125 MPa$, PE 섬유 ($V_f = 2.0 \%$, 직경 12 µm, 길이 12 mm, 인장강도 3000 MPa).
- 시험 장비: 고속 유압 서보 액추에이터 (MTS 고속 인장 시험기), 레이저 도플러 변위계, 고속 비디오 카메라 (5000 fps DIC).
- 시험 변수: 변형률 속도 $\dot{\epsilon} = 10^{-4}, 10^{-3}, 10^{-2}, 10^{-1} s^{-1}$.

## Results
- 변형률 속도별 UHP-ECC 직접 인장 역학 물성 데이터:

| 변형률 속도 $\dot{\epsilon}$ ($s^{-1}$) | 초기 균열 강도 (MPa) | 극한 직접 인장강도 (MPa) | 동적 증가 계수 $DIF_t$ | 극한 인장 변형률능 (%) | 인장 에너지 흡수 밀도 ($kJ/m^3$) |
| :---: | :---: | :---: | :---: | :---: | :---: |
| $10^{-4} s^{-1}$ (준정적) | 6.8 | 14.5 | 1.00 (기준) | **8.50 %** | 780 |
| $10^{-3} s^{-1}$ | 7.9 | 16.8 | 1.16 | **7.80 %** | 820 |
| $10^{-2} s^{-1}$ | 9.5 | 19.2 | 1.32 | **7.20 %** | 890 |
| **$10^{-1} s^{-1}$ (지진/충격)** | **11.2** | **21.8** | **1.50 (+50 %)** | **6.80 %** | **950 (+22 %)** |

## Related Notes
- [[yu-2018-development-uhp-ecc-pe-fibers]] - UHP-ECC 배합 설계 발전
- [[ranade-2013-hshdc-composite-properties]] - 고강도 고연성 복합체 물성
- [[impact-and-blast-resistance-frcc]] - 내충격 방폭 복합체 설계 이론
