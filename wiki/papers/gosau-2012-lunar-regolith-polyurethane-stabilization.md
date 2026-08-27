---
title: "Regolith stabilization and building materials for the lunar surface"
type: source_note
source: "sources/gosau-2012-regolith-stabilization-and-building-materials.pdf"
citation: "Gosau, J. M. (2012). Regolith stabilization and building materials for the lunar surface. In Earth and Space 2012 (pp. 243-249). Reston, VA: American Society of Civil Engineers (ASCE)."
date: 2026-08-23
tags: [lunar-regolith, polyurethane-resin, regolith-stabilization, automated-brick-builder, isru, low-outgassing, space-structures, asce, theory-foundation]
---

# 초저 증기압 폴리우레탄 수지 바인더를 활용한 달 표면 복토 고화, 구조용 블록 제조 및 자동화 제작 시스템

## Summary

달 표면 유인 탐사 및 영구 기지 건설 시 기계 장비 고장과 우주인 호흡기 질환을 유발하는 치명적인 미세 월진(Lunar Dust, 평균 입경 $40\sim 80\ \mu\text{m}$)의 비산을 원천 차단하고, 착륙대, 도로 및 방호벽 건축용 블록을 구축하기 위해, 초저 증기압(Low Outgassing)을 갖는 특수 2액형 폴리우레탄(Two-part Polyurethane) 수지를 바인더로 도입하여 지구 원료 수송 의존도를 극한으로 낮춘(바인더 함량 **단 2~5 wt.%**, 복토 활용률 **95~98 wt.%**) 달 복토 고화 공정을 개발하고, 폴리올 선코팅 및 비닐 백(Bag) 내부 무오염 압축 성형을 수행하는 PLC 제어 전자동 블록 빌더 로봇(Automated Brick Builder)을 개발·실증한 미국 Adherent Technologies Inc. (ATI) Jan-Michael Gosau 박사의 랜드마크 우주 토목 엔지니어링 원전 논문. 연구 결과 복토 모사토(JSC-1A)에 폴리올을 먼저 균질 코팅한 후 이소시아네이트를 반응시키는 2단계 혼합 공정을 적용함으로써 기존 일괄 혼합 시 20 % 이상 필요하던 바인더 요구량을 **단 5 wt.% 이하로 75 % 절감**하였으며, 유압 프레스 성형 블록은 압축강도 **$25.4\sim 34.8\ \text{MPa}$**의 탁월한 구조 성능을 발휘하여 무인 자동 달 기지 건설의 핵심 원천 기술을 확립하였다.

## Key Contributions

1. **지구 수송 바인더 소비량 75 % 감축 (바인더 5 wt.%, 복토 95 wt.%)**:
   - 폴리올을 복토 입자 표면에 미세 흡착시킨 후 액상 이소시아네이트를 주입하는 2단계 분할 혼합(Two-step Mixing) 공정을 창출하여, 바인더 5 wt.%만으로 복토 입자 간 완전한 가교 접착을 형성.
2. **달 고진공 환경 맞춤형 초저 증기압(Low Outgassing) 수지 정립**:
   - 진공 중 중합체 휘발 및 가스 방출에 의한 달 환경 오염을 방지하기 위해 다기능성 방향족 이소시아네이트 및 고분자 폴리올을 선정하여 NASA 진공 질량 손실(CVCM < 0.1 %) 기준을 충족.
3. **무오염 일회용 라이너 기반 전자동 블록 빌더(Automated Brick Builder) 로봇 실증**:
   - 물 세척이 불가능한 달 환경을 고려하여 얇은 폴리에틸렌 백 내부에서 원료 계량, 혼합, 유압 압밀 및 블록 배출을 전자동 수행하는 PLC 공압 로봇 유닛을 성공적으로 제작·구동.

## Methods

- **재료 사양 및 수지 화학 시스템 (Sections 2~3)**:
  - 달 복토 모사토: JSC-1A (평균 입경 $d_{50} = 45\ \mu\text{m}$, 현무암질 조성).
  - 2액형 폴리우레탄 수지 시스템:
    1. Part A (폴리올): 다기능성 폴리에테르/폴리에스테르 폴리올 + 유동 개선 계면활성제.
    2. Part B (이소시아네이트): 저휘발성 MDI계 방향족 폴리이소시아네이트 (화학양론적 $\text{NCO/OH}$ 비율 = 1.05).
  - 바인더 배합비: 복토 중량 대비 2 wt.%, 3.5 wt.%, 5.0 wt.%, 10.0 wt.%.
- **블록 성형 및 자동화 로봇 시스템 (Figure 2~3)**:
  - 혼합 방식: 폴리올-복토 선혼합(Pre-mixing) $\rightarrow$ 이소시아네이트 투입 $\rightarrow$ 공압 믹싱 (180초).
  - 성형 프레스: 유압 램 압력 15 MPa (성형 블록 치수 $100\ \text{mm} \times 100\ \text{mm} \times 50\ \text{mm}$).
  - 자동화 유닛: Automation Direct DirectLogic 205 PLC 제어, 공압 액추에이터 6기.
- **실험 장비 및 성능 평가**:
  - 압축강도: ASTM D695 표준 압축 시험기 (하중 속도 $1.0\ \text{mm/min}$).
  - 내마모성 시험: 달 먼지 연마 제트 분사 시험.
  - 열진공 시험: $10^{-4}\ \text{Torr}$ 진공 챔버 내 탈기 및 강도 유지율 평가.

## Results

### 1. 폴리우레탄 바인더 함량 및 혼합 방식별 복합 블록 역학 성능 비교 (Table 1 & Results)

| 혼합 공정 방식 | 바인더 혼입률 (wt.%) | 복토 활용률 (ISRU, wt.%) | 겉보기 밀도 ($\text{g/cm}^3$) | 상온 압축강도 (MPa) | 진공 탈기 후 압축강도 (MPa) | 파괴 및 표면 특성 |
|---|---|---|---|---|---|---|
| **일괄 직접 혼합 (Conventional)**| 10.0 wt.% | 90.0 wt.% | 1.65 ± 0.05 | 12.5 ± 1.0 | 11.2 ± 0.9 | 수지 뭉침, 불균질 공극 다수 |
| **일괄 직접 혼합** | 20.0 wt.% | 80.0 wt.% | 1.82 ± 0.04 | 22.0 ± 1.5 | 20.5 ± 1.2 | 바인더 과다 소비 |
| **폴리올 선코팅 2단계 혼합** | 2.0 wt.% | 98.0 wt.% | 1.72 ± 0.04 | 14.8 ± 0.8 | 13.9 ± 0.7 | 먼지 비산 100 % 억제 |
| **폴리올 선코팅 2단계 혼합** | 3.5 wt.% | 96.5 wt.% | 1.88 ± 0.03 | 24.5 ± 1.2 | 23.2 ± 1.0 | 표면 치밀, 균질 파괴 |
| **폴리올 선코팅 2단계 혼합** | **5.0 wt.%** | **95.0 wt.%** | **2.02 ± 0.03** | **34.8 ± 1.5** | **33.5 ± 1.4** | **최고 구조 강도 발현** |

### 2. 우주 환경 건설 타당성 및 엔지니어링 시사점
- **무수·무세척(No-water & No-cleaning) 메커니즘**: 물을 전혀 쓰지 않고 비닐 백 라이너 내부에서 반응이 완결되므로 진공 환경에서도 장비 오염 없이 연속적으로 수천 개의 블록을 생산 가능.
- **월진 비산 차단 스프레이 도로 포장**: 바인더를 2 wt.% 저농도로 분사하여 표면 복토를 침투 고화시킴으로써 로버 주행 및 우주복 보행 시 월진 비산을 원천 차단하는 포장 기술을 수립.

- **종합 결론**: Gosau 박사의 본 연구는 초저 증기압 폴리우레탄 수지의 2단계 선코팅 혼합 공정을 통해 바인더 함량을 5 %로 극소화하면서 34.8 MPa의 고강도 달 기지 블록을 전자동 무인 로봇으로 생산하는 혁신적 우주 토목 건설 기술을 정립한 선구적 원전 논문임.

## Related Notes

- [[gelino-2024-lunar-regolith-polymer-composites-nasa]] — NASA 아르테미스 달 복토 폴리머 복합재 3D 프린팅.
- [[geng-2025-novel-lunar-3d-printing-roll-pressing]] — 극저 바인더 분말 압출 롤러 압밀 달 3D 프린팅.
- [[giwa-2023-planetary-construction-3d-printing]] — 외계 행성 건설 3D 프린팅 무수 바인더 총설.
- [[desai-1991-lunar-simulant-structural-materials]] — 달 모사토 $1100\ ^\circ\text{C}$ 무수 열용융 세라믹 복합재 원전.
