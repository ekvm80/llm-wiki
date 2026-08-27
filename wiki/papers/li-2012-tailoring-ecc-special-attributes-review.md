---
title: "Tailoring ECC for Special Attributes: A Review"
type: source_note
source: "sources/li-2012-tailoring-ecc-for-special-attributes.pdf"
citation: "Li, V. C. (2012). Tailoring ECC for Special Attributes: A Review. International Journal of Concrete Structures and Materials, 6(3), 135-144."
date: 2026-08-24
tags: [ecc, micromechanical-tailoring, special-attributes, he-ecc, hfa-ecc, self-healing, artificial-flaws, lightweight-ecc, victor-li, ijcsm, landmark-paper]
---

# 특수 기능성(초조강, 고내구성 자가치유, 초경량, 친환경) 구현을 위한 ECC 미시역학 기반 맞춤형 재설계(Retailoring) 프레임워크 총설

## Summary

Engineered Cementitious Composites(ECC) 고유의 초고연성(인장변형률 $3\sim 5\%$)을 유지하면서 긴급 구조 보수(초조강 HES-ECC), 영구 내구수명(고용량 플라이애시 HFA-ECC 기반 완전 자가치유), 자중 저감(경량 LW-ECC), 자가감응(Smart Sensing) 등 **다양한 특수 성능을 목적에 맞게 맞춤 구현(Tailoring)하기 위한 미시역학적 재설계(Retailoring) 원리 및 엔지니어링 프레임워크**를 집대성한 **미시건 대학교 Victor C. Li 석좌교수**의 International Journal of Concrete Structures and Materials (IJCSM) 2012년 최고 권위 랜드마크 총설 원전. 특수 기능 성분 첨가로 인해 매트릭스 파괴인성($K_m$) 또는 계면 결합력이 변화하여 PSH 변형경화 밸런스가 무너질 때, **인공 결함(Artificial Flaws, $4\ \text{mm}$ 비드) 도입, 섬유 표면 친수/소수성 제어, 포졸란 미세구조 조절**을 통해 복합체의 인장 연성을 $100\%$ 복원하는 체계적 해법을 제시하였다.

## Key Contributions

1. **특수 기능성 ECC 맞춤 설계를 위한 미시역학 재설계(Retailoring) 방법론 체계화**:
   - 섬유, 매트릭스, 섬유-매트릭스 계면 3대 파라미터 간의 유기적 상호작용을 통해 기능성 첨가제 혼입 시 발생하는 취성화 문제를 수학적으로 진단하고 복원하는 설계 루프 완성.
2. **초조강 HES-ECC(High Early Strength ECC)의 인공 결함(Artificial Flaws) 도입 메커니즘**:
   - 조강 시멘트 수화 발열로 매트릭스 인성 $K_m$이 과도하게 상승하여 연성이 저하되는 문제를 직경 4 mm 폴리스티렌 중공 비드(6.4 wt.%)를 인공 결함으로 심어 다중 균열 개시를 강제함으로써 4시간 압축강도 20 MPa 및 28일 인장변형률 3.0 %를 달성.
3. **고용량 플라이애시 HFA-ECC의 초미세 균열폭($< 50\ \mu\text{m}$) 기반 $95\%$ 완전 자가치유 실증**:
   - FA/C 비 2.2~2.8 적용으로 균열폭을 $20\sim 50\ \mu\text{m}$로 극소화하여, $2.0\%$ 대변형 사전 손상 후에도 미수화 FA 입자의 2차 수화로 인장 강성 및 연신율을 $95\%$ 이상 자가치유 회복.
4. **경량 ECC(LW-ECC) 및 기능성 그린 ECC의 배합 가이드라인 제시**:
   - 중공 세라믹/유리 버블을 활용하여 단위용적질량 $1.2\sim 1.6\ \text{g/cm}^3$의 초경량 상태에서도 인장변형률 $3.0\sim 4.0\%$를 확보하는 배합비 정립.

## Methods

- **미시역학 PSH 2대 기준 회복 메커니즘 (Section 2 & Figs. 1~4)**:
  - 강도 조건: $\sigma_0 \ge \sigma_{fc} = \min\left[ \sigma_0, \frac{K_m}{\sqrt{\pi c_0}} + \frac{2}{\pi} \sigma_0 \arcsin\left(\frac{c}{c_0}\right) \right]$.
  - 에너지 조건: $J_{tip} \approx \frac{K_m^2}{E_m} \le J_b' = \sigma_0 \delta_0 - \int_0^{\delta_0} \sigma(\delta) d\delta$.
- **분석 대상 특수 기능성 ECC 시스템 (Section 3)**:
  1. `HES-ECC`: 초조강 긴급 보수재 (Alite 조강 시멘트 + 4 mm 인공 결함 비드).
  2. `HFA-ECC`: 고용량 플라이애시(FA/C = 2.2~2.8) 자가치유 ECC.
  3. `LW-ECC`: 경량 글래스 버블/펄라이트 치환 ECC.
  4. `Green-ECC`: 산업 부산물 80% 이상 활용 저탄소 ECC.

## Results

### 1. 특수 기능성 ECC 맞춤형 배합별 핵심 성능 및 미시역학적 조율 파라미터 종합 비교표 (Sections 3~4 & Figs. 6~16)

| 기능성 ECC 유형 | 주요 특수 속성 및 적용 분야 | 핵심 미시역학 조율 기술 | 압축강도 ($f_c$, MPa) | 극한 인장강도 ($\sigma_{tu}$, MPa) | 인장변형률 ($\varepsilon_u$, %) | 평균 균열폭 ($w$, $\mu$m) |
|---|---|---|---|---|---|---|
| **표준 ECC (M45)** | 건축·교량 표준 고연성재 | PVA 1.2 % 오일링, S/C = 0.8 | $45 \sim 65\ \text{MPa}$ | $4.5 \sim 5.5\ \text{MPa}$ | **$3.5 \sim 5.0\%$** | $60 \sim 80\ \mu\text{m}$ |
| **HES-ECC (초조강)** | 공항 활주로/교량 4시간 긴급 개통 | **4 mm 인공 결함(6.4 wt.%) 도입** | **4시간 $20\ \text{MPa}$ / 28일 $55\ \text{MPa}$** | $4.2 \pm 0.3\ \text{MPa}$ | **$3.0 \pm 0.3\%$** | $50 \sim 70\ \mu\text{m}$ |
| **HFA-ECC (자가치유)** | 지하구조물/해양 무보수 수명연장 | **FA/C = 2.2~2.8 포졸란 극대화** | $35 \sim 50\ \text{MPa}$ | $4.0 \sim 4.8\ \text{MPa}$ | **$3.5 \sim 4.5\%$** | **$20 \sim 40\ \mu\text{m}$ (초미세)** |
| **LW-ECC (초경량)** | 초고층 외벽/모듈러 구조물 | **글래스 버블 치환 ($\rho = 1.45\ \text{g/cm}^3$)**| $25 \sim 40\ \text{MPa}$ | $3.5 \sim 4.2\ \text{MPa}$ | **$3.0 \sim 4.0\%$** | $50 \sim 75\ \mu\text{m}$ |

### 2. 미시역학 재설계 메커니즘 해석
- **인공 결함에 의한 파괴 제어**: 초조강 매트릭스는 수화열로 인해 모재 인성 $K_m$이 급격히 상승하여 미소 자연 결함에서 균열이 개시되지 못하고 섬유 파단으로 이어지지만, $4\ \text{mm}$ 인공 비드를 투입하여 균열 개시 임계 응력 $\sigma_{fc}$를 낮춤으로써 안정적 다중 균열을 유도.
- **자가치유(Self-Healing) 극대화 메커니즘**: HFA-ECC의 초미세 균열폭($< 50\ \mu\text{m}$) 내로 침투한 수분이 고농도 미수화 플라이애시 입자와 반응하여 $\text{CaCO}_3$ 및 C-S-H 결정을 균열 내부에 고속 석출시킴으로써 2% 사전 균열 손상 부재의 인장 강성을 95% 이상 복원.

- **종합 결론**: 본 논문은 Victor C. Li 교수가 지난 20년간 발전해 온 ECC의 다양한 기능성 파생 배합(초조강, 자가치유, 경량, 그린 등)을 미시역학이라는 단일 이론 체계 하에서 진단하고 재설계하는 표준 엔지니어링 프레임워크를 집대성한 콘크리트 복합재료 분야의 최고 권위 총설 랜드마크 논문임.

## Related Notes

- [[li-2002-interface-tailoring-pva-ecc-oiling-agent]] — Victor Li: PVA-ECC 오일링 계면 테일러링 원전.
- [[lili-2011-hes-ecc-rapid-repair-properties]] — Victor Li: 초조강 HES-ECC 급속 보수 원전.
- [[kanda-2006-saturated-psh-design-criteria-ecc]] — Kanda & Li: 포화 PSH 설계 기준 랜드마크.
- [[strain-hardening-mechanism]] — ECC 변형경화 미시역학 이론 체계.
