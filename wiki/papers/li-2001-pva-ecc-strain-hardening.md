---
title: "Tensile Strain-Hardening Behavior of PVA-ECC (Li, Wang & Wu, 2001)"
type: source_note
source: "sources/1st PVA_li_ACImat_01.pdf"
citation: "Li, V.C., Wang, S., Wu, C. Tensile strain-hardening behavior of polyvinyl alcohol engineered cementitious composite (PVA-ECC). ACI Materials Journal 98(6) (2001) 483-492."
date: 2026-08-22
tags: [pva-ecc, interface-tailoring, oiling-agent, complementary-energy, pddA, crack-width, scan-ocr]
---

# PVA-ECC의 인장 변형률연화 거동

## Summary

성능주도 설계 접근법(PDDA)에 따라 PVA 섬유 표면 처리(오일 코팅량 0.3/0.5/0.8 wt %)와 모래 함량(s/c 0.5~1.2)을 변인으로 PVA-ECC를 개발한 원전 논문. V_f 2.0 %에서 궁극변형률 4 % 초과·궁극강도 4.5 MPa 달성, 포화 다중균열과 균열폭 100 μm 이하를 확보. PVA-FRC와의 보완에너지 비교로 거동 차이의 근본 원인을 규명했다.

## Key Contributions

1. 계면 맞춤 설계의 실증: 미시역학 모델이 요구하는 목표 파라미터(G_d < 2 J/m², τ = 1.0~1.7 MPa)를 제조사(Kuraray REC 섬유)와 협력해 오일 코팅으로 구현. 코팅량 증가 → G_d·τ 감소 → J′_b 증가.
2. 보완에너지로 설명하는 FRC-ECC 차이(Table 4): RMU PVA-FRC는 J′_b = 0.5 J/m² < J_tip(3.2~4.7 J/m²)이라 준취성, PVA-ECC는 J′_b = 9.6~16.5 J/m² >> J_tip으로 strain-hardening. 동일 배합·유사 섬유 강도(1620 vs 1660 MPa)에서 결과가 정반대 — 계면이 전부를 결정함을 실증.
3. 최적 코팅량·모래 함량 조합: 0.3 % 코팅은 여유 부족으로 편차 큼(변형률 1.4~4.0 %), 0.8 % 코팅은 s/c = 1.0에서 변형률 5.2 %·강도 5.0 MPa. 고코팅일수록 높은 모래 함량 허용 — 비용·수축 제어 관점에서 0.8 % 권고.
4. SEM 파단면 분석: 돌출 섬유 길이가 코팅량 증가에 따라 증가(RMU < 0.2 mm vs 0.8 % 코팅 약 2 mm) — 섬유 파단 억제 확인.
5. 균열폭 안정화 현상 규명: 초기 급성장 후 1 % 변형률 전에 안정화, 안정 폭 60~100 μm. 오차함수 δ = A·erf(Bε) 피팅(A=57, B=2.32). 투수성이 균열폭 3제곱·염화물 투과가 지수 함수 의존임을 근거로 내구성 시사.

## Methods

PVA-REC(39 μm, 12 mm, 1620 MPa, E 42.8 GPa), V_f 2.0~2.5 %, w/c 0.45, 미세모래 110 μm. 직접인장 쿠폰 304.8×76.2×12.7 mm(MTS 25 kN, LVDT 게이지 180 mm), 비디오현미경 200배 균열 추적.

## Results

- 첫균열강도 2.6~3.9 MPa, 포화 다중균열 간격 2.5 mm(V_f 2.0)/1.8 mm(V_f 2.5).
- 하중 시 평균 균열개구 80~160 μm(탄성회복 고려 시 그 이하).

## Related Notes

- [[li-wu-1992-psh-conditions]]·[[li-wu-1992-psh-design-hpfrcc]]의 이론을 PVA 시스템으로 실행한 사례 — [[pseudo-strain-hardening-criteria]]의 실험적 기둥 문헌.
- [[li-2023-ecc-micromechanics-critical-review]] 리뷰가 인용하는 slip-hardening·화학결합 모델(Lin et al., Redon et al.) 적용의 대표 연구.
- [[sahmaran-2009-aggregate-type-size-ecc]]가 사용한 REC 1.2 % 오일 코팅 PVA와 동일 섬유 계열.
- [[nematollahi-2017-one-part-pe-shgc-micromechanics]]의 계면 측정법(Redon et al.)이 본 논문의 단일섬유 인발 절차와 계보.
- [[qiu-2016-fatigue-dependent-fiber-bridging-model]] — 본 논문의 PVA 계면(화학결합 G_d + slip-hardening)을 반복하중 조건으로 확장. 오일 코팅이 계면 특성을 바꾸는 논점의 피로 버전.

## 비고

- 스캔본 OCR 확보. Table 3 수치 일부 왜곡 가능 — 정밀 인용 시 원본 대조 권장.
