---
title: "Morphological Grayscale Reconstruction in Image Analysis: Applications and Efficient Algorithms (Vincent, 1993)"
type: reference_book
source: "sources/vincent-1993-morphological-grayscale-reconstruction-in-image.pdf"
citation: "Vincent, L. (1993). Morphological grayscale reconstruction in image analysis: Applications and efficient algorithms. IEEE Transactions on Image Processing, 2(2), 176-201. https://doi.org/10.1109/83.217222"
date: 2026-08-24
tags:
  - image-processing
  - mathematical-morphology
  - grayscale-reconstruction
  - crack-detection
  - algorithm
---

## Summary
디지털 화상 처리 및 패턴 인식 분야에서 수학적 형태학(Mathematical Morphology)의 핵심 기법인 그레이스케일 모폴로지 재구성(Grayscale Reconstruction by Dilation/Erosion)의 고속 큐 기반 알고리즘(fast FIFO queue algorithm)과 응용 분야를 체계화한 컴퓨터 비전 분야의 기념비적 원전 논문이다. 마커(marker)와 마스크(mask) 영상을 이용한 무한 반복 팽창(geodesic dilation) 연산을 1 ~ 2회의 순차 스캔으로 수렴시키는 선구적 알고리즘을 제안하였다. 시멘트 복합재료의 미세균열 디지털 화상 검출, 공극 세분화(pore segmentation), 섬유 배향각 필터링의 핵심 영상 처리 원리로 널리 인용된다.

## Key Contributions
- **고속 모폴로지 재구성 큐(Queue) 알고리즘 개발**: 기존 반복 연산($O(N^2)$)을 선형 시간 복잡도($O(N)$)로 단축시켜 대용량 고해상도 영상의 실시간 분할 가능.
- **국소 극대점(h-maxima/h-minima) 및 돔(Dome) 추출 기법 정립**: 콘크리트 표면의 불균일한 조명 및 노이즈 속에서 미세 균열 및 공극의 경계를 왜곡 없이 정밀 추출.
- **워터셰드(Watershed) 분할의 과분할(over-segmentation) 방지 기법 제공**: 마커 기반 워터셰드 변환을 통해 복잡한 시멘트 미세구조 파티클 식별도 극대화.

## Related Notes
- [[lee-2010-fluorescence-discriminating-fibers-hybrid-ecc]] - 디지털 화상 처리를 이용한 섬유 분산도 정량 평가
- [[ndt-and-shm-of-cementitious]] - 콘크리트 표면 균열 영상 기반 비파괴 진단

