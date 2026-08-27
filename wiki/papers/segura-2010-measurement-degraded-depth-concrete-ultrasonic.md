---
title: "Measurement of Degraded Depth in Concrete Using Ultrasonic Surface Waves (Segura et al., 2010)"
type: source_note
source: "sources/segura-2010-measurement-of-the-degraded-depth.pdf"
citation: "Segura, I., Kim, J. H., Cavalaro, S. L., & Aguado, A. (2010). Measurement of the degraded depth of concrete by means of ultrasonic surface waves. In Proceedings of the 7th International Conference on Fracture Mechanics of Concrete and Concrete Structures (FraMCoS-7), Jeju, Korea, pp. 1422-1428."
date: 2026-08-24
tags:
  - ultrasonic-surface-waves
  - degraded-depth
  - fire-damage
  - non-destructive-testing
  - rayleigh-waves
  - spectral-analysis
---

## Summary
화재 가열($200 \sim 800 °C$) 또는 화학적 침식으로 인해 콘크리트 부재 표층부에 발생하는 열화 깊이(Degraded Depth $d_c$)를 비파괴적으로 정밀 측정하기 위해, 초음파 표면파(Rayleigh Waves)의 주파수 의존 침투 깊이(Dispersion Characteristic)와 위상 속도 역산 알고리즘(Phase Velocity Inversion)을 개발하고 실물 화재 손상 콘크리트 부재에서 검증한 스페인 카탈루냐 공대(UPC)와 KAIST 김재홍 교수 연구팀의 FraMCoS-7 논문이다. 표면파 분산 곡선 해석을 통해 코어 채취 파괴 시험 없이도 $5 \sim 80 mm$ 범위의 표층 열화 깊이를 **5 % 이내** 오차로 정밀 측정함을 입증하였다.

## Key Contributions
- **레일리 표면파의 주파수-침투 깊이 분산 모델 수립**: 고주파 표면파는 극표층 손상을, 저주파 표면파는 심부 건전부를 통과하는 원리 정식화.
- **화재 피해 콘크리트의 탄성계수 깊이별 프로파일($E(z)$) 역산 알고리즘 개발**: 층상 매질 전달 매트릭스(Thomson-Haskell Matrix) 역산 해석.
- **코어 채취 강도 실측치와의 완벽한 정합성 검증**: 탄화/열열화 깊이 측정 정확도 95 % 확보.
- **터널 및 건축물 화재 후 급속 안전 진단 기술 확립**: 비파괴 표면 스캐닝만으로 보수 범위 자동 도출.

## Methods
- 시편: $150 \times 150 \times 600 mm$ 콘크리트 보 공시체, 전기로에서 편면 가열 ($400, 600, 800 °C$, 노출 시간 1, 2, 4시간).
- 초음파 표면파 시험: 광대역 초음파 트랜스듀서 ($50 kHz \sim 500 kHz$), 2채널 위상 지연 계측 시스템.
- 검증: 단계별 코어 채취, 페놀프탈레인 중성화 깊이, 초음파 종파 속도 프로파일 대조.

## Results
- 가열 온도 및 시간별 열화 깊이 측정 결과:

| 가열 조건 | 가열 시간 (h) | 표층 초음파 속도 ($m/s$) | 건전부 초음파 속도 ($m/s$) | 제안 기법 역산 열화깊이 (mm) | 코어 실측 열화깊이 (mm) | 측정 오차 (mm) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| $400 °C$ 편면 | 2 | 2850 | 4250 | 18.5 | 19.2 | -0.7 mm |
| $600 °C$ 편면 | 2 | 1950 | 4200 | 38.0 | 36.8 | +1.2 mm |
| $800 °C$ 편면 | 2 | 1250 | 4180 | 58.5 | 60.0 | -1.5 mm |
| $800 °C$ 편면 | 4 | 980 | 4150 | 76.2 | 75.0 | +1.2 mm |

## Related Notes
- [[yim-2012-nonlinear-ultrasonic-thermally-damaged-concrete]] - 비선형 초음파를 이용한 열손상 평가
- [[ndt-and-shm-of-cementitious]] - 비파괴 검사 및 스마트 진단
- [[yu-2015-residual-compressive-properties-shcc-high-temperature]] - SHCC 고온 노출 후 잔존 물성
