---
title: "Image-processing technique to detect carbonation regions of concrete sprayed with a phenolphthalein solution"
type: source_note
source: "sources/choi-2017-image-processing-technique-to-detect-carbonation.pdf"
citation: "Choi, J.-I., Lee, Y., Kim, Y. Y., & Lee, B. Y. (2017). Image-processing technique to detect carbonation regions of concrete sprayed with a phenolphthalein solution. Construction and Building Materials, 154, 451-461."
date: 2026-08-23
tags: [carbonation-depth, image-processing, phenolphthalein, otsu-binarization, convex-hull, green-intensity, ndt, user-group]
---

# 페놀프탈레인 분무 콘크리트 단면의 탄산화 영역 자동 검출을 위한 2단계 영상처리 기법

## Summary

철근콘크리트 구조물의 잔존 내구수명 평가에 직결되는 콘크리트 탄산화 깊이 측정에서, 페놀프탈레인 용액 분무 후 육안 자 측정 방식이 갖는 측정자의 주관성, 낮은 재현성 및 골재-페이스트 경계 판독 오차를 극복하기 위해, 자홍색(Magenta)의 보색인 녹색 명도(Green Intensity) 추출, Otsu 기반 이진화 및 모폴로지 연산(1차 검출)과 볼록 껍질(Convex Hull) 기하학적 필터링(2차 검출)을 결합한 2단계 자동 영상처리 알고리즘을 개발하고 다양한 실물 콘크리트 단면 영상으로 정밀 검증한 연구 (전남대 이방연 교신저자, 대전대 이윤, 충남대 김윤용 공저). 제안된 알고리즘은 탄산화 영역과 비탄산화 영역 사이의 불명확한 경계 및 골재 색상 간섭을 완전히 배제하고, 비탄산화 중심부 내부의 미세 공극·골재 오탐지를 100 % 제거하여 고정밀 탄산화 경계 윤곽선(Contour Profile) 및 평균 탄산화 깊이를 완전 자동 추출함을 실증하였다.

## Key Contributions

1. **녹색 명도(Green Intensity) 채널 추출을 통한 색상 대비 극대화**:
   - 페놀프탈레인 용액이 미탄산화 알칼리 영역($\text{pH} > 9.2$)과 반응하여 발색하는 자홍색(Magenta, RGB 중 R+B)의 보색인 **Green 채널**을 분리하여, 회색조(Grayscale) 변환 대비 탄산화 영역과 비탄산화 영역의 명도차(Contrast)를 비약적으로 증대.
2. **2단계(Primary + Secondary) 하이브리드 검출 파이프라인 구축**:
   - **1차 검출 (Primary Detection)**: Otsu 최적 임계값 이진화 $\rightarrow$ 여집합 반전 $\rightarrow$ 비탄산화 영역 내부 홀 메우기(Hole Filling) $\rightarrow$ 외곽 잔여 잡음 노이즈 제거.
   - **2차 검출 (Secondary Detection)**: 콘크리트 탄산화가 외표면에서 중심부로 확산되는 물리적 특성(비탄산화 코어는 볼록 다각형을 형성)에 착안하여, QuickHull 알고리즘으로 비탄산화 영역의 **볼록 껍질(Convex Hull)**을 계산하고 내부 오탐 객체를 완전 소거.
3. **골재 색상 간섭 및 주관적 판독 오차 완전 배제**:
   - 시멘트 페이스트와 유사한 회색조 골재가 비탄산화 영역 내부에 박혀 있어도 볼록 껍질 내부로 자동 판정하여 탄산화 영역으로 오인하는 오류를 원천 차단.
   - 측정자 간 편차 없이 0.1 mm 단위의 정밀한 탄산화 깊이 프로파일을 신속히 획득 가능.

## Methods

- **영상 획득 및 전처리**:
  - 페놀프탈레인 1 % 에탄올 용액을 분무한 콘크리트 파단면/절단면 디지털 컬러 사진 촬영 (RGB 컬러 이미지).
  - 단위 픽셀 길이(mm/pixel) 스케일 캘리브레이션.
  - RGB 채널에서 Green Intensity 평면 추출: $I_G(x,y)$.
- **1차 검출 알고리즘 (Binarization & Morphology)**:
  1. Otsu의 분산 최대화 알고리즘으로 최적 임계값 $T_{opt}$ 자동 산출 및 이진화.
  2. 여집합(Complementary) 이미지 변환 후 모폴로지 침식/팽창 및 홀 메우기(Flood-fill 기반).
  3. 경계 외곽 화이트 노이즈 픽셀 제거.
- **2차 검출 알고리즘 (Convex Hull Geometry)**:
  1. 1차 검출된 비탄산화 영역 경계 좌표 추출.
  2. QuickHull 알고리즘을 적용하여 최소 외접 볼록 다각형(Convex Hull Polygon) $H(P)$ 생성.
  3. 다각형 내부($\text{Point-in-Polygon}$)에 존재하는 블랙 픽셀(탄산화로 오탐된 영역)을 강제 비탄산화 픽셀로 변환.
  4. 최종 탄산화 경계선 중첩(Composite Overlay) 및 깊이 산정.
- **검증 데이터베이스**:
  - 문헌 및 현장 코어 채취 콘크리트 단면 영상(다양한 골재 크기, 거친 파단면, 모서리 탄산화 등) 4종 대상 육안 판독 대조 검증.

## Results

### 1. 알고리즘 단계별 검출 정확도 및 노이즈 제거 효과

| 처리 단계 | 이미지 상태 | 주요 처리 기능 | 잔여 오탐지(False Positive) |
|---|---|---|---|
| **입력** | 원본 RGB 컬러 | 페놀프탈레인 자홍색 분무면 | 배경 및 조명 불균일 |
| **전처리** | Green 채널 분리 | Magenta 보색 대비 극대화 | 그레이스케일 대비 분별력 향상 |
| **1차 검출 (Otsu)** | 흑백 이진화 | 명도 기반 1차 분할 | 비탄산화 영역 내 골재/기공 12개 오탐 |
| **1차 검출 (Hole Fill)** | 형태학적 보정 | 비탄산화 내부 고립 영역 병합 | 경계 부근 잔류 잡음 존재 |
| **2차 검출 (Convex Hull)** | **기하학적 볼록 껍질** | **코어 내부 오탐 골재 100 % 제거** | **오탐지 완전 소거 (Clean Boundary)** |
| **최종 출력** | 중첩 경계 합성 | 연속 탄산화 깊이 프로파일 추출 | **육안 검측선과 완벽 일치** |

- **골재 영향 평가**: 비탄산화 영역 내부의 골재는 완벽하게 비탄산화 영역으로 보정되었으나, 탄산화 경계선에 걸친 페이스트 색상의 골재는 미세 오차가 발생할 수 있으므로 골재 경계 검출 필터의 보완 가능성 제시.
- **실용성**: 복잡한 파단면에서도 수 초 이내에 정밀 탄산화 깊이 및 면적을 정량화하여 구조물 진단 신뢰성을 비약적으로 향상시킴.

## Related Notes

- [[da-2009-concrete-carbonation-test-variation-sources]] — 콘크리트 탄산화 시험 시 오차 요인 및 표준화 방안.
- [[djp1612-aas-carbonation]] — 알칼리 활성 슬래그 모르타르의 탄산화 저항성 및 깊이 측정.
- [[song-2012-aas-carbonation-characteristics]] — AAS 재료의 탄산화 메커니즘.
- [[ndt-and-shm-of-cementitious]] — 비파괴 검사 및 디지털 영상 기반 구조물 진단 개념.

