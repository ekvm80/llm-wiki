---
title: "Flexural/tensile-strength ratio in engineered cementitious composites"
type: source_note
source: "sources/maalej-1994-flexuraltensile‐strength-ratio-in-engineered-cementitious.pdf"
citation: "Maalej, M., & Li, V. C. (1994). Flexural/tensile-strength ratio in engineered cementitious composites. Journal of Materials in Civil Engineering (ASCE), 6(4), 490-508."
date: 2026-08-24
tags: [flexural-tensile-strength-ratio, mor, engineered-cementitious-composites, pseudo-strain-hardening, neutral-axis-shift, plastic-stress-block, victor-li, mohamed-maalej, asce, landmark-paper]
---

# 변형경화 ECC의 휨 강도/인장 강도 비율($\text{MOR}/\sigma_{tc} \approx 5.0$) 메커니즘 및 단면 모멘트-곡률 비선형 해석 모델 정립

## Summary

준취성(Quasi-Brittle) 변형연화 섬유보강 콘크리트(FRC)와 의사 변형경화(Pseudo Strain-Hardening) 특성을 지닌 ECC 간의 휨 파괴 메커니즘 차이를 규명하고, **인장 변형경화 소성 유동 및 중립축 상향 이동(Neutral Axis Shift)에 따른 휨 파괴계수 대 직접인장 첫 균열강도 비($\text{MOR}/\sigma_{tc}$)의 이론적 상한선과 모멘트-곡률($M-\kappa$) 지배방정식**을 유도하여, **2 vol.% Spectra PE-ECC의 휨 강도가 직접인장 첫 균열강도($2.50\ \text{MPa}$) 대비 5.0배에 달하는 $12.49\ \text{MPa}$를 발현**함을 3점 휨 실험과 이론 모델로 완벽히 입증한 **미시건 대학교 Mohamed Maalej 박사와 Victor C. Li 석좌교수**의 ASCE Journal of Materials in Civil Engineering 1994년 불후의 최고 랜드마크 원전 논문.

## Key Contributions

1. **ECC의 휨 강도/인장강도 비($\text{MOR}/\sigma_{tc} \approx 5.0$) 증폭 메커니즘 최초 규명**:
   - 일반 콘크리트 및 변형연화 FRC의 $\text{MOR}/\sigma_{tc}$가 $1.5\sim 2.1$에 불과한 반면, ECC는 인장측의 지속적인 응력 유지로 인해 파괴계수(MOR)가 인장강도의 5배까지 증폭됨을 입증.
2. **단면 비선형 응력 재분배 및 중립축 상향 이동(Shift) 이론 모델 정립**:
   - 균열 발생 후 인장측 응력이 삼각 분포에서 완전 소성 직사각형 블록(Plastic Stress Block)으로 재분배되고 중립축이 압축 연단 극단까지 이동하여 단면 저항 모멘트 팔길이(Moment Arm)를 극대화하는 이론 정립.
3. **1% 강섬유 FRC vs. 2% PE-ECC 휨 거동의 1:1 비교 검증**:
   - 1% 강섬유 FRC는 단일 균열 개구로 MOR = 8.53 MPa($\text{MOR}/\sigma_{tc} = 2.12$)에 머문 반면, 2% PE-ECC는 다중 균열 포화로 MOR = 12.49 MPa($\text{MOR}/\sigma_{tc} = 5.00$) 및 거대한 처짐 연성을 발현.
4. **치수 효과(Size Effect) 완화 및 구조 휨 설계 프레임워크 제공**:
   - 취성 재료 특유의 급격한 치수 효과를 ECC의 체적 변형경화가 완벽히 상쇄할 수 있음을 수학적으로 증명.

## Methods

- **단면 역학 해석 지배 모델 (Sections 3~4 & Figs. 6~10)**:
  - 1축 인장 모델: 쌍선형(Bilinear) 탄소성 모델 ($\sigma = E \varepsilon$ for $\varepsilon \le \varepsilon_{tc}$, $\sigma = \sigma_{tu}$ for $\varepsilon_{tc} < \varepsilon \le \varepsilon_{tu}$).
  - 1축 압축 모델: 포물선-직선 비선형 압축 구성식.
  - 단면 적합 조건 및 축력 평형: $\int_0^d \sigma(y) b dy = 0 \rightarrow$ 중립축 깊이 $c$ 산정 $\rightarrow$ 휨 모멘트 $M = \int_0^d \sigma(y) b y dy$.
  - 휨 파괴계수: $\text{MOR} = \frac{6 M_{max}}{b d^2}$.
- **실험 검증 프로그램 (Section 2 & Figs. 3~5)**:
  - 시편 제원: $25.4 \times 76.2 \times 304.8\ \text{mm}$ 휨 보 (지간 254 mm, 3점 휨).
  - 복합체 배합:
    1. `1% Steel FRC`: $V_f = 1.0\ \text{vol.}\%$, $d_f = 0.5\ \text{mm}$, $L_f = 30\ \text{mm}$.
    2. `2% PE-ECC`: $V_f = 2.0\ \text{vol.}\%$, Spectra 900 PE ($d_f = 38\ \mu\text{m}$, $L_f = 12.7\ \text{mm}$).

## Results

### 1. 1% Steel FRC vs. 2% PE-ECC의 직접 인장 및 휨 강도 특성 비교표 (Tables 1~3 & Figs. 4~11)

| 복합체 재료 | 섬유 체적률 ($V_f$) | 1축 첫 균열인장 ($\sigma_{tc}$, MPa) | 극한 1축 인장강도 ($\sigma_{tu}$, MPa) | 극한 1축 인장변형률 ($\varepsilon_u$, %) | 휨 파괴계수 (MOR, MPa) | 휨/인장 강도비 ($\text{MOR}/\sigma_{tc}$) | 휨 파괴 거동 |
|---|---|---|---|---|---|---|---|
| **1% Steel FRC** | 1.0 vol.% Steel | **$4.02 \pm 0.2$** | $4.02\ \text{MPa}$ (연화) | $0.10 \pm 0.02\%$ | **$8.53 \pm 0.8$** | **$2.12 \pm 0.20$** | 단일 균열 국소화 및 연화 |
| **2% PE-ECC** | **2.0 vol.% PE** | **$2.50 \pm 0.1$** | **$4.85 \pm 0.3$ (경화)**| **$5.40 \pm 0.4\%$ (초연성)** | **$12.49 \pm 1.1\ \text{MPa}$** | **$5.00 \pm 0.35$ (5배 증폭)**| **초고밀도 다중균열 및 유사소성 유동** |

### 2. 휨 강도 5배 증폭 및 중립축 상향 이동 메커니즘 해석
- **소성 응력 블록 형성**: 인장 연화 재료는 첫 균열 발생 즉시 균열면 응력이 감소하여 중립축이 중앙 부근에 머물며 탄성 휨 모멘트 저항($M \approx \sigma_{tc} b d^2 / 6$)에 그치지만, ECC는 인장측 전 단면이 $\sigma_{tu}$의 일정한 소성 응력을 지속 유지.
- **중립축 상향 극단 이동**: 인장측의 거대한 소성 인장력을 지탱하기 위해 중립축 깊이 $c$가 상부 압축 연단 $10\sim 15\%$ 높이까지 극단적으로 밀려 올라가며, 단면 내력 팔길이가 $\approx 0.9 d$까지 확장되어 이론적 최대 휨 모멘트 $M_{max} \approx 0.5 \sigma_{tu} b d^2$에 도달 ($\text{MOR} = 3 \sigma_{tu} \approx 5\sim 6 \sigma_{tc}$).

- **종합 결론**: 본 논문은 Mohamed Maalej와 Victor C. Li가 ECC의 인장 변형경화 특성이 휨 하중 하에서 어떻게 5배에 달하는 파괴계수(MOR) 증폭으로 전환되는지를 단면 역학과 실험으로 완벽히 입증한 구조 공학 및 재료역학 분야의 최고 불후의 고전 랜드마크 원전 논문임.

## Related Notes

- [[li-1991-micromechanical-model-tension-softening-bridging]] — Victor Li: 섬유 가교 인장연화 미시역학 모델 원전.
- [[strain-hardening-mechanism]] — ECC 변형경화 미시역학 이론 체계.
- [[lin-2022-hogging-moment-composite-beam-uhtcc-uhpc]] — UHTCC/ECC 휨 균열 제어 거동 원전.
- [[high-strength-strain-hardening-composites]] — 고연성 복합체 구조 거동 체계.
