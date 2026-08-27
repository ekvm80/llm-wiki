---
title: "Nonlinear Analysis of Reinforced Beams with Softening Concrete (Kim & Lee, 1992)"
type: source_note
source: "sources/1-s2.0-004579499290389H-main.pdf"
citation: "Kim, J.-K., Lee, T.-G. Nonlinear analysis of reinforced beams with softening concrete. Computers & Structures 44(3) (1992) 567-573."
date: 2026-08-22
tags: [rc-beam, strain-softening, nonlinear-fem, moment-curvature, plastic-hinge, displacement-control]
---

# Nonlinear Analysis of Reinforced Beams with Softening Concrete

## Summary

철근콘크리트 보의 휨 붕괴하중 해석에서 단면의 변형률연화(strain-softening) 구간을 고려해 소성한계해석의 한계를 보완한 연구. 변위제어법(displacement control) 기반 유한요소해석으로 철근콘크리트 보의 파괴까지 전체 하중-처짐 곡선을 추적한다. 핵심 기여는 모멘트-곡률 관계의 요소 크기 의존성 문제를 소성힌지 집중 비탄성 회전 개념으로 수정해 해결한 것이다. ECC 위키 관점에서는 인장연화(strain-softening) 재료의 구조 해석에서 요소 크기 객관성(objectivity) 문제가 처음으로 실무적으로 다뤄진 사례로, ECC의 strain-hardening 거동과 대비되는 배경 문헌이다.

## Key Contributions

1. 변위제어 기반 비선형 FEM 절차 수립: 스냅백(snapback) 존재 시까지 응답을 추적 가능. 하중제어 대비 연화 구간 해석에 유리.
2. 요소 크기 객관성 문제의 해결: 모멘트-곡률 곡선을 요소 크기에 무관하게 사용하면 첨두 하중 이후 해가 요소 크기에 따라 발산(spurious sensitivity). 소성힌지 길이 내 집중 비탄성 회전량이 일정하다는 조건(면적 등가 A_II = A′_II)으로 각 요소의 모멘트-곡률 관계를 수정해 일관된 결과 획득.
3. 소성힌지 길이 산정: Corley 식과 Sawyer 식의 평균값 채택.
4. 연화 포함 단면 모델: 압축은 구속(confined) 콘크리트 모델(Fafitis-Shah 재계산), 인장은 Vebo-Ghali 모델, 이력은 Otter-Naaman 모델.

## Methods

수정강성법(modified stiffness approach) 기반 보 요소(3차 다항식 변위장, 요소 단 강성 (EI)_i, (EI)_j 선형 보간). 콘크리트 압축 응력-변형률 관계는 상승부 포물선-하강부 지수함수 형태, 철근은 탄성-완전소성. 하중제어 연립방정식을 변위제어 형태로 개조하고 잔류력 반복으로 수렴시킨다.

## Results

- 과소철근·평형·과철근 단순보 및 연속보 실험 결과와 비교 시 수정 모델 적용 해석이 실험 하중-처짐 곡선을 합리적으로 재현.
- 연속보 해석에서는 단면 연화가 과소평가되어 내하력과 처짐이 과소추정됨을 스스로 보고.
- 모멘트-곡률 수정 전후 비교에서 수정 없이는 요소 크기별 결과 불일치, 수정 후 일관성 확보.

## Related Notes

- ECC의 다중미세균열 인장연화(strain-hardening)와 달리 일반 철근콘크리트는 국지화된 strain-softening을 보인다. 이 대비가 ECC 구조부재 해석(요소 크기 문제 완화)의 이론적 배경이 된다.
