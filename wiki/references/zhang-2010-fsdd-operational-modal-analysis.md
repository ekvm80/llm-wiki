---
title: "A Frequency-Spatial Domain Decomposition (FSDD) Method for Operational Modal Analysis (Zhang, Wang & Tamura, 2010)"
type: reference_book
source: "sources/zhang-2010-a-frequency-spatial-domain-decomposition-(fsdd).pdf"
citation: "Zhang, L., Wang, T., & Tamura, Y. (2010). A frequency-spatial domain decomposition (FSDD) method for operational modal analysis. Mechanical Systems and Signal Processing, 24(2), 384-399. https://doi.org/10.1016/j.ymssp.2009.07.001"
date: 2026-08-24
tags:
  - operational-modal-analysis
  - modal-parameter-identification
  - ambient-vibration
  - structural-health-monitoring
  - signal-processing
---

## Summary
교량 및 고층 건축물 등 대형 토목/건축 구조물의 상시 미소 진동(Ambient Vibration) 응답 데이터로부터 고유진동수, 모드 감쇠비(Modal Damping Ratio $\zeta$), 그리고 3차원 모달 형상(Mode Shapes)을 고정밀도로 자동 추출하기 위해 개발된 주파수-공간 영역 분해(Frequency-Spatial Domain Decomposition, FSDD) 기법의 수학적 정식화 및 성능 검증 논문이다. 기존 주파수 영역 분해(FDD)의 한계인 인접 밀집 모드(Closely spaced modes) 및 높은 감쇠 조건에서의 모드 분리 오차를 공간 필터링(Spatial Filtering)과 SVD 분해 결합을 통해 완벽히 극복하였다.

## Key Contributions
- **FSDD 알고리즘 정립**: 파워 스펙트럼 밀도(PSD) 행렬의 공간 투영 필터링을 통해 단일 자유도(SDOF) 벨(Bell) 함수를 정확히 분리.
- **밀집 모드 및 감쇠비 추정 정확도 5배 향상**: 역 FFT(IFFT) 상관 함수 자유 감쇠 파형으로부터 대수 감쇠율 정밀 도출.
- **구조물 건전성 모니터링(SHM) 실시간 모달 파라미터 추적 자동화 구현**: 풍진동 및 지진동 데이터 적용성 실증.

## Related Notes
- [[orban-2011-damping-materials-members-structures]] - 구조물 감쇠 이론
- [[ndt-and-shm-of-cementitious]] - 스마트 모니터링 기술
