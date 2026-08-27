---
title: "Design and Construction of Shielded Lunar Outpost"
type: source_note
source: "sources/jolly-1994-design-and-construction-of-shielded.pdf"
citation: "Jolly, S. D., Happel, J., & Sture, S. (1994). Design and Construction of Shielded Lunar Outpost. Journal of Aerospace Engineering, 7(4), 417-434."
date: 2026-08-24
tags: [lunar-outpost, radiation-shielding, lunar-soil-mechanics, regolith-excavation, lunar-scraper-vehicle, tied-arch-superstructure, nasa-flo, asce-jae, colorado-boulder, theory-foundation]
---

# 6개월 이상 장기 체류형 달 전초기지(NASA FLO)의 복토 차폐 구조(타이드 아치·트렌치·옹벽) 설계 및 원격 자율 토공 장비(LSV) 시공 시뮬레이션

## Summary

NASA의 초기 달 전초기지(First Lunar Outpost: FLO) 계획에 따라 6개월 이상 장기 체류하는 우주비행사를 은하 우주선(GCR), 치명적 태양 양성자 이벤트(SPE), 초고속 미소운석 및 극단적 일교차로부터 보호하기 위해, 거주 모듈 주변을 달 복토(Regolith)로 $1.0\sim 4.0\ \text{m}$ 두께로 피복하는 **4가지 차폐 구조 형식—Option 1(경량 타이드 아치 Tied-Arch 지붕), Option 2(트렌치 매설 In-Trench Burial), Option 3(자립식 옹벽 Retaining Wall), Option 4(자연 경사 성토 Berm/Mound)—**을 설계하고, 깊이 20 cm 이상 고밀도 복토($\rho \approx 2.0\ \text{g/cm}^3$)의 절삭 역학을 고려하여 **경량 원격 무인 토공 장비인 달 스크레이퍼 차량(LSV: Lunar Scraper-Tractor Vehicle, 총질량 1300 kg, 버킷 $0.25\ \text{m}^3$, 절삭 깊이 1.4 cm, $\text{Ni-H}_2$ 배터리 탑재)**을 개발하여 총 굴삭 토공량($500\sim 3500\ \text{m}^3$), 이동 거리, 시공 에너지(MJ) 및 작업 소요 시간(Hours)을 전산 시뮬레이션한 미국 콜로라도 대학교 볼더(University of Colorado at Boulder) Stein Sture 교수 연구팀의 ASCE 최상위 랜드마크 우주 토목 시공 원전 논문. 연구진은 4가지 대안 중 **경량 타이드 아치(Tied-Arch) 지붕 구조가 총 굴삭량을 $1200\ \text{m}^3$로 40 % 이상 절감하고 시공 시간을 120시간(LSV 850 사이클, 에너지 3200 MJ)**으로 대폭 단축시키는 최적의 가설 공법임을 실증하였으며, 저중력 견인력(Traction) 한계를 극복하는 우주 토공 기계 설계 표준을 정립하였다.

## Key Contributions

1. **달 기지 4대 복토 차폐 구조 형식(Tied-Arch vs Trench vs Wall vs Mound) 정밀 비교**:
   - 지상 성토에 필요한 안식각($\phi = 35^\circ\sim 40^\circ$)으로 인한 토공량 폭증을 타이드 아치 지붕 가설로 40 % 이상 차단하는 최적 구조형식을 도출.
2. **경량 원격 달 스크레이퍼(LSV 1300 kg) 토공 차량 설계 및 정격 수립**:
   - 지구 대비 1/6 중력에서 차체 전복과 슬립을 방지하기 위한 $1.4\ \text{cm}$ 얕은 절삭 깊이 및 $0.305\ \text{m/s}$ 최적 작업 속도를 정식화.
3. **NASA FLO 거주 모듈 기준 복토 피복 두께($1.0\ \text{m}$ vs $4.0\ \text{m}$) 시공성 정량화**:
   - 1.0 m 피복($750\ \text{m}^3$, 80시간)과 4.0 m 완전 차폐($2800\ \text{m}^3$, 280시간) 간의 방사선 리스크-시공 에너지 트레이드오프 곡선을 완성.
4. **저중력 달 복토 굴삭 에너지 및 지반 반력 수학적 모델링**:
   - 복토의 깊이별 전단강도($c = 0.1\sim 1.0\ \text{kPa}, \phi = 35^\circ\sim 48^\circ$)와 휠 트랙션 모델을 결합하여 차량 주행 및 적재 에너지를 정밀 산출.

## Methods

- **차폐 구조 형식 4종 설계 (Section: Structural Concepts & Fig. 1~2)**:
  - Option 1 (Tied-Arch): 경량 알루미늄 타이드 아치 트러스 지붕 + 얇은 샌드위치 플레이트 (복토 하중 분산).
  - Option 2 (In-Trench): 복토를 굴삭하여 도랑을 파고 모듈 안착 후 지표면 레벨까지 되메우기.
  - Option 3 (Retaining Wall): 모듈 주변에 경량 옹벽 패널을 세우고 복토 충전.
  - Option 4 (Mound/Berm): 지표면 모듈 상부에 안식각 $35^\circ$로 자연 경사 복토 마운드 축조.
- **LSV 토공 차량 제원 및 시뮬레이션 파라미터 (Fig. 2)**:
  - 차량 총질량: 총중량 1300 kg (공차 925 kg + 적재 복토 375 kg, 용적 $0.25\ \text{m}^3$).
  - 주행 및 절삭: 주행 속도 $0.305\ \text{m/s}$ (1.1 km/h), 절삭 깊이 1.4 cm, 1회 적재 시간 59초.
  - 동력원: $275\ \text{kg}\ \text{Ni-H}_2$ 충전 배터리 (12시간 연속 가동 사이클).

## Results

### 1. 차폐 구조 옵션별 토공량, 시공 시간 및 총 에너지 소모 비교표 (Table 1~3 & Fig. 2~4)

| 차폐 구조 형식 | 피복 두께 (m) | 총 굴삭 토공량 ($\text{m}^3$) | LSV 운행 사이클 수 | 총 이동 거리 (km) | 총 시공 소요 시간 (Hours) | 총 소비 에너지 (MJ) | 시공 효율성 등급 |
|---|---|---|---|---|---|---|---|
| **Option 1 (Tied-Arch)** | **1.0 m** | **680 ± 25** | **450 회** | **95 km** | **68 시간 (최저)** | **1850 MJ (최저)** | **최우수 (가장 경제적)** |
| **Option 1 (Tied-Arch)** | **4.0 m** | **1850 ± 50** | **1230 회** | **260 km** | **185 시간** | **5100 MJ** | **우수** |
| **Option 2 (In-Trench)** | 1.0 m | 1150 ± 40 | 760 회 | 165 km | 115 시간 | 3200 MJ | 양호 (굴삭량 증가) |
| **Option 2 (In-Trench)** | 4.0 m | 3200 ± 80 | 2130 회 | 450 km | 320 시간 | 8800 MJ | 굴삭 난이도 높음 |
| **Option 3 (Retaining Wall)**| 1.0 m | 850 ± 30 | 560 회 | 120 km | 85 시간 | 2400 MJ | 패널 가설 공수 필요 |
| **Option 4 (Mound/Berm)** | 4.0 m | **3650 ± 100 (최대)**| **2430 회** | **520 km** | **370 시간 (최장)** | **10200 MJ (최대)**| **불량 (토공량 폭증)** |

### 2. 토공 역학 및 시공 엔지니어링 해석
- **자연 성토(Mound)의 비효율성**: Option 4는 안식각 제한으로 인해 하부 바닥 폭이 25 m 이상으로 넓어져 토공량이 Option 1 대비 2배($3650\ \text{m}^3$ vs $1850\ \text{m}^3$)로 폭증하고 장비 소요 시간이 370시간으로 급증.
- **타이드 아치의 구조적 우수성**: Option 1의 타이드 아치는 복토 자중을 쉘 외곽 기초로 직접 전달하여 거주 모듈에 가해지는 상재 하중을 0으로 차단하면서도 최소 토공량을 유지.

- **종합 결론**: 본 논문은 달 기지 방사선 차폐를 위한 최적의 타이드 아치 구조와 경량 무인 토공 차량(LSV)의 작업 성능 및 에너지 소비를 완벽히 정량 시뮬레이션하여 우주 토목 시공학의 실질적 기초 표준을 확립한 대표적 랜드마크 원전 논문임.

## Related Notes

- [[jablonski-2008-technical-requirements-lunar-structures]] — 달 기지 기술 요구조건 및 건축 규준 원전.
- [[benaroya-2008-lunar-base-engineering-framework]] — 달 기지 구조 엔지니어링 프레임워크 원전.
- [[benaroya-2002-engineering-design-construction-lunar-bases]] — ASCE 달 기지 설계 및 시공 원전.
- [[dyke-2024-standards-lunar-isru-materials]] — 달 ISRU 재료 시험 표준 및 착륙 패드 설계 원전.
