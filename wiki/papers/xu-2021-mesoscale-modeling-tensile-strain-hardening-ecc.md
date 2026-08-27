---
title: "Mesoscale Modeling of Tensile Strain-Hardening Behavior of ECC (Xu et al., 2021)"
type: source_note
source: "sources/xu-2021-mesoscale-modeling-of-tensile-strain-hardening.pdf"
citation: "Xu, M., Zhang, Y., & Li, V. C. (2021). Mesoscale modeling of tensile strain-hardening behavior of engineered cementitious composites (ECC). Cement and Concrete Research, 147, 106516. https://doi.org/10.1016/j.cemconres.2021.106516"
date: 2026-08-24
tags:
  - mesoscale-modeling
  - discrete-element-method
  - tensile-strain-hardening
  - fiber-bridging
  - multiple-cracking
---

## Summary
고연성 복합체(ECC)의 일축 인장 하중 하에서 발생하는 다중 미세균열의 발생, 정상상태 전파, 그리고 섬유 가교에 의한 응력 재분배 과정을 입자-격자 이산요소법(Lattice Discrete Particle Model, LDPM) 및 응집대 모델(Cohesive Zone Model)을 결합하여 중규모(Mesoscale)에서 3차원으로 직접 시뮬레이션한 선구적 연구이다. 매트릭스 내부 골재/결함의 무작위 공간 분포와 수만 개의 단섬유 가교 메커니즘을 이산 요소망에 개별 반영하여, 인장 응력-변형률 응답, 균열 간격 분포 및 단일 균열 국소화 파괴 과정을 높은 정밀도로 재현하였다.

## Key Contributions
- **3D 중규모 이산 격자 기반 ECC 인장 다중균열 수치 모델 개발**: 개별 섬유 인발 가교력($\sigma-\delta$)을 격자 패싯(Facet)에 비선형 스프링으로 일체화.
- **결함 크기 통계 분포와 균열 개시 순서의 동역학적 모사**: 초기 균열이 가장 큰 결함에서 시작하여 순차적으로 작은 결함으로 전이되는 과정 가시화.
- **거시 인장 변형률능 예측 신뢰도 확보**: 실험에서 관측되는 $3.0 \sim 6.0 \%$ 인장 변형률 포락선 및 균열 수 실측치와 92 % 이상의 일치율 달성.

## Methods
- 3차원 보로노이(Voronoi) 테셀레이션 기반 LDPM 프레임워크.
- 비선형 섬유 가교 구성방정식 서브루틴 및 병렬 연산 해석.

## Results
- 매트릭스 파괴인성 $K_m$ 및 결함 분포의 공간적 불균질성이 다중균열 포화 한계를 결정함을 전산역학적으로 입증.
- ECC 배합 최적화를 위한 가상 실험실(Virtual testing) 도구로 활용 가능성 확립.

## Related Notes
- [[pseudo-strain-hardening-criteria]] - 변형경화 복합체의 미시역학 이론
- [[tosun-felekoglu-2014-flaw-size-tensile-strain-hardening-ecc]] - 결함 크기 분포와 변형경화 거동
