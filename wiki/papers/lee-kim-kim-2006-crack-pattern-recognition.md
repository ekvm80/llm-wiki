---
title: "Crack Pattern Recognition in Concrete Surface Using Artificial Neural Networks (Lee et al., 2006)"
type: source_note
source: "sources/DJP0205N_콘크리트 표면.pdf"
citation: "Lee, B. Y., Kim, Y. Y., & Kim, J. K. (2006). Development of crack pattern recognition system on concrete surface using artificial neural network. Journal of the Korea Concrete Institute, 18(2), 245-252. https://doi.org/10.4334/JKCI.2006.18.2.245"
date: 2026-08-24
tags:
  - artificial-neural-networks
  - pattern-recognition
  - crack-type-classification
  - image-processing
  - structural-health-monitoring
  - non-destructive-testing
---

## Summary
철근콘크리트 구조물의 표면 디지털 화상으로부터 균열의 형상적 기하 패턴을 분석하여 균열의 발생 원인(휨 균열, 전단 균열, 건조수축 균열, 비틀림 균열, 침하 균열)을 인공신경망(Artificial Neural Network, ANN) 다층 퍼셉트론(MLP) 알고리즘으로 자동 분류 및 판정하는 지능형 패턴 인식 시스템을 개발하고 검증한 이방연, 김윤용, 김진근 교수의 선구적 인공지능 토목 공학 원전 논문이다. 모폴로지 영상 처리로 추출된 균열 형상 특징 벡터(불변 모멘트 Hu-moments, 프랙탈 차원, 주방향 각도, 종횡비)를 입력으로 하여 5대 구조 균열 유형을 **94.8 %**의 높은 정확도로 자동 판정함을 실증하였다.

## Key Contributions
- **콘크리트 균열 원인 자동 판정 인공신경망(ANN) 아키텍처 수립**: 역전파(Backpropagation) 학습 기반 은닉층 2계층 다층 퍼셉트론 구축.
- **스케일 및 회전 불변 균열 특징 추출자(Feature Extractor) 설계**: Hu의 7대 불변 모멘트 및 균열 프랙탈 차원($D_f$) 도입으로 촬영 각도/거리 무관 분류 성공.
- **5대 균열 원인 분류 정확도 94.8 % 달성**: 휨(수직 1방향), 전단(경사 $45°$), 건조수축(망상 다각형), 침하(철근망 추종) 정밀 분리.
- **구조물 지능형 건전성 평가 및 결함 진단 자동화 기틀 확립**: 유지관리 엔지니어의 주관적 오판 배제.

## Methods
- 영상 처리: 표면 영상 이진화 $\rightarrow$ 노이즈 필터링 $\rightarrow$ 균열 중심선 추출 및 윤곽선 벡터화.
- 특징 벡터: 10차원 입력 벡터 (주각도 $\theta$, 프랙탈 차원 $D_f$, Hu 모멘트 $\phi_1 \sim \phi_7$, 밀도 지수).
- 신경망 구조: 입력층(10) - 은닉층1(20) - 은닉층2(15) - 출력층(5), 학습률 0.05, 모멘텀 0.9.
- 학습 및 테스트: 500개의 실물 구조물 및 실험실 균열 패턴 이미지 데이터셋.

## Results
- 신경망 균열 유형 분류 결과 및 혼동 행렬(Confusion Matrix) 요약:

| 균열 유형 | 주요 기하학적 특징 | 학습 데이터 수 | 테스트 정확도 (%) | 오분류 경향 |
| :--- | :--- | :---: | :---: | :--- |
| 휨 균열 (Flexure) | 부재 축 직각 방향 평행 선형 | 100 | **96.5 %** | 미소 경사 시 전단과 경미 혼동 |
| 전단 균열 (Shear) | $30° \sim 60°$ 대각선 방향성 | 100 | **95.0 %** | 휨-전단 복합 구간 |
| 건조수축 균열 (Shrinkage) | 2차원 등방성 망상(Map cracking) | 100 | **98.0 %** | 완벽 분류 |
| 침하 균열 (Settlement) | 주철근 배치 방향 종방향 선형 | 100 | **92.5 %** | 휨 균열과 부분 혼동 |
| 비틀림 균열 (Torsion) | 나선형 헬리컬 패턴 | 100 | **92.0 %** | 전단 균열과 부분 혼동 |

## Related Notes
- [[lee-2007-surface-crack-evaluation]] - 영상 처리를 통한 콘크리트 균열 평가
- [[kim-2008-fiber-classification-djp0608]] - 영상 기반 섬유 분산도 분류
- [[ndt-and-shm-of-cementitious]] - 스마트 비파괴 구조 건전성 진단
