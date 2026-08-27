---
title: "Local impact effects of hard missiles on concrete targets"
type: source_note
source: "sources/li-2005-local-impact-effects-of-hard.pdf"
citation: "Li, Q. M., Reid, S. R., Wen, H. M., & Telford, A. R. (2005). Local impact effects of hard missiles on concrete targets. International Journal of Impact Engineering, 32(1-4), 224-284."
date: 2026-08-24
tags: [hard-missile-impact, concrete-targets, penetration-depth, scabbing-limit, perforation-limit, ballistic-limit, non-dimensional-impact-function, cavity-expansion, landmark-review]
---

# 강체 발사체(Hard Missile) 충격 하에서 콘크리트 표적의 국소 파괴 메커니즘 및 관통·스폴링·관통한계 통합 무차원 지배방정식 총설

## Summary

군사 방호 벙커, 원자력 격납용기 및 주요 기반시설의 고속 발사체(포탄, 미사일 파편, 항공기 충돌) 방호 설계를 위해, 1910년 Petry 공식 이후 지난 100년간 제안된 **40여 개 국소 충격 경험 공식(Modified Petry, ACE, NDRC, BRL, Kar, Hughes, Haldar, UKAEA, CEA-EDF, Degen 등)**과 물리 기반 동적 캐비티 팽창 이론(Cavity Expansion Theory) 및 수치해석 모델을 총망라하여, **무차원 충격 함수($I = \frac{M V_0^2}{f_c d^3}$), 탄두 형상 계수($N^*$), 무차원 질량 계수($k$) 체계로 관통 깊이($x$), 배면 스폴링 한계 두께($h_s$), 관통 한계 두께($e$), 탄도 한계 속도($V_{BL}$)의 거동을 완벽히 통섭·정식화**한 **맨체스터 대학교 Q.M. Li 교수, S.R. Reid 교수, 중국과기대 H.M. Wen 교수**의 International Journal of Impact Engineering 2005년 전 세계 최고 불후의 랜드마크 총설 원전 논문.

## Key Contributions

1. **100년간의 콘크리트 충격 역학 이론 및 40여 개 경험 공식의 완벽한 통섭**:
   - 상이한 단위계와 파라미터로 난립하던 각국(미국, 영국, 프랑스, 독일 등)의 충격 공식을 무차원 파라미터($I, k, N^*$) 기반으로 단일화하여 적용 한계와 물리적 타당성을 규명.
2. **단일 무차원 관통 깊이($x/d$) 지배방정식 유도 및 전산 데이터베이스 검증**:
   - 천부 관통($x/d \le 2.0$): $\frac{x}{d} = \sqrt{\frac{4}{\pi} k N^* I}$.
   - 심부 관통($x/d > 2.0$): $\frac{x}{d} = \frac{2}{\pi} N^* I + 1$.
   - 수천 건의 전 세계 실탄 사격 충격 실험 데이터와 오차 $\pm 10\%$ 이내로 완벽 정합.
3. **스폴링 한계($h_s$) 및 관통 한계($e$) 산정 메커니즘 규명**:
   - 반사 인장 충격파(Spalling Stress Wave)의 파괴 에너지와 표적 두께 간의 상관관계를 유도하여 배면 파편 비산 방지를 위한 최소 필요 두께 $h_s/d$의 엄밀 기준 수립.
4. **변형률 속도 효과(DIF) 및 초고강도 콘크리트(HSC/UHPC) 충격 저항성 확장 지침 제시**:
   - 정적 압축강도 $f_c$ 대비 고변형률 속도($\dot{\varepsilon} > 10^2\ \text{s}^{-1}$) 영역에서의 동적 압축강도 증폭 계수(DIF) 통합 지침 확립.

## Methods

- **충격 역학 지배 무차원 파라미터 정의 (Sections 2~3)**:
  - 무차원 충격 함수: $I = \frac{M V_0^2}{f_c d^3}$ ($M$: 탄체 질량, $V_0$: 충돌 속도, $f_c$: 콘크리트 압축강도, $d$: 탄체 직경).
  - 무차원 질량 지수: $k = \frac{M}{\rho d^3}$ ($\rho$: 콘크리트 밀도).
  - 탄두 노즈 형상 계수: 평두($N^*=0.56$), 반구($N^*=0.72$), 오자이브($N^* = 0.18 + 0.163\psi$, $\psi = r/d$ 칼리버 반경).
- **국소 파괴 4대 판정 기준 (Section 2 & Fig. 1)**:
  1. 관통 깊이 ($x$): 반무한 표적 내부로의 최종 침투 깊이.
  2. 스폴링 한계 두께 ($h_s$): 배면 인장 파편 박리를 방지하는 최소 표적 두께.
  3. 관통 한계 두께 ($e$): 탄체가 표적을 완전 뚫고 지나가는 것을 방지하는 최소 두께.
  4. 탄도 한계 속도 ($V_{BL}$): 표적을 관통시키는 최소 충돌 속도.

## Results

### 1. 주요 충격 해석 공식별 관통 깊이($x$), 스폴링 한계($h_s$), 관통 한계($e$) 수식 체계 비교표 (Section 2 & Table 1)

| 공식 명칭 (Formula) | 개발 연도 및 국가 | 관통 깊이 산정식 ($x/d$) | 스폴링 한계 두께 ($h_s/d$) | 관통 한계 두께 ($e/d$) | 주요 특징 및 적용 한계 |
|---|---|---|---|---|---|
| **Modified NDRC** | 1946 (미국 국방연구위) | $x/d = 2\sqrt{G}$ ($G \le 1.0$) | $h_s/d = 7.91(x/d) - 5.06(x/d)^2$ | $e/d = 3.19(x/d) - 0.718(x/d)^2$ | 전 세계 방호 표준, 중간 속도 적합 |
| **ACE (Army Corps)** | 1946 (미 육군공병단) | $x/d = \frac{3.5\times 10^{-4}}{\sqrt{f_c}} \left(\frac{M}{d^3}\right) d^{0.215} V_0^{1.5}$ | $h_s/d = 2.12 + 0.57(x/d)$ | $e/d = 1.32 + 1.24(x/d)$ | 중속 대형 포탄 경험식 |
| **Hughes Formula** | 1978 (영국) | $x/d = 0.19 N I / S$ ($S$: 동적 강도비) | $h_s/d = 5.0 (x/d)$ | $e/d = 1.74 (x/d) + 0.5$ | 실린더형 충격체 기반, 연성비 반영 |
| **UKAEA (영국원자력)** | 1987 (영국) | 관통 깊이 직접 계산 대신 $e$ 기반 | $h_s/d = 1.4 (e/d)$ | $e/d = 1.13 I^{0.5}$ | 원자력 격납용기 항공기 파편 방호용 |
| **Li & Chen (제안식)** | **2003 (영국 맨체스터대)**| **$\sqrt{\frac{4}{\pi} k N^* I}$ ($x/d \le 2$)** | **$h_s/d = 2.5(x/d) + 1.0$** | **$e/d = \frac{4}{\pi} N^* I + 1.5$** | **전 구간 정합, 물리 이론 기반 완전해** |

### 2. 충격 파괴 메커니즘 및 천부-심부 관통 천이 해석
- **충격 천부 크레이터링(Cratering) 및 터널링(Tunneling)**: 탄체가 표적에 충돌하는 순간 표면 자유 경계 조건에 의해 원뿔형 크레이터가 형성되고, $x > 2d$ 깊이로 진입하면서 표면 구속 효과로 탄체 직경에 준하는 원통형 터널링 저항 구간으로 전환.
- **반사 인장파에 의한 배면 스폴링**: 탄체가 표적 내부로 전진하며 방사상 압축 응력파를 발산할 때, 표적 배면에서 반사된 인장 응력파가 콘크리트의 낮은 동적인장강도를 초과하여 배면 콘크리트 덩어리가 고속으로 박리·비산되는 취성 파괴를 유발.

- **종합 결론**: 본 논문은 Q.M. Li 교수가 이끄는 연구팀이 1세기 동안 축적된 전 세계 콘크리트 충격 방호 공학 데이터를 단일 무차원 함수 체계로 통합 분석하고, 관통·스폴링·관통한계에 대한 가장 신뢰성 높은 물리 기반 해석 모델을 정립한 방호 공학 분야의 최고 불후의 고전 원전 논문임.

## Related Notes

- [[liu-2022-uhpc-high-velocity-projectile-impact-review]] — UHPC 초고속 발사체 관통저항성 총설.
- [[concrete-durability-and-service-life]] — 극한 충격 하중 콘크리트 파괴 평가 체계.
- [[high-strength-strain-hardening-composites]] — 방호용 고성능 복합체 체계.
