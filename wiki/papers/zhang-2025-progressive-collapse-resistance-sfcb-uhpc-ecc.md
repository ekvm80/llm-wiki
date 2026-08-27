---
title: "Enhancement of Progressive Collapse Resistance with SFCB and UHPC-ECC (Zhang et al., 2025)"
type: source_note
source: "sources/zhang-2025-enhancement-of-progressive-collapse-resistance.pdf"
citation: "Zhang, Z., Lu, Z. D., & Dai, J. G. (2025). Enhancement of progressive collapse resistance of concrete frame structures using steel-FRP composite bars and UHPC-ECC. ASCE Journal of Structural Engineering, 151(3), 04024220."
date: 2026-08-24
tags:
  - progressive-collapse
  - sfcb
  - uhpc-ecc
  - catenary-action
  - seismic-resilience
  - frame-structures
---

## Summary
중앙 기둥 파괴(Middle Column Removal) 시 발생하는 건축물 골조의 연쇄 붕괴(Progressive Collapse)를 방지하기 위해, 항복 후 2차 탄성 인장 강성을 갖는 강-FRP 복합 보강근(Steel-FRP Composite Bars, SFCB)과 고연성 UHPC-ECC 복합재를 보-기둥 소성 힌지부에 하이브리드 적용한 실대형 2경간 골조($6000 \times 2500 mm$)의 하중 재분배 메커니즘, 휨-현수막 작용(Flexural-to-Catenary Action Transition) 및 붕괴 저항 내력을 정밀 실험과 비선형 대변형 유한요소 해석으로 규명한 2025년 ASCE Journal of Structural Engineering 연구이다. SFCB와 UHPC-ECC의 융합을 통해 연쇄 붕괴 저항 하중을 보통 RC 골조 대비 **210 %** 증대시키고 극한 수직 변위 처짐을 **2.8배** 확장시킴을 실증하였다.

## Key Contributions
- **SFCB/UHPC-ECC 융합 연쇄 붕괴 방지 메커니즘 최초 규명**: SFCB의 연속 장력과 UHPC-ECC의 다중 미세균열 인장막이 현수막 장력 완벽 지지.
- **소성 힌지부 콘크리트 압괴 및 철근 파단 완전 방지**: 대변형 상태($\Delta = 450 mm$)에서도 접합부 파괴 없이 안정적 하중 재분배.
- **연쇄 붕괴 저항 극한 하중 3.1배 향상**: 보통 RC 골조 대비 연쇄 붕괴 안전율 대폭 확보.
- **내진/방폭 특수 골조 설계 표준 공식 제시**: DoD UFC 4-023-03 연쇄 붕괴 방지 설계 기준 수용.

## Methods
- 4개의 실대형 2경간 1층 골조 시험체 ($6000 \times 2500 mm$, 기둥 단면 $300 \times 300 mm$, 보 단면 $200 \times 350 mm$).
- 보강재 변수: 보통 강재 철근 대 SFCB (강재 코어 + 현무암 섬유 외피), 보 접합부 재료: 보통 콘크리트 대 UHPC-ECC ($f_c = 120 MPa, \epsilon_u = 6.5 \%$).
- 시험: 중앙 기둥 유사정적 수직 압하 시험 (MTS 1000 kN 액추에이터, 변위 제어 $1.0 mm/min$).

## Results
- 골조 시험체별 연쇄 붕괴 저항 역학 성능 데이터:

| 골조 시험체 ID | 주철근 종류 | 접합부 콘크리트 | 휨 단계 피크하중 (kN) | 현수막 극한하중 (kN) | 극한 수직변위 (mm) | 붕괴 에너지 흡수 ($kJ$) |
| :--- | :--- | :--- | :---: | :---: | :---: | :---: |
| RC-Control | 보통 강재 철근 | 보통 콘크리트 | 85.0 | 115.0 | 185 (철근 파단) | 18.5 |
| RC-SFCB | SFCB | 보통 콘크리트 | 92.0 | 185.0 | 320 | 45.0 |
| **ECC-SFCB** | **SFCB** | **UHPC-ECC** | **145.0** | **358.0 (+211 %)** | **520 (+181 %)** | **142.0 (+668 %)** |

## Related Notes
- [[yassin-2024-flexural-reinforced-uhp-ecc-beams-pe-fibers]] - R/UHP-ECC 보 거동
- [[shao-2021-gradual-crushing-reinforced-hpfrcc-beams]] - HPFRCC 보 대변형 거동
- [[high-strength-strain-hardening-composites]] - 고강도 복합 구조 설계
