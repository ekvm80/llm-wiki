---
title: "Strain-Hardening Mechanism (변형경화 메커니즘)"
type: concept
source: "[[li-wu-1992-psh-conditions]], [[li-2023-ecc-micromechanics-critical-review]]"
date: 2026-08-23
tags: [concept, strain-hardening, micromechanics, ecc, bridging-stress, constitutive-law]
---

# Strain-Hardening Mechanism (인장 변형경화 메커니즘)

## 정의

취성(brittle) 또는 준취성(quasi-brittle) 거동을 보이는 일반 콘크리트나 일반 섬유보강 콘크리트(FRC)와 달리, 인장 하중 하에서 첫 균열(first crack) 발생 이후에도 응력이 감소하지 않고 지속적으로 증가하면서 연성(ductility)과 변형 능력이 크게 확장되는 거동 메커니즘.

## 물리적 원리 및 조건

변형경화가 발현되기 위해서는 균열면을 가로지르는 섬유의 가교(bridging) 응력이 균열 개구 변위 증가에 따라 증가하는 **Slip-Hardening** 특성을 갖거나, 최대 브리징 응력($\sigma_0$)이 매트릭스의 최초 균열 발생 응력($\sigma_{fc}$)을 상회해야 한다.

1. **강도 조건 (Strength Criterion)**:
   $$\sigma_0 > \sigma_{fc}$$
   - 최초 균열이 발생한 단면에서 섬유 브리징 응력이 매트릭스 균열 강도보다 크므로, 외력이 증가할 때 기존 균열이 국지화(localization)되어 파괴되지 않고 다른 결함부에서 새로운 미세 균열이 연속적으로 개시됨.
2. **에너지 조건 (Energy Criterion)**:
   $$J'_b \ge J_{tip}$$
   - 균열선단 파괴에너지($J_{tip} \approx K_m^2 / E_m$)보다 섬유 가교 보완에너지($J'_b = \sigma_0 \delta_0 - \int_0^{\delta_0} \sigma(\delta) d\delta$)가 커야 정상상태(steady-state) 균열 진전이 유지됨.

## 변형경화와 변형연화의 차이

- **변형연화 (Strain-Softening)**: 균열 발생 직후 1개의 주균열로 응력이 집중되어 하중 지지력이 급격히 감소하며 파괴(일반 FRC의 거동).
- **변형경화 (Strain-Hardening / PSH)**: 수많은 미세 균열이 부재 전 구간에 걸쳐 분산 형성(다중균열)되며, 거시적으로 금속 재료와 유사한 항복 및 인장 소성 변형(2~8 % 변형률)을 발현.

## 관련 파라미터

- $\sigma_0$: 최대 섬유 브리징 응력 (MPa)
- $\delta_0$: 최대 브리징 응력에 도달할 때의 균열 개구 변위 (µm)
- $\sigma_{fc}$ / $\sigma_c$: 매트릭스 균열 강도 (MPa)
- $J'_b$: 상보적 에너지 (Complementary Energy, J/m²)
- $J_{tip}$: 균열선단 파괴인성 에너지 (J/m²)

## 관련 노트

- [[pseudo-strain-hardening-criteria]] — PSH 설계 기준 및 강도/에너지 여유 지수.
- [[fiber-bridging-constitutive-law]] — 섬유 브리징 구성법칙 $\sigma(\delta)$ 유도 및 모델링.
- [[li-wu-1992-psh-conditions]] — PSH 이론 조건 최초 정식화 원전.
- [[li-2023-ecc-micromechanics-critical-review]] — ECC 미시역학 및 변형경화 설계 총정리.
- [[kanda-2006-saturated-psh-design-criteria-ecc]] — 섬유 파단형 ECC의 포화 PSH 실용 설계 기준.

- [[felekoglu-2014-htpp-ecc-flowability-mixing]] — HTPP 섬유 ECC 점성 유동학 및 고속 전단 혼합을 통한 3.9% 연신율 구현.

- [[kong-2003-self-consolidating-pva-ecc-rheology]] — Victor Li 그룹: MFS-HPMC 구성유변학 제어 자기충전형 PVA-ECC 5% 인장연신율 원전.

- [[kong-2003-electrosteric-dispersion-self-consolidating-ecc]] — Victor Li 그룹: 정전기체적 안정화 고연성 자기충전형 PE-ECC 5.5% 연신율 원전.

- [[kim-2009-modified-fiber-bridging-curve-ecc-tensile]] — 전남대 이방연 교수: 플러그 뽑힘 임계 간격 및 영상처리 결합 수정 섬유가교곡선 원전.

- [[lee-2010-micromechanics-fiber-bridging-distribution-model]] — 이방연 교수: 실측 섬유 배향 분포 및 공간 밀도 결합 일반화 섬유 가교 구성 모델 원전.
- [[lee-2010-ecc-tensile-stress-strain-prediction-model]] — 이방연 교수: 화상 분석 섬유 분포 및 풀리력 기반 ECC 인장 응력-변형률 전주기 예측 모델 원전.
- [[lee-2010-fluorescence-discriminating-fibers-hybrid-ecc]] — 이방연 교수: 형광 분광 분석 및 다중분광 LDA 기반 이종 섬유 자동 식별 원전.
- [[li-1991-micromechanical-model-tension-softening-bridging]] — Victor Li: 스너빙 효과 및 슬립경화 계면 기반 인장연화/가교인성화 미시역학 모델 JMPS 최고 고전 원전.
- [[li-1995-matrix-design-for-pseudo-strain-hardening]] — Victor Li: PSH 복합체 매트릭스 파괴인성 상한선(Jtip <= 0.010 kJ/m^2) 및 골재비 설계 지침 원전.

- [[li-1994-shear-behavior-engineered-cementitious-composites]] — Victor Li: ECC 순수 전단변형경화(전단연성 4.0%) 원전.
- [[li-1996-fiber-diameter-variation-composite-properties]] — Victor Li: 섬유 직경 편차에 따른 가교응력 및 파괴에너지 미시역학 원전.
- [[li-2002-interface-tailoring-pva-ecc-oiling-agent]] — Victor Li: PVA-ECC 오일링 표면처리 계면 테일러링(인장연성 4.7%) 최고 랜드마크 원전.
- [[li-2012-tailoring-ecc-special-attributes-review]] — Victor Li: 특수 기능성 ECC 맞춤형 재설계 프레임워크 총설 원전.

- [[lin-1997-crack-bridging-slip-hardening-interfaces]] — Lin & Li: 슬립 경화 계면을 반영한 전주기 섬유 가교 구성모델 및 닫힌 형태 해석해 최고 고전 원전.
- [[li-1998-passive-smart-self-healing-ecc]] — Victor Li & 임윤묵: 중공 섬유 내장 수동형 스마트 자가치유(PSS-ECC) 원전.

- [[lu-2018-recycled-pet-fiber-shcc-tensile-impact]] — Lu & Yu & Leung: 재활용 PET 섬유 SHCC 정적 인장 및 샤르피 동적 충격 흡수 원전.

- [[maalej-1994-flexural-tensile-strength-ratio-in-ecc]] — Maalej & Victor Li: ECC 휨/인장 강도비 5.0배 증폭 및 중립축 상향 이동 메커니즘 최고 고전 원전.
- [[maalej-2005-hybrid-fiber-ecc-dynamic-tensile-projectile-impact]] — Maalej & Quek: 하이브리드 섬유 ECC 동적 인장 및 고속 발사체 방탄 저항성 원전.
- [[ma-2019-emulsified-asphalt-high-damping-ecc]] — Ma & Qian & Victor Li: 유화 아스팔트 혼입 고감쇠 EA-ECC 미시역학 설계 원전.

- [[marshall-1988-j-integral-steady-state-matrix-cracking]] — Marshall & Cox: J-적분 기반 정상상태 기지 균열 진전 및 가교 상보에너지 지배식 불후의 최고 고전 원전.
- [[mai-1979-asbestos-cement-strength-fracture-toughness]] — Yiu-Wing Mai: 단섬유 보강 시멘트 복합체 파괴인성 및 섬유 인발 마찰 에너지 소산 최고 고전 원전.

- [[felekoglu-2015-htpp-ecc-fiber-distribution-image-analysis]] — Felekoglu: BSE-SEM 화상분석 섬유분산계수 추출 및 HTPP-ECC 다중미세균열 제어 원전.
- [[lin-2023-hybrid-pe-pp-engineered-geopolymer-composite]] — Lin & Guo: PE-PP 하이브리드 섬유 EGC 인장 변형경화 및 균열 가교 구성 모델 원전.

