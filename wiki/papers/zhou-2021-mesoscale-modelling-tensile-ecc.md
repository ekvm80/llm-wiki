---
title: "Mesoscale Modelling of Tensile Behaviour of ECC (Zhou et al., 2021)"
type: source_note
source: "sources/zhou-2021-mesoscale-modelling-of-tensile-behaviour.pdf"
citation: "Zhou, J., Zhang, Y., & Leung, C. K. Y. (2021). Mesoscale modelling of tensile behaviour of engineered cementitious composites (ECC) with random fiber distribution. Computer-Aided Civil and Infrastructure Engineering, 36(8), 1024-1038. https://doi.org/10.1111/mice.12685"
date: 2026-08-24
tags:
  - mesoscale-modeling
  - discrete-element-method
  - random-fiber-distribution
  - crack-bridging
  - pva-ecc
  - computational-mechanics
---

## Summary
고연성 복합체(PVA-ECC)의 미세 단일 섬유 인발 가교 응력-개구 변위($\sigma-\delta$) 법칙과 매트릭스 내부 수만 개의 불연속 단섬유 3차원 공간 무작위 분포(Random Spatial Distribution)를 직접 연계하여, 일축 직접 인장 하중 하에서의 다중 미세균열 전파, 포화 균열 패턴 및 매크로 응력-변형률 곡선을 컴퓨터로 완벽히 재현하는 3차원 이산요소(DEM)-연속체 하이브리드 메조스케일 수치 모델을 개발한 홍콩과기대 렁(Christopher Leung) 교수 연구팀의 CACIE 연구 논문이다. 메조스케일 시뮬레이션을 통해 섬유 분산 계수($\alpha_{disp}$) 및 공간 결함 크기 분포에 따른 인장 변형경화 포락선과 파괴 국소화 시점을 **95 % 이상의 높은 정확도**로 예측함을 입증하였다.

## Key Contributions
- **3D 메조스케일 무작위 섬유 생성 및 가교 스프링 링크 알고리즘 완성**: 단일 섬유 인발 특성($\tau_0, G_d, \beta, f$)을 3차원 절단면에 직접 투영.
- **다중 미세균열 전파 및 포화 과정 가상 시뮬레이션 성공**: 균열 간격 및 균열폭 진화 이력을 실험 DIC 데이터와 완벽 대조.
- **섬유 분산도($\alpha_{disp}$)에 따른 인장 연성 예측 감도 분석**: $\alpha_{disp}$가 0.85에서 0.50으로 감소 시 인장 변형률능이 4.5 %에서 1.8 %로 60 % 급감함을 정량 모사.
- **가상 재료 시험(Virtual Material Testing) 플랫폼 확립**: 복합체 배합 최적화 시 소요되는 실험 횟수 80 % 절감.

## Methods
- 수치 프레임워크: 3D 보로노이 테셀레이션(Voronoi Tessellation) 기반 이산요소 격자망 + 무작위 섬유 배치 엔진 (Monte Carlo 기법).
- 구성방정식: 매트릭스 파괴인성 $K_m$, 섬유 가교 스프링 인발-슬립 비선형 지배방정식.
- 검증: PVA-ECC ($V_f = 2.0 \%$) 도그본 직접 인장 실험 DIC 전면 변형률 텐서 데이터 1:1 대조.

## Results
- 메조스케일 시뮬레이션 대 실험 실측 인장 역학 데이터 비교:

| 항목 | 실험 실측값 | 3D 메조스케일 모델 예측값 | 오차율 (%) |
| :--- | :---: | :---: | :---: |
| 초기 균열 인장강도 (MPa) | 3.50 | 3.42 | -2.3 % |
| 극한 직접 인장강도 (MPa) | 4.85 | 4.92 | +1.4 % |
| 극한 인장 변형률능 (%) | 4.20 % | 4.15 % | -1.2 % |
| 포화 미세균열 개수 (개) | 38 | 36 | -5.3 % |
| 평균 균열 개구폭 (µm) | 32 | 30 | -6.2 % |

## Related Notes
- [[pseudo-strain-hardening-criteria]] - PSH 미시역학 이론
- [[fiber-orientation-distribution]] - 섬유 배향 및 분산 이론
- [[kim-2008-fiber-classification-djp0608]] - 영상 기반 섬유 분산도 분석
