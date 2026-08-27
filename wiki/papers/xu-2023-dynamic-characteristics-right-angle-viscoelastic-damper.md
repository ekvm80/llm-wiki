---
title: "Dynamic Characteristics of Right-Angle Viscoelastic Dampers (Xu et al., 2023)"
type: source_note
source: "sources/xu-2023-dynamic-characteristics-of-a-novel.pdf"
citation: "Xu, Z., Zhang, C., & Li, V. C. (2023). Dynamic characteristics of a novel right-angle viscoelastic damper for seismic mitigation of building structures. Engineering Structures, 275, 115280. https://doi.org/10.1016/j.engstruct.2022.115280"
date: 2026-08-24
tags:
  - viscoelastic-damper
  - right-angle-damper
  - dynamic-characteristics
  - fractional-derivative-model
  - energy-dissipation
  - seismic-mitigation
---

## Summary
건축물 및 토목 구조물의 지진 및 풍진동 응답을 동시에 제어하기 위해, 고감쇠 점탄성 고분자 매트릭스(High-Damping Viscoelastic Material, Loss Factor $\eta > 0.85$)를 직각 강재 플레이트 사이에 적층한 신형 직각 점탄성 댐퍼(Right-Angle Viscoelastic Damper, RAVED)의 변위 의존성, 주파수 의존성($0.1 \sim 5.0 Hz$), 온도 의존성($-10 \sim +40 °C$) 및 등가 감쇠비 거동을 동적 전단 피로 시험과 5-매개변수 분수계 미분 구성모델(Fractional Derivative Model)로 동남대학교 및 미시간대학교 연구팀이 규명한 연구이다. 직각 배치를 통해 2방향 지진 변위를 동시에 흡수하며 등가 감쇠비를 **28.5 %**까지 증대시킴을 실증하였다.

## Key Contributions
- **신형 직각 2방향 점탄성 댐퍼(RAVED) 구조 메커니즘 수립**: 단일 장치로 직교 2축 층간 변위를 독립적으로 흡수 소산.
- **분수계 미분(Fractional Derivative) 점탄성 구성방정식 수립**: 주파수-온도 복합 전단 강성 $G'(\omega, T)$ 및 손실 계수 $\eta(\omega, T)$ 예측 정밀도 96 % 달성.
- **초고에너지 소산 안정성 실증**: 100 % 전단 변형률 하에서 30회 반복 사이클 후 에너지 감쇠율 5 % 미만 유지.
- **골조 구조물 층간 변위 65 % 저감 실증**: 5층 실물 골조 지진 모의 진동대 시험을 통해 내진 성능 검증.

## Methods
- 댐퍼 제작: 고감쇠 아크릴레이트 고무 매트릭스 (두께 10 mm, 전단 면적 $150 \times 150 mm$), Q345 강재 프레임.
- 시험 조건: MTS 고성능 액추에이터, 변위 진폭 $\gamma = 20 \sim 200 \%$, 주파수 $f = 0.1, 0.5, 1.0, 2.0, 5.0 Hz$, 온도 $-10, 0, 20, 40 °C$.
- 해석: MATLAB/Simulink 기반 비선형 이력 루프 fitting 및 ABAQUS 사용자 서브루틴 개발.

## Results
- 진동 주파수 및 전단 변형률별 댐퍼 동적 파라미터 데이터:

| 주파수 $f$ (Hz) | 전단 변형률 $\gamma$ (%) | 저장 전단강성 $K'$ ($kN/mm$) | 손실 전단강성 $K''$ ($kN/mm$) | 손실 계수 $\eta$ | 사이클당 소산 에너지 $E_D$ ($kJ$) |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 0.1 Hz | 100 % | 4.25 | 3.65 | 0.86 | 2.85 |
| 1.0 Hz | 100 % | **6.80** | **6.12** | **0.90** | **4.78** |
| 5.0 Hz | 100 % | 9.45 | 7.85 | 0.83 | 6.15 |
| 1.0 Hz | 200 % | 5.80 | 5.25 | 0.91 | 9.85 |

## Related Notes
- [[orban-2011-damping-materials-members-structures]] - 구조 및 재료 감쇠 이론
- [[muthusamy-2010-graphite-network-damping]] - 흑연 고감쇠 복합재
- [[xue-2013-rubberized-concrete-energy-dissipation-structural]] - 에너지 소산 구조재
