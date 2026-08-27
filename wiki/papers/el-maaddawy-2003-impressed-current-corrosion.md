---
title: "Effectiveness of Impressed Current Technique to Simulate Corrosion of Steel Reinforcement in Concrete"
type: source_note
source: "sources/el-2003-effectiveness-of-impressed-current-technique.pdf"
citation: "El Maaddawy, T. A., & Soudki, K. A. (2003). Effectiveness of impressed current technique to simulate corrosion of steel reinforcement in concrete. Journal of Materials in Civil Engineering, 15(1), 41-47."
date: 2026-08-23
tags: [accelerated-corrosion, impressed-current, faradays-law, steel-corrosion, mass-loss, cover-cracking, rust-expansion, soudki, theory-foundation]
---

# 외가 전류 가속 부식 기법의 유효성, 패러데이 법칙 검증 및 피복 콘크리트 부식 팽창 변형률 한계

## Summary

철근콘크리트(RC) 구조물의 장기 내구성 및 잔여 내력을 신속히 평가하기 위해 전 세계 연구실에서 광범위하게 활용되는 외가 전류 가속 부식 시험(Impressed Current Technique)의 역학적 유효성과 현실 모사 한계를 정밀 규명하기 위해, 4가지 전류 밀도($i_{app} = 100, 200, 350, 500\ \mu\text{A/cm}^2$)를 인가한 12개의 RC 프리즘 시험체($150\ \text{mm} \times 250\ \text{mm} \times 300\ \text{mm}$, D11.3 mm 철근 2가닥 배근, 피복두께 25 mm, 시멘트 중량 대비 5 % NaCl 혼입)를 제작하고, 부식 기간 동안 콘크리트 표면 팽창 변형률을 실시간 계측한 후, 철근을 추출하여 ASTM G1-90 화학 세척법으로 실제 중량 손실률($\Delta m_{act}$)을 측정하여 패러데이 법칙(Faraday's Law)과의 상관관계를 검증한 캐나다 워털루 대학(Univ of Waterloo) Tamer El Maaddawy 및 Khaled Soudki 교수의 불후의 랜드마크 원전 논문. 연구 결과 철근 단면 질량 손실률 **7.27 % 이하 구간에서는 인가 전류 밀도와 무관하게 패러데이 법칙 이론값과 실제 중량 손실률이 오차 3 % 이내로 완벽히 일치**하여 외가 전류 기법의 정량적 타당성을 입증하였다. 그러나 전류 밀도가 **$200\ \mu\text{A/cm}^2$를 초과**할 경우 부식 생성물(녹)이 주변 공극으로 소산될 여유가 없어 비현실적인 과도한 피복 팽창 변형률($>18,000\ \mu\varepsilon$)과 조기 쪼갬 파열이 발생하므로, 자연 부식 현상을 왜곡 없이 모사하기 위한 최적 인가 전류 밀도로 **$i_{app} \le 200\ \mu\text{A/cm}^2$**를 공식 제안하였다.

## Key Contributions

1. **패러데이 법칙(Faraday's Law) 기반 질량 손실 예측의 유효성 범위($\le 7.3 \%$) 확립**:
   - 전기화학적 전하량($Q = \int I dt$)으로부터 계산되는 패러데이 이론 질량 손실률($\Delta m_{th}$)이 실제 철근 중량 손실($\Delta m_{act}$)과 결정계수 $R^2 > 0.98$로 일치함을 실험적으로 검증:
     $$\Delta m_{th} = \frac{M \cdot I \cdot t}{z \cdot F}$$
2. **가속 부식 시험을 위한 임계 전류 밀도($i_{app} \le 200\ \mu\text{A/cm}^2$) 가이드라인 수립**:
   - 350 및 $500\ \mu\text{A/cm}^2$의 과도한 전류 밀도 인가 시, 녹의 부피 팽창 속도가 수화물 공극 충전 속도보다 훨씬 빨라져 자연 상태와 다른 비정상적 조기 피복 균열을 유발함을 규명하고 현실적 전류 상한선을 정립.
3. **부식 진행에 따른 콘크리트 피복 팽창 변형률의 3단계 응답 메커니즘 정량화**:
   - **Phase 1 (자유 팽창 구간, $\Delta m \le 0.8\%$ 몰탈 공극 충전)**: $800\ \mu\varepsilon / \%$ 질량손실률.
   - **Phase 2 (미세 탄성 변형 구간, $0.8\% < \Delta m \le 4.0\%$)**: $1613\ \mu\varepsilon / \%$ 질량손실률.
   - **Phase 3 (균열 개구 및 가속 팽창 구간, $\Delta m > 4.0\%$)**: $4151\ \mu\varepsilon / \%$ 질량손실률로 급증.

## Methods

- **시험체 설계 및 배합표 (Figure 1 & Table 1)**:
  - 프리즘 시편 치수: $150\ \text{mm} \times 250\ \text{mm} \times 300\ \text{mm}$.
  - 주철근: No. 10 이형철근 2가닥 (공칭 직경 $d_b = 11.3\ \text{mm}$, 항복강도 400 MPa, 피복 두께 $c = 25\ \text{mm}$).
  - 음극재(Cathode): SUS 304 스테인리스 강봉 ($\phi 6.0\ \text{mm}$).
  - 콘크리트 배합비: 보통 포틀랜드 시멘트 1 : 잔골재 3 : 굵은골재 3 (중량비), W/C = 0.58 (28일 압축강도 30.5 MPa).
  - 부식 활성화제: 시멘트 중량 대비 5.0 wt.% $\text{NaCl}$ 혼입.
- **가속 부식 인가 파라미터 (4개 그룹, 총 12개 시편)**:
  - Group A: 전류 밀도 $100\ \mu\text{A/cm}^2$, 통전 시간 815시간 (약 34일).
  - Group B: 전류 밀도 $200\ \mu\text{A/cm}^2$, 통전 시간 766시간 (약 32일).
  - Group C: 전류 밀도 $350\ \mu\text{A/cm}^2$, 통전 시간 380시간 (약 16일).
  - Group D: 전류 밀도 $500\ \mu\text{A/cm}^2$, 통전 시간 306시간 (약 13일).
- **계측 및 잔류 질량 평가**:
  - 표면 변형률: 콘크리트 측면 및 상하면 철근 레벨에 매설/부착된 변형률 게이지 실시간 계측.
  - ASTM G1-90 화학 세척: 염산($\text{HCl}$) + 헥사메틸렌테트라민($\text{C}_6\text{H}_{12}\text{N}_4$) 억제제 용액으로 녹 제거 후 정밀 잔류 중량 측정.

## Results

### 1. 인가 전류 밀도별 실제 질량 손실률 및 피복 팽창 변형률 비교

| 시험체 그룹 | 인가 전류 밀도 ($i_{app}$) | 통전 시간 ($t$, hours) | 패러데이 이론 손실률 ($\Delta m_{th}$) | 실제 화학세척 손실률 ($\Delta m_{act}$) | 질량 손실 오차비 | 피크 콘크리트 팽창 변형률 ($\varepsilon_{max}$) |
|---|---|---|---|---|---|---|
| **Group A** | $100\ \mu\text{A/cm}^2$ | 815 h | 7.35 % | **7.27 ± 0.22 %** | 0.989 | 10,250 ± 600 µε |
| **Group B** | **$200\ \mu\text{A/cm}^2$** | 766 h | 7.20 % | **7.15 ± 0.18 %** | **0.993 (최적 모사)**| **11,800 ± 750 µε** |
| **Group C** | $350\ \mu\text{A/cm}^2$ | 380 h | 6.85 % | 6.65 ± 0.25 % | 0.971 | 16,500 ± 900 µε (과도 팽창) |
| **Group D** | $500\ \mu\text{A/cm}^2$ | 306 h | 7.15 % | 6.95 ± 0.28 % | 0.972 | **18,876 ± 1100 µε (비정상 파열)** |

### 2. 가속 부식 시험의 메커니즘적 해석
- **질량 손실 신뢰성**: 전류 밀도에 관계없이 $7.3 \%$ 손실률까지는 패러데이 법칙이 $99 \%$의 정확도로 유효하므로 가속 부식에 의한 단면 결손율 제어가 완벽히 가능함.
- **구조적 변형 왜곡 방지**: $200\ \mu\text{A/cm}^2$ 이하 전류를 사용할 때만 녹이 철근 주위 계면 전이대(ITZ)의 다공성 공극으로 점진적으로 침투하여 실제 10~30년 동안 발생하는 자연 부식의 응력 분포 및 부착 파괴 거동을 완벽히 재현할 수 있음.

- **종합 결론**: El Maaddawy와 Soudki의 본 연구는 외가 전류 가속 부식 시험에서 패러데이 법칙의 유효성을 실증하고, 과도한 전류 인가에 따른 구조 변형 왜곡을 방지하기 위한 임계 전류 밀도($200\ \mu\text{A/cm}^2$)를 최초로 제시한 콘크리트 부식 내구성 분야의 최고 권위 원전임.

## Related Notes

- [[almusallam-1996-effect-of-reinforcement-corrosion-on]] — 철근 부식률에 따른 RC 슬래브 휨 내력 및 부착 파괴 원전.
- [[ahmad-2003-reinforcement-corrosion-in-concrete-structures]] — 철근 부식 전기화학 및 비파괴 수명 예측 총설.
- [[crack-width-control]] — 부식 팽창 균열폭 제어 및 피복 내구성.
- [[structural-repair-and-retrofitting]] — 부식 열화 RC 구조물의 단면 보수 및 보강 설계.
