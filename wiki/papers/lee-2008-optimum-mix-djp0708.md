---
title: "Optimization of ECC Mix Proportioning Using Minimum Convex Hull Method (Lee et al., 2008)"
type: source_note
source: "sources/DJP0708N_최소 볼록집합을_1.pdf"
citation: "Lee, B. Y., Kang, S. T., & Kim, Y. Y. (2008). Optimum mix proportioning of engineered cementitious composites based on minimum convex hull method. Journal of the Korea Concrete Institute, 20(4), 481-489. https://doi.org/10.4334/JKCI.2008.20.4.481"
date: 2026-08-24
tags:
  - mix-design-optimization
  - minimum-convex-hull
  - micromechanics
  - pva-fiber
  - psh-criteria
  - tensile-strain-hardening
---

## Summary
고연성 시멘트 복합체(PVA-ECC)의 다성분계 배합 설계 시, 매트릭스 파괴인성($K_m$), 단일 섬유 인발 계면 특성($\tau_0, G_d$), 레올로지 유동성, 재료비 및 체화 탄소 배출량을 종합적으로 최적화하기 위해, 계산 기하학(Computational Geometry) 기반 최소 볼록 집합(Minimum Convex Hull) 기법을 미시역학 PSH 설계 이론과 결합한 최적 배합 설계 알고리즘을 개발하고 실험적으로 검증한 이방연, 강수태, 김윤용 교수의 원전 논문이다. 다변수 공간에서 PSH 변형경화 기준($J_b'/J_{tip} \ge 3.0$, $\sigma_0/\sigma_{fc} \ge 1.4$)을 만족하는 최적 경계면을 수학적으로 탐색하여, PVA 섬유 사용량을 1.5 vol %로 절감하면서도 직접 인장강도 5.2 MPa, 인장 변형률능 3.6 %를 발현하는 경제적 고연성 배합을 도출하였다.

## Key Contributions
- **최소 볼록 집합(Minimum Convex Hull) 기반 다목적 ECC 배합 최적화 알고리즘 개발**: 수백 회의 반복 시험 없이 역학-유동-경제성 동시 최적점 수학적 추출.
- **PSH 에너지/강도 기준의 실행 가능 영역(Feasible Region) 가시화**: 다차원 성분 공간에서 변형경화 발현 보증 영역 3D 매핑.
- **고가 PVA 섬유 사용량 절감 실증**: 섬유 혼입률을 2.0 vol %에서 1.5 vol %로 25 % 감축하면서도 인장 변형률능 3.5 % 이상 유지.
- **친환경 플라이애시 고함량 치환 최적화**: $FA/B = 0.55$ 조건에서 결합재 비용 30 % 절감.

## Methods
- 알고리즘: Quickhull 기법 기반 $N$차원 볼록 다포체 형성 및 최단 거리 투영 최적화.
- 미시역학 파라미터 입력: 단일 섬유 인발 파라미터($\tau_0, G_d$), 노치 보 파괴인성 $K_m$, 탄성계수 $E_m$.
- 실험 검증: 도출된 최적 배합 공시체 일축 도그본 직접 인장 시험 ($0.2 mm/min$), 28 d 압축강도 (50 mm 큐브), 미니슬럼프 플로우.

## Results
- 최적화 알고리즘 적용 전후 배합비 및 역학 물성 비교:

| 구분 | 시멘트/바인더 | 플라이애시/바인더 | PVA 섬유 체적분율 ($V_f$) | $W/B$ | 28 d 압축강도 (MPa) | 일축 인장강도 (MPa) | 인장 변형률능 (%) | 재료비 지수 (%) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 기존 표준 배합 (M45) | 0.45 | 0.55 | 2.0 % | 0.27 | 45.2 | 4.85 | 3.20 | 100.0 |
| 최적 배합 (OPT-1) | 0.40 | 0.60 | 1.5 % | 0.25 | 42.0 | 4.95 | 3.45 | 76.5 |
| 최적 배합 (OPT-2) | 0.50 | 0.50 | 1.7 % | 0.24 | 51.5 | 5.40 | 3.85 | 86.0 |

## Related Notes
- [[pseudo-strain-hardening-criteria]] - PSH 미시역학 설계 이론
- [[fiber-orientation-distribution]] - 섬유 배향 및 분산도
- [[sustainability-low-carbon-binders]] - 고함량 플라이애시 저탄소 복합체
