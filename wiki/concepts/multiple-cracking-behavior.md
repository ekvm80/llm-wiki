---
title: "Multiple Cracking Behavior (다중균열 거동)"
type: concept
source: "[[aveston-1973-theory-of-multiple-fracture]], [[wu-1992-snubbing-bundling-crack-spacing]], [[li-wu-1992-psh-conditions]]"
date: 2026-08-23
tags: [concept, multiple-cracking, crack-spacing, crack-width, ack-theory, ecc, shcc]
---

# Multiple Cracking Behavior (다중균열 거동)

## 정의

인장 하중을 받는 섬유보강 시멘트 복합재(ECC/SHCC)에서 변형경화 구간 동안 단일 균열로 국지화되지 않고 부재 전체에 걸쳐 촘촘하고 일정한 간격의 미세 균열들이 연속적으로 발생하는 현상.

## 메커니즘 및 이론 (ACK 모델과 확장)

1. **Aveston-Kelly-Blackwell (ACK) 이론**:
   - 연속 섬유 복합재의 다중 파괴 이론(1971, 1973)을 기초로 함.
   - 최초 균열 발생 후 매트릭스에서 섬유로 하중이 전달되고, 계면 전단응력($\tau_0$)을 통해 균열면으로부터 일정 거리(응력 전달길이, transfer length $x_t$) 떨어진 곳에서 매트릭스 인장응력이 다시 회복됨.
   - 회복된 응력이 인근의 결함점(flaw) 강도를 초과하면 새로운 균열이 형성됨.

2. **균열 간격 (Crack Spacing)**:
   - 최소 균열 간격 $x_{min} = x_t = \frac{V_m \sigma_{mu} d_f}{4 V_f \tau_0}$
   - 최종 포화 균열 간격 $s$: $x_t \le s \le 2x_t$
   - 무작위 불연속 섬유 복합재에서는 섬유 배향각 및 결함 분포의 무작위성으로 인해 포화 균열 간격이 확률적으로 분포함.

3. **균열폭 제어 (Crack Width Control)**:
   - 다중균열이 진행되는 동안 개별 균열의 폭은 준정상상태 균열 개구 변위($\delta_{ss} \le 100\ \mu\text{m}$) 이하로 엄격히 제한됨.
   - 외력에 의한 총 변형률은 단일 균열의 과도한 벌어짐이 아니라 균열 개수(density)의 증가를 통해 수용됨:
     $$\epsilon \approx N_{cracks} \times \frac{\delta}{L}$$

## 물리적 특성 및 포화 상태

- **포화 다중균열 (Saturated Multiple Cracking)**: 균열 발생 강도 조건을 만족하는 모든 결함에서 균열이 개시되어 더 이상 새로운 균열이 생기지 않는 상태. 이후 최대 인장 응력 도달 시 단일 균열 국지화(localization) 및 파괴로 진입.
- **불포화 다중균열 (Unsaturated Multiple Cracking)**: 섬유 브리징 응력이 불충분하여 몇 개의 균열만 발생한 후 조기 파괴되는 상태.

## 관련 파라미터

- $V_f, V_m$: 섬유 및 매트릭스 체적분율
- $d_f, L_f$: 섬유 직경 및 길이 (µm, mm)
- $\tau_0$: 계면 마찰 전단강도 (MPa)
- $s$: 평균 균열 간격 (mm)
- $w$: 평균 균열폭 (µm)

## 관련 노트

- [[aveston-1973-theory-of-multiple-fracture]] — 다중균열 이론의 고전 원전 (Aveston & Kelly 1973).
- [[wu-1992-snubbing-bundling-crack-spacing]] — 불연속 단섬유 복합재의 스너빙 및 균열 간격 모델.
- [[strain-hardening-mechanism]] — 다중균열을 유발하는 변형경화 역학적 메커니즘.
- [[pseudo-strain-hardening-criteria]] — 포화 다중균열 달성을 위한 PSH 설계 조건.
- [[tosun-2014-flaw-size-fiber-distribution-pva-ecc]] — 결함 크기 분포와 섬유 분산이 다중균열 포화도에 미치는 영향.

- [[aveston-1973-theory-of-multiple-fracture-of]] — ACK 다중파괴 이론 및 균열 간격 해석 원전.

- [[huang-1995-steel-fiber-concrete-large-aggregate]] — 대련이공대 자오궈판 원사: 40 mm 대립경 골재 SFRC 입도 최적화 및 휨인성 원전.

- [[huang-2011-3d-numerical-simulation-frcc-cracking]] — 화남이공대: 3D 메조스케일 와이블 연화영역 파괴 모델 및 균열 수치 시뮬레이션.

- [[huang-2021-seawater-sea-sand-ecc-crack-modeling]] — PolyU/HKUST/Michigan: 135 MPa 초고강도-7.2% 초고연성 해수해사 SS-ECC 와이블 균열모델.
