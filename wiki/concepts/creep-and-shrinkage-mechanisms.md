---
title: "Creep and Shrinkage Mechanisms in High Performance Concrete and SHCC"
type: concept
date: 2026-08-23
tags: [creep, drying-shrinkage, autogenous-shrinkage, stress-relaxation, restrained-cracking, shcc, aas, concept]
source: internal
---


# 고성능 콘크리트 및 변형경화 복합체(SHCC)의 수축·크리프 메커니즘과 응력 이완

## 1. 개요 및 수축 메커니즘 분류

고성능 콘크리트(HPC), 초고성능 콘크리트(UHPC) 및 변형경화 시멘트 복합체(SHCC/ECC)는 고갈수 배합(W/B < 0.30)과 높은 단위 결합재량을 사용하므로, 경화 전후 체적 변화에 따른 구속 수축 균열(Restrained Shrinkage Cracking)이 구조적 건전성과 내구성을 위협하는 주요 인자이다.

### 4대 수축 메커니즘:
1. **자기수축 (Autogenous Shrinkage)**:
   - 외적 수분 증발 없이 시멘트 수화 과정에서 물의 화학적 결합에 의해 발생하는 체적 수축(화학적 수축, Le Chatelier 수축) 및 내부 모세관 자기건조(Self-desiccation)로 인한 수축. 초저 W/B 매트릭스에서 지배적.
2. **건조수축 (Drying Shrinkage)**:
   - 경화체가 외부 저습도 환경에 노출될 때 모세관 내부의 잉여 유리수가 증발하면서 발생하는 메니스커스(Meniscus) 모세관 장력 및 C-S-H 층간수 탈착 수축.
3. **소성수축 (Plastic Shrinkage)**:
   - 굳지 않은 초기 상태에서 블리딩 속도보다 표면 수분 증발 속도가 빠를 때 표면에 발생하는 인장 균열.
4. **탄산화수축 (Carbonation Shrinkage)**:
   - 대기 중 $\text{CO}_2$와 수산화칼슘 및 C-S-H 겔이 반응하여 탄산염으로 치환될 때 일어나는 미세구조 붕괴 수축.

## 2. 인장 크리프(Tensile Creep)와 구속 응력 이완(Stress Relaxation)

구속 상태의 콘크리트 부재에서 수축이 진행되면 인장 변형률 구속에 의해 탄성 인장 응력이 축적되어 균열을 유발한다:
$$\sigma(t) = R_r \int_0^t E(t') \left( \frac{d\varepsilon_{sh}}{dt'} - \frac{d\varepsilon_{cr}}{dt'} \right) dt'$$
- **응력 이완 메커니즘**:
  - 알칼리 활성 슬래그(AAS) 및 SHCC 매트릭스는 비교적 낮은 탄성계수($E_c \approx 15\sim 35\ \text{GPa}$)와 높은 초기 인장 크리프(Tensile Creep, $40\sim 60\ \mu\varepsilon/\text{MPa}$)를 나타냄.
  - 이 높은 크리프 변형이 축적되는 구속 인장 응력을 **30 ~ 50 % 자발적으로 이완(Relaxation)**시켜 조기 파괴 균열 발생 시점을 대폭 지연시킴.

## 3. 균열 제어 및 배합적 저감 대책

- **팽창재(Expansive Admixture) 및 수축저감제(SRA) 병용**: 칼슘설포알루미네이트(CSA)계 팽창재의 에트린가이트 생성 팽창압으로 조기 자기수축을 상쇄.
- **섬유 브릿징에 의한 미세 다중균열 분산**: 단일 거대 균열 대신 수십~수백 개의 50 µm 미세 균열로 수축 변형을 분산 흡수.

## 4. 관련 핵심 연구 논문

- [[collins-1999-shear-design-high-strength-concrete]] — AAS 콘크리트의 112일 크리프 및 수축 응력 이완 원전.
- [[tensile-creep-shcc]] — SHCC의 1축 인장 크리프 및 미시역학 모델.
- [[de-larrard-2002-hpc-mixture-proportioning]] — 도로 포장용 HPC의 고수축 장력 제어 모델.
- [[choi-2015-expansive-additives-volume-changes]] — 팽창재 및 수축저감제를 적용한 복합체 체적 변화 제어.
- [[crack-width-control]] — 구속 수축 하에서의 미세 다중균열폭 제어.
