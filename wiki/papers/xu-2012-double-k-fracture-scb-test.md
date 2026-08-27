---
title: "Determination of Double-K Fracture Parameters of Concrete Using Semi-Circular Bend Test (Xu & Reinhardt, 2012)"
type: source_note
source: "sources/xu-2012-determination-of-double-k-fracture.pdf"
citation: "Xu, S., & Reinhardt, H. W. (2012). Determination of double-K fracture parameters of concrete using semi-circular bend test. Engineering Fracture Mechanics, 89, 58-74. https://doi.org/10.1016/j.engfracmech.2012.04.015"
date: 2026-08-24
tags:
  - double-k-fracture-model
  - semi-circular-bend-test
  - initiation-fracture-toughness
  - unstable-fracture-toughness
  - fracture-mechanics
---

## Summary
콘크리트의 비선형 파괴 특성을 규명하기 위해 개발된 2-파라미터 파괴 역학 모델인 Double-K 파괴 모델(초기 균열 개시 인성 $K_{Ic}^{ini}$ 및 불안정 전파 파괴인성 $K_{Ic}^{un}$)을 반원형 휨 시험(Semi-Circular Bend, SCB)을 통해 간소하고 정밀하게 측정하는 기법을 정립한 선구적 연구이다. 시추 코어(Drilled core)로부터 쉽게 가공 가능한 SCB 시험편의 기하 형상 함수(Stress Intensity Factor calibration function $Y_I(\alpha)$)를 유한요소해석으로 도출하고, 균열 개구 변위(CMOD) 게이지를 통한 $P-CMOD$ 곡선으로부터 균열 개시 하중($P_{ini}$)과 피크 하중($P_{max}$)을 자동 판정하는 해석 절차를 수립하였다.

## Key Contributions
- **SCB 시험편용 Double-K 파괴인성 폐형 계산식 정립**: 반경 $R$, 두께 $B$, 노치 길이 $a_0$에 대한 무차원 응력확대계수 보정식 도출.
- **균열 개시 인성($K_{Ic}^{ini}$)의 음향방출(AE) 및 $P-CMOD$ 비선형 분기점 검증**: 미세균열 발생 시점의 임계 하중 정밀 산정.
- **기존 3점 휨 빔(TPB) 시험과의 등가성 검증**: 시추 코어 SCB 시험 결과가 대형 노치 보 TPB 결과와 $\pm 5 \%$ 이내로 일치함을 실증하여 현장 구조물 잔존 파괴인성 진단법 확립.

## Methods
- **시험편**: 직경 $150 mm$ 원기둥 코어를 반원형으로 절단한 SCB 시험편 ($R = 75 mm, B = 50 mm, a_0/R = 0.2, 0.3, 0.4, 0.5$).
- **시험 항목**: 3점 휨 재하 시험(지간 $S = 0.8 \times 2R$), CMOD 클립 게이지 계측, 음향방출(AE) 모니터링.

## Results
- 보통 강도 콘크리트($f_c = 35 MPa$): $K_{Ic}^{ini} = 0.65 MPa\sqrt{m}$, $K_{Ic}^{un} = 1.38 MPa\sqrt{m}$.
- 고강도 콘크리트($f_c = 65 MPa$): $K_{Ic}^{ini} = 0.92 MPa\sqrt{m}$, $K_{Ic}^{un} = 1.85 MPa\sqrt{m}$.

## Related Notes
- [[astm-e399-linear-elastic-plane-strain-fracture-toughness]] - 파괴인성 선형역학 시험 기준
- [[pseudo-strain-hardening-criteria]] - 매트릭스 파괴인성과 가교 역학 설계
