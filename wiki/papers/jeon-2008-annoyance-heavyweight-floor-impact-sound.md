---
title: "Annoyance caused by heavyweight floor impact sounds in apartment buildings (Jeon & Lee, 2008)"
type: source_note
source: "sources/jeon-2008-annoyance-caused-by-heavyweight-floor.pdf"
citation: "Jeon, J. Y., & Lee, P. J. (2008). Annoyance caused by heavyweight floor impact sounds in apartment buildings. Journal of Sound and Vibration, 311(3-5), 767-785. https://doi.org/10.1016/j.jsv.2007.09.041"
date: 2026-08-24
tags:
  - heavyweight-floor-impact
  - psychoacoustics
  - annoyance
  - acoustic-criteria
  - loudness
  - sharpness
---

## Summary
공동주택 중량 바닥충격음(heavyweight floor impact sound)에 의해 유발되는 인체 청감 불쾌감(Annoyance)을 평가하기 위해, 물리적 음향 지표(A-가중 최대 음압레벨 $L_{Amax}$, 단일수치 평가량 $L_{i,Fmax,AW}$)와 심리음향 파라미터(Loudness, Sharpness, Fluctuation Strength, Roughness) 간의 상관관계를 종합적으로 규명한 대표적 논문이다. 뱅머신과 임팩트볼 충격음에 대한 대규모 청취 실험을 통해 불쾌감을 가장 신뢰성 있게 예측하는 지표를 도출하고, 불쾌감 10 % 및 30 % 유발 한계 음압레벨을 정량적으로 제시하여 건축 음향 설계 기준의 기초를 확립하였다.

## Key Contributions
- **심리음향 지표와 중량충격음 불쾌감의 정량 모델링**: 츠비커 라우드니스(Zwicker's Loudness, $N$)가 중량 바닥충격음의 주관적 불쾌감과 가장 높은 상관계수($R^2 = 0.89$)를 가짐을 규명.
- **충격원별(뱅머신 vs 임팩트볼) 불쾌감 반응 차이 규명**: 동일한 $L_{Amax}$에서도 저주파 에너지가 집중된 뱅머신 음향이 임팩트볼 음향보다 불쾌감 평점이 약 15 ~ 20 % 높게 나타남을 실증.
- **사회적 소음 허용 기준선 도출**: 거주자의 '매우 불쾌함(Highly Annoyed)' 비율이 급증하는 변곡점($L_{i,Fmax,AW} \approx 50 dB$)을 파악하여 바닥 슬래브 차음 설계 목표치 제안.

## Methods
- **음원 샘플링**: 다양한 슬래브 두께(120 ~ 250 mm) 및 완충 시스템을 가진 아파트 현장에서 뱅머신 및 임팩트볼 충격음 고해상도 바이노럴(binaural) 녹음.
- **청취 평가 시험**: 무향실 및 표준 청취실에서 피험자 50명을 대상으로 선호도 및 11점 수치 불쾌감 평가 수행 (ISO 15666).
- **음향 및 심리음향 분석**:
  - 시간 가중치 Fast 최대음압레벨 $L_{Fmax}$, 단일수치 등가레벨 $L_{i,Fmax,AW}$.
  - DIN 45631 규격 기반 Loudness ($N_{max}$, $N_5$), Sharpness ($S$), Roughness ($R$).

## Results
- **불쾌감 예측 모델**:
  $$\text{Annoyance} = a \cdot N_5 + b \cdot S + c \quad (R^2 = 0.91)$$
  단순 음압레벨보다 라우드니스 상위 5 % 값($N_5$, sone)과 샵니스($S$, acum)를 결합한 회귀 모델이 인체 반응을 가장 정확하게 설명함.
- **임계 음압레벨**: $L_{i,Fmax,AW} \le 47 dB$ 유지 시 불쾌율이 20 % 미만으로 억제되나, $53 dB$ 초과 시 불쾌율이 60 % 이상으로 급격히 증가함.

| 충격원 | $L_{i,Fmax,AW}$ (dB) | 라우드니스 $N_5$ (sone) | 샵니스 $S$ (acum) | 불쾌감 평점 (0-10) |
|---|---|---|---|---|
| Bang machine | 58.2 | 28.5 | 0.95 | 8.4 |
| Bang machine | 52.0 | 18.2 | 0.88 | 6.2 |
| Bang machine | 46.5 | 11.4 | 0.82 | 3.8 |
| Rubber ball | 54.1 | 21.0 | 0.76 | 6.5 |
| Rubber ball | 48.0 | 13.5 | 0.71 | 4.1 |
| Rubber ball | 42.8 | 8.2 | 0.65 | 2.2 |

## Related Notes
- [[jeon-2011-noise-sensitivity-annoyance-residential-buildings]] - 소음 민감도와 주거 불쾌감의 다변량 상관 분석
- [[jeon-2003-measurements-floor-impact-noise-rubber-ball]] - 임팩트볼 표준 충격원의 물리적 동특성 및 음향 특성
