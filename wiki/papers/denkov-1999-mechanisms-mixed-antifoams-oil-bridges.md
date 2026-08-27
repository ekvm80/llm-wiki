---
title: "Mechanisms of Action of Mixed Solid-Liquid Antifoams. 2. Stability of Oil Bridges in Foam Films"
type: source_note
source: "sources/denkov-1999-mechanisms-of-action-of-mixed.pdf"
citation: "Denkov, N. D. (1999). Mechanisms of Action of Mixed Solid-Liquid Antifoams. 2. Stability of Oil Bridges in Foam Films. Langmuir, 15(25), 8530-8542."
date: 2026-08-24
tags: [antifoams, mixed-solid-liquid-antifoam, oil-bridges, foam-film-rupture, laplace-capillarity, neumann-triangle, three-phase-contact-angle, garrett-bridging-coefficient, langmuir, theory-foundation]
---

# 복합 고체-액체 소포제(실리카-실리콘 오일)의 기포 액막 파포 메커니즘: 오일 가교(Oil Bridge)의 모세관 불안정성 및 라플라스 계면 변형 모델

## Summary

시멘트 콘크리트 혼화제(고성능 감수제 SP) 및 계면활성제 수용액에서 과도하게 연행되는 유해 기포를 정밀 소포·파포하기 위해 널리 사용되는 복합 소포제(소수성 실리카 입자 + 실리콘 오일 에멀젼)가 기포 박막(Foam Film)을 파괴하는 핵심 물리화학적 기구를 정량 규명하기 위해, 고속 비디오 카메라를 통한 오일 액적의 액막 침투 관측과 Garrett의 고전 가교 계수($B$) 이론을 근본적으로 확장하여 **기포 액막 표면 변형(Nodoid, Unduloid 곡면)을 고려한 라플라스 모세관압 평형 방정식($\Delta P = \sigma(1/R_1 + 1/R_2)$)과 노이만 벡터 삼각형($\vec{\sigma}_{AW} + \vec{\sigma}_{OW} + \vec{\sigma}_{OA} = 0$)의 3차원 적분 연립 해석**을 수행한 프랑스 로디아 케미(Rhodia Chimie) 및 소피아 대학교 Nikolai D. Denkov 교수의 불후의 랜드마크 계면화학 원전 논문. 연구 결과 기포 액막 내에 형성된 오일 가교는 3상 접촉각($\theta_{OW}, \theta_{OA}$)과 액막 두께 대비 가교 크기 비율에 따라 **(1) 수 밀리초($\text{ms}$) 내에 스스로 신장되어 액막을 파열시키는 '역학적 불안정 가교(Mechanically Unstable Bridges)'**와 **(2) 모세관 평형을 유지하며 수 초간 잔존하는 '준안정 가교(Metastable Bridges)'**의 2가지로 명확히 분기됨을 수학적으로 증명하였다. 또한 오일 가교 계수 $B = \sigma_{AW}^2 + \sigma_{OW}^2 - \sigma_{OA}^2 > 0$ 조건 하에서 계면장력 불균형력이 수용액 배출(Drainage)을 가속하여 기포를 파괴하는 완벽한 파포 상태도를 정립하였다.

## Key Contributions

1. **오일 가교 신장 및 파포 메커니즘(Bridging-Stretching Mechanism) 세계 최초 수학적 정립**:
   - 오일 액적이 기포 액막 양면을 관통하여 가교를 형성할 때 발생하는 모세관 불균형력과 신장 속도를 라플라스 미분방정식으로 유도.
2. **액막 표면 곡률 변형(Nodoid/Unduloid)을 반영한 일반화 가교 평형 해석**:
   - Garrett의 평면 가교 가정을 극복하고 실제 기포 액막의 3차원 계면 굴곡을 타원 적분(Elliptic Integrals)으로 엄밀 해석.
3. **가교 불안정성 및 파포를 지배하는 임계 접촉각($\theta_{OW} < 90^\circ$) 조건 도출**:
   - 오일-물 계면 장력($\sigma_{OW}$)과 공기-물 계면 장력($\sigma_{AW}$)의 상호작용에 의해 오일 브리지가 자발적으로 확장되는 열역학적 불안정 영역을 확립.
4. **소포제 입자 크기 대 기포 액막 두께 비($R_{drop}/h$)에 따른 파포 효율 맵 완성**:
   - 시멘트 페이스트 기포 직경 및 기공 구조 제어에 필수적인 소포제 에멀젼 입경 최적화 가이드라인을 제공.

## Methods

- **열역학 및 모세관 기하 모델링 (Section 2~4)**:
  - 3대 계면: 공기-물(AW), 오일-물(OW), 오일-공기(OA).
  - 계면장력 파라미터: $\sigma_{AW}, \sigma_{OW}, \sigma_{OA}$.
  - 라플라스 모세관압 방정식 연립:
    $$\frac{dz}{dr} = \pm \frac{r(C + \frac{\Delta P}{2\sigma} r^2)}{\sqrt{r^2 - [r(C + \frac{\Delta P}{2\sigma} r^2)]^2}}$$
  - 3상 접촉선 노이만 벡터 평형:
    $$\cos\theta_{OW} = \frac{\sigma_{AW}^2 + \sigma_{OW}^2 - \sigma_{OA}^2}{2 \sigma_{AW} \sigma_{OW}} = \frac{B}{2\sigma_{AW}\sigma_{OW}} + 1$$
- **수치 해석 기법 (Section 5)**:
  - 타원 적분 $F(\varphi, q)$ 및 $E(\varphi, q)$ 기반 4차 룬게-쿠타(Runge-Kutta) 수치해석.
  - 가교 반경 $r_C$, 액막 반경 $r_P$, 모세관 압력차 $\Delta P_{OW}$ 연립 반복 솔버 구축.

## Results

### 1. 소포제 오일 가교의 열역학 계수 및 안정성 분류표 (Table 1~2 & Fig. 1~5)

| 가교 거동 유형 | 가교 계수 ($B$) 조건 | 접촉각 ($\theta_{OW}$) | 오일 전파 계수 ($S$) | 액막 변형 모드 | 파포 소요 시간 | 소포 효율성 |
|---|---|---|---|---|---|---|
| **역학적 불안정 가교** | **$B > 0$ (양수)** | **$\theta_{OW} < 90^\circ$** | **$S > 0$ (자발 전파)** | **Nodoid 신장 $\rightarrow$ 단면 축소**| **$< 5\ \text{ms}$ (초고속 파열)**| **극히 우수 (이상적 소포)** |
| **준안정 가교** | $B < 0$ (음수) | $\theta_{OW} > 90^\circ$ | $S < 0$ (미전파) | Unduloid 모세관 평형 유지 | 수초 ~ 수십초 잔존 | 불완전 소포 |
| **비가교 액적** | - | 접촉 미형성 | - | 구형 액적 부유 | 파포 불가 | 무효 |

### 2. 파포 동역학 및 계면 메커니즘 해석
- **자발적 오일 가교 신장**: $B > 0$일 때 세 계면장력의 벡터 합이 가교 중심부에서 외측으로 작용하여 오일 브리지의 허리 두께가 급격히 얇아지며 $3\sim 5\ \text{ms}$ 이내에 중심 파단(Capillary Pinch-off)이 발생하여 액막 전체를 붕괴시킴.
- **실리카 미립자의 촉매 역할**: 소수성 실리카 입자가 오일 액적 표면에 존재할 경우 공기-물 계면을 국소적으로 천공하여 오일 가교 형성을 100배 이상 촉진함을 규명.

- **종합 결론**: 본 논문은 복합 소포제의 기포 박막 파포 메커니즘을 3차원 라플라스 모세관 해석과 접촉각 열역학으로 완벽히 정식화하여 현대 콜로이드 및 콘크리트 소포 화학의 표준 기초를 확립한 불후의 랜드마크 원전 논문임.

## Related Notes

- [[choi-2015-basalt-fiber-bonding-orientation-strength]] — 시멘트 복합체 소포제 및 계면 장력 제어 원전.
- [[particle-packing-models]] — 기포 소포를 통한 콘크리트 고밀도 충전 체계.
- [[alkali-activated-materials]] — 알칼리 용액 내 기포 제어 및 소포 기술.
- [[particle-packing-models]] — 소포를 통한 유해 공극 제거 및 내구성 향상.
