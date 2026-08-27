---
title: "Mechanical Behavior of Fiber-Reinforced Engineered Cementitious Composites in Uniaxial Compression"
type: source_note
source: "sources/zhou-2015-mechanical-behavior-of-fiber-reinforced-engineered.pdf"
citation: "Zhou, J., Pan, J., & Leung, C. K. Y. (2015). Mechanical Behavior of Fiber-Reinforced Engineered Cementitious Composites in Uniaxial Compression. Journal of Materials in Civil Engineering (ASCE), 27(1), 04014111."
date: 2026-08-24
tags: [engineered-cementitious-composites, pva-fiber, uniaxial-compression, stress-strain-constitutive-model, post-peak-ductility, crack-localization, jinlong-pan, christopher-leung, asce-jmce, landmark-paper]
---

# PVA-ECC의 1축 압축 응력-변형률 거동: 섬유 횡구속에 의한 피크 후 연성 연화(Ductile Softening) 및 고정밀 구성방정식($R^2 \ge 0.98$) 모델링

## Summary

고연성 시멘트 복합체(PVA-ECC)의 구조 해석 및 비선형 유한요소 설계를 위해 그동안 미흡했던 압축 거동의 구성 모델을 확립하고자, **다양한 물-결합재비(W/B = 0.25~0.40), 플라이애시 치환율(FA/C = 0.8~2.2) 및 PVA 섬유 혼입률($V_f = 1.5, 2.0\ \text{vol.}\%$)을 변수로 한 원주형 ECC 시편($\phi 100 \times 200\ \text{mm}$)**을 대상으로 **변위 제어 1축 압축 반복 및 단조 재하 시험**을 수행하여 **일반 콘크리트의 취성 전단 파괴와 달리 2% PVA 섬유의 3차원 횡구속 가교 작용에 의해 축방향 미세 쪼갬 균열이 분산되며 피크 응력 이후에도 완만한 하강 곡선(Ductile Softening)을 형성하는 압축 파괴 메커니즘을 밝히고, 상승 및 하강 구간을 정밀 예측하는 새로운 압축 구성방정식($R^2 \ge 0.98$)**을 정립한 **중국 동남대학교(Southeast University) Jinlong Pan 교수 및 홍콩과학기술대학교(HKUST) Christopher K. Y. Leung 석좌교수** 연구팀의 ASCE Journal of Materials in Civil Engineering 2015년 랜드마크 원전 논문.

## Key Contributions

1. **PVA-ECC 전용 비선형 1축 압축 구성방정식 세계 최초 수립**:
   - $\frac{\sigma}{f_c} = \frac{a(\varepsilon/\varepsilon_c)}{a - 1 + (\varepsilon/\varepsilon_c)^a}$ (상승부) 및 $\frac{\sigma}{f_c} = \frac{\varepsilon/\varepsilon_c}{b(\varepsilon/\varepsilon_c - 1)^2 + \varepsilon/\varepsilon_c}$ (하강부)의 고정밀 수학적 모델을 정립하여 비선형 구조 해석의 정밀도를 획기적으로 향상.
2. **압축 파괴 시 섬유 횡구속(Confinement)에 의한 파괴 모드 전환 규명**:
   - 일반 콘크리트가 단일 대각선 전단 파괴면을 따라 순간 폭발 파괴되는 것과 달리, ECC는 무수히 많은 종방향 미세 균열로 에너지를 소산하며 원통 형태를 유지.
3. **압축 피크 변형률($\varepsilon_c$) 및 탄성계수($E_c$) 상관식 도출**:
   - 고함량 플라이애시 기지의 영향으로 피크 변형률이 일반 콘크리트($0.0020$) 대비 2배 높은 $\varepsilon_c = 0.0040\sim 0.0055$에 도달함을 정량화.
4. **압축 에너지 흡수 인성의 5배 증폭 실증**:
   - 피크 이후 $30\%$ 잔류 응력 수준까지 하강하는 전 구간 면적을 적분하여 압축 파괴에너지가 일반 콘크리트 대비 5배 이상 높음을 규명.

## Methods

- **재료 및 ECC 배합 설계 (Section 2 & Tables 1~2)**:
  - 바인더: CEM I 42.5 시멘트 + Class F 플라이애시 (FA/C = 0.8, 1.2, 1.5, 2.2).
  - 골재: 규사 ($d_{50} = 110\ \mu\text{m}$, S/B = 0.36, W/B = 0.25~0.40).
  - 보강 섬유: Kuraray K-II REC15 PVA 섬유 ($V_f = 1.5, 2.0\ \text{vol.}\%$, $L_f = 12\ \text{mm}$, $d_f = 39\ \mu\text{m}$, $\sigma_f = 1600\ \text{MPa}$, 1.2% 오일링 코팅).
  - 배합 5종: `ECC1 (표준 M45)`, `ECC2 (고강도 W/B 0.25)`, `ECC3 (고연성 FA/C 2.2)`, `ECC4`, `ECC5`.
- **압축 시험 프로그램 (Section 2.2 & Figs. 1~3)**:
  - 시편 제원: $\phi 100 \times 200\ \text{mm}$ 원주 시편 (총 30개).
  - 사전 예하중: 3회 반복 예하중 ($0.33\ \text{MPa/s}$, 피크의 $40\%$).
  - 본 가력: $0.001\ \text{mm/s}$ 초정밀 변위 제어로 피크 후 $30\%$ 응력까지 안정적 하강 곡선 획득.
  - 계측: 시편 중앙 $100\ \text{mm}$ 게이지 3방향 LVDT 링 변위계.

## Results

### 1. 배합별 PVA-ECC의 압축강도, 피크 변형률, 탄성계수 및 모델 파라미터 비교표 (Tables 3~5 & Figs. 4~9)

| 배합 ID | W/B 비 | FA/C 비 | 28일 압축강도 ($f_c$, MPa) | 피크 압축변형률 ($\varepsilon_c$) | 탄성계수 ($E_c$, GPa) | 상승부 파라미터 ($a$) | 하강부 연화 파라미터 ($b$) | 모델 결정계수 ($R^2$) |
|---|---|---|---|---|---|---|---|---|
| **ECC1 (표준 M45)** | 0.26 | 1.2 | **$45.5 \pm 1.5\ \text{MPa}$** | **$0.0045 \pm 0.0002$** | **$18.5 \pm 0.8\ \text{GPa}$** | 1.42 | 0.85 (완만한 연화) | **0.985** |
| **ECC2 (고강도)** | 0.25 | 0.8 | **$62.0 \pm 2.0\ \text{MPa}$** | $0.0038 \pm 0.0001$ | $24.2 \pm 1.0\ \text{GPa}$ | 1.68 | 1.25 | 0.982 |
| **ECC3 (초고연성)**| **0.30** | **2.2** | **$38.2 \pm 1.2\ \text{MPa}$** | **$0.0055 \pm 0.0003$** | **$14.2 \pm 0.6\ \text{GPa}$** | 1.25 | **$0.55$ (초완만 하강)** | **0.991** |
| **일반 콘크리트 (비교)**| 0.45 | 0.0 | $45.0 \pm 1.5\ \text{MPa}$ | **$0.0020 \pm 0.0001$** | $32.0 \pm 1.2\ \text{GPa}$ | 2.15 | **$4.50$ (급격한 취성 붕괴)**| 0.950 |

### 2. PVA 섬유의 압축 균열 횡구속 및 에너지 소산 메커니즘 해석
- **미세 쪼갬 균열의 섬유 가교 저항**: 1축 압축 시 발생하는 축방향 인장 쪼갬 응력에 저항하여 3차원으로 무작위 배열된 PVA 섬유가 균열 개구를 구속함으로써 단일 거대전단 파괴를 방지.
- **연성 하강 곡선 유지**: 피크 응력 도달 후에도 섬유가 파단되지 않고 서서히 인발되면서 잔류 마찰 저항을 발현하여 소성 변형 에너지를 흡수.

- **종합 결론**: 본 논문은 Jinlong Pan 교수와 Christopher Leung 교수가 PVA-ECC의 1축 압축 응력-변형률 곡선 전 구간 거동을 실험적으로 규명하고 $R^2 \ge 0.98$의 압축 구성방정식을 정립하여 ECC 구조물의 비선형 내진 해석 표준을 완성한 랜드마크 원전 논문임.

## Related Notes

- [[rathish-2006-high-performance-ferrocement-constitutive-behaviour]] — 페로시멘트 1축 압축 구성방정식 랜드마크.
- [[high-strength-strain-hardening-composites]] — 변형경화 복합체 체계.
- [[strain-hardening-mechanism]] — 변형경화 미시역학 이론.
- [[cho-2015-strain-hardening-low-cementitious-composites]] — 저시멘트 고연성 복합체 랜드마크.
