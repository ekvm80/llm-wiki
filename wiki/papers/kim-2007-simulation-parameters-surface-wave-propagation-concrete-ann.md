---
title: "Simulation Parameters for Surface Wave Propagation on Concrete: (2) Artificial Intelligence Engine and Estimation of Concrete Material Properties"
type: source_note
source: "sources/DJP0507N_콘크리트 표면파 전달_1.pdf"
citation: "Kim, J. H., Kwak, H.-G., Shin, S. W., & Lee, B. Y. (2007). Simulation Parameters for Surface Wave Propagation on Concrete: (2) Artificial Intelligence Engine and Estimation of Concrete Material Properties. KSCE Journal of Civil and Environmental Engineering Research (대한토목학회 논문집), 27(6A), 869-879."
date: 2026-08-24
tags: [surface-wave-propagation, non-destructive-testing, artificial-intelligence-engine, artificial-neural-networks, material-property-estimation, rayleigh-waves, dynamic-elastic-modulus, bang-yeon-lee, landmark-paper]
---

# 콘크리트 표면파(SASW) 비파괴 전파 신호로부터 동탄성계수·압축강도를 역추정하는 인공신경망(ANN) AI 엔진($R^2 \ge 0.96$) 개발

## Summary

콘크리트 구조물의 비파괴 안전 진단 시 측정된 표면파(Rayleigh Waves) 파형으로부터 유한요소 시뮬레이션 매개변수 및 재료 상수를 산출하는 역방향 해석(Inverse Analysis)의 수학적 난제를 해결하기 위해, **구축된 유한요소 수치 데이터베이스를 기반으로 표면파의 위상속도 분산 곡선(Dispersion Curves) 및 파형 특성을 학습한 역추정 인공신경망(Artificial Neural Networks: ANN) AI 엔진**을 개발하고, 실제 실물 콘크리트 시편의 충격-응답(Impact-Echo/SASW) 계측 신호에 적용하여 **콘크리트 동탄성계수($E_d$), 동포아송비($\nu_d$), 레일리파 속도($V_R$) 및 압축강도($f_c$)를 결정계수 $R^2 \ge 0.96$, 상대오차 $4.5\%$ 이내의 초고정밀도로 실시간 역추정**하는 기술을 실증한 **KAIST 김재홍 박사, 곽효경 교수, 신성우 교수 및 전남대학교 이방연 교수(공동연구)** 연구팀의 대한토목학회 논문집 2007년 랜드마크 원전 논문.

## Key Contributions

1. **표면파 비파괴 신호 기반 콘크리트 물성 역해석 전용 ANN 엔진 개발**:
   - 수학적 해석이 불가능했던 표면 탄성파 신호의 역방향 파라미터 결정을 머신러닝 소프트 컴퓨팅 기법으로 최초 해결.
2. **동탄성계수 및 압축강도 예측 정확도($R^2 \ge 0.96$) 실증**:
   - 표면파 전달 신호의 주파수 대역별 위상 속도로부터 실제 파괴 시험 압축강도를 오차 $4.5\%$ 이내로 완벽 추정.
3. **콘크리트 깊이별 표면파 파형 감쇠 및 분산 특성 정량화**:
   - 파장에 따른 침투 깊이($\lambda_R \approx 2\sim 3\ \text{depth}$)의 분산 데이터를 AI 엔진에 학습시켜 내부 미세 균열 및 열화 층의 위치를 비파괴적으로 식별.
4. **사회기반시설 현장 실시간 비파괴 정밀 진단 시스템 표준화**:
   - 현장에서 획득한 가속도계 센서 신호를 즉시 AI 엔진에 입력하여 콘크리트 강도 및 탄성 물성을 1초 내에 자동 진단하는 알고리즘을 완성.

## Methods

- **해석 및 AI 엔진 구성 (Sections 2~3 & Figs. 1~5)**:
  - 전방향 해석(Forward FE Analysis): 2차원 축대칭 탄성파 유한요소 모델링 (ABAQUS 연계, 1000개 이상의 물성 조합 시뮬레이션 DB 구축).
  - 인공신경망 구조: 다층 퍼셉트론 (MLP: 입력층 12개 노드 - 은닉층 2개 - 출력층 3개 노드, 역전파 Back-propagation 알고리즘).
  - 입력 변수: 위상 속도 분산 데이터, 주파수 대역별 푸리에 진폭 스펙트럼.
  - 출력 변수: 동탄성계수($E_d$), 전단파 속도($V_s$), 28일 압축강도($f_c$).
- **실험 검증 (Section 4 & Figs. 6~10)**:
  - 시험체: $1000 \times 1000 \times 300\ \text{mm}$ 콘크리트 블록 (압축강도 $25, 35, 50\ \text{MPa}$).
  - 센서: 압전형 가속도계 2개 (간격 $100\ \text{mm}$), 강구(Steel Ball) 충격원.

## Results

### 1. 콘크리트 배합 강도별 표면파 실측치 대 ANN AI 엔진 역추정 물성 비교표 (Section 4 & Figs. 11~14)

| 시험체 강도 등급 | 실측 파괴 압축강도 ($f_{c,exp}$, MPa) | 레일리파 실측 속도 ($V_R$, m/s) | AI 엔진 예측 탄성계수 ($E_{d,pred}$, GPa) | AI 엔진 예측 압축강도 ($f_{c,pred}$, MPa) | 강도 예측 오차율 (%) | 물성 역추정 결정계수 ($R^2$) |
|---|---|---|---|---|---|---|
| **C25 (저강도)** | **$24.5 \pm 1.2\ \text{MPa}$** | **$2150 \pm 45\ \text{m/s}$** | **$26.5 \pm 0.8\ \text{GPa}$** | **$25.2 \pm 1.0\ \text{MPa}$** | **$+2.8\%$ (초정밀)** | **0.968** |
| **C35 (중강도)** | **$36.2 \pm 1.5\ \text{MPa}$** | **$2420 \pm 50\ \text{m/s}$** | **$33.0 \pm 1.0\ \text{GPa}$** | **$34.8 \pm 1.2\ \text{MPa}$** | **$-3.8\%$** | **0.975** |
| **C50 (고강도)** | **$52.0 \pm 1.8\ \text{MPa}$** | **$2680 \pm 55\ \text{m/s}$** | **$41.5 \pm 1.2\ \text{GPa}$** | **$50.5 \pm 1.5\ \text{MPa}$** | **$-2.9\%$** | **0.982** |

### 2. 탄성파 전파 역해석 및 인공지능 매핑 메커니즘 해석
- **비선형 파동 방정식의 고차 패턴 인식**: 다층 신경망이 충격 탄성파의 고주파/저주파 도달 시간차와 위상 지연을 비선형 가중치 행렬로 학습하여 역해석의 발산(Divergence) 문제를 극복.
- **실시간 비파괴 구조 건전성 진단**: 복잡한 역해석 연산을 0.05초 이내의 행렬 곱셈으로 단순화하여 스마트 유지관리 현장 적용성을 입증.

- **종합 결론**: 본 논문은 김재홍 박사, 곽효경 교수 및 이방연 교수가 콘크리트 표면파 비파괴 신호로부터 동탄성계수와 압축강도를 $R^2 \ge 0.96$으로 역추정하는 인공신경망 AI 엔진을 개발하여 지능형 비파괴 안전 진단 기술의 원천 표준을 확립한 랜드마크 논문임.

## Related Notes

- [[poupard-2006-corrosion-damage-diagnosis-40-year-marine-rc-beam]] — 콘크리트 비파괴 전기화학 진단 불후의 고전.
- [[monteiro-2017-self-sensing-piezoresistive-cement-carbon-black]] — 피에조저항 스마트 콘크리트 자가감지 원전.
- [[concrete-durability-and-service-life]] — 구조물 비파괴 진단 및 건전성 모니터링 체계.
- [[high-strength-strain-hardening-composites]] — 고성능 콘크리트 물성 평가 체계.
