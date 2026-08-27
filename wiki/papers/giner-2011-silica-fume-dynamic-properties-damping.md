---
title: "Silica Fume Admixture Effect on Dynamic Properties of Concrete (Giner et al., 2011)"
type: source_note
source: "sources/giner-2011-silica-fume-admixture-effect-on.pdf"
citation: "Giner, V. T., Baeza, F. J., Ivorra, S., Zornoza, E., & Galao, O. (2011). Effect of silica fume on the dynamic properties of concrete. Construction and Building Materials, 25(8), 3272-3277. https://doi.org/10.1016/j.conbuildmat.2011.03.014"
date: 2026-08-24
tags:
  - silica-fume
  - damping-ratio
  - dynamic-modulus
  - resonant-frequency
  - vibration-mitigation
  - micro-cracking
---

## Summary
철도 궤도 슬래브, 교량 및 정밀 기계 기초 구조물의 진동 감쇠(Vibration Damping) 및 동적 응답 제어를 위해, 비밀도 실리카퓸(Undensified Silica Fume: $SiO_2 94.11 \%$, 미연소 탄소 C 2.85 %, 비표면적 $200000 cm^2/g$)을 시멘트 질량 대비 5, 10, 15 % 치환 혼입한 구조용 콘크리트($W/B = 0.45$)의 공진 주파수(Resonant Frequency), 동탄성계수($E_d$), 감쇠비(Damping Ratio $\xi$) 및 손실 계수($\eta$)를 충격 공진법(Impact-Echo Resonance Method)으로 스페인 발렌시아 공과대학교 히네르(V.T. Giner) 교수 연구팀이 규명한 2011년 CBM 논문이다. 실리카퓸 10 % 치환 시 수화 미세조직 치밀화로 동탄성계수가 **38.2 GPa에서 42.5 GPa로 11.3 % 증가**하는 동시에, 미세 ITZ 점탄성 마찰 기전에 의해 동적 감쇠비 $\xi$가 **1.85 %에서 2.45 %로 32.4 % 대폭 향상**됨을 실증하였다.

## Key Contributions
- **실리카퓸 치환율(0, 5, 10, 15 %)에 따른 콘크리트 동적 파라미터($E_d, G_d, \xi$) 정밀 정량화**: 강성과 감쇠능의 동시 향상 윈도우 규명.
- **ASTM C215 충격 공진 기법을 통한 종방향/휨 공진 주파수 측정 체계 확립**: 가속도계 및 고속 FFT 주파수 스펙트럼 분석.
- **실리카퓸 미세 충전이 동적 감쇠에 미치는 복합 메커니즘 해석**: C-S-H 겔 나노 기공의 점탄성 에너지 소산 및 마이크로 결함 계면 마찰 손실.
- **철도 및 고속 인프라 진동 저감 콘크리트 배합 표준 제시**: 동적 진폭 25 % 축소 설계 구현.

## Methods
- 원료: 보통 포틀랜드 시멘트 (CEM I 52.5 R), 비탈포 실리카퓸 ($SiO_2 94.11 \%$, $LOI = 3.08 \%$, 수분 0.60 %), 멜라민계 감수제 (Sikament FF 0.5 ~ 2.0 %).
- 배합 변수 (치환율 0, 5, 10, 15 wt %):
  - **SF-0 (Control)**: 100 % OPC ($W/C = 0.45$)
  - **SF-5**: 실리카퓸 5 wt % 치환
  - **SF-10**: 실리카퓸 10 wt % 치환
  - **SF-15**: 실리카퓸 15 wt % 치환
- 공시체: $100 \times 100 \times 400 mm$ 각주형 콘크리트 시험편.
- 시험: ASTM C215 충격 공진 시험 (종방향, 횡방향, 비틀림 진동 모드), 반파장 대역폭법(Half-power bandwidth) 기반 감쇠비 $\xi$ 산정.

## Results
- 실리카퓸 치환율별 콘크리트 동탄성계수, 공진 주파수 및 감쇠비 데이터 (Table 1 & Results):

| 배합 ID | 실리카퓸 치환율 (%) | 28 d 정탄성계수 $E_s$ (GPa) | 동탄성계수 $E_d$ (GPa) | 1차 휨 공진주파수 (Hz) | 동적 감쇠비 $\xi$ (%) | 감쇠비 향상률 (%) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **SF-0 (Control)** | 0 % | 34.5 | 38.2 | 1850 | **1.85 %** | 기준 (100 %) |
| **SF-5** | 5 % | 36.8 | 40.5 | 1920 | **2.15 %** | +16.2 % |
| **SF-10 (최적)** | **10 %** | **38.5** | **42.5 (+11.3 %)** | **1980** | **2.45 %** | **+32.4 % (최대 감쇠)** |
| **SF-15** | 15 % | 39.0 | 43.0 | 2010 | **2.30 %** | +24.3 % |

## Related Notes
- [[orban-2011-damping-materials-members-structures]] - 재료 감쇠 이론
- [[zheng-2008-dynamic-properties-rubberized-concrete]] - 고무 콘크리트 동적 물성
- [[high-strength-strain-hardening-composites]] - 고성능 복합 구조 설계
