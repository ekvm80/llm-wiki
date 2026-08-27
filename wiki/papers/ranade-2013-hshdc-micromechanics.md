---
title: "Micromechanics of High-Strength, High-Ductility Concrete (Ranade, Li, Stults, Rushing, Roth & Heard, 2013)"
type: source_note
source: "sources/Micromechanics of High-Strength, High-Ductilit.pdf"
citation: "Ranade, R., Li, V.C., Stults, M.D., Rushing, T.S., Roth, J., Heard, W.F. Micromechanics of high-strength, high-ductility concrete. ACI Materials Journal 110(4) (2013) 375-384."
date: 2026-08-22
tags: [hshdc, pe-fiber, inclined-pullout, inclination-hardening, snubbing, micromechanics, psh-index, high-strength-matrix]
---

# HSHDC의 미시역학

## Summary

압축강도 166 MPa과 인장변형률능 3.4 %를 동시에 갖는 고강도 고연성 콘크리트(HSHDC)의 미시역학적 설계 근거를 규명한 논문(Michigan ACE-MRL+미 육군공병단 ERDC). UHMWPE 섬유 50개 단섬유 인발시험에서 기존 SHCC 모델로 설명 안 되는 새로운 '경사각 의존 경화' 메커니즘을 발견하고, 이를 반영한 수정 인발모델→스케일링크 모델→σ-δ 곡선 계산→다중균열 조건 검증까지 수행했다. 고강도 매트릭스가 섬유를 깨물어(pencil-tip 마모) 인발하중을 오히려 올리는 현상이 핵심 발견.

## Key Contributions

- PE-HSHDC 계면 물성 정량화: 마찰부착 τ0=1.52 MPa(중강도 매트릭스 대비 2~3배), 화학부착 Gd≈0 J/m²(PE 소수성), slip-hardening β=0.003(PVA-SHCC보다 2자릿수 작음 — 초미립자 충전으로 인발 터널이 매끄러움), snubbing 계수 f=0.59.
- 신규 '경사각 의존 경화' 메커니즘 발견·정식화: 경사각이 클수록 매트릭스 쐐기 끝이 날카로워져 섬유를 횡방향으로 물고, 슬립이 진행되며 섬유 단면이 연필 끝처럼 마모돼 출구 막힘→인발하중 선형 증가. 파라미터 m=386 N/(m-rad)로 정량화하고 SEM 미세사진으로 입증. SHCC의 microspalling(매트릭스가 깨져 연화)과 정반대.
- 스케일링크 검증: 형광현미경 배향 분포(2D+3D 혼합 w=0.73)를 입력으로 σ-δ 곡선 계산, 노치 시편 단일균열시험(가교용량 평균 13.8 MPa)과 부합. 수정 모델(13.0 MPa)이 기존 SHCC 모델(12.0 MPa)보다 우수.
- 다중균열 조건 충족 입증: 강도 조건 min(σ0)/σ_ci(fc)=11.0/8.4=1.3>1.2, 에너지 조건 J′b/Jtip=682/25=27>>3. 고강도 매트릭스(Km=1.1 MPa√m)에서도 연성 유지 가능함을 미시역학적으로 증명.

## Methods

- 배합: H시멘트 907 kg/m³, 실리카퓸 353, 규석분 251, 규사 635, W/C 0.15, HRWRA, PE 섬유(UHMWPE, ∅28 µm, 길이 12.7 mm, 강도 3000 MPa, 명목탄성 100 GPa/유효 30 GPa) 2 vol %. 양생: 수중 7일+90 °C 수중 5일+90 °C 공기 3일.
- 단섬유 인발 50개(정렬 30+경사 14°~45° 20개), 5 N 로드셀, 자유장 탄성신장 보정. 단일균열시험: 305×76×12.7 mm 노치 시편 6개, LVDT 2개.
- Km은 ASTM E399 노치빔, 배향분포는 형광현미경(Lee 등 2009 방법).

## Results

- τ0 산출: P_peak-L_e 직선 회귀 기울기 0.134에서 τ0=1.52 MPa, y절차 거의 0이라 Gd≈0. β 평균 0.003.
- snubbing: ln[P_peak(φ)/P_peak(0)]=fφ 피팅으로 f=0.59.
- 경사 경화 파라미터 m=386 N/(m-rad): 관측-모델 차이가 (u-u₀)에 선형 비례하는 패턴에서 도출.
- 이론 2D/3D 분포 가정 시에도 min(σ0)=9.4~10.2 MPa, J′b=468~581 J/m²로 두 조건 모두 충족.

## Related Notes

- [[ranade-2012-hshdc-poster]] — 본 논문의 재료 개요 포스터
- [[lee-2015-pe-cementless-composite-tensile]] — 본문 비교 대상(Ranade 등 HSHDC 인용) 사용자 그룹 후속
- [[morton-1976-effect-metal-wires-fracture-brittle-matrix-composites]] — snubbing 개념의 실험적 원전
- [[lin-1999-interface-property-characterization]] — 인발 3파라미터 모델 원전(본 논문이 확장)
- [[kanda-2006-saturated-psh-design-criteria-ecc]] — PSH 성능지수 프레임
- [[fiber-bridging-constitutive-law]] — 스케일링크 σ(δ) 모델
- [[pseudo-strain-hardening-criteria]] — 강도·에너지 조건
- [[wu-2023-pe-fiber-dosage-length-egc]] — PE 섬유 설계 축

