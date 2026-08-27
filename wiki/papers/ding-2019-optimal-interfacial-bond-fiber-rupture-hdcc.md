---
title: "Theoretical analysis on optimal fiber-matrix interfacial bonding and corresponding fiber rupture effect for high ductility cementitious composites"
type: source_note
source: "sources/ding-2019-theoretical-analysis-on-optimal-fiber-matrix.pdf"
citation: "Ding, C., Guo, L. P., & Chen, B. (2019). Theoretical analysis on optimal fiber-matrix interfacial bonding and corresponding fiber rupture effect for high ductility cementitious composites. Construction and Building Materials, 228, 116743."
date: 2026-08-23
tags: [fiber-bridging-theory, interfacial-bond, fiber-rupture, micromechanics-design, complementary-energy, pva-fiber, pe-fiber, liping-guo, theory-foundation]
---

# 고연성 복합체(HDCC)의 섬유-매트릭스 최적 계면 부착 강도 도출, 섬유 파단 효과 및 가교 보상에너지 극대화 이론 해석

## Summary

변형경화 시멘트 복합체(HDCC/ECC)에서 섬유-매트릭스 계면 전단 결합력($\tau_0$)이 너무 약하면 가교응력($\sigma_0$) 부족으로 정상상태 균열 전파가 불가하고, 반대로 너무 강하면 섬유가 조기 파단(Fiber Rupture)되어 보상 에너지($J'_b$)가 급감하는 딜레마를 수학적으로 해결하기 위해, 섬유 인발(Debonding & Pull-out)과 경사각 스너빙 효과($f$), 쿡-고든 풀리 효과($f'$), 그리고 매립 깊이 및 배향각에 따른 섬유 파단 판정 조건을 통합한 완전 해석적 가교 구성 법칙($\sigma-\delta$)을 정립하고, 4대 대표 섬유(PVA, PET, PE, 강섬유 Steel Fiber)에 대해 보상 에너지($J'_b$)를 극대화하는 **최적 계면 전단강도($\tau_0^{opt}$)** 및 허용 매트릭스 균열선단 인성($J_{tip}, K_m$)의 범위를 엄밀히 유도한 동남대학(Southeast Univ) Li Ping Guo 교수 연구팀의 선도적 복합재료 미시역학 원전 논문. 연구 결과 종래의 통념(섬유 파단 없는 순수 인발이 가장 유리하다는 가설)과 달리, **적절한 수준의 섬유 파단(10~25 % 내외의 통제된 Rupture)이 동반될 때 계면 마찰과 인발 에너지가 결합되어 보상 에너지($J'_b$)와 가교응력($\sigma_0$)이 이론적 최댓값에 도달함**을 최초로 수학적으로 증명하였다. 또한 PVA($\tau_0^{opt} = 1.6\ \text{MPa}$), PET($1.4\ \text{MPa}$), PE($2.2\ \text{MPa}$), Steel($12.0\ \text{MPa}$)의 최적 계면 결합 범위를 도출하여 섬유 오일 코팅 및 매트릭스 화학 개질의 엄밀한 가이드라인을 확립하였다.

## Key Contributions

1. **적정 섬유 파단(Moderate Fiber Rupture) 시 가교 보상에너지($J'_b$) 극대화 메커니즘 최초 증명**:
   - 섬유가 전혀 끊어지지 않는 지나치게 약한 계면($\tau_0 < 1.0\ \text{MPa}$)보다, 최적 전단강도($\tau_0^{opt}$)에서 경사 매립된 일부 섬유가 파단되면서도 높은 마찰 인발 응력을 유지할 때 보상 에너지 $J'_b$가 피크치에 도달함을 수치적으로 입증.
2. **4대 주요 보강 섬유별 최적 계면 부착 강도($\tau_0^{opt}$) 정량 도출**:
   - **PVA 섬유**: $\tau_0^{opt} = 1.6\ \text{MPa} \rightarrow J'_b = 87.1\ \text{J/m}^2$, $\sigma_0 = 4.8\ \text{MPa}$ (요구 $J_{tip} \le 29.0\ \text{J/m}^2$).
   - **PET 섬유**: $\tau_0^{opt} = 1.4\ \text{MPa} \rightarrow J'_b = 58.2\ \text{J/m}^2$, $\sigma_0 = 3.6\ \text{MPa}$ (요구 $J_{tip} \le 19.4\ \text{J/m}^2$).
   - **PE 섬유**: $\tau_0^{opt} = 2.2\ \text{MPa} \rightarrow J'_b = 245.0\ \text{J/m}^2$, $\sigma_0 = 14.5\ \text{MPa}$ (요구 $J_{tip} \le 81.6\ \text{J/m}^2$).
   - **강섬유 (Steel)**: $\tau_0^{opt} = 12.0\ \text{MPa} \rightarrow J'_b = 480.0\ \text{J/m}^2$, $\sigma_0 = 18.2\ \text{MPa}$.
3. **PSH 기준 만족을 위한 매트릭스 맞춤 설계 한계선($K_m, \sigma_{cr}$) 수립**:
   - 각 섬유의 가교 포텐셜에 맞추어 변형경화 지수($\text{PSH}_E = J'_b/J_{tip} \ge 3.0$, $\text{PSH}_S = \sigma_0/\sigma_{cr} \ge 1.5$)를 만족하기 위한 최대 허용 매트릭스 파괴인성($K_m$)을 명확한 수식으로 제시.

## Methods

- **해석 대상 4대 섬유 파라미터 (Table 1)**:
  - **PVA 섬유**: $L_f = 12\ \text{mm}, d_f = 39\ \mu\text{m}, \sigma_{fu} = 1260\ \text{MPa}, E_f = 30\ \text{GPa}$, 스너빙 계수 $f = 0.20, f' = 0.33$.
  - **PET 섬유**: $L_f = 12\ \text{mm}, d_f = 38\ \mu\text{m}, \sigma_{fu} = 1160\ \text{MPa}, E_f = 11.5\ \text{GPa}, f = 0.39, f' = 0.20$.
  - **PE 섬유**: $L_f = 12\ \text{mm}, d_f = 28\ \mu\text{m}, \sigma_{fu} = 3000\ \text{MPa}, E_f = 100\ \text{GPa}, f = 0.49, f' = 0.10$.
  - **Steel 섬유**: $L_f = 12\ \text{mm}, d_f = 160\ \mu\text{m}, \sigma_{fu} = 2500\ \text{MPa}, E_f = 210\ \text{GPa}, f = 0.49, f' = 0.10$.
  - 체적 혼입률: $V_f = 2.0\ \text{vol.\%}$.
- **가교 응력-균열 개구($\sigma-\delta$) 통합 지배 방정식 (Eq. 8)**:
  - 섬유 파단 한계 하중: $P_{rup}(\theta) = \frac{\pi}{4} d_f^2 \sigma_{fu} \cdot e^{-f'\theta}$.
  - 임계 매립 길이 $l_d$: $P_{max}(l_d, \theta) = P_{rup}(\theta) \rightarrow l_d(\theta) = \frac{d_f \sigma_{fu} e^{-(f+f')\theta}}{4\tau_0}$.
  - 3차원 공간 적분:
    $$\sigma_c(\delta) = \frac{V_f}{L_f} \left[ \int_0^{\theta_c} \int_0^{l_d} P_{pull}(\delta) \sin 2\theta dL_e d\theta + \int_0^{\theta_c} \int_{l_d}^{L_f/2} P_{deb}(\delta) \sin 2\theta dL_e d\theta + \cdots \right]$$
  - 보상 에너지 계산: $J'_b = \sigma_0 \delta_0 - \int_0^{\delta_0} \sigma(\delta) d\delta$.

## Results

### 1. 섬유 종류별 최적 계면 파라미터 및 PSH 설계 허용 한계 비교

| 섬유 종류 | 인장강도 ($\sigma_{fu}$, MPa) | 최적 계면전단강도 ($\tau_0^{opt}$, MPa) | 피크 가교응력 ($\sigma_0$, MPa) | 최대 보상에너지 ($J'_b$, $\text{J/m}^2$) | 최적 상태 섬유 파단율 (%) | 허용 최대 균열선단인성 ($J_{tip}^{max}$, $\text{J/m}^2$) | 허용 최대 매트릭스 파괴인성 ($K_m^{max}$, $\text{MPa}\cdot\sqrt{\text{m}}$) |
|---|---|---|---|---|---|---|---|
| **PVA 섬유** | 1260 MPa | **1.6 MPa** | **4.8 MPa** | **87.1** | **18 %** | **29.0** | **0.76** |
| **PET 섬유** | 1160 MPa | **1.4 MPa** | **3.6 MPa** | **58.2** | **15 %** | **19.4** | **0.62** |
| **PE 섬유** | **3000 MPa**| **2.2 MPa** | **14.5 MPa** | **245.0** | **12 %** | **81.6** | **1.28 (초고강도 수용 가능)** |
| **강섬유** | 2500 MPa | **12.0 MPa** | **18.2 MPa** | **480.0** | **22 %** | **160.0** | **1.78** |

### 2. 미시역학 설계 및 섬유 표면 개질 가이드라인
- **오일 코팅 최적화**: 미처리 PVA 섬유는 친수성 수소결합으로 인해 $\tau_0 > 3.5\ \text{MPa}$에 달해 80 % 이상 조기 파단되므로, 오일 코팅 1.2 wt.% 처리를 통해 $\tau_0$를 **1.6 MPa 수준으로 정밀 제어**해야만 $J'_b$가 극대화됨.
- **PE 섬유의 초고인성 우위**: PE 섬유는 높은 인장강도(3000 MPa)로 인해 파단 임계 매립 길이가 길어 $\tau_0 = 2.2\ \text{MPa}$에서도 $J'_b$가 $245\ \text{J/m}^2$에 달하므로, 100 MPa 이상의 초고강도 매트릭스($K_m \approx 1.0$)에서도 안정적인 PSH 변형경화를 유지할 수 있음.

- **종합 결론**: 본 이론 해석은 섬유 파단 현상을 결함이 아닌 가교 에너지 극대화의 적극적 설계 인자로 재정립하고, 4대 섬유별 최적 계면 전단강도와 매트릭스 적합성 조건을 엄밀한 닫힌 형태 수식으로 완성한 현대 복합재료 미시역학의 대표적 이론 원전임.

## Related Notes

- [[fiber-bridging-constitutive-law]] — 섬유 가교 $\sigma-\delta$ 구성 법칙 및 단일 섬유 인발 해석.
- [[pseudo-strain-hardening-criteria]] — PSH 에너지($J'_b/J_{tip}$) 및 강도 기준.
- [[high-strength-strain-hardening-composites]] — 고강도 복합체(UHDCC)에서의 PE 섬유 가교 설계.
- [[strain-hardening-mechanism]] — 변형경화 복합체의 미시역학적 설계 원리.
