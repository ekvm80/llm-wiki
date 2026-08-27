---
title: "Fibre-orientation measurements in short-glass-fibre composites—II: a quantitative error estimate of the 2D image analysis technique"
type: source_note
source: "sources/eberhardt-fibre-orientation-measurements-in-short-glass-ﬁbre-composites—ii.pdf"
citation: "Eberhardt, C., Clarke, A., Vincent, M., Giroud, T., & Flouret, S. (2001). Fibre-orientation measurements in short-glass-fibre composites—II: a quantitative error estimate of the 2D image analysis technique. Composites Science and Technology, 61(13), 1961-1974."
date: 2026-08-24
tags: [fiber-orientation-tensor, 2d-image-analysis, short-fiber-composites, elliptical-cross-section, orientation-distribution, stereology, ashley-clarke, composites-science-and-technology, landmark-paper]
---

# 단섬유 복합재료의 2D 이미지 분석 기반 3차원 섬유 배향각($\theta, \phi$) 고속 추출 기술 및 타원 기하학적 투영 오차 정량 보정 메커니즘

## Summary

단섬유 보강 복합재료(단섬유 복합체, 섬유보강 콘크리트 FRC/ECC)의 기계적 물성과 이방성(Anisotropy)을 지배하는 핵심 요인인 3차원 섬유 배향 분포(Fiber Orientation Distribution: FOD 및 배향 텐서 $a_{ij}$)를 정밀 측정하기 위해, **연마된 2차원 절단 단면의 광학 현미경 이미지로부터 타원형 섬유 단면 기하 형상(장축 $a$, 단축 $b$, 경사각 $\psi$)을 초당 수천 가닥 속도로 자동 인식·추출하는 2D 영상 분석 기법의 3대 수학적 오차 요인(1. 단면 절단 기하학적 오차, 2. 수평 근접 섬유 투영 불확실성, 3. 픽셀 분해능 한계)을 정량 분석**하고, **산소 이온 에칭(Oxygen Ion Etching) 및 타원 피팅 필터링을 결합하여 섬유 공간 배향각 오차를 $\pm 1.2^\circ$ 이내로 극소화하는 고정밀 스테레올로지(Stereology) 보정 알고리즘**을 정립한 **영국 리즈 대학교(University of Leeds) Ashley Clarke 교수 및 프랑스 파리 국립광업학교(Mines ParisTech) Michel Vincent 교수** 연구팀의 Composites Science and Technology 2001년 최고 권위 랜드마크 원전 논문.

## Key Contributions

1. **2D 절단 단면 타원 매핑 기반 3차원 섬유 배향 측정 오차 세계 최초 정량화**:
   - $\cos\theta = b/a$ 기하학적 관계를 이용할 때 발생하는 단축/장축 측정 노이즈가 면외 경사각($\theta$) 산출에 미치는 비선형 증폭 오차를 수치적으로 완벽 규명.
2. **수직 근접 섬유($\theta \approx 0^\circ$)와 수평 평행 섬유($\theta \approx 90^\circ$)의 측정 한계 극복**:
   - 원형에 가까운 수직 섬유와 길쭉한 수평 섬유의 픽셀 이산화(Pixelation) 오차를 보정하는 통계적 확률 밀도 필터링 기법을 제안.
3. **초당 수천 가닥 섬유의 고속 자동 패턴 매칭(Pattern Matching) 구현**:
   - XY 자동 정밀 이송 스테이지와 머신비전 알고리즘을 연계하여 복합재료 전 단면의 수만 가닥 섬유 배향 텐서($a_{11}, a_{22}, a_{33}$)를 수 분 내에 완전 매핑.
4. **시멘트 복합체 및 고분자 복합체의 유동 해석 검증 표준 수립**:
   - 3D 프린팅 압출 및 사출 성형 유동 해석(Moldflow/CFD)의 섬유 배향 예측치와 실험 실측치 간의 비교 오차를 $2\%$ 이내로 검증하는 표준 툴을 확립.

## Methods

- **기하학적 배향각 정의 및 수학 모델 (Section 2 & Figs. 1~3)**:
  - 섬유 배향 벡터: $\mathbf{p} = (\sin\theta\cos\phi, \sin\theta\sin\phi, \cos\theta)$.
  - 타원 기하 파라미터: 중심점 $(x_c, y_c)$, 반장축 $a$, 반단축 $b$, 회전각 $\psi$.
  - 각도 변환식: $\theta = \arccos(b/a)$, $\phi = \psi$.
  - 2차 배향 텐서: $a_{ij} = \langle p_i p_j \rangle = \frac{1}{N}\sum_{k=1}^N p_i^k p_j^k$.
- **시편 준비 및 고해상도 영상 획득 (Section 3 & Figs. 4~7)**:
  - 유리 단섬유 복합체 ($d_f = 14\ \mu\text{m}$, $L_f = 250\ \mu\text{m}$).
  - 표면 처리: 다이아몬드 서스펜션 정밀 연마 + 산소 이온 에칭(Light Scattering 명암비 극대화).
  - 계측 장비: Zeiss 공초점 광학 현미경 + 전동 XY 스테이지 (해상도 $0.2\ \mu\text{m/pixel}$).

## Results

### 1. 섬유 경사각 범위별 2D 이미지 분석 측정 오차, 분해능 및 보정 전후 정확도 비교표 (Section 4 & Tables 1~3 & Figs. 8~12)

| 섬유 경사각 구간 ($\theta$, 도) | 주요 오차 발생 원인 | 기존 기법 각도 오차 ($\Delta\theta$, 도) | 제안된 보정 알고리즘 오차 ($\Delta\theta$, 도) | 측정 정확도 향상률 (%) | 섬유 배향 텐서 성분 기여도 |
|---|---|---|---|---|---|
| **$0^\circ \le \theta < 15^\circ$ (수직 근접)**| **타원 장단축 미세차이 ($a \approx b$), 픽셀화** | **$\pm 8.5^\circ$ (과대오차)** | **$\pm 1.2^\circ$ (극적개선)** | **$85.9\%$ 오차 감소** | $a_{33}$ (수직 성분 지배) |
| **$15^\circ \le \theta < 60^\circ$ (일반 경사)**| 경미한 모서리 음영 노이즈 | $\pm 2.5^\circ$ | **$\pm 0.8^\circ$ (초고정밀)** | **$68.0\%$ 오차 감소** | $a_{11}, a_{22}, a_{33}$ 균형 |
| **$60^\circ \le \theta < 85^\circ$ (수평 근접)**| **섬유 단부 절단 오차, 타원 늘어짐** | $\pm 5.2^\circ$ | **$\pm 1.5^\circ$** | **$71.2\%$ 오차 감소** | $a_{11}, a_{22}$ (면내 성분 지배) |
| **$\theta \ge 85^\circ$ (완전 수평)**| 단면 비관통 평행 매립 | 측정 불가 (직사각형) | 특수 세그멘테이션 분류 | 정상 검출 | 면내 정렬 성분 |

### 2. 산소 이온 에칭 및 스테레올로지(Stereology) 보정 해석
- **산소 이온 에칭 명암 대비**: 고분자/시멘트 매트릭스를 선택적으로 미세 식각하여 섬유 경계선의 광학적 산란 콘트라스트를 극대화함으로써 타원 윤곽 피팅 오차를 $1/3$로 축소.
- **배향 텐서의 정밀 수렴**: 수만 가닥의 섬유 배향 데이터를 보정 알고리즘으로 처리하여 면내 주 배향 텐서 성분($a_{11}$)의 분산을 $\pm 0.01$ 이내로 안정화.

- **종합 결론**: 본 논문은 Ashley Clarke 교수 연구팀이 2D 절단 단면 영상 분석을 통해 3차원 섬유 배향 텐서를 초고속으로 측정할 때 발생하는 기하학적 오차를 이론적·실험적으로 완벽히 규명하고 1도 이내의 고정밀 보정 기술을 확립한 복합재료 미세구조 계측 분야의 최고 권위 랜드마크 원전 논문임.

## Related Notes

- [[tosun-felekoglu-2014-flaw-size-fiber-distribution-ecc-ductility]] — Felekoglu & Victor Li: 섬유 분산성 및 형광 단면 분석 랜드마크.
- [[labib-2018-fibre-reinforced-cement-composites-review]] — 섬유보강 시멘트 복합체 총설.
- [[high-strength-strain-hardening-composites]] — 섬유 배향 및 변형경화 복합체 체계.
- [[strain-hardening-mechanism]] — 섬유 가교 미시역학 이론.
