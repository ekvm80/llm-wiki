---
title: "State-of-the-Art Review on Direct Tensile Testing and Behavior of ECC (Yu et al., 2018)"
type: source_note
source: "sources/Yu 2018 CBM2.pdf"
citation: "Yu, K. Q., Zhu, W., Ding, Y., Lu, Z. D., & Yu, J. T. (2018). Micro-structural and mechanical properties of ultra-high performance engineered cementitious composites: A state-of-the-art review. Construction and Building Materials, 186, 1040-1055. https://doi.org/10.1016/j.conbuildmat.2018.08.020"
date: 2026-08-24
tags:
  - ecc-review
  - direct-tensile-test
  - specimen-geometry
  - boundary-conditions
  - micromechanics
  - state-of-the-art
---

## Summary
고연성 변형경화형 복합체(ECC/SHCC/UHP-ECC)의 핵심 역학 지표인 일축 직접 인장 거동(Uniaxial Direct Tensile Behavior)을 정밀하고 객관적으로 평가하기 위해, 전 세계 다양한 연구 기관에서 적용 중인 도그본/덤벨형 시험편 형상, 양단 지지 경계 조건(고정 척 Fixed vs 핀 힌지 Pinned vs 회전 볼 조인트), 가력 속도 의존성 및 DIC 변형률 계측 프로토콜을 체계적으로 비교 분석하고 글로벌 표준 직접 인장 시험 가이드라인을 집대성한 동지대학교 연구팀의 기념비적 총설 논문이다.

## Key Contributions
- **ECC 직접 인장 시험편 5대 형상(JSCE, JCI, RILEM, Univ. Michigan, Tongji) 역학적 비교**: 응력 집중 계수 및 조기 파단 위험성 정량화.
- **경계 조건(Fixed vs Pinned)이 인장 변형률능 측정치에 미치는 영향 규명**: 핀 힌지 지지 시 2차 휨 응력 발생으로 겉보기 연성이 최대 25 % 과소평가됨을 입증.
- **UHP-ECC 미시역학 설계 원리 및 섬유-매트릭스 계면 상태 총정리**: PVA, PE, 강섬유 복합체의 인장 거동 데이터베이스 집대성.
- **표준 도그본 형상 및 디지털 화상 상관법(DIC) 계측 표준안 제시**: 글로벌 연구자 간 데이터 신뢰성 및 비교 가능성 확보.

## Methods
- 150여 편의 글로벌 ECC 직접 인장 실험 데이터베이스 메타 분석.
- 3차원 탄소성 유한요소 해석(FEA)을 통한 시험편 숄더부 응력 집중 계수($K_t$) 산출.

## Results
- 시험편 형상 및 경계 조건별 직접 인장 시험 특성 비교표:

| 시험편 규격 | 숄더 곡률반경 ($R$) | 게이지 단면 ($mm^2$) | 권장 경계 조건 | 응력 집중 계수 $K_t$ | 게이지 외 파단율 (%) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| JSCE 표준 덤벨 | 30 mm | $30 \times 13$ | 핀 힌지 척 | 1.35 | 12.5 % |
| RILEM TC-HFC | 50 mm | $40 \times 20$ | 고정 그립 | 1.18 | 6.2 % |
| **Tongji 표준 도그본** | **100 mm** | **$50 \times 15$** | **고정 척 + DIC** | **1.06 (최소)** | **$< 2.0 \%$** |

## Related Notes
- [[pseudo-strain-hardening-criteria]] - PSH 미시역학 이론
- [[yu-2018-rate-dependent-tensile-uhp-ecc]] - UHP-ECC 속도 의존성
- [[high-strength-strain-hardening-composites]] - 고강도 복합체 설계
