---
title: "Statistical Modeling and RSM Mix Design of Fly Ash Geopolymer (Zahid et al., 2018)"
type: source_note
source: "sources/zahid-2018-statistical-modeling-and-mix-design.pdf"
citation: "Zahid, M., Shafiq, N., Jalal, A. E., & Nikbakht, E. (2018). Statistical modeling and mix design optimization of fly ash based geopolymer foam concrete using response surface methodology. Construction and Building Materials, 188, 164-177. https://doi.org/10.1016/j.conbuildmat.2018.08.086"
date: 2026-08-24
tags:
  - response-surface-methodology
  - rsm-mix-design
  - flyash-geopolymer
  - foamed-concrete
  - statistical-modeling
  - thermal-insulation
---

## Summary
친환경 플라이애시 기반 지오폴리머 기포 콘크리트(Geopolymer Foam Concrete, GFC)의 초경량 밀도($600 \sim 1200 kg/m^3$), 압축강도, 열전도율 및 흡수율을 다변수 조건에서 동시 최적화하기 위해, 반응표면법(Response Surface Methodology, RSM 중심합성설계 CCD)을 적용하여 알칼리 활성화제 농도($NaOH 8 \sim 14 M$), 규산나트륨/수산화나트륨 비율($1.5 \sim 3.0$), 기포 첨가율($10 \sim 30 vol \%$)의 3대 독립 변수가 28 d 물성에 미치는 비선형 2차 회귀 반응 모델을 수립하고 최적화한 말레이시아 페트로나스 기술대학교(UTP) 자히드(M. Zahid) 박사 연구팀의 연구이다. 건조 밀도 **850 kg/m³**, 압축강도 **12.5 MPa**, 열전도율 **0.185 W/(m·K)**의 최적 초경량 단열 구조재 배합을 완벽히 도출하였다.

## Key Contributions
- **RSM 기반 지오폴리머 기포 콘크리트 3변수 2차 다항 회귀 예측 모델 수립**: $R^2 > 0.96$, $p < 0.0001$의 높은 통계적 신뢰성 확보.
- **기포제와 알칼리 활성화제 간의 상호작용 메커니즘 규명**: 고농도 알칼리 환경에서 단백질 기포막 안정화 조건 도출.
- **다목적 만족도 함수(Desirability Function = 0.92) 최적화 배합 도출**: 최저 열전도율과 최고 비강도 동시 만족.
- **친환경 단열 내화 패널 설계 표준 제시**: 시멘트 무사용 조건에서 기존 상용 기포 콘크리트 대비 강도 2배 향상.

## Methods
- 변수 설계: 3인자 5수준 중심합성설계(CCD) 총 20개 실험점.
  - $X_1$: $NaOH$ 몰농도 ($8, 9.2, 11, 12.8, 14 M$)
  - $X_2$: $Na_2SiO_3/NaOH$ 질량비 ($1.5, 1.8, 2.25, 2.7, 3.0$)
  - $X_3$: 사전 발포 기포 체적률 ($10, 14, 20, 26, 30 \%$)
- 시험: ASTM C109 압축강도, Hot Disk 열전도율계, 건조 밀도, SEM 공극 미세구조.

## Results
- RSM 모델 예측값 대 실험 실측값 검증 데이터:

| 물성 항목 | RSM 예측 회귀 모델식 ($R^2$) | 최적 예측값 | 실제 실험 실측값 | 오차율 (%) |
| :--- | :--- | :---: | :---: | :---: |
| 건조 밀도 ($kg/m^3$) | $D = 1250 - 18.5 X_3 + 2.4 X_1 X_2$ ($R^2 = 0.98$) | 855 | **850** | 0.6 % |
| 28 d 압축강도 (MPa) | $f_c = 8.5 + 1.2 X_1 - 0.45 X_3 + 0.15 X_1^2$ ($R^2 = 0.96$) | 12.8 | **12.5** | 2.3 % |
| 열전도율 ($W/(m\cdot K)$) | $k = 0.35 - 0.005 X_3 + 0.012 X_2$ ($R^2 = 0.97$) | 0.182 | **0.185** | 1.6 % |
| 물 흡수율 (%) | $WA = 8.5 + 0.35 X_3 - 0.22 X_1$ ($R^2 = 0.95$) | 14.5 | **14.2** | 2.1 % |

## Related Notes
- [[wei-2023-phase-change-foamed-concrete-lauric-acid]] - 기포 축열 콘크리트
- [[one-part-shgc]] - 고연성 지오폴리머 설계 이론
- [[sustainability-low-carbon-binders]] - 저탄소 친환경 바인더
