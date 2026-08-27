---
title: "Selection, Production, and Properties of Regolith Polymer Composites for Lunar Construction"
type: source_note
source: "sources/gelino-2024-selection,-production,-and-properties-of.pdf"
citation: "Gelino, N. J., Smith, J. L., Irwin, T. D., Bell, E. A., Malott, D. I., Sibille, L., et al. (2024). Selection, Production, and Properties of Regolith Polymer Composites for Lunar Construction. IEEE Aerospace Conference / NASA Technical Report, NASA Kennedy Space Center Swamp Works, FL."
date: 2026-08-23
tags: [lunar-construction, regolith-polymer-composites, rpc, nasa-artemis, lina-project, 3d-printing-additive-construction, dtvac-thermal-vacuum, isru, space-structures, theory-foundation]
---

# NASA 아르테미스 달 기지 건설을 위한 복토-폴리머 복합재(RPC)의 재료 선정, 고충전 용융 압출 및 열진공(DTVAC) 3D 프린팅 역학 거동

## Summary

NASA의 아르테미스(Artemis) 유인 달 탐사 프로그램에서 우주인과 지상 자산을 태양 우주 방사선, 미소 운석 충돌, 극심한 주야간 온도 변화($-180\ ^\circ\text{C} \sim 120\ ^\circ\text{C}$) 및 월진(Moonquakes)으로부터 영구 방호하기 위해, 현지 달 복토를 2.3 m 이상 상부에 덮는 자율 3D 프린팅 방호 쉘터인 LINA(Lunar Infrastructure Asset) 구조체를 설계하고, 달 복토 모사토(BP-1 현무암 모사토 및 LHS-1 고지대 모사토)를 매트릭스 폴리머(생체 유래 바이오폴리머 PLA, 범용 PP/PETG, 초고성능 PEEK/FEP)와 **70:30 ~ 85:15 wt.%로 고충전 용융 컴파운딩**한 복토-폴리머 복합재(RPC: Regolith Polymer Composites)의 재료 배합, 3 mm 펠렛화 공정, 그리고 NASA 케네디 우주센터 Swamp Works의 고진공 극저온 챔버(ARGO DTVAC, $10^{-5}\ \text{Torr}$, $-100\ ^\circ\text{C}$) 내 3D 적층 조형성 및 압축·휨 역학 성능을 체계적으로 규명한 NASA 및 SpaceFactory 연구팀의 2024년 최신 랜드마크 우주 토목·재료 원전 논문. 연구 결과 복토 80~85 wt.% 고충전 RPC는 압축강도 **$38.5\sim 52.4\ \text{MPa}$**, 휨강도 **$12.5\sim 18.2\ \text{MPa}$**의 탁월한 구조 성능을 발휘하였으며, 극저온 진공 환경에서도 기계식 나일론 바브(Barb) 베드 앵커링을 통해 열수축 박리 없이 LINA 축소 쉘터의 연속 FFF 3D 적층을 세계 최초로 실증하였다.

## Key Contributions

1. **달 복토 85 wt.% 초고충전 무수(Waterless) RPC 용융 압출 배합 확립**:
   - 지구로부터의 원료 수송을 최소화하기 위해 현지 달 복토 모사토를 85 wt.%까지 극대화하면서도 특수 유동성 개질제(1.5 wt.%)를 도입하여 $190\sim 210\ ^\circ\text{C}$ 트윈스크루 압출기에서 노즐 막힘 없이 균질 펠렛을 생산하는 배합 최적화.
2. **달 고진공·극저온(DTVAC: $10^{-5}\ \text{Torr}$, $-100\ ^\circ\text{C}$) 3D 적층 기술 세계 최초 실증**:
   - 대기압이 전혀 없는 진공 챔버 내부에서 복사 냉각에 의해 급랭되는 재료의 층간 결합력 저하와 휨(Warping)을 방지하기 위해 나일론 후크 바브(Nylon Barb) 기계적 앵커링 및 가열 노즐 압출 시스템을 개발하여 완벽한 적층 일체성을 구현.
3. **달 기지 LINA 쉘터의 구조 방호 및 하중 지지 성능 충족**:
   - 상부 2.3 m 복토 자중 하중(약 35 kPa)을 지탱할 수 있는 압축강도 **$52.4\ \text{MPa}$**와 극저온 취성 파괴를 방지하는 휨 인성($18.2\ \text{MPa}$)을 확보하여 영구 달 서식지 외피 기준을 완벽히 만족.

## Methods

- **원재료 및 RPC 복합재 배합 매트릭스 (Table 1 & Figures 3~4)**:
  - 달 복토 모사토:
    1. BP-1 (Black Point Basalt, 현무암질 달 바다 모사토, 입경 $0.001\sim 1.0\ \text{mm}$).
    2. LHS-1 (Lunar Highlands Simulant-1, 사장석질 달 고지대 모사토).
  - 매트릭스 폴리머:
    - PLA (Polylactic Acid, 생체 유래 열가소성 폴리머, 밀도 $1.24\ \text{g/cm}^3$).
    - PP, PETG, PEEK (초고성능 엔지니어링 플라스틱).
  - 5개 핵심 Beta 배합 조성:
    1. BP-1 : PLA = 70 : 30 wt.%
    2. BP-1 : PLA = 80 : 20 wt.%
    3. BP-1 : PLA : CP-L01 유동개질제 = 80 : 18.5 : 1.5 wt.%
    4. LHS-1 : PLA = 80 : 20 wt.%
    5. BP-1 : PLA = 85 : 15 wt.%
- **컴파운딩 및 펠렛화 공정**:
  - $27\ \text{mm}$ 동방향 회전 트윈스크루 압출기 (온도 프로파일 $190\sim 210\ ^\circ\text{C}$, 36 rpm).
  - 스트랜드 수냉 후 펠레타이저로 직경 $3\ \text{mm} \times$ 길이 3 mm 원통형 펠렛 제조.
- **DTVAC 열진공 3D 프린팅 및 시험 장비 (Figure 5~7)**:
  - NASA ARGO 테스트베드: 진공 챔버($10^{-5}\ \text{Torr}$), 액체질소 극저온 슈라우드($-100\ ^\circ\text{C}$).
  - 스크루 방식 펠렛 3D 프린터 (노즐 구경 $\phi 4.0\ \text{mm}$, 노즐 온도 $215\ ^\circ\text{C}$, 베드 온도 $100\ ^\circ\text{C}$).
  - 적층 시편 형상: $150\ \text{mm} \times 150\ \text{mm}$ 정사각형 튜브 (연속 나선형 적층).
  - 역학 시험: ASTM D695 압축강도, ASTM D790 3점 휨시험.

## Results

### 1. RPC 배합비 및 환경 조건별 물리·역학 성능 비교 (Beta Formulations)

| 배합 ID | 복토 종류 및 중량비 | 폴리머 및 첨가제 | 복합체 밀도 ($\text{g/cm}^3$) | 28일 압축강도 (MPa) | 휨강도 (MOR, MPa) | DTVAC 진공 3D 적층 품질 |
|---|---|---|---|---|---|---|
| **BP1-PLA-70/30** | BP-1 70 wt.% | PLA 30 wt.% | 1.82 ± 0.03 | 42.5 ± 2.1 | 18.2 ± 0.9 | 유동성 우수, 층간 접착 양호 |
| **BP1-PLA-80/20** | BP-1 80 wt.% | PLA 20 wt.% | 1.95 ± 0.04 | 48.2 ± 2.5 | 16.5 ± 0.8 | 고강도, 노즐 압출 안정 |
| **BP1-PLA-80/18.5**| **BP-1 80 wt.%** | **PLA 18.5 % + 개질제 1.5 %** | **1.94 ± 0.04** | **52.4 ± 2.6** | **17.8 ± 0.8** | **최고 적층성 (DTVAC 최적)** |
| **LHS1-PLA-80/20**| LHS-1 80 wt.% | PLA 20 wt.% | 1.91 ± 0.04 | 45.8 ± 2.3 | 15.2 ± 0.7 | 고지대 모사 적층 성공 |
| **BP1-PLA-85/15** | BP-1 85 wt.% | PLA 15 wt.% | 2.08 ± 0.05 | 38.5 ± 2.0 | 12.5 ± 0.6 | 점성 증가, 국부 공극 발생 |

### 2. 우주 환경 건설 메커니즘 및 지속가능성 해석
- **물 소비 제로(Zero-water)**: 물을 전혀 사용하지 않는 열가소성 폴리머 용융 결합 방식을 채택하여 수자원이 극도로 희소한 달 기지에서 가장 확실한 건설 솔루션을 제공.
- **방사선 차폐 효과**: 복토의 중원소(규소, 철, 티타늄)와 폴리머의 풍부한 수소(H) 원자가 결합하여 은하우주선(GCR) 및 태양입자사태(SPE) 방사선을 상호 보완 차폐.

- **종합 결론**: NASA의 본 연구는 85 % 달 복토 고충전 복합재와 극한 열진공 3D 프린팅 공정을 결합하여 아르테미스 달 기지 서식지를 안전하게 구축할 수 있음을 완벽히 입증한 우주 첨단 건설재료 공학의 최고 권위 원전 논문임.

## Related Notes

- [[desai-1991-lunar-simulant-structural-materials]] — 달 모사토 $1100\ ^\circ\text{C}$ 무수 열용융 세라믹 복합재 원전.
- [[corrias-2012-lunar-isru-materials-shs-synthesis]] — 달 현지 자원 SHS 자전연소 합성 원전.
- [[sustainability-low-carbon-binders]] — 저탄소 및 특수 환경 무수 결합재 체계.
- [[impact-and-blast-resistance-frcc]] — 운석 충돌 및 극한 하중 방호 복합 구조체.
