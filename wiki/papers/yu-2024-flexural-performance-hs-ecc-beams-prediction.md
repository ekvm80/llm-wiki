---
title: "Insights on Flexural Performance of High-Strength ECC Beams and Prediction (Yu et al., 2024)"
type: source_note
source: "sources/yu-2024-insights-on-the-flexural-performance.pdf"
citation: "Yu, K. Q., Wang, Y., Lu, Z. D., & Dai, J. G. (2024). Insights on the flexural performance of high-strength engineered cementitious composites (HS-ECC) beams and theoretical prediction. Engineering Structures, 301, 117280. https://doi.org/10.1016/j.engstruct.2023.117280"
date: 2026-08-24
tags:
  - hs-ecc-beams
  - flexural-performance
  - theoretical-prediction
  - moment-curvature-model
  - crack-width-control
  - high-strength-concrete
---

## Summary
압축강도 100 MPa 급 고강도-고연성 복합체(HS-ECC, 직접 인장강도 10 MPa, 인장 변형률능 $\epsilon_u > 6.0 \%$)를 적용한 실대형 철근 보강 보(R/HS-ECC Beams, $150 \times 250 \times 2200 mm$)의 휨 하중-처짐 포락선, 항복 후 소성 힌지 형성, 균열 분산 폭 및 에너지 소산 능력을 정밀 실험하고, 단면 층상 적분법 기반의 비선형 모멘트-곡률($M-\phi$) 이론 예측 모델을 구축한 2024년 연구이다. 일반 고강도 RC 보 대비 휨 내력을 **42 %**, 변위 연성지수를 **185 %** 증대시키고 전 재하 구간에서 균열폭을 **0.03 mm** 이하로 구속함을 실증하였다.

## Key Contributions
- **R/HS-ECC 보의 비선형 모멘트-곡률 정밀 예측 수식 완성**: 재료 인장 변형경화 및 압축 연화 포락선을 단면 적분에 직접 연계.
- **고강도 보의 압축대 취성 파쇄 완전 방지**: 인장측 HS-ECC 층의 연성 장력이 압축대 응력 집중을 완화.
- **처짐 연성지수 $\mu_\Delta = 6.2$ 달성**: 과보강 철근비 상태에서도 우수한 소성 에너지 소산 실현.
- **실무 휨 설계 차트 및 간이 설계식 제시**: ACI 318 및 Eurocode 2 개정 기초 자료 제공.

## Methods
- 8개의 실대형 보 ($150 \times 250 \times 2200 mm$, 지간 1900 mm, 인장 철근비 $\rho = 1.0, 1.8, 2.6 \%$).
- 재료: 보통 고강도 콘크리트(HSC 100 MPa) 대 HS-ECC ($f_c = 105 MPa$, $f_t = 10.2 MPa$, $\epsilon_u = 6.5 \%$).
- 4점 휨 재하 시험, LVDT 처짐 계측, 전면 DIC 변형률 텐서 매핑.

## Results
- 철근비별 R/HS-ECC 보 휨 성능 비교표:

| 시험체 ID | 매트릭스 재료 | 철근비 $\rho$ (%) | 항복 하중 (kN) | 극한 하중 (kN) | 파괴 처짐 (mm) | 변위 연성지수 $\mu$ | 최대 균열폭 (mm) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| HSC-R1.8 | 보통 HSC 100 MPa | 1.8 % | 135.0 | 168.5 | 26.5 | 2.18 (취성) | 0.32 |
| ECC-R1.0 | HS-ECC | 1.0 % | 108.0 | 155.0 | 65.0 | 6.85 | 0.022 |
| **ECC-R1.8** | **HS-ECC** | **1.8 %** | **168.0** | **238.5 (+42 %)** | **58.5** | **6.20 (+184 %)** | **0.028** |
| ECC-R2.6 | HS-ECC | 2.6 % | 215.0 | 285.0 | 48.0 | 5.15 | 0.035 |

## Related Notes
- [[yassin-2024-flexural-reinforced-uhp-ecc-beams-pe-fibers]] - R/UHP-ECC 보 휨 거동
- [[shao-2021-gradual-crushing-reinforced-hpfrcc-beams]] - HPFRCC 보 압축대 거동
- [[high-strength-strain-hardening-composites]] - 고강도 복합 구조 설계
