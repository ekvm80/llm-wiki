---
title: "Fluorescence Characteristic Analysis for Discriminating Fibers in Cementitious Composites"
type: source_note
source: "sources/lee-2010-fluorescence-characteristic-analysis-for-discriminating.pdf"
citation: "Lee, B. Y., Kim, T., & Kim, Y. Y. (2010). Fluorescence Characteristic Analysis for Discriminating Fibers in Cementitious Composites. Journal of Advanced Concrete Technology, 8(3), 337-344."
date: 2026-08-24
tags: [hybrid-ecc, fluorescence-spectroscopy, pva-fiber, pet-fiber, pe-fiber, multispectral-imaging, lda, fiber-discrimination, bang-yeon-lee, jact, landmark-paper]
---

# 하이브리드 시멘트 복합체(Hybrid ECC) 내 이종 합성 섬유(PVA, PET, PE) 자동 식별을 위한 형광 분광 특성 분석 및 다중분광-LDA 최적 광학 필터 설계

## Summary

이종(Hybrid) 합성 섬유가 혼입된 고성능 변형경화 시멘트 복합체(Hybrid ECC)의 단면에서 각 섬유의 개별적인 3차원 분산성과 배향 특성을 비파괴적으로 정량 평가하기 위해, **PVA, PET, PE 합성 섬유 3종 및 시멘트 매트릭스의 형광 분광 특성(Fluorescence Emission-Excitation Matrix, EEM)**을 분광형광계(FluoroMax-4)로 정밀 측정하고, **다중분광 화상 모델(Multispectral Imaging Model) 및 선형 판별 분석(LDA: Linear Discriminant Analysis)**을 수학적으로 결합하여 **이종 섬유 간 식별 분해능을 극대화하는 최적 여기(Excitation) 및 방출(Emission) 광학 필터 파장 조합**을 세계 최초로 정식화한 **전남대학교 이방연(Bang Yeon Lee) 교수(제1저자), 김태민, 김윤용(교신저자)** 연구팀의 Journal of Advanced Concrete Technology 2010년 랜드마크 원전 논문. 연구 결과 시멘트 매트릭스는 형광 반응이 거의 없는 반면, PET($\text{RFI} = 412$), PVA($\text{RFI} = 100$), PE($\text{RFI} = 35$) 섬유는 상호 뚜렷이 구분되는 고유 형광 피크를 발현하였으며, PVA-PE 하이브리드계는 Ex $400\ \text{nm}$ / Em $460\ \text{nm}$, PVA-PET 하이브리드계는 Ex $350\ \text{nm}$ / Em $390\ \text{nm}$ 대역통과 필터 적용 시 $100\%$ 판별 분리가 가능함을 실증하였다.

## Key Contributions

1. **합성 섬유(PVA/PET/PE) 및 시멘트 매트릭스의 형광 분광 EEM 3차원 데이터베이스 구축**:
   - 여기 파장 250~500 nm, 방출 파장 300~650 nm 전 대역에 걸쳐 합성 섬유 고유의 상대 형광 강도(RFI)와 피크 파장을 정밀 측정.
2. **다중분광 모델 및 LDA 기반 최적 광학 필터 대수적 설계 기법 확립**:
   - 피착재 간 군내 분산($S_W$)과 군간 분산($S_B$)의 비를 최대화하는 Fisher 판별 기준 $J = S_B/S_W$를 적용하여 최적 여기-방출 필터 스펙트럼 $s(u), f(v)$를 해석적으로 도출.
3. **하이브리드 ECC 내 섬유 종류별 100 % 분리 검출 알고리즘 구현**:
   - 단일 형광 화상 촬영만으로 PVA-PE 및 PVA-PET 이종 섬유의 중심 좌표, 단면적, 배향각을 독립적으로 분리 계측하는 영상 처리 파이프라인 완성.
4. **하이브리드 가교 미시역학 모델과의 연계 기반 확립**:
   - 각 섬유의 개별 분산계수($\alpha_f$)와 섬유 밀도($F_n$)를 별도로 정량화하여 복합 가교 응력-개구 변위($\sigma-\delta$) 해석의 정밀도를 획기적으로 개선.

## Methods

- **시험 재료 및 시편 준비 (Section 2.1)**:
  - PVA 섬유: Kuraray REC15, 직경 $39\ \mu\text{m}$, 길이 12 mm.
  - PET 섬유: 직경 $14\ \mu\text{m}$, 길이 12 mm.
  - PE 섬유: 직경 $12\ \mu\text{m}$, 길이 15 mm.
  - 시멘트 매트릭스: W/C = 0.60, S/C = 0.80, Slag/C = 0.25, HPMC = 0.001 (중량비).
- **분광형광 측정 (Section 2.2 & Fig. 1)**:
  - 장비: Horiba FluoroMax-4 분광형광계.
  - 광원 여기 파장: 250~500 nm (5 nm 간격).
  - 방출 파장 측정: 300~650 nm (1 nm 간격).
- **최적 필터 설계 수리 모델 (Section 2.3~2.4)**:
  - $g_i = \int \int s(u) h_i(u,v) f(v) dudv$ (카메라 센서 수광 강도).
  - 최적화 목적함수: $J = \frac{f^T B f}{f^T W f} \rightarrow \text{Maximize}$ (LDA 고유치 해석).

## Results

### 1. 합성 섬유 및 시멘트 매트릭스의 형광 분광 특성 및 최적 필터 파장 비교표 (Tables 2~5 & Figs. 2~4)

| 재료 / 하이브리드 조합 | 최대 여기 파장 (Ex, nm) | 최대 방출 파장 (Em, nm) | 상대 형광 강도 (RFI) | LDA 최적 여기 필터 (nm) | LDA 최적 방출 필터 (nm) | 판별 분리도 |
|---|---|---|---|---|---|---|
| **시멘트 매트릭스** | 광범위 미약 | $400 \sim 500\ \text{nm}$ | **$< 5$ (무형광 수준)**| - | - | 배경 완전 분리 |
| **PVA 섬유** | **$380\ \text{nm}$** | **$460\ \text{nm}$** | **100 (기준)** | - | - | 고유 형광 피크 |
| **PET 섬유** | **$350\ \text{nm}$** | **$390\ \text{nm}$** | **412 (최대 강도)** | - | - | 초강력 자외선 형광 |
| **PE 섬유** | **$360\ \text{nm}$** | **$430\ \text{nm}$** | **35 (중저 강도)** | - | - | 단파장 청색 형광 |
| **PVA - PE 하이브리드** | $400\ \text{nm}$ | $460\ \text{nm}$ | $\Delta\text{RFI} = 65$ | **$400 \pm 10\ \text{nm}$** | **$460 \pm 15\ \text{nm}$** | **$100\%$ 분리 식별** |
| **PVA - PET 하이브리드**| $350\ \text{nm}$ | $390\ \text{nm}$ | $\Delta\text{RFI} = 312$ | **$350 \pm 10\ \text{nm}$** | **$390 \pm 10\ \text{nm}$** | **$100\%$ 분리 식별** |
| **PET - PE 하이브리드** | $350\ \text{nm}$ | $390\ \text{nm}$ | $\Delta\text{RFI} = 377$ | **$350 \pm 10\ \text{nm}$** | **$390 \pm 10\ \text{nm}$** | **$100\%$ 분리 식별** |

### 2. 분광 특성 및 판별 메커니즘 해석
- **형광 특성의 분자 구조 기원**: PET의 방향족 벤젠 고리 공액 구조는 350 nm 여기 시 412의 초고강도 형광을 방출하며, PVA의 아세탈화 구조는 380 nm에서 녹색 파장 형광을 방출.
- **LDA 대역통과 필터 최적화**: 단순히 최대 피크를 취하는 것보다 매트릭스 배경 잡음과 두 섬유의 스펙트럼 중첩 적분을 고려한 LDA 최적 필터를 통해 오인식률을 제로화.

- **종합 결론**: 본 논문은 전남대학교 이방연 교수 연구팀이 형광 분광학과 머신러닝 패턴 인식(LDA)을 융합하여 하이브리드 섬유보강 콘크리트에서 이종 합성 섬유들을 완벽히 분리 검출하는 광학 필터 설계 체계를 세계 최초로 수립한 섬유 복합체 비파괴 화상 분석 분야의 불후의 랜드마크 원전 논문임.

## Related Notes

- [[kim-2007-slag-ecc-tensile-fiber-dispersion]] — 형광현미경 기반 Slag-ECC 섬유 분산 평가 랜드마크.
- [[kang-2011-fiber-distribution-uhsc-flexural-strength]] — 이방연 교수: 화상 처리 기반 강섬유 분포 평가 원전.
- [[felekoglu-2015-htpp-ecc-fiber-distribution-image-analysis]] — SEM-BSE 기반 미세섬유 분산성 화상 분석 원전.
- [[strain-hardening-mechanism]] — ECC 변형경화 미시역학 및 섬유 가교 이론.
