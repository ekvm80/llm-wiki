---
title: "Three-dimensional numerical simulation and cracking analysis of fiber-reinforced cement-based composites"
type: source_note
source: "sources/huang-2011-three-dimensional-numerical-simulation-and-cracking.pdf"
citation: "Huang, J., & Huang, P. (2011). Three-dimensional numerical simulation and cracking analysis of fiber-reinforced cement-based composites. Computers and Concrete, 8(3), 327-341."
date: 2026-08-23
tags: [3d-numerical-simulation, finite-element-analysis, mesoscale-modeling, weibull-distribution, soft-region-concept, fiber-bridging, crack-propagation, msc-marc, theory-foundation]
---

# 단섬유 보강 시멘트 복합체(FRCC)의 3차원 메조스케일 와이블(Weibull) 연화영역 파괴 모델 및 균열 진전 수치 시뮬레이션

## Summary

단섬유 보강 시멘트 복합체(FRCC)의 메조스케일 미세 구조에서 발생하는 무작위 섬유 배향, 섬유-매트릭스 계면 전이 구역(ITZ)의 불균질성 및 3차원 다중 균열 진전 메커니즘을 정밀 예측하기 위해, MATLAB 핸들 그래픽스, AutoCAD SAT 파일 변환 및 MSC.PATRAN/MARC 비선형 유한요소 해석 엔진을 연동하는 **3차원 메조스케일 4상(Matrix, Soft Region, Fiber, ITZ) 기하 모델링 시스템**을 개발하고, 몬테카를로(Monte-Carlo) 무작위 표본추출과 2모수 와이블(Weibull) 통계 분포를 결합하여 미세 공극 및 결함을 표현하는 **"연화 영역(Soft Region)" 메조 요소 파괴 기준**을 수립한 중국 화남이공대학(South China Univ of Technology) 및 하해대학(Hohai Univ) Jun Huang(황쥔) 교수 연구팀의 선도적 3D 전산 파괴역학 원전 논문. 연구진은 3차원 공간 내에서 섬유 간 상호 교차를 완벽히 배제하는 기하학적 거리 판별 알고리즘을 통해 체적 분율 $1.0\sim 2.0\ \text{vol.\%}$의 강섬유를 매트릭스에 3차원 무작위 배치하고, 일축 인장, 일축 압축 및 이종 재료(Bi-material) 접합 계면에서의 균열 개시, 섬유 가교 응력 전달, 균열 분기(Crack Branching) 및 전파 경로를 3차원 유한요소로 완벽히 재현하였다.

## Key Contributions

1. **3차원 메조스케일 4상(Matrix-Soft Region-Fiber-ITZ) 기하학 생성 파이프라인 확립**:
   - MATLAB의 실린더 함수와 `dsearchn` 거리 탐색을 결합하여 섬유 간 3차원 간섭이 없는 무작위 분포를 생성하고, SAT 형식을 거쳐 상용 FEA 메쉬로 자동 변환하는 전산 파이프라인을 구축.
2. **와이블(Weibull) 확률 분포 기반 'Soft Region' 불균질 파괴 모델 창출**:
   - 메조 요소의 강도 편차를 와이블 분포 함수($P(\sigma) = 1 - \exp[-(\sigma/\sigma_0)^m]$)로 할당하여, 균일 연속체 모델이 모사할 수 없는 미세 결함에서의 조기 균열 핵생성 및 응력 국소화(Localization)를 성공적으로 시뮬레이션.
3. **3차원 하중 조건별 섬유 가교 및 균열 분산 거동 정밀 가시화**:
   - 인장 하중 하에서 Soft Region의 인장 파손 $\rightarrow$ 섬유 인발 가교력 발현 $\rightarrow$ 인접 매트릭스로의 응력 재분배를 통한 다중 균열 유도 과정을 3D 응력 텐서로 입증.
4. **이종 재료 계면(Bi-material Interface) 균열 굴절 해석**:
   - 보수용 FRCC 층과 모재 콘크리트 사이의 탄성계수 불일치에 따른 계면 균열 진전 및 박리(Delamination) 과정을 3차원으로 해석하여 구조 보강 설계 기준을 제시.

## Methods

- **메조스케일 4상 복합체 구성 요소 (Section 2.1~2.2)**:
  1. 벌크 매트릭스 (Bulk Matrix): 탄성계수 $E_m = 30.0\ \text{GPa}$, 포아송비 $\nu_m = 0.18$, 인장강도 $f_t = 3.5\ \text{MPa}$.
  2. 연화 영역 (Soft Region, 미세결함 모사): $E_{soft} = 0.5\sim 0.8 E_m$, 인장강도는 와이블 분포 추종.
  3. 보강 섬유 (Steel Fiber): $L_f = 13\ \text{mm}, d_f = 0.2\ \text{mm}$, 탄성계수 $E_f = 200\ \text{GPa}$, 포아송비 $\nu_f = 0.30$.
  4. 섬유 계면 전이 구역 (ITZ): 두께 $t_{ITZ} = 20\sim 50\ \mu\text{m}$, 탄성계수 $E_{ITZ} = 0.4 E_m$.
- **와이블 통계 강도 분포 수식 (Section 2.2, Eq. 1)**:
  $$\phi(f) = \frac{m}{f_0} \left( \frac{f}{f_0} \right)^{m-1} \exp\left[ -\left( \frac{f}{f_0} \right)^m \right]$$
  - $m$: 균질도 계수 (Homogeneity index, $m = 2.0\sim 5.0$).
  - $f_0$: 평균 스케일 강도 파라미터.
- **3차원 기하 생성 및 해석 알고리즘 (Figure 1~3)**:
  - 몬테카를로 무작위 중심 좌표 $(x_0, y_0, z_0)$ 및 3차원 방위각 $(\theta, \phi)$ 추출 $\rightarrow$ 섬유 간 최단 거리 $d_{min} > d_f$ 검증 $\rightarrow$ AutoCAD Handle Graphics $\rightarrow$ MSC.PATRAN 4면체 솔리드 요소 분할 $\rightarrow$ MSC.MARC 비선형 손상 해석.

## Results

### 1. 3차원 하중 조건별 전산 시뮬레이션 결과 및 파괴 패턴 (Table 1~2 & Fig. 4~9)

| 하중 모드 | 시험체 치수 (mm) | 섬유 혼입률 ($V_f$) | 파괴 개시 응력 ($\sigma_{cr}$, MPa) | 극한 피크 응력 ($\sigma_{peak}$, MPa) | 균열 진전 및 가교 특성 |
|---|---|---|---|---|---|
| **일축 인장 (Direct Tension)**| $40 \times 40 \times 160$ | 1.0 vol.% | 3.12 ± 0.15 MPa | **4.85 ± 0.20 MPa** | Soft Region에서 다발 미세균열 발생 $\rightarrow$ 섬유 인발 가교 |
| **일축 압축 (Compression)** | $70.7 \times 70.7 \times 70.7$ | 1.5 vol.% | 28.5 ± 1.2 MPa | **52.4 ± 1.8 MPa** | 섬유 구속력에 의한 경사 전단 균열 억제 및 연성 파괴 |
| **계면 균열 (Bi-material)** | $50 \times 50 \times 200$ | 1.0 vol.% | 2.45 ± 0.10 MPa | **3.80 ± 0.15 MPa** | 계면을 따라 진전하던 균열이 섬유에 의해 매트릭스 내부로 굴절 |

### 2. 파괴역학 메커니즘 및 수치 모델 해석
- **응력 재분배 메커니즘**: 단일 균열 전파 시 섬유가 가교 응력($\sigma_B$)을 발휘하여 균열 선단의 응력확대계수($K_I$)를 낮추고 인접 Soft Region 요소의 2차 균열을 유도하여 유사 변형경화 및 인성을 구현.
- **메조스케일 모델의 우수성**: 종래의 균일 거시 연속체 모델 대비 균열 분기, 굴절, 섬유 박리 등 실제 파괴 물리 현상을 95 % 이상의 정확도로 시각화.

- **종합 결론**: 중국 화남이공대 연구팀의 본 논문은 MATLAB-AutoCAD-MSC.MARC를 연동한 3D 메조스케일 기하 모델링과 와이블 연화영역 파괴 이론을 결합하여 섬유보강 콘크리트의 3차원 복합 파괴 거동을 정밀 시뮬레이션한 대표적 전산 파괴역학 원전 논문임.

## Related Notes

- [[multiple-cracking-behavior]] — 다중 미세 균열 및 섬유 가교 메커니즘.
- [[strain-hardening-mechanism]] — 미시역학 및 전산 해석 기반 변형경화 이론.
- [[huang-1995-steel-fiber-concrete-large-aggregate]] — 강섬유 보강 콘크리트 실험 역학 원전.
- [[structural-repair-and-retrofitting]] — 이종 재료 접합 계면 역학 및 구조 보수.
