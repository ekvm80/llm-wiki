---
title: "Automated Image Processing Technique for Detecting and Analysing Concrete Surface Cracks (Lee et al., 2013, Structure and Infrastructure Engineering)"
type: source_note
source: "sources/Lee 등 - 2013 - Automated image processing technique for detecting and analysing concrete surface cracks.pdf"
citation: "Lee, B.Y., Kim, Y.Y., Yi, S.T., Kim, J.-K. Automated image processing technique for detecting and analysing concrete surface cracks. Structure and Infrastructure Engineering 9(6) (2013) 567-577. doi:10.1080/15732479.2011.593891"
date: 2026-08-22
tags: [crack-detection, image-processing, binarization, morphology, neural-network, crack-pattern-recognition, ndt, user-group]
---

# 콘크리트 표면 균열 자동 검출·분석 영상처리 기법

## Summary

사용자 그룹 NDT 축의 국문 시리즈(2005 개선 이진화·형태분석, 2005/2006 ANN 패턴인식, 2007 균열 평가)를 국제학술지로 통합·완성한 논문(이방연 제1저자, 교신저자 김윤용·충남대, 김진근·KAIST 참여; 접수 2008년, 온라인 게재 2011년, 호수는 2013년). 배경 조도 불균일을 모폴로지 연산으로 보정하고, 개선된 이진화(국소 이진화 + 2차 추출)와 형태 분석으로 검출 성능을 높인 뒤 균열 폭·길이·방향 산정 알고리즘과 5종 패턴(수평·수직·대각 −45°·대각 +45°·랜덤) 인식 인공신경망을 하나의 파이프라인으로 묶었다. 광학 균열현미경 대비 폭 상대오차 평균 3.8 %, 방향 오차 0.67~2.8 %, 패턴 인식 정확도 100 %(38장)를 검증했다.

## Key Contributions

1. **조도 불균일 보정**: 팽창 후 침식으로 이루어지는 opening 결과와 원영상의 차감 연산으로 배경 밝기를 정규화(구조요소는 반경 15 픽셀 원형). 보정 전후 픽셀값 프로파일 비교에서 배경이 평탄해짐을 확인해 이진화 성능의 전제를 확보.
2. **검출 성능 개선 3요소**: (a) 3×3 이웃에서 값 1이 5개 이상이면 1로 만드는 잡음 제거, (b) 전역 이진화(Otsu)로 찾은 객체 경계 주변 11×11 픽셀 영역에 5회 반복 적용하는 국소 이진화, (c) 1차 추출 객체를 지운 수정 영상에 Otsu를 다시 적용하는 2차 추출 — 배경과 밝기가 비슷한 가는 균열까지 포착.
3. **수정 충전밀도 지수 Fpd = Ao/Acc**: 객체 외접 사각형의 외접원 면적(Acc) 대비 객체 면적(Ao) 비로, 가늘고 긴 균열은 0으로, 원형 결함은 1로 수렴. 수치 실험으로 임계값 0.12를 경험적으로 최적화해 균열과 기타 결함을 2차 판별.
4. **균열 특성 자동 산정 알고리즘**: Zhang-Suen 세선화 + 경계 추출 + 8연결 라벨링 후, (a) 폭 = 중심 픽셀에서 가장 가까운 두 경계 픽셀까지 거리의 합(균열 방향에 따라 4개 거리 필터 A~D 중 2개 선택), (b) 길이 = 이웃 9픽셀 합이 라벨번호의 2배인 시작 픽셀부터 스텝당 1.0 또는 √2 단위 픽셀 길이를 누적, (c) 방향 = 시작점과 끝점 좌표의 arctan 관계.
5. **패턴 인식 ANN**: 전사영(total projection) 기반으로 회전각별 사영 길이 180개를 3개씩 평균해 60개 특징 생성 → 네트워크 구조 60-4-5, 쌍곡탄젠트 시그모이드 전이함수, 과적합 방지용 Bayesian regularization 학습.

## Methods

- 영상 획득: CCD 23.7 × 15.6 mm 디지털 카메라, 렌즈는 표면과 평행하다고 가정. 단위 픽셀 길이 α0는 촬영거리 ℓ, 초점거리 ℓfocus, CCD 폭 oCCD, 총 픽셀 수 Npix로부터 산정하고 거리·초점거리 의존 보정계수 γ = 0.47·ℓ^0.058·ℓfocus^0.075를 회귀로 결정.
- 계측 조건 검증: 카메라-표면 거리 865~1915 mm, 초점거리 28~70 mm 조합 7가지에서 동일 균열 5지점의 폭 측정.
- 검출 성능 시험 영상 4유형: 무의미한 객체가 많은 균열, 가지모양 균열, 주균열을 따라 붙은 작은 균열들, 얼룩과 작은 구멍이 있는 오염 배경 균열.
- 기준기 대조: 폭은 광학 균열현미경, 길이는 해상도 1 mm 자, 방향은 해상도 1° 각도기. 상대오차 RD = |w_new − w_con|/w_con으로 정의.

## Results

- 측정 조건(거리·초점거리)에 따른 균열 폭 표준편차 0.024~0.045 mm(평균 0.036 mm) — 해상도 차이에 기인하나 시험 조건에서는 무시 가능한 수준.
- 폭: 현미경 대비 상대오차 0.67~5.9 %(평균 3.8 %). 길이: 자 대비 3.98~21.3 %로 큰 편(직선자 사용 한계, 분할 측정 시 개선 가능). 방향: 각도기 대비 0.67~2.8 %.
- 패턴 인식: 사람 판정 대비 5개 범주 모두 100 % 정분류(수평 4장, 수직 19장, 대각 −45° 7장, 대각 +45° 5장, 랜덤 3장).
- 검출 시험: 작은 구멍·얼룩과 균열의 명확한 구분, 가지형 균열 완전 검출 확인. 한계로 주균열 옆 가는 균열 하나는 Fpd가 0.12를 초과해 미검출 — 임계값 상향 시 잡음 오탐이 늘어나는 트레이드오프 명시.

## Related Notes

- [[lee-2005-enhanced-binarization-crack]] — 본문 검출 파이프라인의 뿌리가 되는 개선 이진화·형태분석 KCI 원전
- [[lee-kim-kim-2006-crack-pattern-recognition]] — 전사영 특징 + ANN 패턴인식의 KCI 원전(본 논문의 60-4-5 네트워크로 계승)
- [[lee-2007-surface-crack-evaluation]] — 같은 NDT 축의 균열 평가 기법(한국비파괴검사학회지)
- [[kim-2008-fiber-classification-and-detection-technique]] — 같은 그룹 영상처리 축에서 검출 대상을 섬유로 바꾼 자매 기법(분수령 분할·형태학적 재구성 공유)
- [[pseudo-strain-hardening-criteria]] — ECC의 미세 다중균열 발현 판정에는 균열 폭의 정량 계측이 전제되며, 본 기법이 그 도구 축을 담당
