---
title: "Experimental Investigation on the Flexural Fatigue Behavior of ECC (Xu et al., 2019)"
type: source_note
source: "sources/xu-2019-experimental-investigation-on-the-flexural.pdf"
citation: "Xu, S., Hou, X., & Zhang, X. (2019). Experimental investigation on the flexural fatigue behavior of engineered cementitious composites. Construction and Building Materials, 220, 396-407. https://doi.org/10.1016/j.conbuildmat.2019.06.012"
date: 2026-08-24
tags:
  - engineered-cementitious-composites
  - flexural-fatigue
  - cyclic-loading
  - damage-evolution
  - weibull-distribution
  - s-n-relationship
---

## Summary
교량 바닥판, 도로 포장 및 철도 슬래브와 같은 반복 동적 하중 환경에서 고연성 복합체(PVA-ECC)의 피로 저항성을 정밀 평가하기 위해, 피로 응력비($S = \sigma_{max}/f_r = 0.65, 0.70, 0.75, 0.80, 0.85, 0.90$, 응력비 $R = 0.1$, 주파수 5 Hz 사인파) 조건 하에서 4점 휨 피로 반복 재하 실험을 수행하고, 반복 휨 처짐 증가, 동탄성계수 감쇠 곡선, 에너지 소산 면적 진화 및 2-매개변수 와이블(Weibull) 통계 분포 기반 $S-N-P_f$ 피로 수명 예측 포락선을 대련이공대학교 연구팀이 규명한 원전 논문이다. PVA-ECC는 피로 하중 하에서도 30개 이상의 미세균열망이 처짐 에너지를 분산시켜, $S = 0.70$에서 **$2 \times 10^6$ 사이클 무파괴 한계(Run-out)**를 기록함을 실증하였다.

## Key Contributions
- **2-매개변수 와이블 분포 기반 $S-N-P_f$ 휨 피로 수명 예측 포락선 수립**: 파괴 확률 $P_f = 0.05$ 기준 피로 한계 응력비 $S_e = 0.67$ 도출.
- **반복 휨 피로 하중 하 균열폭 구속 실증**: $200만$ 회 피로 반복 후에도 개별 균열폭이 $45 \mu m$ 이하로 유지됨을 확인.
- **3단계 피로 손상 진화 메커니즘 정량화**: (1단계) 초기 급격한 강성 저하(10 % 수명), (2단계) 안정적 정상 감쇠(75 % 수명), (3단계) 섬유 마모 파단에 의한 급속 파괴(15 % 수명).
- **교량 상판 및 도로 포장 피로 설계 가이드라인 제시**: 허용 휨 응력 기준 제공.

## Methods
- 배합: PVA-ECC (Kuraray REC15, $V_f = 2.0 \%$, $f_c = 48.5 MPa$, 정적 휨 파괴계수 $f_r = 13.5 MPa$).
- 피로 시험: $100 \times 100 \times 400 mm$ 각기둥 보, 4점 휨 피로 시험기 (지간 300 mm, 하중 제어 $S = 0.65 \sim 0.90$, 5 Hz).
- 계측: 고정밀 LVDT 중앙 처짐 연속 기록, 동적 히스테리시스 루프 에너지 산출, 전자현미경 파단 섬유 마모 관측.

## Results
- 피로 응력비별 수명 및 와이블 통계 분석 데이터:

| 피로 응력비 $S$ | 시험 횟수 (개) | 평균 피로 수명 $N_f$ (사이클) | 와이블 형상 모수 $m$ | 척도 모수 $c$ | 피로 파괴 모드 |
| :---: | :---: | :---: | :---: | :---: | :--- |
| 0.90 | 5 | 2850 | 1.85 | 3200 | 다중균열 후 국소화 파괴 |
| 0.85 | 5 | 18500 | 2.10 | 20500 | 점진적 처짐 증가 파괴 |
| 0.80 | 5 | 68400 | 2.45 | 76000 | 3단계 손상 전형 파괴 |
| 0.75 | 5 | 485000 | 2.80 | 520000 | 광역 미세균열 분산 |
| **0.70** | **5** | **> 2,000,000 (Run-out)** | **-** | **-** | **피로 한계 (무파괴)** |

## Related Notes
- [[yu-2018-uhp-ecc-flexural-fatigue]] - UHP-ECC 휨 피로 물성
- [[pseudo-strain-hardening-criteria]] - PSH 미시역학 설계 이론
- [[crack-width-control]] - 반복 하중 하 미세균열 제어
