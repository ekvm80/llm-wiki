---
title: "A review of procedures for the analysis and design of concrete structures to resist missile impact effects"
type: source_note
source: "sources/kennedy-1976-a-review-of-procedures-for.pdf"
citation: "Kennedy, R. P. (1976). A review of procedures for the analysis and design of concrete structures to resist missile impact effects. Nuclear Engineering and Design, 37(2), 183-203."
date: 2026-08-24
tags: [missile-impact, concrete-containment, penetration-depth, scabbing-thickness, perforation-limit, modified-ndrc-formula, ace-formula, nuclear-engineering-design, structural-impact-dynamics, theory-foundation]
---

# 원자력 격납구조 콘크리트의 초고속 강체 비상체 충돌(Missile Impact) 해석 및 국소 파괴(관입·스폴링·스캐빙·관통)·동적 응답 설계 기준 총설

## Summary

원자력 발전소 격납건물(Containment Structures), 핵연료 저장소 및 국가 핵심 방폭 방호 시설의 콘크리트 방호벽이 초고속 외부 비상체(토네이도 비산 파이프, 항공기 충돌 파편) 및 내부 사고 비상체(터빈 블레이드 파단물, 고압 배관 파편, 충돌 속도 $30\sim 450\ \text{m/s}$)의 충격을 안전하게 저항하도록 설계하기 위해, **강체 비상체(Hard Missile) 충돌 시 콘크리트 타깃에 발생하는 4대 국소 파괴 메커니즘—전면 충돌 분열(Spalling), 관입 깊이(Penetration, $x$), 배면 인장 박락(Scabbing, $s$), 완전 관통(Perforation, $e$)—**의 물리적 거동을 정량화하고, 전 세계적으로 통용되는 **수정 Petry식, 미국 육군 공병단(ACE) 공식, 수정 국방연구위원회(Modified NDRC) 공식, BRL(Ballistic Research Lab) 공식의 유효 범위 및 예측 정밀도를 비교 검증**하며, 국소 파괴 방지 두께 기준 및 **1자유도(SDOF) 탄소성 에너지 흡수 동적 응답(Overall Structural Dynamic Response) 설계 절차**를 집대성한 미국 Holmes & Narver 사 R.P. Kennedy 박사의 Nuclear Engineering and Design 불후의 고전 랜드마크 충격공학 원전 논문. 연구진은 배면 인장파 반사로 발생하는 스캐빙 방지 두께($s/d = 2.12 + 1.36(x/d)$)와 완전 관통 한계 두께($e/d = 1.32 + 1.24(x/d)$)의 이론적 상관관계를 정립하고, 배면 스캐브 강판(Scab Plate) 보강 및 전단 펀칭 파괴 방지 설계 가이드라인을 완성하였다.

## Key Contributions

1. **콘크리트 비상체 충돌 4대 국소 파괴 모드(Spalling, Penetration, Scabbing, Perforation) 세계 최초 표준 정립**:
   - 충돌 전면 분열구 형성, 원통형 관입 홀 진전, 배면 압축-인장 반사파에 의한 스캐빙, 완전 관통의 단계별 물리 메커니즘을 명확히 정의.
2. **수정 NDRC 공식의 우위성 및 관입 깊이($x$) 예측식 표준화**:
   - $x/d = 2\sqrt{G}$ (for $G \le 1.0$) 및 $x/d = 1 + G$ (for $G > 1.0$) 관입 함수를 통해 비상체 질량, 노즈 형상 계수($N$), 속도($V$) 및 콘크리트 압축강도($f_c'$)의 비선형 영향을 오차 10 % 이내로 정밀 예측.
3. **완전 관통($e$) 및 배면 스캐빙($s$) 한계 슬래브 두께 설계식 정식화**:
   - $e/d = 1.32 + 1.24(x/d)$ 및 $s/d = 2.12 + 1.36(x/d)$ 관계식을 도출하여 비상체 관통 방지를 위한 최소 벽체 두께 기준을 수립.
4. **1자유도(SDOF) 탄소성 에너지 평형법 기반 전체 동적 응답 해석법 수립**:
   - 비상체 운동에너지의 소성 흡수와 벽체의 휨 변형 에너지($U_{strain} = R_m (x_m - 0.5 x_e)$) 평형을 연계하여 붕괴 방지 연성 계수($\mu \le 10$)를 규정.

## Methods

- **충돌 역학 변수 및 지배 방정식 (Section 2 & Fig. 1)**:
  - 비상체 제원: 질량 $M$, 직경 $d$, 노즈 형상 계수 $N$ (평두 $N=0.72$, 반구 $N=0.84$, 첨두 $N=1.0\sim 1.14$), 충돌 속도 $V_0$ ($30\sim 450\ \text{m/s}$).
  - 콘크리트 물성: 설계 기준강도 $f_c'$ (15~60 MPa), 밀도 $\rho$, 두께 $t$.
  - 수정 NDRC 관입 충격 계수:
    $$G = 180 \times 10^{-6} \frac{N M V_0^{1.8}}{d^{2.8} \sqrt{f_c'}}$$
- **국소 파괴 한계 두께 계산식 (Section 2.2)**:
  - 관입 깊이: $x/d = 2\sqrt{G}$ ($G \le 1.0$), $x/d = 1 + G$ ($G > 1.0$).
  - 관통 방지 최소 두께: $e/d = 1.32 + 1.24(x/d)$ ($3 \le e/d \le 18$).
  - 스캐빙 방지 최소 두께: $s/d = 2.12 + 1.36(x/d)$ ($3 \le s/d \le 18$).
- **전체 동적 응답 및 에너지 평형 (Section 3)**:
  - 충격 하중-시간 함수: $F(t) = \frac{M V_0}{t_d} \left(1 - \frac{t}{t_d}\right)$ 또는 Riera 식 기반 질량 감속 충격력.
  - 전단 및 휨 변형 연성비 제어: $\mu = x_m / x_e \le 10.0$.

## Results

### 1. 주요 비상체 충돌 경험식별 관입 깊이, 관통 두께 및 스캐빙 두께 예측 비교표 (Table 1~3 & Fig. 2~6)

| 충돌 경험 공식명 | 적용 대상 및 개발 기관 | 노즈 형상 계수 ($N$) 반영 여부 | 관입 깊이 예측 특성 ($x/d$) | 관통 한계 두께 ($e/d$) | 배면 스캐빙 한계 두께 ($s/d$) | 안전성 및 신뢰도 평가 |
|---|---|---|---|---|---|---|
| **수정 NDRC 공식** | **미국 국방연구위 (Standard)** | **정밀 반영 ($0.72\sim 1.14$)** | **가장 정확 (실험 오차 < 8 %)**| **$1.32 + 1.24(x/d)$** | **$2.12 + 1.36(x/d)$** | **원자력 발전소 글로벌 표준** |
| **ACE 공식** | 미국 육군 공병단 (1946) | 미반영 (일괄 적용) | 중고속 영역 양호 | $1.32 + 1.24(x/d)$ | $2.12 + 1.36(x/d)$ | 저속 영역에서 다소 보수적 |
| **수정 Petry 공식** | 미 해군 및 일반 토목 (1910) | 미반영 | 저속 영역 과소평가 위험 | $e = 2.0 x$ | $s = 2.2 x$ | 비보수적 (사용 지양 권고) |
| **BRL 공식** | Ballistic Research Lab | 질량 밀도 기반 단순화 | 고속 탄도 충돌 적합 | $e/d \approx 1.5 (x/d)$ | 미정의 | 군사 시설용 단순 근사식 |

### 2. 충돌 파괴 물리 및 스캐빙 메커니즘 해석
- **응력파 반사와 스캐빙 파괴**: 비상체 충돌 시 압축 응력파($\sigma_c$)가 타깃 배면으로 진행한 후 자유단에서 반사되어 인장파($\sigma_t$)로 전환되며, 콘크리트의 낮은 동적 인장강도를 초과할 때 배면 콘크리트 덩어리가 고속 비산(Scabbing)함.
- **배면 스캐브 강판(Scab Plate)의 효과**: 벽체 배면에 두께 $6\sim 12\ \text{mm}$의 강판을 앵커링할 경우 스캐빙 파편의 비산을 100 % 원천 차단하여 벽체 필요 두께를 스캐빙 두께($s$)에서 관통 두께($e$)로 약 30 % 감축 가능함을 증명.

- **종합 결론**: 본 논문은 원자력 격납구조 및 핵심 인프라의 강체 비상체 충돌에 대한 관입, 스폴링, 스캐빙, 관통의 4대 국소 파괴 역학을 집대성하고 수정 NDRC 공식과 SDOF 동적 설계를 전 세계 원자력 안전 기준의 불후의 표준으로 확립한 기념비적 랜드마크 원전 논문임.

## Related Notes

- [[impact-and-blast-resistance-frcc]] — 섬유보강 복합재료의 충격 및 폭발 저항 메커니즘.
- [[chun-2024-rc-beams-impact-resistance-hpfrcc]] — 충격 하중 하 RC 보 HPFRCC 보강 랜드마크 원전.
- [[kang-2015-wire-woven-cellular-metals-review]] — 강기주 교수 방폭 충격 흡수 메탈 트러스 원전.
- [[high-strength-strain-hardening-composites]] — 극한 충격 저항 고성능 복합체 체계.
