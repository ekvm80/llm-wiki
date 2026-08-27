---
title: "A J-integral method for calculating steady-state matrix cracking stresses in composites"
type: source_note
source: "sources/marshall-1988-a-j-integral-method-for-calculating.pdf"
citation: "Marshall, D. B., & Cox, B. N. (1988). A J-integral method for calculating steady-state matrix cracking stresses in composites. Mechanics of Materials, 7(2), 127-133."
date: 2026-08-24
tags: [j-integral, steady-state-cracking, fiber-bridging, complementary-energy, matrix-fracture-toughness, micromechanics, ack-theory, landmark-paper]
---

# 섬유 가교 복합체의 정상상태 균열 진전 응력($\sigma_{ss}$) 및 가교 상보 에너지($J_b'$) 산정을 위한 J-적분(J-Integral) 에너지 평형 해석해 정립

## Summary

단섬유 및 연속섬유로 보강된 취성 기지 복합체(세라믹/시멘트)에서 균열 선단이 하중 증가 없이 일정한 개구 변위를 유지하며 정상상태(Steady-State)로 확장되는 임계 기지 균열 응력($\sigma_{ss}$)을 도출하기 위해, 균열 선단과 원방 경계를 잇는 **J-적분(J-Integral) 폐곡선 에너지 보존 경로 해석법**을 세계 최초로 수립하고, **가교 인대(Ligament)의 가교 응력-개구 변위 곡선($\sigma_B-\delta$)과 기지 파괴인성($J_{tip} = K_m^2/E_m$) 간의 상관식 $J_{tip} = \sigma_{ss} \delta_0 - \int_0^{\delta_0} \sigma_B(\delta) d\delta$**를 엄밀 유도하여 현대 ECC의 의사 변형경화(PSH) 에너지 기준($J_b'/J_{tip} \ge 1.0$)의 수학적 토대를 완성한 **Rockwell International Science Center의 D.B. Marshall 박사와 B.N. Cox 박사**의 Mechanics of Materials 1988년 최고 불후의 랜드마크 원전 논문.

## Key Contributions

1. **정상상태 기지 균열(Steady-State Matrix Cracking) J-적분 에너지 지배방정식 최초 유도**:
   - 균열 궤적 상의 복잡한 응력 집중 해석 없이, 원방 응력 일과 가교 인대 변형 에너지의 차이를 J-적분으로 엄밀히 대수화하여 임계 응력 $\sigma_{ss}$ 산정식을 완성.
2. **가교 상보 에너지(Complementary Energy, $J_b'$) 개념 정립**:
   - $J_b' = \sigma_{ss} \delta_0 - \int_0^{\delta_0} \sigma_B(\delta) d\delta$가 기지 파괴인성 $J_{tip}$와 평형을 이룰 때 균열이 무제한 정상상태로 진전한다는 파괴역학적 법칙을 증명.
3. **잔류 응력(Residual Stress) 및 비선형 계면 가교 거동의 보편적 확장성 확보**:
   - 열팽창 계수 불일치나 수화 수축으로 인한 기지 내부 잔류 인장/압축 응력이 $\sigma_{ss}$에 미치는 영향을 단일 해석해에 완전 통합.
4. **ACK(Aveston-Cooper-Kelly) 및 Budiansky-Hutchinson-Evans 모델과의 수학적 일치성 증명**:
   - 마찰 계면($\tau = \text{const}$) 조건 하에서 기존의 복잡한 에너지 평형 적분 결과와 Marshall-Cox의 J-적분 해석해가 정확히 일치함을 증명.

## Methods

- **J-적분 폐곡선 경로 해석 (Section 2 & Fig. 2)**:
  - 균열 선단 주위의 폐곡선 $\Gamma = \Gamma_0 + \Gamma_B + \Gamma_\infty$에 대한 J-적분 보존 법칙:
    $\oint_\Gamma \left( W dy - T_i \frac{\partial u_i}{\partial x} ds \right) = 0$
  - 원방 경계($\Gamma_\infty$) 기여도: $J_\infty = \sigma_{ss} \delta_0$.
  - 균열면 가교부($\Gamma_B$) 기여도: $J_B = -\int_0^{\delta_0} \sigma_B(\delta) d\delta$.
  - 균열 선단($\Gamma_0$) 기여도: $J_{tip} = \frac{K_m^2 (1-\nu^2)}{E_m}$.
- **에너지 보존 지배방정식 도출**:
  $J_{tip} = \sigma_{ss} \delta_0 - \int_0^{\delta_0} \sigma_B(\delta) d\delta \equiv J_b'(\delta_0)$

## Results

### 1. Marshall-Cox J-적분 모델과 고전 복합체 균열 이론식 비교표 (Sections 2~4)

| 파괴역학 모델 (Model) | 개발자 및 연도 | 적용 균열 모드 | 기지 균열 임계 응력 지배방정식 ($\sigma_{ss}$ or $\sigma_{mc}$) | 가교 계면 거동 반영성 |
|---|---|---|---|---|
| **ACK Theory** | Aveston et al. (1971) | 1차원 연속섬유 | $\sigma_{mc} = \left[ \frac{12 \tau \gamma_m E_f V_f^2 E_c^2}{(1-V_f) E_m^2 r} \right]^{1/3}$ | 일정 마찰 ($\tau_0$) 한정 |
| **BHE Model** | Budiansky et al. (1986) | 3차원 연속섬유 | $\sigma_{ss} = 2 \left( \frac{V_f^2 E_f E_c^2 \tau K_m^2}{r E_m} \right)^{1/3}$ | 연속섬유 복잡 에너지 적분 |
| **Marshall-Cox (제안)** | **Marshall & Cox (1988)** | **단섬유/연속섬유 범용** | **$J_{tip} = \sigma_{ss} \delta_0 - \int_0^{\delta_0} \sigma_B(\delta) d\delta$** | **임의의 비선형 $\sigma_B(\delta)$ 전면 적용 가능** |

### 2. 가교 상보 에너지와 ECC 변형경화 포화 메커니즘의 연계
- **정상상태 균열 진전의 물리적 의미**: 균열 선단 개구 변위가 $\delta_0$에 도달하면 선단에서의 응력 확대 계수 $K_{tip}$가 기지 파괴인성 $K_{m}$으로 고정되어 하중을 추가로 높이지 않아도 균열이 평행하게 무한 진전.
- **다중 미세균열 조건으로의 발전**: 균열 가교 상보 에너지 $J_b'$가 기지 균열 선단 인성 $J_{tip}$보다 크면($J_b' \ge J_{tip}$), 균열이 급격히 파괴되지 않고 다른 결함 위치에서 새로운 미세 균열이 계속 발생하여 거대한 의사 변형경화(PSH) 연신율을 발현.

- **종합 결론**: 본 논문은 Marshall과 Cox가 J-적분의 폐곡선 경로 불변성을 활용하여 섬유 가교 복합체의 정상상태 균열 진전 응력과 가교 상보 에너지 평형을 가장 우아하고 단순한 대수식으로 완성한 현대 복합재료 파괴역학 및 ECC 미시역학 설계의 불후의 최고 고전 원전 논문임.

## Related Notes

- [[li-1991-micromechanical-model-tension-softening-bridging]] — Victor Li: 섬유 가교 인장연화 및 PSH 미시역학 모델 원전.
- [[li-1995-matrix-design-for-pseudo-strain-hardening]] — Victor Li: PSH 복합체 매트릭스 설계 지침 원전.
- [[lin-1997-crack-bridging-slip-hardening-interfaces]] — Lin & Li: 슬립경화 계면 균열 가교 해석해 원전.
- [[strain-hardening-mechanism]] — ECC 변형경화 미시역학 이론 체계.
