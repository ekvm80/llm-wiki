---
title: "Micromechanics of ECC: A Critical Review and New Insights (Li et al., 2023)"
type: source_note
source: "sources/__Yang micromechanics of ECC review paper.pdf"
citation: "Li, J., Qiu, J., Weng, J., Yang, E.-H. Micromechanics of engineered cementitious composites (ECC): A critical review and new insights. Construction and Building Materials 362 (2023) 129765."
date: 2026-08-22
tags: [ecc, micromechanics, fiber-bridging, steady-state-cracking, strain-hardening, multiple-cracking, stochastic-model]
---

# Micromechanics of ECC: A Critical Review and New Insights

## Summary

ECC 미시역학의 현황을 총정리한 리뷰. 스케일 연계(scale-linking) 접근을 축으로, 미소 스케일 단일섬유 인발 거동에서 메소 스케일 섬유 브리징 구성법칙과 pseudo strain-hardening(PSH) 기준을 거쳐 마크로 스케일 복합재 인장거동에 이르는 해석 체계를 정리한다. 결정론 기반 모델에서 미세구조 이질성을 반영하는 확률론 기반 모델로의 발전 과정을 추적하고, 동적 하중과 피로로의 확장을 다룬다. 파일명은 Yang이나 실제 첫저자는 J. Li(교신저자 E.-H. Yang)이다.

## Key Contributions

1. 3계층 스케일 연계 프레임워크의 체계화: micro(nm~μm, 단일섬유 인발 P(δ)) → meso(μm~mm, 브리징 응력 σB(δ)와 PSH 기준) → macro(mm~cm, 인장응력-변형률 관계와 균열 특성).
2. 발전 사연표(Table 1): 1992 소수성(PE) 섬유 폐형해 → 1998 slip-hardening·겉보기섬유강도 도입 → 1999 화학결합 고려(PVA) → 2008 수치해(Yang et al.) → 2015 친수성 섬유 폐형해(Huang et al.). PSH 기준은 1992 도입 → 1996 엄밀 조건(Leung) → 2006 실용 지수(Kanda-Li) → 2014 동적 → 2017 피로 → 2018 확률론.
3. 계면 유형 구분: 소수성 PE 섬유는 마찰 지배로 첨두 후 slip-softening, 친수성 PVA 섬유는 화학결합(G_d)과 slip-hardening 계수 β로 첨두 후 부착 저항이 증가하는 이중 거동.
4. 순차 다중균열 메커니즘: 최소 매트릭스 균열강도 min[σ_c] 단면에서 첫 균열, 임계응력전달거리 x_d 바깥에서 후속 균열, 응력이 형성된 균열 중 최소 브리징강도 min[σ_0]에 도달하면 다중균열 종료.
5. 확률론적 모델(Li et al. 2019): 모든 미시역학 파라미터를 확률변수로 취급하여 균열 발생 순서·간격·폭 분포를 포함한 확률론적 인장응력-변형률 곡선 출력.
6. 확장 해석: 동적 하중에서는 E_f, J_tip, G_d가 변형률 속도와 함께 증가하여 섬유 파단이 늘고 강도는 오르며 변형능력은 감소함을 규명. 피로에서는 피로 유발 탈결합 길이 Δa(N_d, P_max)와 계면마찰 경화계수 γ_d, γ_s를 도입한 인발 모델 제시.

## Methods

문헌 종합 리뷰이다. 이론적 골격은 J-적분 기반 준정상균열(steady-state cracking) 해석(Marshall-Cox)과 이의 불연속 무작위 배향 섬유계로의 확장(Li-Leung), 전단지연(shear-lag) 기반 단일섬유 인발 모델, 브리징 응력의 적분형 합성식(Eq. 8)으로 구성된다. 동적 확장은 운동항을 포함한 에너지 방출률(G(Γ))의 경로독립성을 이용하고, 피로 확장은 하중반복수 N 의존 계면 파라미터를 도입한다.

## Results

- PSH 달성 조건은 에너지 기준 J′_b ≥ J_tip 와 강도 기준 σ_0 ≥ σ_c 의 동시 충족이다. 포화 다중균열을 위한 여유 지수 실험값: PE-ECC는 J′_b/J_tip > 3 및 σ_0/σ_c > 1.2, 일부 PVA-ECC는 σ_0/σ_c ≈ 1.45.
- 변형능력 추정: ε = Σδ_i/L (Eq. 15). 포화 가정 시 ε = δ/x 이고 평균 균열간격 x는 이론값 1.337 x_d(Kimber et al.) 수준이다.
- 동적 하중: 인장강도 증가, 인장변형능력 감소(섬유 파단 증가가 원인). 준정상균열 해석과 PSH 기준 자체는 동적 조건에서도 형태가 유지된다.
- 피로: 브리징 유효성이 저하되어 다중균열 포화도와 인장변형능력이 모두 감소한다.
- 한계 및 전망: (i) 미시역학 파라미터와 배합비(W/C 등)의 직접 연계 부재, (ii) 균열 분기·밴드·상호작용 미고려(현 모델은 평행 균열 가정), (iii) 재료 특성에서 구조 성능으로의 스케일 연계 미완(ISMD 개념, Victor Li 제안).

## Related Notes

- [[pseudo-strain-hardening-criteria]] — 에너지·강도 이중 기준과 여유 지수의 근거 문헌
- [[fiber-bridging-constitutive-law]] — σ_B(δ) 유도 계통과 폐형해·수치해 계보
- [[li-2003-ecc-review-jact]] — 동일 저자의 10년 시점 총론(본 리뷰의 전 단계)
- [[park-2012-tensile-behavior-uhp-hfrc]] — UHP-HFRC(200 MPa 매트릭스 + 거섬유 1 %+잔섬유) 16계열 직접인장: 거섬유 종류가 곡선 형상 지배, T-섬유 최고(18.6 MPa, 0.64 %).
- [[aziz-2016-biomimicry-as-an-approach-for]] — 재료 혁신 축의 상위 관점(생체모방 설계 방법론) 문헌.
