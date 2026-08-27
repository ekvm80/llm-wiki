---
title: "Fatigue Behavior of ECC under Cyclic Compression (Zolfagharnasab et al., 2022)"
type: source_note
source: "sources/zolfagharnasab-2022-fatigue-behavior-of-engineered-cementitious.pdf"
citation: "Zolfagharnasab, A., Ranjbar, N., & Zhang, Y. (2022). Fatigue behavior of engineered cementitious composites (ECC) under cyclic compression. Construction and Building Materials, 325, 126750. https://doi.org/10.1016/j.conbuildmat.2022.126750"
date: 2026-08-24
tags:
  - engineered-cementitious-composites
  - compressive-fatigue
  - cyclic-compression
  - damage-accumulation
  - pva-fiber
  - acoustic-emission
---

## Summary
풍력 타워 기초, 해양 자켓 플랫폼 및 교량 교각 등 고주기 반복 압축 하중을 받는 구조 부재의 피로 수명을 연장하기 위해, 고연성 복합체(PVA-ECC, $f_c = 55 MPa$, PVA 섬유 $V_f = 2.0 \%$)의 일축 압축 피로(Cyclic Compression, 응력비 $S_{max} = 0.65 \sim 0.85$, $S_{min} = 0.10$, 주파수 4 Hz) 하중 하에서의 잔류 소성 변형률 축적, 탄성계수 감쇠 이력, 음향 방출(Acoustic Emission, AE) 미세 손상 진화 및 $S-N$ 피로 수명 포락선을 규명한 연구이다. PVA-ECC는 $S = 0.70$의 높은 압축 피로 하중에서도 **$2 \times 10^6$ 사이클 무파괴 한계(Run-out)**를 기록하며 일반 고강도 콘크리트 대비 피로 수명을 **15배** 연장시킴을 실증하였다.

## Key Contributions
- **PVA-ECC 압축 피로($S-N-P_f$) 수명 예측 모델 완성**: 파괴확률 5 % 기준 피로 한계 응력비 $S_e = 0.68$ 도출.
- **섬유 가교에 의한 압축 전단 균열 횡방향 팽창 구속 메커니즘 정량화**: AE 신호 분석을 통해 미세 크랙의 매크로 균열 유착 지연 입증.
- **3단계 피로 손상 진화 속도론 확립**: 1단계 초기 강성 저하 $\rightarrow$ 2단계 안정적 정상 크리프 $\rightarrow$ 3단계 급속 파괴 전이.
- **해상 풍력 발전 지지구조물 피로 설계 기준 제시**: 피로 파괴 안전율 40 % 상향.

## Methods
- 공시체: $100 \times 200 mm$ 원주체 시험편 ($f_c = 55 MPa$, Kuraray REC15 PVA 섬유 $V_f = 2.0 \%$).
- 피로 시험: MTS 서보 유압 시험기 (4 Hz 사인파, $S_{max} = 0.65, 0.70, 0.75, 0.80, 0.85$, $S_{min} = 0.10$).
- 계측: LVDT 축방향 및 횡방향 변형률 연속 계측, 8채널 AE 센서 실시간 탄성파 감지.

## Results
- 압축 피로 응력비별 PVA-ECC 수명 및 누적 변형률 데이터:

| 피로 응력비 $S_{max}$ | 최대 피로응력 (MPa) | 평균 피로 수명 $N_f$ (사이클) | 파괴 시 축적 변형률 ($	imes 10^{-3}$) | 피로 손상도 ($1-E/E_0$) | 파괴 모드 |
| :---: | :---: | :---: | :---: | :---: | :--- |
| 0.85 | 46.75 | 12500 | 5.85 | 0.68 | 다중 전단 파쇄 |
| 0.80 | 44.00 | 85000 | 5.20 | 0.55 | 전단 밴드 파괴 |
| 0.75 | 41.25 | 620000 | 4.65 | 0.42 | 완만한 팽창 파괴 |
| **0.70** | **38.50** | **> 2,000,000 (Run-out)** | **3.20** | **0.25** | **피로 한계 (무파괴)** |
| **0.65** | **35.75** | **> 2,000,000 (Run-out)** | **2.60** | **0.18** | **피로 한계 (무파괴)** |

## Related Notes
- [[zhang-2002-fatigue-behavior-ecc-cyclic-tension]] - ECC 인장 피로 거동
- [[xu-2019-flexural-fatigue-ecc]] - ECC 휨 피로 물성
- [[high-strength-strain-hardening-composites]] - 고성능 복합 구조 설계
