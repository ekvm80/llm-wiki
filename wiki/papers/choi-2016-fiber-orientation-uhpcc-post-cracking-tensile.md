---
title: "Predicting Post-Cracking Tensile Behavior of UHPCC by Fiber Orientation (Choi et al., 2016)"
type: source_note
source: "sources/Choi 등 - 2016 - Improvement in Predicting the Post-Cracking Tensile Behavior of Ultra-High Performance Cementitious.pdf"
citation: "Choi, J. I., Koh, K. T., Ryu, G. S., & Lee, B. Y. (2016). Improvement in predicting the post-cracking tensile behavior of ultra-high performance cementitious composites by considering fiber orientation. Materials, 9(10), 829. https://doi.org/10.3390/ma9100829"
date: 2026-08-24
tags:
  - uhpcc
  - fiber-orientation-coefficient
  - post-cracking-tensile
  - steel-fiber
  - micromechanical-model
  - image-processing
---

## Summary
초고성능 시멘트 복합체(UHPCC, 마이크로 직선 강섬유  = 2.0 vol \%$, 직경 0.2 mm, 길이 16.3 mm 및 19.5 mm 하이브리드 혼입)의 타설 방식(중앙 타설 무작위 배향 Method A 대 종방향 흐름 유도 정렬 Method B)에 따른 섬유 배향 분포 및 균열 후 직접 인장 거동(Post-Cracking Tensile Behavior)을 단면 디지털 화상 처리(Image Processing)와 단일 섬유 인발 가교 해석 모델로 한국건설기술연구원 및 전남대학교 최정일 박사, 이방연 교수 연구팀이 정밀 규명한 2016년 Materials 논문이다. 흐름 정렬 타설(Method B) 시 단위면적당 유효 섬유수( = 0.468 EA/mm^2$)와 배향 계수($\eta_	heta = 0.531, lpha_f = 0.715$)가 무작위 타설 Method A( = 0.227 EA/mm^2, \eta_	heta = 0.447, lpha_f = 0.645$) 대비 **2배** 증가하여, 극한 인장강도가 **7.59 MPa에서 14.92 MPa로 1.97배(96.6 %)** 대폭 증대됨을 실증하였다.

## Key Contributions
- **타설 방식(Method A vs Method B)에 따른 UHPCC 섬유 3차원 배향 분포 정량화**: 단면 광학 스캐닝 화상 처리를 통해 섬유수(910개 대 1872개) 및 배향각 분포 정밀 검출.
- **섬유 배향이 초기 균열강도 및 극한 인장강도에 미치는 영향 규명**: 초기 균열강도는 6.68 MPa 대 7.55 MPa로 소폭 증가한 반면, 극한 인장강도는 7.59 MPa에서 14.92 MPa로 2배 폭증.
- **Lee et al. 단일 섬유 인발 가교 모델 매개변수 완성**:  = 45 GPa, E_f = 200 GPa, 	au_{max} = 6.8 MPa, f = 1.6, \kappa = 1.8$ 적용.
- **부재 형상 및 타설 흐름을 고려한 실물 UHPCC 구조 인장 설계 지침 확립**: 타설 방향성에 따른 인장 성능 편차를 최소화하는 시공 표준화.

## Methods
- UHPCC 단위 배합 (kg/m³): 시멘트 771, 실리카퓸 193, 규사 848, 충전재( > 98 \%, 4 \mu m$) 231, 고성능감수제(WRA) 46.3, 물 160 (/B = 0.20$), 강섬유 156 ( = 2.0 \%$).
- 강섬유 사양: 직경 0.2 mm, 길이 16.3 mm (1.0 %) + 길이 19.5 mm (1.0 %), 인장강도 2500 MPa, 밀도 .5 g/cm^3$.
- 타설 방식:
  - **Method A**: 시편 중앙 타설 (무작위 3차원 배향 유도)
  - **Method B**: 시편 단부 타설 (길이방향 1차원 유동 정렬 유도)
- 시험: 도그본 직접 인장 시험 (zsh.4 mm/min$, CMOD 클립 게이지), 절단 단면 고해상도 디지털 화상 분석.

## Results
- 타설 방식별 UHPCC 직접 인장 시험 및 단면 섬유 화상 분석 비교 데이터 (Table 2, Table 3, Table 4, Table 6):

| 측정 항목 | Method A (중앙 무작위 타설) | Method B (흐름 정렬 타설) | 성능 변화율 (B vs A) |
| :--- | :---: | :---: | :---: |
| **초기 균열강도 (MPa)** | 6.68 ± 1.07 | **7.55 ± 1.48** | +13.0 % |
| **초기 균열 시 CMOD (mm)** | 0.007 ± 0.001 | 0.007 ± 0.001 | 동일 |
| **극한 인장강도 (MPa)** | **7.59 ± 0.217** | **14.92 ± 0.297** | **+96.6 % (1.97배)** |
| **극한 상태 CMOD (mm)** | 0.157 ± 0.130 | **0.369 ± 0.247** | **+135.0 % (2.35배)** |
| **검출 총 섬유 수 (개)** | 910 ± 84 | **1872 ± 48** | **+105.7 % (2.06배)** |
| **단위면적당 섬유 수 (/mm^2$)** | 0.227 ± 0.021 | **0.468 ± 0.040** | **+106.2 % (2.06배)** |
| **섬유 배향 계수 $\eta_	heta* | 0.447 | **0.531** | +18.8 % |
| **배향 계수 $lpha_f* | 0.645 | **0.715** | +10.9 % |

## Related Notes
- [[choi-2015-tensile-behavior-uhpc-fiber-combinations]] - UHPC 섬유 조합별 인장 거동
- [[fiber-orientation-distribution]] - 섬유 배향 분포 이론
- [[zerbino-2012-fiber-orientation-self-compacting-frc]] - 자기충전 FRC 섬유 배향
