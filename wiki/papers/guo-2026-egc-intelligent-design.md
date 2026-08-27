---
title: "Intelligent Design of Ultra-High Toughness EGC via Machine Learning (Guo et al., 2026)"
type: source_note
source: "sources/guo-2026-intelligent-design-of-ultra-high-toughness.pdf"
citation: "Guo, P., Zhang, Y., Meng, W., & Bao, Y. (2026). Intelligent design of ultra-high toughness engineered geopolymer composites based on machine learning. Cement and Concrete Composites, 165, 105820."
date: 2026-08-24
tags:
  - engineered-geopolymer-composites
  - egc
  - machine-learning
  - multi-objective-optimization
  - genetic-algorithm
  - carbon-footprint
---

## Summary
무시멘트 알칼리 활성화 지오폴리머 복합체(EGC: GGBS + Fly Ash + Silica Fume)의 압축강도($f_c$), 극한 인장강도($\sigma_{tu}$), 인장 변형률능($\epsilon_u$), 재료비 및 탄소 배출량을 동시에 최적화하기 위해, 452개 다중 성분 EGC 실험 데이터베이스(GGBS 0 ~ 1.0, FA 0 ~ 1.0, SF 0 ~ 0.12, $S/B = 0 \sim 1.6, W/B = 0.22 \sim 0.42$, 알칼리 몰농도 0.86 ~ 1.26 mol)를 구축하고 ANN 모델 하이퍼파라미터 최적화(학습률 0.010, 은닉층 4개) 및 NSGA-II 다목적 유전자 알고리즘을 결합한 지능형 EGC 배합 설계 플랫폼을 스티븐스 공과대학교 바오(Y. Bao) 교수 연구팀이 개발한 2026년 CCC 논문이다. 최적화된 저탄소 초고인성 EGC는 28 d 압축강도 **52.5 MPa**, 직접 인장강도 **6.85 MPa**, 인장 변형률능 **6.45 %**를 달성하면서 체화 탄소를 기존 시멘트계 ECC 대비 **68 %** 감축하였다.

## Key Contributions
- **EGC 전용 452개 다차원 기계학습 데이터베이스 구축**: 전구체(GGBS, FA, SF), 활성화제(AAM 몰농도), 잔골재비, 섬유 특성 등 12개 변수 수록.
- **ANN 하이퍼파라미터 최적화를 통한 예측 성능 도출**: 최적화 후 결정계수 압축강도 $R^2 = 0.82$, 인장강도 $R^2 = 0.83$, 인장 변형률능 $R^2 = 0.88$ 달성.
- **NSGA-II 기반 파레토 최적 프론트(Pareto Front) 도출**: 강도-연성-비용-탄소배출 4대 목표 상충 관계 최적 타협해 자동 제시.
- **실험적 검증을 통한 실용성 입증**: 최적 추천 배합의 실측 물성 오차가 예측치 대비 5 % 이내로 완벽 일치.

## Methods
- 데이터베이스 변수 (Table 1):
  - GGBS: 0 ~ 1.0 (평균 0.43), FA: 0 ~ 1.0 (평균 0.54), SF: 0 ~ 0.12 (평균 0.01)
  - $S/B$: 0 ~ 1.60 (평균 0.38), $W/B$: 0.22 ~ 0.42 (평균 0.31), AAM 농도: 0.86 ~ 1.26 mol
- 모델 최적화 (Table 2):
  - ANN: Learning rate 0.001 $ightarrow$ 0.010, Hidden layers 4개, $\sigma_c R^2 = 0.82, \sigma_{tu} R^2 = 0.83, \epsilon_{tu} R^2 = 0.88$.
- 최적화 알고리즘: NSGA-II 유전자 알고리즘 (개체수 100, 세대수 200).

## Results
- ANN 하이퍼파라미터 최적화 전후 모델 예측 성능 비교 데이터 (Table 2 & Results):

| 예측 대상 물성 | 최적화 전 결정계수 $R^2$ | 최적화 후 결정계수 $R^2$ | 최적화 학습률 (Learning Rate) | 은닉층 구조 (Hidden Layers) | 최적 설계 추천 배합 실측 검증 |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **압축강도 ($\sigma_c$)** | 0.82 | **0.82** | 0.010 | 4개 층 | 52.5 MPa (예측 54.0 MPa, 오차 2.8 %) |
| **극한 인장강도 ($\sigma_{tu}$)**| 0.74 | **0.83 (+12.2 %)** | 0.010 | 4개 층 | 6.85 MPa (예측 7.10 MPa, 오차 3.5 %) |
| **극한 인장변형률 ($\epsilon_{tu}$)**| 0.72 | **0.88 (+22.2 %)** | 0.010 | 4개 층 | **6.45 % (초고연성, 오차 4.6 %)** |

## Related Notes
- [[guo-2021-predicting-mechanical-properties-hpfrcc-micromechanics-machine-learning]] - HPFRCC 머신러닝 논문
- [[one-part-shgc]] - 1액형 고연성 지오폴리머 설계
- [[sustainability-low-carbon-binders]] - 저탄소 친환경 바인더
