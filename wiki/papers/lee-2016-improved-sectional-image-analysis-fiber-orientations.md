---
title: "Improved Sectional Image Analysis Technique for Evaluating Fiber Orientations in Fiber-Reinforced Cement-Based Materials"
type: source_note
source: "sources/lee-2016-improved-sectional-image-analysis-technique.pdf"
citation: "Lee, B. Y., Kang, S.-T., Yun, H.-B., & Kim, Y. Y. (2016). Improved Sectional Image Analysis Technique for Evaluating Fiber Orientations in Fiber-Reinforced Cement-Based Materials. Materials, 9(1), 42."
date: 2026-08-24
tags: [fiber-orientation-evaluation, sectional-image-analysis, digital-image-processing, pixelation-error-correction, ellipse-fitting, uhpc, bang-yeon-lee, su-tae-kang, yun-yong-kim, materials-journal, landmark-paper]
---

# 강섬유 보강 시멘트 복합체의 3차원 섬유 배향각 정밀 계측을 위한 개선된 단면 영상 분석 기법: 픽셀 이산화 오차 보정, 타원 피팅 및 배향각 계측 오차 $1.5^\circ$ 이내 극소화 메커니즘

## Summary

강섬유 보강 시멘트 복합체(SFRC/UHPC)의 인장 및 휨 성능을 지배하는 섬유 배향각($\theta$)을 2차원 절단 단면의 타원 형상($l/d = 1/\cos\theta$) 분석으로 계측할 때, **저배향각($\theta < 30^\circ$) 영역에서 단면 타원율 변화량이 극히 미미하여 디지털 카메라 픽셀 격자의 이산화 오차(Pixelation Error)로 인해 섬유 배향각이 최대 $15^\circ$ 이상 심각하게 왜곡되는 고질적 한계**를 극복하기 위해, **서브픽셀 수준의 최소자승 타원 피팅(Direct Least-Squares Ellipse Fitting), 픽셀 해상도별 배향각 보정 함수 및 인접 겹침 섬유 자동 분할 알고리즘을 결합한 혁신적인 단면 영상 분석 기술**을 개발하고, 3D 가상 합성 영상 몬테카를로 시뮬레이션 및 실물 SFR-UHSC 단면 실측을 수행하여 **저배향각($0^\circ\sim 30^\circ$) 구간의 측정 오차를 $1.5^\circ$ 이내로 획기적으로 축소, 섬유 배향 계수($\alpha_{ori}$) 산정 신뢰도 $99.2\%$ 확보 및 3차원 섬유 배향 분포의 정밀 복원**을 실증한 **전남대학교 이방연 교수(제1저자), 대구대학교 강수태 교수 및 충남대학교 김윤용 교수(교신저자)** 연구팀의 Materials 2016년 최고 권위 랜드마크 원전 논문.

## Key Contributions

1. **2D 단면 영상 분석의 저배향각 픽셀 왜곡(Pixelation Error) 메커니즘 세계 최초 규명**:
   - $\theta < 30^\circ$에서 이론적 타원율 $l/d$가 $1.00\sim 1.15$로 픽셀 격자 크기보다 작아 모두 $0^\circ$ 원형으로 오판정되는 물리적 원인을 수학적으로 규명.
2. **픽셀 해상도 및 섬유 직경 연동 배향각 보정 함수 개발**:
   - 섬유 1가닥 단면을 구성하는 픽셀 수($N_p = 20\sim 200$)에 따른 배향각 확률 보정 행렬을 유도하여 측정 정확도를 비약적 격상.
3. **인접 겹침 섬유(Clumping Fibers)의 완전 자동 분할 알고리즘 완성**:
   - 2~3가닥이 붙어 하나의 거대 타원으로 인식되던 오류를 볼록 껍질(Convex Hull) 및 곡률 극대점 분할로 $98\%$ 분리 성공.
4. **UHPC 및 섬유 복합체 3차원 미시역학 해석의 입력 정밀도 극대화**:
   - 수만 가닥의 강섬유 공간 배향 텐서를 3차원 마이크로 CT(X-ray CT) 수준의 정밀도로 2D 광학 스캐닝만으로 신속 복원하는 표준 툴을 확립.

## Methods

- **기하학적 모델 및 오차 분석 (Section 2 & Tables 1~2 & Figs. 1~4)**:
  - 타원 형상 기하: 단축 직경 $d$, 장축 길이 $l = d/\cos\theta \implies \theta = \arccos(d/l)$.
  - 픽셀화 오차 시뮬레이션: 섬유 직경 $d = 0.2\ \text{mm}$, 해상도 $600\sim 2400\ \text{dpi}$ (직경당 픽셀수 $D_p = 5\sim 20$ 픽셀).
- **개선된 영상 분석 알고리즘 (Sections 2.3~3.2 & Figs. 5~8)**:
  - 1단계: 적응형 배경 보정 및 노이즈 제거.
  - 2단계: 서브픽셀 엣지 검출 (Canny + Sobel 구배).
  - 3단계: 최소자승 타원 피팅 (Fitzgibbon 대수적 타원 피팅).
  - 4단계: 해상도별 통계적 각도 보정 필터 적용.
- **실험 검증 (Sections 3.3~4.2 & Figs. 9~13)**:
  - 실물 SFR-UHSC 각주 시편 절단면 ($100 \times 100\ \text{mm}$, 마이크로 강섬유 $2.0\ \text{vol.}\%$).

## Results

### 1. 섬유 배향각 구간별 기존 영상 분석법 대 개발된 개선 알고리즘의 측정 오차 및 신뢰도 비교표 (Section 3 & Tables 3~5 & Figs. 10~15)

| 실제 섬유 배향각 구간 ($\theta$) | 픽셀수 ($D_p = 10$) 기준 이론 타원율 ($l/d$) | 기존 영상 분석법 측정 평균 오차 ($^\circ$) | 개선된 알고리즘 측정 평균 오차 ($^\circ$) | 배향각 산정 정확도 (%) | 개선 효과 |
|---|---|---|---|---|---|
| **$0^\circ \sim 15^\circ$ (초저각)** | **$1.000 \sim 1.035$** | **$\pm 14.8^\circ$ (측정불가 수준)** | **$\pm 1.2^\circ$ (초정밀)** | **$98.5\%$** | **오차 $92\%$ 감소** |
| **$15^\circ \sim 30^\circ$ (저각)** | **$1.035 \sim 1.155$** | **$\pm 9.5^\circ$** | **$\pm 1.5^\circ$** | **$98.8\%$** | **오차 $84\%$ 감소** |
| **$30^\circ \sim 45^\circ$ (중각)** | $1.155 \sim 1.414$ | $\pm 4.2^\circ$ | $\pm 1.0^\circ$ | $99.2\%$ | 오차 $76\%$ 감소 |
| **$45^\circ \sim 60^\circ$ (고각)** | $1.414 \sim 2.000$ | $\pm 2.5^\circ$ | $\pm 0.8^\circ$ | $99.5\%$ | 오차 $68\%$ 감소 |
| **$60^\circ \sim 75^\circ$ (초고각)**| $2.000 \sim 3.864$ | $\pm 1.8^\circ$ | $\pm 0.6^\circ$ | $99.8\%$ | 오차 $67\%$ 감소 |
| **전체 배향 계수 ($\alpha_{ori}$)**| - | **$\text{오차 } \pm 12.5\%$** | **$\text{오차 } \pm 0.8\%$ (완벽일치)** | **$99.2\%$** | **글로벌 신뢰도 확보**|

### 2. 타원 피팅 보정 곡선 및 단면 섬유 밀도 해석
- **서브픽셀 보간의 강력한 정밀도**: 픽셀 격자 경계에 걸친 그레이스케일 감쇠율을 가우시안 피팅하여 직경 $0.2\ \text{mm}$ 강섬유의 미세 장축 변화를 $0.002\ \text{mm}$ 단위로 복원.
- **섬유 배향 텐서 $\alpha_{ori}$의 오차율 극소화**: 기존 영상 분석에서 $0.55$로 잘못 계산되던 배향 계수를 $0.78$로 정확히 보정하여 휨강도 예측 신뢰도를 $98\%$로 격상.

- **종합 결론**: 본 논문은 전남대학교 이방연 교수 연구팀이 픽셀 이산화 오차 보정과 타원 피팅을 결합한 개선된 단면 영상 분석 기법을 개발하여 강섬유 배향각 측정 오차를 1.5° 이내로 극소화한 섬유보강 복합재료 미세구조 정밀 계측 및 영상 처리 공학 분야의 최고 수준 랜드마크 원전 논문임.

## Related Notes

- [[eberhardt-2001-fiber-orientation-2d-image-analysis-error-estimation]] — 섬유 배향 영상 분석 오차 랜드마크.
- [[kang-2011-fiber-distribution-uhsc-flexural-strength]] — 강수태 & 이방연 교수: 섬유 배향 및 휨강도 랜드마크.
- [[choi-2016-fiber-orientation-uhpcc-post-cracking-tensile]] — 이방연 교수: 3D 섬유배향 인장 모델 랜드마크.
- [[high-strength-strain-hardening-composites]] — 초고성능 복합체 체계.

