---
title: "Prediction of the Rheological Properties of Fresh Cementitious Suspensions Considering Microstructural Parameters (Rajagopalan, Lee & Kang, 2022)"
type: source_note
source: "sources/IJP6722E_Prediction of the rheological_materia.pdf"
citation: "Rajagopalan, S.R., Lee, B.-Y., Kang, S.-T. Prediction of the rheological properties of fresh cementitious suspensions considering microstructural parameters. Materials 15(20) (2022) 7044. doi: 10.3390/ma15207044"
date: 2026-08-22
tags: [rheology, yield-stress, plastic-viscosity, yodel, krieger-dougherty, scm, user-group]
---

# 미시구조 파라미터 기반 시멘트 현탁액 레올로지 예측

## Summary

사용자 그룹 논문(전남대 이방연 공저·계명대 강수태 교신). 포틀랜드 시멘트(PC)·플라이애시(FA)·고로슬래그(BS)·실리카퓸(SF) 각각의 비혼합(non-blended) 현탁액에 대해 고상 부피분율 φ 0.28~0.44 범위에서 레올로지 시험을 수행하고, 항복응력은 YODEL(Yield stress mODEL), 소성점도는 Krieger-Dougherty 식으로 피팅 파라미터 없이 예측했다. YODEL 상관계수 r ≥0.96, K-D 식 r ≥0.94로 실험과 일치.

## Key Contributions

1. **SCM 종류별 유동성 차이의 입자 특성 해석**: FA는 구형 입자로 분리·분산이 쉬워 유동성 개선, BS는 매끈한 표면·낮은 화학활성·마이크로 필링 효과로 개선, SF는 미세 입자가 입자 간격을 줄여 직접 접촉점 증가로 오히려 유동성 저하 — SCM 종류별 레올로지 메커니즘 구분.
2. **YODEL로 항복응력 무피팅 예측**: 입자 크기 분포(PSD)·입자간 힘·미시구조 파라미터를 일차원 원리에서 도출. PC r≈0.98, FA 0.99, BS 0.96, SF 0.96. 멀티모달 분말 현탁액 전반 적용 가능.
3. **K-D 식으로 소성점도 예측**: 최대 입자 분율 φm과 고유 점도를 주요 파라미터로 사용. PC r≈0.99, FA 0.98, BS 0.98.
4. **설계 실무 함의**: 혼합 배합 설계 전 단일 SCM의 φ 의존 레올로지를 먼저 측정하면 복합 배합의 레올로지를 예측 가능 — SP 감량 최적화의 이론적 근거.

## Methods

- 재료: GP 시멘트, FA, BS, SF(비응축). 각 SCM별 비혼합 현탁액 준비.
- 변수: 고상 부피분율 φ = 0.28~0.44 단계별 설계.
- 시험: 회전형 레오미터로 항복응력·소성점도 측정, 유동곡선 Bingham 피팅.
- 예측 모델: YODEL(항복응력), Krieger-Dougherty(점도). PSD와 φm 입력, 피팅 파라미터 없음.

## Results

| 현탁액 | YODEL r (항복응력) | K-D r (소성점도) |
|---|---|---|
| PC | 0.98 | 0.99 |
| FA | 0.99 | 0.98 |
| BS | 0.96 | 0.98 |
| SF | 0.96 | 0.94+ |

- φ 증가에 따라 항복응력·점도 모두 증가, 저 φ에서 유동성 우수.

## Related Notes

- [[schramm-malkin-triantafillopoulos-rheology-references]] — 레올로지 측정 기초
- [[wong-2001-concrete-rheology-workability-fhwa]] — 콘크리트 레올로지 적용
- [[barnes-2000-elementary-rheology]] — 레올로지 입문
- [[choi-2015-rheological-mechanical-fr-aac]] — 사용자 그룹 AAS 레올로지×연성
- [[ijp5220-r-ldphc-pile]] — 동일 IJP 시리즈
