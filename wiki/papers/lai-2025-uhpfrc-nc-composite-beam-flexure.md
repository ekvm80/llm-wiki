---
title: "UHPFRC-NC Composite Beam Flexural Strength and Toughness Performance (Lai & Lee, 2025)"
type: source_note
source: "sources/Lai 및 Lee - 2025 - UHPFRC-NC Composite Beam Flexural Strength and Toughness Performance.pdf"
citation: "Lai, Y.-C., Lee, M.-H. UHPFRC-NC composite beam flexural strength and toughness performance. Journal of Advanced Concrete Technology 23 (2025) 64-78. doi: 10.3151/jact.23.64"
date: 2026-08-22
tags: [uhpc, uhpfrc, composite-beam, flexural-design, equivalent-stress-block, toughness, steel-fiber, taiwan-group]
---

# UHPFRC-NC 합성보의 휨 강도 및 인성 성능

## Summary

인장측에 UHPFRC(UC), 압축측에 소량의 강섬유만 넣은 무철근 일반콘크리트(NC)를 조합한 합성보를 대상으로, 3단계(항복·최대·균열) 비선형 등가응력블록 해석해를 제안하고 UC 두께와 NC 압축강도에 대한 민감도 해석으로 단면 설계 절차를 확립한 실험·이론 연구(대만 그룹, 철근을 전혀 배근하지 않은 점이 특징). UC 두께 증가에 따른 모멘트 증가는 3 cm를 넘으면 둔화하며, 적절히 설계된 NC-UC2 합성보는 순수 UC1 단면과 비견되는 휨 성능을 확보한다.

## Key Contributions

- 복합 단면의 중립축 위치(NC층/UC층)별로 닫힌형 휨 모멘트 식을 유지한 비선형 등가응력블록 모델. 인장 블록은 Nguyen 등(2017)의 세 일반화 응력곡선, 압축 블록은 Momin 등(2021)의 선형 응력분포 모델을 통합하고 보정계수 A=0.405를 적용.
- UC 두께 0~7.5 cm 민감도 해석: Mpc는 두께 3 cm에서 순수 NC 대비 4.7배까지 증가하지만 이후 증가율이 급감하는 최적 두께 구간 존재. 중립축은 NC 압축강도가 높아 UC 두께와 무관하게 1 cm 이내 NC층에 유지되다가 전 단면 UC가 되면 상승.
- NC 압축강도(27.5/54.9/82.4 MPa) 민감도: 강도 증가가 모멘트를 높이지만 일정 수준을 넘으면 효과 미미. 과잉 품질로 인한 재료 낭비 방지의 설계 근거 제시.
- 실험 검증: NC-UC2의 L/150 잔류강도 저감률 68.9 %로 5개 실험체 중 가장 작고, 피크하중 31.5 kN으로 순수 UC1(23.5 kN)을 웃돌아 고가의 순수 UHPFRC 단면을 합성 단면으로 대체할 수 있음을 정량 입증.

## Methods

- NC: 포틀랜드 1종, w/c 0.35, 강섬유(직경 0.5 mm, 길이 30 mm) 0.5 vol %. UC: w/c 0.25, 시멘트 450 kg/m³의 절반을 GGBS로 치환, 실리카퓸 225 kg/m³, 규사 약 940 kg/m³, 미세 스트레이트 강섬유(직경 0.2 mm, 길이 12.5 mm) 1 %(UC1)·2 %(UC2).
- ASTM C1609 준거 3등분점 재하 휨시험, 30×7.5×7.5 cm 보, 변위속도 0.004 mm/s, MTS 100 ton, LVDT 변위 계측. 합성보는 UC 30 mm+NC 45 mm로 성형.
- 재료 물성: 압축강도 NC 79.5 MPa, UC1 135.9 MPa, UC2 137.7 MPa. 인장 피크강도 fpc는 각각 2.65, 6.19, 9.98 MPa(섬유량 2 배에서 약 1.6 배 증가).

## Results

- 피크하중: NC 13.2 kN, NC-UC1 16.8 kN, UC1 23.5 kN, NC-UC2 31.5 kN, UC2 35.8 kN. 항복부터 피크까지의 인성은 NC-UC2가 0.43 kJ에서 10.9 kJ(25.4배), UC2는 0.53 kJ에서 16.1 kJ(30.4배) 증가.
- L/150 처짐에서 잔류강도 저감률: NC 75.0 %, NC-UC1 68.0 %, UC1 70.9 %, NC-UC2 68.9 %, UC2 70.5 %. 합성 설계가 잔류강도 개선에 유효.
- 균열 양상: UC2 기반 실험체가 UC1 대비 현저히 많은 미세균열 발생(다중균열). NC-UC2는 45° 사인 균열로 휨 항복 이전 전단 파괴가 선행해 전단 검토 필요성 시사.
- 탄성해 대비 비선형 해는 항복점에서 낮게, 피크·균열 모멘트에서 높게 예측해 변형경화 구간의 강도 증진을 반영.

## Related Notes

- [[ge-2023-steel-precast-uhpc-composite-beams-flexural-behavior]] — UHPC 프리캐스트 합성보 축의 선행 연구
- [[du-2025-steel-uhdcc-composite-bridge-deck-bending]] — 부모멘트 구간에서의 초고인성 복합 단면 거동
- [[cao-2025-bamboo-scrimber-concrete-composite-beams-uhpc-ecc]] — 친환경 인장재료 치환 관점의 합성보
- [[choi-2015-tensile-behavior-uhpc-fiber-combinations]] — UHPC 인장거동의 섬유 조합 의존성
- [[abbas-2016-uhpc-mechanical-performance-durability-sustainability]] — UHPFRC 역학·내구 데이터베이스
- [[afgc-2013-uhpfrc-recommendations]] — UHPFRC 휨 단면 설계 프레임(프랑스 권고)
- [[fiber-bridging-constitutive-law]] — 인장 경화 구간을 지배하는 섬유 가교 응력
- [[pseudo-strain-hardening-criteria]] — UC층 다중균열(변형경화) 발현 조건
- [[li-2024-uhpc-rc-beam-acoustic-emission]] — 동일 배치 구조(UHPC 인장층 합성보)의 AE 모니터링 연구
- [[wu-2018-shear-strength-precast-hpfrcc-form]] — 프리캐스트 HPFRCC 영구거푸집 합성보 전단
- [[xu-2023-steel-uhpc-negative-moment-beams]] — 강재-UHPC 합성보 음모멘트 휨 비교
- [[zhao-2023-steel-uhpc-composite-beams-negative-moment-behavior]] - 같은 강재-UHPC 합성보 축의 음모멘트 편으로, 양모멘트 휨 해석과 상호 보완.
- [[zeng-2022-frp-grid-reinforced-uhpc-composite-plates-flexure]] - FRP 그리드-UHPC 판 수준의 휨 거동으로, 합성보 스케일로 확장되기 전 재료-부재 단계 연구.
- [[bang-2014-effects-of-infilled-concrete-and]] — 같은 층상 단면 비선형 해석을 PHC 말뚝 충전 보강에 적용한 사례(P-M 상호작용 포함).

