---
title: "The use of machine learning in boron-based geopolymers: Function approximation of compressive strength by ANN and GP (Bagheri, Nazari & Sanjayan, 2019)"
type: source_note
source: "sources/bagheri-2019-the-use-of-machine-learning.pdf"
citation: "Bagheri, A., Nazari, A., Sanjayan, J.G. The use of machine learning in boron-based geopolymers: Function approximation of compressive strength by ANN and GP. Measurement 141 (2019) 241-249. doi: 10.1016/j.measurement.2019.03.001"
date: 2026-08-23
tags: [machine-learning, ann, genetic-programming, geopolymer, boroaluminosilicate, compressive-strength-prediction, mix-design]
---

# 붕소계 지오폴리머 압축강도의 머신러닝 함수 근사(ANN+GP)

## Summary

Swinburne대(Bagheri·Nazari·Sanjayan)가 붕소 활성화 보로알루미노실리케이트 지오폴리머(BASG)의 7일 상온양생 압축강도를 배합 변수 5개 — 플라이애시 비(%F), GGBS 비(%S), 활성액 내 붕소/규소/나트륨 이온비(B/AA, Si/AA, Na/AA) — 로부터 MLP-ANN과 유전자 프로그래밍(GP)으로 예측한 논문(Measurement 141, 241-249). 기존 문헌 4편 + 신규 20계열 보완실험으로 총 114개 데이터를 구축했다. ANN은 R²>0.99의 블랙박스 예측을, GP는 설계자가 손으로 계산 가능한 닫힌형 강도 함수(R²≈0.95)를 제공한다. 실리콘 이온비가 양의 직접상관 최대, 붕소 이온비가 함수 내 최고 차수로 활성액 조성이 강도를 지배함을 밝혔다.

## Key Contributions

- **MLP-ANN**: 은닉층 1개(뉴런 10/15/20 비교 → 20개 최적), Levenberg-Marquardt 역전파, tansig(은닉)/purelin(출력). 학습 R² = 0.99580, 시험 R² = 0.99127, 전체 R² = 0.99456. 최대 오차 < 0.1(정규화 스케일), 시험 MSE = 0.0013249(RMSE 0.0364).
- **유전자 프로그래밍**: GeneXProTools 4, 3 genes + 최대 염색체 30(Table 3 기준; 결론부에는 40으로 표기되는 본문 불일치 있음), head size 8, 덧셈 연결함수, 표현식트리(ET) 기반. 학습/시험/검증 R² = 0.9300/0.9515/0.9451, RMSE ≈ 0.07. 상수 c1(Sub-ET1)=0.4, Sub-ET3의 c0=3.06·c1=1.08을 포함한 명시적 강도식 Eq.(8)을 제시 — 블랙박스 ANN과 달리 외삽 거동 검토와 설계 직접 계산이 가능하다.
- **변수 중요도**: 규소 이온비(Si/AA)가 양의 직접상관으로 가장 크고, 붕소 이온비(B/AA)가 예측 함수에서 가장 큰 지수(차수)로 작동 — 규산나트륨 함량 증가(Si/AA↑, Na/AA↓)와 붕사 투입이 BASG 강도 설계의 핵심 레버다.
- **BASG 재료군**: 호주 플라이애시+제철 슬래그를 나트륨·붕소계 알칼리 매질로 활성화한 신규 AAM 군으로, 탄소발자국·에너지·천연자원 소모 저감을 목표로 한다(동 그룹 JCP 2018/Ceram. Int. 2017-18 선행 연구의 DB 재활용).

## Methods

- 데이터 114건: %F/%S ∈ {0, 9, 30, 50, 70, 91, 100} %, NaOH 몰농도 3/5/8 M, B/AA 0~0.31, Si/AA 0~0.5, Na/AA 0.273~1. 출력은 7일 상온양생 압축강도 1~56 MPa(평균 20.56 MPa, 표준편차 15.22 MPa).
- 전 변수 선형정규화 [0,1]. ANN 데이터 분할 70/15/15(학습/검증/시험), 100 epochs, 검증 checks 20, 성능 한계 10⁻⁶.
- GP 평가지표: R², RMSE, RRSE, MAE, RAE. 잔차 기준 3등급 분류(<5 % 고정확도, 5~10 % 정확, >10 % 저정확).

## Results

- ANN: 학습·시험·전체 모두 R>0.99 회귀, 오차 히스토그램 평균 ≈ 0(학습 -0.00086, 시험 -0.0107).
- GP: 세 데이터셋에서 R² 편차 0.02 이내로 일관 — 과적합 없는 일반화. 잔차 3D 플롯에서 대부분 데이터가 '정확~고정확' 등급.
- 결론 권고: 건자재 특성 예측에서 다른 머신러닝 기법(앙상블 등) 확장 연구 제안.

## Related Notes

- [[lee-2008-database-mix-optimization-convex-hull]] — GA+ANN+볼록 껍질 ECC 배합 최적화(ML 설계 축 원전)
- [[kim-2007-surface-wave-ai-engine]] — ANN+GA 역해석 콘크리트 NDT(사용자 그룹 ML 축)
- [[guo-2026-egc-intelligent-design]] — CatBoost+SHAP+NSGA-Ⅲ EGC 지능형 설계(ML 축의 최신 후속)
- [[ganesan-2013-steel-fibre-reinforced-geopolymer-concrete]] — 강섬유 지오폴리머 콘크리트(지오폴리머 재료 축)
- [[nematollahi-2017-one-part-shgc-micromechanics]] — 1액형 SHGC 미시역학(데이터 주도 vs 메커니즘 주도 접근 대조)
- [[negahban-2021-pore-gradation-gpc-opcc]] — GPC-OPCC 공극 조직 비교
