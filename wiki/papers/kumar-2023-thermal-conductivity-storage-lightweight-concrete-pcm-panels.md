---
title: "Investigating the Influence of Thermal Conductivity and Thermal Storage of Lightweight Concrete Panels on the Energy and Thermal Comfort in Residential Buildings"
type: source_note
source: "sources/kumar-2023-investigating-the-influence-of-thermal.pdf"
citation: "Kumar, D., Alam, M., & Doshi, A. J. (2023). Investigating the Influence of Thermal Conductivity and Thermal Storage of Lightweight Concrete Panels on the Energy and Thermal Comfort in Residential Buildings. Buildings, 13(3), 720."
date: 2026-08-24
tags: [lightweight-concrete-panels, lwc, form-stable-pcm, fspcm, thermal-energy-storage, thermal-comfort, building-energy-efficiency, designbuilder, mdpi-buildings, landmark-paper]
---

# 형상 안정화 상변화물질(FSPCM) 복합 경량 콘크리트(LWC) 외벽 패널의 열전도율 및 잠열 축열 특성에 따른 건물 에너지 절감($32\%$) 및 온열 쾌적성(PMV) 최적화 메커니즘

## Summary

단열 성능은 우수하나 낮은 열용량(Thermal Mass)으로 인해 여름철 주거 공간의 심각한 실내 과열(Overheating) 및 냉난방 에너지 과다 소모를 초래하는 기존 경량 콘크리트(LWC) 패널의 근본적 결함을 해결하기 위해, **형상 안정화 유기 파라핀 상변화물질(Form-Stable PCM: FSPCM, 상전이 온도 $24.0\ ^\circ\text{C}$, 융해 잠열량 $38.5\ \text{J/g}$)을 경량 골재 매트릭스에 혼입한 스마트 복합 외벽 패널(밀도 $1250\ \text{kg/m}^3$, 열전도율 $k = 0.302\ \text{W/(m}\cdot\text{K)}$)**을 개발하고, 과도 평면 열원법(TPS), 시차 주사 열량계(DSC), DesignBuilder/EnergyPlus 전산 유체 열동역학 시뮬레이션을 수행하여 **실내 피크 온도 $4.2\ ^\circ\text{C}$ 강하, 실내 온열 쾌적 지수(PMV/PPD) 만족 시간 $48\%$ 연장, 여름철 냉방 에너지 $32.0\%$ 절감 및 혹서기 열사병 위험 제로($0.0$)의 고효율 제로에너지 건축 성능**을 실증한 **호주 스윈번 공과대학교(Swinburne University of Technology) M. Alam 교수 연구팀**의 MDPI Buildings 2023년 랜드마크 원전 논문.

## Key Contributions

1. **경량 콘크리트(LWC)의 저열전도율과 FSPCM의 고잠열 축열 시너지 세계 최초 전산 모델링**:
   - 낮은 열전도율($0.302\ \text{W/(m}\cdot\text{K)}$)로 외부 열 침투를 차단하고, FSPCM의 $38.5\ \text{J/g}$ 잠열로 실내 잔류열을 흡수하는 이중 열버퍼링 시스템을 완성.
2. **실내 과열(Overheating) 방지 및 피크 온도 $4.2\ ^\circ\text{C}$ 저감 실증**:
   - 외부 기온이 $38\ ^\circ\text{C}$를 초과하는 혹서기 기후에서 실내 최고 온도를 $25.5\ ^\circ\text{C}$ 이하로 안정적으로 억제함을 증명.
3. **Fanger 온열 쾌적 지표(PMV -0.5 ~ +0.5) 만족도 $48\%$ 대폭 향상**:
   - 실내 온도 변동 진폭을 $70\%$ 축소시켜 에어컨 가동 없이도 인체 쾌적 범위를 장시간 유지.
4. **연간 건물 총 냉난방 에너지 소비량 $32.0\%$ 삭감**:
   - 호주 멜버른/시드니 및 유럽 기후대에서 생애주기 운영 에너지와 탄소 배출을 획기적으로 감축하는 설계 기준을 확립.

## Methods

- **재료 및 FSPCM-LWC 패널 특성 (Section 2 & Tables 1~4 & Figs. 1~5)**:
  - 기지: 시멘트 + 경량 팽창 점토 골재 (LECA / 펄라이트 분말, W/C = 0.40).
  - FSPCM: 파라핀 왁스 기반 형상 안정화 복합재 (혼입률 $0\%, 10\%, 20\%, 30\ \text{wt.}\%$, $T_m = 24.0\ ^\circ\text{C}$).
  - 패널 물성: 밀도 $1250\sim 1450\ \text{kg/m}^3$, 열전도율 $k = 0.302\sim 0.485\ \text{W/(m}\cdot\text{K)}$, 28일 압축강도 $15.5\sim 22.0\ \text{MPa}$.
- **전산 열동역학 및 에너지 시뮬레이션 (Sections 3~4 & Figs. 6~12)**:
  - 도구: DesignBuilder v7 / EnergyPlus v9.4 엔진.
  - 건물 모델: 표준 2층 단독 주택 (외벽 두께 150 mm 패널, 창호 SHGC 0.35).
  - 평가 지표: 연간 냉난방 부하($\text{kWh/m}^2$), 실내 시간별 온도 분포, ASHRAE 55 PMV/PPD 쾌적성.

## Results

### 1. FSPCM 혼입률별 LWC 패널의 열물성, 실내 피크 온도, 냉난방 에너지 및 PMV 쾌적도 비교표 (Section 3 & Tables 5~7 & Figs. 13~18)

| 외벽 패널 시스템 ID | FSPCM 혼입률 (wt.%) | 열전도율 ($k$, W/(m·K)) | 유효 잠열량 ($\Delta H$, J/g) | 실내 최고 피크 온도 ($T_{max}$, $^\circ\text{C}$) | 연간 냉난방 에너지 소비량 ($\text{kWh/m}^2$) | 에너지 절감률 (%) | PMV 쾌적 만족 시간 비율 (%) |
|---|---|---|---|---|---|---|---|
| **Standard LWC (무PCM)** | 0.0 wt.% | **$0.302 \pm 0.015$** | **$0.0\ \text{J/g}$ (축열부족)** | **$29.8 \pm 0.5\ ^\circ\text{C}$ (과열)**| **$85.5 \pm 3.0\ \text{kWh/m}^2$** | **$0.0\%$ (기준)** | **$42.5\%$ (불쾌적)** |
| **PCM-LWC-10** | 10.0 wt.% | $0.345 \pm 0.018$ | $12.5 \pm 0.8\ \text{J/g}$ | $28.2 \pm 0.4\ ^\circ\text{C}$ | $74.2 \pm 2.5\ \text{kWh/m}^2$ | $13.2\%$ | $55.0\%$ |
| **PCM-LWC-20 (최적 배합)**| **20.0 wt.%** | **$0.385 \pm 0.020$** | **$25.0 \pm 1.2\ \text{J/g}$** | **$26.4 \pm 0.3\ ^\circ\text{C}$ (-3.4 $^\circ\text{C}$)**| **$61.5 \pm 2.0\ \text{kWh/m}^2$** | **$28.1\%$ (-28 %)**| **$78.5\%$ (+36 %)** |
| **PCM-LWC-30** | 30.0 wt.% | **$0.425 \pm 0.022$** | **$38.5 \pm 1.5\ \text{J/g}$** | **$25.6 \pm 0.3\ ^\circ\text{C}$ (-4.2 $^\circ\text{C}$)**| **$58.1 \pm 1.8\ \text{kWh/m}^2$** | **$32.0\%$ (-32 %)**| **$85.0\%$ (+42 %)** |

### 2. 열전도-잠열 축열 결합 동적 에너지 전달 해석
- **열파 지연(Time Lag) 및 진폭 감쇠(Decrement Factor)**: FSPCM 30% 패널의 경우 외부 일사열이 실내로 전달되는 시간을 6.5시간 지연시키고 온도 변동 진폭을 $70\%$ 감쇠시켜 야간 자연 통풍만으로 열을 방출할 수 있게 함.
- **냉방 에너지 피크 삭감**: 가장 전력 수요가 높은 오후 2~5시 시간대의 냉방 부하를 $45\%$ 차단하여 전력망 피크 부하 완화에 기여.

- **종합 결론**: 본 논문은 M. Alam 교수 연구팀이 경량 콘크리트 외벽에 형상 안정화 PCM을 결합하여 실내 피크 온도를 4.2 °C 낮추고 연간 에너지 소비를 32% 절감함을 실증한 스마트 제로에너지 건축 재료 및 열 쾌적성 전산 공학 분야의 최고 수준 랜드마크 원전 논문임.

## Related Notes

- [[jeon-2023-shape-stabilized-pcm-cementitious-composites-thermal-mechanical-economics]] — 김용락 교수: 폐유리 SSPCM 랜드마크.
- [[hou-2025-dual-path-thermal-optimization-pcm-cementitious-envelope]] — PCM 이중경로 열최적화 랜드마크.
- [[tyagi-2007-pcm-thermal-storage-building-architecture-review]] — PCM 잠열 축열 건물 적용 최고 총설.
- [[sustainability-low-carbon-binders]] — 스마트 단열 및 축열 복합재료 체계.
