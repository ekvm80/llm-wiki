---
title: "Flexural behavior of composite beams of Kagome truss and fiber-reinforced cementitious composites"
type: source_note
source: "sources/choi-2022-flexural-behavior-of-composite-beams.pdf"
citation: "Choi, J.-I., Park, S.-E., Kim, Y. Y., & Lee, B. Y. (2022). Flexural behavior of composite beams of Kagome truss and fiber-reinforced cementitious composites. Construction and Building Materials, 361, 129653."
date: 2026-08-23
tags: [kagome-truss, cellular-metal, composite-beam, hd-frcc, hs-frcc, layered-section-analysis, flexural-ductility, user-group]
---

# 카고메(Kagome) 주기적 금속 트러스와 기능성 시멘트 복합체(FRCC)를 융합한 경량 복합보의 휨 거동 및 비선형 해석

## Summary

초경량 다공성 주기적 금속 구조체인 와이어 직조 카고메(Kagome) 트러스 코어와 2종류의 고기능성 섬유보강 시멘트 복합체(인장 연신율 **6.33 %**의 초고연성 HD-FRCC 및 압축강도 **156.8 MPa**의 초고강도 HS-FRCC)를 기하학적으로 융합한 복합보 3종(K-HD, K-HS, K-HS-HD)을 제작하고, 3분점 휨 재하 실험 및 변형률 적합조건에 기반한 비선형 층상 단면 수치해석(Layered Sectional Analysis)을 수행한 연구 (전남대 이방연 교신저자, 박세언, 충남대 김윤용 공저). 상부 압축부에 초고강도 HS-FRCC(두께 20 mm)를 배치하고 하부 인장부에 초고연성 HD-FRCC(두께 20 mm)를 융합 타설한 하이브리드 복합보(K-HS-HD)는 인장부 단독 보강보(K-HD 3.40 kN, K-HS 3.72 kN) 대비 최대 휨 하중 지지력이 **16.72 kN으로 4.9배**, 휨 강성은 **8.99 kN/mm로 20.4배** 비약적으로 증대되었다. 또한 3차원 카고메 트러스 격자망이 양단 시멘트 복합체 내부로 깊이 매립되어 강력한 기계적 인터로킹을 형성함으로써 75 mm 이상의 대변위 처짐 상태에서도 계면 전단 박리 없이 인장부 미세 다중균열과 트러스 인장 항복이 결합된 이상적인 연성 파괴 모드를 발현함을 입증하였다.

## Key Contributions

1. **상부 초고강도 + 하부 초고연성 하이브리드 배치(K-HS-HD)의 휨 성능 극대화 입증**:
   - 압축부에 157 MPa HS-FRCC를 타설하여 압축 연단 파쇄를 방지하고, 인장부에 연신율 6.33 %의 HD-FRCC를 타설하여 인장 균열 집중을 억제.
   - 단일 보강보 대비 최대 휨 내력 4.9배(16.72 kN vs 3.40 kN), 휨 강성 20.4배(8.99 kN/mm vs 0.44 kN/mm) 폭증 달성.
2. **카고메 트러스-FRCC 계면의 완전 일체화(Composite Action) 실증**:
   - 스테인리스 강선(STS 304, 항복강도 620 MPa)으로 직조된 3차원 다공성 트러스가 FRCC 매트릭스와 연속적으로 맞물려, 전단 철근이나 화학 접착제 없이도 극한 하중까지 계면 탈락(Delamination) 0 % 달성.
3. **변형률 적합조건 기반 비선형 층상 단면 해석 모델 구축 및 검증**:
   - HD-FRCC의 변형경화 인장 구성식 및 HS-FRCC의 탄소성 압축 구성식, 카고메 트러스의 비선형 인장/압축 구성식을 결합한 단면 해석 모델을 개발하여 휨 모멘트-곡률 및 하중-처짐 곡선을 고정밀도로 예측.

## Methods

- **카고메 트러스 스펙**:
  - 스테인리스 강선(STS 304): 직경 1.2 mm, 항복강도 620 MPa, 인장강도 745 MPa, 탄성계수 193 GPa, 밀도 $7.9\ \text{g/cm}^3$.
  - 트러스 치수: 전장 1400 mm, 폭 300 mm, 전고 100 mm (주기적 정삼각형/육각형 단위 셀 구조).
- **시멘트 복합체 배합 (Table 1)**:
  - **HD-FRCC (초고연성)**: AAS 바인더 1.0, W/B 0.30, 규사 0.50, PE 섬유 1.75 vol.% (직경 12 µm, 길이 18 mm, 강도 2700 MPa, 탄성계수 88 GPa).
  - **HS-FRCC (초고강도)**: 시멘트 0.8 + SF 0.2 (결합재 1.0), W/B 0.19, 필러 0.24, 규사 0.88, 팽창재 0.075, 강섬유 1.50 vol.% (직경 200 µm, 길이 19.5 mm, 강도 2500 MPa, 탄성계수 200 GPa).
- **복합보 시험체 구성 (Table 4)**:
  - **K-HD**: 카고메 트러스 하부에만 30 mm HD-FRCC 타설.
  - **K-HS**: 카고메 트러스 하부에만 30 mm HS-FRCC 타설.
  - **K-HS-HD**: 카고메 트러스 상부에 20 mm HS-FRCC + 하부에 20 mm HD-FRCC 복합 타설.
- **실험 장비 및 시험 조건**:
  - 순경간 1200 mm 3분점 휨 재하(하중점 간격 400 mm), 200 kN 액추에이터(1.0 mm/min 변위 제어).
  - 중앙부 LVDT 2개 설치(처짐 계측), 하부 표면 균열폭 및 다중균열 수 정밀 계측.

## Results

### 1. FRCC 재료 역학 성능 및 균열 특성 (Table 2 & 3)

| 복합재 종류 | 압축강도 (MPa) | 초기균열강도 (MPa) | 최대인장강도 (MPa) | 인장 변형률 능력 (%) | 게이지 내 균열 수 (개) | 평균 균열 간격 (mm) | 평균 균열폭 (µm) |
|---|---|---|---|---|---|---|---|
| **HD-FRCC** | 45.2 ± 0.38 | 4.80 ± 0.30 | 8.38 ± 0.29 | **6.33 ± 0.19 %** | **130.5 ± 1.8** | **0.61 mm** | 38.8 µm |
| **HS-FRCC** | **156.8 ± 4.22** | **10.78 ± 0.68** | **18.11 ± 1.13** | 0.49 ± 0.08 % | 12.5 ± 1.9 | 6.56 mm | 32.2 µm |

### 2. 복합보 휨 재하 실험 결과 (Table 4)

| 시험체 명 | 상하부 보강 구성 | 50% 하중점 강성 (kN/mm) | 최대 휨 하중 (kN) | 최대 하중 비 | 최종 휨 파괴 모드 |
|---|---|---|---|---|---|
| **K-HD** | 하부 HD 30 mm | 0.44 | 3.40 kN | 1.00 (기준) | 상부 트러스 좌굴 + 하부 미세다중균열 |
| **K-HS** | 하부 HS 30 mm | 1.29 | 3.72 kN | 1.09 | 상부 트러스 좌굴 + 하부 인장균열 집중 |
| **K-HS-HD** | **상부 HS 20 mm + 하부 HD 20 mm** | **8.99 (+20.4배)** | **16.72 (+4.9배)** | **4.92** | **트러스 인장항복 + 상하부 완전 일체 연성파괴** |

### 3. 수치해석 모델 검증 (Table 5)

| 시험체 | 50% 하중 강성 (kN/mm) [실험 / 해석] | 30 mm 처짐 시 하중 (kN) [실험 / 해석] | 70 mm 처짐 시 하중 (kN) [실험 / 해석] |
|---|---|---|---|
| **K-HD** | 0.44 / 0.50 | 2.92 / 3.12 | 3.29 / 3.49 |
| **K-HS** | 1.29 / 1.25 | 2.97 / 8.01 (조기파괴) | – / – |
| **K-HS-HD** | **8.99 / 13.07** | **16.03 / 18.65** | **16.15 / 23.55** |

- **종합 결론**: 초경량 주기적 카고메 트러스와 고강도(압축)/고연성(인장) FRCC의 이종 융합 설계를 통해 자중을 최소화하면서도 일반 RC 구조를 능가하는 극대화된 휨 내력과 연성 에너지 소산 능력을 실현할 수 있음을 확립함.

## Related Notes

- [[ijp6321-kagome-truss-impact]] — 카고메 트러스 복합 패널의 고속 충격 저항성 (이방연 그룹).
- [[choi-2016-ultra-high-ductile-aas-pe-composite]] — 초고연성 HD-FRCC 매트릭스 원전.
- [[choi-2017-uhpm-pe-fiber-tensile-cracking]] — 150 MPa 초고강도 HS-FRCC 매트릭스 원전.
- [[mai-2025-high-strength-steel-ecc-composite-beam-flexure]] — 고강도 강재 거더와 ECC 바닥판의 합성보 거동.
- [[uhpc-vs-ecc-design-space]] — 초고강도와 초고연성 재료의 상호 보완적 융합 설계 공간.
- [[multiple-cracking-behavior]] — 인장면 균열 간격 0.61 mm 포화 다중균열 제어.
