---
title: "Impact Resonance and Dynamic Elastic Properties of Polypropylene Fiber Reinforced Concrete (El-Newihy, 2017)"
type: reference_book
source: "sources/ref_El-Newihy_Adham_MASc_2017.pdf"
citation: "El-Newihy, A. (2017). Evaluation of dynamic elastic properties and impact resistance of synthetic fiber reinforced concrete using impact resonance method (Master's thesis). University of Windsor, Canada."
date: 2026-08-24
tags:
  - impact-resonance
  - astm-c215
  - dynamic-elastic-modulus
  - damping-ratio
  - polypropylene-fibers
  - thesis
---

## Summary
합성 매크로 및 마이크로 폴리프로필렌(PP) 섬유($V_f = 0.1 \sim 1.0 \%$)로 보강된 섬유보강 콘크리트(PP-FRC)의 동탄성계수(Dynamic Young's Modulus $E_d$), 동전단탄성계수($G_d$), 동포아송비($\mu_d$) 및 재료 감쇠비(Damping Ratio $\zeta$)를 ASTM C215 충격 공진법(Impact Resonance Method: 종진동, 휨진동, 비틀림진동 모드)으로 비파괴 정밀 측정하고, 정적 탄성계수 및 4점 휨 인성($I_{20}, I_{30}$)과의 상관관계를 포괄적으로 정립한 캐나다 윈저 대학교(University of Windsor) 엘뉴이히(Adham El-Newihy)의 석사학위 논문이다. 매크로 PP 섬유가 미세 내부 감쇠 계면을 형성하여 콘크리트의 동적 감쇠비를 최대 **65 %** 증대시킴을 규명하였다.

## Key Contributions
- **ASTM C215 3대 진동 모드(종방향, 횡방향 휨, 비틀림) 전산 자동 해석 프로그램 구축**: 고속 푸리에 변환(FFT) 스펙트럼 피크 및 반전력 대역폭(Half-Power Bandwidth) 기반 감쇠비 정밀 산출.
- **동탄성계수($E_d$)와 정적 탄성계수($E_c$) 간의 경험 변환 상관식 도출**: $E_c = 0.82 E_d + 1.25 (GPa)$ 모델 확립 ($R^2 = 0.96$).
- **PP 섬유 혼입률에 따른 감쇠비 증대 기전 규명**: 섬유-매트릭스 미세 계면에서의 점탄성 미소 마찰이 고주파 진동 에너지를 신속히 흡수.
- **동결융해 및 균열 손상 비파괴 모니터링 가이드라인 제시**: 상대동탄성계수($RDM$)와 감쇠비 변화율을 결합한 2중 손상 지표 개발.

## Methods
- 배합: 보통 포틀랜드 시멘트 ($W/C = 0.40, 0.50$), 골재 최대치수 19 mm.
- 섬유: 마이크로 PP 섬유 ($L_f = 12 mm$, $V_f = 0.1, 0.2 \%$) 및 매크로 합성 트위스트 PP 섬유 ($L_f = 40 mm$, $V_f = 0.3, 0.5, 0.8, 1.0 \%$).
- 공시체 및 시험: $100 \times 100 \times 400 mm$ 각기둥 보, PCB 가속도계, 충격 해머 공진 시험, 일축 압축강도 및 4점 휨 인성 시험 (ASTM C1609).

## Results
- 섬유 배합별 28 d 동탄성계수 및 감쇠비 측정 데이터:

| 배합 ID | 섬유 종류 및 혼입률 | 28 d 압축강도 (MPa) | 동탄성계수 $E_d$ (GPa) | 동전단탄성계수 $G_d$ (GPa) | 동적 감쇠비 $\zeta$ (%) | 휨 인성 $T_{150}^{150}$ (J) |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: |
| Control | 무보강 | 44.5 | 38.5 | 16.2 | 1.15 | 1.2 (취성) |
| Micro-0.2 | 마이크로 PP 0.2 % | 43.8 | 37.8 | 15.9 | 1.35 | 4.8 |
| Macro-0.5 | 매크로 PP 0.5 % | 42.0 | 36.2 | 15.2 | 1.68 | 24.5 |
| Macro-1.0 | 매크로 PP 1.0 % | 39.5 | 34.0 | 14.5 | **1.90** | **45.2** |

## Related Notes
- [[zheng-2008-dynamic-properties-rubberized-concrete]] - 동탄성 및 감쇠비 비파괴 공진법
- [[orban-2011-damping-materials-members-structures]] - 구조 감쇠 메커니즘
- [[ndt-and-shm-of-cementitious]] - 비파괴 검사 기술
