---
title: "A micromechanical model of tension-softening and bridging toughening of short random fiber reinforced brittle matrix composites"
type: source_note
source: "sources/li-1991-a-micromechanical-model-of-tension-softening.pdf"
citation: "Li, V. C., Wang, Y., & Backer, S. (1991). A micromechanical model of tension-softening and bridging toughening of short random fiber reinforced brittle matrix composites. Journal of the Mechanics and Physics of Solids, 39(5), 607-625."
date: 2026-08-24
tags: [tension-softening, bridging-toughening, snubbing-effect, short-random-fibers, micromechanics, single-fiber-pullout, slip-hardening, victor-li, jmps, landmark-paper]
---

# 단섬유 무작위 보강 복합체의 인장연화(Tension-Softening) 및 가교 인성화 미시역학 모델: 스너빙 효과($e^{f\phi}$) 및 슬립경화 계면의 수학적 정식화

## Summary

단섬유가 3차원 무작위로 분산된 취성 매트릭스 복합체(시멘트/세라믹)의 피크 하중 이후 인장연화(Tension-Softening) 거동 및 파괴인성(Fracture Energy $G_c$) 증진 메커니즘을 규명하기 위해, **경사 섬유의 도르래 마찰 효과인 스너빙 계수($f$)에 의한 지수함수적 인발 저항 증가($P = P_0 e^{f\phi}$)와 섬유 마모에 따른 슬립-경화(Slip-Hardening) 계면 거동**을 결합한 **단일 섬유 탈착-인발 미시역학 평형방정식**을 정립하고, 3D 무작위 공간 확률분포 적분을 통해 **가교 응력-균열 개구 변위($\sigma-\delta$) 관계식 및 파괴 에너지 해석해**를 세계 최초로 유도한 **미시건 대학교 Victor C. Li 교수, 조지아텍 Youjiang Wang, MIT Stanley Backer** 공동 연구팀의 Journal of the Mechanics and Physics of Solids (JMPS) 1991년 불후의 최고 랜드마크 원전 논문.

## Key Contributions

1. **스너빙 효과(Snubbing Effect, $e^{f\phi}$)의 수학적 정식화 및 세계 최초 도입**:
   - 균열면에 경사각 $\phi$로 가교된 유연한 섬유가 균열 모서리를 통과해 인발될 때 매트릭스 지지 모서리와의 마찰로 인해 인발 하중이 $P(\phi) = P_0 e^{f\phi}$로 기하급수적으로 증가하는 물리적 메커니즘을 최초로 수식화.
2. **슬립-경화(Slip-Hardening) 및 슬립-연화(Slip-Weakening) 계면 통합 모델 구축**:
   - 섬유 인발 중 매트릭스 입자에 의한 표면 스크래칭/마모 효과를 반영하여 계면 전단응력 $\tau(s) = a_0 + a_1 s + a_2 s^2$ 형태의 일반화 비선형 마찰 모델을 제안.
3. **3D 무작위 섬유 가교 응력-개구 변위($\sigma-\delta$) 닫힌 형태(Closed-Form) 해석해 도출**:
   - 일정 마찰 계면 및 3차원 등방 배향($p(\phi) = \sin\phi, p(z) = 2/L_f$) 하에서 무차원 가교 응력 $\hat{\sigma}(\hat{\delta}) = (1 - \hat{\delta})^2$의 엄밀 해석해 유도.
4. **ECC(Engineered Cementitious Composites) 미시역학 설계의 수학적 기틀 확립**:
   - 이후 Victor Li 교수의 변형경화 PSH 2대 기준($J_b'/J_{tip} > 1$, $\sigma_0/\sigma_{cr} > 1$) 및 현대 모든 섬유보강 콘크리트 인장 구성식의 근간이 되는 역사적 토대 완성.

## Methods

- **단일 섬유 인발 역학 모델 (Section 2 & Figs. 1~4)**:
  - 섬유 제원: 직경 $d_f$, 길이 $L_f$, 탄성계수 $E_f$, 인장강도 $\sigma_{fu}$.
  - 계면 전단응력: $\tau(s) = \tau_0 (1 + \beta s/d_f)$ (미끄럼 경화 계수 $\beta$).
  - 경사각 $\phi$에 따른 도르래 마찰: $P(\delta, \phi) = P_0(\delta) e^{f\phi}$.
  - 섬유 파단 한계: $\sigma_f(\phi) = \frac{4P(\phi)}{\pi d_f^2} \ge \sigma_{fu} e^{-f'\phi}$.
- **3D 공간 적분 통계 역학 (Section 3 & Fig. 2)**:
  - 중심 거리 확률밀도: $p(z) = 2/L_f$ ($0 \le z \le L_f/2$).
  - 경사각 확률밀도: $p(\phi) = \sin\phi$ ($0 \le \phi \le \pi/2$).
  - 단위면적당 섬유 수: $N_B = \frac{V_f}{\pi d_f^2 / 4} \int_0^{\pi/2} \cos\phi \sin\phi d\phi = \frac{V_f}{2 A_f}$.
  - 총 가교 응력: $\sigma(\delta) = \int_0^{\pi/2} \int_0^{(L_f/2)\cos\phi} P(\delta, z, \phi) p(z) p(\phi) dz d\phi$.

## Results

### 1. 섬유 배향 및 계면 특성에 따른 복합체 가교 응력 및 파괴 에너지 이론 비교표 (Sections 3~4 & Figs. 8~11)

| 모델 구성 조건 | 섬유 배향 분포 ($p(\phi)$) | 스너빙 계수 ($f$) | 계면 거동 특성 | 피크 가교 응력 ($\sigma_0$) | 임계 균열 개구 ($\delta_c$) | 가교 파괴 에너지 ($G_b$) |
|---|---|---|---|---|---|---|
| **1D 정렬 (Aligned)** | 일방향 ($\phi = 0$) | $f = 0$ | 일정 마찰 ($\tau_0$) | $\frac{1}{2} V_f \tau_0 \frac{L_f}{d_f}$ | $L_f / 2$ | $\frac{1}{12} V_f \tau_0 \frac{L_f^2}{d_f}$ |
| **3D 무작위 (기본)** | 3차원 등방 ($\sin\phi$) | $f = 0$ | 일정 마찰 ($\tau_0$) | $\frac{1}{6} V_f \tau_0 \frac{L_f}{d_f}$ | $L_f / 2$ | $\frac{1}{24} V_f \tau_0 \frac{L_f^2}{d_f}$ |
| **3D + 스너빙 (제안)** | **3차원 등방 ($\sin\phi$)** | **$f = 0.5 \sim 1.0$** | **일정 마찰 ($\tau_0$)** | **$\frac{1}{6} g V_f \tau_0 \frac{L_f}{d_f}$ ($g = \frac{2}{4+f^2}(1+e^{\pi f/2})$)**| **$L_f / 2$** | **기본 3D 대비 2~3배 증대** |
| **슬립-경화 (제안)** | **3차원 등방 ($\sin\phi$)** | **$f = 0.7$** | **슬립 경화 ($\beta > 0$)** | **피크 응력 및 인성 극대화** | **$L_f / 2$** | **기본 3D 대비 4배 이상 증대** |

### 2. 가교 파괴 메커니즘 및 스너빙 인자 해석
- **스너빙 계수 $f$의 가교 인성화 기여**: 나일론, 폴리프로필렌(PP), PVA 등 유연한 고분자 섬유는 $f \approx 0.5\sim 1.0$을 나타내며, 경사 인발 시 스너빙 인자 $g = \frac{2}{4+f^2}(1+e^{\pi f/2})$에 의해 가교 저항 하중이 수평 인발 대비 2배 이상 증폭되어 복합체 인성을 획기적으로 향상시킴.
- **섬유 파단 vs. 인발 천이**: 섬유 길이가 임계 매입 길이 $L_c = \frac{d_f \sigma_{fu}}{2\tau_0}$를 초과하거나 스너빙 마찰이 과도하면 섬유가 조기 파단(Rupture)되어 가교 연성이 급감하므로, 섬유 강도와 계면 결합력의 정밀한 미시역학적 조율이 필수적임을 수학적으로 입증.

- **종합 결론**: 본 논문은 Victor C. Li 교수가 스너빙 효과와 슬립 경화 계면 역학을 도입하여 단섬유 복합체의 3차원 인장연화 및 가교 인성을 예측하는 닫힌 형태의 미시역학 모델을 세계 최초로 정식화한 현대 복합재료 파괴역학 및 ECC 설계 이론의 시발점이 된 불후의 최고 고전 원전 논문임.

## Related Notes

- [[strain-hardening-mechanism]] — ECC 변형경화 미시역학 이론 체계.
- [[li-1995-matrix-design-for-pseudo-strain-hardening]] — Victor Li: PSH 복합체 매트릭스 설계 원전.
- [[kanda-2006-saturated-psh-design-criteria-ecc]] — Kanda & Li: 포화 PSH 2대 기준 랜드마크.
- [[lee-2010-micromechanics-fiber-bridging-distribution-model]] — 이방연 교수: 실측 배향 결합 섬유가교 구성모델 원전.
