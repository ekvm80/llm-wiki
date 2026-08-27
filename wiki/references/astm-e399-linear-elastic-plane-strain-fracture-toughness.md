---
title: "ASTM E399-17 Standard Test Method for Linear-Elastic Plane-Strain Fracture Toughness (KIc) of Metallic Materials"
type: reference_book
source: "sources/e08-test-method-for-linear-elastic-plane-strain.pdf"
citation: "ASTM International. (2017). ASTM E399-17: Standard Test Method for Linear-Elastic Plane-Strain Fracture Toughness (KIc) of Metallic Materials. West Conshohocken, PA: ASTM International."
date: 2026-08-24
tags:
  - fracture-toughness
  - standard-test-method
  - linear-elastic-fracture-mechanics
  - k1c
---

## Summary
ASTM E399는 금속 및 균질 취성 재료의 선형 탄성 평면 변형 파괴인성($K_{Ic}$)을 측정하기 위한 대표적인 표준 시험 규격이다. 피로 예열균열(fatigue precrack)이 도입된 노치 시험편에 대해 준정적 인장 또는 휨 하중을 가하여 하중-변위 곡선으로부터 $P_Q$ 및 조건부 파괴인성($K_Q$)을 산정하고, 시험편의 두께, 균열 길이, 인대 폭이 소성역 크기 대비 충분한 평면 변형 상태($B, a \ge 2.5 (K_Q / \sigma_{ys})^2$)를 만족하는지 검증하여 유효 $K_{Ic}$를 결정한다. 시멘트계 복합재료 및 고성능 시멘트 복합체(ECC/HPFRCC)의 파괴역학적 매트릭스 파괴인성($K_m$) 측정 및 미시역학적 에너지 균형 설계($J_{tip} \le J_b'$)의 기초 표준 원리로 광범위하게 참조된다.

## Key Contributions
- **선형 탄성 평면 변형 파괴인성 규준 정립**: 균열 선단 소성역의 영향을 엄격히 제한하는 치수 유효성 조건($B \ge 2.5 (K_Q / \sigma_{ys})^2$)을 통해 순수 탄성 파괴 물성치 산정 절차를 확립함.
- **다양한 표준 시험편 형상 규정**: 컴팩트 인장(Compact Tension, C(T)), 단일 에지 노치 휨(Single-Edge Bend, SE(B)), 아크 형상(Arc-shaped, A(T)), 디스크 형상(Disk-shaped, DC(T)) 등 다양한 시험체 형상에 대한 응력확대계수($K$) 형상 계수 함수 제공.
- **5 % 할선법(secant method) 기반 $P_Q$ 결정**: 하중-변위 곡선의 초기 선형 기울기 대비 95 % 기울기 선과의 교점($P_5$)과 최대 하중($P_{max}$)의 비($P_{max}/P_Q \le 1.10$)를 통해 소규모 항복 조건 검증.

## Methods
- **시험편 종류**: SE(B) 3점 휨 시험편, C(T) 컴팩트 인장 시험편.
- **피로 예열균열(Fatigue Precracking)**: 가공 노치(machined notch) 선단에서 하중 진폭을 제어하여 날카로운 자연 균열 유도 ($a/W = 0.45 \sim 0.55$).
- **계측 시스템**: 균열 개구 변위(COD, Crack Opening Displacement) 게이지 장착, 변위 제어 준정적 재하.
- **유효성 판정식**:
  $$K_Q = \frac{P_Q S}{B W^{3/2}} f(a/W)$$
  $$B, a, (W-a) \ge 2.5 \left( \frac{K_Q}{\sigma_{ys}} \right)^2$$

## Results
- 평면 변형 상태가 엄격히 충족될 때 재료 고유의 최소 저항 파괴인성 $K_{Ic}$가 확보됨.
- 소성 변형이나 섬유 가교 영역이 큰 섬유보강 시멘트 복합체에서는 직접적인 $K_{Ic}$ 단일값 적용에 한계가 있어, $J$-적분 또는 R-커브 기법으로 확장 적용하는 이론적 토대를 제공함.

## Related Notes
- [[pseudo-strain-hardening-criteria]] - 매트릭스 파괴인성과 정상상태 균열 개시 에너지 조건
- [[strain-hardening-mechanism]] - 매트릭스 파괴인성과 섬유 가교 파괴에너지 사이의 강도/에너지 조건 분석
