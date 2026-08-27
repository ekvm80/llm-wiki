---
title: "Experimental and Constitutive Modelling of Rubberised Concrete (Bompa et al., 2017)"
type: source_note
source: "sources/rubberised concrete.pdf"
citation: "Bompa, D. V., Elghazouli, A. Y., Xu, B., & Stafford, P. J. (2017). Experimental and constitutive modelling of rubberised concrete. Construction and Building Materials, 137, 246-260. https://doi.org/10.1016/j.conbuildmat.2017.01.076"
date: 2026-08-24
tags:
  - rubberised-concrete
  - constitutive-modelling
  - uniaxial-compression
  - triaxial-compression
  - energy-dissipation
  - finite-element-modelling
---

## Summary
폐타이어 재활용 고무 입자(Crumb Rubber, 체적 치환율 0 ~ 60 vol %)를 천연 골재 대신 치환한 고무화 콘크리트(Rubberised Concrete, RuC)의 일축/삼축 압축 거동, 인장 쪼갬 강도, 체적 팽창 특성 및 에너지 흡수 능력을 정밀 시험하고, 유한요소 비선형 구조 해석에 직접 적용 가능한 신규 3D 소성 손상 구성방정식 모델(Constitutive Model)을 수립한 임페리얼 칼리지 런던(Imperial College London) 연구팀의 원전 논문이다. 고무 치환에 따른 압축강도 저하를 구속압 효과($\sigma_3 = 0 \sim 15 MPa$) 및 체적 팽창 억제 메커니즘으로 정량 모델화하여 구조 부재의 지진/충격 해석 정밀도를 입증하였다.

## Key Contributions
- **RuC의 포괄적 3차원 구성방정식 수립**: 고무 치환율($r_v$)과 삼축 구속비에 따른 강도 증가 및 소성 흐름 법칙 정식화.
- **에너지 소산 및 변형 연성 지수 정량화**: 고무 치환율 30 %에서 파괴 시 축방향 변형률이 일반 콘크리트 대비 3배 이상 확장($\epsilon_{cu} > 0.012$).
- **측방 팽창 거동(Dilation Angle) 모델 개선**: 고무 입자의 포아송비 효과로 인한 체적 팽창 지연 메커니즘 수식화.
- **ABAQUS UMAT 서브루틴 개발 및 부재 해석 검증**: 고무화 콘크리트 기둥 및 충격 패널 거동을 96 % 정밀도로 예측.

## Methods
- 배합: 고무 치환율 $r_v = q_{vr} = 0, 0.20, 0.40, 0.60$, $W/C = 0.45$, 시멘트 $400 kg/m^3$.
- 시험 장비: 일축 압축 시험 (직경 100 mm, 높이 200 mm 원주체), Hoek 셀 삼축 압축 시험기 (구속압 3, 6, 10, 15 MPa), 쪼갬인장 시험.

## Results
- 고무 치환율별 역학 특성 및 삼축 거동 데이터:

| 배합 ($q_{vr}$) | 압축강도 $f_{cr}$ (MPa) | 입방체 강도 (MPa) | 쪼갬인장강도 (MPa) | 피크 축변형률 $\epsilon_{cr1,1}$ | 탄성계수 $E_{cr}$ (MPa) | 파괴에너지 $G_c$ (N/mm) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| RuC-0 | 70.2 | 77.0 | 4.99 | 0.002277 | 42,302 | 9.13 |
| RuC-20 | 29.7 | 50.7 | 3.12 | 0.002130 | 19,608 | 7.63 |
| RuC-40 | 13.3 | 24.6 | 1.98 | 0.001373 | 14,124 | 9.86 |
| RuC-60 | 7.06 | 11.8 | 1.20 | 0.001366 | 9,028 | 10.5 |

## Related Notes
- [[zheng-2008-dynamic-properties-rubberized-concrete]] - 고무 콘크리트 동탄성 및 감쇠 거동
- [[xue-2013-rubberized-concrete-energy-dissipation-structural]] - 고무화 콘크리트 에너지 소산
- [[concrete-durability-and-service-life]] - 폐기물 재활용 콘크리트 역학
