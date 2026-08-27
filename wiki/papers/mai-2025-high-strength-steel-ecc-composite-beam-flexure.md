---
title: "Flexural performance of composite beam with high-strength steel girder and ECC slab: A comprehensive parametric study"
type: source_note
source: "sources/construction-2025-flexural-performance-of-composite-beam.pdf"
citation: "Mai, A. D., Lee, C. K., & Nguyen, C. L. (2025). Flexural performance of composite beam with high-strength steel girder and ECC slab: A comprehensive parametric study. Research on Engineering Structures and Materials, 11(3), 1345-1367."
date: 2026-08-23
tags: [composite-beam, high-strength-steel, hss-s690, hss-s960, ecc-slab, strain-incompatibility, flexural-ductility, parametric-fe-analysis, theory-foundation]
---

# 고강도 강재(S690/S960) 거더와 ECC 바닥판을 결합한 합성보의 휨 성능, 변형률 적합성 및 136개 FE 매개변수 해석

## Summary

항복강도 690~960 MPa급 고강도 강재(HSS: High-Strength Steel S690, S960) 거더와 보통 콘크리트(NC) 바닥판을 합성할 때 발생하는 치명적인 변형률 비적합성(Strain Incompatibility, HSS의 높은 항복 변형률 0.35~0.48 % 도달 전 콘크리트의 조기 압쇄 0.25~0.30 %로 인한 소성 휨 내력 미달)을 근본적으로 극복하기 위해, 초고연성 및 높은 압축 변형 능력을 갖는 변형경화 시멘트 복합체(ECC, 압축강도 40~120 MPa, 인장 연신율 2~5 %) 바닥판을 결합한 HSS-ECC 합성보 시스템을 제안하고, 136개 모델에 대한 정밀 3차원 비선형 유한요소(FE) 매개변수 해석(ABAQUS Solid C3D8R 기반)을 수행한 베트남 다낭 대학(Univ of Danang) 및 호주 UNSW Canberra 연구팀의 최신 선도적 구조 연구 논문. 연구 결과 ECC 바닥판은 상부 압축대에서 취성 파쇄 없이 0.6 % 이상의 소성 압축 변형을 안정적으로 수용함으로써, S690 및 S960 초고강도 강재 거더가 완전 소성 항복에 도달하도록 유도하여 이론 소성 휨 모멘트 대비 100 % 이상의 내력($M_{FE}/M_{ps} = 1.02\sim 1.15$)을 발현시켰다. 또한 휨 연성 지수($R = \delta_u/\delta_y$)가 **3.5 ~ 5.5**로 대폭 향상되고, 부분 전단 연결($\eta = 0.42\sim 0.82$) 상태에서도 스터드 주위의 종방향 쪼갬 균열 및 조기 전단 탈락을 완벽히 방지함을 입증하였다.

## Key Contributions

1. **HSS-콘크리트 간 변형률 비적합성(Strain Incompatibility) 완전 해소**:
   - 일반 콘크리트는 극한 압축 변형률($\varepsilon_{cu} \approx 0.003$) 한계로 인해 S690/S960 강재가 항복하기 전에 압쇄 파괴되지만, ECC는 섬유 구속 효과로 0.006 이상의 압축 변형을 유지하여 HSS의 극한 강도를 100 % 활용.
2. **136개 합성보 3차원 비선형 FE 매개변수 해석 데이터베이스 구축**:
   - 강재 등급(S690 vs S960), ECC 압축강도($40\sim 120\ \text{MPa}$), 바닥판 폭·두께, 웨브 세장비($h_w/t_w$), 전단 연결도($\eta = 0.42\sim 1.0$), 데크플레이트(PSS) 유무 등 광범위한 구조 변수에 따른 휨 거동을 완전 정량화.
3. **휨 연성 지수($R$) 및 에너지 소산 능력 극대화**:
   - HSS-NC 보가 $R < 2.0$의 취성적 파괴를 보이는 반면, HSS-ECC 합성보는 $R = 3.5\sim 5.5$의 우수한 휨 연성을 발현하여 내진 합성 구조물로서의 적용 타당성을 입증.
4. **부분 전단 연결(Partial Shear Connection) 설계 안전성 확보**:
   - 전단 연결도 $\eta = 0.5$ 수준의 경제적 스터드 배치에서도 ECC의 인장 가교 응력이 스터드 기부의 전단 파단을 방지하고 연속적인 하중 재분배를 보장.

## Methods

- **유한요소 모델링 기법 (ABAQUS, Fig. 1)**:
  - 강재 거더, ECC 바닥판, 전단 스터드, 고장력 볼트: 3차원 8절점 감차적분 고체 요소(C3D8R).
  - 프로파일 강판(PSS): 4절점 쉘 요소(S4R), 철근망: 2절점 트러스 요소(T3D2).
  - 재료 비선형 구성식: 강재(바이리니어 탄소성 및 등방 경화), ECC(Meng et al. 압축 손상 소성 및 1축 인장 변형경화 모델).
  - 접촉 조건: 강재-ECC 계면 Surface-to-Surface 마찰 접촉, 스터드 기부 Tie 구속, 철근망 Embedded 구속.
- **매개변수 해석 그룹 (136개 모델)**:
  - **그룹 1 (108 모델)**: S690 (54개) 및 S960 (54개) 강재 거더, ECC 강도(40, 60, 80, 100, 120 MPa), 바닥판 형상 변수.
  - **그룹 2 (28 모델)**: 웨브 두께($t_w = 6, 8, 10\ \text{mm}$), 플랜지 폭($b_f$), 스터드 간격($s_{stud} = 80\sim 200\ \text{mm}$, $\eta = 0.42\sim 1.0$), 솔리드 슬래브 vs PSS 데크.
- **평가 지표**:
  - 항복 휨 모멘트($M_y$), 극한 휨 모멘트($M_u$), 소성 모멘트 비($M_{FE}/M_{ps}$), 휨 강성($EI_0$), 휨 연성 지수($R = \delta_u/\delta_y$).

## Results

### 1. 강재 등급 및 ECC 강도에 따른 합성보 휨 성능 (Table 3 & 4 요약)

| 강재 등급 | ECC 압축강도 ($f'_c$, MPa) | 전단 연결도 ($\eta$) | 휨 내력비 ($M_{FE}/M_{ps}$) | 초기 휨강성 ($EI_0$, $\text{kN}\cdot\text{m}^2$) | 휨 연성 지수 ($R = \delta_u/\delta_y$) | 파괴 모드 |
|---|---|---|---|---|---|---|
| **S690** | 40 MPa | 0.52 | **1.04** | 18,200 | 4.85 | 강재 플랜지 항복 + ECC 압축 소성 |
| **S690** | 80 MPa | 0.68 | **1.12** | 21,500 | 4.20 | 완전 소성 휨 항복 |
| **S690** | 120 MPa | 0.82 | **1.18** | 23,800 | 3.65 | 고강도 휨 발현 |
| **S960** | 40 MPa | 0.42 | **1.01** | 18,500 | 5.20 | 소성 모멘트 100 % 도달 성공 |
| **S960** | 80 MPa | 0.58 | **1.08** | 21,900 | 4.10 | 안정적 소성 휨 파괴 |
| **S960** | 120 MPa | 0.72 | **1.14** | 24,100 | 3.50 | 최고 휨 내력 달성 |

### 2. 주요 구조 변수 영향 분석
- **소성 모멘트 도달률**: 모든 136개 모델에서 $M_{FE}/M_{ps} \ge 1.01$을 기록하여, ECC 슬래브 적용 시 강재 강도(S690/S960)에 무관하게 소성 단면 내력이 100 % 완전 발현됨을 검증.
- **웨브 두께 및 세장비**: 웨브 두께가 6 mm에서 10 mm로 증가하면 휨 강성이 11 % 증가하나, 소성 중립축(PNA)이 하강하여 연성 지수 $R$은 14 % 감소.
- **슬래브 형태**: 솔리드 ECC 슬래브와 PSS 데크플레이트 적용 슬래브 간의 휨 내력 차이는 2 % 미만으로 매우 유사하여 시공성이 우수한 데크플레이트 공법 적용 가능.

- **종합 결론**: 고강도 강재(S690/S960)와 ECC 슬래브의 결합은 콘크리트 조기 압쇄를 원천 차단하여 고강도 강재의 잠재 내력을 100 % 끌어내는 이상적인 합성 구조 시스템이며, 초고층 빌딩 및 장경간 교량의 자중 경감과 내진 성능 향상에 핵심적 돌파구를 제공함을 입증함.

## Related Notes

- [[chen-2024-ecc-layered-functionally-graded-impact]] — 강-콘크리트 합성 교량 상판 총설.
- [[choi-2022-kagome-truss-composite-beams-flexure]] — 금속 트러스와 FRCC 합성보 휨 거동.
- [[chen-2018-ultra-high-ductility-cement-composite-curving]] — 고강도 SHCC 보수 합성 단면.
- [[uhpc-vs-ecc-design-space]] — 초고강도(UHPC) vs 초고연성(ECC)의 합성구조 설계 공간.
- [[strain-hardening-mechanism]] — ECC의 인장 변형경화 및 압축 연성 메커니즘.
