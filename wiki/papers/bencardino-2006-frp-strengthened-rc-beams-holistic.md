---
title: "Holistic Design of RC Beams Strengthened with Externally Bonded FRP (Bencardino et al., 2006)"
type: source_note
source: "sources/bencardino-2006-holistic-design-of-rc-beams.pdf"
citation: "Bencardino, F., Colotti, V., Spadea, G., & Swamy, R. N. (2006). Holistic design of RC beams and slabs strengthened with externally bonded FRP laminates. Cement and Concrete Composites, 28(9), 832-844. https://doi.org/10.1016/j.cemconcomp.2006.07.004"
date: 2026-08-24
tags:
  - cfrp-strengthening
  - holistic-design
  - end-anchorage
  - intermediate-anchorage
  - debonding-prevention
  - ductile-flexural-failure
---

## Summary
탄소섬유강화 폴리머(CFRP) 판을 외부 부착하여 보강한 철근콘크리트(RC) 보의 조기 단부 박리(End Peeling) 및 중간 균열 유기 탈착(Intermediate Crack Debonding)을 방지하고 완전한 연성 파괴를 유도하기 위해, 전단경간비($a/d = 6.9, 3.0$) 및 외부 기계식 단부/중간 앵커리지(External Anchorage System)를 적용한 실대형 RC 보($150 \times 250 \times 3000 mm$)의 4점 휨 실험과 포괄적 통합 설계 모델(Holistic Design Model)을 칼라브리아 대학교 벤카르디노(F. Bencardino) 교수와 셰필드 대학교 스와미(R.N. Swamy) 교수가 규명한 Cement and Concrete Composites 명저 논문이다. 최적 앵커리지 시스템 적용 시 취성 박리를 100 % 차단하여 극한 휨 하중을 무보강 보(54.0 kN) 대비 **83 %** 증가한 **98.8 kN**로 향상시키고 CFRP 파단 시까지 변형 에너지를 소산시킴을 실증하였다.

## Key Contributions
- **외부 앵커리지를 결합한 FRP 보강 RC 보의 완전 연성 파괴 메커니즘 완성**: 취성 계면 탈착을 억제하고 CFRP 인장 변형률을 $10100 \mu m/m$까지 활용.
- **전단경간비($a/d = 6.9$ 대 $3.0$)에 따른 휨-전단 상호작용 규명**: 깊은 보 영역에서도 조기 전단 박리 차단.
- **콘크리트 압축 연단 변형률 극대화**: 무보강 보($5000 \mu m/m$) 대비 극한 상태에서 압축대 콘크리트 소성 변형률을 $3700 \sim 4200 \mu m/m$까지 안정적 유지.
- **국제 설계 기준(ACI 440.2R, fib Bulletin 14) 개선 지침 제시**: 기계식 앵커 정착 효율을 고려한 설계 강도 산정식 정립.

## Methods
- 보 시험체: $150 \times 250 \times 3000 mm$ (인장 철근 2-$\phi 12, f_y = 540 MPa$, 전단 스터럽 $\phi 8@100$).
- 보강재: Sika CarboDur S512 CFRP 플레이트 (두께 1.2 mm, 폭 50 mm, $E = 165 GPa, f_{fu} = 2800 MPa$).
- 정착 변수: Unplated (Control), Plated (CFRP 단독), Plated + Anchorage 1 (단부 앵커), Plated + Anchorage 2 (단부+중간 앵커).
- 시험: 4점 휨 재하 시험 ($a/d = 6.9$ 지간 2800 mm, $a/d = 3.0$ 지간 1500 mm).

## Results
- 전단경간비 및 앵커 정착 조건별 RC 보 휨 실험 결과 비교 데이터 (Table 1):

| 시험체 ID | 전단경간비 $a/d$ | 보강 및 앵커 상세 | 철근 항복하중 $P_y$ (kN) | 극한 파괴하중 $P_u$ (kN) | 파괴 시 콘크리트 변형률 ($\mu\epsilon$) | 파괴 시 CFRP 변형률 ($\mu\epsilon$) | 파괴 모드 |
| :--- | :---: | :--- | :---: | :---: | :---: | :---: | :--- |
| **A1 (Control)** | 6.9 | 무보강 (Plain RC) | 45.2 | 54.0 | 5000 | - | 철근 항복 연성 파괴 |
| **A3 (Control)** | 6.9 | 무보강 (Plain RC) | 40.2 | 57.2 | 6300 | - | 철근 항복 연성 파괴 |
| **A1.1 (Plated)** | 6.9 | CFRP 단독 (앵커 없음) | 55.3 | 86.8 (+60.7 %) | 2100 | 7100 | 조기 계면 탈착 파괴 |
| **A3.1 (Plated)** | 6.9 | CFRP 단독 (앵커 없음) | 54.9 | 74.8 (+30.8 %) | 2700 | 6100 | 조기 계면 탈착 파괴 |
| **A1.2 (Anchored)**| 6.9 | CFRP + 앵커 시스템 1 | 59.8 | 98.0 (+81.5 %) | 3700 | 9600 | 완전 연성 휨 파괴 |
| **A3.2 (Anchored)**| 6.9 | **CFRP + 앵커 시스템 2** | **55.1** | **98.8 (+83.0 %)** | **4200** | **10100** | **CFRP 파단 완전 연성** |

## Related Notes
- [[structural-repair-and-retrofitting]] - FRP 구조 보강 및 계면 탈착 제어
- [[shin-2011-strengthening-dfrcc-layers-rc-flexural-members]] - DFRCC 덧씌우기 휨 보강
- [[high-strength-strain-hardening-composites]] - 고성능 복합 구조 설계
