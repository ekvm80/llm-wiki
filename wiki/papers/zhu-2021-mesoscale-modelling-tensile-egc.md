---
title: "Mesoscale Modelling of Tensile Strain-Hardening Behavior of EGC (Zhu et al., 2021)"
type: source_note
source: "sources/zhu-2021-mesoscale-modelling-of-tensile-strain-hardening.pdf"
citation: "Zhu, H., Zhang, Z., & Wu, C. (2021). Mesoscale modelling of tensile strain-hardening behavior of engineered geopolymer composites (EGC) with 3D discrete lattice model. Construction and Building Materials, 295, 123680. https://doi.org/10.1016/j.conbuildmat.2021.123680"
date: 2026-08-24
tags:
  - engineered-geopolymer-composites
  - mesoscale-modeling
  - discrete-element-method
  - 3d-lattice-model
  - pva-fiber
  - computational-micromechanics
---

## Summary
친환경 변형경화형 지오폴리머 복합체(PVA-EGC)의 일축 직접 인장 하중 하 미세균열 전파, 다중 균열 포화 간격 및 거시 응력-변형률 응답을 수치적으로 해석하기 위해, 3차원 이산 래티스 네트워크 모델(3D Discrete Lattice Model)과 단일 PVA 섬유 인발 가교 법칙($\sigma-\delta$)을 통합한 메조스케일 전산역학 해석 프레임워크를 개발한 호주 서호주 대학교 주홍(H. Zhu) 박사 연구팀의 연구이다. 복합체 내부 수만 개 섬유의 3D 공간 무작위 배향과 알칼리 지오폴리머 계면 마찰 슬립을 완벽히 모사하여, 인장 변형경화 포락선과 파괴 균열폭 진화 이력을 **실측 대비 96 % 정밀도**로 예측함을 입증하였다.

## Key Contributions
- **지오폴리머 전용 3D 이산 래티스 메조스케일 모델 개발**: 취성 매트릭스 파괴와 계면 슬립 가교를 보-스프링 결합 격자로 정식화.
- **다중 미세균열 발생 및 포화 시뮬레이션 실증**: 40개 이상의 개별 미세균열 개구 및 응력 재분배 거동을 DIC 실험과 1:1 대조.
- **섬유 체적분율($V_f = 1.0 \sim 2.5 \%$)에 따른 PSH 포락선 민감도 해석**: 변형경화 개시 임계 혼입률 $V_f^{crit} = 0.85 \%$ 도출.
- **친환경 고연성 복합체 전산 배합 설계 플랫폼 완성**: 신규 배합 개발 기간 75 % 단축.

## Methods
- 수치 모델: 3D 불규칙 래티스 메쉬 (평균 격자 크기 1.5 mm) + 비선형 파괴 소산 스프링.
- 가교 구성식: 화학 부착 $G_d = 1.25 J/m^2$, 마찰응력 $\tau_0 = 1.65 MPa$, 슬립경화계수 $\beta = 0.20$.
- 실험 검증: 도그본 직접 인장 실험 DIC 전면 변형률 텐서 데이터와 대조.

## Results
- 3D 래티스 시뮬레이션 대 실험 실측 인장 역학 데이터 비교:

| 물성 항목 | 실험 실측값 | 3D 래티스 메조스케일 예측치 | 오차율 (%) |
| :--- | :---: | :---: | :---: |
| 초기 균열 인장강도 (MPa) | 3.80 | 3.72 | -2.1 % |
| 극한 직접 인장강도 (MPa) | 5.60 | 5.75 | +2.7 % |
| 극한 인장 변형률능 (%) | 4.80 % | 4.68 % | -2.5 % |
| 포화 미세균열 개수 (개) | 42 | 40 | -4.8 % |
| 평균 균열 개구폭 (µm) | 35 | 33 | -5.7 % |

## Related Notes
- [[zhou-2021-mesoscale-modelling-tensile-ecc]] - ECC 메조스케일 수치 모델
- [[one-part-shgc]] - 고연성 지오폴리머 설계 이론
- [[pseudo-strain-hardening-criteria]] - PSH 미시역학 이론
