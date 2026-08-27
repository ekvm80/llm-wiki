---
title: "Simulation Parameters for Surface Wave Propagation on Concrete: (2) AI Engine and Estimation of Concrete Material Properties (Kim, Kwak, Shin & Lee, 2007)"
type: source_note
source: "sources/DJP0507N_콘크리트 표면파 전달.pdf"
citation: "김재홍, 곽효경, 신성우, 이방연. 콘크리트 표면파 전달의 시뮬레이션을 위한 매개변수 결정: (2) 인공 엔진 및 재료상수의 추정. 대한토목학회 논문집 27(6A) (2007) 869-879."
date: 2026-08-22
tags: [ndt, surface-wave, artificial-neural-network, genetic-algorithm, inverse-analysis, wavelet, korean-paper]
---

# 콘크리트 표면파 시뮬레이션 매개변수 결정: AI 엔진과 재료상수 추정

## Summary

충격가진으로 발생하는 콘크리트 표면파(surface acoustic wave)에서 재료상수를 역해석하는 인공지능 엔진을 구축한 논문(KAIST 곽효경 그룹, 사용자 공동 연구). 유한요소 해석 데이터베이스+ANN+유전자 알고리즘 조합으로 압축강도까지 추정하는 비파괴평가 시스템.

## Key Contributions

1. FE+ANN 하이브리드 역해석 프레임: 실험 DB의 신뢰성 한계 대신 몬테카를로로 생성한 검증된 유한요소 수치해석 데이터베이스(2,000 레코드×16 속성)를 학습 데이터로 사용 — 실험 오차가 포함되지 않은 이론적으로 완전한 예측 시스템.
2. 주요 웨이블렛 성분 분석(PWCA): 연속 웨이블렛 변환(gaus1)으로 첫 에너지 피크의 도달시간 u₁·스케일 s₁만 특징인자로 추출 — 센서 접촉 여진 문제 회피.
3. 통계적 입력변수 선별(t-검증 p값): 출력변수 V₁은 tc·ρ·E·η₁·η₂ 5인자, SA는 tc·E·η₂, SB는 tc·ρ·E·η₂에 유의 상관. ρ·v는 표면파 민감도 낮음 확인.
4. 역해석 가능성의 한계 정량화: 결정계수 기준 접촉시간 99 %·탄성계수 95 %·강성감쇠 96 %까지 복원 가능하나 밀도 45 %·포아송비 34 %는 다대일 대응으로 불가 → GA 최적화로 보완.
5. 동·정탄성계수 관계 검증: 표면파로 추정한 동탄성계수가 기존 모델식(Ec=0.83Ed 등)과 일치. 저/보통/고강도(L/M/H, fc 19.9/32.0/53.0 MPa) 3계열 × 3회 반복으로 재현성 확보(공기압 발사장치).

## Methods

직육면체 40×40×15 cm + 원주공시체 7개/계열, 소형 가속도계 PCB353B15 2채널(l=d=5 cm), air-shot gun 충격가진, CWT(dt=1e-7), Levenberg-Marquardt MLP(은닉노드 9/5/5), 10-fold 교차검증, GA(룰렛휠 선택+산발교배+Gaussian 돌연변이).

## Results

- 표면파 속도 V₁: L 2000~2024 m/s, M ~2262-2283, H 2451~2500.
- ANN 역산 E: L 26.6~28.6 GPa, M ~32-33.6, H 39.9~43.2 (정탄성계수 24.4/31.1/36.2 GPa와 합치).
- 초기 파형 시뮬레이션이 실험과 완전 일치.

## Related Notes

- [[lee-2008-database-mix-optimization-convex-hull]] — 같은 시기 사용자 관련 ANN 배합 최적화 논문(KCI).
- [[lee-kim-kim-2006-crack-pattern-recognition]]·[[kim-2007-fiber-dispersion-fluorescence]] — KAIST 이미지처리 ANN 계열과 함께 소프트컴퓨팅 적용 축.
- [[beppu-2008-damage-evaluation-of-concrete-plates]] — 충격가진 NDT의 다른 방향(고속충돌 손상).
- [[bagheri-2019-ann-gp-boroaluminosilicate-geopolymer]] — 건자재 강도 예측 ANN+GP(ML 적용 확장)
