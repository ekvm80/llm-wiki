---
title: "Practical Design Criteria for Saturated Pseudo Strain Hardening Behavior in ECC"
type: source_note
source: "sources/Kanda-2006-Practical design criteria for satur.pdf"
citation: "Kanda, T. & Li, V. C. (2006). Practical Design Criteria for Saturated Pseudo Strain Hardening Behavior in ECC. Journal of Advanced Concrete Technology, 4(1), 59-72."
date: 2026-08-24
tags: [ecc, pseudo-strain-hardening, psh-saturation, performance-index, design-criteria, complementary-energy, first-cracking-strength, crack-spacing, micromechanics, victor-li, tetsushi-kanda, jact, landmark-paper]
---

# 섬유 파단형 ECC의 포화 의사변형경화(Saturated PSH) 달성을 위한 실용 설계 기준: 에너지 성능 지수($J_b'/J_{tip} > 2.7$) 및 응력 성능 지수($\sigma_{peak}/\sigma_{fc} > 1.3$) 동시 충족 조건

## Summary

변형경화 시멘트 복합체(ECC)가 단순히 다중 균열을 시작하는 것을 넘어, **균열 간격이 이론적 포화 간격($x_d$)에 수렴하는 완전 포화 의사변형경화(Saturated PSH: Pseudo Strain Hardening) 거동**을 안정적으로 달성하기 위한 정량적 재료 설계 기준을 수립하기 위해, 섬유 파단(Fiber Rupture) 모드의 PVA 및 PE 섬유 ECC 5종($V_f = 1.5\sim 2.0\%$, $d_f = 14\sim 40\ \mu\text{m}$, W/C $= 27\sim 42\%$)을 대상으로 **미시역학 이론에 기반한 두 가지 성능 지수**(Performance Indices)—(1) **에너지 성능 지수 $J_b'/J_{tip}$**: 섬유 가교 상보에너지 대 매트릭스 균열 선단 인성비, (2) **응력 성능 지수 $\sigma_{peak}/(\sigma_{fc})_i$**: 최대 가교응력 대 초기 균열강도비—를 정식화하고, 일축 인장 시험의 PSH 포화 지수($x_d^{test}/x_d$)와의 상관관계를 분석하여 **$J_b'/J_{tip} > 2.7$ 및 $\sigma_{peak}/(\sigma_{fc})_i > 1.3$의 동시 충족을 포화 PSH 달성의 실용 설계 기준**으로 확립한 **가지마 건설(Kajima Corp.) 신다 테츠시(Tetsushi Kanda) 수석연구원 및 미시건 대학교 Victor C. Li 석좌교수**의 Journal of Advanced Concrete Technology (JACT) 2006년 불후의 랜드마크 설계 이론 원전 논문. 연구 결과 PE 섬유 복합체($V_f = 2.0\%$, $d_f = 38\ \mu\text{m}$)는 $J_b'/J_{tip} = 17.9$, $\sigma_{peak}/(\sigma_{fc})_i = 4.0$으로 완전 포화 거동(인장변형률 $> 4\%$)을 보인 반면, PVA 14 $\mu\text{m}$ 복합체($W/C = 27\%$)는 $J_b'/J_{tip} = 2.1$, $\sigma_{peak}/(\sigma_{fc})_i = 1.2$로 기준 미달하여 불포화(Unsaturated) PSH에 머무름을 정확히 예측함을 검증하였다.

## Key Contributions

1. **포화 PSH 거동의 2대 성능 지수(Performance Indices) 정량 기준 최초 확립**:
   - **에너지 기준**: $J_b'/J_{tip} > 2.7$ (상보에너지가 균열 선단 인성의 2.7배 이상).
   - **응력 기준**: $\sigma_{peak}/(\sigma_{fc})_i > 1.3$ (최대 가교응력이 초기 균열강도의 1.3배 이상).
   - 두 조건의 **동시 충족**이 포화 PSH의 필요충분조건임을 실험적으로 실증.
2. **초기 균열강도($\sigma_{fc}$)의 결함 크기($c_m$) 의존성 이론 정식화**:
   - 매트릭스 내 기존 결함(Flaw)의 페니형 균열 크기 $c_m$에 따른 초기 균열강도를 Griffith-Irwin 파괴역학과 섬유 가교 응력강도계수($K_B$) 차폐 효과를 결합한 폐합 해석해로 유도, 감소 계수 0.8 적용.
3. **PSH 포화 지수($x_d^{test}/x_d$)와 극한 인장변형률 간의 정량적 상관관계 구축**:
   - 포화 지수($x_d^{test}/x_d \ge 1.5$) 달성 시 극한 인장변형률 $> 4\%$를 안정적으로 보장, 미달 시 변형률이 급격히 감소.
4. **섬유 파단형 가교 법칙(Bridging Law)의 수치해석 기반 상보에너지($J_b'$) 정밀 산출 방법론 정립**:
   - Li and Leung (1992) 페니형 균열 프로필 가정 하 가교 응력강도계수 적분 알고리즘을 5종 배합에 적용하여 이론값과 실험값의 대응을 검증.

## Methods

- **ECC 배합 5종 (Table 1~3)**:
  - **PVA-14 (W/C 42 %)**: 14 $\mu\text{m}$ PVA 섬유, $V_f = 1.5\%$, $L_f = 12\ \text{mm}$, $\sigma_{fu} = 1690\ \text{MPa}$, $E_f = 42.8\ \text{GPa}$, W/C = 0.42.
  - **PVA-14 (W/C 27 %)**: 14 $\mu\text{m}$ PVA 섬유, $V_f = 1.5\%$, $L_f = 12\ \text{mm}$, W/C = 0.27 (고강도 매트릭스).
  - **PVA-40 (W/C 42 %)**: 40 $\mu\text{m}$ PVA 섬유, $V_f = 1.5\%$, $L_f = 12\ \text{mm}$, $\sigma_{fu} = 1092\ \text{MPa}$, $E_f = 25\ \text{GPa}$, W/C = 0.42.
  - **PVA-40 (W/C 27 %)**: 40 $\mu\text{m}$ PVA 섬유, $V_f = 1.5\%$, W/C = 0.27.
  - **PE-38**: 38 $\mu\text{m}$ 고강도 PE 섬유, $V_f = 2.0\%$, $L_f = 12\ \text{mm}$, $\sigma_{fu} = 2610\ \text{MPa}$, $E_f = 120\ \text{GPa}$.
- **미시역학 파라미터 (Table 3)**:
  - 화학적 부착($G_d$), 마찰 계면전단응력($\tau_0$), 경사마찰계수($f$), 스너빙계수($\xi$) 등 단섬유 인발 실험 및 문헌값 기반 산출.
- **시험 체계 (Section 4 & Fig. 1~4)**:
  - 일축 인장 시험: 아령형 시험체(단면 $30\ \text{mm} \times 12\ \text{mm}$, 계측구간 $100\ \text{mm}$), 변위속도 $0.2\ \text{mm/min}$.
  - 매트릭스 파괴 인성($K_m$): 3점 휨 노치 시험(SENB), RILEM 권고.
  - 단섬유 인발(Single Fiber Pull-out): $\tau_0, G_d$ 계면 파라미터 결정.

## Results

### 1. ECC 5종의 성능 지수 및 PSH 포화도 비교표 (Table 4~5 & Fig. 10~14)

| ECC 배합 유형 | 섬유 종류/직경 ($\mu$m) | W/C (%) | $J_b'/J_{tip}$ | $\sigma_{peak}/(\sigma_{fc})_i$ | PSH 포화 지수 ($x_d^{test}/x_d$) | 극한 인장변형률 ($\varepsilon_u$, %) | PSH 포화 판정 |
|---|---|---|---|---|---|---|---|
| **PE-38** | **PE / 38 $\mu$m** | **45 %** | **17.9 (최고)** | **4.0 (최고)** | **$\ge 1.5$ (포화)** | **$> 4.0\%$ (포화)** | **완전 포화 PSH** |
| **PVA-14 (W/C 42 %)** | PVA / 14 $\mu$m | 42 % | **5.0** | **1.8** | $\ge 1.5$ | $2.5\sim 3.5\%$ | **포화** |
| **PVA-40 (W/C 42 %)** | PVA / 40 $\mu$m | 42 % | **4.5** | **1.6** | $1.2\sim 1.5$ | $1.5\sim 2.5\%$ | **준포화** |
| **PVA-40 (W/C 27 %)** | PVA / 40 $\mu$m | 27 % | **3.2** | **1.4** | $1.0\sim 1.2$ | $0.8\sim 1.5\%$ | **준포화 경계** |
| **PVA-14 (W/C 27 %)** | PVA / 14 $\mu$m | 27 % | **2.1 (기준 미달)** | **1.2 (기준 미달)** | **$< 1.0$ (불포화)** | **$< 0.5\%$** | **불포화 PSH** |

### 2. 포화 PSH 설계 기준의 역학적 해석
- **에너지 조건($J_b'/J_{tip} > 2.7$)의 물리적 의미**: 정상 상태 균열(Steady-State Cracking)이 개시되기 위한 필요조건으로, 이 비율이 충분히 클수록 각 균열에서 소산되는 섬유 가교 에너지가 매트릭스 파괴 에너지를 크게 초과하여 안정적인 다중 균열 전파를 보장.
- **응력 조건($\sigma_{peak}/(\sigma_{fc})_i > 1.3$)의 물리적 의미**: 가교응력의 피크값이 매트릭스 내 가장 약한 결함(최대 크기 $c_m$)에서 유도되는 초기 균열강도보다 충분히 높아야 순차적 다중 균열이 포화될 때까지 전파, 0.8 감소 계수는 실험적 산포를 반영.
- **W/C 비율의 영향**: 높은 W/C는 매트릭스 강도를 저하시켜 $\sigma_{fc}$를 감소시킴으로써 응력 성능 지수를 높이지만, 동시에 계면 부착($G_d, \tau_0$)의 변화도 동반하므로 미시역학적 균형점을 찾아야 함.

- **종합 결론**: 본 논문은 미시건 대학교 Victor C. Li 교수와 가지마 건설 신다 테츠시 수석연구원이 ECC의 포화 의사변형경화(Saturated PSH) 거동 달성을 위한 $J_b'/J_{tip} > 2.7$ 및 $\sigma_{peak}/(\sigma_{fc})_i > 1.3$ 동시 충족의 실용 설계 기준을 확립하고, 5종 배합의 실험-이론 대비를 통해 검증한 ECC 재료 설계 이론의 불후의 최고 랜드마크 원전 논문임.

## Related Notes

- [[strain-hardening-mechanism]] — ECC 변형경화 미시역학 및 에너지/강도 기준 핵심 이론.
- [[fiber-bridging-constitutive-law]] — 섬유 가교 응력-균열개구 구성 법칙 및 상보에너지($J_b'$) 산출.
- [[kim-2009-modified-fiber-bridging-curve-ecc-tensile]] — 이방연 교수: 수정 가교곡선 및 매트릭스 역학 설계.
- [[high-strength-strain-hardening-composites]] — 고강도 변형경화 복합체(UHPC/UHP-ECC) 설계 원리.

