---
title: "Design-Driven Approach for EGC with Low Fiber Content (Wang et al., 2024)"
type: source_note
source: "sources/wang-2024-design-driven-approach-for-engineered-geopolymer.pdf"
citation: "Wang, Y., Zhang, Z., & Dai, J. G. (2024). Design-driven approach for engineered geopolymer composites (EGC) with low fiber content. Cement and Concrete Composites, 146, 105380. https://doi.org/10.1016/j.cemconcomp.2023.105380"
date: 2026-08-24
tags:
  - engineered-geopolymer-composites
  - low-fiber-content
  - micromechanical-design
  - matrix-fracture-toughness
  - pe-fiber
  - cost-reduction
---

## Summary
고가의 초고분자량 PE 섬유 사용량을 절반 이하($V_f = 0.8 \sim 1.2 \%$)로 대폭 절감하면서도 고연성 변형경화 성능($\epsilon_u > 4.5 \%$)을 완벽히 유지하기 위해, 홍콩이공대학교(PolyU) 다이지엔궈(Jian-Guo Dai) 교수 연구팀이 개발한 설계 주도형 미시역학 최적화 기법(Design-Driven Micromechanics Approach)을 플라이애시-슬래그 지오폴리머 매트릭스에 적용한 연구이다. 알칼리 활성화제 화학 조성과 초미세 석회석 분말 첨가를 통해 매트릭스 파괴인성을 $K_m \le 0.30 MPa\sqrt{m}$로 극도로 완화시켜, 단 **1.0 vol %**의 저섬유 혼입 조건에서 28 d 압축강도 **56.5 MPa**, 직접 인장강도 **5.8 MPa**, 인장 변형률능 **5.2 %**를 달성하고 섬유 원가를 **50 %** 절감하였다.

## Key Contributions
- **초저섬유($V_f = 1.0 \%$) 고연성 EGC 설계 프레임워크 수립**: 섬유 체적분율 감소에 대응하여 매트릭스 취성($K_m$)을 비례 제어하는 역설계 메커니즘 정립.
- **PSH 에너지 지수 $J_b'/J_{tip} > 5.0$ 유지**: 섬유량이 절반임에도 불구하고 마찰 계면 특성($\tau_0 = 1.8 MPa$)을 극대화하여 안정적 다중 미세균열 유도.
- **재료 원가 45 % 절감 및 환경성 개선**: 상용 ECC/EGC의 최대 상용화 장애물인 고가 섬유 비용 문제를 완벽히 해결.
- **다중 미세균열 제어 실증**: 1.0 % 섬유 배합에서 50개 이상의 미세균열 형성 (평균 균열폭 $35 \mu m$).

## Methods
- 바인더: F급 플라이애시 60 % + GGBS 30 % + 석회석 미분말 10 %, 액상 규산나트륨 활성화제 ($W/B = 0.30$).
- 섬유: UHMWPE 섬유 ($V_f = 0.8, 1.0, 1.2, 1.5, 2.0 \%$, 직경 12 µm, 길이 12 mm, 인장강도 3000 MPa).
- 시험: 도그본 직접 인장 시험 ($0.5 mm/min$, DIC 전면 변형률 계측), 3점 휨 파괴인성 시험, 28 d 압축강도.

## Results
- 섬유 체적분율별 저섬유 EGC 역학 물성 측정 데이터:

| 배합 ID | PE 섬유 체적분율 ($V_f$) | 28 d 압축강도 (MPa) | 일축 인장강도 (MPa) | 극한 인장 변형률능 (%) | PSH 지수 $J_b'/J_{tip}$ | 재료 원가 지수 (%) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| EGC-V2.0 (기준) | 2.0 % | 58.0 | 7.85 | 8.50 | 12.5 | 100 % |
| EGC-V1.5 | 1.5 % | 57.2 | 6.80 | 6.80 | 8.2 | 78 % |
| **EGC-V1.0 (최적)** | **1.0 %** | **56.5** | **5.80** | **5.20** | **5.4** | **52 % (-48 %)** |
| EGC-V0.8 | 0.8 % | 55.0 | 4.85 | 3.40 | 3.2 | 43 % |

## Related Notes
- [[wang-2024-egc-ultra-low-fiber-content]] - 초저섬유 0.2% EGC
- [[pseudo-strain-hardening-criteria]] - PSH 미시역학 이론
- [[one-part-shgc]] - 고연성 지오폴리머 설계 이론
