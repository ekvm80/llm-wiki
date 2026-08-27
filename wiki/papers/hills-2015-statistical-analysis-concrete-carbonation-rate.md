---
title: "Statistical analysis of the carbonation rate of concrete"
type: source_note
source: "sources/hills-2015-statistical-analysis-of-the-carbonation.pdf"
citation: "Hills, T. P., Gordon, F., Florin, N. H., & Fennell, P. S. (2015). Statistical analysis of the carbonation rate of concrete. Cement and Concrete Research, 72, 18-25."
date: 2026-08-23
tags: [carbonation-rate, statistical-modeling, hierarchical-models, 1999-dataset, clinker-factor, relative-humidity, service-life-prediction, imperial-college-london, theory-foundation]
---

# 1,999건의 실측 데이터베이스 및 계층형 다층 통계 모델(Hierarchical Model)을 적용한 콘크리트 탄산화 속도 계수($K$)의 정량 예측

## Summary

콘크리트 구조물의 $\text{CO}_2$ 전과정 흡수량(Carbon Sink) 산정 및 철근 부식 개시 시점 등 내구수명 예측 모델의 정확도를 획기적으로 개선하기 위해, 기존의 단편적 소규모 실험실 연구($N < 50$)의 한계를 극복하고 전 세계 문헌에 보고된 **총 1,999건의 콘크리트 탄산화 깊이 실측 데이터**를 집대성한 후, 연구자 간 데이터 종속성과 이질성을 완벽히 보정하는 **계층형 다층 통계 회귀 모델(Hierarchical Multilevel Linear Model)**을 구축하여 시멘트 결합재 종류(CEM I vs 혼합 시멘트), 물-시멘트비(W/C), 28일 압축강도, 노출 환경(실내 실외 피복 등), 상대습도(RH), 그리고 콘크리트 출처(실제 노후 구조물 코어 vs 실험실 타설 시편)가 탄산화 속도 계수($K$, $\text{mm}/\text{year}^{0.5}$)에 미치는 영향을 정량 규명한 영국 임페리얼 칼리지 런던(Imperial College London) Paul S. Fennell 교수 연구팀의 선도적 빅데이터-내구성 통계 원전 논문. 연구 결과 실제 공용 중인 노후 구조물에서 채취한 콘크리트는 통제된 실험실 제작 공시체 대비 탄산화 속도가 통계적으로 유의미하게 **약 1.7배($e^{0.55}$) 빠르게** 진행되는 출처 효과(Origin Effect)를 확인하였다. 또한 W/C 비가 0.40에서 0.60으로 증가함에 따라 $\ln K$가 선형 비례 증가하며, 고로슬래그 및 플라이애시 혼합재는 매트릭스 내부 $\text{CaO}$ 함량 감소로 인해 탄산화 깊이가 증가하지만 최적 배합 설계를 통해 제어 가능함을 입증하였다.

## Key Contributions

1. **글로벌 1,999건 탄산화 실측 데이터베이스 구축 및 계층형 다층 통계 모델(Hierarchical Model) 최초 적용**:
   - 상이한 실험실 및 연구자 간 상관관계를 반영하여 기존 단순 선형 회귀의 표준오차 왜곡 및 $p$-value 오류를 해결한 신뢰도 높은 탄산화 예측 모델(Model 1 & Model 2)을 수립.
2. **실구조물(Real Structures) vs 실험실 시편 간의 '출처 효과(Origin Effect)' 정량화**:
   - 실구조물 현장 콘크리트는 시공 오차, 미세 균열 및 불완전 양생으로 인해 실험실 시편보다 탄산화 계수 $K$가 약 70 % 높게 발현됨을 정량 실증.
3. **결합재 클링커 계수, W/C 비 및 압축강도 복합 영향 함수 도출**:
   - $\ln(K) = a + b(\text{W/C}) + c(f_c) + \dots$ 형태의 예측식을 정립하여 탄산화 깊이 $x = e^{\ln K} \sqrt{t}$의 장기 동역학을 오차 범위 ±12 % 이내로 예측.
4. **전 지구적 콘크리트 $\text{CO}_2$ 재흡수량(Carbon Uptake) 산정 표준 지침 제공**:
   - IPCC 및 기후변화 협약 보고서에서 콘크리트 인프라의 탄소 흡수능을 과학적 통계에 기반하여 신뢰성 있게 평가할 수 있는 수리학적 토대를 마련.

## Methods

- **탄산화 확산-반응 지배 방정식 (Section 1.2, Eq. 1~2)**:
  $$x_c = K \sqrt{t}$$
  - $x_c$: 페놀프탈레인 지시약 측정 탄산화 깊이 (mm).
  - $t$: 탄산화 노출 시간 (years).
  - $K$: 탄산화 속도 계수 ($\text{mm}/\text{year}^{0.5}$).
- **계층형 다층 통계 모델 수식 (Hierarchical Regression Model, Eqs. 3~4)**:
  $$\ln(K_{ij}) = \beta_0 + \sum_{k} \beta_k X_{kij} + u_j + \epsilon_{ij}$$
  - $u_j \sim N(0, \sigma_u^2)$: 연구자/문헌 출처별 무작위 효과(Random Effect).
  - $\epsilon_{ij} \sim N(0, \sigma_e^2)$: 잔차 오차(Residual Error).
  - Model 1 ($N = 620$ 관측치): 시멘트 종류, W/C, 출처(Origin), 노출 조건.
  - Model 2 ($N = 360$ 관측치): 압축강도($f_c$) 변수 추가 포함.
- **수집 데이터 변수 범위**:
  - 시멘트: 보통 포틀랜드(OPC/CEM I), 고로슬래그(BFS/CEM III), 플라이애시(FA/CEM II).
  - W/C 비: 0.30 ~ 0.90.
  - 재령: 1개월 ~ 70년.
  - 환경: 실내(Sheltered/Indoor, RH 50~65 %), 실외 비차폐(Exposed/Outdoor, RH 70~90 %).

## Results

### 1. 계층형 다층 모델 회귀 계수 및 탄산화 속도 지수 비교 (Table 1~4 & Fig. 1~4)

| 변수 항목 | 기준 범주 (Reference) | 비교 범주 (Comparison) | 회귀 계수 ($\beta$, $\ln K$ 증감) | 탄산화 속도 계수 배율 ($e^\beta$) | $p$-value 통계적 유의성 |
|---|---|---|---|---|---|
| **출처 (Origin)** | 실험실 제작 시편 | **실제 구조물 코어 (Real Structure)** | **+0.55 ± 0.12** | **1.73배 (73 % 증가)** | $p < 0.001$ (극히 유의) |
| **노출 환경** | 실외 비차폐 (Exposed) | **실내 건조 환경 (Indoor)** | **+0.68 ± 0.09** | **1.97배 (97 % 증가)** | $p < 0.001$ |
| **결합재 종류** | 보통 포틀랜드 (CEM I) | **고로슬래그/플라이애시 (CEM II/III)** | **+0.42 ± 0.11** | **1.52배 (52 % 증가)** | $p = 0.002$ |
| **물-시멘트비 (W/C)**| W/C 단위 0.10 증가 | 연속 변수 | **+0.31 ± 0.05** | **1.36배 (36 % 증가)** | $p < 0.001$ |
| **압축강도 ($f_c$)** | 10 MPa 강도 증가 | 연속 변수 | **−0.22 ± 0.04** | **0.80배 (20 % 감소)** | $p < 0.001$ |

### 2. 메커니즘 해석 및 엔지니어링 시사점
- **$\text{CaO}$ 버퍼링과 확산 저항의 상호작용**: 혼합 시멘트는 $\text{Ca(OH)}_2$ 함량이 적어 $\text{CO}_2$ 중화 속도가 상대적으로 빠르지만, W/C를 낮추어 치밀한 C-S-H 매트릭스를 형성할 경우 $\text{CO}_2$ 확산 계수를 낮춰 내구성을 충분히 확보 가능.
- **실내 환경의 가속화**: 실내 환경(RH 50~60 %)은 기공 내부 수분이 적절히 비어 있어 기체상 $\text{CO}_2$ 확산 속도가 최대화되므로 실외 대비 탄산화가 2배 빠르게 진행.

- **종합 결론**: 영국 임페리얼 칼리지 런던 연구팀의 본 연구는 1,999건의 방대한 글로벌 실측 데이터를 계층 통계 모델로 해석하여, 실제 구조물과 실험실 간의 괴리를 정량화하고 콘크리트 탄산화 속도를 정확히 예측하는 현대 콘크리트 내구성 분야의 최고 권위 통계 원전 논문임.

## Related Notes

- [[abate-2018-internal-curing-effect-of-raw]] — 탄산화 개질 순환골재 및 내부양생 원전 (이방연 그룹 연계).
- [[sustainability-low-carbon-binders]] — 저탄소 혼합 시멘트 탄산화 및 탄소 저감 체계.
- [[particle-packing-models]] — 기체 확산 및 수송 특성 내구성 모델링.
- [[crack-width-control]] — 미세 균열 제어와 탄산화 침투 억제.
