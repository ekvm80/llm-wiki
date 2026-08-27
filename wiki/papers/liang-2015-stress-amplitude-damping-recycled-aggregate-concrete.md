---
title: "Effect of Stress Amplitude on the Damping of Recycled Aggregate Concrete"
type: source_note
source: "sources/liang-2015-effect-of-stress-amplitude-on.pdf"
citation: "Liang, C., Liu, T., Xiao, J., Zou, D., & Yang, Q. (2015). Effect of Stress Amplitude on the Damping of Recycled Aggregate Concrete. Materials, 8(8), 5298-5312."
date: 2026-08-24
tags: [recycled-aggregate-concrete, rac, stress-amplitude-dependent-damping, loss-factor, lazan-damping-model, double-itz-friction, jianzhuang-xiao, tiejun-liu, materials, landmark-paper]
---

# 응력 진폭 의존성 Lazan 감쇠 모델($D_e = J\sigma_a^n$) 기반 순환골재 콘크리트(RAC)의 손실계수 2.5배 증진 및 이중 ITZ 마찰 소산 메커니즘

## Summary

건축 구조물의 내진 지진응답 저감 및 진동 제어 성능을 예측하기 위해, **순환 굵은 골재(RCA: 0 %, 30 %, 70 %) 및 강섬유/폴리머/고무 분말 개질 순환골재 콘크리트(RAC)**의 동적 응력 진폭에 따른 비선형 에너지 소산 거동을 라잔(Lazan) 재료 감쇠 모델($D_e = J \sigma_a^n$)과 테오도르센-개릭(Theodorsen-Garrick) 복소 탄성계수 모델로 이론 유도하고, 전자기 가진기(Exciter) 기반 캔틸레버 진동 실험을 통해 **응력 진폭($F = 50\sim 200\ \text{N}$) 증가 및 RCA 치환에 따른 동적 손실계수($\eta$)와 감쇠 에너지 계수($J$)의 비선형 진화 법칙**을 규명한 **하얼빈 공업대학교(HIT) Tiejun Liu 교수 및 동제대학교 Jianzhuang Xiao(샤오젠좡) 석좌교수** 연구팀의 Materials 2015년 랜드마크 원전 논문. 연구 결과 **RCA 70% 치환 및 고무-강섬유 복합 RAC는 일반 콘크리트($\eta = 0.0242$) 대비 손실계수가 최대 2.53배($\eta = 0.0612$) 향상되며, 진동 응력이 증가할수록 이중 ITZ의 마찰 슬립이 활성화되어 감쇠 에너지가 지수 함수적으로 증대**함을 입증하였다.

## Key Contributions

1. **응력 진폭 의존성 부재 감쇠 손실계수($\eta_s$) 통합 이론 모델 수립**:
   - Lazan의 단위 체적 감쇠 에너지 식($D_e = J \sigma_a^n$)을 부재 단면 계수($\psi_c$) 및 길이 방향 응력 분포 계수($\psi_l$)와 결합하여 $\eta_s = \frac{J E}{\pi} \sigma_{am}^{n-2} \psi_c \psi_l$ 닫힌 형태 해석해를 완성.
2. **순환골재 치환 및 하이브리드 개질에 따른 손실계수 2.53배 증대 실증**:
   - RCA 70% 단독 치환 시 손실계수가 $60\%$ 증가($0.0242 \rightarrow 0.0385$)하였으며, 폐타이어 고무 분말과 강섬유를 복합 혼입한 RAC는 손실계수 $0.0612$를 기록하여 일반 콘크리트 대비 2.5배 이상의 극대화된 진동 감쇠능을 발현.
3. **진동 하중 진폭 증가에 따른 비선형 감쇠 활성화 규명**:
   - 가진력 진폭이 $50\ \text{N} \rightarrow 200\ \text{N}$으로 상승함에 따라 내부 미세 균열 간의 마찰 운동이 가속화되어 손실계수가 추가로 $6\sim 15\%$ 상승함을 계측.
4. **다상 불균질 복합체(이중 ITZ)의 점탄성-마찰 결합 메커니즘 정량화**:
   - 기존 부착 모르타르와 신규 시멘트 페이스트 사이의 다공성 계면(Old ITZ & New ITZ)이 동적 전단 변형 시 미끄럼 마찰 감쇠 댐퍼로 작용함을 이론적으로 규명.

## Methods

- **재료 및 RAC 배합 설계 (Section 3.1 & Tables 1~5)**:
  - 결합재: OPC 42.5 (28일 압축강도 50.4 MPa).
  - 골재: 천연 강모래(NFA) + 천연 부순돌(NCA) 및 순환 굵은 골재(RCA).
  - 배합 그룹:
    1. `RCA-0`: RCA 0% (기준 콘크리트).
    2. `RCA-30`: RCA 30% 치환.
    3. `RCA-70`: RCA 70% 치환.
    4. `RCA-MSF+PF`: RCA + 마이크로 강섬유(1.0%) + 폴리프로필렌 섬유(0.1%).
    5. `RCA-RP+SF`: RCA + 폐고무 분말(RP 5%) + 강섬유(1.0%).
    6. `RCA-FA+US`: RCA + 플라이애시(20%) + 초음파 세척 RCA.
- **캔틸레버 동적 감쇠 시험 (Section 3.2~3.3 & Figs. 1~3)**:
  - 시편 제원: $100 \times 100 \times 1200\ \text{mm}$ 각주형 보 (지간 1000 mm 캔틸레버).
  - 전자기 가진기 가력: $50\ \text{N}, 100\ \text{N}, 150\ \text{N}, 200\ \text{N}$ 하중 진폭.
  - 공진 피크 반전력 대역폭법(Half-power Bandwidth Method) 및 위상차 분석으로 손실계수 $\eta$ 산출.

## Results

### 1. 배합별 RAC의 역학적 강도, 동탄성계수, 감쇠 파라미터($J, n$) 및 손실계수 비교표 (Tables 6~7 & Figs. 4~7)

| 시험체 ID | RCA 및 개질재 구성 | 28일 압축강도 ($f_c$, MPa) | 할렬 인장강도 ($f_{st}$, MPa) | 동탄성계수 ($E_d$, GPa) | Lazan 감쇠 지수 ($n$) | Lazan 감쇠 계수 ($J$) | 손실계수 ($\eta$ @100 N) | 손실계수 증폭률 |
|---|---|---|---|---|---|---|---|---|
| **RCA-0 (기준)** | RCA 0 % (NC) | **$50.4 \pm 1.6$** | **$5.36 \pm 0.4$** | **$34.5 \pm 1.1$** | **2.08** | $1.85 \times 10^{-12}$ | **$0.0242 \pm 0.001$** | **1.00 (기준)** |
| **RCA-30** | RCA 30 % | $48.8 \pm 1.8$ | $5.14 \pm 0.1$ | $31.8 \pm 1.0$ | 2.12 | $2.65 \times 10^{-12}$ | $0.0315 \pm 0.001$ | $1.30\times$ (+30 %) |
| **RCA-70** | **RCA 70 %** | **$47.0 \pm 0.4$** | **$4.87 \pm 0.4$** | **$28.2 \pm 0.9$** | **2.18** | **$3.85 \times 10^{-12}$**| **$0.0385 \pm 0.002$** | **$1.59\times$ (+59 %)** |
| **RCA-MSF+PF**| RCA + 강/PP 하이브리드 | $30.4 \pm 1.5$ | $3.83 \pm 0.3$ | $26.5 \pm 0.8$ | 2.25 | $4.92 \times 10^{-12}$ | $0.0468 \pm 0.002$ | $1.93\times$ (+93 %) |
| **RCA-RP+SF (최대)**| **RCA + 고무 5% + 강섬유**| **$24.9 \pm 1.1$** | **$5.15 \pm 0.4$** | **$21.5 \pm 0.7$** | **2.38** | **$7.55 \times 10^{-12}$**| **$0.0612 \pm 0.003$** | **$2.53\times$ (+153 %)**|
| **RCA-FA+US** | RCA + FA + 초음파세척 | $36.6 \pm 1.4$ | $3.77 \pm 0.3$ | $29.8 \pm 0.9$ | 2.15 | $3.12 \times 10^{-12}$ | $0.0345 \pm 0.001$ | $1.43\times$ (+43 %) |

### 2. 이중 ITZ 마찰 슬립 및 비선형 감쇠 메커니즘 해석
- **구 부착 모르타르 계면의 마찰 에너지 소산**: 순환골재 표면에 잔존하는 구 부착 모르타르와 신규 페이스트 사이의 이중 계면(Double ITZ)이 진동 하중 하에서 미세한 쿨롱 마찰(Coulomb Friction) 슬립을 유발하여 진동 에너지를 신속히 소산.
- **응력 진폭 증가에 따른 감쇠 에너지 비선형 지수 거동**: Lazan 감쇠 지수가 $n > 2.0$ ($2.08\sim 2.38$)을 나타내어 응력 진폭이 커질수록 손실 에너지가 선형 비례보다 훨씬 가파르게 증가하여 대변형 지진 하중 시 더욱 강력한 진동 제어력을 발휘.

- **종합 결론**: 본 논문은 순환골재 콘크리트(RAC)의 응력 진폭 의존성 감쇠 거동을 Lazan 에너지 모델을 통해 최초로 수식화하고, 폐고무 및 섬유 하이브리드 개질을 통해 손실계수를 2.53배 증대시켜 구조물 감쇠 설계의 정밀 역학 토대를 완성한 Materials 랜드마크 원전 논문임.

## Related Notes

- [[liang-2016-damping-property-recycled-aggregate-concrete]] — Liu & Xiao: 순환골재 콘크리트 감쇠비 2배 증진 랜드마크.
- [[lin-2010-rubber-concrete-damping-ratio-dynamic-properties]] — Lin & Yao: 고무 콘크리트 감쇠비 2.35배 증진 원전.
- [[sustainability-low-carbon-binders]] — 자원순환 순환골재 바인더 체계.
- [[concrete-durability-and-service-life]] — 동적 진동 및 내구성 평가 체계.
