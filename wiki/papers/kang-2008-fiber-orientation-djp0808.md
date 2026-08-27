---
title: "Effect of Fiber Orientation on Mechanical Properties of SHCC (Kang et al., 2008)"
type: source_note
source: "sources/DJP0808N_섬유의 방향성이_1.pdf"
citation: "Kang, S. T., Lee, B. Y., Kim, J. K., & Kim, Y. Y. (2008). The effect of fiber orientation on the mechanical properties of strain hardening cementitious composites. Journal of the Korea Concrete Institute, 20(4), 491-499. https://doi.org/10.4334/JKCI.2008.20.4.491"
date: 2026-08-24
tags:
  - shcc
  - fiber-orientation
  - 2d-image-analysis
  - pva-fiber
  - direct-tensile-strength
  - strain-hardening
---

## Summary
변형경화형 시멘트 복합체(PVA-SHCC)의 타설 방향, 거푸집 경계 조건 및 레올로지 유동성에 의해 형성되는 섬유의 3차원 공간 배향각 분포가 일축 직접 인장 변형경화 포락선, 초기 균열 강도, 극한 인장강도 및 인장 변형률능에 미치는 영향을 고해상도 평탄 단면 화상 분석(2D Image Analysis)과 직접 인장 시험으로 정밀 규명한 강수태, 이방연, 김진근, 김윤용 교수의 대표 원전 논문이다. 인장 응력 축에 대한 섬유의 평균 배향각이 $0°$(평행)에 가까울수록 섬유 가교 계수가 $\cos\theta = 1.0$으로 수렴하여, $90°$(직각) 배향 시편 대비 직접 인장강도가 2.4배, 인장 변형률능이 **3.8배** 향상되는 뚜렷한 이방성(Anisotropic) 가교 메커니즘을 정량 정식화하였다.

## Key Contributions
- **단면 화상 타원 피팅(Ellipse Fitting) 기반 섬유 3차원 배향각 정밀 측정 기법 확립**: 절단 단면 내 수천 개 섬유의 장축/단축 비로부터 3차원 공간 배향각 $\theta$ 역산.
- **섬유 배향 분포 계수($\alpha_{\theta} = \int \cos\theta p(\theta) d\theta$)와 인장 변형경화의 상관식 도출**: $\alpha_{\theta}$가 0.45에서 0.82로 증가함에 따라 변형률능이 $1.2 \% \rightarrow 4.5 \%$로 비약적 확장.
- **타설 유동 방향 제어를 통한 복합체 역학 성능 극대화 방안 제시**: 압출 및 1방향 슬립폼 타설 공정의 이론적 설계 기틀 확립.

## Methods
- 배합: 보통 포틀랜드 시멘트 + 플라이애시 ($FA/C = 0.3$), $W/B = 0.45$, 규사 ($d_{max} = 0.25 mm$).
- 섬유: Kuraray REC15 PVA 섬유 ($V_f = 2.0 \%$, 직경 39 µm, 길이 12 mm, 인장강도 1600 MPa).
- 시편 제작 변수: 유동 평행 방향 타설(Parallel, $0°$), 유동 직각 방향 타설(Perpendicular, $90°$), 랜덤 3D 타설(Random).
- 시험: 도그본 직접 인장 시험 ($80 \times 30 \times 13 mm$, 변위 속도 $0.2 mm/min$), 에폭시 함침 연마 단면 고배율 광학 화상 분석.

## Results
- 타설 방향별 섬유 배향 특성 및 일축 인장 역학 물성:

| 타설 조건 | 배향 분포 계수 $\alpha_{\theta}$ | 초기 균열 강도 (MPa) | 극한 인장강도 (MPa) | 극한 인장 변형률능 (%) | 평균 균열 수 (개) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Parallel ($0°$) | 0.82 | 3.85 | 5.85 | 4.65 | 45 |
| Random (3D) | 0.58 | 3.20 | 4.25 | 2.85 | 26 |
| Perpendicular ($90°$) | 0.35 | 2.45 | 2.48 (연화 경향) | 1.20 | 8 |

## Related Notes
- [[fiber-orientation-distribution]] - 섬유 배향 및 분산도 이론
- [[lee-2010-fluorescence-discriminating-fibers-hybrid-ecc]] - 형광 분석을 통한 섬유 분산도 계측
- [[pseudo-strain-hardening-criteria]] - PSH 미시역학 이론
