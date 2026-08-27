---
title: "Flexural Fatigue Behavior of Engineered Geopolymer Composites (Zhu et al., 2022)"
type: source_note
source: "sources/zhu-2022-flexural-fatigue-behavior-of-engineered.pdf"
citation: "Zhu, H., Ma, H., & Wu, C. (2022). Flexural fatigue behavior of engineered geopolymer composites (EGC) under cyclic loading. International Journal of Fatigue, 160, 106850. https://doi.org/10.1016/j.ijfatigue.2022.106850"
date: 2026-08-24
tags:
  - engineered-geopolymer-composites
  - flexural-fatigue
  - cyclic-loading
  - pva-fiber
  - fatigue-life-prediction
  - s-n-curves
---

## Summary
교량 바닥판 및 중교통 도로 포장에 적용되는 친환경 변형경화형 지오폴리머 복합체(PVA-EGC, $f_c = 50 MPa$, 정적 휨 파괴계수 $f_r = 15.8 MPa$, PVA 섬유 $V_f = 2.0 \%$)의 반복 휨 피로(Flexural Fatigue, 응력비 $S = 0.60 \sim 0.85$, $R = 0.1$, 주파수 5 Hz) 거동, 하중-제하 이력 강성 감쇠, 변형 에너지 소산 진화 및 와이블 통계 $S-N-P_f$ 피로 수명 예측 모델을 International Journal of Fatigue에 발표한 주홍(H. Zhu) 박사 연구팀의 논문이다. PVA-EGC는 $S = 0.65$의 높은 피로 하중 하에서도 **$2 \times 10^6$ 사이클 무파괴 한계(Run-out)**를 기록하여 일반 시멘트 기반 PVA-ECC에 대등한 우수한 동적 피로 내구성을 입증하였다.

## Key Contributions
- **친환경 EGC의 휨 피로($S-N$) 지배방정식 세계 최초 수립**: 파괴확률 50 % 기준 피로 한계 응력비 $S_e = 0.64$ 도출.
- **반복 피로 하중 하 다중 미세균열 분산 안정성 실증**: 게이지 내 25개 이상의 미세균열망이 피로 하중을 분산하여 조기 피로 파단 억제.
- **알칼리 지오폴리머 매트릭스 내 PVA 섬유 계면 피로 내마모성 입증**: 섬유 표면 마찰 손상이 시멘트 매트릭스 대비 30 % 저감.
- **친환경 도로 포장 및 교량 슬래브 피로 설계 기준 제시**: 100년 피로 설계 수명 보장.

## Methods
- 배합: PVA-EGC (플라이애시 60 % + GGBS 40 %, Kuraray REC15 PVA 섬유 $V_f = 2.0 \%$, $f_r = 15.8 MPa$).
- 피로 시험: $100 \times 100 \times 400 mm$ 각기둥 보 4점 휨 피로 시험기 (지간 300 mm, 5 Hz 사인파, $S = 0.60, 0.70, 0.75, 0.80, 0.85$).
- 계측: 레이저 변위계 처짐 연속 계측, 파단면 섬유 전자현미경 관측.

## Results
- 피로 응력비별 PVA-EGC 휨 피로 수명 데이터:

| 피로 응력비 $S$ | 최대 피로응력 (MPa) | 평균 피로 수명 $N_f$ (사이클) | 와이블 형상 모수 $m$ | 피로 손상도 ($1-E/E_0$) | 파괴 거동 |
| :---: | :---: | :---: | :---: | :---: | :--- |
| 0.85 | 13.43 MPa | 6800 | 1.85 | 0.65 | 섬유 피로 파단 |
| 0.80 | 12.64 MPa | 45000 | 2.20 | 0.52 | 정상 감쇠 파괴 |
| 0.70 | 11.06 MPa | 385000 | 2.75 | 0.38 | 광역 미세균열 분산 |
| **0.65** | **10.27 MPa** | **> 2,000,000 (Run-out)** | **-** | **0.22** | **피로 한계 (무파괴)** |
| **0.60** | **9.48 MPa** | **> 2,000,000 (Run-out)** | **-** | **0.15** | **피로 한계 (무파괴)** |

## Related Notes
- [[zhang-2023-flexural-fatigue-uhp-ecc]] - UHP-ECC 휨 피로 거동
- [[xu-2019-flexural-fatigue-ecc]] - PVA-ECC 휨 피로 물성
- [[one-part-shgc]] - 고연성 지오폴리머 설계 이론
