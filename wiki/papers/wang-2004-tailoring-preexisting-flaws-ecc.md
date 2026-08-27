---
title: "Tailoring of Pre-existing Flaws in ECC Matrix for Saturated Strain Hardening (Wang & Li, 2004)"
type: source_note
source: "sources/WangFramcos5.pdf"
citation: "Wang, S., Li, V.C. Tailoring of pre-existing flaws in ECC matrix for saturated strain hardening. In Fracture Mechanics of Concrete Structures (FRAMCOS-5 학술대회 논문집), Li et al. eds, Ia-FraMCos, 2004, pp. 1005-1012. ISBN 0 87031 135 2."
date: 2026-08-23
tags: [ecc, artificial-flaw, multiple-cracking, psh, pva-ecc, flaw-size-distribution]
---

# 인공 결함 도입으로 포화 다중균열 만들기

## Summary

파일명 WangFramcos5는 Wang(Shuxin Wang)+FRAMCOS 제5회 학술대회를 가리키며, 본문 표지에서 서지를 확정했다. 매트릭스의 자연 결함 크기 분포를 제어해 포화 다중균열(saturated multiple cracking)을 달성하는 실용 기법을 제안·검증한 논문. 최대 섬유 브리징 응력 σ0가 활성화 가능한 결함 크기의 하한(임계 결함 크기 c_mc)을 정하므로, 그보다 큰 인공 결함을 경량골재·플라스틱 비드로 의도적으로 넣으면 높은 인성 매트릭스에서도 다중균열이 회복된다. 위키의 인공결함 설계 축(PS 비드, 폴리스티렌 비드 계열)의 원전.

## Key Contributions

1. **임계 결함 크기 개념의 설계화**: 취성 매트릭스의 균열강도는 단면 최대 결함이 결정하고, σ0가 하한을 두어 c_mc보다 큰 결함만 다중균열에 기여한다. J'b/Jtip>3 여유 지표(Kanda & Li 1998)와 함께, 저인성 매트릭스에 의존하지 않고 결함 분포를 직접 조작하는 대안 설계 축을 제시 — 조기강도·탄성계수·작업성이 높은 W/B를 강제하는 배합에서 특히 유효.
2. **대형 인공 결함의 극적 효과**: Mix 2(Norlite 팽창셰일 경량골재 3.5 mm, 0.07 vol.%)는 변형률능력 0.38 %→2.48 %, 평균 균열간격 16.2 mm→2.4 mm. Mix 4(Norlite 3.5 mm+PP 비드 4 × 2 mm 타원, 0.07 vol.%)는 1.86 %→3.79 %(100 % 이상 향상), 균열간격 4.8 mm→2.2 mm. 궁극인장강도는 거의 무영향, 첫균열강도만 소폭 저하(도입 결함 크기가 기존 최대 공극과 비슷해 균열강도의 하한인 정상상태 응력에는 닿지 않음).
3. **크기 제어의 결정성(Mix 5 반례)**: 작은 Norlite 1 mm(0.10 vol.%, 모래 일부 치환)는 개수가 더 많아도 개선 없음(1.89 %) — 인공 결함 크기가 자연 최대 공극과 동등해야 활성화된다. 도입 크기는 균열 단면에서 관측된 최대 공극 크기에 맞춰 선정.
4. **자연 결함 시스템의 실험 규명**: 대형 결함의 대부분은 권입 공기 공극이며, 균열 단면의 최대 공극이 비균열 단면보다 크고 1 mm 초과 대형 공극 수도 많음(Mix 1: 2.5~5 mm 평균 3.4 mm, Mix 3: 1.7~4.2 mm 평균 2.8 mm). 매트릭스 KIc는 Mix 1이 0.67, Mix 3이 0.61 MPa√m로, Mix 3의 공극이 작음에도 첫균열강도가 낮은 것은 인성 차이로 설명.
5. **균열간격 이론과의 정합**: Wu & Li 1995 최소 균열간격식(f=0.7 가정, τ0=3.5/2.7 MPa)으로 x_d≈1.09 mm(Mix 2)·1.02 mm(Mix 4) — 실측 평균 간격이 이론 상한 2x_d 근처로 포화 다중균열 판정과 부합.

## Methods

- 재료: PVA REC15 섬유(Kuraray) 2 vol.%, 길이 12 mm, 지름 39 μm. 1형 OPC, 규사(평균 110 μm), C형 플라이애시, 고성능감수제. 인공 결함 후보 3종 — Norlite 팽창셰일 경량골재(평균 1.0 mm·3.5 mm, 다공질로 저인장강도), PP 플라스틱 비드(타원, 장단축 약 4 mm·2 mm, 계면 결합 극약으로 매입 균열처럼 거동).
- 배합 2그룹 5종: 그룹 1(Mix 1~2, FA 0.8·W/B 0.43), 그룹 2(Mix 3~5, FA 1.2·W/B 0.53) — 의도적으로 높은 매트릭스 인성(J'b/Jtip 0.44~1.24)으로 다중균열이 억제된 대조군. Li 등 2002 포화 PVA-ECC의 J'b/Jtip 4.84~7.62와 대비.
- 시험: 쿠폰 304.8 × 76.2 × 12.7 mm, 수중 양생 28 d, 변위제어 직접일축인장 0.15 mm/min, 표면 부착 LVDT 2개(게이지 약 180 mm), 제하 후 평균 균열간격 계측. 대조군 쿠폰을 균열/비균열 단면으로 다이아몬드 톱 절단해 200배 광학현미경으로 대형 공극 분포 관찰.

## Results

| Mix | 인공 결함 | 첫균열강도 (MPa) | 궁극강도 (MPa) | 변형률능력 (%) | 균열간격 (mm) |
|---|---|---|---|---|---|
| 1 (대조) | 없음 | 4.88 | 6.40 | 0.38 | 16.2 |
| 2 | Norlite 3.5 mm 0.07 vol.% | 4.75 | 6.82 | 2.48 | 2.4 |
| 3 (대조) | 없음 | 4.06 | 4.84 | 1.86 | 4.8 |
| 4 | Norlite 3.5 mm+PP 비드 0.07 vol.% | 3.74 | 4.63 | 3.79 | 2.2 |
| 5 | Norlite 1 mm 0.10 vol.% | 3.80 | 4.90 | 1.89 | 4.9 |

- 균열 패턴: 대조군은 2~50 mm에 이르는 넓은 간격 분포와 무균열 대면적(불포화), 인공 결함 도입군은 거의 포화된 균일 분포.
- OCR 기반 추출이라 표 수치는 본문 서술(0.38→2.48 %, 16.2→2.4 mm 등)과 교차 검증했으며 원본 대조 여지는 표 전체 수치에 남는다.

## Related Notes

- [[pseudo-strain-hardening-criteria]] — J'b/Jtip 여유 지표와 PSH 달성 조건의 원전 축
- [[kanda-2006-saturated-psh-design-criteria-ecc]] — 본 논문이 인용한 성능지수(J'b/Jtip>3) 계열의 실용화 확장
- [[fiber-bridging-constitutive-law]] — σ(δ) 보완에너지 J'b가 c_mc와 활성화 결함수를 지배하는 구조 관계
- [[li-wu-1992-psh-conditions]] — 최소 균열간격·PSH 조건 계보의 원전
- [[wu-1992-snubbing-bundling-crack-spacing]] — snubbing 계수 f를 포함한 균열간격 이론 축
- [[yu-2016-uhpc-artificial-flaw]] — 인공결함(PS 비드) 전략의 사용자 그룹 UHPC 적용 후속

