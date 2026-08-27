---
title: "Engineering, Design and Construction of Lunar Bases"
type: source_note
source: "sources/benaroya-2002-engineering,-design-and-construction-of.pdf"
citation: "Benaroya, H., Bernold, L., & Chua, K. M. (2002). Engineering, Design and Construction of Lunar Bases. Journal of Aerospace Engineering, 15(2), 33-45."
date: 2026-08-24
tags: [lunar-bases, space-structures, structural-mechanics, inflatable-structures, regolith-shielding, robotic-construction, hyperbolic-soil-model, asce-jae, rutgers-university, theory-foundation]
---

# 달 기지(Lunar Base)의 구조 엔지니어링·설계·시공 체계: 구조 유형 분류, 복토 지반역학, 방사선 차폐 및 로봇 자동화 시공 총설

## Summary

인류의 달 영구 정주와 심우주 탐사 전초기지 구축을 위한 토목·구조 엔지니어링의 핵심 과제를 정립하기 위해, 지난 수십 년간 제안된 달 기지 건설 연구를 집대성하고, 달의 극한 환경—**초고진공($10^{-12}\ \text{Torr}$), 28일 주기 하의 극심한 온도 사이클($-180\ ^\circ\text{C} \sim +120\ ^\circ\text{C}$), 치명적 우주 방사선(GCR/SPE), 초고속 미소운석($10\sim 70\ \text{km/s}$) 및 지구 중력의 1/6 저중력($1.62\ \text{m/s}^2$)**—조건 하에서의 **구조물 유형 분류(강체 모듈, 팽창식 멤브레인, 트러스, 용암 튜브 지하 기지, 복토 콘크리트 및 소결 아치), 달 복토(Regolith)의 비선형 쌍곡선(Hyperbolic) 지반-기초 역학 모델, 최소 $2.5\sim 3.0\ \text{m}$ 복토 차폐층 두께 설계 및 원격 자율 로봇 시공 공법**을 체계적으로 수립한 미국 럿거스 대학교(Rutgers University) Haym Benaroya 교수 연구팀의 ASCE 최상위 랜드마크 우주 구조공학 원전 논문. 연구진은 달 기지의 구조 안전성을 확보하기 위해 내부 여압($1.0\ \text{atm} \approx 101.3\ \text{kPa}$)에 의한 인장 응력과 외부 복토 하중의 평형 메커니즘을 규명하고, 저중력 환경에서 지반 구속압(Confining Stress) 감소로 인해 기초 지지력이 지구 대비 저하되는 현상을 비선형 FEA로 증명하여, 우주 건축 및 토목 구조 설계의 필수 지침을 확립하였다.

## Key Contributions

1. **달 기지 6대 핵심 구조 유형(Structural Types) 분류 및 특성 맵 완성**:
   - 강체 실린더(Rigid Modules), 팽창식 이중막 구조(Inflatable Membrane), 트러스 프레임(Space Trusses), 자연 용암 튜브(Lava Tubes), 인시투 소결 복토 아치(Sintered Regolith Arches)의 장단점 및 기술 성숙도(TRL)를 완벽히 정립.
2. **달 복토 비선형 쌍곡선 지반 모델(Hyperbolic Stress-Strain Model) 수립**:
   - $\sigma$-$\varepsilon$ 비선형 관계를 적용하여 대형 광학 망원경 기초 및 기지 안착 지반의 침하량(Settlement)을 예측하는 전산 해석 프레임워크를 개발.
3. **방사선 및 열 차폐를 위한 복토 복토층($2.5\sim 3.0\ \text{m}$) 최적 두께 정량화**:
   - 인체 연간 허용 방사선량($5\ \text{rem}$) 이하 유지 및 $-180\sim +120\ ^\circ\text{C}$의 외부 일교차를 기지 내부 $+20\ ^\circ\text{C}$ 항온으로 감쇠시키는 $2.5\sim 3\ \text{m}$ 복토 덮개 설계식을 제시.
4. **우주비행사 EVA 최소화를 위한 로봇 자율 굴삭·시공 시스템 설계**:
   - 달 표면 모듈 설치, 복토 되메우기(Backfilling), 원격 인터로킹 블록 조립을 수행하는 자동화 로보틱스 시공 공정도를 확립.

## Methods

- **달 환경 하중 및 경계 조건 해석 (Section 2 & Table 1)**:
  - 대기압 차: 내부 여압 $P_{in} = 101.3\ \text{kPa}$ (1.0 atm), 외부 진공 $P_{out} \approx 0\ \text{kPa}$ (인장 응력 지배).
  - 열 하중: 태양 일주기 28일 동안 $\Delta T = 300\ ^\circ\text{C}$의 반복 열팽창 및 수축.
  - 중력: $g_{moon} = 1.62\ \text{m/s}^2$ ($1/6 g$).
  - 방사선: 은하 우주선(GCR) 및 태양 플레어 입자(SPE).
- **구조 형태별 역학 및 지반 설계 (Section 3~6)**:
  - 팽창식 멤브레인(Inflatable): 케블라/Mylar 복합 섬유막 + 구조용 폼 충전 + 외주 토러스(Torus) 지지대.
  - 지반-기초 역학: Duncan-Chang 비선형 쌍곡선 구성방정식 기반 FEA (초기 탄성계수 $E_i = K P_a (\sigma_3/P_a)^n$).
  - 차폐 두께 계산: 질량 저지능(Mass Stopping Power) 계산을 통한 복토 층 두께 최적화.

## Results

### 1. 달 기지 주요 구조 형식별 역학 특성, 장단점 및 차폐 요구조건 비교표 (Table 1~3 & Appendix)

| 구조 형식 | 주요 구조 재료 | 지구 수송 질량 효율 | 조립 및 가설 용이성 | 내압 지지 메커니즘 | 필수 복토 차폐 두께 | 장점 및 주요 한계점 |
|---|---|---|---|---|---|---|
| **강체 실린더 모듈** | Al-Li 합금 / 복합재 | 낮음 (부피 고정) | 매우 용이 (직접 착륙) | 원주 방향 링 인장력 | **$2.5\sim 3.0\ \text{m}$ 복토 복토** | 입증된 기술 / 수송 체적 제한 |
| **팽창식 멤브레인** | Kevlar/Mylar 다층막 | **극히 우수 (압축 패키징)**| **우수 (자동 팽창 전개)** | **막 장력(Membrane Tension)**| **$2.5\sim 3.0\ \text{m}$ (외주 토러스)**| **대공간 형성 가능 / 관통 파손 취약**|
| **트러스 스페이스 프레임** | 탄소섬유 복합재(CFRP) | 우수 | 중간 (로봇 조립 필요) | 절점 축력 전달 | 복토 패널 부착 필요 | 고강성 / 밀폐를 위한 추가 막 필요 |
| **지하 용암 튜브 기지** | 천연 현무암 암반 천장 | **최고 (외피 수송 불필요)**| 어려움 (수직 진입로) | 자연 암반 아치 압축력 | **자연 차폐 완비 ($>10\ \text{m}$)** | **방사선/운석 완벽 차폐 / 탐사 난이도**|
| **ISRU 소결 복토 아치** | 100 % 달 복토 소결체 | 최고 (현지 자재 100%) | 로봇 시공 기간 장기화 | 아치 압축 추력선 지지 | 자체 차폐 ($0.5\sim 1.0\ \text{m}$) | 수송비 최소화 / 고에너지 레이저 필요 |

### 2. 구조역학 및 차폐 엔지니어링 해석
- **내압-복토 하중 자가 상쇄 메커니즘**: 기지 내부 여압($101.3\ \text{kPa}$)에 의한 상향 팽창 압력은 상부에 적치된 $2.5\ \text{m}$ 복토층의 자중($\gamma_{moon} h \approx 1.5\ \text{g/cm}^3 \times 1.62\ \text{m/s}^2 \times 2.5\ \text{m} \approx 6.1\ \text{kPa}$)보다 훨씬 크므로, 구조체는 항상 순수 인장 텐션 상태에 놓이게 되며 케이블 타이 및 기초 앵커 설계가 필수적임.
- **저중력 지반 지지력 역설**: 중력이 $1/6$로 줄어들면 구조물 자중도 $1/6$로 줄어들지만, 지반의 구속압 감소로 인해 극한 지지력($q_{ult} = c N_c + q N_q + 0.5 \gamma B N_\gamma$) 또한 $1/6$ 이하로 급감하므로 지구보다 큰 기초 면적이 요구됨.

- **종합 결론**: 본 논문은 달 기지 건설을 위한 구조역학, 팽창식 멤브레인, 복토 지반역학, 방사선 차폐 및 로봇 시공 기술을 세계 최초로 포괄적 엔지니어링 체계로 집대성한 우주 토목·건축 구조공학의 불후의 고전 랜드마크 원전 논문임.

## Related Notes

- [[dyke-2024-standards-lunar-isru-materials]] — 달 ISRU 구조 재료 시험 표준 및 착륙 패드 설계 원전.
- [[he-2025-lunar-base-insitu-functional-materials]] — 창어 5호 달 복토 현무암 섬유 및 ISRU 복합체 원전.
- [[high-strength-strain-hardening-composites]] — 극한 환경 고강도 구조 복합체 체계.
- [[particle-packing-models]] — 달 복토 입자 패킹 및 지반역학 모델.
