---
title: "Optimum Lunar and Martian Structures (Toklu, 2005)"
type: source_note
source: "sources/toklu-2005-optimum-lunar-and-martian-structures.pdf"
citation: "Toklu, Y. C. (2005). Optimum lunar and Martian structures. In Earth and Space 2004: Proceedings of the 9th ASCE Aerospace Division International Conference on Engineering, Construction, and Operations in Challenging Environments (pp. 518-525). ASCE."
date: 2026-08-24
tags:
  - lunar-structures
  - martian-structures
  - structural-optimization
  - genetic-algorithms
  - isru
  - space-habitats
---

## Summary
달(중력 0.166 g, 고진공) 및 화성(중력 0.38 g, 이산화탄소 대기 $0.006 atm$, 혹한 $-60 °C$, 모래폭풍) 표면의 서로 다른 극한 환경 조건에 최적화된 우주 거주 모듈(Extraterrestrial Habitats)의 기하학적 형상, 자중 대비 유효 용적률, 막 응력 분포 및 복토 두께를 유전 알고리즘(Genetic Algorithm) 다목적 최적화로 설계한 터키 동지중해 대학교 토클루(Y. C. Toklu) 교수의 ASCE Earth and Space 명저 논문이다. 화성과 달의 중력 및 대기압 차이에 따른 최적 셸 곡률 반경과 최소 중량 구조 단면을 수학적으로 도출하였다.

## Key Contributions
- **달 대 화성 표면 구조물의 5대 환경 차이 및 최적 구조 폼 비교 정식화**: 중력 가속도, 대기압, 풍하중 유무에 따른 차등 설계 기준 수립.
- **유전 알고리즘 기반 최소 중량-최대 용적 돔 형상 최적화**: 3차원 축대칭 카테너리 곡면에서 모멘트 프리(Moment-free) 무모멘트 막 응력 상태 실현.
- **현지 토양 복토 두께 최적화 모델 수립**: 달 2.5 m (방사선 중심) 대 화성 1.5 m (풍하중 및 지지력 중심).
- **지구 수송 자재 최소화 및 자율 시공성 극대화**: 경량 모듈러 팽창 구조와 현지 자동 복토 시스템 결합.

## Methods
- 최적화 알고리즘: 다목적 유전 알고리즘 (목적함수: 구조 질량 최소화, 거주 유효 면적 극대화, 응력 분산).
- 환경 하중 입력:
  - 달: 중력 $g_L = 1.62 m/s^2$, 외부 압력 $0 kPa$, 내부 여압 $101.3 kPa$, 방사선 $GCR/SPE$.
  - 화성: 중력 $g_M = 3.71 m/s^2$, 외부 압력 $0.6 kPa$, 풍속 $v_{wind} = 30 m/s$, 모래폭풍 충격.

## Results
- 달 및 화성 최적 거주 구조물 설계 파라미터 비교표:

| 항목 | 달 최적 거주 돔 (Lunar Habitat) | 화성 최적 거주 돔 (Martian Habitat) | 설계 차이 역학적 근거 |
| :--- | :---: | :---: | :--- |
| 최적 돔 높이/직경 비 ($H/D$) | 0.35 (편평한 돔) | 0.50 (반구형 돔) | 화성 풍하중 및 높은 중력 지지 |
| 현지 레골리스 복토 두께 | **2.5 m** | **1.5 m** | 달의 강력한 우주선 차폐 필요성 |
| 막 인장응력 (여압 하) | 52.0 MPa | 68.5 MPa | 외부 대기압 및 자중 보상 차이 |
| 구조 자중 대비 수용 인원 | $1.2 ton/인$ | $1.8 ton/인$ | 화성의 높은 중력 지지 단면 확보 |
| 주요 고려 극한 하중 | 진공 여압 팽창, 방사선 | 풍하중 횡력, 저온 열수축 | 환경 맞춤 최적화 달성 |

## Related Notes
- [[toklu-2000-lunar-base-civil-engineering]] - 달 기지 토목 공학 원전
- [[ruess-2006-structural-design-lunar-habitat]] - 달 거주 구조물 구조 설계
- [[lunar-isru-materials]] - 우주 현지 자원 건설 재료 총설
