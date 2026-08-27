---
title: "Shear Transfer Behavior of Engineered Geopolymer Composites across Cracks (Zhu et al., 2023)"
type: source_note
source: "sources/zhu-2023-shear-transfer-behavior-of-engineered.pdf"
citation: "Zhu, H., Ma, H., & Wu, C. (2023). Shear transfer behavior of engineered geopolymer composites (EGC) across cracks. Cement and Concrete Composites, 142, 105210. https://doi.org/10.1016/j.cemconcomp.2023.105210"
date: 2026-08-24
tags:
  - engineered-geopolymer-composites
  - shear-transfer
  - push-off-shear-test
  - aggregate-interlock
  - fiber-bridging-shear
  - crack-slip
---

## Summary
지진 및 전단 지배 구조물에서 균열면을 관통하여 작용하는 전단 전달(Shear Transfer across Cracks) 메커니즘을 규명하기 위해, 고연성 지오폴리머 복합체(PVA-EGC, $f_c = 52 MPa$, PVA 섬유 $V_f = 2.0 \%$)의 밀어내기 전단 시험(Push-off Shear Test)을 수행하여 초기 균열폭($w_0 = 0.1 \sim 1.0 mm$)에 따른 전단응력-슬립($\tau-s$) 포락선, 균열 개구 팽창(Crack Dilatancy) 및 섬유 가교 전단 저항성을 규명한 2023년 Cement and Concrete Composites 논문이다. PVA 섬유의 다방향 휨-전단 도웰 가교력(Dowel Action)과 매트릭스 마찰 맞물림이 결합하여, 초기 균열폭 0.5 mm 상태에서도 극한 전단전달강도 **7.85 MPa**를 발현함을 실증하였다.

## Key Contributions
- **EGC 균열면 전단 전달 통합 역학 모델 수립**: 골재 맞물림 전단 성분($\tau_{agg}$)과 섬유 가교 전단 성분($\tau_{fib}$)의 분리 정량화.
- **초기 균열폭($w_0$)에 따른 전단 강도 감쇠식 도출**: $\tau_u = 9.5 (1 - 0.35 w_0)$ 모델 확립 ($R^2 = 0.96$).
- **균열 개구 팽창 구속 메커니즘 규명**: 섬유 가교 인장력이 균열면을 강하게 압착하여 잔류 마찰력 80 % 보존.
- **내진 전단벽 및 프리캐스트 조인트 전단 설계 기준 제시**: 전단 철근 배근 40 % 절감 실현.

## Methods
- 시험체: 표준 푸시오프(Push-off) 시편 ($150 \times 250 \times 500 mm$, 전단면 $150 \times 200 mm$, 초기 균열 유도 노치).
- 재료: 보통 콘크리트(NC 45 MPa) 대 PVA-EGC ($f_c = 52 MPa$, $V_f = 2.0 \%$).
- 시험: 정밀 서보 액추에이터 전단 가력, LVDT 전단 슬립($s$) 및 균열 개구폭($w$) 동시 연속 계측.

## Results
- 푸시오프 전단 시험 결과 및 전단 전달 강도 데이터:

| 시편 구분 | 초기 균열폭 $w_0$ (mm) | 초기 전단 강성 (kN/mm) | 피크 전단응력 $\tau_u$ (MPa) | 피크 시 전단슬립 $s_u$ (mm) | 극한 전단 파괴에너지 ($kJ/m^2$) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| 보통 콘크리트 (NC) | 0.2 mm | 12.5 | 3.20 | 0.85 | 1.85 |
| **PVA-EGC** | **0.2 mm** | **28.5** | **8.85 (+176 %)** | **2.85** | **18.5 (+900 %)** |
| **PVA-EGC** | **0.5 mm** | **21.0** | **7.85 (+145 %)** | **3.40** | **16.2 (+775 %)** |
| **PVA-EGC** | **1.0 mm** | **14.2** | **5.95 (+86 %)** | **4.20** | **12.8 (+590 %)** |

## Related Notes
- [[zhong-2020-flexural-shear-reinforced-ecc-beams]] - R/ECC 보 전단 거동
- [[one-part-shgc]] - 고연성 지오폴리머 설계 이론
- [[crack-width-control]] - 균열폭 제어 이론
