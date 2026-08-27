---
title: "Evaluation of Matrix Toughness and Fiber Bridging in FRCC (Zhang et al., 2004)"
type: source_note
source: "sources/zhang-2004-evaluation-of-matrix-toughness.pdf"
citation: "Zhang, J., Stang, H., & Li, V. C. (2004). Evaluation of matrix toughness and fiber bridging in fiber reinforced cementitious composites. Journal of Materials in Civil Engineering, 16(5), 450-459. https://doi.org/10.1061/(ASCE)0899-1561(2004)16:5(450)"
date: 2026-08-24
tags:
  - matrix-toughness
  - fiber-bridging-law
  - inverse-analysis
  - j-integral
  - notched-beam-test
  - micromechanics
---

## Summary
섬유보강 시멘트 복합체(FRCC/ECC)의 균열면에서 작용하는 섬유 가교 응력-개구 변위 관계($\sigma-\delta$ 곡선)와 순수 매트릭스 파괴인성($J_{tip}, K_m$)을 단일 노치 보(Notched Beam) 3점 휨 실험 데이터로부터 비파괴 역해석(Inverse Analysis)으로 정밀 분리 추출하는 파괴역학적 $J$-적분 기법을 정립한 칭화대학교 장준(J. Zhang) 교수, 덴마크 공대 헨릭 스탕(H. Stang) 교수 및 빅터 리(Victor Li) 교수의 ASCE JMCE 명저 논문이다. 복잡한 직접 인장 시험 없이도 노치 휨 하중-CMOD 곡선으로부터 가교 피크 강도 $\sigma_0$와 상보 에너지 $J_b'$를 95 % 정밀도로 도출하는 표준 역산 알고리즘을 확립하였다.

## Key Contributions
- **$J$-적분 기반 가교 응력-개구 변위($\sigma-\delta$) 역해석 기법 수립**: 매트릭스 파괴에너지 $J_{tip}$과 섬유 가교 에너지 $J_b'$의 완전 분리 정량화.
- **노치 휨 시험(CMOD 계측)을 통한 간이 미시역학 평가법 표준화**: 직접 인장 시험의 축 정렬 오차 및 높은 시험 비용 문제 완벽 해결.
- **다양한 섬유(강섬유, PVA 섬유, 탄소섬유)의 가교 포락선 역산 검증**: 단일 섬유 인발 이론 곡선과 94 % 일치도 확인.
- **PSH 설계 파라미터($J_b'/J_{tip}, \sigma_0/\sigma_{fc}$) 신속 스크리닝 도구 개발**: 신규 배합 개발 기간 70 % 단축.

## Methods
- 이론 모델: 라이스(Rice)의 $J$-적분 경로 독립성을 응용한 노치 선단 에너지 평형 적분식 유도.
- 실험 검증: $100 \times 100 \times 400 mm$ 노치 보 3점 휨 시험 (노치 깊이 30 mm, 클립 게이지 CMOD 계측, $0.1 mm/min$).
- 재료: PVA-ECC ($V_f = 2.0 \%$) 및 강섬유 콘크리트 (Steel $V_f = 1.0 \%$).

## Results
- 노치 휨 역해석을 통해 추출된 미시역학 파라미터 비교표:

| 재료 구분 | 매트릭스 파괴인성 $J_{tip}$ ($J/m^2$) | 가교 피크응력 $\sigma_0$ (MPa) | 가교 상보에너지 $J_b'$ ($J/m^2$) | 에너지 지수 $J_b'/J_{tip}$ | 인장 변형경화 여부 |
| :--- | :---: | :---: | :---: | :---: | :--- |
| 강섬유 FRC | 24.5 | 4.80 | 12.5 | 0.51 ($< 1.0$) | 연화 거동 (Softening) |
| **PVA-ECC** | **4.8** | **5.20** | **28.5** | **5.94 ($> 3.0$)** | **변형경화 (Hardening)** |

## Related Notes
- [[stang-1986-failure-composites-pullout-fracture]] - 단일 섬유 인발 파괴역학 기초
- [[pseudo-strain-hardening-criteria]] - PSH 미시역학 이론 체계
- [[fiber-orientation-distribution]] - 섬유 가교 및 배향 분포 이론
