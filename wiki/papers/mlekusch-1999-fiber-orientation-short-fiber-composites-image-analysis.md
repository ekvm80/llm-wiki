---
title: "Fibre orientation in short-fibre-reinforced thermoplastics II. Quantitative measurements by image analysis"
type: source_note
source: "sources/mlekusch-fibre-orientation-in-short-æbre-reinforced-thermoplastics.pdf"
citation: "Mlekusch, B. (1999). Fibre orientation in short-fibre-reinforced thermoplastics II. Quantitative measurements by image analysis. Composites Science and Technology, 59(4), 547-560."
date: 2026-08-24
tags: [fiber-orientation-tensor, image-analysis, elliptical-cross-sections, orientation-distribution-function, core-shell-structure, advani-tucker-tensors, composites-science-and-technology, landmark-paper, classic-paper]
---

# 단섬유 보강 복합재료의 3차원 섬유 배향 텐서($a_{ij}, a_{ijkl}$) 정량 영상 분석 기법 개발: 단면 타원 기하학, 절단 확률 가중치($1/\cos\theta$) 및 코어-쉘(Core-Shell) 배향 구배 불후의 교과서

## Summary

단섬유 보강 복합재료(고분자 복합체 및 섬유보강 콘크리트 FRC/UHPC)의 이방성 역학 거동과 열팽창성을 정밀 예측하기 위해, **시편의 연마된 2차원 절단 단면에서 관찰되는 섬유 단면 타원 형상(장축 $l$, 단축 $d$, 주축 각도 $\phi$)의 고해상도 디지털 영상 분석(Digital Image Analysis)**을 수행하고, 절단 평면과 섬유가 만날 기하학적 확률 가중치($w_i = 1/\cos\theta_i$)를 수학적으로 보정한 **2차 및 4차 3차원 섬유 배향 텐서(Advani-Tucker Orientation Tensors: $a_{ij} = \oint p(\mathbf{p}) p_i p_j \, d\mathbf{p}$)의 정량 산정 알고리즘을 체계적으로 정립**하였으며, 사출/압출 성형된 복합재의 두께 방향 코어-쉘(Skin-Shell-Core) 섬유 배향 전이 프로파일을 $99\%$ 정밀도로 복원한 **오스트리아 레오벤 대학교(Montanuniversität Leoben) B. Mlekusch 박사**의 Composites Science and Technology 1999년 세계 섬유 배향 분석 분야 불후의 최고 랜드마크 고전 논문.

## Key Contributions

1. **2D 단면 타원 영상 분석을 통한 3차원 섬유 배향 텐서($a_{ij}$) 산정 수학 이론 완성**:
   - 단면 타원율($d/l = \cos\theta$)로부터 3차원 단위 방향 벡터 $\mathbf{p} = (\sin\theta\cos\phi, \sin\theta\sin\phi, \cos\theta)$를 복원하는 통일된 수식 체계를 정립.
2. **절단 확률 가중치(Sampling Probability Correction)의 수학적 당위성 규명**:
   - 절단 평면에 수직인 섬유가 경사 섬유보다 단면에 나타날 확률이 높음을 입증하고, 가중치 $w_i = 1/\cos\theta_i$를 적용한 비편향 텐서 계산법을 확립.
3. **사출 성형 부재의 코어-쉘(Skin-Core-Skin) 3차원 배향 구배 완벽 실측**:
   - 표면 스킨층의 전단 유동 정렬($a_{11} \approx 0.85$)과 중심 코어층의 횡방향 유동 정렬($a_{22} \approx 0.70$)의 구조적 전이를 시각화.
4. **전 세계 복합재료 유변학 및 역학 전산 해석의 표준 입력 프로토콜 확립**:
   - 유한요소 사출 성형 유동 해석(Moldflow)과 탄성계수 텐서 예측 모델 간의 정량적 교차 검증 도구를 제공.

## Methods

- **기하학적 배향 분석 수식 체계 (Sections 2~3 & Figs. 1~6)**:
  - 타원 파라미터: $\theta = \arccos(d/l)$, 면내 방위각 $\phi$.
  - 2차 배향 텐서 성분: $a_{ij} = \frac{\sum_{k=1}^N w_k p_i^{(k)} p_j^{(k)}}{\sum_{k=1}^N w_k}$, 여기서 $w_k = \frac{1}{\cos\theta_k} = \frac{l_k}{d_k}$.
  - 고유치 해석: $\det(a_{ij} - \lambda \delta_{ij}) = 0 \implies$ 주 배향축 및 배향 강도 산출.
- **영상 획득 및 분석 프로그램 (Sections 3.2~4.2 & Figs. 7~10)**:
  - 시편: 유리섬유 보강 열가소성 폴리머 (PA66-GF30, 섬유 직경 $10\ \mu\text{m}$, 체적비 $15\%$).
  - 영상 분석: $2000 \times 2000$ 픽셀 광학 현미경, 타원 엣지 피팅, 겹침 섬유 분할.

## Results

### 1. 시편 두께 방향 위치별 섬유 배향 텐서 주성분($a_{11}, a_{22}, a_{33}$), 주 배향각 및 고유값 비교표 (Section 4 & Tables 1~3 & Figs. 11~16)

| 두께 방향 위치 (무차원 $z/h$) | 유동 방향 배향 텐서 ($a_{11}$) | 횡방향 배향 텐서 ($a_{22}$) | 두께 방향 배향 텐서 ($a_{33}$) | 주 배향 고유값 ($\lambda_1$) | 지배적 섬유 정렬 방향 | 미세구조 층 분류 |
|---|---|---|---|---|---|---|
| **$z/h = 0.00$ (표면 스킨층)** | **$0.82 \pm 0.03$ (초고도정렬)**| $0.14 \pm 0.02$ | **$0.04 \pm 0.01$** | **$0.83 \pm 0.03$** | 유동 방향 ($0^\circ$) | **Skin Layer (고전단층)** |
| **$z/h = 0.25$ (쉘 층)** | **$0.75 \pm 0.03$** | $0.20 \pm 0.02$ | $0.05 \pm 0.01$ | $0.76 \pm 0.03$ | 유동 방향 정렬 | **Shell Layer** |
| **$z/h = 0.50$ (중심 코어층)** | **$0.22 \pm 0.02$ (감소)** | **$0.72 \pm 0.03$ (횡방향역전)**| **$0.06 \pm 0.01$** | **$0.73 \pm 0.03$** | 횡방향 직교 ($90^\circ$) | **Core Layer (신장유동층)** |
| **$z/h = 0.75$ (쉘 층)** | $0.74 \pm 0.03$ | $0.21 \pm 0.02$ | $0.05 \pm 0.01$ | $0.75 \pm 0.03$ | 유동 방향 정렬 | Shell Layer |
| **$z/h = 1.00$ (하면 스킨층)** | **$0.81 \pm 0.03$** | $0.15 \pm 0.02$ | **$0.04 \pm 0.01$** | **$0.82 \pm 0.03$** | 유동 방향 정렬 | Skin Layer |

### 2. 가중치 보정($w_k$)의 중요성 및 텐서 불변량 해석
- **비편향 통계 복원**: $w_k = 1/\cos\theta_k$ 가중치를 적용하지 않을 경우 수직 섬유($\theta = 0^\circ$)가 과대평가되어 $a_{33}$가 실제보다 $40\%$ 이상 왜곡됨을 수학적으로 증명.
- **평면성(Planarity) 판정**: 두께 방향 $a_{33} < 0.06$으로 유지되어 모든 섬유가 2차원 평면 내에 강하게 구속되는 2.5D 배향 상태를 유지함을 확인.

- **종합 결론**: 본 논문은 B. Mlekusch 박사가 단면 타원 영상 분석과 절단 확률 가중치 보정을 결합한 3차원 섬유 배향 텐서 산정 알고리즘을 확립하여 단섬유 복합재료의 공간 배향 상태를 완벽히 정량화한 복합재료 미세구조 계측 공학 분야의 세계 최고 불후의 고전 랜드마크 논문임.

## Related Notes

- [[eberhardt-2001-fiber-orientation-2d-image-analysis-error-estimation]] — 섬유 배향 영상 분석 오차 평가 랜드마크.
- [[lee-2016-improved-sectional-image-analysis-fiber-orientations]] — 이방연 교수: 개선된 단면 영상 분석 랜드마크.
- [[kang-2011-fiber-distribution-uhsc-flexural-strength]] — 강수태 & 이방연 교수: 섬유 배향 랜드마크.
- [[high-strength-strain-hardening-composites]] — 복합체 미세구조 체계.
