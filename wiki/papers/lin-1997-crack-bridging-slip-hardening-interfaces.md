---
title: "Crack bridging in fiber reinforced cementitious composites with slip-hardening interfaces"
type: source_note
source: "sources/lin-1997-crack-bridging-in-fiber-reinforced.pdf"
citation: "Lin, Z., & Li, V. C. (1997). Crack bridging in fiber reinforced cementitious composites with slip-hardening interfaces. Journal of the Mechanics and Physics of Solids, 45(5), 763-787."
date: 2026-08-24
tags: [crack-bridging-model, slip-hardening-interface, micromechanics, closed-form-solution, single-fiber-pullout, psh-ductility, spectra-pe-ecc, victor-li, jmps, landmark-paper]
---

# 슬립 경화(Slip-Hardening) 계면 특성을 엄밀 반영한 섬유보강 시멘트 복합체의 균열 가교 구성 모델 및 닫힌 형태(Closed-Form) 해석해 정립

## Summary

기존의 일정 마찰 계면 모델($\tau = \tau_0$)이 고분자 합성 섬유 인발 시 섬유 표면 마모·잼 현상으로 인해 발생하는 슬립 경화(Slip-Hardening, $\tau(s) = \tau_0(1 + \beta s/d_f)$) 거동을 반영하지 못하여 피크 가교 응력 시의 균열 개구 변위($\delta_0$)와 복합체 극한 인장변형률($\varepsilon_u$)을 실측치의 1/4 수준으로 심각하게 과소평가하던 한계를 해결하기 위해, **단일 섬유 탈착(Pre-debonding) 및 완전 탈착 후 인발(Post-debonding Pullout) 2단계 전주기 미시역학 미분방정식**을 수립하고, 3차원 무작위 배향 적분을 통해 **슬립 경화 계면을 반영한 가교 응력-개구 변위($\sigma_B-\delta$)의 닫힌 형태(Closed-Form) 엄밀 해석해**를 유도하여 Spectra PE 섬유 복합체의 초고연성($\varepsilon_u = 3.5\sim 7.0\%$)을 오차 없이 완벽히 예측·검증한 **미시건 대학교 Zhong Lin 박사와 Victor C. Li 석좌교수**의 Journal of the Mechanics and Physics of Solids (JMPS) 1997년 불후의 최고 랜드마크 원전 논문.

## Key Contributions

1. **슬립 경화 계면($\beta > 0$)을 통합한 전주기 균열 가교 $\sigma_B(\delta)$ 닫힌 형태(Closed-Form) 해석해 최초 유도**:
   - 가교 응력 곡선을 프리-디본딩($\delta < \delta^*$)과 포스트-디본딩($\delta > \delta^*$) 구간으로 나누어 슬립 경화 계수 $\beta$가 포함된 엄밀 대수 해석해를 도출.
2. **일정 마찰 모델의 연성 과소평가 결함 원천 해결**:
   - 기존 일정 마찰 모델이 균열 개구 변위 $\delta_0$를 $16\sim 27\ \mu\text{m}$, 인장변형률을 $0.6\sim 1.8\%$로 심각하게 과소평가했던 것을, 제안 모델은 $\delta_0 = 90\sim 137\ \mu\text{m}$, $\varepsilon_u = 3.3\sim 9.6\%$로 실측치와 완벽히 일치시킴.
3. **가교 상보 에너지($J_b'$) 증폭 및 PSH 변형경화 포화 메커니즘 정량화**:
   - 슬립 경화 계수 $\beta$가 증가함에 따라 $\sigma_B-\delta$ 곡선 하부 면적인 $J_b'$가 비선형적으로 확장되어, 매트릭스 파괴인성 $J_{tip}$ 대비 $J_b'/J_{tip} \gg 3.0$을 만족시키는 이론적 근거 완성.
4. **플라즈마 표면 처리 Spectra PE 복합체 실험을 통한 다중 미세균열 거동 검증**:
   - 아르곤 플라즈마 처리에 따른 마찰 강도($\tau_0$) 및 $\beta$ 증가가 복합체의 인장강도($3.1 \rightarrow 5.7\ \text{MPa}$)와 연성($3.5\% \rightarrow 7.0\%$)을 비약적으로 상승시킴을 입증.

## Methods

- **단일 섬유 미시역학 미분방정식 (Section 2 & Figs. 3~5)**:
  - 계면 전단응력: $\tau(s) = \tau_0 \left( 1 + \beta \frac{s}{d_f} \right)$.
  - 축력 평형 및 변위 적합 방정식: $\frac{dP}{dx} = \pi d_f \tau(s)$, $\frac{ds}{dx} = \frac{4P(x)}{\pi d_f^2 E_f}$.
  - 탈착 완료 변위: $\delta_0 = \frac{\tau_0 (1+\eta) L_e^2}{E_f d_f} + \text{slip-hardening correction}$.
- **3D 공간 통계 적분 및 가교 응력 합성 (Section 3 & Fig. 6)**:
  - 경사각 $\phi \sim \sin\phi$, 중심거리 $z \sim 2/L_f$, 스너빙 인자 $e^{f\phi}$.
  - 총 가교 응력 지배식: $\sigma_B(\delta) = \int_0^{\pi/2} \int_0^{(L_f/2)\cos\phi} P(\delta, z, \phi) p(z) p(\phi) dz d\phi$.
- **실험 검증 데이터베이스 (Section 4 & Tables 1~2)**:
  - Spectra 900 PE 섬유 ($V_f = 2.0\ \text{vol.}\%$, $d_f = 38\ \mu\text{m}$, $L_f = 12.7\ \text{mm}$, $\sigma_{fu} = 2.6\ \text{GPa}$, $E_f = 117\ \text{GPa}$).
  - 무처리(Untreated) vs. 아르곤 플라즈마 표면 처리(Plasma treated).

## Results

### 1. 일정 마찰 모델 vs. 제안 슬립경화 모델 vs. 실측 인장 거동 비교표 (Tables 1~2 & Figs. 7~10)

| 복합체 조건 | 모델 구분 | 피크 가교 응력 ($\sigma_0$, MPa) | 피크 균열 개구 ($\delta_0$, $\mu$m) | 예측 인장변형률 ($\varepsilon_u$, %) | 실측 인장강도 ($\sigma_{tu}$, MPa) | 실측 인장변형률 ($\varepsilon_u$, %) | 모델 정확도 |
|---|---|---|---|---|---|---|---|
| **SPECC (무처리 섬유)** | 기존 일정 마찰 모델 ($\beta = 0$) | 3.2 MPa | **$16\ \mu\text{m}$ (과소)** | **$0.6\%$ (심각한 과소)**| $3.1 \pm 0.2$ | $3.5 \pm 0.3\%$ | 오차 83 % |
| | **제안 슬립경화 모델 ($\beta = 0.05$)**| **3.5 MPa** | **$90\ \mu\text{m}$** | **$3.3\%$** | **$3.1 \pm 0.2$** | **$3.5 \pm 0.3\%$** | **오차범위 5 % 정합** |
| **SPECC (플라즈마 처리)**| 기존 일정 마찰 모델 ($\beta = 0$) | 5.4 MPa | **$27\ \mu\text{m}$ (과소)** | **$1.8\%$ (과소)** | $5.7 \pm 0.3$ | $7.0 \pm 0.5\%$ | 오차 74 % |
| | **제안 슬립경화 모델 ($\beta = 0.12$)**| **5.9 MPa** | **$137\ \mu\text{m}$** | **$9.6\%$ (상한)** | **$5.7 \pm 0.3$** | **$7.0 \pm 0.5\%$** | **초고연성 완벽 포착** |

### 2. 슬립 경화 메커니즘 및 가교 에너지 해석
- **섬유 표면 마이크로 피브릴 잼(Jamming) 효과**: PE 및 PVA 섬유가 인발될 때 매트릭스 수화물 입자가 섬유 표면을 긁어 미세 피브릴이 박리·응집되면서 슬립 거리에 비례하여 마찰 저항이 증가하는 슬립 경화($\beta > 0$)가 발생.
- **균열 개구 용량의 5배 확장**: 슬립 경화로 인해 피크 응력에 도달할 때까지 섬유가 파단되지 않고 늘어나면서 균열 개구 변위 $\delta_0$가 $16\ \mu\text{m} \rightarrow 90\sim 137\ \mu\text{m}$로 확장되고, 이것이 다중 균열 포화 시 $3\sim 7\%$의 거대한 인장 연신율로 전환.

- **종합 결론**: 본 논문은 Lin & Li가 슬립 경화 계면 역학을 지배방정식에 완전 통합하여 복합체의 $\sigma_B-\delta$ 가교 곡선 및 극한 인장변형률을 수학적으로 엄밀히 예측하는 닫힌 형태의 해석 모델을 완성한 현대 ECC 및 고성능 섬유 복합재료 미시역학 분야의 불후의 최고 고전 원전 논문임.

## Related Notes

- [[li-1991-micromechanical-model-tension-softening-bridging]] — Victor Li: 섬유 가교 인장연화 미시역학 모델 원전.
- [[li-1995-matrix-design-for-pseudo-strain-hardening]] — Victor Li: PSH 복합체 매트릭스 설계 지침 원전.
- [[lee-2010-micromechanics-fiber-bridging-distribution-model]] — 이방연 교수: 실측 배향 결합 가교 구성 모델 원전.
- [[strain-hardening-mechanism]] — ECC 변형경화 미시역학 이론 체계.
