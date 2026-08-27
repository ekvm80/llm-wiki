---
title: "Textile reinforced concrete multiscale mechanical modelling: Application to TRC sandwich panels"
type: source_note
source: "sources/djamai-2017-textile-reinforced-concrete-multiscale-mechanical.pdf"
citation: "Djamai, Z. I., Bahrar, M., Salvatore, F., Si Larbi, A., & El Mankibi, M. (2017). Textile reinforced concrete multiscale mechanical modelling: Application to TRC sandwich panels. Finite Elements in Analysis and Design, 135, 22-35."
date: 2026-08-23
tags: [textile-reinforced-concrete, trc, multiscale-modelling, cohesive-friction-law, bond-slip, sandwich-panels, finite-element-method, theory-foundation]
---

# 섬유망 보강 콘크리트(TRC)의 점착-마찰 다중스케일 역학 모델링 및 샌드위치 패널 휨 파괴 해석

## Summary

탄소 및 내알칼리 유리 섬유 직조망(Textile Grid)을 미세 시멘트 매트릭스에 다층 보강한 섬유망 보강 콘크리트(TRC: Textile Reinforced Concrete)와 이를 외피로 적용한 초경량 단열 샌드위치 패널의 복합 파괴 메커니즘(시멘트 다중균열, 얀-매트릭스 계면 점착 박리, 쿨롱 마찰 인발, 얀 파단)을 정밀 예측하기 위해, 미시 스케일(단일 얀 인발 Single Yarn Pull-out) $\rightarrow$ 메조 스케일(TRC 쿠폰 1축 인장) $\rightarrow$ 거시 스케일(TRC-단열재 샌드위치 패널 4점 휨)을 유기적으로 연계하는 3단계 다중스케일(Multiscale) 유한요소(FE) 수치해석 기법을 정립하고 실험적으로 완벽 검증한 프랑스 리옹 대학(Univ de Lyon / ENISE) Amir Si Larbi 교수 연구팀의 선도적 전산역학 원전 논문. 본 연구는 계면 점착 손상(Cohesive Damage)과 매트릭스 건조수축 압력 기반 쿨롱 마찰(Coulomb Friction, $\tau_f = 1.3\ \text{MPa}$)을 엄밀히 분리한 3단계 점착-마찰 부착-슬립 구성 모델(Cohesive-Friction Bond-Slip Law)을 개발하고, 인장 파괴 하중-균열개구변위(CMOD) 곡선으로부터 계면 파라미터를 역산정(Inverse Analysis)하는 혁신적 기법을 도입하여, TRC 구조 부재 및 샌드위치 단열 패널의 비선형 휨 하중-처짐 응답과 다중 전단 균열 패턴을 오차 5 % 이내로 완벽히 재현하였다.

## Key Contributions

1. **점착(Cohesion)과 쿨롱 마찰(Friction)을 분리한 3단계 계면 부착-슬립 법칙 정립**:
   - **Phase I (탄성 접촉)**: 초기 계면 전단 강성 $K_0$에 의한 선형 응력 전달 ($\tau = K_0 \delta$).
   - **Phase II (점착 손상)**: 점착 강도 $\tau_{max}$ 도달 후 손상 변수 $D$에 따른 연화 거동 ($\tau = (1-D)K_0 \delta$).
   - **Phase III (순수 마찰 슬라이딩)**: 점착 파괴 완료($D=1$) 후 콘크리트 수축 압력($P = E \varepsilon_{shrink}$)과 마찰계수($\mu$)에 의해 일정한 잔류 전단 마찰력 발현 ($\tau_f = \mu P = 1.3\ \text{MPa}$).
2. **인장 파괴 거동 기반 계면 파라미터 역해석(Inverse Approach) 방법론 확립**:
   - TRC 1축 인장 시험의 인발 파괴 구간 하중-균열개구 변위 곡선으로부터 계면 점착 파괴 에너지($G_{IIc} = 0.45\ \text{N/mm}$)와 최대 부착강도($\tau_{max} = 3.2\ \text{MPa}$)를 비파괴적으로 정밀 역추정.
3. **TRC 샌드위치 단열 패널의 구조 거동 전산 해석 실증**:
   - 발포 폴리스티렌(EPS) 코어와 상하부 10 mm 두께의 탄소섬유 TRC 면재로 구성된 샌드위치 패널의 4점 휨 실험에 적용하여, 면재의 다중 인장 균열 발생과 코어 전단 변형의 연계 파괴 과정을 완벽히 예측.

## Methods

- **재료 물성 및 TRC 구성 사양 (Table 1 & 2)**:
  - 매트릭스: 자기충전성 고유동 미세 모르타르 (CEM I 52.5, W/B = 0.35, 마이크로 실리카 샌드 $d_{max} = 1.0\ \text{mm}$, 28일 압축강도 55 MPa, 탄성계수 28 GPa, 인장강도 4.2 MPa).
  - 보강 섬유망: 2방향 직교 탄소섬유 그리드 (Carbon Textile Grid, 격자 크기 $10\ \text{mm} \times 10\ \text{mm}$, 얀 단면적 $0.45\ \text{mm}^2$, 인장강도 1800 MPa, 탄성계수 230 GPa).
  - 코어재: 발포 폴리스티렌(EPS) 단열재 (두께 80 mm, 밀도 $25\ \text{kg/m}^3$, 탄성계수 5.2 MPa, 전단탄성계수 2.1 MPa).
- **다중스케일 유한요소(FE) 모델링 체계 (ABAQUS Implicit)**:
  - 미시/메조 모델: 시멘트 매트릭스(3D 솔리드 C3D8R, Concrete Damaged Plasticity 모델) + 섬유 얀(트러스 T3D2 또는 솔리드) + 계면(Cohesive Surface Contact with Coulomb Friction, Eq. 1~2).
  - 수축 압력 모사: 매트릭스에 등가 수축 변형률($\varepsilon_{shrink}$)을 인가하여 얀 표면에 구속 압력($P$)을 유도.
- **실험 검증 프로그램**:
  - 단일 얀 양단 인발 시험 (Double-sided Yarn Pull-out Test).
  - TRC 쿠폰 1축 인장 시험 ($500\ \text{mm} \times 60\ \text{mm} \times 10\ \text{mm}$, 변위제어 $0.5\ \text{mm/min}$, DIC CMOD 계측).
  - TRC 샌드위치 패널 4점 휨 시험 ($1200\ \text{mm} \times 300\ \text{mm} \times 100\ \text{mm}$, 순지간 1000 mm).

## Results

### 1. 단일 얀 및 TRC 인장 역해석 계면 물성 도출 결과

| 계면 모델 파라미터 | 기호 및 단위 | 보정 및 역해석 값 | 물리적 의미 및 영향 |
|---|---|---|---|
| **초기 전단 결합 강성** | $K_0$ ($\text{MPa/mm}$) | **125.0 ± 5.0** | 화학적 부착 및 초기 탄성 전단 저항 |
| **최대 점착 전단강도** | $\tau_{max}$ (MPa) | **3.20 ± 0.15** | 계면 미세 박리 시작 임계 응력 |
| **모드 II 점착 파괴에너지**| $G_{IIc}$ (N/mm) | **0.45 ± 0.03** | 계면 점착 결합 완전 파괴 소산 에너지 |
| **수축 유도 구속압력** | $P$ (MPa) | **4.33 ± 0.20** | 시멘트 자기·건조수축에 의한 얀 압착 응력 |
| **쿨롱 마찰계수** | $\mu$ (-) | **0.30 ± 0.02** | 박리 후 얀 슬라이딩 마찰계수 |
| **최종 잔류 마찰 전단응력**| $\tau_f$ (MPa) | **1.30 ± 0.08** | $\tau_f = \mu P$, 완전 박리 후 하중 유지력 |

### 2. 샌드위치 패널 4점 휨 거동 시뮬레이션 및 실험 비교
- **하중-처짐 곡선 일치도**: 휨 초기 탄성 구간, 면재 다중 미세균열 전파 구간($P = 4.5\sim 7.2\ \text{kN}$), EPS 코어 전단 항복 및 최종 얀 인발 파괴 하중($P_{max} = 9.8\ \text{kN}$, 처짐 22.5 mm) 전 과정을 **오차 4.2 % 이내로 완벽 예측**.
- **균열 패턴 모사**: 하부 인장 TRC 면재에서 10 mm 격자 간격과 일치하는 규칙적인 다중 미세균열 발생과 상부 압축 면재의 압괴 지연을 수치적으로 완벽히 재현.

- **종합 결론**: 본 다중스케일 점착-마찰 해석 모델은 TRC 복합재의 얀 인발 미시 메커니즘부터 대형 샌드위치 단열 패널의 구조 휨 거동까지 연속적으로 통합 설계할 수 있는 최고 수준의 전산 구조 해석 도구임을 확립함.

## Related Notes

- [[fiber-bridging-constitutive-law]] — 섬유-매트릭스 계면 부착-슬립($\tau-\delta$) 구성 법칙.
- [[strain-hardening-mechanism]] — 섬유 복합체의 다중균열 및 변형경화 해석.
- [[ding-2019-optimal-interfacial-bond-fiber-rupture-hdcc]] — 최적 계면 부착 강도 및 파단 메커니즘 이론.
- [[structural-repair-and-retrofitting]] — TRC 기반 얇은 단면 수복 및 보강 구조 해석.
