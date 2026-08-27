---
title: "Ultra-high performance concrete targets against high velocity projectile impact – a-state-of-the-art review"
type: source_note
source: "sources/liu-2022-ultra-high-performance-concrete-targets-against.pdf"
citation: "Liu, J., Li, J., Fang, J., Su, Y., & Wu, C. (2022). Ultra-high performance concrete targets against high velocity projectile impact – a-state-of-the-art review. International Journal of Impact Engineering, 160, 104080."
date: 2026-08-24
tags: [uhpc, high-velocity-projectile-impact, hvpi, penetration-depth, cratering-scabbing, steel-fibers, functionally-graded-materials, hydrocodes, elsevier-review, landmark-paper]
---

# 초고성능 콘크리트(UHPC) 방호 표적의 초고속 발사체($500\sim 1500\ \text{m/s}$) 관통 저항성 및 파괴 메커니즘: 관통 깊이(DOP) 60% 저감 및 경사기능(FGM) 다층 방호 설계 총설

## Summary

군사 방호 벙커, 원자력 격납건물 및 국가 핵심 기반시설의 대테러 방호를 위해, **초고성능 콘크리트(UHPC: Ultra-High Performance Concrete) 표적의 초고속 발사체(HVPI: High Velocity Projectile Impact, 충돌 속도 $500\sim 1500\ \text{m/s}$) 충격 저항성, 관통 깊이(DOP: Depth of Penetration), 전면 크레이터(Front Cratering) 및 배면 스폴링(Rear Scabbing) 파괴 역학**을 전면 분석하고, 강섬유 체적비($V_f \ge 2.0\%$), 고강도 조골재 혼입 효과, 초고압 상태방정식(EOS: Equation of State $P-\mu$), 동적 구성 모델(HJC, RHT, K&C) 및 경사기능성(FGM) 다층 방호 설계를 집대성한 **광저우 대학교 Jian Liu 교수 및 시드니 공과대학교(UTS) Chengqing Wu 교수** 연구팀의 International Journal of Impact Engineering 2022년 최고 권위 랜드마크 총설 원전. 연구 결과 UHPC는 일반 및 고강도 콘크리트 대비 **관통 깊이를 $50\sim 70\%$ 감소시키고 배면 파편 비산(스폴링) 면적을 $80\%$ 이상 억제**함을 실증하였다.

## Key Contributions

1. **UHPC의 초고속 발사체($500\sim 1500\ \text{m/s}$) 관통 저항 역학 데이터베이스 구축**:
   - 철갑탄(AP), 소총탄, 성형작약탄 및 고속 파편 충돌 시 UHPC의 탄체 노즈 마모(Nose Erosion), 터널링 궤적, 크레이터 직경을 일반 콘크리트(NC) 및 고강도 콘크리트(HSC)와 정량 비교.
2. **강섬유 임계 혼입률($V_f \ge 2.0\%$)의 전면 크레이터 및 배면 스폴링 억제 기구 규명**:
   - 강섬유의 고속 인발 마찰 및 균열 가교가 반사 인장 충격파(Spalling Wave)에 의한 배면 파편 박리를 원천 차단하여 표적의 잔류 방호 두께를 유지.
3. **고강도 조골재(High-Strength Coarse Aggregate) 혼입의 탄체 궤적 편향 효과 실증**:
   - 현무암/커런덤 등 고경도 골재가 고속 침투하는 탄두를 마모·편향(Deflection)시켜 관통 깊이(DOP)를 추가 $20\%$ 저감.
4. **경사기능성 다층 방호 표적(FGM Targets) 설계 프레임워크 제시**:
   - 전면(고강도 내마모 UHPC) + 중간층(에너지 흡수 하이브리드 섬유 UHPC) + 배면(고연성 섬유 스폴링 방지 층) 구조를 통해 단일 표적 대비 방호 중량을 $40\%$ 절감하는 첨단 구조 설계 지침 완성.

## Methods

- **동적 파괴 역학 및 유한요소 해석 모델링 (Sections 2~5)**:
  - 변형률 속도 효과: 동적 압축/인장 증폭 계수(DIF) $10^2\sim 10^4\ \text{s}^{-1}$ 고변형률 속도 영역 평가.
  - 충격 하이드로코드 모델: LS-DYNA 및 AUTODYN (HJC, RHT, Karagozian & Case K&C 모델).
  - 유효 상태방정식(EOS): 초고압 압축 하에서 공극 압축(Compaction) 및 체적 변형률 관계 $P = f(\mu)$.
- **실험적 방호 성능 지표 (Section 3)**:
  - 관통 깊이 ($H$ 또는 $\text{DOP}$), 전면 크레이터 직경 ($D_c$), 배면 스폴링 직경 ($D_s$).
  - 한계 방탄 속도 (Ballistic Limit Velocity, $V_{50}$).

## Results

### 1. 콘크리트 유형별 초고속 발사체(속도 ~850 m/s AP탄) 충격 저항 성능 정량 비교표 (Sections 3~4 & Figs. 7~16)

| 콘크리트 표적 유형 | 28일 압축강도 ($f_c'$, MPa) | 강섬유 체적률 ($V_f$, %) | 상대 관통 깊이 (DOP/DOP$_{NC}$) | 전면 크레이터 직경 ($D_c$, mm) | 배면 스폴링 파괴 여부 | 주 파괴 모드 |
|---|---|---|---|---|---|---|
| **보통 콘크리트 (NC)** | 35.0 MPa | 0.0 % | **1.00 (기준, 관통 관대)** | $280 \sim 350\ \text{mm}$ | **전면 관통 및 배면 대형 박리** | 취성 파쇄 및 파편 비산 |
| **고강도 콘크리트 (HSC)** | 85.0 MPa | 0.0 % | 0.72 (-28 %) | $220 \sim 280\ \text{mm}$ | 배면 광범위 박리 | 취성 전단 균열 붕괴 |
| **단일 UHPC 표적** | **$135.0 \sim 160.0$** | **2.0 % (직선형 강섬유)** | **0.42 (-58 %)** | **$90 \sim 130\ \text{mm}$ (-65 %)** | **배면 무박리 (양호)** | **국소 터널링 + 섬유 가교** |
| **조골재 함유 UHPC** | **$150.0 \sim 175.0$** | **2.0 % + 현무암 조골재** | **0.35 (-65 %)** | **$80 \sim 110\ \text{mm}$** | **배면 무박리** | **탄두 노즈 심각 마모/편향** |
| **다층 FGM UHPC 표적** | **$120 \sim 180$ (경사)** | **2.5 % (하이브리드)** | **0.28 (-72 % 최소)** | **$< 70\ \text{mm}$ (극소)** | **완전 무손상 (방호 극상)** | **다단계 충격 에너지 분산** |

### 2. 고속 충격 흡수 및 파괴 억제 메커니즘 해석
- **초고밀도 미세구조의 전단 저항**: W/B $\approx 0.18$의 치밀한 나노 C-S-H 겔 구조가 발사체 선단의 극심한 정수압과 유체동역학적 전단 응력을 버텨내어 탄체의 관통 에너지를 탄두 자체의 소성 변형 및 파쇄로 유도.
- **인장 충격파 반사 억제**: 발사체 충돌 시 표적 내부로 전파된 압축 응력파가 배면 자유 표면에서 반사되어 인장파로 전환될 때, 고강도 강섬유망이 인장 응력을 포획하여 콘크리트 조각이 튕겨 나가는 스폴링(Scabbing) 현상을 원천 차단.

- **종합 결론**: 본 논문은 초고속 발사체 충격 하에서 UHPC의 동적 재료 거동, 파괴 모드, 상태방정식 및 방호 구조 설계 기법을 집대성하여 관통 깊이를 60% 이상 줄이고 배면 파편 비산을 차단하는 최고 수준의 군사·민간 방호 구조물 설계 지침을 확립한 충격 공학 분야의 최고 권위 랜드마크 총설 원전 논문임.

## Related Notes

- [[abbas-2016-uhpc-mechanical-durability-sustainability]] — UHPC 역학 및 내구성 랜드마크 총설.
- [[choi-2016-fiber-orientation-uhpcc-post-cracking-tensile]] — 강섬유 배향 및 UHPCC 인장 특성 원전.
- [[high-strength-strain-hardening-composites]] — 초고강도 복합체 체계.
- [[concrete-durability-and-service-life]] — 콘크리트 충격 및 극한 하중 환경 내구성.
