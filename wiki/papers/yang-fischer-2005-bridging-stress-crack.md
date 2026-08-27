---
title: "Investigation of the Fiber Bridging Stress-Crack Opening Relationship of Fiber Reinforced Cementitious Composites (Yang & Fischer, 2005)"
type: source_note
source: "sources/yang-fischer-2005-bridging-stress-crack.pdf"
citation: "Yang, J., Fischer, G. Investigation of the fiber bridging stress-crack opening relationship of fiber reinforced cementitious composites. Proc. Int'l RILEM Workshop on HPFRCC in Structural Applications, Honolulu, Hawai'i (2005.5.23~26). University of Hawaii."
date: 2026-08-22
tags: [fiber-bridging, stress-crack-opening, simulation, multiple-cracking, strain-hardening, hpfrcc, rilem-workshop]
---

# FRC의 섬유 브리징 응력-균열개구 관계 규명

## Summary

Hawaii대 Yang·Fischer가 RILEM HPFRCC 워크숍(2005)에서 발표한 논문. 실험으로 얻은 섬유 브리징 응력-균열개구 곡선 σ_B(δ)를 입력으로 사용해 ECC의 변위제어 일축인장 거동을 시뮬레이션하는 방법을 제안했다. 변형경화 단계의 다중균열 현상을 재현하며, 균열폭·간격 등 다중균열 특성을 예측할 수 있음을 보였다.

## Key Contributions

1. **σ_B(δ) 기반 다중균열 시뮬레이션 프레임**: 실험 브리징 곡선의 삼선형(tri-linear) 근사로 상하한을 정의하고, 4개 파라미터(첫균열 강도 σfc, 첨두 가교응력 σpeak, 첨두 개구변위 δ1, 가교 강성 Kf)가 실험 범위 내에서 무작위 변동한다고 가정.
2. **재료 변수 자연 반영**: 매트릭스 결함 크기·섬유 인장강도·계면 특성·섬유 배향의 변동성이 파라미터 범위 설정에 내재 — 별도 확률 모델 없이 실험 데이터만으로 variability 포착.
3. **구조 부재 확장 가능성**: 시뮬레이션 개념이 ECC 구조부재 설계 절차에 통합될 수 있음을 제시.

## Methods

- 실험으로 얻은 σ_B(δ) 곡선의 상·하한을 삼선형 모델로 근사(Fig. 4a).
- Zhang & Stang[10]의 강섬유 콘크리트 휨 예측 모델을 ECC 변형경화로 확장.
- 4파라미터 무작위 샘플링 → 변위제어 일축인장 시뮬레이션 → 다중균열 양상 도출.

## Results

- 시뮬레이션이 다중균열과 변형경화 거동을 재현, 균열폭·간격 산출 가능.
- 초기 결과 유망 — 실험 검증 후속 예정.

## Related Notes

- [[fiber-bridging-constitutive-law]] — σ_B(δ) 이론 체계
- [[yang-2008-fiber-bridging-constitutive-law-of-ecc]] — 후속 수치해 모델
- [[pseudo-strain-hardening-criteria]] — PSH 조건
- [[wu-1992-snubbing-bundling-crack-spacing]] — 다중균열 간격 이론
- [[wang-2004-tailoring-preexisting-flaws-ecc]] — 결함 설계
