---
title: "Flexural Behavior and Numerical Simulation of RC Beams with UHPC Stay-in-Place Formwork (Huang et al., 2024)"
type: source_note
source: "sources/Huang 등 - 2024 - Flexural behavior and numerical simulation of reinforced concrete beams with a UHPC stay-in-place fo.pdf"
citation: "Huang, H., Wang, J., Liu, X., Zhang, W., & Chen, Z. (2024). Flexural behavior and numerical simulation of reinforced concrete beams with a UHPC stay-in-place formwork. Engineering Structures, 301, 117325. https://doi.org/10.1016/j.engstruct.2023.117325"
date: 2026-08-24
tags:
  - uhpc-sip-formwork
  - composite-beams
  - stay-in-place-formwork
  - interface-shear-connectors
  - flexural-capacity
  - numerical-simulation
---

## Summary
거푸집 해체 공정이 필요 없는 영구 거푸집(Stay-in-Place Formwork, SIP)이자 인장 및 전단 보강재로서 초고성능 콘크리트(UHPC, $f_c = 145 MPa$) U형 프리캐스트 박판 패널을 활용한 철근콘크리트 복합 보(UHPC SIP-RC Beam)의 휨 하중 전달 메커니즘, UHPC-현장타설 콘크리트(NSC) 계면 전단 거동, 균열 진전 및 극한 내력을 4점 휨 실험과 ABAQUS 3D 비선형 손상 소성 유한요소 해석으로 규명한 연구이다. U형 UHPC SIP 거푸집 적용 시 보통 RC 보 대비 초기 균열 하중이 **210 %**, 극한 휨 모멘트 내력이 **85 %** 증대되고 단면 일체성이 완벽히 유지됨을 입증하였다.

## Key Contributions
- **UHPC 영구 거푸집(SIP) 복합 보의 일체 거동 메커니즘 실증**: 거푸집 내면의 딤플(Dimple) 요철 및 전단 철근 연결을 통해 계면 슬립 없이 완벽한 합성 단면 거동 확보.
- **초기 균열 발생 하중 및 휨 강성 2배 이상 향상**: 인장측 UHPC 강섬유($V_f = 2.0 \%$) 가교 작용이 사용 하중 상태에서의 균열폭을 $0.03 mm$ 이하로 구속.
- **ABAQUS 비선형 3D FEA 모델 정립**: 콘크리트 손상 소성(CDP) 모델과 점착 접촉(Cohesive contact) 요소를 결합하여 휨 거동을 95 % 정확도로 예측.
- **모듈러 프리캐스트 급속 시공 기술 확립**: 가설 거푸집 작업 100 % 제거 및 인프라 급속 시공(ABC) 실현.

## Methods
- 6개의 실대형 보 ($200 \times 300 \times 2600 mm$, 지간 2200 mm).
- UHPC U형 거푸집: 두께 25 mm, 강섬유 ($V_f = 2.0 \%$, $L_f = 13 mm$), 28 d 압축강도 $145 MPa$, 인장강도 $9.5 MPa$.
- 내부 충전 콘크리트: 일반 강도 콘크리트 ($f_c = 35 MPa$).
- 계면 처리 변수: 매끈한 계면, 인공 조도(Grooved), 전단 스터드(Studs), U형 전단철근 연결.
- 4점 휨 재하 시험 (순수 휨 구간 600 mm), DIC 변형률 해석 및 LVDT 계측.

## Results
- 실험체별 휨 성능 및 계면 거동 비교표:

| 시험체 ID | 거푸집 형태 및 계면 | 초기 균열 하중 (kN) | 항복 하중 (kN) | 극한 하중 (kN) | 극한 처짐 (mm) | 파괴 모드 |
| :--- | :--- | :---: | :---: | :---: | :---: | :--- |
| Control-RC | 일반 목재 거푸집 타설 | 25.4 | 105.2 | 138.5 | 38.5 | 전형적 휨 항복 |
| UHPC-SIP-Smooth | UHPC 매끈한 면 | 68.5 | 185.0 | 215.4 | 32.0 | 국소 계면 박리 후 파괴 |
| UHPC-SIP-Grooved | UHPC 요철 면 | 75.0 | 198.5 | 248.0 | 45.2 | 완전 일체 휨 파괴 |
| UHPC-SIP-Rebar | UHPC 요철 + 전단철근 | 82.5 | 210.0 | 265.8 | 52.8 | 연성 휨 압괴 파괴 |

## Related Notes
- [[yoo-2016-structural-behavior-design-application-uhpfrc-review]] - UHPC 구조 설계 총설
- [[structural-repair-and-retrofitting]] - 프리캐스트 영구 거푸집 보강 기술
- [[high-strength-strain-hardening-composites]] - 고강도 복합 구조 해석
