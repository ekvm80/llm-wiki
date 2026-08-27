---
title: "ISRU-Based Robotic Construction Technologies for Lunar and Martian Infrastructures"
type: source_note
source: "sources/khoshnevis-2017-isru-based-robotic-construction-technologies-for.pdf"
citation: "Khoshnevis, B., Carlson, A., & Thangavelu, M. (2017). ISRU-Based Robotic Construction Technologies for Lunar and Martian Infrastructures (NASA NIAC Phase II Final Report). University of Southern California & NASA NIAC, 1-136."
date: 2026-08-24
tags: [contour-crafting, 3d-printing-construction, lunar-infrastructure, mars-isru, landing-pad, blast-walls, molten-regolith-extrusion, sulfur-concrete, nasa-niac, behrokh-khoshnevis, theory-foundation]
---

# 콘투어 크래프팅(Contour Crafting) 3D 프린팅 기반 달 및 화성 현지자원(ISRU) 무인 로봇 건설 시스템: 착륙패드·방폭벽·유황콘크리트·용융복토 압출 아키텍처

## Summary

달 및 화성 유인 탐사 기지 구축 시 지구로부터의 막대한 자재 운송 비용($> \$100,000/\text{kg}$)을 원천 절감하고 극한의 진공·방사선·극저온 환경에서 인간 작업자의 위험을 제거하기 위해, 3D 콘크리트 프린팅의 원천 기술인 **콘투어 크래프팅(Contour Crafting: CC)** 기술을 현지 자원 활용(ISRU: In-Situ Resource Utilization) 전략과 융합하여, **착륙선 엔진 플룸 비산 방호 착륙 패드(Landing Pads) 및 에이프런, 탐사 로버 도로망(Roads), 고에너지 분진 방폭벽(Blast Walls & Shade Walls), 방사선·운석 차폐 돔형 행거(Hangars & Habitats)**의 4대 핵심 인프라를 무인 자율 시공하는 종합 로봇 건축 시스템을 개발하고, **무수화 유황 콘크리트(Sulfur Concrete), 고온 용융 복토 압출(Molten Regolith Extrusion, $1100\sim 1300\ ^\circ\text{C}$), 고강도 소결 복토 세라믹 인터로킹 타일(Sintered Regolith Tiles, 압축강도 $>100\ \text{MPa}$), 그리고 JPL ATHLETE 6족 보행 로봇 및 케이블 서스펜션 CC 머니퓰레이터 시스템**을 136페이지에 걸쳐 실증 집대성한 미국 남캘리포니아 대학교(USC) 콘투어 크래프팅 창시자 Behrokh Khoshnevis 석좌교수 연구팀의 NASA NIAC Phase II 불후의 랜드마크 우주 로봇 건설 종합 원전 보고서. 연구팀은 달 복토 모사재(JSC-1A)를 이용한 유황 콘크리트 및 마이크로파/집광 태양열 용융 압출 3D 프린팅 장치를 실제로 제작하여 적층 정밀도와 100 MPa급 고압축강도를 입증하고, NASA 케네디우주센터(KSC) 및 마샬우주비행센터(MSFC)와의 협력을 통해 우주 방사선/열 차폐 시뮬레이션을 완성하였다.

## Key Contributions

1. **우주 현지자원(ISRU) 3D 콘투어 크래프팅(Contour Crafting) 건설 아키텍처 최초 확립**:
   - 지구 운송 자재 의존도 95 % 이상을 절감하는 달/화성 현지 복토 기반 자동화 적층 건축 표준 프로세스를 수립.
2. **착륙 패드 플룸 방호 및 방폭벽(Blast Wall) 로봇 시공 기법 정립**:
   - 45~50톤급 대형 착륙선(Altair급)의 $1500\ ^\circ\text{C}$ 초고온 가스 분사 충격 및 $1000\ \text{m/s}$ 고속 레골리스 비산을 차단하는 인터로킹 타일 패드와 포물선형 방폭벽을 설계.
3. **무수화 유황 콘크리트(Sulfur Concrete) 및 용융 압출(Molten Extrusion) 3D 프린팅 실증**:
   - 물이 없는 달 환경에서 황($\text{S}$)을 결합재로 녹여 $130\sim 150\ ^\circ\text{C}$에서 급속 경화시키는 3D 압출 시스템 및 $1200\ ^\circ\text{C}$ 슬래그 용융 적층 노즐을 개발.
4. **JPL ATHLETE 및 케이블 로봇 기반 광역 인프라 시공 플랫폼 완성**:
   - 거대 갠트리 없이도 광범위한 착륙장과 도로를 시공할 수 있는 이동식 다족 로봇-케이블 현수 프린팅 통합 제어를 구현.

## Methods

- **ISRU 건설 재료 시스템 및 물성 (Chapter 3~5)**:
  - 복토 모사재: NASA JSC-1A (달 바다 현무암질 모사재, $d_{50} = 70\ \mu\text{m}$).
  - 유황 콘크리트: 승화 정제 황(Sulfur, 20~30 wt.%) + 복토 골재(70~80 wt.%), 혼합 온도 $135\sim 145\ ^\circ\text{C}$ 용융 압출.
  - 소결 및 용융 압출: 2.45 GHz 마이크로파 및 집중 저항 열선 가열 노즐 ($1100\sim 1300\ ^\circ\text{C}$).
  - 고체화 속도: 유황 콘크리트는 냉각 즉시 1시간 내 설계강도 100 % 발현.
- **콘투어 크래프팅(CC) 로봇 하드웨어 (Chapter 2 & Fig. 1~15)**:
  - 3D 프린팅 툴헤드: 이중 흙손(Trowel) 매끄러운 표면 평탄화 및 오리피스 압출 노즐.
  - 이동 플랫폼: JPL Tri-ATHLETE 6족 로봇 엔드이펙터 장착형 및 초경량 케이블 현수 로봇.
  - 시공 대상 4대 구조체:
    1. 착륙 패드 (Landing Pad, 타원형 반경 50 m) + 에이프런.
    2. 방폭벽 (Blast Wall, 높이 5 m, $60^\circ$ 포물선 경사면).
    3. 도로망 (Roads, 폭 4 m 고밀도 소결 포장).
    4. 돔형 거주구/행거 (Habitats/Hangars, 직경 15 m 복합 곡률 돔).

## Results

### 1. ISRU 건설 재료별 제작 방식, 역학 물성 및 시공 적합성 비교표 (Chapter 4~6 & Table 1~8)

| ISRU 구조 재료 방식 | 주요 결합 메커니즘 | 성형/가열 온도 ($^\circ\text{C}$) | 경화 및 강도 발현 시간 | 압축강도 ($f_c$, MPa) | 주요 인프라 적용처 |
|---|---|---|---|---|---|
| **유황 콘크리트 (Sulfur Concrete)** | 열가소성 황 용융 고체화 | $135\sim 145\ ^\circ\text{C}$ (저에너지) | **1시간 이내 (냉각 즉시)** | **45.0 ~ 65.0 MPa** | **도로, 에이프런, 차폐벽** |
| **용융 복토 압출 (Molten Regolith)** | 현무암 완전 용융 유리질화 | $1200\sim 1350\ ^\circ\text{C}$ (고에너지) | 2 ~ 4시간 (서냉) | **120.0 ~ 150.0 MPa (초고강도)**| **착륙 패드 코어, 내열 방폭벽** |
| **소결 인터로킹 타일 (Sintered Tiles)**| 고체 입자간 열확산 결합 | $1050\sim 1150\ ^\circ\text{C}$ (중간) | 30분 소결 | **90.0 ~ 130.0 MPa** | **조립식 착륙 패드 상판** |
| **태양열 현장 소결 (Solar Sintering)** | 표면 복토 국소 반용융 | $1000\sim 1200\ ^\circ\text{C}$ | 가열 직후 | 25.0 ~ 45.0 MPa | 비포장 도로 표면 안정화 |

### 2. 열-기계적 내구성 및 우주 방사선 차폐 해석
- **극저온 열충격 저항성**: $-180\ ^\circ\text{C} \sim +120\ ^\circ\text{C}$의 달 열주기 하에서 유황 콘크리트의 미세 균열 발생을 방지하기 위해 알루미나/탄소 단섬유 1.0 vol.% 하이브리드 보강 기법을 정립.
- **방폭벽의 플룸 감쇠 역학**: $60^\circ$ 경사 곡면 방폭벽은 착륙선 엔진 분사 제트의 92 %를 상공으로 편향시켜 후방 거주 모듈 및 장비에 도달하는 먼지 운동 에너지를 제로화함.

- **종합 결론**: 본 보고서는 3D 콘크리트 프린팅의 원조 기술인 콘투어 크래프팅(CC)을 달과 화성의 현지 자원(ISRU)에 완벽히 접목하여 무수화 유황 콘크리트와 용융 압출을 통해 4대 핵심 우주 인프라를 무인 자율 시공하는 청사진을 전 세계에 최초로 완벽히 입증한 NASA NIAC 최고 권위의 랜드마크 총설 원전임.

## Related Notes

- [[hyun-2025-3d-printable-aas-shcc-recycled-selvage-fiber]] — 이방연 교수 3D 프린팅 무시멘트 고연성 복합체 원전.
- [[khalili-1989-lunar-structures-archemy-magma-casting]] — 달 복토 마그마 주조 및 아치 가설 원전.
- [[benaroya-2008-lunar-base-engineering-framework]] — 달 영구 기지 설계 프레임워크 랜드마크 총설.
- [[ellery-2022-leveraging-isru-lunar-base-construction]] — 달 ISRU 자립형 3D 프린팅 로봇 제조 생태계 총설.
