---
title: "Micromechanics-based Fatigue Dependent Fiber-Bridging Constitutive Model (Qiu & Yang, 2016)"
type: source_note
source: "sources/A micromechanics-based fatigue briding.pdf"
citation: "Qiu, J., Yang, E.-H. A micromechanics-based fatigue dependent fiber-bridging constitutive model. Cement and Concrete Research 90 (2016) 117-126."
date: 2026-08-22
tags: [fatigue, fiber-bridging, micromechanics, single-fiber-pullout, pva-fiber, interface-hardening]
---

# 피로 의존적 섬유브리징 구성법칙(미시역학 모델)

## Summary

반복하중에 의한 FRCC 섬유브리징(σ-δ 곡선) 열화를 예측하는 최초의 해석적 다중스케일 모델. 미시 스케일에서는 피로 후 단일섬유 인발(P-u 곡선)을, 거시 스케일에서는 섬유 위치·배향의 확률론과 피로에 의한 in-situ 섬유강도 저감을 반영해 σ(δ, N, σ_max)를 계산한다. 핵심 발견은 화학결합 G_d는 피로 불변이지만 마찰결합 τ_0가 사이클 수와 하중 수준에 따라 오히려 경화(interface hardening)되고, 이것이 조기 섬유 파단을 유발해 브리징 첨두응력 σ_0와 소산에너지를 떨어뜨린다는 것이다.

## Key Contributions

1. 피로 기인 탈결합의 Paris 법칙형 정식화: 터널균열 진전 Δa = N_d·C·(P_max - P_0)^M(C, M 재료상수, P_0 역치). 역치 P_0는 G_d와 E_f, d_f로부터 해석적으로 결정.
2. 피로 계면 경화의 두 양상 정량화: 탈결합 단계 경화계수 γ_d(N_d, P_max)와 슬립 단계 경화계수 γ_s(N_s, P_max)가 모두 log N에 선형, P_max의 멱함수 비율로 증가. 원인은 반복 슬립에 의한 연성 섬유 표면 손상과 편물(debris) 재밍(jamming) 효과.
3. in-situ 섬유강도의 피로 저감식: σ_fu(φ, N) = σ_fu(0, 1)·e^(-f'φ)·[1 - f''·log N]. 배향계수 f' = 0.33, 피로계수 f'' = 0.0649(무오일)/0.0536(오일 코팅).
4. 검증: 피로 전하단 후 P-u 곡선을 잘 재현 — 미탈결합 조건(P_max 0.35 N, N 최대 5×10⁵)에서 Pa 실측 0.513~0.592 N vs 예측 0.546~0.610 N, Pb 실측 0.388~0.443 vs 예측 0.445~0.497; 완전탈결합 조건(P_max ≥ 0.5 N)에서도 Pa 오차 약 10 % 이내.
5. 예측된 σ(δ) 변화: 상승부는 계면 경화로 강화되지만 첨두 σ_0는 감소하고 소산에너지(곡선 아래 면적) 축소 — 열화 정도는 σ_max에 의존. 오일 코팅은 σ_0를 약간 낮추지만 하강부 하중능력과 에너지 소산을 크게 회복시켜 내피로성 개선책임을 제시.
6. 확장성: γ_d, γ_s를 음수로 두면 피로 시 계면이 연화(softening)하는 시스템(강섬유 등)에도 적용 가능.

## Methods

기본 골격은 Lin-Li의 파괴역학 기반 단일섬유 인발 모델(G_d, τ_0, slip-hardening 계수 β)에 피로 항을 삽입. 탈결합 길이 a = min(a_0 + Δa(N_d), L_e), 균열 평행 이동 후 응력 평형+에너지 기준으로 u-a'-σ 관계 유도(부록 A). 거시 스케일은 snubbing P(φ) = P(0)e^(fφ)(f = 0.2, 피로 무관 가정), p(z) = 2/L_f, 배향 확률밀도(2D/3D 분포), V_f 2 % 합성. 입력값: PVA d_f 39 μm, E_f 22 GPa, E_m 20 GPa, G_d 2.68 J/m²(무오일)/1.77 J/m²(오일), τ_0 1.89/1.37 MPa, β 0.19/0.21. 검증 데이터는 동일 그룹의 대형 정착길이(강도 열화)·소형 정착길이(계면 열화) 단일섬유 피로 인발 실험.

## Results

모델이 예측하는 피로 후 브리징 거동: (1) 사이클 수 증가에 따라 σ_0 단조 감소(조기 파단 누적), (2) 상승부 강성·응력은 경화로 오히려 증가, (3) 하중 수준 σ_max 클수록 열화 가속, (4) N = 10³, σ_max = 4 MPa 조건에서 오일 코팅 시스템이 무코팅보다 넓은 δ까지 하중을 유지하며 소산에너지 우위. 저자들의 선행 실험(RELIM 2014, RILEM HPFRCC 2015)에서 계면 경화가 조기 섬유파단을 유발한다는 관찰을 정량적으로 재현.

## Related Notes

- [[fiber-bridging-constitutive-law]] — 본 모델이 확장하는 대상 곡선. 정적 σ_B(δ)에 피로 축(N, σ_max)을 추가한 최초 사례로 개념 페이지 계보에 위치.
- [[li-wu-1992-psh-conditions]] — snubbing 인자와 일반화 σ_b(δ) 형식의 원전. 본 논문의 f, f' 정의가 이 계보.
- [[lee-2011-diverse-embedment-model]] — 배향·정착길이 무작위성을 반영한 섬유응력 모델링의 강섬유 쪽 대응물. 확률론적 averaging 접근 공유.
- [[li-2001-pva-ecc-strain-hardening]] — PVA 친수성 계면(화학결합 + slip-hardening) 시스템의 대표 실험. 오일 코팅이 계면 특성을 바꾸는 논점의 정적 버전.
