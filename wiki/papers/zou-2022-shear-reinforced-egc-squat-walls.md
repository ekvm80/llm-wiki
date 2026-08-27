---
title: "Shear Behavior of Reinforced EGC Squat Walls under Cyclic Loading (Zou et al., 2022)"
type: source_note
source: "sources/zou-2022-shear-behavior-of-reinforced-engineered.pdf"
citation: "Zou, C., Zhang, Z., & Zhu, H. (2022). Shear behavior of reinforced engineered geopolymer composite (R/EGC) squat walls under cyclic loading. Journal of Structural Engineering, 148(10), 04022150. https://doi.org/10.1061/(ASCE)ST.1943-541X.0003450"
date: 2026-08-24
tags:
  - reinforced-egc
  - squat-shear-walls
  - cyclic-loading
  - seismic-performance
  - shear-resilience
  - energy-dissipation
---

## Summary
원자력 발전소 격납 건물, 방호 벙커 및 저층 내진 건물에 적용되는 낮은 형상비($H_w/L_w = 1.0$)의 전단 단벽(Squat Shear Walls)에서 발생하는 대각 전단 취성 파괴(Diagonal Shear Failure) 및 심각한 핀칭 현상(Pinching Effect)을 극복하기 위해, 친환경 고연성 복합체(PVA-EGC, $f_c = 52 MPa$, 직접 인장 변형률능 $4.8 \%$)를 전단벽 전체에 타설한 실대형 R/EGC 전단 단벽($1000 \times 1000 \times 100 mm$)의 반복 횡하중 이력 곡선, 전단 강도, 에너지 소산 면적 및 손상 저항성을 ASCE Journal of Structural Engineering에 발표한 저우(C. Zou) 박사 연구팀의 명저 논문이다. R/EGC 전단벽은 보통 RC 전단벽 대비 전단 내력을 **42 %**, 소성 에너지 소산 능력을 **3.8배** 향상시키고 전단 파괴 모드를 연성 휨-전단 파괴로 완전 전환시킴을 실증하였다.

## Key Contributions
- **낮은 형상비($H_w/L_w = 1.0$) 단벽의 대각 인장 취성 파괴 완전 배제**: EGC 가교막이 대각 인장 균열의 급속 확장을 구속.
- **내진 이력 곡선의 핀칭 현상 대폭 완화**: 풍만한 방추형(Spindle-shaped) 이력 루프 형성으로 에너지 소산 3.8배 증대.
- **극한 층간변위각 2.8 % 확보**: 보통 RC 벽체(1.1 %) 대비 변형 연성 능력을 2.5배 확장.
- **친환경 원전 및 국방 시설 내진 전단벽 설계 지침 제시**: 전단 보강 철근 50 % 절감 실현.

## Methods
- 4개의 실대형 전단벽 시험체 ($1000 \times 1000 \times 100 mm$, 상하부 가력 로딩 빔 일체화 타설).
- 변수: 보통 콘크리트(NC 45 MPa) 대 PVA-EGC ($f_c = 52 MPa, \epsilon_u = 4.8 \%$), 수평/수직 전단 철근비 (0.35 % ~ 0.70 %).
- 시험: 일정 축력비($n = 0.15 f_c A_g$) 하에서 유사정적 횡방향 반복 주기하중 가력 ($0.1 \sim 3.0 \%$ 층간변위각 단계별 가력).

## Results
- 실대형 전단 단벽 시험체 내진 전단 성능 비교 데이터:

| 전단벽 시험체 ID | 매트릭스 재료 | 전단 철근비 | 피크 횡하중 (kN) | 극한 층간변위각 (%) | 누적 소산 에너지 ($kJ$) | 파괴 모드 |
| :--- | :--- | :---: | :---: | :---: | :---: | :--- |
| SW-NC-Control | 보통 콘크리트 | 0.70 % (표준) | 320.0 | 1.15 % | 28.5 | 대각 전단 취성 압괴 파괴 |
| **SW-EGC-HalfStirrup** | **PVA-EGC** | **0.35 % (50 % 절감)** | **415.0 (+30 %)** | **2.50 %** | **85.0 (+198 %)** | **연성 휨-전단 파괴** |
| **SW-EGC-FullStirrup** | **PVA-EGC** | **0.70 % (표준)** | **455.0 (+42 %)** | **2.85 % (+148 %)** | **108.5 (+280 %)** | **완전 연성 휨 파괴 (무취성)** |

## Related Notes
- [[zhong-2020-flexural-shear-reinforced-ecc-beams]] - R/ECC 보 전단 거동
- [[zhu-2024-development-frp-reinforced-uhs-ecc]] - FRP-UHS-ECC 복합 구조
- [[high-strength-strain-hardening-composites]] - 고성능 복합 구조 설계
