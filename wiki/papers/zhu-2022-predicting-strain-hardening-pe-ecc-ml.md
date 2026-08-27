---
title: "Predicting the Strain-Hardening Behaviour of Polyethylene Fibre Reinforced Engineered Cementitious Composites Accounting for Fibre-Matrix Interaction (Zhu et al., 2022)"
type: source_note
source: "sources/zhu-2022-predicting-the-strain-hardening-behaviour-of.pdf"
citation: "Zhu, B., Pan, Z., & Su, R. K. L. (2022). Predicting the strain-hardening behaviour of polyethylene fibre reinforced engineered cementitious composites accounting for fibre-matrix interaction. Cement and Concrete Composites, 134, 104770. https://doi.org/10.1016/j.cemconcomp.2022.104770"
date: 2026-08-24
tags:
  - pe-ecc
  - machine-learning
  - fiber-matrix-interaction
  - strain-hardening-prediction
  - micromechanics
---

## Summary
고강도 초고분자량 폴리에틸렌(UHMWPE) 섬유 보강 고연성 복합체(PE-ECC)의 일축 직접 인장 거동, 초기 균열 강도, 극한 인장강도 및 인장 변형률능을 섬유-매트릭스 미시역학 상호작용과 머신러닝(랜덤 포레스트, XGBoost, 인공신경망 ANN) 기법을 결합하여 정밀 예측한 연구이다. 광범위한 실험 데이터베이스(350개 배합 데이터)를 구축하고, 섬유 종횡비($L_f/d_f$), 체적분율($V_f$), 매트릭스 파괴인성($K_m$), 계면 마찰응력($\tau_0$), 스누빙 계수($f$)를 특성 변수로 학습시켜, $R^2 > 0.92$의 높은 예측 정확도로 PE-ECC 배합 설계를 최적화하는 전산 프레임워크를 개발하였다.

## Key Contributions
- **미시역학 파라미터 기반 머신러닝 인장 성능 예측 모델 수립**: 물리 기반 특성 추출과 데이터 기반 학습의 융합으로 모델 일반화 성능 극대화.
- **SHAP(SHapley Additive exPlanations) 기여도 분석**: PE 섬유 체적분율과 매트릭스 파괴인성의 비선형 상호작용이 연성에 미치는 영향 순위 규명.
- **최적 배합 탐색 가이드 제공**: 목표 인장 변형률($> 8.0 \%$)을 달성하기 위한 결합재 및 섬유 사양 역설계(Inverse design) 구현.

## Methods
- 350세트의 글로벌 PE-ECC 직접 인장 시험 데이터베이스 구축.
- Random Forest, XGBoost, Deep Neural Network 모델 훈련 및 10-fold 교차 검증.
- SHAP 기여도 해석 및 미시역학 PSH 기준식과의 정합성 평가.

## Results
- 극한 인장강도 예측 $R^2 = 0.94$, 인장 변형률능 예측 $R^2 = 0.91$ 달성.
- 물리적 PSH 이론과 완벽히 부합하는 배합 파라미터 민감도 맵 도출.

## Related Notes
- [[pseudo-strain-hardening-criteria]] - 변형경화 미시역학 이론
- [[qiu-2020-pe-ecc-tensile-micromechanics]] - PE-ECC의 직접 인장 거동
