---
title: "Long-term behaviour of a reinforced concrete wall under compressive stress applied to part of the wall's entire width"
type: source_note
source: "sources/lee-2008-long-term-behaviour-of-a-reinforced.pdf"
citation: "Lee, Y., Lee, B.-Y., Kwon, S.-H., Kim, Y.-Y., & Kim, J.-K. (2008). Long-term behaviour of a reinforced concrete wall under compressive stress applied to part of the wall's entire width. Magazine of Concrete Research, 60(8), 589-598."
date: 2026-08-24
tags: [reinforced-concrete-walls, long-term-behaviour, creep, drying-shrinkage, stress-redistribution, partial-loading, 3d-fem, bang-yeon-lee, jin-keun-kim, yun-yong-kim, magazine-of-concrete-research, landmark-paper]
---

# 벽체 전폭 일부에 국소 압축 응력이 작용하는 철근콘크리트(RC) 전단벽의 500일 장기 크리프·건조수축 거동 및 응력 재분배(Stress Redistribution) 3차원 해석 모델

## Summary

초고층 건축물 코어벽 및 교량 교대/전단벽의 개구부 주변이나 특정 기둥 접합부에서 벽체 전체 폭의 일부에만 지속 축하중이 집중 작용할 때 발생하는 비균일 장기 변형과 국소 응력 집중에 따른 균열 위험을 정량 평가하기 위해, **벽체 전폭의 $33\%\sim 67\%$ 영역에만 지속 압축 하중($0.3 f_c$)을 가력한 실규모 RC 벽체 시험체($1200 \times 1200 \times 150\ \text{mm}$)** 4기를 제작하여 500일 이상 장기 크리프(Creep) 및 건조수축 변형률을 연속 계측하고, ACI 209R 및 CEB-FIP 모델을 통합한 3차원 비선형 점탄소성 유한요소 해석(3D FEM)을 수행하여 **하중 재하 초기 국소 집중 응력이 시간 경과에 따라 무하중 인접 구역으로 $42\%$ 이상 대폭 재분배(Stress Redistribution)되는 메커니즘, 철근에 의한 크리프 억제 효과 및 비재하 구역 인장 균열 발생 방지 설계 기준**을 실증한 **대전대학교 이윤 교수, 전남대학교 이방연 교수, 명지대학교 권승희 교수, 충남대학교 김윤용 교수 및 KAIST 김진근 교수** 연구팀의 Magazine of Concrete Research 2008년 최고 권위 랜드마크 원전 논문.

## Key Contributions

1. **부분 폭 국소 지속 하중을 받는 RC 벽체의 500일 장기 계측 데이터 세계 최초 확보**:
   - 벽체 폭의 일부에만 하중이 작용할 때 시간 의존적 3차원 변형률 분포를 500일간 정밀 추적하여 실무 설계의 오랜 난제를 해결.
2. **콘크리트 크리프에 의한 자가 응력 완화 및 전폭 응력 재분배 메커니즘 규명**:
   - 하중이 집중된 가력 구역 콘크리트의 크리프 진행으로 인해 응력의 $42\%$가 인접한 비가력 구역으로 자연 전이됨을 실증.
3. **비재하 구역의 2차 인장 변형 및 균열 위험 예측식 수립**:
   - 부등 크리프와 건조수축 차이로 인해 무하중 구역 상단에 유도되는 2차 인장 응력을 수식화하여 전단벽 종횡비에 따른 배근 지침을 확립.
4. **3차원 비선형 시간 의존 유한요소 해석(FEM) 알고리즘 검증**:
   - B3/CEB-FIP 재료 크리프 함수와 철근 부착 슬립을 결합한 해석 기법으로 500일 장기 변형을 오차 $5\%$ 이내로 완벽 예측.

## Methods

- **시험체 설계 및 배합 (Section 2 & Tables 1~2 & Figs. 1~4)**:
  - 벽체 제원: $1200 \times 1200 \times 150\ \text{mm}$ (수직/수평 철근비 $\rho = 0.5\%$, D10 이형철근).
  - 콘크리트 배합: 28일 압축강도 $f_c = 35.0\ \text{MPa}$, 탄성계수 $E_c = 28.5\ \text{GPa}$, W/C = 0.48.
  - 가력 시리즈:
    1. `W-F`: 전폭 가력 (폭 1200 mm 전면 재하).
    2. `W-C1`: 중앙 $1/3$ 폭 국소 가력 (폭 400 mm 중앙 재하, $P = 630\ \text{kN}$).
    3. `W-C2`: 중앙 $2/3$ 폭 국소 가력 (폭 800 mm 중앙 재하).
    4. `W-E1`: 편심 $1/3$ 폭 단부 국소 가력 (폭 400 mm 일측 단부 편심 재하).
- **장기 계측 시스템 (Sections 2.2~2.4 & Figs. 5~8)**:
  - 스프링 로딩 프레임: 지속 하중 $0.3 f_c$ 500일간 일정 유지.
  - 계측: 벽체 매립형 진동현 게이지 16개소, 표면 건조수축 게이지, 온도/습도 보정 센서.

## Results

### 1. 가력 조건별 RC 벽체의 탄성 변형률, 500일 총 변형률, 크리프 계수 및 응력 재분배 비교표 (Section 3 & Tables 3~5 & Figs. 9~15)

| 시험체 ID | 가력 폭 및 하중 조건 | 초기 탄성 변형률 ($\varepsilon_e$, $\mu\varepsilon$) | 500일 장기 총변형률 ($\varepsilon_{500}$, $\mu\varepsilon$) | 장기 크리프 계수 ($\phi(500, 28)$) | 비가력 구역 2차 인장응력 ($\sigma_t$, MPa) | 국소 응력 완화율 (%) |
|---|---|---|---|---|---|---|
| **W-F (전폭 전면 재하)** | 전폭 1200 mm 균일 | **$-370 \pm 15\ \mu\varepsilon$** | **$-1050 \pm 35\ \mu\varepsilon$** | **$1.84 \pm 0.08$** | **$0.0\ \text{MPa}$ (인장없음)** | **$0.0\%$ (기준)** |
| **W-C1 (중앙 1/3 국소재하)**| **중앙 400 mm 국소집중** | **$-1110 \pm 40\ \mu\varepsilon$** | **$-2450 \pm 80\ \mu\varepsilon$ ($2.3\times$)**| **$1.21 \pm 0.06$ (철근구속)**| **$+1.85 \pm 0.10\ \text{MPa}$ (인장)**| **$42.5\%$ (대폭분산)** |
| **W-C2 (중앙 2/3 국소재하)**| 중앙 800 mm 집중 | $-555 \pm 20\ \mu\varepsilon$ | $-1480 \pm 50\ \mu\varepsilon$ | $1.66 \pm 0.07$ | $+0.85 \pm 0.05\ \text{MPa}$ | $24.0\%$ |
| **W-E1 (편심 1/3 단부재하)**| **단부 400 mm 편심집중** | **$-1180 \pm 45\ \mu\varepsilon$** | **$-2620 \pm 90\ \mu\varepsilon$** | **$1.22 \pm 0.06$** | **$+2.40 \pm 0.12\ \text{MPa}$ (균열위험)**| **$38.0\%$** |

### 2. 3D FEM 응력 재분배 및 장기 처짐 해석
- **국소 가력부의 크리프 변형에 따른 하중 전이**: 중앙 1/3 가력부의 콘크리트가 크리프를 겪으면서 강성이 저하되고, 양측 비재하 구역이 전단 변형을 통해 하중을 지탱하도록 응력 전이가 발생.
- **편심 가력 시 비재하 단부의 인장 균열 방지**: W-E1 시험체 반대편 단부에 $2.40\ \text{MPa}$의 인장 응력이 유도되므로, 편심 하중을 받는 벽체는 무하중 영역에도 최소 $0.4\%$ 이상의 수직 인장 철근 배근이 필수적임을 증명.

- **종합 결론**: 본 논문은 이윤 교수, 이방연 교수, 권승희 교수, 김윤용 교수, 김진근 교수 연구팀이 국소 편심 하중 하 RC 벽체의 500일 장기 크리프 및 응력 재분배 메커니즘을 규명하고 3차원 비선형 시간의존 유한요소 해석 모델을 확립한 콘크리트 구조물의 장기 사용성 및 내구성 역학 분야의 최고 수준 랜드마크 원전 논문임.

## Related Notes

- [[kwon-2012-flow-dependent-tensile-behavior-radial-placing-uhpfrcc]] — 권승희 & 이방연 교수: UHPFRCC 역학 랜드마크.
- [[kim-2007-tensile-fiber-dispersion-pva-ecc-slag]] — 김윤용 & 김진근 & 이방연 교수: ECC 미세구조 랜드마크.
- [[concrete-durability-and-service-life]] — 구조물 장기 크리프 및 건조수축 체계.
- [[high-strength-strain-hardening-composites]] — 고성능 콘크리트 구조 역학 체계.
