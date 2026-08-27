---
title: "Engineering of PVA-ECC Based on Micromechanics (Kanda & Li, 1998)"
type: source_note
source: "sources/kanda_JCRS98Jul.pdf"
citation: "Kanda, T., & Li, V. C. (1998). Engineering of PVA-ECC based on micromechanics. Journal of Cement and Concrete Composites / JCRS, 1998(7), 1-15."
date: 2026-08-24
tags:
  - pva-fiber
  - engineered-cementitious-composites
  - micromechanics
  - interface-tailoring
  - strain-hardening
---

## Summary
친수성 폴리비닐알코올(PVA) 섬유와 시멘트 매트릭스 간의 과도한 화학적 결합력($G_d$)과 조기 섬유 파단(fiber rupture) 문제를 극복하고, 저비용 고성능 PVA-ECC를 개발하기 위한 미시역학적 계면 엔지니어링 및 배합 설계 원리를 체계화한 고전 논문이다. PVA 섬유 표면에 유기 실리콘계 오일링 코팅제(0.8 ~ 1.2 wt %)를 도포하여 화학적 계면 파괴인성($G_d$)을 낮추고 마찰 전단 부착력($\tau_0$)을 최적화함으로써, 섬유 파단 모드를 완만한 다중 인발(fiber pullout) 모드로 전환하였다. 이를 통해 상용 $V_f = 2.0 \%$ PVA 섬유 혼입으로 인장강도 $4.5 \sim 6.0 MPa$, 인장 변형률능 $4.0 \sim 5.5 \%$, 균열폭 $60 \mu m$ 이하의 이상적인 다중균열 변형경화 복합체를 구현하였다.

## Key Contributions
- **PVA 섬유 계면 화학 부착($G_d$) 제어 이론 확립**: 무처리 PVA 섬유의 높은 수산기(-OH) 결합($G_d > 4.0 J/m2$)을 표면 오일 코팅을 통해 $G_d \approx 1.5 \sim 2.0 J/m2$ 수준으로 최적 조절.
- **PVA 섬유 인발 브리징 구성 관계식 정밀 수립**: 섬유 단면적 감소(slip-hardening 계수 $\beta$) 및 계면 마찰 계수($\tau_0 = 1.0 \sim 2.5 MPa$)가 가교 곡선 피크치($\sigma_0$)에 미치는 영향 수식화.
- **강도 포화 및 다중 미세균열 조건 정량 검증**: 미시역학적 PSH 기준($J_b'/J_{tip} > 3.0$, $\sigma_0/\sigma_{fc} > 1.4$)을 만족하는 경제적 실리콘 오일 코팅 PVA-ECC 배합 표준 확립.

## Methods
- **섬유 사양**: Kuraray사 PVA 섬유 (REC15, 직경 39 µm, 길이 12 mm, 탄성계수 41 GPa, 인장강도 1600 MPa). 표면 오일링 함량: 0.0 wt %, 0.5 wt %, 0.8 wt %, 1.2 wt %.
- **단일 섬유 인발 시험(Single Fiber Pullout Test)**: 다양한 매트릭스 배합에서 임계 계면 파라미터($G_d$, $\tau_0$, $\beta$) 직접 측정.
- **인장 시험**: $V_f = 2.0 \%$ 판상 도그본 시험편 준정적 직접 인장 시험.

## Results
- 무처리 PVA 섬유: 인발 중 80 % 이상의 섬유가 파단되어 취성 파괴 발현 (인장 변형률 $< 0.5 \%$).
- 0.8 ~ 1.2 wt % 표면 코팅 PVA 섬유: 섬유 파단율이 20 % 이하로 감소하고 완전 인발 거동 유도, 인장 변형률 $4.5 \sim 5.2 \%$, 미세균열 30개 이상 밀집 생성.

| 오일 코팅량 (wt %) | 화학 부착 $G_d$ (J/m2) | 마찰 부착 $\tau_0$ (MPa) | 섬유 파단율 (%) | 복합체 인장 변형률 (%) |
|---|---|---|---|---|
| 0.0 (무처리) | 4.8 | 3.5 | 88 | 0.45 |
| 0.5 | 2.8 | 2.6 | 45 | 1.80 |
| 0.8 | 1.9 | 2.1 | 18 | 4.85 |
| 1.2 | 1.4 | 1.8 | 12 | 5.20 |

## Related Notes
- [[interface-bond-properties]] - PVA 및 PE 섬유의 계면 부착 파라미터 미시역학
- [[pseudo-strain-hardening-criteria]] - PSH 기준지수와 다중균열 포화 설계
- [[fiber-bridging-constitutive-law]] - 섬유 가교 법칙과 계면 특성의 정량적 상관관계
