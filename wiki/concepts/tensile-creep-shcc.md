---
title: "Tensile Creep of SHCC (SHCC의 인장 크리프 거동)"
type: concept
source: "[[boshoff-2007-tensile-creep-of-shcc]]"
date: 2026-08-23
tags: [concept, tensile-creep, time-dependent, crack-opening, viscoelasticity, shcc, ecc]
---

# Tensile Creep of SHCC (변형경화 시멘트 복합재의 인장 크리프 거동)

## 정의

일정한 지속 인장 하중(sustained tensile loading) 하에서 시간 경과에 따라 변형률 및 균열폭이 점진적으로 증가하는 시간 의존적(time-dependent) 변형 거동.

## 거동 특성 및 메커니즘

1. **미균열 상태의 점탄성 크리프 (Basic Tensile Creep)**:
   - 시멘트 매트릭스 내부의 C-S-H 겔 층간 수분 이동 및 점탄성 슬립에 의한 변형으로, 일반 콘크리트의 인장 크리프와 유사한 거동을 보임.
2. **균열 상태의 가교 섬유 크리프 (Crack-Bridging Creep)**:
   - 지속 하중이 최초 균열 발생 강도를 초과하여 미세 균열이 형성된 후, 균열면을 가로지르는 고분자 섬유(PVA, PE 등)의 점탄성 연신(viscoelastic stretching) 및 섬유-매트릭스 계면에서의 점진적 미끄러짐(interface creep debonding/slip)에 의해 균열 개구폭이 시간에 따라 확대됨.
3. **새로운 균열 형성 (Time-Dependent Multiple Cracking)**:
   - 지속 하중 하에서 매트릭스의 응력 완화(stress relaxation) 및 결함 선단의 아임계 균열 성장(subcritical crack growth)으로 인해 하중 증가 없이도 시간에 따라 새로운 미세 균열이 지연 발생할 수 있음.

## 단기 대 장기 성능 영향

- **장기 균열폭 안정성**: PVA 섬유의 경우 친수성 계면 결합과 섬유 자체의 점탄성 특성으로 인해 하중 수준이 최대 브리징 응력의 60~70 % 이하일 때 크리프 속도가 감쇠하며 안정화됨.
- **파괴 수명 (Creep Rupture)**: 고하중 수준(>80 % $\sigma_0$)에서는 계면 미끄러짐이 가속되어 단일 균열로 집중되며 조기 파단이 발생할 수 있으므로, 장기 허용 인장 응력 설계에 크리프 감쇠 계수를 반영해야 함.

## 관련 파라미터

- $\sigma_{sustained} / \sigma_0$: 지속 하중비
- $\epsilon_{cr}(t)$: 시간 의존적 인장 크리프 변형률
- $w_{cr}(t)$: 시간 의존적 균열폭 증가량 (µm)
- $\phi(t, t_0)$: 인장 크리프 계수

## 관련 노트

- [[boshoff-2007-tensile-creep-of-shcc]] — SHCC 인장 크리프 및 균열 진화 실험 연구 원전.
- [[multiple-cracking-behavior]] — 균열 발생 후 크리프 메커니즘이 전환되는 다중균열 상태.
- [[interface-bond-properties]] — 지속 하중 하 계면 미끄러짐과 화학 결합 완화.
- [[crack-width-control]] — 장기 지속 하중 하 균열폭 제어 한계.
