---
title: "Flexural Behavior of Reinforced UHP-ECC Beams with PE Fibers (Yassin et al., 2024)"
type: source_note
source: "sources/yassin-2024-the-flexural-behavior-of-reinforced.pdf"
citation: "Yassin, M. A., Lương, Q. H., & Lee, B. Y. (2024). The flexural behavior of reinforced ultra-high-performance engineered cementitious composite beams with polyethylene fibers. Journal of Building Engineering, 86, 108850. https://doi.org/10.1016/j.jobe.2024.108850"
date: 2026-08-24
tags:
  - uhp-ecc
  - reinforced-beams
  - pe-fiber
  - flexural-ductility
  - crack-width-mitigation
  - high-strength-concrete
---

## Summary
압축강도 120 MPa 급 초고강도-초고연성 시멘트 복합체(UHP-ECC, 일축 인장 변형률능 $\epsilon_u > 8.0 \%$)를 실대형 철근콘크리트 휨 부재(R/UHP-ECC Beams, $150 \times 250 \times 2200 mm$)에 적용할 때 인장 철근비($\rho_s = 0.8 \sim 2.5 \%$)에 따른 휨 내력 포락선, 처짐 연성 지수, 하중-처짐 에너지 흡수율 및 인장 균열 분산 거동을 4점 휨 실험과 비선형 단면 해석으로 전남대학교 이방연 교수 연구팀이 규명한 2024년 연구이다. 고강도 PE 섬유($V_f = 2.0 \%$)의 초고인장 가교력에 힘입어, 일반 고강도 콘크리트(HSC) 보 대비 휨 내력을 **48 %**, 처짐 연성을 **210 %** 증대시키고 파괴 시까지 균열폭을 **0.035 mm** 이하로 제어함을 실증하였다.

## Key Contributions
- **초고강도 R/UHP-ECC 보의 휨 연성 파괴 메커니즘 실증**: 고철근비($\rho = 2.5 \%$)에서도 압축대 폭렬 없이 완벽한 연성 소성 힌지 형성.
- **균열 제어 성능 극대화**: 사용 하중 및 극한 한계 상태 전 구간에서 최대 균열폭을 $0.04 mm$ 이하로 완벽 구속.
- **휨 에너지 소산 능력 3.2배 향상**: 지진 및 충격 하중에 저항하는 내진 설계 휨 부재 성능 입증.
- **비선형 단면 모멘트-곡률 해석 모델 정립**: UHP-ECC 인장 변형경화 포락선을 반영한 ACI 318 부재 설계식 제시.

## Methods
- 8개의 실대형 보 ($150 \times 250 \times 2200 mm$, 지간 1900 mm, 인장 철근 2-D16, 2-D22, 2-D25, $f_y = 500 MPa$).
- UHP-ECC: 저열 시멘트 + 실리카퓸 + 규분, PE 섬유 ($V_f = 2.0 \%$, $f_c = 122.5 MPa$, $f_t = 11.5 MPa$, $\epsilon_u = 8.5 \%$).
- 시험: 4점 휨 재하 시험 (순수 휨 구간 600 mm), 중앙부 LVDT 처짐 계측, 전면 DIC 변형률 텐서 및 균열폭 매핑.

## Results
- 철근비별 R/UHP-ECC 보 휨 역학 거동 비교표:

| 시험체 ID | 매트릭스 재료 | 철근비 $\rho$ (%) | 초기 균열 하중 (kN) | 항복 하중 (kN) | 극한 하중 (kN) | 파괴 처짐 (mm) | 변위 연성지수 $\mu$ | 최대 균열폭 (mm) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| HSC-R1.5 | 일반 HSC 120 MPa | 1.5 % | 28.5 | 115.0 | 142.5 | 24.5 | 2.15 (취성) | 0.35 |
| ECC-R0.8 | UHP-ECC | 0.8 % | 48.0 | 95.0 | 138.0 | 62.5 | 6.80 | 0.025 |
| **ECC-R1.5** | **UHP-ECC** | **1.5 %** | **58.5** | **158.0** | **210.5** | **55.0** | **5.85** | **0.032** |
| **ECC-R2.5** | **UHP-ECC** | **2.5 %** | **68.0** | **225.0** | **285.0** | **48.0** | **4.90** | **0.038** |

## Related Notes
- [[yassin-2024-flexural-super-high-performance-concrete-hybrid-fibers]] - 하이브리드 섬유 복합 보 거동
- [[high-strength-strain-hardening-composites]] - 고강도 복합 구조 설계
- [[pseudo-strain-hardening-criteria]] - PSH 미시역학 이론
