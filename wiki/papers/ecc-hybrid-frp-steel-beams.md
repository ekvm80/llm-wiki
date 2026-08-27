---
title: "Flexural Behavior of ECC-Concrete Hybrid Composite Beams Reinforced with FRP and Steel Bars (Ge et al., 2021)"
type: source_note
source: "sources/Flexural Behavior of ECC–Concrete Hybrid Composite Beams Reinforced with FRP and Steel Bars  Journa.pdf"
citation: "Ge, W., Liu, D., Zhang, J., Yao, S., Ashour, A., & Cao, D. (2021). Flexural behavior of ECC-concrete hybrid composite beams reinforced with FRP and steel bars. Journal of Bridge Engineering, 26(10), 04021079. https://doi.org/10.1061/(ASCE)BE.1943-5592.0001777"
date: 2026-08-24
tags:
  - hybrid-composite-beams
  - ecc-concrete-layers
  - bfrp-bars
  - steel-bars
  - flexural-behavior
  - ductility-index
---

## Summary
비부식성 현무암 섬유보강 플라스틱(BFRP) 철근으로 보강된 RC 부재의 낮은 탄성계수로 인한 과도한 균열폭 및 처짐 연성 부족 문제를 해결하기 위해, 인장측에 고연성 시멘트 복합체(PVA-ECC) 층을 배치하고 BFRP 및 강재 철근을 하이브리드 배근한 2층 복합 보(ECC-Concrete Composite Beams)의 휨 균열 진전, 하중-처짐 포락선, 철근 응력 재분배, 그리고 연성 지수를 4점 휨 실험과 비선형 단면 해석으로 규명한 연구이다. 인장측 ECC 층이 BFRP 철근 주변의 응력 집중을 완화하여 균열폭을 $0.05 mm$ 이하로 제어하고 처짐 연성지수 $\mu_\Delta$를 3.2배 향상시킴을 입증하였다.

## Key Contributions
- **ECC-콘크리트 2층 하이브리드 단면의 휨 메커니즘 정립**: 인장측 ECC 층($h_{ecc}/h = 0.25 \sim 0.50$)이 취성 콘크리트 균열을 다중 미세균열로 분산시켜 BFRP 철근의 조기 파단 억제.
- **BFRP-강재 하이브리드 보강 시너지 입증**: 강재 철근이 항복 후 소성 힌지를 형성하고 BFRP 철근이 2차 강성을 지지하여 안정적 2단계 하중 포락선 구현.
- **처짐 연성 지수($\mu_\Delta$) 220 % 증대**: 보통 BFRP 보강 콘크리트 보의 취성 파괴 모드를 완전 연성 파괴로 전환.
- **비선형 모멘트-곡률($M-\phi$) 설계 공식 수립**: AASHTO 및 ACI 440 표준에 부합하는 극한 휨 내력 산정 모델 제시.

## Methods
- 10개의 실대형 복합 보 ($150 \times 250 \times 2200 mm$, 지간 1900 mm).
- 매트릭스: 상부 보통 콘크리트($f_c = 42 MPa$) + 하부 PVA-ECC 층 ($t = 0, 60, 120 mm$, $f_c = 48 MPa$, $\epsilon_u = 3.5 \%$).
- 철근: 인장측 BFRP 바 (직경 12, 16 mm, $f_u = 1150 MPa$, $E = 48 GPa$) + 이형철근 (HRB400, $f_y = 430 MPa$).
- 4점 휨 재하 시험, DIC 전면 변형률 측정, LVDT 처짐 및 광섬유 변형률 센서 계측.

## Results
- 시험체별 휨 내력 및 처짐 연성 비교:

| 시험체 ID | ECC 층 두께 (mm) | 보강근 구성 | 균열 하중 (kN) | 극한 하중 (kN) | 파괴 처짐 (mm) | 변위 연성지수 $\mu$ |
| :--- | :---: | :--- | :---: | :---: | :---: | :---: |
| RC-BFRP | 0 | 2-BFRP 16 | 18.5 | 115.4 | 24.2 | 1.65 (취성) |
| RC-HYB | 0 | 1-Steel 16 + 2-BFRP 12 | 22.0 | 138.5 | 32.5 | 2.85 |
| ECC60-HYB | 60 | 1-Steel 16 + 2-BFRP 12 | 45.2 | 165.2 | 48.0 | 4.85 |
| ECC120-HYB | 120 | 1-Steel 16 + 2-BFRP 12 | 58.0 | 185.0 | 58.5 | 5.40 |

## Related Notes
- [[bencardino-2006-frp-strengthened-rc-beams-holistic]] - FRP 보강 콘크리트 부재 해석
- [[zhang-2014-simulation-flexural-layered-ecc-concrete-beam]] - 2층 복합 보의 파괴역학 시뮬레이션
- [[high-strength-strain-hardening-composites]] - 고연성 하이브리드 구조 거동
