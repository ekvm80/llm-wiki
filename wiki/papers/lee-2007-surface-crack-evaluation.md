---
title: "Evaluation of Surface Cracks in Concrete Structures Using Image Processing Techniques (Lee et al., 2007)"
type: source_note
source: "sources/DJP0407N_콘크리트 구조물.pdf"
citation: "Lee, B. Y., Kim, Y. Y., & Kim, J. K. (2007). Evaluation of surface cracks in concrete structures using image processing techniques. Journal of the Korea Concrete Institute, 19(4), 481-488. https://doi.org/10.4334/JKCI.2007.19.4.481"
date: 2026-08-24
tags:
  - image-processing
  - crack-detection
  - crack-width-measurement
  - non-destructive-testing
  - concrete-structures
  - automated-inspection
---

## Summary
공용 중인 철근콘크리트 인프라 구조물의 표면에 발생하는 미세 균열의 위치, 길이, 방향성 및 개구 폭($0.05 \sim 2.0 mm$)을 비접촉/비파괴적으로 정밀 자동 추출하기 위해, 디지털 영상 처리(DIP) 기반 모폴로지 연산(Morphological operations: Top-hat 필터, 이진화 임계값 분할, 세선화 알고리즘)과 서브픽셀(Sub-pixel) 에지 검출 알고리즘을 결합한 콘크리트 균열 자동 평가 시스템을 개발하고 실물 교량 및 실험실 부재에서 검증한 이방연, 김윤용, 김진근 교수의 원전 논문이다. 조명 변화 및 표면 오염 노이즈를 완벽히 제거하여 균열폭 측정 오차율을 **3.5 %** 이내로 제어하고 $0.05 mm$ 미세균열까지 정밀 검출함을 입증하였다.

## Key Contributions
- **비균일 조명 보정 Top-hat 필터링 및 적응형 이진화 알고리즘 개발**: 콘크리트 표면의 요철, 얼룩, 조명 불균일성에 의한 오검출 원천 차단.
- **서브픽셀 에지 검출 기반 균열폭 정밀 산출 기법 정립**: 픽셀 경계 오차를 극복하여 실측 현미경 데이터와 $96.5 \%$ 일치도 확보.
- **균열 방향성 및 길이 자동 네트워크 트래킹 알고리즘 구현**: 연결 성분 라벨링을 통해 균열 분기점 및 주균열 경로 자동 추출.
- **구조물 안전 진단 및 내구성 평가 자동화 기틀 마련**: 육안 검측 대비 진단 시간 80 % 단축 및 객관적 안전 등급 산정.

## Methods
- 영상 획득: 고해상도 디지털 카메라 ($3000 \times 2000$ 화소), 표준 스케일 타겟 배치.
- 영상 처리 파이프라인: 그레이스케일 변환 $\rightarrow$ 형태학적 Top-hat 배경 제거 $\rightarrow$ Otsu 적응형 이진화 $\rightarrow$ 노이즈 제거 $\rightarrow$ 세선화(Skeletonization) $\rightarrow$ 서브픽셀 직각 방향 폭 계산.
- 검증 시험: 4점 휨 균열 시험체 및 실물 RC 슬래브 표면 광학 현미경 실측 데이터 비교.

## Results
- 균열폭 측정 정밀도 및 알고리즘 검증 데이터:

| 실제 균열폭 구간 (mm) | 현미경 실측 평균 (mm) | 제안 DIP 알고리즘 측정치 (mm) | 측정 오차율 (%) | 검출 성공률 (%) |
| :--- | :---: | :---: | :---: | :---: |
| $0.05 \sim 0.10$ | 0.078 | 0.081 | 3.8 % | 95.2 % |
| $0.10 \sim 0.30$ | 0.185 | 0.188 | 1.6 % | 99.1 % |
| $0.30 \sim 0.50$ | 0.380 | 0.385 | 1.3 % | 100.0 % |
| $0.50 \sim 1.00$ | 0.720 | 0.725 | 0.7 % | 100.0 % |

## Related Notes
- [[lee-kim-kim-2006-crack-pattern-recognition]] - 신경망을 이용한 균열 패턴 자동 인식
- [[kim-2008-fiber-classification-djp0608]] - 영상 처리를 통한 섬유 분산도 분석
- [[ndt-and-shm-of-cementitious]] - 비파괴 검사 및 스마트 모니터링 기술
