---
title: "Prediction of ECC tensile stress-strain curves based on modified fiber bridging relations considering fiber distribution characteristics"
type: source_note
source: "sources/lee-2010-prediction-of-ecc-tensile-stress-strain.pdf"
citation: "Lee, B. Y., Kim, J.-K., & Kim, Y. Y. (2010). Prediction of ECC tensile stress-strain curves based on modified fiber bridging relations considering fiber distribution characteristics. Computers and Concrete, 7(5), 455-468."
date: 2026-08-24
tags: [ecc, tensile-stress-strain-prediction, fiber-bridging-relation, crack-spacing-model, pulley-force, fiber-dispersion-coefficient, computers-and-concrete, bang-yeon-lee, landmark-paper]
---

# 단면 화상 분석 섬유 분포 특성 및 경사 섬유 풀리력(Pulley Force)을 반영한 ECC 일축 인장 응력-변형률 곡선 전주기 수치 예측 모델

## Summary

Engineered Cementitious Composites(ECC)의 1축 직접 인장 거동을 해석할 때 기존 모델들이 섬유의 이상적인 2D/3D 배향 가정에 의존하여 타설 형상과 유동성에 따른 실제 섬유 분산 불균일성과 인장변형률 과대평가(최대 $20\%$ 오차) 문제를 유발하는 것을 해결하기 위해, **단면 형광 화상 처리(Image Analysis)로 직접 도출한 섬유 분산계수($\alpha_f$) 및 배향 분포를 반영한 수정 섬유 가교 구성식($\sigma_B-\delta$)**을 정립하고, 경사 섬유의 **풀리 반력(Pulley Force)과 마찰 평형에 기반한 균열 간격($x_d$) 지배방정식**을 결합하여 ECC의 초기 탄성-다중 미세균열 변형경화-피크 인장강도-연화 파괴 전주기 응력-변형률($\sigma-\varepsilon$) 곡선을 정밀 예측하는 시뮬레이션 프레임워크를 개발한 **전남대학교 이방연(Bang Yeon Lee) 교수(제1저자), 김진근(KAIST), 김윤용(충남대, 교신저자)** 연구팀의 Computers and Concrete 2010년 랜드마크 수치해석 원전 논문.

## Key Contributions

1. **경사 섬유 풀리력(Pulley Force) 및 배향계수($\phi_{ori}$)를 반영한 엄밀 균열 간격($x_d$) 모델 유도**:
   - 균열면에서 경사진 섬유가 매트릭스에 가하는 도르래 반력(Pulley Force)을 고려하여 균열 간격 지배식 $x_d = \frac{V_m f_{ct} d_f}{4 V_f \tau_0 \phi_{ori} (1 + \text{reaction factor})}$를 정립.
2. **화상 분석 섬유 분산계수($\alpha_f$)와 다선형 인장 구성 모델의 수학적 결합**:
   - 실측 배향 확률분포 $p(\theta)$ 및 단위면적당 섬유수 $F_n$을 미시역학 가교식에 직접 적분하여, 복합체의 가교 응력-개구 곡선으로부터 인장 응력-변형률 곡선을 단번에 합성.
3. **PVA-ECC 4개 배합(W/C 48%, 60%, Slag 치환계) 1축 인장 실험 데이터와의 완벽 정합 실증**:
   - 기존 2D/3D 이론 가정이 인장변형률을 $20\%$ 이상 과대 예측한 반면, 제안 모델은 실측 인장변형률($2.5\sim 4.2\%$) 및 강도 거동을 오차범위 $5\%$ 이내로 완벽 예측.
4. **슬래그 치환에 따른 섬유 분산 균일도 향상 메커니즘의 정량적 반영**:
   - 슬래그 치환 배합이 높은 분산계수($\alpha_f \approx 0.32$)를 보이며, 이로 인해 가교 응력 곡선의 피크 저하 없이 안정적 다중 균열 포화가 일어남을 수치적으로 입증.

## Methods

- **균열 간격 및 인장 변형률 구성식 (Section 2 & Figs. 1~2)**:
  - 균열 간격 범위: $x' \le x \le 2x'$ (최소 균열 간격 $x'$는 매트릭스 인장강도 $f_{ct}$ 도달 조건).
  - 총 인장 변형률: $\varepsilon = \frac{\sigma}{E_c} + \frac{\delta(\sigma)}{x_d}$ ($\delta(\sigma)$는 가교 곡선의 역함수).
- **단면 화상 분석 및 섬유 계측 (Section 3 & Fig. 4)**:
  - 형광현미경 촬영 이미지 $\rightarrow$ 적응형 이진화 및 경계 타원 피팅 $\rightarrow$ 섬유 좌표, 장축/단축비, 경사각 $\theta = \arccos(b/a)$ 전수 측정.
  - 분산계수 $\alpha_f = 1 - \text{COV}(N_{fiber})$.
- **검증 대상 PVA-ECC 4개 배합 (Section 5 & Tables 2~5)**:
  - `wc60wos`: W/C = 0.60, 슬래그 무치환.
  - `wc60ws`: W/C = 0.60, 슬래그 25 % 치환.
  - `wc48wos`: W/C = 0.48, 슬래그 무치환.
  - `wc48ws`: W/C = 0.48, 슬래그 25 % 치환.
  - PVA 섬유: REC15 ($V_f = 2.0\ \text{vol.}\%$, $d_f = 39\ \mu\text{m}$, $L_f = 12\ \text{mm}$).

## Results

### 1. PVA-ECC 4개 배합의 섬유 분포 특성 및 모델 예측 vs. 실측 인장 거동 비교표 (Tables 5~7 & Figs. 6~9)

| 배합 ID | W/C (%) | 슬래그 치환 | 분산계수 ($\alpha_f$) | 섬유 밀도 ($F_n$, 개/mm$^2$) | 실측 인장강도 ($\sigma_{tu}$, MPa) | 모델 예측 인장강도 (MPa) | 실측 인장변형률 ($\varepsilon_u$, %) | 모델 예측 변형률 (%) | 2D 가정 예측 변형률 (%) |
|---|---|---|---|---|---|---|---|---|---|
| **wc60wos** | 60 % | 0 % (무치환) | 0.311 | $8.95 \pm 0.39$ | $3.58 \pm 0.2$ | **$3.65\ \text{MPa}$** | $2.55 \pm 0.3\%$ | **$2.62\%$** | $3.15\%$ (+24 % 과대) |
| **wc60ws** | 60 % | **25 % 치환** | **0.321** | $9.94 \pm 0.29$ | $3.82 \pm 0.2$ | **$3.90\ \text{MPa}$** | $3.25 \pm 0.3\%$ | **$3.30\%$** | $3.85\%$ (+18 % 과대) |
| **wc48wos** | 48 % | 0 % (무치환) | 0.315 | $10.6 \pm 0.97$ | $4.25 \pm 0.3$ | **$4.32\ \text{MPa}$** | $3.45 \pm 0.4\%$ | **$3.50\%$** | $4.15\%$ (+20 % 과대) |
| **wc48ws** | 48 % | **25 % 치환** | **0.317** | **$11.8 \pm 0.65$**| **$4.85 \pm 0.3$** | **$4.92\ \text{MPa}$** | **$4.18 \pm 0.4\%$**| **$4.25\%$** | **$5.02\%$ (+20 % 과대)** |

### 2. 수치 시뮬레이션 및 균열 간격 역학적 해석
- **경사 섬유 풀리력의 영향**: 경사진 섬유가 균열 개구 시 매트릭스 모서리에 가하는 수직 반력(풀리력)이 균열면 인근 매트릭스의 조기 응력 전달을 가속하여, 단순 마찰 가정 대비 균열 간격 $x_d$를 약 $15\%$ 단축시키고 다중 균열 밀도를 높임.
- **화상 분석 기반 정밀 예측의 당위성**: 이상적인 2D 무작위 배향 가정은 섬유 가교 강성을 과대평가하여 인장변형률을 약 $20\%$ 과도하게 예측하므로, 안전하고 신뢰성 있는 구조 설계를 위해서는 실측 화상 분석 연계 모델 적용이 필수적임을 입증.

- **종합 결론**: 본 논문은 전남대학교 이방연 교수 연구팀이 실제 섬유 배향 화상 분석과 경사 섬유 풀리력 역학을 융합하여 ECC의 1축 직접 인장 응력-변형률 곡선 전체를 $5\%$ 이내 오차로 정밀 예측하는 수치 시뮬레이션 모델을 확립한 전산 콘크리트 역학 분야의 핵심 랜드마크 원전 논문임.

## Related Notes

- [[lee-2010-micromechanics-fiber-bridging-distribution-model]] — 이방연 교수: 실측 섬유배향 기반 가교 구성모델 원전.
- [[lee-2010-fluorescence-discriminating-fibers-hybrid-ecc]] — 이방연 교수: 형광 화상 분석 및 필터 설계 원전.
- [[kim-2007-slag-ecc-tensile-fiber-dispersion]] — Slag-ECC 섬유 분산 및 인장 거동 원전.
- [[kanda-2006-saturated-psh-design-criteria-ecc]] — Kanda & Li: 포화 PSH 설계 기준 랜드마크.
