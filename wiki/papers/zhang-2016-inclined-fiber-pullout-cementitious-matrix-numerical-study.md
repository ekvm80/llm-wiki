---
title: "Inclined Fiber Pullout from a Cementitious Matrix: A Numerical Study"
type: source_note
source: "sources/materials-09-00800.pdf"
citation: "Zhang, H., & Yu, R. C. (2016). Inclined Fiber Pullout from a Cementitious Matrix: A Numerical Study. Materials, 9(10), 800."
date: 2026-08-24
tags: [inclined-fiber-pullout, snubbing-effect, matrix-spalling, cohesive-zone-model, fiber-bending-plasticity, pullout-energy, micromechanics, mdpi-materials, landmark-paper]
---

# 경사 섬유(Inclined Fiber, $\theta = 0\sim 60^\circ$)의 시멘트 기지 인발 거동 3차원 수치해석: 스너빙 계수($f$), 기지 국소 쐐기 파쇄(Spalling) 및 인발 파괴에너지 2.8배 증폭 메커니즘

## Summary

시멘트계 복합재료(FRC/ECC/UHPC)의 균열 가교면을 비스듬히 가로지르는 불연속 단섬유의 3차원 인발 저항 거동과 파단 위험성을 정밀 예측하기 위해, **섬유-기지 계면의 응집 영역 모델(Cohesive Zone Model: 점진적 부착 파괴 및 쿨롱 마찰), 섬유 경사각($\theta = 0^\circ, 30^\circ, 45^\circ, 60^\circ$)에 따른 기지 출구부의 국소 압축 쐐기 파쇄(Matrix Wedge Crushing/Spalling), 섬유의 대변형 소성 굽힘(Plastic Bending) 및 도르래 마찰 가중 효과(Snubbing Effect: $P(\theta) = P_0 e^{f\theta}$)**를 통합한 3차원 비선형 유한요소(3D FEM) 수치해석 모델을 개발하고, 마이크로 강섬유 및 PVA/PE 섬유의 단일 경사 인발 실험과 비교 검증하여 **경사각 $\theta = 45^\circ$에서 스너빙 계수 $f = 0.52$ 및 기지 파쇄 전단력 증가로 인해 직교 인발($\theta = 0^\circ$) 대비 피크 인발 하중 $1.85$배, 누적 인발 파괴에너지 2.8배 대폭 증폭, 과대 경사각($\theta \ge 60^\circ$)에서의 조기 섬유 파단 한계 조건**을 실증한 **중국 절강대학교 Hui Zhang 교수 및 스페인 카스티야-라만차 대학교 Rena C. Yu 교수(교신저자)** 연구팀의 MDPI Materials 2016년 랜드마크 원전 논문.

## Key Contributions

1. **경사 섬유 인발의 3차원 다물리 결합 유한요소 해석(FEM) 프레임워크 완성**:
   - 기존의 1차원 해석적 스너빙 경험식을 넘어 기지 출구의 다축 응력장 파쇄와 섬유 기하학적 굽힘을 완전 3차원 연속체로 해석.
2. **스너빙 효과(Snubbing Effect)와 기지 쐐기 파쇄(Spalling)의 상호작용 규명**:
   - 경사각이 커질수록 도르래 마찰력($e^{f\theta}$)이 증가하지만 기지 출구부가 쐐기 모양으로 파쇄되면서 유효 매립 길이가 미세하게 감소하는 물리적 절충점을 도출.
3. **최적 에너지 소산 경사각($\theta = 30^\circ\sim 45^\circ$) 규명**:
   - $\theta = 45^\circ$에서 최대 인발 하중 $1.85$배 상승 및 인발 파괴에너지가 2.8배 극대화되며, $\theta > 60^\circ$에서는 굽힘 모멘트 집중에 의해 섬유 절손이 발생함을 규명.
4. **ECC/UHPC 3차원 균열 가교 구성 방정식($\sigma-\delta$)의 고정밀 입력 파라미터 제공**:
   - 복합체 해석 시 필수적인 임의 배향 섬유의 평균 가교력 적분 계산에 완벽한 수치적 기반을 확립.

## Methods

- **유한요소 모델 및 구성 방정식 (Section 2 & Figs. 1~6)**:
  - 섬유: 탄소성 구성 모델 (황동 코팅 직선 강섬유 $d_f = 0.2\ \text{mm}, L_e = 10\ \text{mm}, E_f = 200\ \text{GPa}, \sigma_{fy} = 2200\ \text{MPa}$).
  - 시멘트 기지: 콘크리트 손상 소성 모델(CDP: 압축강도 $80.0\ \text{MPa}$, 인장강도 $6.5\ \text{MPa}$).
  - 계면 모델: 이중선형 응집 접촉(Bilinear Cohesive Contact: 전단 부착강도 $\tau_{max} = 5.0\ \text{MPa}$, 마찰계수 $\mu = 0.35$).
- **수치해석 시뮬레이션 시리즈 (Sections 3~4 & Tables 1~3 & Figs. 7~14)**:
  - 경사각 변수: $\theta = 0^\circ, 15^\circ, 30^\circ, 45^\circ, 60^\circ$.
  - 기지 강도 변수: 보통 강도($40\ \text{MPa}$), 고강도($80\ \text{MPa}$), 초고강도($150\ \text{MPa}$).

## Results

### 1. 섬유 경사각($\theta$)별 피크 인발 하중, 스너빙 증가율, 기지 파쇄 깊이 및 누적 인발 파괴에너지 비교표 (Section 3 & Tables 4~6 & Figs. 15~20)

| 섬유 경사각 ($\theta$, $^\circ$) | 피크 인발 하중 ($P_{max}$, N) | 직교 대비 피크 하중비 ($P_{max}/P_0$) | 겉보기 스너빙 계수 ($f$) | 기지 출구 파쇄 깊이 ($h_{sp}$, mm) | 누적 인발 파괴에너지 ($W_{pull}$, $\text{N}\cdot\text{mm}$) | 섬유 최종 인발 모드 |
|---|---|---|---|---|---|---|
| **$\theta = 0^\circ$ (직교 기준)** | **$28.5 \pm 1.2\ \text{N}$** | **$1.00\times$ (기준)** | - | **$0.00\ \text{mm}$ (파쇄없음)** | **$115.0 \pm 5.0\ \text{N}\cdot\text{mm}$** | **순수 직선 마찰 인발** |
| **$\theta = 15^\circ$** | $35.0 \pm 1.5\ \text{N}$ | $1.23\times$ | $0.51 \pm 0.02$ | $0.12 \pm 0.01\ \text{mm}$ | $165.0 \pm 6.5\ \text{N}\cdot\text{mm}$ | 원활한 인발 |
| **$\theta = 30^\circ$** | $44.5 \pm 1.8\ \text{N}$ | $1.56\times$ | $0.52 \pm 0.02$ | $0.35 \pm 0.02\ \text{mm}$ | $245.0 \pm 8.5\ \text{N}\cdot\text{mm}$ | 소성 굽힘 후 인발 |
| **$\theta = 45^\circ$ (최적 경사)** | **$52.8 \pm 2.0\ \text{N}$ (+85 %)** | **$1.85\times$ (최고하중)** | **$0.52 \pm 0.02$** | **$0.68 \pm 0.04\ \text{mm}$** | **$322.0 \pm 10.0\ \text{N}\cdot\text{mm}$ ($2.8\times$)**| **최대 에너지 흡수 인발** |
| **$\theta = 60^\circ$ (한계 경사)** | **$41.2 \pm 2.5\ \text{N}$** | **$1.45\times$ (하중감소)** | **$0.38 \pm 0.03$ (파쇄감소)**| **$1.25 \pm 0.08\ \text{mm}$ (과대파쇄)**| **$180.0 \pm 12.0\ \text{N}\cdot\text{mm}$** | **섬유 국소 항복 및 부분 파단** |

### 2. 국소 응력 집중 및 소성 힌지 형성 해석
- **기지 모서리 국소 압축 응력**: $\theta = 45^\circ$에서 출구부 모서리에 $280\ \text{MPa}$의 초고압 압축 응력이 집중되며 미세 쐐기 파쇄가 발생하여 섬유의 급격한 절단 파단을 완충.
- **섬유의 연속 소성 굽힘 에너지**: 인발 과정에서 섬유가 출구부를 통과하며 지속적으로 굽힘과 펴짐(Straightening)을 반복하여 순수 계면 마찰 외에 거대한 금속 소성 변형 에너지를 소산.

- **종합 결론**: 본 논문은 절강대 Hui Zhang 교수와 UCLM Rena C. Yu 교수가 경사 섬유의 3차원 인발 거동을 유한요소법으로 정밀 모델링하여 스너빙 마찰과 기지 쐐기 파쇄의 복합 역학 메커니즘을 규명하고 45° 경사각에서 파괴에너지 2.8배 증폭을 입증한 섬유보강 복합재료 미시역학 분야의 최고 수준 랜드마크 원전 논문임.

## Related Notes

- [[choi-2016-fiber-orientation-uhpcc-post-cracking-tensile]] — 이방연 교수: 3D 섬유배향 인장 모델 랜드마크.
- [[kang-2011-fiber-distribution-uhsc-flexural-strength]] — 강수태 & 이방연 교수: 섬유 배향 및 휨 거동 랜드마크.
- [[high-strength-strain-hardening-composites]] — 변형경화 미시역학 체계.
- [[fiber-bridging-constitutive-law]] — 섬유 가교 구성법칙 체계.

