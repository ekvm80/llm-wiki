---
title: "Fiber-Matrix Interface Properties of High-Strength ECC (Zhang et al., 2021)"
type: source_note
source: "sources/zhang-2021-fiber-matrix-interface-properties-of.pdf"
citation: "Zhang, Q., Zhang, Z., & Li, V. C. (2021). Fiber-matrix interface properties of high-strength engineered cementitious composites. Cement and Concrete Composites, 118, 103970. https://doi.org/10.1016/j.cemconcomp.2021.103970"
date: 2026-08-24
tags:
  - high-strength-ecc
  - fiber-matrix-interface
  - single-fiber-pullout
  - chemical-bond
  - frictional-bond
  - micromechanics
---

## Summary
압축강도 100 MPa 급 고강도 시멘트 매트릭스에서 섬유의 조기 파단(Fiber Rupture)을 방지하고 초고연성 인장 변형경화 성능을 구현하기 위해, 초미세 실리카퓸 및 실란 표면 개질을 적용한 단일 초고분자량 PE 섬유 및 PVA 섬유의 화학적 부착 에너지($G_d$), 마찰 전단응력($\tau_0$), 슬립 경화 계수($\beta$) 및 스눕 계수($f$)를 단일 섬유 인발 시험(Single Fiber Pullout Test)과 미시역학 수치 해석으로 미시간 대학교 빅터 리(Victor Li) 교수 연구팀이 규명한 연구이다. 실리카퓸 최적 패킹을 통해 소수성 PE 섬유의 계면 마찰응력을 **1.85 MPa**, 슬립 경화 계수를 **0.82**로 유도하여 고강도 매트릭스에서 섬유 파단 없이 **8.5 %**의 인장 변형률능을 달성하였다.

## Key Contributions
- **초고강도 매트릭스($f_c > 100 MPa$) 전용 섬유 계면 미시역학 모델 완성**: 매트릭스 강도 증가에 따른 $\tau_0$ 급상승과 섬유 파단 한계 경계선 정립.
- **PE 섬유 계면 슬립 경화($\beta = 0.82$) 메커니즘 규명**: 인발 슬립 진행 시 섬유 표면 미세 피브릴화(Fibrillation)가 추가 기계적 마찰 인터로킹 유도.
- **화학 부착 $G_d$와 마찰응력 $\tau_0$의 최적 설계비 제시**: $G_d \le 1.5 J/m^2$, $\tau_0 \le 2.0 MPa$ 조건 도출.
- **고강도 변형경화 복합체 배합 최적화 지침 확립**: 안정적 다중 미세균열 유도 보장.

## Methods
- 매트릭스: OPC + 실리카퓸(15 %) + 미세 슬래그(20 %), $W/B = 0.20$, 28 d 압축강도 105 MPa.
- 섬유: Spectra PE 섬유 ($d_f = 12 \mu m, L_f = 12 mm, f_t = 3000 MPa$) 및 PVA 섬유 ($d_f = 39 \mu m, L_f = 12 mm$).
- 시험: 정밀 서보 마이크로 단일 섬유 인발 시험기 ($0.1 mm/min$, 매립 깊이 $L_e = 1 \sim 6 mm$, 인발 각도 $\theta = 0°, 30°, 60°$).

## Results
- 섬유 종류 및 매립 각도별 단일 섬유 계면 파라미터 측정 데이터:

| 섬유 종류 | 매립 각도 ($\theta$) | 화학 부착 $G_d$ ($J/m^2$) | 마찰 전단응력 $\tau_0$ (MPa) | 슬립경화계수 $\beta$ | 스눕 계수 $f$ | 인발 파괴 모드 |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| PE 섬유 | 0° (직각) | 0.05 | **1.85** | **0.82** | - | **완전 인발 (Pullout)** |
| PE 섬유 | 30° (경사) | 0.08 | **2.45** | **0.95** | 0.82 | **완전 인발 (고에너지 소산)** |
| PVA 섬유 | 0° (직각) | 2.85 | 3.20 | 0.15 | - | 45 % 섬유 조기 파단 |

## Related Notes
- [[stang-1986-failure-composites-pullout-fracture]] - 단일 섬유 인발 파괴역학 기초
- [[pseudo-strain-hardening-criteria]] - PSH 미시역학 이론 체계
- [[high-strength-strain-hardening-composites]] - 고강도 복합 구조 설계
