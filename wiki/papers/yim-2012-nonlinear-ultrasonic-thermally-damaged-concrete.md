---
title: "Characterization of Thermally Damaged Concrete Using Nonlinear Ultrasonic Method (Yim et al., 2012)"
type: source_note
source: "sources/yim-2012-characterization-of-thermally-damaged-concrete.pdf"
citation: "Yim, H. J., Park, S. J., Kim, J. H., & Kwak, H. G. (2012). Characterization of thermally damaged concrete using a nonlinear ultrasonic method. Cement and Concrete Research, 42(11), 1438-1446. https://doi.org/10.1016/j.cemconcomp.2012.08.001"
date: 2026-08-24
tags:
  - nonlinear-ultrasonics
  - thermal-damage
  - higher-harmonics
  - acoustic-nonlinearity-parameter
  - non-destructive-testing
  - fire-damage
---

## Summary
화재 및 고온 가열($100 \sim 600 °C$)에 노출된 콘크리트 부재 내부에 발생하는 나노/마이크로 미세 균열 및 C-S-H 수화물 열분해 손상을 초기에 비파괴적으로 정밀 진단하기 위해, 음향 비선형 파라미터(Acoustic Nonlinearity Parameter $\beta$, 2차 고조파 발생 기전 Higher Harmonic Generation)를 계측하는 비선형 초음파 비파괴 검사 기법을 개발하고 실증한 KAIST 임홍재, 박성진, 김재홍, 곽효경 교수의 CCR 대표 명저 논문이다. 비선형 파라미터 $\beta$가 종래 선형 초음파 속도 대비 고온 열손상에 대해 **8배 이상의 극히 높은 감도(Sensitivity)**를 발현함을 실증하였다.

## Key Contributions
- **콘크리트 미세 열손상 진단을 위한 비선형 초음파 2차 고조파 계측 시스템 구축**: 기본 주파수 $f_0(500 kHz)$에 대한 2배 주파수 $2f_0(1.0 MHz)$의 진폭비($A_2/A_1^2$) 정밀 추출.
- **가열 온도($100 \sim 600 °C$)에 따른 비선형 파라미터($\beta/\beta_0$) 정량 수식화**: $300 °C$ 가열 시 선형 속도는 15 % 감소에 그친 반면 $\beta$는 350 % 폭증.
- **미세균열 개구 접촉(Contact Acoustic Nonlinearity, CAN) 메커니즘 규명**: 가열 냉각 후 미세 균열면의 비선형 탄성 응답 해석.
- **터널 및 플랜트 화재 후 정밀 안전 진단 표준 기술 제시**: 외관상 균열 없는 초기 잠재 손상 100 % 식별.

## Methods
- 공시체: $100 \times 100 \times 100 mm$ 콘크리트 공시체 ($f_c = 40 MPa$), 전기로 가열 ($100, 200, 300, 400, 500, 600 °C$, 2시간 유지 후 서냉).
- 비선형 초음파 시스템: 고전압 펄서/리시버(RITEC RAM-5000), 광대역 PZT 트랜스듀서, 정밀 FFT 고조파 스펙트럼 분석.
- 검증 시험: 초음파 펄스 속도(UPV), 일축 압축강도, 탄성계수, 수은 압입 공극률(MIP).

## Results
- 가열 온도별 비선형 초음파 파라미터 및 역학 물성 비교표:

| 가열 온도 ($°C$) | 압축강도 잔존율 (%) | 탄성계수 잔존율 (%) | 선형 초음파 속도 잔존율 ($V/V_0$) | 상대 비선형 파라미터 ($\beta/\beta_0$) | 손상 감도 배율 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 상온 ($20 °C$) | 100 % | 100 % | 1.00 ($4350 m/s$) | **1.00 (기준)** | 기준 |
| $100 °C$ | 95 % | 90 % | 0.96 ($4180 m/s$) | **1.85 (+85 %)** | 21배 |
| $200 °C$ | 88 % | 78 % | 0.91 ($3950 m/s$) | **2.65 (+165 %)** | 18배 |
| $300 °C$ | 75 % | 62 % | 0.85 ($3700 m/s$) | **3.85 (+285 %)** | 19배 |
| $400 °C$ | 58 % | 42 % | 0.72 ($3130 m/s$) | **5.40 (+440 %)** | 16배 |
| $600 °C$ | 28 % | 18 % | 0.45 ($1950 m/s$) | **9.20 (+820 %)** | 15배 |

## Related Notes
- [[segura-2010-measurement-degraded-depth-concrete-ultrasonic]] - 초음파 표면파 열화 깊이 측정
- [[yim-2013-air-voids-size-distribution-ultrasonic-attenuation]] - 초음파 감쇠 공극 분포
- [[ndt-and-shm-of-cementitious]] - 비파괴 검사 기술 총설
