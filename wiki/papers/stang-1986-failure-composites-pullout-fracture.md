---
title: "Failure of Fiber-Reinforced Composites by Pull-Out Fracture (Stang & Shah, 1986)"
type: source_note
source: "sources/stang-1986-failure-of-fibre-reinforced-composites-by.pdf"
citation: "Stang, H., & Shah, S. P. (1986). Failure of fibre reinforced composites by pull-out fracture. Journal of Materials Science, 21(3), 953-957. https://doi.org/10.1007/BF01117378"
date: 2026-08-24
tags:
  - single-fiber-pullout
  - interfacial-debonding
  - fracture-mechanics
  - shear-lag-model
  - compliance-approach
  - micromechanics-foundations
---

## Summary
덴마크 공대 스탕(Henrik Stang) 교수와 노스웨스턴 대학교 수렌드라 샤(Surendra Shah) 교수가 정립한 섬유보강 복합재료의 단일 섬유 인발(Single Fiber Pull-Out) 파괴역학적 거동에 관한 세계적 고전 이론 원전 논문이다. 전단 지연(Shear-lag) 이론과 파괴역학적 에너지 해방률 컴플라이언스법(Compliance Approach)을 결합하여, 섬유-매트릭스 계면의 화학적 부착 에너지($G_d$), 마찰 전단응력($\tau_0$), 섬유 탄성계수 및 매트릭스 강성이 부분 탈착(Partial Debonding) 진행과 완전 인발 하중-변위 곡선에 미치는 물리적 구성방정식을 세계 최초로 엄밀하게 폐쇄형 수식으로 유도하였다.

## Key Contributions
- **파괴역학 기반 계면 탈착(Interfacial Debonding) 구성 모델 최초 수립**: 계면 균열 전파 조건을 파괴인성 $G_d$와 에너지 평형식 $G = \Delta W/\Delta A$로 엄밀 정식화.
- **전단 지연 모델(Shear-lag Model)과 마찰 슬립의 결합 폐쇄형 해 도출**: 탈착 진행 길이($l_d$)에 따른 인발 하중 $P(\delta)$ 해석 함수 완성.
- **모든 현대 ECC/SHCC 미시역학 PSH 설계의 이론적 모태 확립**: 빅터 리(Victor Li) 교수의 가교 응력-개구 변위($\sigma-\delta$) 적분 모델의 기초 기반 제공.
- **강섬유 및 합성섬유 인발 실험 데이터와의 정밀 검증**: 이론 하중-변위 곡선과 실측치 98 % 일치도 확인.

## Methods
- 이론 해석: 에너지 해방률 $G$와 시스템 컴플라이언스 $C(l_d) = \delta/P$의 미분 관계식 도출.
- 경계 조건: 섬유 파단 없는 완전 계면 탈착 후 쿨롱 마찰 인발 과정 수식화.

## Results
- 스탕-샤 계면 파괴역학 이론 수식 체계 요약:

$$P_{deb} = \sqrt{2 \pi^2 r_f^3 E_f G_d + \frac{2 \pi r_f \tau_0 l_d E_f}{1 + (E_f A_f / E_m A_m)}}$$

| 파라미터 | 물리적 의미 | 단위 | 미시역학적 영향 |
| :--- | :--- | :---: | :--- |
| $G_d$ | 계면 파괴에너지 (화학 부착) | $J/m^2$ | 높을수록 초기 탈착 하중 상승, 과다 시 섬유 파단 유발 |
| $\tau_0$ | 계면 마찰 전단응력 | MPa | 탈착 후 지속적인 인발 하중 지지 및 소성 에너지 소산 |
| $r_f, E_f$ | 섬유 반경 및 인장 탄성계수 | $\mu m, GPa$ | 섬유 세장비 및 가교 강성 결정 |

## Related Notes
- [[pseudo-strain-hardening-criteria]] - PSH 미시역학 이론 체계
- [[fiber-orientation-distribution]] - 섬유 가교 및 배향 분포 이론
- [[ranade-2013-hshdc-composite-properties]] - 고강도 복합체 계면 해석
