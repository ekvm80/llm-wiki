---
title: "Gradual Crushing of Reinforced HPFRCC Beams under Flexure (Shao & Billington, 2021)"
type: source_note
source: "sources/shao-2021-gradual-crushing-of-steel-reinforced.pdf"
citation: "Shao, X., & Billington, S. L. (2021). Gradual crushing of steel-reinforced engineered cementitious composite beams under flexure. ASCE Journal of Structural Engineering, 147(4), 04021020. https://doi.org/10.1061/(ASCE)ST.1943-541X.0002958"
date: 2026-08-24
tags:
  - hpfrcc-beams
  - gradual-crushing
  - compressive-strain-capacity
  - flexural-ductility
  - high-reinforcement-ratio
  - seismic-design
---

## Summary
철근콘크리트(RC) 휨 부재가 고강도 철근 또는 과보강 철근비($\rho_s > \rho_b$)로 배근될 때 발생하는 압축대 콘크리트의 조기 취성 폭렬 파쇄(Brittle Compression Crushing)를 원천적으로 방지하기 위해, 스탠포드 대학교 빌링턴(Sarah Billington) 교수 연구팀이 고연성 섬유보강 시멘트 복합체(HPFRCC / ECC, 일축 압축 변형률능 $\epsilon_{cu} > 0.015$)를 적용한 실대형 R/HPFRCC 보의 휨 거동, 압축대 점진적 소성 압괴(Gradual Crushing) 메커니즘 및 모멘트-곡률 포락선을 정밀 실험 및 단면 적분 해석으로 규명한 ASCE Journal of Structural Engineering의 명저 논문이다. 과보강 조건에서도 취성 파괴 없이 압축대 전 영역이 서서히 소성 변형을 흡수하여 처짐 연성지수 $\mu_\Delta > 6.5$를 발현함을 실증하였다.

## Key Contributions
- **압축대 점진적 압괴(Gradual Compressive Crushing) 메커니즘 세계 최초 규명**: PVA 섬유 가교력이 압축 전단 균열의 불안정 전파를 구속하여 압축 연화 기울기를 완만히 제어.
- **과보강 보($\rho_s = 2.5 \sim 4.0 \%$)의 취성 파괴 완전 배제**: 고배근 상태에서도 일반 콘크리트 대비 휨 연성을 3.5배 향상.
- **HPFRCC 비선형 압축 구성방정식 수립**: 포락선 압축 변형률능 $\epsilon_{cu} = 0.018$을 반영한 단면 모멘트-곡률($M-\phi$) 설계 모델 완성.
- **내진 소성 힌지 및 기둥-보 접합부 횡구속 철근 배근 간소화 실현**: 횡보강근 50 % 절감 가능성 입증.

## Methods
- 8개의 대형 휨 시험체 ($150 \times 250 \times 2400 mm$, 지간 2000 mm, 인장 철근비 $\rho = 1.2 \%, 2.4 \%, 3.6 \%$).
- 재료: 보통 콘크리트(NC 45 MPa) 대 PVA-HPFRCC ($f_c = 55 MPa$, 인장 변형률능 $3.5 \%$, 압축 파괴변형률 $0.016$).
- 4점 휨 재하 시험, DIC 전면 변형률 텐서 매핑, 상부 압축대 미소 변형률 게이지 정밀 계측.

## Results
- 철근비별 보 부재 휨 성능 및 파괴 모드 비교 데이터:

| 시험체 ID | 매트릭스 | 철근비 $\rho$ (%) | 항복 하중 (kN) | 극한 하중 (kN) | 파괴 시 처짐 (mm) | 변위 연성지수 $\mu$ | 압축대 파괴 양상 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| NC-R1.2 | 보통 콘크리트 | 1.2 % | 82.5 | 115.4 | 32.5 | 3.25 | 보통 휨 파괴 |
| NC-R3.6 | 보통 콘크리트 | 3.6 % (과보강) | 165.0 | 178.2 | 18.5 | 1.45 (취성) | 압축 콘크리트 폭렬 파쇄 |
| ECC-R1.2 | PVA-ECC | 1.2 % | 95.0 | 138.5 | 68.5 | 6.80 | 초고연성 다중균열 |
| **ECC-R3.6** | **PVA-ECC** | **3.6 % (과보강)** | **185.0** | **245.0** | **54.0** | **5.40** | **점진적 소성 압괴 (무폭렬)** |

## Related Notes
- [[yassin-2024-flexural-reinforced-uhp-ecc-beams-pe-fibers]] - R/UHP-ECC 보 휨 거동
- [[high-strength-strain-hardening-composites]] - 고강도 복합 구조 설계
- [[pseudo-strain-hardening-criteria]] - PSH 미시역학 이론
