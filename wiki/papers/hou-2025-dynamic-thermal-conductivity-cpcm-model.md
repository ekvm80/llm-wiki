---
title: "Development of a structural model with dynamic thermal conductivity for composite phase change materials: Numerical and experimental investigations"
type: source_note
source: "sources/hou-2025-development-of-a-structural-model.pdf"
citation: "Hou, F., Li, L., Cai, X., Wang, H., Gong, N., Zhu, Y., & Wang, H. (2025). Development of a structural model with dynamic thermal conductivity for composite phase change materials: Numerical and experimental investigations. Case Studies in Thermal Engineering, 72, 106348."
date: 2026-08-23
tags: [composite-phase-change-materials, cpcm, dynamic-thermal-conductivity, natural-convection, spherical-macrocapsules, spcm, hard-core-algorithm, building-thermal-regulation, theory-foundation]
---

# 구형 금속 캡슐(SPCM) 상변화 복합체의 액상 자연 대류 결합 동적 열전도도 3차원 구조 전산 모델 및 건물 열조절 거동

## Summary

건물 외피의 에너지 절감 및 실내 열쾌적성 최적화를 위해 복합 상변화 재료(CPCM)를 시멘트질 매트릭스에 통합할 때, 종래의 정적 유효 열전도도 모델이 액상 파라핀 내부에서 발생하는 부력 유도 자연 대류(Natural Convection)의 열전달 촉진 효과를 무시하여 발생하는 해석 오차를 극복하고자, 금속 쉘 두께 $0.445\ \text{mm}$의 구형 상변화 매크로캡슐(SPCMs, 외경 $15.63\ \text{mm}$, 내부 파라핀 코어)의 3차원 무작위 공간 분포(Hard-Core 알고리즘)와 액상 상변화 시의 **온도 의존적 자연 대류 향상 계수($Nu$)를 실시간 연동한 동적 유효 열전도도($k_{eff}(T)$) 3차원 열전달 구조 모델**을 수립하고, 시멘트 복합체 시편($70.7\ \text{mm}$ 큐브)의 가열-냉각 실험 및 DSC 열분석으로 정밀 검증한 중국 강소해양대(Jiangsu Ocean Univ), 퉁지대(Tongji Univ) 및 하이난대(Hainan Univ) 공동 연구팀의 2025년 최신 랜드마크 열공학 전산 모델 원전 논문. 연구 결과 액상 파라핀의 레일리 수($Ra$)와 누셀 수($Nu$)를 결합한 동적 유효 열전도도 모델은 상변화 진행에 따른 계면 이동(Stefan 문제)을 전산해석 연산 속도를 100배 단축하면서 실측 온도 프로파일 대비 **상대오차 2.8 % 이내**로 완벽히 예측하였다. 또한 SPCM 20 vol.% 혼입 시멘트 패널은 일사 주기 가열 하에서 실내 피크 온도를 **$5.8\ ^\circ\text{C}$ 감쇠**시키고 피크 도달 시점을 **3.5시간 지연(Time Lag)**시키는 탁월한 열관성 조절 성능을 정량 입증하였다.

## Key Contributions

1. **액상 PCM 자연 대류를 결합한 동적 유효 열전도도($k_{eff}(T)$) 다중스케일 모델 창출**:
   - 고상에서 액상으로 상변화 시 파라핀 내부의 밀도차 대류 유동($Nu > 1.0$)을 동적 열전도도 함수로 등가 치환하여 나비에-스톡스 방정식을 직접 풀지 않고도 대류 열전달을 초고속·초정밀 모사.
2. **Hard-Core 공간 반발 알고리즘 기반 SPCM 3차원 무작위 패킹 기하학 구현**:
   - 입자 간 최소 거리($2R_s$) 및 군집 억제 임계치($l_{max} = 3\sim 10 R_s$)를 적용하여 시멘트 큐브 내 SPCM 캡슐의 실제 3차원 분산 구조를 100 % 충실하게 가상 재현.
3. **금속 박막 쉘($t_s = 0.445\ \text{mm}$)의 열가교 및 역학적 구속 효과 정량화**:
   - 강철 쉘이 파라핀의 열전도 병목을 해소하는 동시에 상변화 팽창 응력을 완충하여 매트릭스 균열을 원천 차단함을 증명.
4. **건물 외피 실시간 열부하 저감 성능 정밀 입증 ($5.8\ ^\circ\text{C}$ 감쇠, 3.5시간 지연)**:
   - 외부 주기적 온도 파동에 대해 CPCM 패널이 실내로 유입되는 열유속 피크를 완벽히 차단하여 에어컨 냉방 에너지를 35 % 이상 절감 가능한 설계 기반을 수립.

## Methods

- **동적 유효 열전도도 수식 모델 (Section 4.1, Eqs. 3~7)**:
  1. 액상 파라핀의 자연 대류 열전도도 향상:
     $$k_l^* = Nu \cdot k_l$$
     - $Nu = C \cdot Ra^n$ (누셀 수, $Ra = \frac{g \beta (T - T_m) L^3}{\nu \alpha}$: 레일리 수).
  2. 고상-액상 연속 전이 동적 유효 열전도도:
     $$k_{PCM}(T) = k_s + f_l(T) \cdot (k_l^* - k_s)$$
     - $f_l(T)$: 액상 분율 (Liquid fraction, DSC 엔탈피 곡선 기반 $0.0 \sim 1.0$).
- **재료 사양 및 SPCM 제작 (Section 2 & Figures 3~6)**:
  - 매트릭스: 시멘트 모르타르 (P·O 42.5, W/C = 0.40, S/C = 2.0).
  - SPCM 캡슐 사양: 구형 중공 강구 ($R_s = 7.816\ \text{mm}$, 외경 $15.63\ \text{mm}$, 쉘 두께 $t_s = 0.445\ \text{mm}$, 강철 밀도 $7850\ \text{kg/m}^3$, 열전도도 $45\ \text{W/m}\cdot\text{K}$).
  - PCM 코어: 파라핀 왁스 (녹는점 $28.0\ ^\circ\text{C}$, 융해잠열 $145.0\ \text{J/g}$, 고상 밀도 $880\ \text{kg/m}^3$).
  - 시편 형상: $70.7\ \text{mm} \times 70.7\ \text{mm} \times 70.7\ \text{mm}$ 입방체, 중심부에 Type-K 열전대 매설.
- **실험 장비 및 시험 방법**:
  - 가열-냉각 사이클 시험: 온도 제어 환경 챔버 ($10\ ^\circ\text{C} \leftrightarrow 50\ ^\circ\text{C}$, 승온/강온 속도 $0.5\ ^\circ\text{C/min}$).
  - DSC 열분석: TA Instruments Q20 ($5\ ^\circ\text{C/min}$, $-10\sim 60\ ^\circ\text{C}$).
  - 3차원 유한요소 전산해석: COMSOL Multiphysics 비선형 과도 열전달 모듈.

## Results

### 1. CPCM 시편의 가열-냉각 실험치 vs 동적 열전도도 수치해석 비교 (Table 1~3 & Fig. 7~12)

| 시편 구분 | SPCM 혼입률 ($f_P$, vol.%) | 실측 피크 도달 시간 ($t_{peak}$, h) | 실측 최고 온도 ($T_{max}$, $^\circ\text{C}$) | 동적 모델 해석 오차 (RMSE) | 피크 지연 시간 ($\Delta t$) | 피크 온도 감쇠 ($\Delta T$) |
|---|---|---|---|---|---|---|
| **Control (Pure Mortar)**| 0.0 % (대조군) | 2.10 ± 0.05 h | 44.5 ± 0.3 $^\circ\text{C}$ | 0.25 $^\circ\text{C}$ | 0.0 h (기준) | 0.0 $^\circ\text{C}$ (기준) |
| **CPCM-1 (5% SPCM)** | 5.20 vol.% | 2.85 ± 0.08 h | 42.2 ± 0.3 $^\circ\text{C}$ | 0.32 $^\circ\text{C}$ | +0.75 h | −2.3 $^\circ\text{C}$ |
| **CPCM-2 (10% SPCM)**| 10.50 vol.% | 3.90 ± 0.10 h | 40.5 ± 0.4 $^\circ\text{C}$ | 0.38 $^\circ\text{C}$ | +1.80 h | −4.0 $^\circ\text{C}$ |
| **CPCM-3 (20% SPCM)**| **20.80 vol.%** | **5.60 ± 0.12 h** | **38.7 ± 0.4 $^\circ\text{C}$** | **0.42 $^\circ\text{C}$ (2.8 % 이내)**| **+3.50 h (지연)** | **−5.8 $^\circ\text{C}$ (감쇠)** |

### 2. 열전달 물리 메커니즘 및 해석 정밀도
- **자연 대류 결합의 필수성**: 종래의 정적 전도 모델은 액상 PCM의 열전달 속도를 과소평가하여 상변화 완료 시간을 22 % 지연 예측하였으나, 제안된 동적 $k_{eff}(T)$ 모델은 실험 곡선과 98 % 이상의 일치도를 달성.
- **다중 스케일 시너지**: 메조스케일 캡슐의 고속 열교환과 거시적 콘크리트 패널의 축열 성능이 완벽히 결합되어 건물 부하 저감 효과를 극대화.

- **종합 결론**: 본 연구는 금속 캡슐화 상변화 복합체의 액상 자연 대류 현상을 동적 유효 열전도도로 수학적 정식화하고 3D Hard-Core 전산 구조 모델을 구축하여, 제로에너지 건축물 외피의 열조절 거동을 정밀 설계하는 2025년 최신 랜드마크 열공학 원전 논문임.

## Related Notes

- [[hou-2022-microstructure-model-pcm-steel-ball-concrete]] — 중공강구 파라핀 시멘트 복합체 유효 열전도도 전산 모델 (선행 원전).
- [[gan-2025-pcm-energy-piles-thermal-performance]] — 동남대: PCM 중공강구 에너지 말뚝 열교환 원전.
- [[hao-2022-3d-printed-concrete-recycled-aggregate-pcm]] — 순환골재 PCM 3D프린팅 콘크리트 열전도도 원전.
- [[sustainability-low-carbon-binders]] — 저탄소 에너지 저장 건축 복합재 체계.
