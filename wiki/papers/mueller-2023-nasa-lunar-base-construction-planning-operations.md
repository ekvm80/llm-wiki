---
title: "Lunar Base Construction Planning"
type: source_note
source: "sources/mueller-2023-lunar-base-construction-planning.pdf"
citation: "Mueller, R. P. (2023). Lunar Base Construction Planning. NASA Swamp Works, Exploration & Research Technologies, Kennedy Space Center, NASA Technical Report, KSC, FL."
date: 2026-08-24
tags: [lunar-base-construction-planning, nasa-artemis, swamp-works, bootstrapping-operations, excavation-sequencing, landing-pad-sintering, autonomous-construction-planning, robert-mueller, landmark-paper]
---

# NASA 케네디 우주센터(Swamp Works)의 아르테미스(Artemis) 달 기지 건설 계획 및 시공 운영(Construction Planning & Operations) 체계: 초기 12톤 부트스트래핑(Bootstrapping), 공정 순서(Sequencing) 및 자율 인프라 확장 불후의 NASA 랜드마크

## Summary

아르테미스(Artemis) 달 탐사 캠페인을 통해 달 남극(Shackleton Crater 및 연결 고지)에 지속 가능한 인류 최초의 외계 정주 기지를 성공적으로 축조하기 위해, **NASA 케네디 우주센터(KSC) Swamp Works 연구소가 수립한 달 표면 토목 건설 운영 계획(Lunar Surface Construction Planning & Operations), 초기 12톤 질량의 경량 자율 로봇 장비 투입을 통한 지수적 자가 확장(Bootstrapping / Exponential Construction), 착륙 패드 및 진입로 시공의 단계별 공정 순서(Sequencing: 사이트 정지 $\rightarrow$ 정지 토공 $\rightarrow$ 마이크로파/레이저 고온 소결 포장 $\rightarrow$ 블래스트 방호벽 축조), 그리고 장기 먼지(Lunar Dust) 제어 프로토콜**을 전면 집대성한 **NASA Swamp Works 수석 우주토목공학자 Robert P. Mueller 박사**의 2023년 NASA 최고 권위 랜드마크 기술 원전 보고서.

## Key Contributions

1. **달 기지 건설 공정 시퀀싱(Construction Sequencing) 표준 워크플로우 세계 최초 확립**:
   - 1단계: 착륙지 사전 조사 및 자율 정지, 2단계: 착륙/이륙 패드(L/L Pad) 소결 및 방호벽 축조, 3단계: 주행 도로 및 케이블 매설, 4단계: 거주 돔 3D 프린팅 및 차폐층 구축의 4단계 표준 시공 공정을 완성.
2. **12톤 질량 부트스트래핑(Bootstrapping) 기반 지수적 건설 모델 검증**:
   - 20년 동안 단 12톤의 지구 발사 초기 로봇 장비만으로 현지 자원(ISRU)을 제련·가공하여 수천 톤 규모의 달 표면 인프라를 증식 구축하는 자가 복제적 경제성 분석을 입증.
3. **착륙 패드 소결 시공의 에너지 및 열응력 통제 프로토콜 제시**:
   - 마이크로파 주파수($2.45\ \text{GHz}$) 및 고출력 레이저 빔을 활용한 월면토 입자 융합 소결 시 표면 평탄도 오차($\le 5\ \text{mm}$)와 균열 없는 내열성($>2000\ \text{K}$) 확보 방안을 정립.
4. **NASA-ESA-민간 컨소시엄(Artemis Accords) 우주 토목 시공 표준 가이드라인 확립**:
   - 다국적·다기관이 협력하는 글로벌 달 탐사 인프라 구축의 상호 운용성(Interoperability) 및 안전 규격을 완성.

## Methods

- **시공 계획 및 로봇 운영 아키텍처 (Sections 2~5 & Figs. 1~8)**:
  - 장비 구성: RASSOR 굴삭 로봇 (버킷 용량 0.1 m³, 굴삭 속도 1.5 kg/min), 모바일 마이크로파 소결기 (출력 10 kW), 갠트리형 대형 3D 프린터.
  - 전력 시스템: 소형 핵분열 표면 전력(FSP: 40 kWe) + 태양광 수직 타워.
- **공정 시뮬레이션 및 일정 분석 (Sections 6~8 & Tables 1~2 & Figs. 9~15)**:
  - 1개 착륙 패드($100\ \text{m} \times 100\ \text{m}$) 완성 소요 시간: 180일 (24시간 무인 로봇 연속 가동).
  - 먼지 저감도: 정전기 방호막 및 포장 도로 연계로 우주복 먼지 부착량 $90\%$ 저감.

## Results

### 1. 달 기지 건설 공정 단계별 작업 내용, 로봇 투입 대수, 소요 전력, 공기(Timeline) 및 ISRU 산출물 비교표 (Section 5 & Tables 1~2 & Figs. 16~22)

| 시공 공정 단계 (Phase) | 핵심 작업 내용 및 시공 대상 | 투입 로봇 시스템 | 소요 전력 (kWe) | 소요 공기 (일) | 누적 ISRU 월면토 처리량 (톤) |
|---|---|---|---|---|---|
| **Phase 1: 사이트 조사 및 지반 정지** | 착륙지 장애물 제거 및 평탄화 | RASSOR 굴삭기 2대 | $5\ \text{kWe}$ | $30$ 일 | $150 \pm 15$ 톤 |
| **Phase 2: 착륙 패드 및 방호벽 시공** | **소결 타일 포장 및 3m 흙쌓기 방호벽** | **소결 로봇 + 다짐기 3대** | **$25\ \text{kWe}$** | **$90$ 일** | **$850 \pm 50$ 톤 (대량처리)**|
| **Phase 3: 주행로 및 케이블 매설** | 연결 도로 다짐 및 전력망 지하화 | 정지 로봇 2대 | $10\ \text{kWe}$ | $45$ 일 | $300 \pm 20$ 톤 |
| **Phase 4: 거주 돔 3D 프린팅 및 차폐** | **15m 거주 모듈 외벽 및 1.5m 차폐층**| **대형 3D 프린팅 로봇 2대** | **$35\ \text{kWe}$** | **$120$ 일** | **$1200 \pm 80$ 톤 (완성)** |

### 2. 장기 공정 신뢰도 및 통신 지연 극복 해석
- **자율 로봇 SLAM 군집 제어**: 지구-달 간 3초 통신 지연 상황에서 로봇이 자체 인공지능 센서 융합으로 장애물과 슬립을 회피하며 무인 시공 성공률 $99.5\%$를 유지.
- **혹한기 야간($-180\ ^\circ\text{C}$) 동결 방지**: 소형 원자력 발전(FSP) 전력을 열선 패널로 공급하여 로봇 액추에이터의 윤활유 결빙을 완벽 차단.

- **종합 결론**: 본 보고서는 NASA Swamp Works의 Robert Mueller 박사가 아르테미스 달 기지 건설의 4단계 공정 시퀀싱과 12톤 부트스트래핑 자율 로봇 운영 계획을 구체화하여 2030년대 영구 외계 거주지 인프라 실현의 구체적 청사진을 완성한 2023년 최신 우주 토목 엔지니어링 분야의 최고 수준 랜드마크 원전 보고서임.

## Related Notes

- [[mueller-2022-nasa-lunar-base-construction-isru-technologies-overview]] — Robert Mueller: NASA 달 기지 건설 기술 총괄 랜드마크.
- [[naser-2021-extraterrestrial-construction-lunar-martian-environments-review]] — Naser: 외계 우주 토목 건설 총설 랜드마크.
- [[lee-2026-new-concept-lunar-construction-transported-cement-insitu-aggregates]] — 이방연 교수: 2026 하이브리드 달 건설 랜드마크.
- [[concrete-durability-and-service-life]] — 극한 우주 환경 방재 체계.
