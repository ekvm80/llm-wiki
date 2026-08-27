---
title: "Flexural Behavior of UHPC-ECC Composite Beams (Liu et al., 2024)"
type: source_note
source: "sources/liu-2024-flexural-behavior-of-uhpc-ecc-composite.pdf"
citation: "Liu, J., Yang, J., & Zhou, X. (2024). Flexural behavior of UHPC-ECC composite beams. Engineering Structures, 301, 117320. https://doi.org/10.1016/j.engstruct.2023.117320"
date: 2026-08-24
tags:
  - uhpc
  - ecc
  - composite-beam
  - flexural-behavior
  - ductility
---

## Summary
압축강도가 극히 높은 초고성능 콘크리트(UHPC, $f_c > 140 MPa$)를 압축측에 배치하고, 인장 연성이 탁월한 고연성 섬유 복합체(ECC, $\epsilon_u > 4.0 \%$)를 인장측에 배치한 UHPC-ECC 하이브리드 복합 보의 휨 성능 및 균열 억제 메커니즘을 규명한 연구이다. UHPC 단일 보의 높은 강도 대비 취성적인 파괴 모드와 ECC 단일 보의 압축 내력 부족 한계를 극복하기 위해, 인장측 철근 주변에 ECC 층을 타설하고 상부에 UHPC 층을 습식 일체 타설하였다. 4점 휨 시험을 통해 단일 UHPC 보 대비 휨 연성지수가 2.8배 증가하고 극한 휨 모멘트가 32 % 증대되는 최적 층간 두께비($h_{ECC}/h = 0.4$)를 도출하였다.

## Key Contributions
- **강도-연성 상호 보완형 하이브리드 단면 설계**: 압축부 UHPC의 고내력 지지와 인장부 ECC의 다중 미세균열($w < 0.05 mm$) 변형능을 극대화한 구조 단면 제안.
- **완전 합성 거동 검증**: 습식 접합(wet-on-wet casting)을 통해 UHPC-ECC 계면 전단 파괴를 원천 방지하고 단면 소성 휨 해석 모델의 유효성 검증.
- **철근 항복 후 휨 연성 및 균열 분산 극대화**: 주철근 항복 이후에도 인장측 ECC 층이 응력을 분담하여 부재의 처짐 능력을 $L/25$ 이상으로 대폭 향상.

## Methods
- **재료 사양**:
  - UHPC: 압축강도 $145 MPa$, 강섬유 $2.0 vol \%$.
  - ECC: 압축강도 $52 MPa$, 인장강도 $6.2 MPa$, 변형률능 $4.5 \%$, PVA 섬유 $2.0 vol \%$.
- **시험체 제원**: $150 \times 250 \times 2200 mm$ 보, $h_{ECC}/h = 0.0, 0.2, 0.4, 0.6, 1.0$, 인장철근비 1.2 %.
- **시험 항목**: 4점 휨 재하 시험(지간 1800 mm), 처짐, 균열폭, 단면 변형률 분포 계측.

## Results
- 순수 UHPC 보: 최대 하중 $142 kN$, 파괴 시 휨 연성지수 $\mu = 2.4$, 압축부 파쇄에 의한 취성 파괴.
- UHPC-ECC 복합 보($h_{ECC}/h = 0.4$): 최대 하중 $178 kN$ (25 % 증가), 휨 연성지수 $\mu = 6.8$ (2.8배 증가), 인장측에 40개 이상의 미세 다중균열 분산 형성.

## Related Notes
- [[uhpc-vs-ecc-design-space]] - UHPC와 ECC의 강도-연성 설계 공간 융합
- [[structural-repair-and-retrofitting]] - 복합 단면 보강 메커니즘
