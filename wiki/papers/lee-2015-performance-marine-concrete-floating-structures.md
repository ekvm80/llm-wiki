---
title: "Analytical Estimation of Performance of Marine Concrete Floating Structures (Lee et al., 2015)"
type: source_note
source: "sources/lee-2015-analytical-estimation-of-the-performance.pdf"
citation: "Lee, B. Y., Bang, J. W., & Kim, Y. Y. (2015). Analytical estimation of the performance of marine concrete floating structures exposed to harsh ocean environment. International Journal of Offshore and Polar Engineering, 25(3), 215-222."
date: 2026-08-24
tags:
  - marine-concrete
  - floating-structures
  - chloride-penetration
  - service-life-prediction
  - crack-width-control
  - ocean-environment
---

## Summary
초대형 해양 부유식 콘크리트 구조물(Very Large Floating Structures, VLFS)이 장기 가혹 해양 환경(파랑 반복 휨 하중, 해수 비말대 염화물 침투, 건습 반복)에 노출될 때 구조물의 균열 발생, 염소이온 확산, 철근 부식 개시 시점 및 잔존 내구수명을 정밀 예측하기 위해, 유체-구조 연성 파랑 응답 해석, 균열폭 제어 비선형 단면 해석, 그리고 Fick의 제2법칙 기반 비정상 상태 염화물 확산 모델을 결합한 통합 성능 평가 수치 해석 프레임워크를 개발한 이방연, 방진욱, 김윤용 교수의 해양 토목 명저이다. 인장측에 고연성 SHCC를 적용하여 균열폭을 $0.05 mm$ 이하로 제어할 경우 구조물의 목표 내구수명을 50년에서 **100년 이상**으로 연장할 수 있음을 입증하였다.

## Key Contributions
- **해양 부유식 구조물의 파랑 하중-염화물 침투 다물리 연계 해석 모델 완성**: 유의파고 및 파주기에 따른 부재 휨 인장 응력과 염화물 침투 속도 통합.
- **미세균열폭($w$)에 따른 유효 염화물 확산 계수($D_{cr} = D_0 [1 + a (w/w_0)^b]$) 정량화**: 균열폭이 $0.1 mm$ 이하로 구속될 때 염화물 침투 지연 효과 실증.
- **부유식 구조물 피복 두께 및 재료별 한계상태 수명 평가**: 보통 콘크리트 대비 고연성 SHCC 적용 시 철근 부식 개시 시점 2.8배 연장.
- **해양 플랜트 및 해상 공항/항만 부유 구조체 설계 지침 제시**: 경제적 방청 유지관리 전략 수립.

## Methods
- 파랑 하중 해석: 3차원 경계요소법(BEM) 기반 유체동역학 파랑 모멘트 산정 ($H_s = 4.5 m, T_p = 10.5 s$).
- 단면 해석: RC 및 SHCC 복합 부재의 비선형 모멘트-곡률 해석 및 균열폭 산출.
- 내구성 해석: 유한차분법(FDM) 기반 2차원 염화물 침투 및 임계 염화물 농도($C_{cr} = 1.2 kg/m^3$) 도달 시간 수치해석.

## Results
- 부유체 부재별 내구수명 예측 결과 비교표:

| 부재 단면 구성 | 피복 두께 (mm) | 최대 균열폭 (mm) | 유효 확산계수 ($10^{-12} m^2/s$) | 철근 부식 개시 수명 (년) | 100년 내구수명 달성 여부 |
| :--- | :---: | :---: | :---: | :---: | :--- |
| 보통 RC (NC 35 MPa) | 50 | 0.28 | 8.5 | 28 | 불가 (조기 보수 필요) |
| 고내구성 RC (HPC 60 MPa) | 70 | 0.18 | 3.2 | 55 | 부분 만족 |
| **SHCC 복합 부재** | **50** | **0.035** | **0.85** | **> 120** | **완벽 만족 (100년 보장)** |

## Related Notes
- [[concrete-durability-and-service-life]] - 콘크리트 내구성 및 서비스 수명 이론
- [[crack-width-control]] - 미세균열 제어를 통한 해양 구조물 방청
- [[zhu-2014-autogenous-healing-marine-ecc]] - 해양 환경 하 자기치유 복합체
