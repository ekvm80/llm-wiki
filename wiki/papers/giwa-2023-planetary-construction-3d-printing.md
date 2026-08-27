---
title: "Planetary Construction 3D Printing Using Lunar and Martian In Situ Materials"
type: source_note
source: "sources/giwa-2023-planetary-construction-3d-printing-using.pdf"
citation: "Giwa, I., Moore, D., Fiske, M., & Kazemian, A. (2023). Planetary Construction 3D Printing Using Lunar and Martian In Situ Materials. In Earth and Space 2022 (pp. 817-831). Reston, VA: American Society of Civil Engineers (ASCE)."
date: 2026-08-23
tags: [planetary-construction, 3d-printing-c3dp, lunar-regolith, martian-regolith, isru, sulfur-concrete, geopolymer, additive-manufacturing, asce, theory-foundation]
---

# 달 및 화성 현지자원활용(ISRU) 기반 행성 건설 3D 프린팅(Planetary C3DP)의 무수 바인더 시스템 및 극한 환경 적층 거동 총설

## Summary

NASA 아르테미스(Artemis) 프로그램 및 유인 화성 탐사에서 착륙지 인프라(착륙대, 방호벽, 거주 쉘터, 방사선 차폐구조)를 구축하기 위해, 지구로부터의 원자재 수송을 극소화하고 현지 자원을 100 % 활용(ISRU: In-Situ Resource Utilization)하는 **외계 행성 건설 3D 프린팅(Planetary C3DP: Construction 3D Printing)** 기술의 재료 시스템, 압출 공정 기구학 및 극한 환경 물리 현상을 총망라한 미국 루이지애나 주립대(LSU) Ali Kazemian 교수 및 NASA 마셜 우주비행센터(MSFC) 연구진의 ASCE 랜드마크 종합 총설 논문. 본 논문은 물이 없는 달 및 화성의 극한 환경(초고진공 $10^{-6}\ \text{Torr}$, 미소중력 $1/6\text{g} \sim 3/8\text{g}$, 극단적 온도 변화 $-180\ ^\circ\text{C} \sim 123\ ^\circ\text{C}$)에서 기존 포틀랜드 시멘트 수화 반응의 한계를 극복하기 위해, **열용융 황 콘크리트(Sulfur Concrete, $130\sim 140\ ^\circ\text{C}$)**, **지오폴리머/알칼리 활성재(Geopolymer/AAM)**, **복토-폴리머 복합재(RPC)**, **선택적 태양열/마이크로웨이브 소결(Solar/Microwave Sintering)** 4대 바인더 시스템의 적층 유변학(Extrudability, Buildability, Open Time), 층간 접착 강도 및 동결융해 내구성을 체계적으로 비교 분석하고 행성 표면 자율 로봇 3D 프린팅의 기술 로드맵을 정립하였다.

## Key Contributions

1. **외계 행성 4대 무수/저수 3D 프린팅 바인더 시스템의 재료역학적 분류 체계 수립**:
   - **황 콘크리트 (Sulfur Concrete)**: $135\ ^\circ\text{C}$ 용융 황 바인더(25~35 wt.%)와 복토를 혼합하여 냉각 고화(Phase Transition)를 통해 1시간 이내에 **압축강도 35 ~ 45 MPa**를 발현하는 물 소비 제로(Zero-water) 최우선 후보 기술.
   - **지오폴리머 (Geopolymers)**: 화성 점토 및 알칼리 활성화제 수열 반응을 통한 20~30 MPa 강도 발현.
   - **폴리머 복합재 (RPC)**: 열가소성 PEEK/PLA 용융 압출 3D 프린팅 (압축강도 40~55 MPa).
   - **선택적 소결 (Direct Sintering)**: $1100\ ^\circ\text{C}$ 고온 집광 직접 융합 (바인더 제로, 강도 2~5 MPa).
2. **달·화성 극한 환경이 3D 프린팅 유변학 및 적층성에 미치는 물리적 영향 규명**:
   - **진공 탈수(Vacuum Flash Evaporation)**: 자유수의 급속 증발로 인한 수화 불량 메커니즘을 규명하고 무수 용융 바인더의 절대적 우위를 입증.
   - **저중력($1/6\text{g}$) 효과**: 하부 층의 자중 침하 압력이 감소하여 수직 형상 유지력(Buildability)이 지구 대비 6배 향상되는 긍정적 역학 효과를 수치화.
3. **자율 행성 건설 로봇 C3DP 시스템 엔지니어링 프레임워크 제시**:
   - 복토 굴착 $\rightarrow$ 파쇄/분급 $\rightarrow$ 바인더 가열 혼합 $\rightarrow$ 로봇 암 노즐 정밀 압출 $\rightarrow$ 층간 열융합에 이르는 완전 무인 자동화 공정 아키텍처를 확립.

## Methods

- **분석 대상 행성 표면 환경 파라미터**:
  - **달 (Moon)**: 대기압 $\approx 10^{-10}\ \text{Pa}$ (고진공), 중력 $1.62\ \text{m/s}^2$ ($1/6\text{g}$), 온도 범위 $-180\ ^\circ\text{C} \sim 123\ ^\circ\text{C}$, 주요 복토 성분 $\text{SiO}_2, \text{Al}_2\text{O}_3, \text{FeO}, \text{CaO}$.
  - **화성 (Mars)**: 대기압 $\approx 636\ \text{Pa}$ ($\text{CO}_2$ 95 %), 중력 $3.71\ \text{m/s}^2$ ($3/8\text{g}$), 온도 범위 $-114\ ^\circ\text{C} \sim 20\ ^\circ\text{C}$, 주요 복토 성분 $\text{SiO}_2, \text{Fe}_2\text{O}_3$, 황산염/과염소산염 풍부.
- **비교 분석 C3DP 기술 및 재료 메트릭 (Table 1~3)**:
  - Extrusion-based C3DP (연속 노즐 압출 적층).
  - Powder-bed 3D Printing (D-shape 선택적 바인더 분사).
  - Contour Crafting (대형 흙손 성형 압출).
  - 평가 항목: 압축강도, 휨강도, 소성 점도, 지구 원료 수송 비율(Up-mass), 수자원 소모량, 에너지 소비율.

## Results

### 1. 외계 행성 건설 3D 프린팅 주요 바인더 시스템 비교 (Comprehensive Synthesis)

| 바인더 시스템 구분 | 반응 및 고화 기전 | 물 소모량 (%) | 공정 작동 온도 | 28일/최종 압축강도 (MPa) | 지구 원료 의존도 (Up-mass) | 외계 환경 적합성 및 한계 |
|---|---|---|---|---|---|---|
| **황 콘크리트 (Sulfur)** | 용융 황 냉각 상전이 ($135\ ^\circ\text{C}$) | **0.0 % (완전 무수)** | $120\sim 140\ ^\circ\text{C}$ | **35 ~ 45 MPa (1시간 급속)** | 매우 낮음 (현지 황 추출) | **달/화성 최적 (열사이클 균열 주의)** |
| **복토-폴리머 (RPC)** | 열가소성 수지 용융 결합 | **0.0 % (완전 무수)** | $180\sim 220\ ^\circ\text{C}$ | **40 ~ 55 MPa** | $15\sim 20\ \text{wt.\%}$ 수송 | 방사선 차폐 우수, 고인성 |
| **지오폴리머 (Geopolymer)**| 알칼리 용액 ($\text{NaOH/Na}_2\text{SiO}_3$) 수화 | $10\sim 15\ \text{wt.\%}$ | $60\sim 80\ ^\circ\text{C}$ | 20 ~ 30 MPa | 활성화제 수송 필요 | 진공 중 수분 증발 차단 챔버 필요 |
| **태양열 직접 소결 (Sintering)**| 복토 고온 용융 및 소결 | **0.0 %** | $1100\sim 1400\ ^\circ\text{C}$| 2 ~ 5 MPa (취성 파쇄) | **0.0 % (100 % ISRU)** | 막대한 전력/태양열 집광 필요 |

### 2. 행성 C3DP 유변학 및 인터페이스 거동 해석
- **황 콘크리트의 독보적 장점**: 액상 황($\mu \approx 10\ \text{mPa}\cdot\text{s}$)의 초저점성을 활용하여 고충전 복토 슬러리를 낮은 펌핑 압력으로 원활히 압출하고, $119\ ^\circ\text{C}$ 이하 냉각 시 $\beta$-단사정계에서 $\alpha$-사방정계로 전이되며 급속 고화되어 거푸집 없이 높은 수직 적층 속도를 달성.
- **미소중력 하의 적층 메커니즘**: 중력 가속도가 작아 신선한 압출 필라멘트의 좌굴 및 측면 배림(Slump deformation)이 억제되므로 1회 연속 타설 가능한 적층 높이가 극대화됨.

- **종합 결론**: Kazemian 교수와 NASA MSFC 연구진의 본 연구는 달 및 화성 유인 기지 건설을 위한 무수 3D 프린팅 바인더 및 로봇 압출 기술의 장단점을 과학적으로 비교 평가하고 미래 우주 토목 엔지니어링의 핵심 지침을 수립한 불후의 총설 논문임.

## Related Notes

- [[gelino-2024-lunar-regolith-polymer-composites-nasa]] — NASA 아르테미스 달 복토 폴리머 3D 프린팅 원전.
- [[geng-2025-novel-lunar-3d-printing-roll-pressing]] — 극저 바인더 분말 압출 롤러 압밀 달 3D 프린팅.
- [[desai-1991-lunar-simulant-structural-materials]] — 달 모사토 $1100\ ^\circ\text{C}$ 무수 열용융 세라믹 복합재 원전.
- [[sustainability-low-carbon-binders]] — 비소성 무수 결합재 및 특수 복합체 체계.
