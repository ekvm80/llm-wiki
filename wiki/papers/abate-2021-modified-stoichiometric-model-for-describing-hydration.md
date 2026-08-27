---
title: "Modified Stoichiometric Model for Describing Hydration of Alkali-Activated Slag (Abate et al., 2021)"
type: source_note
source: "sources/abate-2021-modified-stoichiometric-model-for-describing-hydration.pdf"
citation: "Abate, S. Y., Park, S. M., Song, K. I., Lee, B. Y., & Kim, H. K. (2021). Modified stoichiometric model for describing hydration of alkali-activated slag. Journal of the Korea Concrete Resources Recycling Institute, 9(1), 1-12. https://doi.org/10.14190/JRCR.2021.9.1.1"
date: 2026-08-24
tags:
  - alkali-activated-slag
  - stoichiometric-model
  - c-n-a-s-h-gel
  - chemical-shrinkage
  - bound-water
  - hydration-kinetics
---

## Summary
알칼리 활성화 고로슬래그(AAS) 시스템의 수화 반응 생성물 조성, 고정수량(Bound Water), 화학 수축(Chemical Shrinkage) 및 공극률 진화를 이론적으로 예측하기 위해, C-(N-)A-S-H 겔 및 수탈사이트(Hydrotalcite, Ht), 스트라틀링자이트(Strätlingite, St), 에트링자이트(AFt) 등의 2차 수화물 생성을 화학양론적(Stoichiometric)으로 연계한 수정 화학양론 수화 반응 모델을 개발한 군산대 아바테(S.Y. Abate) 박사, 충남대 이병엽 교수, 한남대 김흥석 교수 연구팀의 연구이다. 슬래그 화학 조성($CaO, SiO_2, Al_2O_3, MgO$)과 수산화나트륨/규산나트륨 활성화제의 농도를 입력 변수로 하여 수화도 $\alpha$에 따른 상 조성비 및 화학 수축량($V_{cs}$)을 정밀하게 모사하였다.

## Key Contributions
- **AAS 전용 수정 화학양론 수화 반응 메커니즘 수립**: C-(N-)A-S-H 겔 내 $Ca/Si$, $Al/Si$, $Na/Si$ 몰비($a, b, c$)를 WDXRS 기반 $Al/Si = (1-0.44)(Ca/Si)/4.5$ 실험식과 연동.
- **AFt 형성 여부에 따른 2대 조건별 수화물 분배 모델 완성**: AFt 고려(w/ AFt) 및 미고려(w/o AFt) 조건의 선형대수 연립방정식 해 도출.
- **화학 수축량($V_{cs}$) 및 고정수량($n_H$)의 이론적 수식화**: 수화 반응에 따른 절대 체적 감소율 정량 계산.
- **포틀랜드 시멘트 대비 반응 생성물의 열역학적 부피 변화 정량 비교**: 슬래그 치환율 및 활성화제 $Ms$에 따른 공극 구조 예측.

## Methods
- 모델 화학식: 슬래그 산화물 $y_C, y_S, y_A, y_M, y_F, y_{\bar{S}}$ + 활성화제 $y_{Na}, y_H$ 투입.
- 주요 생성물: C-(N-)A-S-H ($C_a N_c A_b S H_w$), Hydrotalcite ($M_4 A H_{10}$), Strätlingite ($C_2 A S H_8$), AFt ($C_6 A \bar{S}_3 H_{32}$).
- 검증: 기존 열역학 깁스 자유에너지 최소화(GEMS) 전산 모사 및 WDXRS 실측 데이터셋 비교.

## Results
- 슬래그 수화도 $\alpha$ 진행에 따른 화학양론 모델 예측 수화물 몰수 및 부피 변화 데이터:

| 생성 수화물 종류 | 화학식 표기 | 몰질량 $M_j$ ($g/mol$) | 비중 $\rho_j$ ($g/cm^3$) | 몰부피 $\omega_j$ ($cm^3/mol$) | w/ AFt 조건 몰수 (mol) | w/o AFt 조건 몰수 (mol) |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: |
| C-(N-)A-S-H | $C_a N_c A_b S H_w$ | 165.2 | 2.15 | 76.8 | $n_{CNASH} = 0.852$ | $n_{CNASH} = 0.912$ |
| Hydrotalcite | $M_4 A H_{10}$ | 502.8 | 2.05 | 245.3 | $n_{Ht} = 0.125$ | $n_{Ht} = 0.125$ |
| Strätlingite | $C_2 A S H_8$ | 418.3 | 1.94 | 215.6 | $n_{St} = 0.042$ | $n_{St} = 0.068$ |
| Ettringite (AFt) | $C_6 A \bar{S}_3 H_{32}$ | 1255.1 | 1.78 | 705.1 | $n_{AFt} = 0.024$ | $n_{AFt} = 0.000$ |
| 화학 수축량 $V_{cs}$ | 절대 체적 감소 | - | - | - | **$4.82 cm^3/100g$** | **$4.15 cm^3/100g$** |

## Related Notes
- [[alkali-activated-materials]] - 알칼리 활성 재료 기초 이론
- [[one-part-shgc]] - 1액형 고연성 지오폴리머 설계
- [[sustainability-low-carbon-binders]] - 저탄소 친환경 바인더
