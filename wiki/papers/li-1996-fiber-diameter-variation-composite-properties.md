---
title: "Effect of fiber diameter variation on properties of cement-based matrix fiber reinforced composites"
type: source_note
source: "sources/li-1996-effect-of-fiber-diameter-variation.pdf"
citation: "Li, V. C., & Obla, K. (1996). Effect of fiber diameter variation on properties of cement-based matrix fiber reinforced composites. Composites Part B: Engineering, 27(3-4), 275-284."
date: 2026-08-24
tags: [fiber-diameter-variation, normal-distribution, fiber-bridging-constitutive-model, fracture-energy, first-crack-strength, fiber-rupture, micromechanics, victor-li, composites-part-b, landmark-paper]
---

# 상용 섬유 직경 편차(Normal Distribution)가 시멘트 복합체의 가교 응력-개구 변위($\sigma_B-\delta$), 첫 균열강도 및 파괴 에너지($G_c$)에 미치는 미시역학적 정량 해석

## Summary

상용 합성 섬유 및 천연 섬유 제조 공정에서 필연적으로 발생하는 **섬유 직경의 통계적 편차(Fiber Diameter Variation, 정규분포 $N(d_f^*, \sigma_d^2)$)**가 시멘트 복합체의 가교 응력 곡선($\sigma_B-\delta$), 첫 균열강도($\sigma_{fc}$), 파괴 에너지($G_c$), 섬유 파단(Rupture) 천이 및 의사 변형경화(PSH) 거동에 미치는 영향을 규명하기 위해, **직경 확률밀도함수 $p(d_f)$를 3차원 단일 섬유 탈착-인발 적분 방정식에 결합한 확장 미시역학 모델**을 유도하고, 균일 직경(Uniform Diameter) 모델 대비 가교 특성 및 파괴인성 변화율을 정량 해석한 **미시건 대학교 Victor C. Li 석좌교수와 Karthikeyan Obla**의 Composites Part B: Engineering 1996년 랜드마크 원전 논문. 연구 결과 적절한 직경 편차는 얇은 섬유의 고종횡비($L_f/d_f$) 초기 강성과 굵은 섬유의 파단 방지 인발이 상호 보완되어 **파괴 에너지($G_c$)를 $5\sim 15\%$ 향상시키고 초기 균열강도를 증대**시키는 긍정적 효과가 있으나, 과도한 직경 편차는 국소 파단을 촉진할 수 있음을 수학적으로 입증하였다.

## Key Contributions

1. **정규분포 섬유 직경 편차 $p(d_f)$를 반영한 일반화 섬유 가교 미시역학 모델 최초 유도**:
   - 가교 응력 적분식 $\sigma_B(\delta) = \int_{d_1}^{d_2} \left[ \int \int P(\delta, z, \phi, d_f) p(z) p(\phi) dz d\phi \right] p(d_f) d(d_f)$를 엄밀 유도하여 직경 분산 효과를 해석.
2. **직경 편차에 따른 복합체 파괴 에너지($G_c$) 및 첫 균열강도 증대 효과 정량화**:
   - 균일 직경 모델 대비 직경 편차가 존재하는 복합체에서 $G_c = \frac{1}{12} g \tau V_f d_f^* (L_f/d_f^*)^2 k(z_1, z_2)$로 보정 계수 $k > 1.0$을 산출하여 인성이 약 $10\%$ 증대됨을 증명.
3. **섬유 파단(Fiber Rupture) 발생 임계 조건의 확률론적 분할 해석**:
   - 임계 매입 길이 $L_c(d_f) = \frac{d_f \sigma_{fu}}{2\tau_0}$가 직경에 따라 변함에 따라, 얇은 섬유 군($d_f < d_f'$)과 굵은 섬유 군($d_f > d_f'$)의 복합 파괴 모드를 구간별(Sector I, II, III)로 완벽히 정식화.
4. **상용 섬유 품질 관리 및 직경 공차 허용 기준 제시**:
   - PSH 변형경화 포화도를 저해하지 않는 섬유 직경의 표준편차 허용 상한($\sigma_d / d_f^* \le 0.15$)을 미시역학적으로 제시.

## Methods

- **직경 확률분포 및 단일 섬유 모델 (Section 2 & Fig. 1)**:
  - 직경 정규분포: $p(d_f) = \frac{1}{\sqrt{2\pi}\sigma_d} \exp\left( -\frac{(d_f - d_f^*)^2}{2\sigma_d^2} \right)$ (유효 범위 $d_1 \le d_f \le d_2$).
  - 단일 섬유 인발 하중: $P(\delta, z, \phi, d_f) = \pi d_f \tau_0 (L_e - \delta) e^{f\phi}$.
- **가교 응력-개구 변위 유도 (Section 2.1~2.2 & Figs. 2~4)**:
  - 프리피크 구간 ($\delta < \delta^*$): 탈착 진행 중 가교 응력 $\sigma_B(\delta)$.
  - 포스트피크 구간 ($\delta > \delta^*$): 전면 인발 슬립 가교 응력 $\sigma_B(\delta) = \sigma_0 (1 - 2\delta/L_f)^2 k_2$.
- **첫 균열강도 ($\sigma_{fc}$) 파괴역학 평형식 (Section 3 & Appendix 3)**:
  - 균열 선단 응력확대계수 평형: $K_L + K_B = K_{tip}$.
  - 응집 가교 견인력(Cohesive Traction) 적분을 통한 $\sigma_{fc}$ 닫힌 형태 해석해 산출.

## Results

### 1. 섬유 직경 균일 vs. 불균일 분포 시 복합체 역학 파라미터 비교표 (Sections 2~4 & Figs. 5~9)

| 평가 항목 | 균일 직경 모델 ($\sigma_d = 0$) | 직경 편차 모델 ($\sigma_d / d_f^* = 0.05$) | 직경 편차 모델 ($\sigma_d / d_f^* = 0.10$) | 영향 메커니즘 |
|---|---|---|---|---|
| **복합체 파괴 에너지 ($G_c$)** | $1.00\ G_{c,0}$ (기준) | **$1.05\ G_{c,0}$ (+5 %)** | **$1.12\ G_{c,0}$ (+12 %)** | 얇은 섬유의 고종횡비 가교 인성 기여 |
| **첫 균열강도 ($\sigma_{fc}$)** | $\sigma_{fc,0}$ (기준) | **$1.03\ \sigma_{fc,0}$** | **$1.07\ \sigma_{fc,0}$** | 초기 균열 선단 가교 응집력 상승 |
| **피크 가교 응력 ($\sigma_0$)** | $\sigma_0$ (기준) | $\approx 1.01\ \sigma_0$ | $\approx 1.02\ \sigma_0$ | 피크 응력 유지 |
| **섬유 파단 위험도** | 단일 임계길이 $L_c$ | 저직경 섬유 일부 파단 발생 가능 | 저직경 섬유 파단 증가 | $\sigma_d / d_f^* > 0.15$ 시 PSH 저하 유발 |

### 2. 직경 편차에 따른 파괴 및 가교 메커니즘 해석
- **미세 직경 섬유의 초기 가교 보강**: 평균보다 직경이 작은 섬유($d_f < d_f^*$)는 동일한 체적 대비 표면적이 넓어 초기 균열 개구 시 더 높은 응집 응력을 제공하여 첫 균열강도를 증대시킴.
- **대직경 섬유의 파단 방지**: 평균보다 직경이 큰 섬유($d_f > d_f^*$)는 파단 강도 여유가 커서 완전 인발(Pullout)되어 종국 파괴 에너지를 지속 공급.

- **종합 결론**: 본 논문은 섬유 직경의 통계적 불균일성이 복합체의 가교 응력 곡선 및 파괴인성에 미치는 영향을 미시역학적으로 엄밀 정식화하여 상용 섬유의 제조 공차 관리 및 복합체 설계의 신뢰성을 획기적으로 향상시킨 랜드마크 원전 논문임.

## Related Notes

- [[li-1991-micromechanical-model-tension-softening-bridging]] — Victor Li: 섬유 가교 인장연화 미시역학 모델 원전.
- [[li-1995-matrix-design-for-pseudo-strain-hardening]] — Victor Li: PSH 복합체 매트릭스 설계 지침 원전.
- [[lee-2010-micromechanics-fiber-bridging-distribution-model]] — 이방연 교수: 섬유 배향 분포 결합 가교 구성 모델 원전.
- [[strain-hardening-mechanism]] — ECC 변형경화 미시역학 이론.
