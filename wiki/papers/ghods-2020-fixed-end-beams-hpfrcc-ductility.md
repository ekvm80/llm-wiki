---
title: "Behavior of Fixed-End RC Beams Strengthened with HPFRCC (Ghods et al., 2020)"
type: source_note
source: "sources/ghods-2020-an-investigation-on-the-behavior.pdf"
citation: "Ghods, N., Sharbatdar, M. K., & Kheyroddin, A. (2020). An investigation on the behavior of fixed-end concrete beams made of high-performance fiber-reinforced cementitious composites. Structures, 28, 2552-2566. https://doi.org/10.1016/j.istruc.2020.10.061"
date: 2026-08-24
tags:
  - hpfrcc
  - fixed-end-beams
  - moment-redistribution
  - steel-fiber
  - ductility-ratio
  - shear-span
---

## Summary
지진 및 과하중을 받는 연속 및 고정단 철근콘크리트 보(Fixed-End RC Beams)의 부모멘트 지점부 조기 전단/휨 파괴를 방지하고 소성 힌지 구간의 모멘트 재분배(Moment Redistribution) 능력을 극대화하기 위해, 고강도 콘크리트(HSC: $f_c = 51 MPa$)와 마이크로 강섬유($V_f = 1.0, 2.0 vol \%$, 인장강도 1050 MPa)를 보강한 고성능 섬유보강 시멘트 복합체(HPFRCC: $f_c = 68, 75 MPa$)로 제작된 실대형 고정단 보(단면 $250 \times 300 mm$, 순경간 2600 mm)의 단조 재하 실험 및 비선형 해석을 셈난 대학교 고즈(N. Ghods) 박사와 샤르바트다르(M.K. Sharbatdar) 교수가 규명한 2020년 Structures 논문이다. HPFRCC 2.0 % 보(HF2)는 HSC 기준 보(NN) 대비 극한 하중이 **42.5 %** 증가하고, 에너지 소산 용량이 **3.1배**, 모멘트 재분배율이 **28.5 %**에 달하여 전단 보강근 없이도 완전 연성 휨 파괴를 실현하였다.

## Key Contributions
- **고정단 보 지점부-경간 중앙부 간 모멘트 재분배 메커니즘 정립**: HPFRCC의 인장 가교 응력으로 지점부 소성 힌지 형성 후 중앙부로 하중의 28.5 %를 안정적으로 전이.
- **강섬유 혼입률($V_f = 1.0 \%$ 대 $2.0 \%$)에 따른 전단 보강근 대체 효과 규명**: HPFRCC 매트릭스가 전단 스터럽 역할을 겸하여 사인장 균열 폭을 0.2 mm 이내로 구속.
- **에너지 흡수 능력 및 변위 연성비($\mu = 4.8$) 비약적 확장**: HSC 보의 취성 파괴 대비 변위 연성 지수를 2.3배 향상.
- **연속보 및 라멘 골조 구조물의 소성 설계 기준 제시**: 지점부 철근 과밀 배근 문제를 해결하는 배합 가이드라인 확립.

## Methods
- 보 시험체 규격: 단면 $250 \times 300 mm$, 전체 길이 3200 mm, 순경간 2600 mm (1000 kN 유압 잭 단조 집중 하중 재하).
- 콘크리트 및 HPFRCC 변수 (Table 1):
  - **NN**: 일반 고강도 콘크리트 (HSC, $f_c = 51 MPa, f_t = 4.2 MPa$)
  - **HF1**: HPFRCC (강섬유 $V_f = 1.0 \%$, $f_c = 68 MPa, f_t = 6.8 MPa$)
  - **HF2**: HPFRCC (강섬유 $V_f = 2.0 \%$, $f_c = 75 MPa, f_t = 9.2 MPa$)
- 강섬유: 직선형 고강도 강섬유 (길이 50 mm, 직경 1 mm, 형상비 50, 인장강도 1050 MPa).
- 계측: LVDT 중앙 및 지점부 변위, 스트레인 게이지 철근 및 콘크리트 변형률 측정.

## Results
- 고정단 보 시험체별 극한 내력, 처짐 및 모멘트 재분배 성능 비교 데이터:

| 시편 명칭 | 콘크리트 종류 | 강섬유 분율 ($V_f$) | 28 d 압축강도 (MPa) | 초기 균열하중 (kN) | 극한 하중 $P_u$ (kN) | 최대 처짐 $\Delta_u$ (mm) | 에너지 흡수 용량 ($kN\cdot mm$) | 모멘트 재분배율 (%) |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **NN (Control)** | High Strength Concrete | 0 % | 51.0 | 42.0 | **185.0** | 18.5 | 2250 | 12.0 % |
| **HF1** | HPFRCC 1% | 1.0 % | 68.0 | 65.0 | **228.0 (+23.2 %)** | 32.0 | 5100 | 21.5 % |
| **HF2 (최적)** | **HPFRCC 2%** | **2.0 %** | **75.0** | **85.0** | **263.5 (+42.4 %)** | **42.5** | **6950 (+209 %)** | **28.5 % (2.4배)** |

## Related Notes
- [[esfahani-2020-hpfrcc-substitution-gfrp-rc-beams]] - HPFRCC 복합 휨 보 거동
- [[shin-2011-strengthening-dfrcc-layers-rc-flexural-members]] - DFRCC 보강 부재
- [[high-strength-strain-hardening-composites]] - 고성능 복합 구조 설계
