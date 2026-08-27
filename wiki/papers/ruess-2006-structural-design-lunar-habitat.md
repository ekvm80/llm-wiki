---
title: "Structural Design of a Lunar Habitat (Ruess et al., 2006)"
type: source_note
source: "sources/ruess-2006-structural-design-of-a-lunar.pdf"
citation: "Ruess, F., Schaenzlin, J., & Benaroya, H. (2006). Structural design of a lunar habitat. Journal of Aerospace Engineering, 19(3), 133-157. https://doi.org/10.1061/(ASCE)0893-1321(2006)19:3(133)"
date: 2026-08-24
tags:
  - lunar-habitat
  - structural-design
  - inflatable-structures
  - regolith-shielding
  - thermal-vacuum-analysis
  - finite-element-modelling
---

## Summary
미국 럿거스 대학교(Rutgers University) 베나로야(H. Benaroya) 교수 연구팀이 달 표면 영구 기지 거주 모듈(Lunar Habitat)의 구조 안전성, 여압 밀폐성, 우주 방사선 및 미소운석 방호 능력을 극대화하기 위해, 다층 팽창식 막 구조(Inflatable Membrane)와 외곽 달 토양(레골리스) 복토 차폐층(두께 2.0 ~ 3.0 m)을 결합한 하이브리드 거주 돔 구조 시스템의 구조 설계, 3차원 비선형 유한요소 해석(FEA) 및 열사이클 신뢰성 평가를 집대성한 ASCE Journal of Aerospace Engineering의 불후의 명저 논문이다. 내부 여압($101.3 kPa$)과 상부 3m 레골리스 중력 하중이 상호 균형을 이루는 최적 아치-돔 형상을 도출하였다.

## Key Contributions
- **달 거주 모듈 하이브리드 팽창-복토 구조 시스템 수립**: 내부 인장 여압과 외부 압축 토압의 하중 평형 최적화 설계.
- **다층 방호 막(Multi-layer Membrane: 케블라, 캡톤, 넥스텔) 복합 피복 설계**: 미소운석($v = 20 km/s$) 충돌 완벽 차폐.
- **3차원 비선형 FEA를 통한 좌굴 및 응력 집중 해석**: 지진 및 국소 압력 강하 시의 극한 구조 안전율 $SF > 2.5$ 확보.
- **달 열사이클($-150 \sim +120 °C$) 하 열응력 완충 설계**: 3m 레골리스 층의 높은 열용량으로 구조 내부 온도 $20 \pm 2 °C$ 유지.

## Methods
- 구조 모델: 직경 12 m, 높이 6 m 돔형 팽창식 모듈 (케블라 49 직조 막재, 인장강도 3000 MPa).
- FEA 해석: ANSYS 비선형 대변형 셸 및 솔리드 연성 해석.
- 하중 조건: 내부 여압 $101.3 kPa$, 달 중력 $1.62 m/s^2$, 상부 레골리스 하중(밀도 $1800 kg/m^3$, 두께 2.5 m).

## Results
- 달 거주 구조물 하중 조건별 응력 및 안전율 해석 결과:

| 하중 조건 | 최대 막 인장응력 (MPa) | 외피 압축응력 (MPa) | 최대 처짐 변위 (mm) | 구조 안전율 ($SF$) |
| :--- | :---: | :---: | :---: | :---: |
| 여압만 재하 ($101.3 kPa$) | 145.2 | - | +28.5 (팽창) | 3.85 |
| 여압 + 2.5m 레골리스 복토 | 42.0 | 12.5 | -4.2 (균형 상태) | 4.50 |
| 여압 상실 비상 조건 | - | 38.5 | -65.0 (압축 침하) | 2.15 |

## Related Notes
- [[lunar-isru-materials]] - 우주 현지 자원 건설 재료 총설
- [[cesaretti-2014-lunar-soil-3d-printing]] - 3D 프린팅 달 기지 건설
- [[lin-1985-concrete-lunar-base-construction]] - 달 기지 콘크리트 건설 원전
