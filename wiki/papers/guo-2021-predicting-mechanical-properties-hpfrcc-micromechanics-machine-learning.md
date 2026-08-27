---
title: "Predicting Mechanical Properties of HPFRCC by Micromechanics and ML (Guo et al., 2021)"
type: source_note
source: "sources/materials-14-03143_HPFRCC ML.pdf"
citation: "Guo, P., Meng, W., Xu, M., Li, V. C., & Bao, Y. (2021). Predicting mechanical properties of high-performance fiber-reinforced cementitious composites by combining micromechanics and machine learning. Materials, 14(12), 3143. https://doi.org/10.3390/ma14123143"
date: 2026-08-24
tags:
  - hpfrcc
  - machine-learning
  - micromechanics
  - xgboost
  - svr
  - artificial-neural-network
---

## Summary
고성능 섬유보강 시멘트 복합체(HPFRCC/ECC)의 배합 변수와 섬유 물리적 특성을 결합하여 압축강도($), 직접 인장강도($\sigma_{tu}$) 및 극한 인장 변형률능($\epsilon_u$)을 정밀하게 예측하기 위해, 전 세계 문헌에서 수집된 **387개 실험 데이터베이스**(데이터 정제 후 압축강도 238개, 인장강도 247개, 인장 변형률능 266개)를 구축하고 인공신경망(ANN), 서포트 벡터 회귀(SVR), 분류 및 회귀 나무(CART), 익스트림 그래디언트 부스팅(XGBoost)의 예측 성능을 비교 분석한 스티븐스 공과대학교 바오(Y. Bao) 교수 및 미시간대학교 빅터 리(V. C. Li) 교수 연구팀의 2021년 Materials 논문이다. 4대 기계학습 모델 중 XGBoost 알고리즘이 가장 우수한 예측 성능을 보여, 테스트 데이터셋에서 압축강도 **^2 = 0.921*, 인장강도 **^2 = 0.957*, 인장 변형률능 **^2 = 0.896*(훈련 데이터셋 ^2$ 각각 0.984, 0.993, 0.989)의 탁월한 예측 정확도를 달성하였다.

## Key Contributions
- **HPFRCC 기계학습 전용 387개 다차원 벤치마크 데이터베이스 구축**: 시멘트, 플라이애시, 슬래그, 석회석 분말, 실리카퓸, 섬유 직경/길이/탄성계수/체적비 등 14종 입력 변수 수록.
- **이상치 탐지(Anomaly detection)를 통한 23개 비정상 데이터 제거 및 신뢰성 확보**: /B > 0.8$ 등 비현실적 데이터 정제.
- **4대 기계학습 알고리즘(ANN, SVR, CART, XGBoost) 예측 정밀도 비교**: XGBoost > SVR > ANN > CART 순으로 우수한 일반화 성능 입증.
- **하이퍼파라미터 최적화(Grid Search) 완료**: 각 물성별 최적 학습률(0.1), 추정기 수(100 ~ 1877), 감마값 정밀 도출.

## Methods
- 입력 변수 통계 (Table 1):
  - 시멘트/결합재비: 범위 0.152 ~ 1.0 (평균 0.463)
  - 플라이애시/결합재비: 범위 0 ~ 0.848 (평균 0.362)
  - 슬래그/결합재비: 범위 0 ~ 0.808 (평균 0.120)
  - 모래/결합재비: 범위 0 ~ 1.40 (평균 0.410)
  - 물/결합재비 (/B$): 범위 0.11 ~ 0.80 (평균 0.270)
  - 감수제 함량: 범위 0 ~ 2.7 % (평균 0.78 %)
  - 섬유 체적분율 ($): 범위 0 ~ 3.0 % (평균 1.9 %)
- 모델 최적화 (Table 3): 10겹 교차 검증 및 MSE 손실함수 최소화.

## Results
- 기계학습 알고리즘별 HPFRCC 역학 물성 예측 결정계수(^2$) 비교 데이터 (Table 4 & Text):

| 기계학습 모델 | 압축강도 훈련 ^2$ | 압축강도 테스트 ^2$ | 인장강도 훈련 ^2$ | 인장강도 테스트 ^2$ | 인장 변형률 훈련 ^2$ | 인장 변형률 테스트 ^2$ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **CART** | 저조 | 최하위 | 저조 | 최하위 | 저조 | 최하위 |
| **ANN** | 0.892 | 0.815 | 0.910 | 0.842 | 0.885 | 0.765 |
| **SVR** | 0.945 | 0.882 | 0.962 | 0.915 | 0.930 | 0.824 |
| **XGBoost (최적)** | **0.984** | **0.921** | **0.993** | **0.957** | **0.989** | **0.896** |

## Related Notes
- [[guo-2026-egc-intelligent-design]] - EGC 지능형 배합 설계
- [[pseudo-strain-hardening-criteria]] - PSH 미시역학 이론
- [[high-strength-strain-hardening-composites]] - 고성능 복합 구조 설계
