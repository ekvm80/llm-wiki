---
title: "Dynamic Compressive Properties and Damage Evolution of ECC (Zhu et al., 2023)"
type: source_note
source: "sources/zhu-2023-dynamic-compressive-properties-and-damage.pdf"
citation: "Zhu, H., Zhang, Z., & Wu, C. (2023). Dynamic compressive properties and damage evolution of engineered cementitious composites (ECC) under high strain rates. Construction and Building Materials, 370, 130680. https://doi.org/10.1016/j.conbuildmat.2023.130680"
date: 2026-08-24
tags:
  - engineered-cementitious-composites
  - dynamic-compression
  - split-hopkinson-pressure-bar
  - damage-evolution
  - pva-fiber
  - impact-energy
---

## Summary
고속 충돌 및 폭발 충격파 하중 하에서 고연성 복합체(PVA-ECC, $f_c = 48.5 MPa$, PVA 섬유 $V_f = 2.0 \%$)의 동적 압축 변형 및 손상 진화 거동을 규명하기 위해, 직경 75 mm 분리형 홉킨슨 압축봉(SHPB)을 이용하여 고변형률 속도($\dot{\epsilon} = 40 \sim 200 s^{-1}$) 하에서의 동적 응력-변형률 곡선, 동적 압축강도 증가 계수($DIF_c$), 변형 에너지 흡수 밀도 및 내부 미세균열 전파 영상을 초고속 카메라로 분석한 주홍(H. Zhu) 박사 연구팀의 연구이다. 변형률 속도 $180 s^{-1}$에서 동적 압축강도가 **98.5 MPa**($DIF_c = 2.03$)로 2배 이상 폭증하면서도 취성 파쇄 없이 **$4.2 MJ/m^3$**의 높은 충격 에너지를 소산함을 실증하였다.

## Key Contributions
- **PVA-ECC의 초고속 압축 하 소성 에너지 소산 메커니즘 규명**: 섬유 가교막이 압축 전단 균열의 횡방향 확장을 구속하여 형태 보존.
- **동적 압축 DIF 포락선 수식화**: $DIF_c = 1.0 + 0.0068 \dot{\epsilon}^{0.72}$ 정밀 모델 확립 ($R^2 = 0.98$).
- **동적 파괴 변형률($\epsilon_{cd} = 0.038$)의 극대화**: 준정적 대비 6.9배 연성 확장.
- **지하 방호 시설 및 교각 충돌 방호벽 내충격 수치해석 매개변수 확립**: 충돌 손상 예측 신뢰성 확보.

## Methods
- 시험체: $70 \times 35 mm$ 실린더 공시체 ($f_c = 48.5 MPa$, Kuraray PVA 섬유 $V_f = 2.0 \%$).
- SHPB 시스템: 직경 75 mm 알루미늄 합금 압축봉, 펄스 성형기 적용, 20000 fps 초고속 카메라 DIC.
- 변형률 속도: $\dot{\epsilon} = 45, 90, 140, 180 s^{-1}$.

## Results
- 동적 변형률 속도별 PVA-ECC 압축 역학 물성 데이터:

| 변형률 속도 $\dot{\epsilon}$ ($s^{-1}$) | 준정적 압축강도 (MPa) | 동적 압축강도 (MPa) | 동적 증가 계수 $DIF_c$ | 동적 파괴변형률 $\epsilon_{cd}$ | 동적 에너지 흡수 밀도 ($MJ/m^3$) |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 준정적 ($10^{-4} s^{-1}$) | 48.5 | 48.5 | 1.00 (기준) | 0.0055 | 0.35 |
| $45 s^{-1}$ | 48.5 | 68.0 | 1.40 | 0.0150 | 1.45 |
| $90 s^{-1}$ | 48.5 | 81.5 | 1.68 | 0.0240 | 2.50 |
| **$180 s^{-1}$** | **48.5** | **98.5** | **2.03 (+103 %)** | **0.0380 (+590 %)** | **4.20 (+1100 %)** |

## Related Notes
- [[zhang-2023-dynamic-compressive-uhp-ecc]] - UHP-ECC 동적 압축 물성
- [[zhou-2023-dynamic-compression-damage-uhpc]] - UHPC 동적 압축 손상
- [[impact-and-blast-resistance-frcc]] - 내충격 방호 복합체 설계 이론
