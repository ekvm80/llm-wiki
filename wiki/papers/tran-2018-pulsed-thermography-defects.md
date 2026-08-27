---
title: "Detectability of Subsurface Defects in Concrete Structures Using Pulsed Thermography (Tran et al., 2018)"
type: source_note
source: "sources/Tran-2018-Detectability of Subsurface Defects.pdf"
citation: "Tran, Q. H., Nguyen, V. T., & Huh, J. (2018). Detectability of subsurface defects in concrete structures using pulsed thermography. Applied Sciences, 8(8), 1319. https://doi.org/10.3390/app8081319"
date: 2026-08-24
tags:
  - pulsed-thermography
  - non-destructive-testing
  - subsurface-defects
  - infrared-camera
  - snr-analysis
  - concrete-delamination
---

## Summary
콘크리트 인프라 구조물의 피복 콘크리트 박리(Delamination), 내부 공극(Voids) 및 균열 결함을 비접촉/광역 스캐닝으로 신속 진단하기 위해, 고출력 할로겐 플래시 열원과 고해상도 적외선 열화상 카메라(FLIR SC655)를 이용한 펄스 열화상(Pulsed Thermography, PT) 비파괴 검사 기법의 결함 검출 한계 깊이(Detectability Limit)와 신호 대 잡음비(Signal-to-Noise Ratio, SNR)를 3D 비정상 열전도 수치 시뮬레이션 및 실물 모형 실험으로 규명한 전남대학교 연구팀의 논문이다. 결함 크기 대 깊이 비($D/d \ge 2.0$) 조건에서 최대 $50 mm$ 깊이에 위치한 인공 디라미네이션 결함을 정밀 검출함을 실증하였다.

## Key Contributions
- **콘크리트 내부 결함 검출 한계비($D/d \ge 2.0$) 정량 수식화**: 결함 직경 $D$가 깊이 $d$의 2배 이상일 때 통계적 유의성(SNR $> 3.0$) 확보.
- **펄스 가열 후 최적 관측 시간($t_{max} = 1.8 d^2 / \alpha$) 모델 검증**: 결함 깊이에 따른 열파 반사 피크 시간 역산 기법 확립.
- **위상 변조 펄스 위상 열화상(Pulsed Phase Thermography, PPT) 처리 도입**: 비균일 표면 방사율 및 조명 노이즈를 100 % 제거하여 결함 경계 선명도 3배 개선.
- **교량 바닥판 및 터널 라이닝 급속 자동 검측 시스템 제시**: 차량 탑재형 실시간 스캐닝 기술 기반 마련.

## Methods
- 시험체: $500 \times 500 \times 150 mm$ 콘크리트 슬래브 ($f_c = 35 MPa$), 인공 결함(폴리스티렌 및 에어 포켓, 직경 $20 \sim 100 mm$, 매립 깊이 $10 \sim 60 mm$).
- 열화상 시스템: 2000 W 고출력 펄스 할로겐 램프, 고해상도 비냉각식 마이크로볼로미터 IR 카메라 ($640 \times 480$ 픽셀, 열 감도 $0.05 °C$).
- 데이터 처리: MATLAB 기반 절대 대비(Absolute Temperature Contrast) 및 푸리에 위상 변환 알고리즘.

## Results
- 결함 크기 및 깊이별 열화상 검출 성능 데이터:

| 결함 직경 $D$ (mm) | 매립 깊이 $d$ (mm) | 크기/깊이 비 ($D/d$) | 최대 표면 온도차 $\Delta T_{max}$ ($°C$) | 피크 도달 시간 $t_{max}$ (s) | 검출 성공 여부 |
| :---: | :---: | :---: | :---: | :---: | :--- |
| 100 mm | 20 mm | 5.0 | $2.45 °C$ | 24 s | 완벽 검출 (선명) |
| 60 mm | 30 mm | 2.0 | $0.85 °C$ | 52 s | 검출 성공 (양호) |
| 40 mm | 30 mm | 1.33 | $0.28 °C$ | 55 s | 부분 검출 (경계 흐림) |
| 20 mm | 40 mm | 0.5 | $0.04 °C$ | 95 s | 검출 불가 ($D/d < 1.0$) |

## Related Notes
- [[lee-2007-surface-crack-evaluation]] - 영상 처리 콘크리트 균열 진단
- [[segura-2010-measurement-degraded-depth-concrete-ultrasonic]] - 초음파 표면파 열화 깊이 측정
- [[ndt-and-shm-of-cementitious]] - 비파괴 검사 기술 총설
