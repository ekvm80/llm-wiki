---
title: "Monotonic and Cyclic Fatigue Behavior of ECC under Tension (Zhang & Li, 2002)"
type: source_note
source: "sources/zhang-2002-fatigue-behavior-of-engineered-cementitious.pdf"
citation: "Zhang, J., & Li, V. C. (2002). Monotonic and cyclic fatigue behavior of engineered cementitious composites (ECC) under tension. In Proceedings of the 6th ASCE Materials Engineering Congress (pp. 1-10). Orlando, FL."
date: 2026-08-24
tags:
  - ecc
  - cyclic-tension
  - tensile-fatigue
  - damage-evolution
  - pva-fiber
  - micromechanics
---

## Summary
고연성 복합체(PVA-ECC)가 풍하중, 파랑 하중 및 지진 반복 하중을 받을 때 발현되는 일축 인장 피로 거동을 규명하기 위해, 완전 인장 반복 피로(Uniaxial Cyclic Tension, $R = \sigma_{min}/\sigma_{max} = 0.1$, 피로 응력비 $S = 0.60 \sim 0.85$, 주파수 2 Hz) 하중 하에서 PVA-ECC의 잔류 변형률 축적, 하중-제하 이력 강성 감쇠, 에너지 소산 면적 진화 및 $S-N$ 피로 수명을 미시간 대학교 장준(J. Zhang) 박사와 빅터 리(Victor Li) 교수가 정밀 규명한 ASCE 선구적 논문이다. PVA-ECC는 인장 피로 하중 하에서도 섬유 가교 슬립 기전에 의해 20개 이상의 미세균열망을 유지하며, $S = 0.65$에서 **$10^6$ 사이클 무파괴 피로 한계**를 달성함을 실증하였다.

## Key Contributions
- **ECC의 일축 인장 피로($S-N$) 포락선 세계 최초 수립**: $P_f = 0.50$ 기준 인장 피로 한계 응력비 $S_e = 0.62$ 도출.
- **반복 인장 하중 하 미세 다중균열 발생 지속성 입증**: 단일 피로 균열의 급속 전파 대신 게이지 전 영역으로 피로 손상이 분산.
- **반복 하중 하 계면 마찰 슬립 피로 손상 모델 정립**: 섬유 표면 오일 코팅막이 반복 슬립 시 계면 마모를 완화하여 섬유 조기 파단 방지.
- **내진 소성 힌지 및 해양 구조물 인장 피로 설계 기준 제시**: 교번 하중 하 구조 신뢰성 확보.

## Methods
- 배합: PVA-ECC (Kuraray REC15, $V_f = 2.0 \%$, $f_c = 45 MPa$, 일축 정적 인장강도 $4.8 MPa$, 정적 인장 변형률능 $4.2 \%$).
- 피로 시험: 도그본 시험편 일축 인장 피로 시험 (MTS 서보 유압기, 2 Hz 사인파, $S = 0.60, 0.70, 0.80, 0.85$).
- 계측: 2채널 고정밀 LVDT 변위계 연속 계측, 탄성계수 감쇠($E_N/E_0$) 및 소산 면적 전산 해석.

## Results
- 인장 피로 응력비별 수명 및 잔류 역학 물성 데이터:

| 피로 응력비 $S$ | 최대 피로응력 (MPa) | 평균 피로 수명 $N_f$ (사이클) | 파괴 시 축적 변형률 (%) | 피로 손상도 ($D = 1-E/E_0$) | 파괴 양상 |
| :---: | :---: | :---: | :---: | :---: | :--- |
| 0.85 | 4.08 | 4500 | 2.85 % | 0.68 | 조기 섬유 피로 파단 |
| 0.80 | 3.84 | 38200 | 3.40 % | 0.55 | 점진적 다중균열 분산 |
| 0.70 | 3.36 | 325000 | 3.85 % | 0.42 | 안정적 정상 감쇠 |
| **0.60** | **2.88** | **> 1,000,000 (Run-out)** | **2.10 %** | **0.25** | **피로 한계 (무파괴)** |

## Related Notes
- [[xu-2019-flexural-fatigue-ecc]] - ECC 휨 피로 거동
- [[pseudo-strain-hardening-criteria]] - PSH 미시역학 이론
- [[crack-width-control]] - 반복 하중 하 균열 제어
