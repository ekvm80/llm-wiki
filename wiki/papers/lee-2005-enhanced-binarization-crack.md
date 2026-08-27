---
title: "Development of Image Processing for Concrete Surface Cracks by Employing Enhanced Binarization and Shape Analysis Technique (Lee, Kim & Kim, 2005)"
type: source_note
source: "sources/DJP0105N_개선된 이진화.pdf"
citation: "이방연, 김윤용, 김진근. 개선된 이진화 기법 및 형태 분석 기법을 이용한 콘크리트 표면 균열 영상처리 기법 개발. 한국콘크리트학회 논문집 17(3) (2005) 361-368."
date: 2026-08-22
tags: [image-processing, crack-detection, binarization, morphology, crack-width, korean-paper, scan-ocr]
---

# 개선된 이진화·형태 분석 기반 콘크리트 표면 균열 영상처리

## Summary

디지털 카메라로 촬영한 콘크리트 표면 균열 이미지에서 균열폭·길이·방향을 자동 계측하는 알고리즘을 개발한 논문(KAIST 김진근 그룹, 사용자 석박사 시절). 모폴로지 음영보정, 2단계 이진화, 형태 분석의 3축 구성. MATLAB 코드로 구현해 육안·고전 방법 대비 정확성 검증.

## Key Contributions

1. 모폴로지 음영 보정(shading correction): erosion/dilation/opening/closing 연산과 structuring element로 조명 불균일 제거 — 균열 검출의 전처리 표준 확립(Fig. 2).
2. 2단계 이진화(enhanced binarization): 전역(Otsu)+국소 이진화를 순차 적용, 첫 단계에서 놓친 미세균열을 2차 추출 후 병합 — 국소 이진화의 packing density 지표를 수정(modified packing density)해 성능 향상(Fig. 3~4).
3. 균열폭 계산 알고리즘: thinning으로 중심선 추출 후 중심-경계 최소거리 필터(40×40 픽셀 창)로 폭 산정(Fig. 6~8).
4. 균열 길이·방향: labeling 후 좌표 추적 방식, 방향은 tan⁻¹ 기반 산정(Eq. 2).
5. 실측 검증: NIKKOR AF-S 28~70 mm 렌즈 디지털 카메라, 픽셀당 0.12 mm 해상도.

## Methods

MATLAB 구현. 흐름: 이미지 획득 → 음영보정 → 1차(전역+국소+잡음제거)/2차(전역+국소) 균열 추출 → 1차균열 소거·병합 → 형태분석(thinning/boundary/labeling) → 폭·길이·방향 계산.

## Related Notes

- [[kim-2008-fiber-classification-and-detection-technique]] — 같은 그룹의 후속(형광 이미지 섬유 검출 ANN). 본 논문의 이진화·형태분석 기반이 전제.
- [[lee-kim-kim-2006-crack-pattern-recognition]] — 동일 시리즈의 패턴인식 확장(DJP0205N).
- [[choi-2016-fiber-orientation-uhpcc-post-cracking-tensile]] — 이미지 기반 섬유 분석의 다른 축.

## 비고

- 스캔본 OCR(kor+eng). 한국어 본문 일부 왜곡 — 수치 인용 시 원본 대조 필요.

