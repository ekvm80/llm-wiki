---
title: "Interface Property and Apparent Strength of High-Strength Hydrophilic Fiber in Cement Matrix (Kanda & Li, 1998)"
type: source_note
source: "sources/Interface Property and Apparent Strength of a.pdf"
citation: "Kanda, T., Li, V.C. Interface property and apparent strength of high-strength hydrophilic fiber in cement matrix. Journal of Materials in Civil Engineering 10(1) (1998) 5-13."
date: 2026-08-22
tags: [pva-fiber, fiber-matrix-interface, chemical-bond, frictional-bond, apparent-fiber-strength, single-fiber-pullout, micromechanics]
---

# 고강도 친수성 섬유의 계면 특성과 외관강도 (Kanda-Li 1998)

## Summary

PVA 섬유(14 μm·40 μm)를 대상으로 단일섬유 인발 시험으로 화학결합·마찰결합 강도를 정량화하고, 매트릭스 내 인발-파단 시험으로 섬유의 외관강도(apparent strength) 저하를 정량화한 논문. 친수성 고강도 섬유는 예상 외로 높은 결합강도를 보이지만, 균열면 대비 섬유 경사각이 커질수록 유효 섬유강도가 크게 저하되어 복합재 성능이 섬유 고유강도만큼 나오지 않음을 밝혔다. ECC 미시역학 설계에서 PVA 계면 파라미터(τ₀, τ_f, f′)의 실험적 원전 데이터다.

## Key Contributions

1. PVA 섬유 계면 특성의 최초 정량 평가: 화학결합 τ₀ ≈ 29–37 MPa, 마찰결합 τ_f ≈ 2.2–4.4 MPa. 기존 문헌의 소수성 섬유 값(PE 1.02 MPa, 나일론 0.16 MPa, Li et al. 1990) 대비 몇 배~한 자릿수 높은 수준으로, PVA의 수산기(-OH)에 의한 수소결합형 화학결합이 원인.
2. τ₀는 매트릭스 w/c(27/42/62 %)와 섬유 종류(직경·표면처리)에 무관하게 안정적, τ_f는 w/c 증가에 따라 감소. Coulomb형 마찰 해석 — 고 w/c의 낮은 탄성계수가 잔류 수직응력을 낮추고, ITZ 공극률 증가가 접촉면을 줄여 τ_f 저하.
3. 외관강도 저하 정량화: fixed-end 강도 약 1,900 MPa → 매트릭스 내 0° 인발-파단 약 1,700 MPa(탈결합 슬립에 의한 표면 마모 손상), 경사각 75°에서 약 1,000 MPa까지 추가 저하(0°→75° 약 40 % 감소). σ_fu(φ) = σ′_u·exp(−f′φ) 형태의 외관강도 환원계수 f′ ≈ 0.3/rad 제안(Eq. 3).
4. 임계정착길이 l_e,crit 식(Eq. 4): 경사섬유의 snubbing(f)과 외관강도(f′) 효과가 결합해 l_e,crit을 더욱 줄임 — 미세섬유 인발 시험 설계(정착길이를 파단 대신 인발이 나오도록 제한)의 이론적 근거.
5. 강도 저하 메커니즘 3종 논의: (i) 탈결합 중 슬립 마모(abrasion, slip-hardening과 동일 기인), (ii) 고각(>60°)에서 매트릭스 spalling에 따른 국부 손상, (iii) 출구점 굽힘 유기 인장응력(75°에서 약 650 MPa 추정). 세 메커니즘이 가법이 아니라 상승적으로 작동할 가능성 제시.

## Methods

- 단일섬유 인발 시험: Katz-Li(1996) microfiber testing procedure, 정착길이 0.3–1.2 mm(대표 0.5 mm), 자유장 1 mm, 1 N 미니 로드셀, 광학현미경(50배) 실시간 관찰. 시편을 초접착제 4코너로 알루미늄판에 장착해 구속효과 최소화.
- 해석: Leung-Li(1991) strength-controlled 탈결합 모델로 피크 하중 P_a와 급락 후 하중 P_b에서 τ₀·τ_f 역산(Eq. 1–2). 유효 반경 R* = 2.5 mm, V_m = 1 가정, Hirsch(1962) 식으로 w/c별 E_m 산정. 첫 피크 변위는 fixed-end 시험의 system compliance(0.385 mm/N)로 보정해 P_a/P_b 판별 신뢰도 확보(부록 I).
- 재료: PVA 섬유 2종 — 14 μm(density 1.3 kg/L, 인장강도 2,254 MPa, E_f 60 GPa, 신율 5 %), 40 μm(1,250 MPa, E_f 22 GPa, 신율 5.7 %). 매트릭스 3종 페이스트 — w/c 27 %(실리카퓸 0.8 + 고성능감수제 0.27), w/c 42 %·62 %(점증제 포함).
- 외관강도 시험 2계열: (a) embedded pull-to-rupture — 정착길이 약 5 mm로 파단 유도, 경사각 0/15/30/45/60/75°, 14 μm + w/c 27 % 조합; (b) fixed-end — 양단 초접착제 고정(ASTM D 2101 유사 경계조건)으로 경계조건 효과 분리.

## Results

| 항목 | 값 |
|---|---|
| 화학결합 τ₀ | 29–37 MPa(w/c·섬유 종류 무관하게 안정) |
| 마찰결합 τ_f | 2.2–4.4 MPa(w/c 증가 시 감소, 40 μm가 더 낮음) |
| Fixed-end 강도 | ≈ 1,900 MPa |
| Embedded 0° 외관강도 | ≈ 1,700 MPa |
| 75° 외관강도 | ≈ 1,000 MPa(0° 대비 약 40 % 감소) |
| 환원계수 f′ | ≈ 0.3 /rad(곡선 피팅) |

- 인발 곡선에서 첫 피크 이후 급락하되 이후 하중이 재상승하는 slip-hardening(2차 피크, 저 w/c에서는 첫 피크 초과) 관찰 — 표면 마모 기인으로 해석하고 plasma-treated PE(Li et al. 1996)와 동일 거동으로 지적.
- 45° 세트의 파단 단면 관찰: 파단점은 원래 매트릭스 내부 위치(슬립 아웃 평균 43 μm)이고 계산 탈결합 길이 L_d ≈ 0.9 mm << 정착길이 5 mm — 섬유는 탈결합 진행 중에 파단.
- 모델 검증(부록 II): P_a–l_e 관계의 이론 재현이 실험 추세와 부합. 탈결합 길이 이론 554 μm vs 실측 정착 539 μm, 피크 변위 이론 18 μm vs 보정 측정 13 μm.
- 저자 스스로 τ₀ ≈ 30–40 MPa가 시멘트 페이스트 전단강도보다 커서 물리적 엄밀성보다 현상론적 파라미터임을 명시 — 다만 실복합재의 교차 섬유와 동일 스케일이라 스케일 효과 없이 직접 적용 가능.

## Related Notes

- [[kanda-2006-saturated-psh-design-criteria-ecc]] — 동일 제1저자의 후속; 본 논문의 계면·외관강도 데이터를 PSH 성능지수 설계 프레임으로 발전.
- [[li-wu-1992-psh-conditions]] — PSH 설계 이론 원전; 본 논문은 그 설계에 필요한 파라미터(τ₀, τ_f, snubbing f, f′)를 PVA 시스템으로 확정한 실험 편.
- [[pseudo-strain-hardening-criteria]] — 강도·에너지 기준에 입력되는 미시 파라미터의 실험적 원천.
- [[fiber-bridging-constitutive-law]] — 섬유파단을 포함한 σ_B(δ) 구성 시 필요한 f′ 개념의 출처.
- [[li-2023-ecc-micromechanics-critical-review]] — 리뷰가 추적한 계면 특성화 계보의 초기 노드.
- [[qiu-2016-fatigue-dependent-fiber-bridging-model]] — PVA 계면 입력값(τ₀, slip-hardening 계수)을 쓰는 후속 피로 모델; 본 논문의 slip-hardening 관찰이 정적 버전의 선례.
- [[li-2001-pva-ecc-strain-hardening]] — PVA-ECC 실증의 대표 후속 연구.

- [[park-2012-tensile-behavior-uhp-hfrc]] — UHP-HFRC(200 MPa 매트릭스 + 거섬유 1 %+잔섬유) 16계열 직접인장: 거섬유 종류가 곡선 형상 지배, T-섬유 최고(18.6 MPa, 0.64 %).

## 비고

- 스캔본 OCR 전문 사용. 수식 일부 왜곡 가능(Eq. 1–2, Eq. 4의 상수·변수 배열) — 정밀 인용 시 원본 PDF 대조 권장.
- [[lin-1999-interface-property-characterization]] — 계면 3파라미터 모델을 σ(δ) 닫힌형으로 확장한 후속 이론

