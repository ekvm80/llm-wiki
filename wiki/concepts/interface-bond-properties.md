---
title: "Interface Bond Properties (섬유-매트릭스 계면 부착 특성)"
type: concept
source: "[[lin-1999-interface-property-characterization]], [[li-2001-pva-ecc-strain-hardening]], [[ranade-2013-hshdc-micromechanics]]"
date: 2026-08-23
tags: [concept, interface-bond, single-fiber-pullout, chemical-bond, frictional-bond, snubbing, micromechanics]
---

# Interface Bond Properties (섬유-매트릭스 계면 부착 특성)

## 정의

섬유보강 복합재료에서 단일 섬유 표면과 시멘트 매트릭스 사이에서 발생하는 응력 전달 능력 및 부착 메커니즘을 규정하는 물리·화학적 계면 파라미터 군.

## 핵심 계면 파라미터 및 물리적 의미

1. **화학적 부착 파괴에너지 ($G_d$)**:
   - 단위 계면 면적당 섬유와 매트릭스의 화학적 결합을 분리(debonding)시키는 데 필요한 에너지 (J/m²).
   - 친수성 PVA 섬유는 수산기(-OH) 결합으로 인해 과도한 $G_d$를 가질 수 있으며, 이는 섬유 인발 전 조기 파단(rupture)을 유발하므로 오일 코팅(oil coating, 약 0.8~1.2 wt.%)을 통해 적정 수준으로 조절함.
2. **마찰 전단강도 ($\tau_0$)**:
   - 탈결합 후 섬유가 매트릭스로부터 미끄러져 빠져나올 때(pullout sliding) 작용하는 마찰 전단응력 (MPa).
   - $\tau_0$가 너무 낮으면 섬유가 쉽게 빠져나와 최대 브리징 응력($\sigma_0$)이 낮아지고, 너무 높으면 섬유 파단이 지배하여 연성이 저하됨.
3. **미끄럼 경화 계수 ($\beta$)**:
   - 섬유 인발 과정에서 마멸 입자 적체, 섬유 표면 손상 등으로 인해 마찰 응력이 증가하는 Slip-Hardening 거동을 나타내는 무차원 계수.
4. **스너빙 계수 ($f$)**:
   - 섬유가 균열면과 경사각($\theta$)을 이룰 때 풀리(pulley) 효과로 인해 인발 하중이 지수함수적으로 증가하는 계수:
     $$e^{f\theta}$$

## 단일 섬유 인발 곡선 ($P-\delta$)과 브리징 모델링

- 계면 파라미터($G_d, \tau_0, \beta, f$)는 단일 섬유 인발 시험(Single Fiber Pullout Test) 및 역해석(Inverse Analysis)을 통해 측정됨.
- 이들 미시역학적 파라미터의 적분을 통해 복합재의 거시적 균열 가교 구성 곡선 $\sigma(\delta)$이 유도됨.

## 관련 파라미터

- $G_d$: 화학 결합 에너지 (J/m²)
- $\tau_0$: 초기 마찰 전단강도 (MPa)
- $\beta$: 슬립 경화 계수
- $f$: 스너빙 계수
- $d_f, L_f$: 섬유 직경 및 매립 길이 (µm, mm)

## 관련 노트

- [[lin-1999-interface-property-characterization]] — 계면 3파라미터($G_d, \tau_0, \beta$) 및 스너빙 통합 구성식 원전.
- [[li-2001-pva-ecc-strain-hardening]] — PVA 섬유 표면 오일 코팅을 통한 계면 맞춤 및 PSH 달성 원전.
- [[ranade-2013-hshdc-micromechanics]] — 고강도 매트릭스에서의 경사각 의존 계면 경화 메커니즘.
- [[fiber-bridging-constitutive-law]] — 계면 파라미터 기반 거시 브리징 응력-개구 변위 모델.
- [[pseudo-strain-hardening-criteria]] — 계면 제어를 통한 PSH 여유 지수 확보.
