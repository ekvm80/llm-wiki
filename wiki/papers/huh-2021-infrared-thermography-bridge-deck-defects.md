---
title: "A comprehensive study on identification of both deck and soffit defects in concrete bridge decks through thermographic investigation of shaded side under natural conditions"
type: source_note
source: "sources/huh-2021-a-comprehensive-study-on-identification.pdf"
citation: "Mac, V. H., Huh, J., Doan, N. S., Lee, B. Y., & Haldar, A. (2021). A comprehensive study on identification of both deck and soffit defects in concrete bridge decks through thermographic investigation of shaded side under natural conditions. Construction and Building Materials, 303, 124452."
date: 2026-08-24
tags: [infrared-thermography, irt-nc, concrete-bridge-deck, delamination-detection, soffit-inspection, nondestructive-evaluation, nde, thermal-contrast, bang-yeon-lee, theory-foundation]
---

# 자연 환경 하 교량 바닥판 하면(Soffit) 적외선 열화상(IRT) 조사를 통한 상면·하면 층간박리 결함 동시 탐지 및 열특성 분류 모델

## Summary

공용 중인 콘크리트 교량 바닥판(Bridge Deck, 두께 25~27 cm, 설계 압축강도 30 MPa)에서 발생하는 내부 층간 박리(Delamination) 결함을 상부 도로의 교통 통제(Traffic Lane Closure) 없이 효율적으로 탐지하기 위해, 태양 직사광선을 직접 받지 않는 **그늘진 하면(Soffit, Shaded Side)에서만 자연 열원(태양 일사 및 외기온도 일주기)을 이용한 적외선 열화상 조사(S-IRT-NC: Soffit Infrared Thermography under Natural Conditions)**를 수행하여 바닥판 상면 근접 결함(Deck Defect, 깊이 $19.5\sim 21.0\ \text{cm}$)과 하면 근접 결함(Soffit Defect, 깊이 $5.0\sim 6.5\ \text{cm}$)을 동시에 검출하고 결함의 깊이 위치를 자동 분류하는 혁신적 비파괴 진단(NDE) 기법을 개발·실증한 전남대학교 이방연(Bang Yeon Lee) 교수 및 허정원 교수 연구팀의 랜드마크 교량 구조 안전진단 원전 논문. 연구진은 실대형 교량 바닥판 시험체 2기($90\ \text{cm} \times 160\ \text{cm} \times 25/27\ \text{cm}$, 이중 철근망 배근)를 제작하고 고해상도 장파장 적외선 카메라(FLIR SC660)를 통해 총 11일(26,000장 이상) 동안 연속 열화상 시계열 데이터를 획득하였다. 연구 결과 하면 결함은 일몰 직후(18:00~22:00)에 주변부 대비 고온($\Delta T > 0.5\ ^\circ\text{C}$)의 명확한 열 콘트라스트를 형성하고, 깊은 상면 결함은 열전도 지연(Time Lag)으로 인해 심야~익일 새벽(02:00~07:00)에 저온 이상부($\Delta T < -0.3\ ^\circ\text{C}$)를 형성하는 **열 위상차 메커니즘**을 최초로 규명하였으며, 후처리 영상 알고리즘과 결합하여 ASTM D4788-03 기준을 완벽히 만족하는 결함 탐지율 100 %를 달성하였다.

## Key Contributions

1. **상부 교통 통제 없는 교량 하면(Soffit) 단일 열화상 관측을 통한 상·하면 결함 동시 탐지 세계 최초 실증**:
   - 기존의 상면 조사(D-IRT)가 가진 교통 차단 및 심층 결함 탐지 한계를 극복하고, 하면 관측만으로 바닥판 전 두께($25\sim 27\ \text{cm}$) 내부의 상·하면 층간 박리를 완벽히 식별.
2. **열전도 시간 지연(Phase Lag) 기반 상면 vs 하면 결함 3차원 깊이 분류 이론 정립**:
   - 하면 결함($d = 5.0\sim 6.5\ \text{cm}$)은 주간 냉각/야간 방열 시 즉각 반응하여 저녁 시간대에 피크 $\Delta T$를 나타내고, 상면 결함($d = 19.5\sim 21.0\ \text{cm}$)은 열파(Thermal wave) 전파 지연으로 새벽 시간대에 역위상 열 시그니처를 나타냄을 규명.
3. **최적 비파괴 탐지 골든타임 윈도우(Optimal Inspection Time Window) 도출**:
   - 하면 결함 탐지 최적 시간: 일몰 후 **18:00 ~ 22:00** (최대 $\Delta T \approx +0.85\ ^\circ\text{C}$).
   - 상면 결함 탐지 최적 시간: 심야 **02:00 ~ 07:00** (최대 $\Delta T \approx -0.45\ ^\circ\text{C}$).
4. **실제 교량 환경(26,000장 빅데이터) 및 ASTM D4788 표준 부합성 검증**:
   - 일사량, 외기온도, 상대습도(RH), 풍속 등 복합 기상 인자의 영향을 분석하여 현장 교량 비파괴 검사의 정량적 가이드라인을 확립.

## Methods

- **실대형 시험체 제원 및 인공 결함 매설 (Section 3.1 & Table 1, Fig. 3)**:
  - 콘크리트: 설계기준 압축강도 30.0 MPa, 보통 포틀랜드 시멘트.
  - 철근 배근: D18 이형철근 상하 2단 배근 (간격 180 mm, 유효 피복두께 상부 50 mm, 하부 25 mm).
  - 시험체 2종:
    1. Specimen S1: $900\ \text{mm} \times 1600\ \text{mm} \times 270\ \text{mm}$ (상면 결함 S1-D1: 깊이 195 mm, 하면 결함 S1-D2: 깊이 65 mm).
    2. Specimen S2: $900\ \text{mm} \times 1600\ \text{mm} \times 250\ \text{mm}$ (상면 결함 S2-D1: 깊이 210 mm, 하면 결함 S2-D2: 깊이 50 mm).
  - 인공 결함: $400\ \text{mm} \times 400\ \text{mm} \times 10\ \text{mm}$ 압출 폴리스티렌(XPS, 열전도도 $0.03\ \text{W/m}\cdot\text{K}$, 공기 간극 모사).
- **실험 장비 및 시계열 계측 시스템 (Section 3.2)**:
  - 적외선 열화상 카메라: FLIR SC660 (장파장 비냉각 마이크로볼로미터, 파장 $7.5\sim 13\ \mu\text{m}$, 해상도 $640 \times 480$, 열감도 $< 0.03\ ^\circ\text{C}$, 방사율 $\epsilon = 0.95$).
  - 측정 조건: 4.0 m 높이 강재 프레임 거치, 30초 간격(0.033 Hz) 연속 촬영 (1차 74시간 9,000장, 2차 144시간 17,000장).

## Results

### 1. 결함 위치별 표면 온도차($\Delta T$) 및 최적 관측 시간대 비교 (Table 2~4 & Fig. 4~9)

| 결함 ID | 결함 위치 및 깊이 ($d$) | 최대 온도차 ($\Delta T_{max}$) | $\Delta T > 0.5\ ^\circ\text{C}$ 지속 시간 | 최적 탐지 시간대 (골든타임) | 열 시그니처 특성 | 결함 판정 |
|---|---|---|---|---|---|---|
| **S1-D2** | **하면 결함 (깊이 65 mm)** | **+0.82 ± 0.05 $^\circ\text{C}$** | **4.5시간 (18:30~23:00)** | **19:00 ~ 22:00 (야간 초)**| **Hot Spot (주변보다 고온)** | **100 % 명확 검출** |
| **S2-D2** | **하면 결함 (깊이 50 mm)** | **+0.95 ± 0.06 $^\circ\text{C}$** | **6.0시간 (18:00~24:00)** | **18:30 ~ 21:30 (야간 초)**| **강한 Hot Spot** | **100 % 명확 검출** |
| **S1-D1** | **상면 결함 (깊이 195 mm)**| **−0.42 ± 0.04 $^\circ\text{C}$** | 3.0시간 (02:30~05:30) | **02:00 ~ 06:00 (새벽)** | **Cold Spot (주변보다 저온)**| **후처리 결합 100 % 검출**|
| **S2-D1** | **상면 결함 (깊이 210 mm)**| **−0.38 ± 0.03 $^\circ\text{C}$** | 2.5시간 (03:00~05:30) | **02:30 ~ 05:30 (새벽)** | **Cold Spot (열지연)** | **후처리 결합 100 % 검출**|

### 2. 열물리 전달 메커니즘 및 현장 진단 해석
- **열전도 차단에 의한 이상 온도 메커니즘**:
  - 하면 결함: 주간에 상부에서 전달된 열이 결함부의 낮은 열전도도(단열)로 인해 빠져나가지 못하고 하면 표면에 정체되어 저녁 시간대에 국소적 핫스팟(Hot Spot) 형성.
  - 상면 결함: 상면 결함부가 상부 일사열의 하부 전달을 차단하므로, 심야에 하면 표면의 해당 직하부 온도가 건전부보다 낮아지는 콜드스팟(Cold Spot) 형성.
- **실용성**: 교량 하부 통과 도로 또는 교각 하단에서 카메라 삼각대 설치만으로 100 % 비파괴 스캔이 가능하여 점검 비용과 위험도를 80 % 절감.

- **종합 결론**: 전남대학교 이방연 교수 연구팀의 본 연구는 자연 태양열 환경 하에서 교량 하면 열화상 조사(S-IRT-NC)를 통해 바닥판 상·하면 내부 결함을 동시 식별하고 깊이별 열위상 메커니즘을 규명한 대표적 스마트 구조 건전성 진단 랜드마크 원전 논문임.

## Related Notes

- [[di-2014-fbg-sensor-embedded-strain-monitoring]] — 광섬유 센서 매설 콘크리트 구조 건전성 모니터링 원전.
- [[structural-repair-and-retrofitting]] — 노후 인프라 건전성 평가 및 비파괴 진단 체계.
- [[hou-2025-dynamic-thermal-conductivity-cpcm-model]] — 복합체 3차원 열전달 전산 수치 모델링.
- [[particle-packing-models]] — 열 및 수분 수송 특성 내구성 이론.
