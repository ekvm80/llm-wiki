---
title: "Flexural Behavior of Steel Reinforced EGC Beams (Zou et al., 2020)"
type: source_note
source: "sources/zou-2020-flexural-behavior-of-steel-reinforced.pdf"
citation: "Zou, C., Zhang, Z., & Zhu, H. (2020). Flexural behavior of steel reinforced engineered geopolymer composite (R/EGC) beams. Engineering Structures, 218, 110850. https://doi.org/10.1016/j.engstruct.2020.110850"
date: 2026-08-24
tags:
  - reinforced-egc
  - flexural-behavior
  - rc-beams
  - crack-distribution
  - ductility-index
  - structural-testing
---

## Summary
고연성 무시멘트 지오폴리머 복합체(PVA-EGC, $f_c = 52 MPa$, 직접 인장 변형률능 $4.8 \%$)를 철근콘크리트 구조용 보($150 \times 250 \times 2200 mm$)에 전면 적용한 실대형 강재 보강 R/EGC 보의 휨 균열 분산, 철근 항복 후 하중 지지력, 단면 처짐 연성 및 파괴 메커니즘을 4점 휨 재하 실험과 단면 해석으로 규명한 Engineering Structures 논문이다. EGC 매트릭스의 유사 인장 항복 가교력이 작용하여 사용 하중 상태에서의 최대 균열폭을 **0.04 mm** 이하로 구속하고, 처짐 연성 지수($\mu_\Delta$)를 보통 RC 보 대비 **2.1배** 향상된 **$\mu_\Delta = 6.8$**로 증대시킴을 실증하였다.

## Key Contributions
- **실대형 강재 보강 R/EGC 보의 휨 지배 메커니즘 규명**: 콘크리트 인장 균열의 국소화를 차단하고 70개 이상의 휨 미세균열로 분산.
- **휨 내력 및 처짐 연성 동시 증대**: 극한 휨 하중 28 % 상승, 처짐 연성 지수 $\mu_\Delta = 6.8$ 확보.
- **사용성 한계상태 균열폭 제어**: 사용 하중 단계 균열폭을 0.04 mm 이하로 완벽 차단.
- **친환경 무시멘트 복합 구조재의 실구조 적용 표준 확립**: 탄소 배출 70 % 삭감 실현.

## Methods
- 6개의 실대형 보 ($150 \times 250 \times 2200 mm$, 인장 철근비 $\rho = 0.85, 1.45, 2.10 \%$).
- 재료: 보통 콘크리트(NC 45 MPa) 대 PVA-EGC ($f_c = 52 MPa$, 직접 인장강도 $5.4 MPa$, $\epsilon_u = 4.8 \%$).
- 시험: 4점 휨 재하 시험 (지간 1800 mm, 순수 휨 구간 600 mm), LVDT 처짐 및 전면 DIC 균열 계측.

## Results
- 인장 철근비별 보 시험체 휨 역학 성능 비교표:

| 시험체 ID | 매트릭스 재료 | 철근비 $\rho$ (%) | 초기 휨 균열 하중 (kN) | 항복 하중 (kN) | 극한 휨 하중 (kN) | 처짐 연성지수 $\mu_\Delta$ | 최대 균열폭 (mm) |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| RC-Control | 보통 콘크리트 | 1.45 % | 18.5 | 85.0 | 98.0 | 3.2 | 0.35 |
| **R/EGC-1** | **PVA-EGC** | **0.85 %** | **35.0** | **68.0** | **85.0** | **7.5** | **0.035** |
| **R/EGC-2** | **PVA-EGC** | **1.45 %** | **38.5** | **105.0** | **125.4 (+28 %)** | **6.8 (+112 %)** | **0.040 (-89 %)** |

## Related Notes
- [[zhong-2020-flexural-shear-reinforced-ecc-beams]] - R/ECC 보 휨-전단 거동
- [[yassin-2024-flexural-reinforced-uhp-ecc-beams-pe-fibers]] - R/UHP-ECC 보 휨 거동
- [[high-strength-strain-hardening-composites]] - 고성능 복합 구조 설계
