---
title: "Tensile Creep Behavior of ECC at Early Ages (Zhang et al., 2021)"
type: source_note
source: "sources/zhang-2021-tensile-creep-behavior-of-engineered.pdf"
citation: "Zhang, J., Shen, P., & Zhou, J. (2021). Tensile creep behavior of engineered cementitious composites at early ages and its effect on cracking resistance. Construction and Building Materials, 275, 122176. https://doi.org/10.1016/j.conbuildmat.2020.122176"
date: 2026-08-24
tags:
  - tensile-creep
  - early-age-cracking
  - engineered-cementitious-composites
  - stress-relaxation
  - restrained-shrinkage
  - pva-fiber
---

## Summary
매시브 콘크리트 및 덧씌우기 보수 구조물에서 초기 재령(Early Age, 1 ~ 7일)에 발생하는 건조수축 및 수화열 응력에 의한 균열 리스크를 평가하기 위해, 고연성 복합체(PVA-ECC)의 초기 재령 일축 인장 크리프(Tensile Creep) 거동, 비선형 응력 이완(Stress Relaxation) 특성 및 구속 건조수축 균열 저항성을 링 구속 시험(Restrained Ring Test, ASTM C1581)과 인장 크리프 하중 프레임으로 칭화대학교 장준(J. Zhang) 교수 연구팀이 규명한 연구이다. PVA-ECC의 높은 초기 인장 크리프 변형($\epsilon_{cr} = 380 \times 10^{-6}$)이 구속 인장 응력을 **65 %** 이상 완화(Relaxation)하여 초기 균열 발생을 원천 방지함을 실증하였다.

## Key Contributions
- **초기 재령(1 d, 3 d, 7 d) PVA-ECC 인장 크리프 구성방정식 수립**: B3 크리프 모델을 수정한 초기 응력 이완 함수 정립.
- **구속 수축 응력 65 % 완화 메커니즘 정량화**: 점탄성 C-S-H 겔 슬립과 섬유-매트릭스 계면 미소 크리프의 복합 작용.
- **ASTM C1581 링 시험을 통한 무균열 안정성 실증**: 보통 콘크리트가 8일 만에 관통 균열 파손된 반면 ECC는 90일 이상 무균열 유지.
- **대형 바닥판 및 교량 신축 이음부 무조인트 설계 기반 제시**: 수축 균열 제어 설계 표준화.

## Methods
- 배합: PVA-ECC (Kuraray REC15, $V_f = 2.0 \%$, $f_c = 48.5 MPa$, $FA/C = 1.2$).
- 인장 크리프 시험: 온도 $20 ± 1 °C, RH 60 \%$, 지속 인장 응력비($\sigma/f_t = 0.30, 0.50$, 재하 재령 1, 3, 7일, 90일간 변위 계측).
- 구속 링 시험: ASTM C1581 강재 링 내주면 변형률 게이지 연속 계측.

## Results
- 재하 재령별 28일 누적 인장 크리프 변형률 및 응력 이완율:

| 재하 재령 (일) | 지속 응력 수준 | 초기 탄성 변형률 ($	imes 10^{-6}$) | 28일 크리프 변형률 ($	imes 10^{-6}$) | 크리프 계수 $\phi(t, t_0)$ | 응력 이완율 (%) | 링 균열 발생일 (일) |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1 일 | 0.4 $f_t$ | 120 | **385** | 3.20 | **68.5 %** | 무균열 (> 90일) |
| 3 일 | 0.4 $f_t$ | 145 | **265** | 1.83 | **55.0 %** | 무균열 (> 90일) |
| 7 일 | 0.4 $f_t$ | 160 | **180** | 1.12 | **42.0 %** | 무균열 (> 90일) |
| 보통 콘크리트 (3일) | 0.4 $f_t$ | 85 | 65 | 0.76 | 22.0 % | **8.5일 관통 파단** |

## Related Notes
- [[pseudo-strain-hardening-criteria]] - PSH 미시역학 이론
- [[crack-width-control]] - 미세균열 제어 이론
- [[concrete-durability-and-service-life]] - 초기 균열과 내구성
