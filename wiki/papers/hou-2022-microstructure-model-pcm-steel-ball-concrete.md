---
title: "Microstructure-guided computational model for predicting effective thermal conductivity of cementitious composites filled with phase change particles"
type: source_note
source: "sources/hou-2022-microstructure-guided-computational-model-for-predicting.pdf"
citation: "Hou, F., Zhao, X., Wang, H., & Dong, Q. (2022). Microstructure-guided computational model for predicting effective thermal conductivity of cementitious composites filled with phase change particles. Case Studies in Thermal Engineering, 38, 102339."
date: 2026-08-23
tags: [phase-change-materials, hollow-steel-balls, pcm-hsb, thermal-conductivity-enhancement, finite-element-modeling, effective-medium-theory, energy-storage, hainan-university, theory-foundation]
---

# 중공 강구(HSB) 매크로 캡슐화 파라핀 입자를 혼입한 시멘트 복합체의 미세구조 기반 유효 열전도도 예측 전산 모델 및 열·역학 거동

## Summary

건물 외피의 잠열 축열 시스템(CLHSS)에서 유기계 파라핀 상변화물질(PCM)이 갖는 고유한 한계점인 극저 열전도율($0.2\ \text{W/m}\cdot\text{K}$)에 의한 느린 축열/방열 속도 및 역학적 강도 저하 문제를 근본적으로 극복하기 위해, 고열전도성·고강도 금속 쉘인 **중공 강구(Hollow Steel Balls: HSBs, 외경 $25\ \text{mm}$, 쉘 두께 $1.5\ \text{mm}$, 내부 파라핀 충전율 83.87 vol.%) 매크로 캡슐화 입자(PCM-HSB)**를 시멘트 모르타르 매트릭스에 0 vol.%, 5.09 vol.%, 10.18 vol.%, 15.28 vol.% 단계별로 치환 혼입하고, 과도 평면 열원법(TPS, Hot Disk) 실측과 함께 **미세구조 기반 3차원 유한요소(FE) 열전달 전산 모델 및 유효 매질 이론(Maxwell, Hamilton-Crosser, Hasselman-Johnson)**을 수립하여 3상 복합체(Cement-Steel-Paraffin)의 유효 열전도도(Effective Thermal Conductivity: CTC) 및 압축강도(CCS)를 정밀 규명한 중국 하이난 대학(Hainan Univ) Hui Wang(왕후이) 교수 연구팀의 선도적 스마트 건축 열관리 원전 논문. 연구 결과 일반 고분자 캡슐 PCM이 열전도도를 30~50 % 떨어뜨리는 것과 대조적으로, 고열전도 강철 쉘($k_{steel} = 45.0\ \text{W/m}\cdot\text{K}$)의 3차원 열가교(Thermal Bridging) 효과에 힘입어 PCM-HSB 15.28 vol.% 혼입 시 유효 열전도도가 기준 시멘트 모르타르 대비 **25.84 % 대폭 향상($1.180 \rightarrow 1.485\ \text{W/m}\cdot\text{K}$)**되었다. 또한 15.28 vol.%의 고혼입 상태에서도 28일 압축강도 **46.5 MPa**(대조군 53.2 MPa 대비 단 12.7 % 저하)를 견고히 유지하여 구조용 축열 복합체로서의 실용성을 완벽히 입증하였다.

## Key Contributions

1. **중공 강구(HSB) 매크로 캡슐화를 통한 열전도도 25.8 % 역전 증대 메커니즘 규명**:
   - 파라핀 코어의 낮은 열전도도($0.2\ \text{W/m}\cdot\text{K}$)를 두께 1.5 mm의 강철 쉘($45.0\ \text{W/m}\cdot\text{K}$)이 둘러쌈으로써, 복합 입자 전체의 유효 열전도도를 매트릭스보다 높은 $3.2\ \text{W/m}\cdot\text{K}$로 역전시켜 열전도도를 25.84 % 증대시킴.
2. **미세구조 기반 3상(Matrix-Shell-Core) 유한요소 열전달 전산 모델 구축**:
   - 무작위 입자 분포(RVE) 기하학을 생성하고 정상상태 및 과도 열유속 지배방정식을 해석하여, 실측값 대비 상대오차 ±3.5 % 이내의 초정밀 유효 열전도도 수치 예측 모델을 확립.
3. **고용량 잠열 저장($15.2\ \text{J/g}$) 및 46.5 MPa 구조적 압축강도의 동시 확보**:
   - 고분자 마이크로캡슐이 유발하는 50 % 이상의 치명적 강도 저하를 강철 쉘의 높은 지압 강도로 완벽히 방어하여 구조체 자립성과 고속 열충방전 성능을 동시 달성.
4. **유효 매질 모델(Hasselman-Johnson)의 계면 열저항($R_k$) 파라미터 정립**:
   - 강구 표면과 시멘트 페이스트 계면의 열저항 및 쉘 두께비($t_s/R_s$)가 전체 유효 열전도도에 미치는 민감도 해석을 수행하여 최적 HSB 지오메트리 가이드를 제시.

## Methods

- **재료 사양 및 PCM-HSB 제작 (Table 1~2 & Section 2)**:
  - 매트릭스: P·O 42.5 시멘트, 표준 규사 (S/C = 2.0, W/C = 0.40).
  - 중공 강구 (HSB): 탄소강 쉘 ($R_s = 12.5\ \text{mm}$, 두께 $t_s = 1.5\ \text{mm}$, 밀도 $7.85\ \text{g/cm}^3$, 열전도도 $45.0\ \text{W/m}\cdot\text{K}$).
  - 상변화 물질: 유기 파라핀 (상변화 온도 $28.0\ ^\circ\text{C}$, 융해잠열 $145.0\ \text{J/g}$, 밀도 $0.88\ \text{g/cm}^3$, 열전도도 $0.21\ \text{W/m}\cdot\text{K}$).
  - 주입 공정: $\phi 5\ \text{mm}$ 드릴 홀을 통해 액상 파라핀 감압 주입 후 수축 보상 밀봉 (실제 충전율 $\tilde{\xi}_{PCM} \approx 81.5\%$).
- **배합 매트릭스 (4종)**:
  - M0 (대조군): PCM-HSB 0.0 vol.%.
  - M1: PCM-HSB 5.09 vol.% (1개 큐브당 1구).
  - M2: PCM-HSB 10.18 vol.% (1개 큐브당 2구).
  - M3: PCM-HSB 15.28 vol.% (1개 큐브당 3구).
- **실험 장비 및 시험 방법**:
  - 열전도도: Hot Disk TPS 2500S (직경 15 mm 캡톤 필름 센서, 가열 출력 1.2 W, 40초, 오차범위 ±3 %).
  - 압축강도: $70.7\ \text{mm} \times 70.7\ \text{mm} \times 70.7\ \text{mm}$ 입방체, 28일 양생 후 300 kN 만능재료시험기.
  - 전산 해석: ABAQUS 열전달 모듈 (3D 비선형 정상상태 열전도 해석).

## Results

### 1. PCM-HSB 체적 분율별 열전도도 및 역학 물성 비교 (Table 3~5 & Fig. 4~9)

| 배합 ID | PCM-HSB 혼입률 (vol.%) | 실측 유효 열전도도 ($k_{eff}$, W/mK) | FE 전산 해석값 ($k_{num}$, W/mK) | 열전도도 증감률 (%) | 28일 압축강도 ($f_{cc}$, MPa) | 강도 저하율 (%) | 유효 잠열 용량 ($\text{J/g}$) |
|---|---|---|---|---|---|---|---|
| **M0 (Control)** | 0.0 % (대조군) | 1.180 ± 0.025 | 1.180 | 0.0 % (기준) | 53.2 ± 2.0 | 0.0 % (기준) | 0.0 J/g |
| **M1 (1-HSB)** | 5.09 vol.% | 1.272 ± 0.028 | 1.265 | **+7.80 %** | 50.8 ± 1.8 | −4.5 % | 4.8 ± 0.2 J/g |
| **M2 (2-HSB)** | 10.18 vol.% | 1.375 ± 0.030 | 1.368 | **+16.53 %** | 48.5 ± 1.6 | −8.8 % | 9.8 ± 0.4 J/g |
| **M3 (3-HSB)** | **15.28 vol.%** | **1.485 ± 0.032** | **1.478** | **+25.84 %** | **46.5 ± 1.5** | **−12.7 % (경미)**| **15.2 ± 0.5 J/g** |

### 2. 열전도 및 파괴 메커니즘 해석
- **열유속 집중 효과(Heat Flux Concentration)**: 열전도율이 45 W/mK에 달하는 강철 쉘이 열유속을 흡수하여 내부 파라핀 코어로 빠르게 전달하고 외곽 매트릭스로 방출하는 고속 열전달 고속도로 역할을 수행.
- **파괴 모드**: 압축 하중 하에서 강철 쉘의 높은 탄성계수로 인해 균열이 강구 표면을 따라 우회하며 완만한 전단 파괴를 형성하여 급격한 압쇄를 방지.

- **종합 결론**: 중국 하이난대 연구팀의 본 연구는 중공 강구(HSB) 매크로 캡슐화 기법과 미세구조 전산 모델을 융합하여, 파라핀 PCM 혼입 시 발생하는 열전도도 저하와 강도 손실을 완벽히 극복하고 열전도도를 25.8 % 향상시킨 차세대 건물 열에너지 저장 복합재 원전 논문임.

## Related Notes

- [[gan-2025-pcm-energy-piles-thermal-performance]] — 동남대: PCM 중공강구 캡슐화 에너지 말뚝 열교환율 29.5% 향상 원전.
- [[hao-2022-3d-printed-concrete-recycled-aggregate-pcm]] — 순환골재 PCM 3D프린팅 콘크리트 열전도도 원전.
- [[sustainability-low-carbon-binders]] — 저탄소 축열 및 에너지 절감 건축 재료 체계.
- [[gencel-2022-slag-capric-acid-thermal-mortar]] — 고로슬래그 담체 카프르산 축열 모르타르 원전.
