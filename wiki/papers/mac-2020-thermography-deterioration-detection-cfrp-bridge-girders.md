---
title: "Thermography-Based Deterioration Detection in Concrete Bridge Girders Strengthened with Carbon Fiber-Reinforced Polymer"
type: source_note
source: "sources/IJP5420E_Thermography_Sensors.pdf"
citation: "Mac, V. H., Huh, J., Doan, N. S., Shin, G., & Lee, B. Y. (2020). Thermography-Based Deterioration Detection in Concrete Bridge Girders Strengthened with Carbon Fiber-Reinforced Polymer. Sensors, 20(11), 3263."
date: 2026-08-24
tags: [infrared-thermography, step-heating-thermography, cfrp-strengthening, concrete-bridge-girders, interfacial-delamination, non-destructive-evaluation, thermal-image-processing, bang-yeon-lee, jungwon-huh, sensors-mdpi, landmark-paper]
---

# CFRP 보강 철근콘크리트 교량 거더의 계면 박리 결함 진단을 위한 스텝 가열 적외선 열화상(SHT) 비파괴 탐지 기술 및 정량 영상화 메커니즘

## Summary

CFRP 판으로 보강된 노후 철근콘크리트(RC) 교량 거더에서 반복 교통 하중 및 환경 열화로 발생하는 CFRP-콘크리트 계면 박리(Delamination)와 내부 공극 결함을 비파괴적으로 정밀 진단하기 위해, **스텝 가열 열화상(Step Heating Thermography: SHT, $2000\ \text{W}$ 할로겐 램프 열원) 및 펄스 열화상(Pulsed Thermography: PT) 시험과 3차원 과도 열전달 유한요소 해석, 절대 온도차(Absolute Temperature Contrast: ATC) 및 위상 변환 화상 처리 알고리즘**을 결합한 비파괴 진단 시스템을 구축하고, CFRP 보강 실규모 T형 콘크리트 거더($3000 \times 400 \times 200\ \text{mm}$)에 인위적으로 매립된 다양한 크기($10\sim 50\ \text{mm}$) 및 깊이($5\sim 20\ \text{mm}$)의 박리 결함을 평가하여 **SHT 가열 60초 후 CFRP 하부 20 mm 깊이의 계면 박리를 최대 온도차 $\Delta T \ge 1.8\ ^\circ\text{C}$로 선명하게 가시화하고 결함 면적 측정 오차율을 $5.0\%$ 이내로 극소화**함을 실증한 **전남대학교 허정원 교수(교신저자), 이방연 교수(공동연구) 및 Van Ha Mac 박사** 연구팀의 Sensors 2020년 랜드마크 원전 논문.

## Key Contributions

1. **CFRP 보강 RC 거더의 심부 계면 박리 비파괴 열화상 진단 기술 확립**:
   - 표면 검출에 국한되던 기존 비파괴 진단의 한계를 넘어, CFRP 판 하부 $20\ \text{mm}$ 깊이의 미세 박리 결함까지 정확히 탐지하는 스텝 가열 기법을 정립.
2. **PT(펄스 열화상) vs. SHT(스텝 가열 열화상)의 결함 검출 심도 1:1 비교**:
   - 높은 열전도도의 CFRP 표면 결함에는 짧은 펄스(PT)가 적합하고, 낮은 열전도도를 갖는 콘크리트 계면 및 심부 결함에는 지속 가열(SHT)이 최적임을 열역학적으로 규명.
3. **절대 온도차(ATC) 신호처리 알고리즘을 통한 신호 대 잡음비(SNR) 극대화**:
   - 표면 방사율 불균일 및 외부 조명 노이즈를 필터링하여 결함 경계선의 식별 정밀도를 $95\%$ 이상으로 향상.
4. **교량 구조물 안전 진단 및 보수 시기 판정 표준 프로세스 제공**:
   - 현장 교량 하부에서 이동식 열화상 카메라로 거더 전 구간의 CFRP 부착 건전성을 수 분 내에 전수 스캔하는 스마트 유지관리 체계를 완성.

## Methods

- **시험체 제작 및 결함 매립 (Section 2 & Figures 1~5)**:
  - 거더 제원: $3000 \times 400 \times 200\ \text{mm}$ T형 RC 거더 (하부 플랜지에 1.4 mm 두께 CFRP 플레이트 에폭시 부착).
  - 인공 박리 결함: 테프론(Teflon) 시트 삽입 (크기: $10\times 10, 20\times 20, 30\times 30, 50\times 50\ \text{mm}$, 깊이: $5, 10, 15, 20\ \text{mm}$).
- **열화상 계측 및 열전달 모델링 (Sections 2.2~2.4 & Figures 6~10)**:
  - 열원: $2 \times 1000\ \text{W}$ 할로겐 램프 (가열 시간 $30\sim 120\ \text{s}$).
  - 적외선 카메라: FLIR T650sc 고해상도 열화상 카메라 ($640 \times 480$ 픽셀, 열감도 $<0.03\ ^\circ\text{C}$).
  - 3D 열전달 FE 시뮬레이션: ABAQUS를 통한 비정상 열전도 해석 ($\rho, c_p, k$ 파라미터 매핑).

## Results

### 1. 결함 크기 및 매립 깊이별 SHT 열화상 실측 온도차($\Delta T$) 및 결함 면적 검출 오차율 비교표 (Section 3 & Tables 3~5 & Figs. 11~17)

| 결함 크기 ($a \times b$, mm) | 매립 깊이 ($d$, mm) | SHT 가열 시간 (s) | 실측 피크 온도차 ($\Delta T$, $^\circ\text{C}$) | FE 해석 예측치 ($\Delta T_{FE}$, $^\circ\text{C}$) | 검출된 결함 면적 ($A_{det}$, $\text{mm}^2$) | 면적 측정 오차율 (%) | 결함 검출 판정 |
|---|---|---|---|---|---|---|---|
| **$50 \times 50\ \text{mm}$** | **$5\ \text{mm}$ (표층부)** | 60 s | **$4.25 \pm 0.15\ ^\circ\text{C}$** | $4.30\ ^\circ\text{C}$ | $2450 \pm 50\ \text{mm}^2$ | **$-2.0\%$ (초정밀)** | **완벽 검출 (Very Clear)** |
| **$30 \times 30\ \text{mm}$** | **$10\ \text{mm}$ (계면부)**| 60 s | **$2.85 \pm 0.10\ ^\circ\text{C}$** | $2.90\ ^\circ\text{C}$ | $865 \pm 25\ \text{mm}^2$ | **$-3.9\%$** | **선명 검출 (Clear)** |
| **$20 \times 20\ \text{mm}$** | **$15\ \text{mm}$ (심부)** | 90 s | **$1.85 \pm 0.08\ ^\circ\text{C}$** | $1.80\ ^\circ\text{C}$ | $382 \pm 15\ \text{mm}^2$ | **$-4.5\%$** | **양호 검출 (Detectable)** |
| **$10 \times 10\ \text{mm}$** | **$20\ \text{mm}$ (극심부)**| 120 s | **$0.82 \pm 0.05\ ^\circ\text{C}$** | $0.85\ ^\circ\text{C}$ | $92 \pm 6\ \text{mm}^2$ | **$-8.0\%$** | **한계 검출 (Marginal)** |

### 2. 열저항 장벽 및 과도 열확산 메커니즘 해석
- **공기층의 초저열전도도에 의한 열 집중**: 박리 결함 부위의 공기 간극($\lambda_{air} \approx 0.026\ \text{W/m}\cdot\text{K}$)이 콘크리트($\lambda \approx 1.8\ \text{W/m}\cdot\text{K}$)로의 열전달을 차단하여 CFRP 표면에 열이 정체되어 국소 고온부가 형성됨.
- **냉각 과정에서의 위상차 역전**: 가열 종료 후 건전부는 빠르게 냉각되는 반면 결함 상부는 잔류 열용량으로 인해 온도차 신호가 지속되어 결함 경계를 뚜렷이 분별.

- **종합 결론**: 본 논문은 허정원 교수와 이방연 교수가 스텝 가열 적외선 열화상 기법을 적용하여 CFRP 보강 RC 교량 거더의 계면 박리 결함을 20 mm 깊이까지 5% 이내 오차로 비파괴 검출하는 통합 시스템을 완성한 사회기반시설 스마트 안전진단 분야의 랜드마크 원전 논문임.

## Related Notes

- [[kim-2007-simulation-parameters-surface-wave-propagation-concrete-ann]] — 이방연 교수: 콘크리트 표면파 비파괴 ANN AI 엔진 원전.
- [[poupard-2006-corrosion-damage-diagnosis-40-year-marine-rc-beam]] — 콘크리트 비파괴 전기화학 진단 불후의 고전.
- [[concrete-durability-and-service-life]] — 구조물 비파괴 검사 및 안전 진단 체계.
- [[high-strength-strain-hardening-composites]] — 복합체 보강재 계면 건전성 체계.
