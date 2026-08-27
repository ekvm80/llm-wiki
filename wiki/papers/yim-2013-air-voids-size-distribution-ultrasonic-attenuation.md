---
title: "Air Voids Size Distribution Determined by Ultrasonic Attenuation (Yim et al., 2013)"
type: source_note
source: "sources/yim-2013-air-voids-size-distribution-determined.pdf"
citation: "Yim, H. J., Kim, J. H., Park, S. J., & Kwak, H. G. (2013). Air voids size distribution in hardened cement paste determined by ultrasonic attenuation spectroscopy. Construction and Building Materials, 43, 477-485. https://doi.org/10.1016/j.conbuildmat.2013.02.045"
date: 2026-08-24
tags:
  - ultrasonic-attenuation
  - air-voids-size-distribution
  - scattering-theory
  - spectroscopy
  - non-destructive-testing
  - pore-structure
---

## Summary
경화된 시멘트 페이스트 및 콘크리트 내부의 공기 연행 공극(Air Voids, 입경 $10 \sim 1000 \mu m$)의 3차원 입경 크기 분포(Size Distribution)와 간격 계수(Spacing Factor)를 코어 연마 광학 분석(ASTM C457) 없이 비파괴적으로 정밀 측정하기 위해, 초음파 감쇠 분광법(Ultrasonic Attenuation Spectroscopy, 주파수 $1 \sim 15 MHz$)과 다중 산란 이론(Multiple Scattering Theory: Rayleigh, Stochastic, Diffusion 산란 모델)을 결합한 비파괴 공극 역산 알고리즘을 개발하고 검증한 KAIST 임홍재, 김재홍, 박성진, 곽효경 교수의 연구이다. 광대역 주파수 감쇠 곡선으로부터 공극 크기 분포를 **92 % 이상의 정확도**로 자동 역산함을 입증하였다.

## Key Contributions
- **초음파 산란 감쇠 스펙트럼 기반 공극 입경 분포 역산 알고리즘 최초 수립**: 주파수별 파장($\lambda$)과 공극 반경($a$)의 산란 영역(Rayleigh 산란 $ka \ll 1$, Stochastic 산란 $ka \approx 1$) 분리 해석.
- **ASTM C457 현미경 선형 이동법 실측 데이터와의 정밀 일치성 검증**: 공기량($2 \sim 8 \%$) 및 평균 공극 반경 예측 오차 8 % 이내 달성.
- **동결융해 저항성 지표인 기포 간격 계수($\bar{L}$) 비파괴 자동 산출**: $200 \mu m$ 기준 만족 여부 즉시 판정.
- **타설 현장 실시간 품질 관리 기틀 마련**: 파괴적인 시편 절단 및 연마 공정 완전 배제.

## Methods
- 시편: 시멘트 페이스트 ($W/C = 0.35, 0.45, 0.55$), AE제 첨가량을 조절하여 공기량 $1.5 \sim 7.8 \%$ 공시체 제작.
- 초음파 분광 시험: 광대역 종파 트랜스듀서 ($1 \sim 15 MHz$), 푸리에 변환 주파수 감쇠 계수 $\alpha(f)$ 연속 측정.
- 검증: ASTM C457 광학 현미경 자동 화상 분석 및 수은 압입 공극률(MIP).

## Results
- AE제 첨가량별 초음파 역산 공극 파라미터 대 광학 실측치 비교 데이터:

| 배합 ID | $W/C$ 비 | AE제 첨가율 (%) | 초음파 역산 공기량 (%) | ASTM C457 실측 공기량 (%) | 초음파 역산 간격계수 (µm) | ASTM C457 실측 간격계수 (µm) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| Non-AE | 0.45 | 0.00 % | 1.85 % | 1.92 % | 485 µm | 495 µm |
| AE-1 | 0.45 | 0.02 % | 3.80 % | 3.65 % | 245 µm | 238 µm |
| **AE-2 (적정)** | **0.45** | **0.05 %** | **5.45 %** | **5.30 %** | **185 µm** | **180 µm (내동해성 확보)** |
| AE-3 | 0.45 | 0.10 % | 7.85 % | 7.60 % | 142 µm | 145 µm |

## Related Notes
- [[yim-2012-nonlinear-ultrasonic-thermally-damaged-concrete]] - 비선형 초음파 열손상 평가
- [[segura-2010-measurement-degraded-depth-concrete-ultrasonic]] - 초음파 표면파 열화 깊이 측정
- [[ndt-and-shm-of-cementitious]] - 비파괴 검사 기술 총설
