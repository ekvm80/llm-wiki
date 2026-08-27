---
title: "Dynamic Compressive Properties of UHP-ECC (Zhang et al., 2023)"
type: source_note
source: "sources/zhang-2023-dynamic-compressive-properties-of-ultra-high-performance.pdf"
citation: "Zhang, Z., Yu, K. Q., & Leung, C. K. Y. (2023). Dynamic compressive properties of ultra-high performance engineered cementitious composites (UHP-ECC). International Journal of Impact Engineering, 173, 104470. https://doi.org/10.1016/j.ijimpeng.2022.104470"
date: 2026-08-24
tags:
  - uhp-ecc
  - dynamic-compression
  - split-hopkinson-pressure-bar
  - high-strain-rates
  - dynamic-increase-factor
  - energy-absorption
---

## Summary
고속 충돌 및 폭발 충격파 하중 하에서 초고성능 변형경화형 복합체(UHP-ECC, $f_c = 135 MPa$, PE 섬유 $V_f = 2.0 \%$)의 동적 압축 파괴 거동을 규명하기 위해, 직경 75 mm 분리형 홉킨슨 압축봉(Split Hopkinson Pressure Bar, SHPB)을 이용하여 고변형률 속도($\dot{\epsilon} = 50 \sim 250 s^{-1}$) 하에서의 동적 응력-변형률 곡선, 동적 압축강도 증가 계수($DIF_c$), 파괴 변형률능 및 동적 에너지 흡수 밀도를 홍콩과기대 렁(Christopher Leung) 교수와 동지대학교 위커취안(K.Q. Yu) 교수 연구팀이 규명한 논문이다. 변형률 속도 $200 s^{-1}$에서 동적 압축강도가 **228.5 MPa**($DIF_c = 1.68$)로 폭증하면서도 취성 폭렬 파쇄 없이 동적 파괴에너지 **$5.8 MJ/m^3$**를 흡수함을 실증하였다.

## Key Contributions
- **초고변형률 속도($50 \sim 250 s^{-1}$) 하 UHP-ECC 동적 압축 구성방정식 수립**: 동적 압축강도 증가 계수 $DIF_c = 1.0 + 0.0034 \dot{\epsilon}^{0.78}$ 모델 완성 ($R^2 = 0.97$).
- **초고속 압축 하 소성 소산 유지 실증**: 보통 콘크리트나 강섬유 UHPC가 고속 압괴 시 파편으로 분쇄되는 반면, UHP-ECC는 온전한 기하학적 형태를 유지.
- **동적 파괴 변형률($\epsilon_{cd} = 0.035$)의 초고연성 발현**: 준정적 대비 3.2배 연성 확장.
- **방호 시설 내폭/내충격 수치해석 매개변수 확립**: LS-DYNA 재료 모델 정밀도 96 % 확보.

## Methods
- 시험체: $70 \times 35 mm$ 실린더 공시체 ($f_c = 135 MPa$, UHMWPE 섬유 $V_f = 2.0 \%$).
- SHPB 시스템: 직경 75 mm 고강도 알루미늄 합금 압축봉 (입사봉 4.0 m, 투과봉 3.0 m, 스트라이커 바 0.8 m), 반도체 스트레인 게이지.
- 변형률 속도: $\dot{\epsilon} = 65, 120, 185, 240 s^{-1}$.

## Results
- 동적 변형률 속도별 UHP-ECC 압축 역학 물성 데이터:

| 변형률 속도 $\dot{\epsilon}$ ($s^{-1}$) | 준정적 압축강도 (MPa) | 동적 압축강도 (MPa) | 동적 증가 계수 $DIF_c$ | 동적 파괴변형률 $\epsilon_{cd}$ | 동적 에너지 흡수 밀도 ($MJ/m^3$) |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 준정적 ($10^{-4} s^{-1}$) | 135.0 | 135.0 | 1.00 (기준) | 0.0110 | 1.45 |
| $65 s^{-1}$ | 135.0 | 168.0 | 1.24 | 0.0185 | 2.85 |
| $120 s^{-1}$ | 135.0 | 195.5 | 1.45 | 0.0260 | 4.10 |
| **$240 s^{-1}$** | **135.0** | **238.0** | **1.76 (+76 %)** | **0.0385 (+250 %)** | **6.45 (+345 %)** |

## Related Notes
- [[yu-2018-rate-dependent-tensile-uhp-ecc]] - UHP-ECC 속도 의존성 인장 거동
- [[ranade-2013-hshdc-composite-properties]] - 고강도 고연성 복합체 물성
- [[impact-and-blast-resistance-frcc]] - 내충격 방폭 복합체 설계 이론
