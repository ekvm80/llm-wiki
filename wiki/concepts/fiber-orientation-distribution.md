---
title: "Fiber Orientation Distribution (섬유 배향 분포)"
type: concept
source: "[[lu-2017-fiber-orientation-thickness]], [[kwon-2012-radial-flow-uhpfrcc-tensile]], [[kang-2008-fiber-orientation-impacts-on-the]]"
date: 2026-08-23
tags: [concept, fiber-orientation, orientation-factor, flow-induced-orientation, size-effect, micromechanics]
---

# Fiber Orientation Distribution (섬유 배향 분포)

## 정의

복합재료 내부에서 불연속 단섬유들이 공간상에서 배열되는 각도와 방향의 확률 통계적 분포. 복합재의 1차원(1D), 2차원(2D 평면 무작위), 3차원(3D 공간 무작위) 배향 상태 및 타설 흐름에 의해 결정된다.

## 물리적 의미 및 영향

섬유가 하중 방향에 평행하게 배열될수록 유효 브리징 응력($\sigma_0$)과 에너지 흡수 효율이 극대화된다. 반면 하중에 수직으로 배열된 섬유는 인장 브리징에 거의 기여하지 못한다.

1. **배향 계수 (Orientation Factor, $\eta_\theta$ / $\alpha_f$)**:
   - 1D 정렬 (하중 평행): $\eta_\theta = 1.0$
   - 2D 무작위 (얇은 판재, $t < L_f$): $\eta_\theta = \frac{2}{\pi} \approx 0.637$
   - 3D 무작위 (벌크 부재, $t \gg L_f$): $\eta_\theta = 0.500$
2. **벽면 효과 및 두께 크기효과 (Wall Effect & Thickness Effect)**:
   - 몰드 벽면이나 얇은 부재 경계면 근처에서는 섬유가 벽면을 관통할 수 없으므로 강제적으로 평면(2D)으로 정렬되는 경향이 발생함.
   - 따라서 부재 두께가 얇을수록 유효 배향 계수가 상승하여 인장 강도와 연신율이 증가하는 기하학적 크기 효과가 나타남.
3. **유동 유도 배향 (Flow-Induced Alignment)**:
   - 프레시 상태의 페이스트 레올로지와 타설 방향(예: 압출 성형, 관내 유동, 방사상 흐름)에 따라 전단 흐름을 따라 섬유가 회전·정렬됨 (Jeffery 방정식 준용).

## 관련 파라미터

- $\theta$: 섬유 축과 균열면 법선 벡터 사이의 각도 (rad, °)
- $p(\theta)$: 섬유 각도 확률밀도함수
- $\eta_\theta$: 평균 유효 배향 계수 ($\int \cos\theta \cdot p(\theta) d\theta$)
- $L_f, t$: 섬유 길이 및 부재 두께 (mm)

## 관련 노트

- [[lu-2017-fiber-orientation-thickness]] — 부재 두께별 섬유 배향 이론 및 크기효과 규명 (HKUST).
- [[kwon-2012-radial-flow-uhpfrcc-tensile]] — UHPFRCC 방사상 유동에 따른 배향 진화 해석 및 휨 예측.
- [[kang-2008-fiber-orientation-impacts-on-the]] — 타설 방향에 따른 섬유 배향성과 충격 저항성 평가.
- [[barnett-2010-assessment-of-fibre-orientation-in]] — 섬유 배향 평가 기법 및 이미지 분석.
- [[fiber-bridging-constitutive-law]] — 배향 분포 함수를 적분하여 브리징 곡선을 도출하는 기초 구성식.

- [[eik-2012-raytraced-images-fibre-orientation]] — POV-Ray 가상 레이트레이싱 기반 3차원 섬유 배향 ODF 계측오차 보정.

- [[ferrara-2011-casting-flow-induced-fibre-orientation]] — FR-SCC 타설 유동 유도 섬유 배향 및 30mm 초박판 슬래브 휨 변형경화.
