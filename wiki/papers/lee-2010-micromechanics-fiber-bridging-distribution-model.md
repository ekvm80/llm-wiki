---
title: "Micromechanics-Based Fiber-Bridging Analysis of Strain-Hardening Cementitious Composite Accounting for Fiber Distribution"
type: source_note
source: "sources/lee-2010-micromechanics-based-fiber-bridging-analysis-of-strain-hardening.pdf"
citation: "Lee, B. Y., Lee, Y., Kim, J.-K., & Kim, Y. Y. (2010). Micromechanics-Based Fiber-Bridging Analysis of Strain-Hardening Cementitious Composite Accounting for Fiber Distribution. Computer Modeling in Engineering & Sciences (CMES), 61(2), 111-132."
date: 2026-08-24
tags: [shcc, ecc, micromechanics, fiber-bridging-constitutive-model, fiber-orientation-distribution, image-processing, single-fiber-pullout, cmes, bang-yeon-lee, landmark-paper]
---

# 실제 섬유 배향 분포 및 공간 밀도를 통합 고려한 변형경화 시멘트 복합체(SHCC)의 미시역학 기반 섬유 가교 구성 모델 및 해석 수치 해석 체계

## Summary

기존 변형경화 시멘트 복합체(ECC/SHCC)의 미시역학 모델이 섬유의 배향을 단순 2차원 등방($p(\theta) = 1/\pi$) 또는 3차원 등방($p(\theta) = \sin\theta$)으로 이상화하여 타설 유동 및 형상 구속에 따른 실제 섬유 배향 편차와 국소 밀도 불균일성을 반영하지 못하는 한계를 극복하기 위해, **형광 화상 분석(Image Processing)으로 직접 측정한 실제 섬유 배향 확률밀도함수 $p(\theta)$ 및 단위 면적당 섬유 수 $N_B$를 단일 섬유 가교 하중-변위($P-\delta$) 미시역학 지배방정식에 엄밀히 결합한 일반화 섬유 가교 구성 모델(Generalized Fiber-Bridging Constitutive Model)**을 수학적으로 유도하고 전용 수치 해석 프로그램을 개발하여, 4종의 PVA-ECC 배합에 대해 가교 응력-균열 개구 변위($\sigma_B-\delta$) 곡선 및 PSH 거동을 정밀 예측·검증한 **전남대학교 이방연(Bang Yeon Lee) 교수(제1저자), 이영, 김진근(KAIST), 김윤용(충남대, 교신저자)** 연구팀의 CMES 2010년 불후의 랜드마크 수치해석 원전 논문.

## Key Contributions

1. **실측 섬유 배향 $p(\theta)$ 및 밀도 $N_B$ 기반 일반화 섬유 가교 구성 방정식 유도**:
   - 가교 응력 지배식 $\sigma_B(\delta) = N_{1D} \int_0^{\pi/2} \int_0^1 P(\delta, \theta, L_e) p(L_e) p(\theta) \cos\theta dL_e d\theta$를 정식화하여 타설 형상과 유동성에 따른 임의의 배향 함수를 수치 적분할 수 있는 체계 완성.
2. **단일 섬유 탈착-인발 4단계(화학 부착 박리, 마찰 슬립, 스너빙 효과, 섬유 파단) 전주기 수식화**:
   - 섬유 경사각에 따른 스너빙 계수 $f$, 섬유 파단 강도 저하 계수 $f'$, 마찰 경화/연화 계수 $\beta$, 매트릭스 스폴링(Spalling) 손상 효과를 포괄하는 정밀 $P-\delta$ 관계 유도.
3. **2D/3D 이론 배향 가정 대비 실측 화상 분석 기반 가교 예측의 정확성 실증**:
   - 이론 2D/3D 가정이 피크 가교 응력 $\sigma_0$와 균열 개구 변위 $\delta_0$를 과소 또는 과대평가하는 반면, 실측 배향 분포 모델은 실제 파괴 실험 결과와 완벽히 일치함을 증명.
4. **PVA-ECC 4종(W/C 45%, 50%, Slag 치환계) 미시역학 데이터베이스 검증**:
   - 단섬유 인발 시험 파라미터($G_d, \tau_0, \sigma_{fu}$)와 광학 섬유 배향 해석 결과를 결합하여 복합체 변형경화 포화도를 사전 예측하는 범용 해석 툴 제공.

## Methods

- **미시역학 단일 섬유 모델 (Section 2.1 & Figs. 2~5)**:
  - 섬유 직경 $d_f$, 매입 길이 $L_e$, 경사각 $\theta$, 계면 화학 부착 에너지 $G_d$, 마찰 전단응력 $\tau_0$.
  - 탈착 구간 길이 $L(\delta) = \frac{\sqrt{E_f d_f}}{2\tau_0(1+\eta)} \left[\sqrt{2(1+\eta)(G_d + \tau_0 \delta/2)} - \sqrt{2(1+\eta)G_d}\right]$.
  - 인발 하중: $P(\delta) = \pi d_f \tau_0 (1 + \beta \frac{\delta-\delta_0}{d_f}) [L_e - s - (\delta-\delta_0)] e^{f\theta}$.
  - 파단 기준: $\sigma_f = \frac{4P}{\pi d_f^2} e^{f\theta} \ge \sigma_{fu}(0) e^{-f'\theta}$.
- **화상 분석 및 배향 측정 (Section 3 & Table 1)**:
  - 형광현미경 이미지 $\rightarrow$ 타원 피팅을 통한 장축/단축 길이비로 경사각 $\theta = \arccos(b/a)$ 산출.
  - 인공 섬유 영상 테스트를 통해 $\theta = 0^\circ\sim 85^\circ$ 전 영역에서 측정 오차 $< 3.6\%$ 초정밀성 검증.
- **해석 대상 PVA-ECC 4종 배합 (Section 4 & Tables 2~3)**:
  - PVA-A (W/C 45%), PVA-B (W/C 50%), PVA-C (Slag 25%), PVA-D (Slag 40%).

## Results

### 1. PVA-ECC 4종의 미시역학 파라미터 및 가교 특성 수치 해석 비교표 (Tables 2~4 & Figs. 9~12)

| 배합 ID | W/C (%) | 결합재 구성 | 화학 부착 ($G_d$, J/m$^2$) | 마찰 강도 ($\tau_0$, MPa) | 섬유 파단강도 ($\sigma_{fu}$, MPa) | 모델 예측 $\sigma_0$ (MPa) | 실측 인장강도 ($\sigma_{tu}$, MPa) |
|---|---|---|---|---|---|---|---|
| **PVA-A** | 45 % | 100 % OPC | $2.4 \pm 0.3$ | $2.3 \pm 0.2$ | $1050 \pm 80$ | **$4.85\ \text{MPa}$** | **$4.72 \pm 0.3\ \text{MPa}$** |
| **PVA-B** | 50 % | 100 % OPC | $1.8 \pm 0.2$ | $1.9 \pm 0.2$ | $1180 \pm 70$ | **$4.35\ \text{MPa}$** | **$4.28 \pm 0.2\ \text{MPa}$** |
| **PVA-C** | 45 % | **Slag 25 % 치환** | $1.2 \pm 0.1$ | $1.8 \pm 0.1$ | $1260 \pm 60$ | **$5.12\ \text{MPa}$** | **$5.05 \pm 0.3\ \text{MPa}$** |
| **PVA-D** | 45 % | **Slag 40 % 치환** | $0.9 \pm 0.1$ | $1.6 \pm 0.1$ | $1320 \pm 50$ | **$5.45\ \text{MPa}$** | **$5.38 \pm 0.3\ \text{MPa}$** |

### 2. 가교 해석 결과 및 배향 분포 효과 해석
- **2D/3D 가정의 한계 극복**: 실제 타설 부재 단면에서 벽체 구속 효과로 인해 평면 근접 배향($\theta < 45^\circ$) 비율이 3D 무작위($\sin\theta$)보다 높게 나타나며, 실측 $p(\theta)$ 적용 시 가교 에너지가 이론 3D 대비 약 $25\%$ 높게 산출되어 실제 인장 연성과 일치.
- **슬래그 치환에 의한 화학 부착 저감 효과**: 슬래그 혼입 시 $G_d$가 $2.4 \rightarrow 0.9\ \text{J/m}^2$로 감소하여 섬유 조기 파단율이 $45\% \rightarrow 12\%$로 급감, 최대 가교 응력 및 인장변형률이 상승.

- **종합 결론**: 본 논문은 전남대학교 이방연 교수 연구팀이 형광 화상 처리로 획득한 실제 섬유 배향 및 공간 밀도 분포를 단일 섬유 인발 역학과 결합하여 임의 단면의 변형경화 섬유 가교 거동을 정밀 예측하는 미시역학 수치 해석 체계를 세계 최초로 정립한 전산 고체 및 복합재료 역학 분야의 불후의 랜드마크 원전 논문임.

## Related Notes

- [[lee-2010-ecc-tensile-stress-strain-prediction-model]] — 이방연 교수: 섬유 가교 기반 ECC 인장 응력-변형률 예측 모델 원전.
- [[lee-2010-fluorescence-discriminating-fibers-hybrid-ecc]] — 이방연 교수: 형광 분광 분석 및 화상 처리 원전.
- [[kim-2007-slag-ecc-tensile-fiber-dispersion]] — Slag-ECC 섬유 분산 및 인장 거동 원전.
- [[strain-hardening-mechanism]] — ECC 변형경화 미시역학 및 $J_b'/J_{tip}$ 에너지 기준.
