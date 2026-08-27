---
title: "Enhanced Crack Width Measurement Using GPS Metadata of Drone Imagery (Kim et al., 2023)"
type: source_note
source: "sources/드론 촬영의 GPS 좌표 정보만을 활용한 자동 균열폭 측정 방법.pdf"
citation: "Kim, T., Seol, D., Kim, G., & Kim, H. (2023). Enhanced crack width measurement using GPS metadata of drone imagery. Journal of the Architectural Institute of Korea, 39(11), 243-250. https://doi.org/10.5659/JAIK.2023.39.11.243"
date: 2026-08-24
tags:
  - drone-imagery
  - gps-metadata
  - crack-width-measurement
  - image-processing
  - structural-health-monitoring
---

## Summary
접근이 어려운 고층 건축물 및 대형 콘크리트 구조물의 외관 안전 점검을 위해, 별도의 기준 마커나 레이저 거리 측정기 없이 드론 촬영 이미지에 내장된 GPS 좌표 메타데이터(위도, 경도, 고도)와 핀홀 카메라 모델만을 활용하여 촬영 거리를 자동 역산하고 픽셀당 실제 물리적 거리(Scale Factor, mm/pixel)를 환산하여 균열폭을 전자동으로 정밀 계측하는 알고리즘을 개발한 연구이다. 실물 건물 외벽 균열 측정 실험을 통해 균열 현미경 수동 실측치 대비 평균 오차 0.05 mm(정확도 90 % 이상)로 $0.2 mm$ 이상의 유해 구조 균열을 신속 판별함을 실증하였다.

## Key Contributions
- **GPS 메타데이터 기반 촬영 거리 자동 산정 알고리즘 수립**: 드론의 RTK-GPS 위치와 건물 3D 기준점 간의 유클리드 거리를 역산하여 스케일 팩터 자동 계산.
- **화상 처리 기반 균열 중심선 및 직교 균열폭 자동 추출 파이프라인 개발**: 적응형 이진화, 세선화(Thinning), 법선 벡터 거리 연산 통합.
- **현장 접근성 및 점검 효율 극대화**: 마커 부착 작업 없이 드론 비행 사진만으로 대면적 외벽 균열망의 정량적 안전 진단 구현.

## Methods
- DJI 드론 촬영 고해상도 RGB 영상 (4K 해상도, EXIF 메타데이터 추출).
- 컴퓨터 비전 알고리즘: 가우시안 필터링, Otsu 이진화, 형태학적 골격화(Skeletonization), 법선 방향 프로파일 폭 산정.
- 균열 현미경 실측 데이터와의 정밀도 비교 검증.

## Results
- 균열폭 측정 평균 절대 오차(MAE) $0.048 mm$, 결정계수 $R^2 = 0.94$ 달성.
- 시설물 안전점검 세부지침 상 보수 기준인 $0.2 mm$ 초과 균열을 95 % 이상의 신뢰도로 자동 검출.

## Related Notes
- [[ndt-and-shm-of-cementitious]] - 콘크리트 비파괴 검사 및 구조 건전성 모니터링
- [[crack-width-control]] - 콘크리트 구조물의 허용 균열폭 제어
