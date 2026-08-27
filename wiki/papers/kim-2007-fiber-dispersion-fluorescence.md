---
title: "Quantitative Evaluation of Fiber Dispersion of Fiber-Reinforced Cement Composites Using an Image Processing Technique (Kim, Lee, Kim & Kim, 2007)"
type: source_note
source: "sources/DJP0307N_이미지 프로세싱.pdf"
citation: "김윤용, 이방연, 김정수, 김진근. 영상처리기법을 이용한 섬유보강 시멘트 복합재의 섬유 분산성 정량 평가. 한국비파괴검사학회지 27(2) (2007) 148-156."
date: 2026-08-22
tags: [fiber-dispersion, image-processing, fluorescence, watershed-algorithm, pva-ecc, korean-paper, scan-ocr]
---

# 영상처리 기반 PVA-ECC 섬유 분산성 정량 평가

## Summary

형광 염색(GFP 유사 물질)된 PVA 섬유를 형광현미경+CCD 카메라로 촬영하고, 판별법(discriminant method)과 watershed segmentation 기반 개선 알고리즘으로 단면 내 섬유 분포를 정량 평가한 논문(KAIST 김진근 그룹). [[kim-2008-fiber-classification-and-detection-technique]]의 원전이 되는 연구.

## Key Contributions

1. 형광 이미징 파이프라인 확립: PVA 섬유가 시멘트 매트릭스와 명암 대비가 낮아 일반 광학 이미지로는 검출 곤란 → 공초점 형광으로 섬유를 녹색 점으로 관찰(Olympus BX51 현미경+CCD).
2. 4유형 형상 분류(Fig. 6~7): 검출된 섬유 객체를 packing density와 단위면적당 경계 길이 히스토그램으로 Type 1(원형 단면·수직 절단)~Type 4(경사 절단)로 분류 — 배향 정보까지 추출 가능.
3. Watershed segmentation 적용(Beucher 방법): 인접 섬유가 뭉쳐 보이는 다중 피크 이미지(Fig. 8)를 개별 섬유로 분할(Fig. 9) — 밀집 단면에서도 정확한 섬유 수 계수.
4. 통계 도구 결합: 검출 결과에 통계 처리를 더해 분산성 지표 산출.

## Methods

PVA-ECC 시편(13×36×20 mm), 절단면 연마 후 형광 촬영. 처리 흐름: RGB→grayscale→Otsu 이진화→잡음 제거→packing density 필터링→watershed 분할.

## Related Notes

- [[kim-2008-fiber-classification-and-detection-technique]] — 동일 데이터를 ANN 5유형 분류로 발전시킨 후속(JKCI 2008).
- [[lee-2005-enhanced-binarization-crack]] — Otsu·2단계 이진화 등 전처리 알고리즘 공유.
- [[choi-2016-fiber-orientation-uhpcc-post-cracking-tensile]] — 강섬유 UHPCC에서 같은 문제(배향·분포 정량화)를 이미지 해석으로 다룸.
- [[zhu-2019-3dp-ecc-ultra-high-ductility]] — SEM 섬유 수 카운트로 프린팅 정렬 입증(같은 질문의 다른 스케일).
- [[lee-2009-extruded-ecc-panel-fiber-distribution]] — 동일 그룹의 압출성형 ECC 패널 적용 후속
- [[kim-2007-slag-ecc-tensile-fiber-dispersion]] — 본 분산 평가법을 GGBS-ECC 재료 개발에 적용한 동일 그룹 후속

