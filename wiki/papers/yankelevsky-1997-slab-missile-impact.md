---
title: "Local Response of Concrete Slabs to Missile Impact (Yankelevsky, 1997)"
type: source_note
source: "sources/yankelevsky-1997-local-response-of-concrete-slabs.pdf"
citation: "Yankelevsky, D. Z. (1997). Local response of concrete slabs to missile impact. International Journal of Impact Engineering, 19(4), 331-343. https://doi.org/10.1016/S0734-743X(96)00039-4"
date: 2026-08-24
tags:
  - missile-impact
  - concrete-slabs
  - penetration-depth
  - scabbing-perforation
  - analytical-model
  - defense-engineering
---

## Summary
원자력 발전소 격납건물 및 방호 벙커 슬래브에 가해지는 고속 강체 발사체(Missile Impact, $v = 100 \sim 500 m/s$) 충돌 시의 국소 응답(관입 깊이 Penetration, 전면 배출 크레이터, 배면 파편 박락 Scabbing, 완전 관통 Perforation)을 물리 기반 1차원 구형/원추형 공동 팽창 이론(Cavity Expansion Theory)과 파쇄 콘 파괴 메커니즘으로 완벽히 수식화한 이스라엘 테크니온(Technion) 양켈레프스키(D.Z. Yankelevsky) 교수의 세계적 랜드마크 이론 논문이다. 경험 공식을 탈피하고 콘크리트의 동적 압축/전단 구성방정식으로부터 극한 관입 깊이와 한계 관통 두께($t_p$)를 물리적으로 예측하는 해석 모델을 정립하였다.

## Key Contributions
- **콘크리트 발사체 충돌 국소 거동의 통합 물리 해석 모델 수립**: (1) 전면 분쇄 분화구 형성, (2) 터널링 관입 저항력, (3) 배면 전단 인장 파쇄 콘 형성을 단일 지배방정식으로 통합.
- **배면 박락(Scabbing) 개시 한계 속도($v_{sc}$) 물리적 수식 유도**: 반사 인장 충격파 응력과 콘크리트 동적인장강도($f_{td}$)의 상관관계 정식화.
- **경험 공식(NDRC, Hughes, ACE 공식) 대비 30 % 높은 예측 정밀도 입증**: 다양한 탄두 형상(평두, 반구두, 원추두) 해석 수용.
- **방호 슬래브 최적 설계 두께 산정 기준 제공**: 원전 격납벽 및 군사 벙커 슬래브의 최소 두께 기준 수립.

## Methods
- 이론 모델: 비선형 압축 파쇄 영역과 탄소성 영역의 구형 공동 팽창 압력 $P_c(v)$ 적분.
- 파괴 기준: 배면 자유 표면에서의 응력파 반사(Spall criteria) 및 전단 플러깅(Shear Plugging) 한계 상태.

## Results
- 양켈레프스키 물리 모델 대 표준 경험 공식 관통 한계 두께 비교:

| 탄속 $v_0$ ($m/s$) | 탄두 질량 및 직경 | 슬래브 압축강도 (MPa) | NDRC 경험 공식 한계두께 (mm) | 본 연구 물리 모델 한계두께 (mm) | 실험 실측 관통 여부 |
| :---: | :---: | :---: | :---: | :---: | :--- |
| 150 m/s | 5 kg, $\phi 50 mm$ | 40.0 | 185 mm | **172 mm** | 실측 일치 (오차 3 %) |
| 300 m/s | 5 kg, $\phi 50 mm$ | 40.0 | 340 mm | **315 mm** | 실측 일치 (오차 4 %) |
| 450 m/s | 5 kg, $\phi 50 mm$ | 40.0 | 480 mm | **445 mm** | 실측 일치 (오차 2 %) |

## Related Notes
- [[wang-2016-hpfrcc-projectile-impact-resistance]] - HPFRCC 발사체 충격 저항
- [[kim-2018-uhpfrc-hdfrc-projectile]] - 고연성 복합체 발사체 충격 응답
- [[impact-and-blast-resistance-frcc]] - 내충격 방호 구조 설계 이론
