---
title: "The Damping Ratio of Rubber Modified Concrete (Lin et al., 2010)"
type: source_note
source: "sources/rubber concrete.pdf"
citation: "Lin, R. X., Liu, Y. F., & Wang, J. H. (2010). The damping ratio of rubber modified concrete. Advanced Materials Research, 168-170, 1406-1410. https://doi.org/10.4028/www.scientific.net/AMR.168-170.1406"
date: 2026-08-24
tags:
  - rubber-modified-concrete
  - damping-ratio
  - vibration-attenuation
  - impact-resonance
  - dynamic-elasticity
---

## Summary
폐타이어 재활용 고무 분말(Rubber Powder, 입경 $0.5 \sim 2.0 mm$)을 모래 대체 잔골재로 체적 치환(0, 5, 10, 15, 20 vol %)한 고무 개질 콘크리트(Rubber Modified Concrete, RMC)의 자유 진동 감쇠 응답, 동탄성계수($E_d$) 및 재료 감쇠비(Damping Ratio $\zeta$)를 외팔보 자유 진동 링다운(Ring-down) 시험과 충격 해머 모달 시험으로 규명한 연구이다. 고무 분말의 높은 점탄성 에너지 소산과 매트릭스-고무 계면 마찰 작용으로 인해 고무 치환율 20 vol %에서 감쇠비가 일반 콘크리트($\zeta = 1.25 \%$) 대비 **2.3배** 증가한 $\zeta = 2.88 \%$를 발현하고 진동 감쇠 시간을 60 % 단축시킴을 정량 입증하였다.

## Key Contributions
- **고무 입자 함량에 따른 콘크리트 감쇠비 증가 지수 수식화**: $\zeta = \zeta_0 (1 + 0.065 r_v)$ 선형 상관 모델 수립 ($R^2 = 0.98$).
- **자유 진동 가속도 시간 이력 감쇠 해석**: 대수 감쇠율(Logarithmic Decrement $\delta$) 측정을 통한 신뢰성 높은 모드 감쇠비 추출.
- **동탄성계수 저하 및 감쇠 증대의 역학 트레이드오프 분석**: 탄성계수는 35 GPa에서 24 GPa로 완만히 감소하면서 충격 흡수능은 130 % 향상.
- **철도 궤도 슬래브 및 도로 포장 완충 구조재 적용성 확립**: 통과 열차 및 차량 진동 5 dB 저감 실현.

## Methods
- 배합: 보통 포틀랜드 시멘트 ($W/C = 0.42$), 고무 분말 치환율 $0, 5, 10, 15, 20 vol \%$.
- 공시체: $100 \times 100 \times 500 mm$ 빔 공시체 (외팔보 지지 상태에서 초기 변위 제하 후 자유 진동 계측).
- 계측 장비: 고감도 가속도 센서(PCB 352C33), 동적 신호 분석기(FFT Analyzer), 일축 압축강도 (100 mm 큐브).

## Results
- 고무 치환율별 28 d 역학 물성 및 진동 감쇠 데이터:

| 배합 ID | 고무 치환율 (%) | 28 d 압축강도 (MPa) | 동탄성계수 $E_d$ (GPa) | 대수 감쇠율 $\delta$ | 동적 감쇠비 $\zeta$ (%) | 진동 지속시간 ($s$) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| Control | 0 | 45.2 | 35.4 | 0.078 | 1.25 | 1.85 |
| RMC-5 | 5 | 40.5 | 32.8 | 0.105 | 1.68 | 1.40 |
| RMC-10 | 10 | 35.8 | 29.5 | 0.138 | 2.20 | 1.05 |
| RMC-15 | 15 | 30.2 | 26.2 | 0.162 | 2.58 | 0.85 |
| **RMC-20** | **20** | **25.4** | **23.8** | **0.181** | **2.88** | **0.72** |

## Related Notes
- [[zheng-2008-dynamic-properties-rubberized-concrete]] - 고무 콘크리트 동적 특성 원전
- [[bompa-2017-experimental-constitutive-modelling-rubberised-concrete]] - 고무화 콘크리트 구성모델
- [[orban-2011-damping-materials-members-structures]] - 구조 감쇠 이론
