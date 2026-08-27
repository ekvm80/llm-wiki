---
title: "Pseudo Strain-Hardening Criteria (PSH 기준)"
type: concept
source: "[[li-2023-ecc-micromechanics-critical-review]]"
date: 2026-08-22
tags: [concept, strain-hardening, micromechanics, design-criteria]
---

# Pseudo Strain-Hardening Criteria (PSH 기준)

## 정의

인장 하중에서 복합재가 응력연화 대신 응력경화를 보이기 위한 미시역학적 필요조건. 두 기준의 동시 충족이 요구된다.

- 에너지 기준: J′_b ≥ J_tip — 섬유 브리징 보완에너지가 균열선단 인성 이상이어야 균열이 준정상(steady-state) 모드로 진행한다. 물리적으로 외부 일이 공급하는 순에너지가 무한 균열 확장에 필요한 균열선단 에너지를 넘어야 한다는 의미이다.
- 강도 기준: σ_0 ≥ σ_c — 최대 브리징 응력이 매트릭스 균열강도 이상이어야 균열이 하나의 결함에서 국지화되지 않고 여러 결함점에서 개시한다.

## 해석

에너지 기준은 균열 전파 모드를, 강도 기준은 균열 개시 다중성을 결정한다. 두 기준이 충족되어도 다중균열은 순차적으로 형성되며 첫 균열이 최종 파괴 균열이 아닌 경우가 일반적이다. 이는 미세구조 이질성(섬유 직경 분산, 결함 크기·분포, 양생 변동) 때문이다.

## 설계 여유 지수 (margin)

이질성을 고려해 안전율처럼 여유를 둔다. 실험 근거값:

| 시스템 | J′_b/J_tip | σ_0/σ_c | 출처 |
|---|---|---|---|
| PE-ECC | > 3 | > 1.2 | Kanda-Li 1998 실험 |
| PVA-ECC(일부 배합) | - | ≈ 1.45 | Kanda 1998 |

여유 지수는 배합별로 실험으로 결정해야 한다. 확률론적 대안으로 Li-Yang 2018은 파라미터를 확률변수로 취급해 한계상태면 G(x)=J′_b−J_tip=0, F(x)=σ_0−σ_c=0 을 정의하고 파괴확률 P_f 로 경화 잠재력을 평가한다.

## 지수의 유효성: 매트릭스 의존성 (wiki 내 누적 근거)

- **σ_0/σ_fc ≥ 1.2~1.3은 강건한 판별 기준**: Nematollahi 2017(경량 EGC, [[nematollahi-2017-lightweight-aggregate-egc]])과 Artyk 2024([[artyk-2024-low-activity-fly-ash-hybrid-fiber-egc]]) 모두에서 이 범위를 넘는 배합은 포화 다중균열·변형률 1.5 % 이상 달성.
- **J′_b/J_tip ≥ 2.7의 판별력은 매트릭스에 의존**: 저활성 플라이애시처럼 K_m이 낮은 매트릭스에서는 J′_b/J_tip > 5여도 연성이 없을 수 있음(Artyk 2024). 반면 원팟 SHGC(Nematollahi 2017)에서는 에너지 지수 차이가 변형률 차이를 정확히 설명.
- **지수 상대 비교가 절대 기준보다 유용**: 동일 매트릭스 내 양생 조건·섬유 종류 비교에서 PSH 지수 순서가 실측 변형률 순서와 일치(Nematollahi 2017 one-part SHGC).
- **매개 변수 해석**: 골재 형상(구형→K_m↓), 알칼리 농도(↑→J_tip↑, [[han-2022-egc-impact-cold-temperature]]·[[feng-2024-chloride-egc-mix-parameters]]), FA 함량(G_d↓·τ↑·J_tip↓, [[sahmaran-2009-aggregate-type-size-ecc]])이 σ_c와 σ_0의 균형을 바꾸는 경로가 wiki 전반에서 반복 확인됨.

## 관련 노트

- [[li-2023-ecc-micromechanics-critical-review]] — 원전 리뷰
- [[fiber-bridging-constitutive-law]] — J′_b 와 σ_0 가 정의되는 근거 곡선
- [[nematollahi-2017-one-part-pe-shgc-micromechanics]] — 지수 계산 표준 절차와 계면 데이터
- [[cho-2012-basic-mixing-and-mechanical-tests]] — 무시멘트(알칼리 활성 슬래그) 매트릭스에 PSH 지수 프레임을 그대로 적용해 결과를 해석한 실측 사례(B2 활성화제에서 강도지수 개선 → 인장변형성능 +16.7 %).
- [[park-2012-tensile-behavior-uhp-hfrc]] — UHP-HFRC(200 MPa 매트릭스 + 거섬유 1 %+잔섬유) 16계열 직접인장: 거섬유 종류가 곡선 형상 지배, T-섬유 최고(18.6 MPa, 0.64 %).
- [[zhou-2010-limestone-slag-ecc]] - sigma_pc - sigma_cc 마진과 변형률능력의 강한 선형 상관(R^2 = 0.98)을 보인 M1~M6 실험으로, 마진 기준의 대표적 실증 데이터.
