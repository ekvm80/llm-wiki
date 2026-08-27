---
title: "Distribution of steel fibres in rectangular sections"
type: source_note
source: "sources/dupont-2005-distribution-of-steel-fibres-in.pdf"
citation: "Dupont, D., & Vandewalle, L. (2005). Distribution of steel fibres in rectangular sections. Cement and Concrete Composites, 27(3), 391-398."
date: 2026-08-23
tags: [steel-fibres, fibre-distribution, fibre-orientation-factor, wall-effect, boundary-conditions, rilem-beams, fibre-counting, theory-foundation]
---

# 강섬유 콘크리트 직사각형 단면에서의 벽면 효과(Wall Effect), 섬유 배향 계수($\alpha$) 및 균열면 유효 가교 섬유 개수 산정 이론

## Summary

강섬유 보강 콘크리트(SFRC) 구조 부재(보, 슬래브, 기둥)의 균열 단면에서 섬유 가교 응력($\sigma-\delta$)과 휨 인성($f_{R,j}$)을 정밀 예측하기 위해, 거푸집 벽면 효과(Wall Effect)에 의해 섬유의 회전 자유도가 구속되는 메커니즘을 기하학적 확률론으로 정립하고, 직사각형 단면을 3대 영역(중심 벌크 영역, 단일 벽면 인접 영역, 모서리 2중 구속 영역)으로 분할하여 각 영역별 이론 배향 계수($\alpha_1, \alpha_2, \alpha_3$)를 엄밀히 적분 유도한 후, 총 107개의 실물 RILEM 표준 휨 노치 보 시편 단면을 절단하여 실제 강섬유 개수를 전수 카운팅(Fibre Counting)하여 이론식의 신뢰도를 검증한 벨기에 루벤 가톨릭대(KU Leuven) David Dupont 및 Lucie Vandewalle 교수의 불후의 기념비적 원전 논문. 연구 결과 무구속 중심부의 배향 계수는 **$\alpha_1 = 0.50$**(완전 3차원 등방 랜덤), 1개 벽면 인접부는 **$\alpha_2 = 0.60$**(2차원 평면 정렬), 모서리 2개 벽면 인접부는 **$\alpha_3 = 0.84$**(1차원 축방향 정렬)로 도출되었다. 이를 단면 전체로 가중 적분한 총 배향 계수($\alpha_{tot}$) 기반의 섬유 개수 예측식($N_f = \alpha_{tot} V_f A_c / A_f$)은 107개 시험체의 실제 측정값과 **결정계수 $R^2 > 0.95$의 극도로 높은 정확도**를 보임을 실증하였다.

## Key Contributions

1. **거푸집 벽면 구속 영역별 이론 섬유 배향 계수($\alpha$) 수치 적분 해 도출**:
   - **Area 1 (벌크 3D 자유 영역)**: 섬유 중심이 양쪽 벽면에서 $l_f/2$ 이상 떨어진 구역 $\rightarrow \alpha_1 = \int_0^{\pi/2} \cos\theta \sin\theta d\theta = \mathbf{0.50}$.
   - **Area 2 (1개 벽면 구속 영역)**: 섬유 중심이 한쪽 벽면과 $y < l_f/2$인 구역 $\rightarrow$ 구면 절단 적분을 통해 $\mathbf{\alpha_2 = 0.60}$.
   - **Area 3 (모서리 2개 벽면 구속 영역)**: $y < l_f/2$ 및 $z < l_f/2$인 모서리 구역 $\rightarrow$ 2중 구면 캡 절단 적분을 통해 $\mathbf{\alpha_3 = 0.84}$.
2. **직사각형 및 노치 단면의 통합 유효 섬유 개수($N_f$) 산정식 완성**:
   - 단면 치수($b, h$), 노치 깊이($ND$), 섬유 길이($l_f$), 섬유 단면적($A_f$), 체적 분율($V_f$)을 입력하면 단면을 관통하는 총 유효 섬유 개수를 오차 5 % 이내로 자동 산정하는 보편적 해석식을 수립:
     $$N_f = \alpha_{tot} \frac{V_f}{A_f} A_c = \left( \frac{\alpha_1 A_1 + \alpha_2 A_2 + \alpha_3 A_3 + \cdots}{A_c} \right) \frac{V_f}{\pi d_f^2 / 4} A_c$$
3. **107개 RILEM 보 시험체 단면 전수 카운팅을 통한 대규모 실험 검증**:
   - 직선형, 후크형 강섬유를 포함한 107개 파괴 단면의 실제 섬유 수와 모델 예측값 간의 완벽한 1:1 선형 상관관계($R^2 = 0.954$)를 확인하여 전 세계 RILEM 및 fib Model Code의 배향 계수 표준 근거를 제공.

## Methods

- **단면 분할 및 기하학적 배향각 모델링**:
  - 단면 크기: 폭 $b$, 높이 $h$, 섬유 길이 $l_f$, 섬유 직경 $d_f$.
  - 영역 분할 (Figure 1 & 5):
    - Area 1 (중앙): $(b - l_f) \times (h - l_f)$, $\alpha_1 = 0.50$.
    - Area 2 (상하좌우 변): $2(b - l_f)\frac{l_f}{2} + 2(h - l_f)\frac{l_f}{2}$, $\alpha_2 = 0.60$.
    - Area 3 (4개 모서리): $4 \times (l_f/2)^2$, $\alpha_3 = 0.84$.
    - 노치 시편 수정: 노치 깊이($ND$) 구간을 제외한 리가먼트(Ligament) 유효 면적에 대해 Area 4($\alpha_4 = 0.53$) 및 Area 5($\alpha_5 = 0.72$) 적용.
- **실험 검증 프로그램 (KU Leuven)**:
  - 107개 RILEM TC 162-TDF 표준 보 시편 ($150\ \text{mm} \times 150\ \text{mm} \times 600\ \text{mm}$, 노치 깊이 25 mm).
  - 강섬유 종류: 3종의 후크 엔드 강섬유 ($l_f = 35\sim 60\ \text{mm}, d_f = 0.55\sim 0.90\ \text{mm}, V_f = 0.3\%\sim 1.0\%$).
  - 시험 후 파단면 고해상도 촬영 및 디지털 이미지 기반 섬유 전수 계수.

## Results

### 1. 단면 위치별 이론 배향 계수 및 형상비 영향 비교

| 단면 구역 구분 | 구속 경계 조건 | 섬유 3차원 자유도 | 이론 배향 계수 ($\alpha_i$) | 가교 효율성 평가 |
|---|---|---|---|---|
| **Area 1 (중심부)** | 무구속 (Bulk) | 완전 3D 구면 자유 회전 | **0.50** | 표준 3차원 등방 기준 |
| **Area 2 (단일 벽면)**| 1면 평행 구속 ($y < l_f/2$) | 2차원 평면 반구면 회전 | **0.60 (+20 %)** | 벽면 효과로 가교 섬유 밀도 증가 |
| **Area 3 (모서리)** | 2면 직교 구속 ($y, z < l_f/2$) | 1차원 축방향 정렬 | **0.84 (+68 %)** | 모서리부에서 최고 가교 효율 |
| **Area 4 (노치 상단)**| 노치 절단 1면 구속 | 부분 구속 | **0.53** | 휨 인장 최외단 배향 |
| **Area 5 (노치 모서리)**| 노치 + 측면 벽 2면 구속 | 모서리 부분 구속 | **0.72** | 노치 선단 가교 기여 |

### 2. 107개 RILEM 시편 검증 및 치수 효과(Size Effect) 해석
- **부재 두께 효과**: 단면 두께가 얇을수록(예: $h \approx l_f$) Area 2와 Area 3의 면적 비중이 커져 총 배향 계수 $\alpha_{tot}$가 0.50에서 0.65~0.75로 급격히 상승함.
- **실험 검증 오차**: 107개 보 단면의 평균 예측 섬유 개수 대비 실제 섬유 수의 평균 오차율은 **2.8 %**에 불과하여 통계적 완전성을 입증.

- **종합 결론**: Dupont와 Vandewalle의 본 배향 계수 모델은 거푸집 형상과 부재 치수에 따른 강섬유의 벽면 정렬 효과를 완벽한 해석적 수식으로 정립하여, 섬유 콘크리트 단면의 휨 및 인장 내력 설계를 결정론적으로 수행할 수 있게 만든 토목공학 분야 최고의 고전 원전임.

## Related Notes

- [[fiber-orientation-distribution]] — 섬유 배향각 분포 및 2D/3D 가교 효율 계수 이론.
- [[barnett-2010-assessment-of-fibre-orientation-in]] — UHPFRC 유동 유도 섬유 배향 및 단면 가교.
- [[banthia-2007-toughness-enhancement-in-steel-fiber]] — 강섬유 하이브리드 보강 및 휨 인성 평가.
- [[fiber-bridging-constitutive-law]] — 섬유 가교 $\sigma-\delta$ 구성 모델.
