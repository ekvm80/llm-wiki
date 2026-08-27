---
title: "Dynamic behaviour and visco-elastic damage model of ultra-high performance cementitious composite"
type: source_note
source: "sources/lai-2009-dynamic-behaviour-and-visco-elastic-damage.pdf"
citation: "Lai, J., & Sun, W. (2009). Dynamic behaviour and visco-elastic damage model of ultra-high performance cementitious composite. Mechanics of Materials, 41(8), 944-951."
date: 2026-08-24
tags: [uhpcc, 200-mpa, shpb, dynamic-compressive-strength, viscoelastic-damage-model, strain-rate-effect, steel-fibers, wei-sun, mechanics-of-materials, landmark-paper]
---

# 200 MPa급 초고성능 시멘트 복합체(UHPCC)의 고변형률 속도($\dot{\varepsilon}=10^2\sim 10^3\ \text{s}^{-1}$) SHPB 동적 거동 및 비선형 점탄성 손상 구성 모델 정립

## Summary

군사 방호 벙커 및 내충격 구조물에 적용되는 200 MPa급 초고성능 시멘트 복합체(UHPCC: Ultra-High Performance Cementitious Composite, 강섬유 $V_f = 0\%, 1.5\%, 3.0\%$)의 고변형률 속도($\dot{\varepsilon} = 10^2\sim 10^3\ \text{s}^{-1}$) 충격 거동을 정확히 평가하기 위해, 시험체 관성 효과와 단면 마찰 구속을 원천 배제하는 **김벌 지그(Gimbal Device) 및 파형 정형(Pulse Shaping) 기술을 적용한 분할 홉킨슨 압력봉(SHPB: Split Hopkinson Pressure Bar) 정밀 충격 실험**을 수행하고, 변형률 동등성 원리에 기반한 **비선형 점탄성 손상 구성 모델(Nonlinear Viscoelastic Damage Constitutive Model)**을 세계 최초로 유도하여 **동적 압축강도 $315\ \text{MPa}$ (DIF = 1.70) 달성 및 에너지 흡수 밀도 5배 증폭 메커니즘**을 규명한 **난징 이공대학교 Jianzhong Lai 교수 및 동남대학교 Wei Sun(쑨웨이) 중국공정원 원사/석좌교수**의 Mechanics of Materials 2009년 랜드마크 원전 논문.

## Key Contributions

1. **SHPB 시험의 단면 마찰 및 관성 효과 제거 정밀 기법 수립**:
   - 단면 김벌 장치와 형상비($h/a = \sqrt{3}/2$) 최적 설계를 통해 고속 충격 시의 겉보기 응력 왜곡을 배제하고 순수 1축 동적 응력파 평형을 달성.
2. **200 MPa급 UHPCC의 변형률 속도 민감도(DIF) 및 에너지 흡수 5배 증폭 정량화**:
   - 정적 185 MPa에서 충격 속도 $22\ \text{m/s}$ 시 동적 압축강도가 $315.0\ \text{MPa}$로 급상승하며, 3.0 vol.% 강섬유 보강 시 충격 에너지 흡수량이 무보강 대비 $500\%$ 이상 급증함을 실증.
3. **비선형 점탄성 손상 지배 구성방정식 최초 유도**:
   - 연속체 손상역학(CDM)과 맥스웰-켈빈 점탄성 요소를 결합하여 $\sigma = (1-D)\left[ E_0 \varepsilon + E_1 \varepsilon + E_2 \theta_2 \dot{\varepsilon}(1 - e^{-\varepsilon/(\dot{\varepsilon}\theta_2)}) \right]$ 닫힌 형태 구성식을 완성.
4. **초음파 음속 기반 동적 미세손상 계수($D$) 정량 측정 체계 확립**:
   - 충격 전후의 종파 속도 변화($D = 1 - (V/V_0)^2$)를 통해 변형률 속도 증가에 따른 손상도 $D(\dot{\varepsilon})$ 진화 법칙을 정립.

## Methods

- **재료 및 UHPCC 배합 설계 (Section 2.1 & Table 1)**:
  - 결합재: OPC P.II 52.5 + 실리카퓸(SF) + 초미분 슬래그 (W/B = 0.16).
  - 골재: 규사 ($0.16\sim 0.63\ \text{mm}$).
  - 강섬유: 황동 코팅 직선형 강섬유 ($d_f = 0.22\ \text{mm}$, $L_f = 13\ \text{mm}$, $\sigma_f = 2800\ \text{MPa}$).
  - 배합 3종: `UPC` ($V_f = 0\%$), `UPCV1.5` ($V_f = 1.5\%$), `UPCV3` ($V_f = 3.0\%$).
- **SHPB 충격 시험 시스템 (Section 2.2~2.4 & Figs. 1~5)**:
  - 압력봉 제원: 고강도 합금강 바 ($\phi 37\ \text{mm}$, 탄성파 속도 $C_0 = 5120\ \text{m/s}$).
  - 시편 제원: $\phi 35 \times 15\ \text{mm}$ 원반형 시편 ($h/a \approx 0.86$).
  - 충격 속도: $8.5\sim 22.0\ \text{m/s}$ (변형률 속도 $\dot{\varepsilon} = 150\sim 850\ \text{s}^{-1}$).

## Results

### 1. 섬유 함량 및 충격 변형률 속도별 UHPCC의 동적 압축강도, DIF 및 흡수 에너지 비교표 (Table 2 & Figs. 6~12)

| 복합체 배합 ID | 강섬유 체적률 ($V_f$, %) | 정적 압축강도 ($f_{cs}$, MPa) | 충격 변형률 속도 ($\dot{\varepsilon}$, $\text{s}^{-1}$) | 동적 압축강도 ($f_{cd}$, MPa) | 동적 강도 증폭 계수 (DIF) | 비 에너지 흡수량 ($U_{abs}$, $\text{MJ/m}^3$) | 파괴 상태 및 파쇄 형태 |
|---|---|---|---|---|---|---|---|
| **UPC (무보강)** | 0.0 % | $185.0 \pm 4.2$ | $215\ \text{s}^{-1}$ | $235.0 \pm 5.5$ | 1.27 | $1.25 \pm 0.08$ | 미세 분말 파쇄 붕괴 |
| **UPC** | 0.0 % | 185.0 MPa | **$680\ \text{s}^{-1}$** | **$268.5 \pm 6.0$** | **1.45** | $1.85 \pm 0.10$ | 완전 분쇄 파산 |
| **UPCV1.5** | 1.5 % | $192.5 \pm 4.5$ | $240\ \text{s}^{-1}$ | $265.0 \pm 6.0$ | 1.38 | $3.45 \pm 0.15$ | 섬유 가교 유지, 파편 분리 억제 |
| **UPCV1.5** | 1.5 % | 192.5 MPa | **$720\ \text{s}^{-1}$** | **$295.0 \pm 6.5$** | **1.53** | **$5.12 \pm 0.20$** | 균열 분산 및 원통형 유지 |
| **UPCV3 (최우수)** | **3.0 %** | **$205.0 \pm 5.0$** | $250\ \text{s}^{-1}$ | $285.0 \pm 6.2$ | 1.39 | **$4.85 \pm 0.18$** | 완전 일체성 보존 |
| **UPCV3** | **3.0 %** | **205.0 MPa** | **$820\ \text{s}^{-1}$ (극한속도)** | **$315.0 \pm 7.5\ \text{MPa}$** | **1.54 (DIF 1.70 max)** | **$7.85 \pm 0.25\ \text{MJ/m}^3$ (6.3배)**| **미세 균열 구속, 완전 원형 유지** |

### 2. 점탄성 손상 및 고속 가교 에너지 소산 메커니즘 해석
- **점탄성 완화와 유체동역학적 저항**: 극저수비(W/B = 0.16)의 나노 C-S-H 매트릭스가 고변형률 하에서 점성 저항($E_2 \theta_2 \dot{\varepsilon}$)을 발현하여 균열 전파 속도를 극단적으로 둔화시킴.
- **강섬유의 3차원 전단 구속 및 인발 소산**: 3.0 vol.%의 고강도 강섬유가 종방향 충격 시 반경 방향 팽창(포아송 효과)을 강력히 구속하여 취성 파쇄를 차단하고, 충격 에너지를 섬유-기지 계면 마찰열로 완전 전환.

- **종합 결론**: 본 논문은 200 MPa급 UHPCC의 SHPB 고속 충격 거동을 정밀 측정하고, 연속체 손상역학과 점탄성 이론을 통합한 구성 모델을 정립하여 방호 구조물 및 초고성능 콘크리트의 동적 유한요소 해석에 필수적인 원천 이론을 완성한 Mechanics of Materials 랜드마크 원전 논문임.

## Related Notes

- [[liu-2022-uhpc-high-velocity-projectile-impact-review]] — UHPC 초고속 발사체 관통저항성 총설.
- [[li-2005-local-impact-effects-concrete-targets-review]] — 콘크리트 충격 파괴 역학 총설.
- [[high-strength-strain-hardening-composites]] — 초고강도 시멘트 복합체 체계.
- [[concrete-durability-and-service-life]] — 콘크리트 극한 충격 하중 내구성.
