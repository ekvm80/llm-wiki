---
title: "DEM Mechanical Analysis of Lunar Construction and Regolith Structures (Zhou et al., 2024)"
type: source_note
source: "sources/zhou-2024-research-and-application-of-dem.pdf"
citation: "Zhou, Z., Zhang, Y., & Liu, J. (2024). Research and application of discrete element method (DEM) in lunar geotechnical engineering and regolith construction. Advances in Space Research, 73(5), 2450-2465. https://doi.org/10.1016/j.asr.2023.11.025"
date: 2026-08-24
tags:
  - lunar-construction
  - discrete-element-method
  - lunar-regolith-mechanics
  - isru
  - low-gravity
  - space-civil-engineering
---

## Summary
달 표면의 극단적 저중력(1/6 g) 및 초고진공 환경에서 달 현지 토양(레골리스)의 굴삭, 이송, 다짐, 소결 및 거주 돔 상부 복토 차폐벽의 지지력과 지반-구조 상호작용(SSI)을 전산 역학적으로 시뮬레이션하기 위해, 비구형 입자 클러스터 형상과 반데르발스 미소 부착력 모델을 결합한 3차원 이산요소법(Discrete Element Method, DEM) 우주 지반 공학 해석 프레임워크를 개발한 2024년 연구 논문이다. 1/6 g 저중력 하에서 레골리스의 내부마찰각($\phi = 42°$)과 극한 지지력($q_{ult}$) 및 3m 복토 돔의 구조 안전성을 수치적으로 입증하였다.

## Key Contributions
- **달 저중력 및 진공 환경 맞춤형 3D DEM 레골리스 입자 모델 수립**: 불규칙 파쇄 형상 및 미소 점착력($c = 0.5 \sim 2.5 kPa$) 구현.
- **달 거주 모듈 상부 3m 복토 차폐층의 안정성 해석**: 지진 진동 하 토압 분포 및 아칭 효과(Arching Effect) 정량화.
- **무인 자동 굴삭 로버의 최적 버킷 형상 도출**: 굴삭 에너지 소비량을 지구 중력 대비 40 % 절감.
- **달 기지 인프라 시공 엔지니어링 표준 수립**: NASA 및 CNSA 달 기지 건설 기초 데이터 제공.

## Methods
- DEM 해석: PFC3D 이산요소 솔버, Contact Hertz-Mindlin 접촉 모델 + 미시 점착력 모델.
- 환경 파라미터: 중력 가속도 $g = 1.62 m/s^2$, 입도 분포 아폴로 11호 토양 샘플 ($d_{50} = 72 \mu m$).
- 시험 검증: 1/6 g 포물선 비행 미소중력 챔버 내 복제토 삼축 압축 시험 데이터 대조.

## Results
- 달 저중력 하 레골리스 지반 역학 및 복토 구조 안정성 해석 데이터:

| 해석 항목 | 지구 환경 (1 g) | 달 환경 (1/6 g) | 우주 환경 영향 및 특징 |
| :--- | :---: | :---: | :--- |
| 레골리스 단위 체적중량 | $18.5 kN/m^3$ | **$3.08 kN/m^3$** | 자중 1/6 감소로 지지력 저하 |
| 유효 내부마찰각 $\phi$ | 40.5° | **42.8°** | 진공 청정 표면 마찰 맞물림 증가 |
| 얕은 기초 극한 지지력 $q_{ult}$ | 450 kPa | **125 kPa** | 지반 지지력 72 % 감소 (대책 필요) |
| 3m 복토 돔 상부 토압 | 55.5 kPa | **9.25 kPa** | 구조물 부담 대폭 완화 (돔 자중 감소) |

## Related Notes
- [[toklu-2000-lunar-base-civil-engineering]] - 달 기지 토목 공학 원전
- [[ruess-2006-structural-design-lunar-habitat]] - 달 거주 구조물 구조 설계
- [[lunar-isru-materials]] - 우주 현지 자원 건설 재료 총설
