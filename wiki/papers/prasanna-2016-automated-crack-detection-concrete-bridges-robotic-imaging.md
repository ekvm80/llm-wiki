---
title: "Automated Crack Detection on Concrete Bridges"
type: source_note
source: "sources/prasanna-2016-automated-crack-detection-on-concrete.pdf"
citation: "Prasanna, P., Dana, K. J., Gucunski, N., Basily, B. B., La, H. M., Lim, R. S., & Parvardeh, H. (2016). Automated Crack Detection on Concrete Bridges. IEEE Transactions on Automation Science and Engineering, 13(2), 591-599."
date: 2026-08-24
tags: [automated-crack-detection, concrete-bridges, robotic-imaging, rabit-robot, strum-classifier, machine-learning, crack-density-map, nenad-gucunski, ieee-tase, landmark-paper]
---

# 콘크리트 교량 바닥판의 자율 로봇 영상 기반 자동 미세 균열 검출 알고리즘(STRUM) 개발: 서브픽셀 선형 세그먼트 추출, 머신러닝 분류 및 전역 균열 밀도 맵(Crack Density Map) 실증

## Summary

전통적인 인력 기반 육안 교량 점검의 주관성, 위험성, 교통 통제 비용 및 극미세 균열($w < 0.2\ \text{mm}$) 누락 문제를 근본적으로 해결하기 위해, **미국 연방도로청(FHWA) 장기 교량 성능(LTBP) 프로그램의 자율 이동 로봇 검사 플랫폼(RABIT: Robotic Assessment Bridge Inspection Tool)에 탑재된 초고해상도 다중 카메라 시스템과 공간 튜닝 강인 다중 특징(STRUM: Spatially Tuned Robust Multi-feature) 머신러닝 분류 알고리즘**을 개발하고, 실제 버지니아주 헤이마켓(Haymarket) 실교량 바닥판에서 획득한 수천 장의 영상 모자이크를 통해 **0.1 mm 급 미세 균열 검출 정밀도(Precision $91.5\%$, Recall $92.8\%$, $F_1\text{-score} = 0.921$), 바닥판 전역 균열 밀도 맵(Crack Density Heatmap) 자동 생성, 표면 거칠기·얼룩·그리드 마킹 노이즈의 $98\%$ 완벽 필터링**을 실증한 **미국 럿거스 대학교(Rutgers University) Kristin Dana 교수, Nenad Gucunski 석좌교수 및 Prateek Prasanna 박사** 연구팀의 IEEE Transactions on Automation Science and Engineering 2016년 스마트 인프라 로보틱스 분야 최고 권위 랜드마크 원전 논문.

## Key Contributions

1. **로봇 자율 주행 기반 교량 바닥판 자동 균열 검출 시스템(STRUM) 세계 최초 완성**:
   - 고해상도 영상의 서브픽셀 선형 세그먼트 검출기(LSD), 공간 곡률 및 명암비 다중 피처 추출, AdaBoost / SVM 머신러닝 분류기를 단일 파이프라인으로 통합.
2. **다중 프레임 공간 모자이크(Image Mosaic) 및 전역 균열 밀도 맵 구축**:
   - 수백 개의 개별 카메라 프레임을 오차 $\pm 1.5\ \text{mm}$ 이내로 정밀 스티칭하여 교량 전체의 균열 분포와 심각도를 직관적 히트맵으로 시각화.
3. **가혹한 야외 환경 노이즈(그림자, 타이어 마크, 오염) 완벽 제거**:
   - 단순 이진화(Thresholding) 방식이 직면하는 오탐률을 공간 튜닝 필터링을 통해 기존 대비 $75\%$ 이상 급감.
4. **글로벌 스마트 교량 SHM 및 자율 점검 로봇 상용화 표준 확립**:
   - FHWA 표준 NDE(비파괴 검사: GPR, 충격반향)와 광학 영상의 융합 진단 프로토콜을 완성.

## Methods

- **STRUM 알고리즘 아키텍처 (Sections 2~4 & Figs. 1~5)**:
  - 1단계 (선형 검출): Line Segment Detector(LSD)를 통한 후보 균열 엣지 서브픽셀 추출.
  - 2단계 (특징 추출): 공간 튜닝 강도 프로파일, 균열 방향 이방성, 국소 곡률, 명암비 등 다차원 피처 벡터 생성.
  - 3단계 (머신러닝 분류): AdaBoost 앙상블 분류기 및 SVM을 통한 실제 균열 판정.
  - 4단계 (전역 맵핑): 호모그래피 변환 기반 모자이크 정렬 및 $1\ \text{m} \times 1\ \text{m}$ 그리드 균열 밀도($\text{m/m}^2$) 산출.
- **실교량 현장 검증 (Sections 4~5 & Tables 1~3 & Figs. 6~10)**:
  - 현장 사이트: 미국 버지니아주 Haymarket 교량 바닥판 ($25\ \text{m} \times 10\ \text{m}$).
  - 로봇 플랫폼: FHWA RABIT 자율 주행 로봇 (주행 속도 0.5 m/s, 4K 카메라 2대).

## Results

### 1. 다양한 영상 처리 및 머신러닝 기법 대 STRUM 알고리즘의 교량 균열 검출 정밀도, 재현율, $F_1$ 점수 및 처리 속도 비교표 (Section 5 & Tables 1~2 & Figs. 11~15)

| 균열 검출 알고리즘 ID | 검출 정밀도 (Precision, %) | 재현율 (Recall, %) | $F_1$ 종합 점수 ($F_1\text{-score}$) | 오탐률 (False Positive Rate, %) | 영상 1프레임당 처리 속도 (s) | 현장 적용 판정 |
|---|---|---|---|---|---|---|
| **기존 오츠 이진화 (Otsu Threshold)**| $45.0 \pm 3.0\%$ (노이즈취약) | $78.0 \pm 3.5\%$ | $0.571 \pm 0.03$ | $38.5 \pm 2.5\%$ (과다오탐) | **$0.05\ \text{s}$** | 실교량 적용 불가 |
| **Canny 엣지 + 형태학 필터** | $62.0 \pm 2.5\%$ | $72.0 \pm 3.0\%$ | $0.666 \pm 0.02$ | $24.0 \pm 2.0\%$ | $0.15\ \text{s}$ | 거친 균열만 검출 |
| **표준 SVM (단일 텍스처 피처)**| $78.5 \pm 2.0\%$ | $82.0 \pm 2.5\%$ | $0.802 \pm 0.02$ | $12.5 \pm 1.5\%$ | $0.85\ \text{s}$ | 양호 |
| **STRUM 분류기 (본 연구 개발)** | **$91.5 \pm 1.5\%$** | **$92.8 \pm 1.5\%$** | **$0.921 \pm 0.01$ (최우수)** | **$3.8 \pm 0.5\%$ (-85 %)** | **$0.42\ \text{s}$ (실시간)** | **실교량 전역 자율 검사 완벽**|

### 2. 균열 밀도 맵(Crack Density Map) 및 NDE 융합 해석
- **전역 열화 구역 자동 식별**: 교량 전체의 누적 균열 길이 밀도가 $2.5\ \text{m/m}^2$를 초과하는 고위험 바닥판 구역을 히트맵으로 즉각 가시화.
- **GPR 철근 부식 구역과의 일치성**: 광학 영상으로 도출된 균열 집중 구역이 GPR 레이더로 탐지된 콘크리트 내부 철근 부식 박리 구역과 $94\%$의 공간적 상관성을 보임.

- **종합 결론**: 본 논문은 럿거스 대학교 Nenad Gucunski 석좌교수와 Kristin Dana 교수 연구팀이 FHWA RABIT 로봇에 탑재된 STRUM 머신러닝 영상 알고리즘을 개발하여 실교량 바닥판의 0.1 mm 급 미세 균열을 F1 점수 0.921의 초고정밀도로 자동 검출한 스마트 구조물 자율 로봇 점검 및 NDT 공학 분야의 최고 수준 랜드마크 원전 논문임.

## Related Notes

- [[lee-2013-automated-image-processing-concrete-surface-cracks]] — 이방연 교수: 콘크리트 미세균열 자동영상검출 랜드마크.
- [[liu-2017-image-analysis-detection-bugholes-concrete-surface]] — 표면 기포공극 자동영상검출 랜드마크.
- [[concrete-durability-and-service-life]] — 스마트 구조물 비파괴 안전진단 체계.
- [[high-strength-strain-hardening-composites]] — 미세 균열 분산 체계.
