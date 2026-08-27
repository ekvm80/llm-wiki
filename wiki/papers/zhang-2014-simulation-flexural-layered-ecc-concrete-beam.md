---
title: "Simulation of Flexural Performance of Layered ECC-Concrete Composite Beam (Zhang et al., 2014)"
type: source_note
source: "sources/zhang-2014-simulation-of-flexural-performance-of.pdf"
citation: "Zhang, J., Wang, Z., & Ju, X. (2014). Simulation of flexural performance of layered ECC-concrete composite beam with fracture mechanics approach. ASCE Journal of Engineering Mechanics, 140(9), 04014068. https://doi.org/10.1061/(ASCE)EM.1943-7889.0000780"
date: 2026-08-24
tags:
  - layered-ecc-concrete-beam
  - fracture-mechanics-simulation
  - cohesive-crack-model
  - interface-debonding
  - flexural-behavior
  - damage-mitigation
---

## Summary
철근콘크리트 휨 부재의 인장측에 고연성 ECC 층을 복합화한 2층 적층 보(Layered ECC-Concrete Beam)의 균열 분산, 모재-ECC 계면 전단 탈착(Interface Debonding) 및 휨 하중-처짐 응답을 파괴역학적 점착 균열 모델(Cohesive Crack Model)과 비선형 유한요소 해석(FEA)으로 칭화대학교 장준(J. Zhang) 교수 연구팀이 규명한 ASCE Journal of Engineering Mechanics의 명저 논문이다. 모재 콘크리트 균열 선단의 응력 집이 인장측 ECC 층의 다중 미세균열 가교망에 의해 분산되어 계면 전단 박리를 방지하고 극한 휨 하중을 **38 %** 증대시키는 메커니즘을 수학적으로 완벽히 모델화하였다.

## Key Contributions
- **2층 복합 보의 균열 전파 3차원 파괴역학 유한요소 해석 프레임워크 수립**: 모재의 불연속 균열과 ECC의 연속 다중균열 손상장을 점착 접촉 요소로 통합.
- **모재-ECC 계면 탈착 개시 한계 전단응력($\tau_{int}$) 산정식 도출**: 모재 표면 거칠기 조도에 따른 임계 파괴에너지 $G_{int}$ 수식화.
- **ECC 층 두께 비율($h_{ecc}/h = 0.1 \sim 0.4$)에 따른 최적 휨 효율 곡선 제시**: $h_{ecc}/h = 0.25$에서 최대 비용 대 내력 향상비 도출.
- **실물 휨 실험 결과와의 완벽한 정합성 검증**: 하중-처짐 곡선 및 균열폭 해석치와 실측치 오차율 4 % 이내 달성.

## Methods
- 수치 모델: ABAQUS 비선형 솔버, 사용자 서브루틴 UMAT (ECC 인장 변형경화 구성방정식 구현).
- 계면 모델: 이선형 점착 존 모델(Bilinear Cohesive Zone Model, $G_c = 150 J/m^2$, $\tau_{max} = 3.5 MPa$).
- 검증 실험: $150 \times 250 \times 2000 mm$ 복합 보 4점 휨 재하 실험 데이터 대조.

## Results
- 수치 시뮬레이션 대 실험 실측 휨 성능 비교표:

| 항목 | 실험 실측값 | 점착 파괴역학 FEA 해석치 | 예측 오차율 (%) |
| :--- | :---: | :---: | :---: |
| 초기 휨 균열 하중 (kN) | 36.5 | 35.8 | -1.9 % |
| 철근 항복 하중 (kN) | 98.0 | 99.5 | +1.5 % |
| 극한 휨 하중 (kN) | 125.4 | 128.0 | +2.1 % |
| 파괴 시 중앙 처짐 (mm) | 52.5 | 50.8 | -3.2 % |
| 인장측 최대 균열폭 (mm) | 0.035 | 0.032 | -8.5 % |

## Related Notes
- [[yun-2013-flexural-behavior-crack-mitigation-shcc-layer]] - SHCC 층 복합 보 휨 실험 원전
- [[khan-2016-hsc-shcc-layer-beam]] - 고강도 복합 보 거동
- [[shin-2011-strengthening-dfrcc-layers-rc-flexural-members]] - DFRCC 덧씌우기 휨 보강
