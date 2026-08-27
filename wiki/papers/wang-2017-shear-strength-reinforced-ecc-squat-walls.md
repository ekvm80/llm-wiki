---
title: "Shear Strength of Reinforced ECC Squat Walls under Cyclic Loading (Wang et al., 2017)"
type: source_note
source: "sources/wang-2017-shear-strength-of-reinforced-ecc.pdf"
citation: "Wang, Z., Zhang, J., & Li, V. C. (2017). Shear strength of reinforced engineered cementitious composite (ECC) squat walls under cyclic loading. Journal of Structural Engineering, 143(11), 04017154. https://doi.org/10.1061/(ASCE)ST.1943-541X.0001889"
date: 2026-08-24
tags:
  - reinforced-ecc
  - squat-shear-walls
  - cyclic-loading
  - shear-strength
  - seismic-retrofit
---

## Summary
형상비(Aspect ratio $H/L = 1.0 \sim 1.5$)가 낮아 전단 파괴가 지배적인 저형상비 전단벽(Squat Wall)의 지진 취성 파괴를 방지하기 위해, 일반 콘크리트 대신 PVA-ECC를 타설한 철근보강 ECC(R/ECC) 단벽의 전단 거동을 반복 횡하중 실험과 비선형 트러스 모델로 규명한 연구이다. R/ECC 벽체는 대각선 사인장 균열 발생 후에도 섬유 가교 응력이 전단 응력을 지속 전달하여 취성 전단 파괴가 완전 배제되고, 안정적인 핀칭 완화 이력 루프와 높은 전단 강도($V_n = 0.65 \sqrt{f_c'} A_w$)를 발현함을 입증하였다.

## Key Contributions
- **저형상비 전단벽의 전단 연성 파괴 모드 구현**: 일반 RC 전단벽의 대각 인장 파괴를 ECC의 면내 다중 사선 미세균열 전단 항복 모드로 전환.
- **R/ECC 전단 강도 산정 모델 제안**: 콘크리트 기여분($V_c$), 수평 철근 기여분($V_s$), 그리고 섬유 가교 인장 기여분($V_f = \sigma_0 A_w \cot\theta$)을 통합한 전단 내력식 정립.
- **에너지 소산 능력 3.2배 향상 실증**: 반복 하중 하 핀칭 현상이 획기적으로 완화된 방추형 이력 곡선 확보.

## Methods
- **재료**: PVA-ECC ($V_f = 2.0 \%$, REC15, $f_c = 48.5 MPa$, 인장강도 $4.5 MPa$).
- **시험체**: 4개의 실대형 R/ECC 및 RC 단벽 ($1000 \times 1000 \times 100 mm$, 형상비 1.0, 수평/수직 철근비 0.4 %).
- **재하**: 일정 축력 하 반복 횡하중 재하 시험 (드리프트각 $\pm 0.25 \% \sim 3.5 \%$).

## Results
- R/ECC 벽체: 최대 전단 내력 $412 kN$ (RC 벽체 $248 kN$ 대비 66 % 증가), 변위 연성지수 $\mu = 5.2$ (RC $\mu = 1.8$ 대비 2.9배 향상).
- 수평 전단 철근 배근량을 50 % 감축하고도 RC 기준 이상의 전단 내진 안전성 확보.

## Related Notes
- [[van-zijl-2007-shear-behaviour-shcc]] - SHCC의 순수 전단 변형경화 메커니즘
- [[structural-repair-and-retrofitting]] - 전단벽체 내진 보강 설계
