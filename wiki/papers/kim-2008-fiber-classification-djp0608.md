---
title: "Classification of PVA Fiber Dispersion in SHCC Cross-Sectional Images (Kim et al., 2008)"
type: source_note
source: "sources/DJP0608N_PVA-ECC단면 이미지의.pdf"
citation: "Kim, Y. Y., Lee, B. Y., Bang, J. W., & Kong, J. S. (2008). Classification of PVA fiber dispersion in SHCC cross-sectional images using digital image processing. Journal of the Korea Concrete Institute, 20(3), 365-372. https://doi.org/10.4334/JKCI.2008.20.3.365"
date: 2026-08-24
tags:
  - fiber-dispersion
  - digital-image-processing
  - pva-fiber
  - cross-sectional-image
  - automated-classification
  - spatial-point-pattern
---

## Summary
고연성 시멘트 복합체(PVA-SHCC)의 절단 단면에서 수만 개의 미세 PVA 섬유(직경 39 µm)의 공간 분포 밀도와 분산 계수($\alpha_{disp}$)를 고정밀도로 자동 계측하기 위해, 형광 염료 함침 에폭시 연마 단면의 자외선(UV) 광학 현미경 화상에 디지털 영상 처리(Digital Image Processing, DIP) 알고리즘(적응형 이진화, 워터셰드 분할, 형상 인자 필터링)을 적용한 자동 섬유 식별 및 공간 점 패턴 통계 분류 기법을 개발하고 검증한 김윤용, 이방연, 방진욱, 공정식 교수의 원전 논문이다. 기포 및 매트릭스 결함과 실제 섬유를 $98 \%$ 이상의 정확도로 자동 분리하여 섬유 분산도 평가의 객관성과 신속성을 확보하였다.

## Key Contributions
- **DIP 기반 PVA 섬유 단면 자동 추출 알고리즘 완성**: 형광 명암도 임계값 자동 설정 및 인접 섬유 겹침 분리 필터 개발.
- **섬유 분산 계수($\alpha_{disp} = \exp[-\sqrt{(\sum(x_i - 1)^2)/k}]$) 정밀 산출 기법 확립**: 단면을 $k$개 격자로 분할하여 국소 밀도 편차를 정량 통계화.
- **기포 및 미세 균열의 오인식률 2 % 미만 달성**: 면적, 원형도(Circularity), 종횡비(Aspect ratio) 기하학적 형상 파라미터 필터링 적용.
- **혼합 방식별 섬유 분산 품질 검증 도구 확립**: 슬러리 선혼합 방식이 건식 투입 대비 $\alpha_{disp}$를 0.55에서 0.85로 55 % 향상시킴을 정량 입증.

## Methods
- 시험체: PVA-SHCC ($V_f = 2.0 \%$, $W/B = 0.45$, 규사 치환).
- 시편 준비: 절단 시편 진공 건조 후 형광 염료 혼합 에폭시 진공 함침, 6단계 다이아몬드 서스펜션 연마 ($1 \mu m$ 조도).
- 영상 획득 및 처리: UV 광학 현미경 ($100 \times$ 배율, 고해상도 CCD 카메라), MATLAB 영상 처리 서브루틴 개발.

## Results
- 영상 처리 단계별 식별 정확도 및 분산 계수 분석:

| 혼합 방식 | 투입 순서 | 단위면적당 섬유 수 ($EA/mm^2$) | 수동 계측 일치도 (%) | 분산 계수 $\alpha_{disp}$ | 복합체 인장 변형률능 (%) |
| :--- | :--- | :---: | :---: | :---: | :---: |
| 방식 A | 건식 분말 + 섬유 동시 투입 | 125 | 96.8 | 0.58 | 2.10 |
| 방식 B | 슬러리 혼합 후 섬유 분산 투입 | 168 | 98.5 | **0.86** | **4.65** |
| 방식 C | 과다 믹싱 (섬유 뭉침 발생) | 98 | 94.2 | 0.42 | 1.15 (조기 파단) |

## Related Notes
- [[lee-2010-fluorescence-discriminating-fibers-hybrid-ecc]] - 형광 분석법을 이용한 섬유 분산도 계측
- [[fiber-orientation-distribution]] - 섬유 배향 및 분산 이론
- [[pseudo-strain-hardening-criteria]] - PSH 미시역학 이론
