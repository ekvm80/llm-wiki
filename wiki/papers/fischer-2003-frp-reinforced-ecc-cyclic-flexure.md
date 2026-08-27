---
title: "FRP 보강 ECC 휴 부재의 변형 거동 — 반복가력 조건 (Fischer & Li, 2003)"
type: source_note
source: "sources/2003-deformation-behavior-of-fiber-reinforced-polymer.pdf"
citation: "Fischer, G., and Li, V. C. \"Deformation Behavior of Fiber-Reinforced Polymer Reinforced Engineered Cementitious Composite (ECC) Flexural Members under Reversed Cyclic Loading Conditions.\" ACI Structural Journal, V. 100, No. 1 (2003), pp. 25-35."
date: 2026-08-22
tags: [frp-reinforcement, reinforced-ecc, reversed-cyclic-loading, bond, residual-deflection, moment-curvature]
---

# FRP 보강 ECC 휴 부재의 반복가력 변형 거동

## Summary

선형탄성인 아라미드 FRP 철근과 연성 ECC 매트릭스의 조합이 휴 부재의 하중-변형 거동에 미치는 영향을 소형 캔틸레버 실험과 모멘트-곡률 해석으로 규명한 논문. FRP-ECC 복합체는 비선형 탄성 거동, 안정적 이력, 작은 잔류처짐, 점진적 압축파괴를 보였으며, 다중균열 단계에서 철근-ECC 간 변형 호환에 의해 부착응력·슬립이 사실상 제거되어 균열 형성이 부착특성과 무관해짐을 확인했다. FRP 보강 콘크리트(RC) 대비 파괴 시점까지 복합체 건전성이 유지되어 처짐능력이 크게 향상된다.

## Key Contributions

1. 변형 호환 기구의 구조 적용 검증: ECC 다중균열(간격 0.5~5 mm, 폭 < 200 µm)이 FRP 응력 집중을 방지하고 부착분열(bond splitting)·피복박리를 억제한다. R/C 대조체(S-1)는 5 % drift에서 부착분열 균열, 6 %에서 피복 박리, 7 %에서 강성 상실 후 FRP 부분 파단(9 kN); R/ECC(S-2)는 부착분열 없이 회전미끄럼을 거쳐 12 % drift에서 FRP 파단(13 kN).
2. 부착 비의존성 실증: 전단철근 없는 S-3와 모래코팅한 S-4가 사실상 동일한 균열 간격(15 mm)과 거동을 보임. 모래코팅으로 부착강도를 높여도 성능 이득이 없으며 오히려 기부부 균열 밀집이 미끄럼면 형성을 촉진해 S-4가 12.5 kN로 약세. 충분 정착길이가 있으면 R/ECC 거동은 계면 부착특성과 무관.
3. 스터럽 불요 원칙: S-2의 FRP 파단은 모두 스터럽 교차점에서 발생(국소 구속·천공 손상). ECC 자체 연속 측면구속이 철근 좌굴을 방지하고 ductile 압축파괴를 보장하므로 전단 요건을 만족하면 횡철근을 배치하지 말 것 권고. 무스터럽 S-3가 예측값(14.2 kN)과 거의 일치하는 14.3 kN로 최적 성능.
4. 해석 모델 제시: 매트릭스 비선형 압축거동(Hognestad 포물선+직선강하)을 반영한 모멘트-곡률 관계에서 균열단면 강성 EI_cr 을 하중의 함수로 산정해 하중-처짐 포락선을 유도. Δ(L) = F·l_cr²/EI_cr ·(L/2 − l_cr/6) + F·(L−l_cr)/EI_cr ·(L − l_cr/2) + F·(L−l_cr)³/(3EI_g).

## Methods

- 재료: 아라미드 FRP Technora Rod(Teijin, 리브형) E = 54 GPa, 인장강도 1800 MPa, 인장변형률능 3.8 %(압축은 설계지침상 인장의 약 10 %). ECC: PE 섬유 1.5 vol%, 최대골재 0.25 mm, 균열발생 4.5 MPa @ 0.01 %, 최종 6.0 MPa @ 약 3.8 %, fc = 80 MPa @ 0.5 %. 콘크리트: 굵은골재 10 mm, fc = 50 MPa @ 0.2 %.
- 시험체: 단면 100 × 100 mm, 높이 500 mm 캔틸레버 4종. 종철근 Ø6 mm FRP 4본 대칭 배치(ρ = 1.13 %). S-1: R/C+스터럽, S-2: R/ECC+스터럽(Ø3 mm @ 25/75 mm, ρ_t = 0.57/0.19 %), S-3: R/ECC 무스터럽, S-4: R/ECC 무스터럽+모래코팅. 매트릭스 한계압축변형률(콘크리트 0.003, ECC 0.006)에서 FRP 파단 전 압축파괴가 먼저 오도록 설계.
- 가력: 100 kN 액추에이터, 변위제어 정방향·역방향 반복(drift 0.5 %부터 단계 증가). 표면 도트 이미지 분석(해상도 1520 × 960 px, 오차 약 0.5 mm)으로 처짐 형상·곡률분포 산출.

## Results

| 시험체 | 매트릭스 | 횡철근 | 코팅 | 파단 시 drift / 전단력 | 특이사항 |
|---|---|---|---|---|---|
| S-1 | R/C | 있음 | — | 7 % / 9.0 kN | 균열간격 ~100 mm, 폭 2 mm, 부착분열·박리 |
| S-2 | R/ECC | 있음 | — | 12 % / 13 kN | 균열간격 40→20 mm, 폭 0.2 mm, 회전미끄럼 |
| S-3 | R/ECC | 없음 | — | 13 % / 14.3 kN | 균열간격 15 mm 균일, 예측값 14.2 kN와 일치 |
| S-4 | R/ECC | 없음 | 모래 | 13 % / 12.5 kN | 기부부 균열 밀집→미끄럼면 조기 형성 |

- 곡률: 두 부재 모두 기부 집중 없이 분포형. 7 % drift에서 피크 곡률 S-1 0.00040 1/mm(이론 극한 0.00031 초과), S-2 0.00072 1/mm(예측 0.00044 초과) — 매트릭스 실제 변형률능이 설계 한계보다 컸음을 시사.
- 잔류처짐비: 균열포화 시 최솟값 약 0.2(S-1은 3 % drift, S-2는 6 % drift). S-2는 약 10 %까지 0.2 유지(안정적 휴 변형 메커니즘), S-1은 5 % 이후 부착분열·압괴로 급증. 등가감쇠비도 같은 경향.
- 해석: 초기 재하 사이클에서는 모델이 처짐을 과소평가(ECC 인장 기여 미반영), 재하중 사이클부터는 일치. S-3만 전 영역 양호, S-2·S-4는 회전미끄럼 미반영으로 중대 drift에서 편차.
- 한계 인정: ECC 인장연성에도 불구하고 FRP-ECC 부재의 에너지 흡수는 강재 보강 부재에 비해 크지 않음 — 주 소산 메커니즘이 균열 형성이라 반복 사용 불가.

## Related Notes

- [[fischer-2002-matrix-ductility-tension-stiffening]] — 동일 저자의 선행 논문; 일축 인장에서 확립한 변형 호환·부착 저감 메커니즘을 휴 부재로 확장
- [[gangarao-2007-frp-rc-design-textbook]] — FRP 보강 콘크리트 설계 배경 지식(본 논문의 대조계 R/FRC 맥락)
- [[pseudo-strain-hardening-criteria]] — ECC 다중균열 거동의 미시역학적 설계 근거
- [[bakis-2002-frp-composites-construction-state-of-the-art]] — FRP 내부철근 설계 철학 총론
