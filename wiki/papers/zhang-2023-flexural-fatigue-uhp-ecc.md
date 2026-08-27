---
title: "Flexural Fatigue Behavior of UHP-ECC (Zhang et al., 2023)"
type: source_note
source: "sources/zhang-2023-flexural-fatigue-behavior-of-ultra-high-performance.pdf"
citation: "Zhang, Z., Yu, K. Q., & Leung, C. K. Y. (2023). Flexural fatigue behavior of ultra-high performance engineered cementitious composites (UHP-ECC). Cement and Concrete Composites, 137, 104930. https://doi.org/10.1016/j.cemconcomp.2023.104930"
date: 2026-08-24
tags:
  - uhp-ecc
  - flexural-fatigue
  - cyclic-loading
  - pe-fiber
  - fatigue-life-prediction
  - s-n-curves
---

## Summary
교량 바닥판 이음부 및 중교통 도로 포장의 장기 동적 피로 수명을 연장하기 위해, 초고성능 변형경화형 복합체(UHP-ECC, $f_c = 130 MPa$, 정적 휨 파괴계수 $f_r = 28.5 MPa$, PE 섬유 $V_f = 2.0 \%$)의 휨 피로(Flexural Fatigue, 응력비 $S = 0.65 \sim 0.90$, $R = 0.1$, 주파수 5 Hz) 거동, 강성 저하 이력, 에너지 소산 면적 진화 및 와이블 통계 피로 수명 예측 포락선을 홍콩과기대 렁(Christopher Leung) 교수 연구팀이 규명한 연구이다. UHP-ECC는 $S = 0.75$의 높은 피로 응력 하에서도 **$2 \times 10^6$ 사이클 무파괴 한계(Run-out)**를 기록하여 보통 강섬유 UHPC 대비 피로 한계 응력비를 **25 %** 이상 향상시킴을 실증하였다.

## Key Contributions
- **UHP-ECC의 휨 피로($S-N-P_f$) 수명 예측 포락선 수립**: 파괴확률 5 % 기준 피로 한계 응력비 $S_e = 0.73$ 도출.
- **반복 피로 하중 하 균열폭 $20 \mu m$ 이하 완벽 구속**: 수백만 회 피로 반복 후에도 유해 물질 침투 차단.
- **PE 섬유 계면의 피로 마모 저항성 실증**: 슬립 경화 기전이 반복 전단 마찰 시 계면 손상을 억제.
- **장경간 교량 상판 무보수 피로 설계 기준 제시**: 피로 수명 100년 보장 설계식 확립.

## Methods
- 배합: UHP-ECC ($f_c = 130 MPa$, PE 섬유 $V_f = 2.0 \%$, $f_r = 28.5 MPa$).
- 피로 시험: $100 \times 100 \times 400 mm$ 보, 4점 휨 피로 시험기 (지간 300 mm, 5 Hz 사인파, $S = 0.65, 0.70, 0.75, 0.80, 0.85, 0.90$).
- 계측: 레이저 변위계 중앙 처짐 연속 계측, 파단면 PE 섬유 주사전자현미경(SEM) 분석.

## Results
- 피로 응력비별 UHP-ECC 피로 수명 데이터:

| 피로 응력비 $S$ | 최대 피로응력 (MPa) | 평균 피로 수명 $N_f$ (사이클) | 와이블 형상 모수 $m$ | 피로 손상도 ($1-E/E_0$) | 파괴 모드 |
| :---: | :---: | :---: | :---: | :---: | :--- |
| 0.90 | 25.65 MPa | 8400 | 2.10 | 0.62 | 다중균열 후 파단 |
| 0.85 | 24.22 MPa | 52000 | 2.45 | 0.50 | 정상 감쇠 파괴 |
| 0.80 | 22.80 MPa | 485000 | 2.90 | 0.38 | 광역 미세균열 분산 |
| **0.75** | **21.38 MPa** | **> 2,000,000 (Run-out)** | **-** | **0.24** | **피로 한계 (무파괴)** |
| **0.70** | **19.95 MPa** | **> 2,000,000 (Run-out)** | **-** | **0.18** | **피로 한계 (무파괴)** |

## Related Notes
- [[yu-2018-uhp-ecc-flexural-fatigue]] - UHP-ECC 휨 피로 물성
- [[xu-2019-flexural-fatigue-ecc]] - PVA-ECC 휨 피로 물성
- [[pseudo-strain-hardening-criteria]] - PSH 미시역학 이론
