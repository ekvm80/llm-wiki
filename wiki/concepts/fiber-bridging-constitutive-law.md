---
title: "Fiber-Bridging Constitutive Law (섬유 브리징 구성법칙)"
type: concept
source: "[[li-2023-ecc-micromechanics-critical-review]]"
date: 2026-08-22
tags: [concept, fiber-bridging, micromechanics, crack-bridging]
---

# Fiber-Bridging Constitutive Law (섬유 브리징 구성법칙)

## 정의

균열면을 가로지르는 무작위 배향 불연속 섬유들이 단위면적당 부담하는 응력과 균열개구변위의 관계 σ_B(δ). ECC 메소 스케일의 핵심 구성법칙으로, 균열 전파 모드와 pseudo strain-hardening 잠재력을 지배하고 인장강도와 균열폭을 크게 결정한다.

## 구성

σ_B(δ)는 단일 섬유 인발 역학 P(δ, L_e, φ)를 균열면을 가로지르는 모든 섬유에 대해 섬유 위치(z)와 배향각(φ)의 확률밀도함수로 가중 적분하여 얻는다(Eq. 8). 모듈 구성요소:

- 단일 정렬 섬유 인발 (debonding → slippage 단계)
- 경사 섬유 인발 (inclination, snubbing 효과)
- 섬유 위치·배향의 무작위 분포
- 부가 메커니즘: 양방향 인발(two-way pullout), 매트릭스 미소박리(micro-spalling), Cook-Gordon 효과, 섬유 파단

## 계보

| 연도 | 내용 |
|---|---|
| 1992 | Li: 소수성(마찰 지배) 섬유 폐형해 |
| 1997 | Lin-Li: slip-hardening 계면 고려 |
| 1998~1999 | 겉보기 섬유강도, 화학결합 도입 |
| 2008 | Yang et al.: 수치해(신규 메커니즘 확장 가능) |
| 2015 | Huang et al.: 친수성 섬유 폐형해(양방향 인발+파단 포함) |

## 계면 유형에 따른 거동 차이

- 소수성(PE): 마찰 지배, 첨두 후 slip-softening. 인발 부하가 슬립과 함께 감소.
- 친수성(PVA): 화학결합 G_d + 마찰 τ_0 + slip-hardening 계수 β. 완전 탈결합 시 급강하 후, 섬유 표면 피브릴레이션의 재밍 효과로 저항이 다시 증가.

## 역할

σ_B(δ) 곡선에서 보완에너지 J′_b(곡선 아래 면적 관련)와 첨두 응력 σ_0가 각각 [[pseudo-strain-hardening-criteria]]의 에너지·강도 기준에 입력된다. 곡선 형상 자체가 준정상균열 해석의 입력이다.

## 관련 노트

- [[li-2023-ecc-micromechanics-critical-review]] — 원전 리뷰
- [[pseudo-strain-hardening-criteria]] — 이 법칙이 입력되는 설계 기준
- [[qiu-2016-fatigue-dependent-fiber-bridging-model]] — 정적 σ_B(δ)에 피로 축(N, σ_max)을 추가한 최초 모델. 계면 경화(γ_d, γ_s)와 in-situ 섬유강도 저감으로 σ_0·소산에너지 열화를 예측.
- [[chen-2025-damaged-rc-beams-strengthened-uhpc]] — 구조 스케일 적용례: 강섬유 가교의 응력집중 완화가 UHPC 보강층의 촘촘한 미세균열 분포와 균열하중 3~5배 향상으로 실측됨.
- [[morton-1976-effect-metal-wires-fracture-brittle-matrix-composites]] — 경사 인발 응력 증가(로프-드럼 snubbing 모델)의 실험적 원전(1976)
- [[park-2012-tensile-behavior-uhp-hfrc]] — UHP-HFRC(200 MPa 매트릭스 + 거섬유 1 %+잔섬유) 16계열 직접인장: 거섬유 종류가 곡선 형상 지배, T-섬유 최고(18.6 MPa, 0.64 %).
- [[yang-2008-fiber-bridging-constitutive-law-of-ecc]] — 계보 2008 항목의 원전: 양방향 인발·미소박리·Cook-Gordon을 통합한 수치해 σ(δ) 모델과 실험 검증.

- [[ding-2019-optimal-interfacial-bond-fiber-rupture-hdcc]] — 섬유별 최적 계면전단강도 및 적정 섬유파단 보상에너지 이론.
