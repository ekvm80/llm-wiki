---
title: "Theory of Multiple Fracture of Fibrous Composites (Aveston & Kelly, 1973)"
type: source_note
source: "sources/'aveston-1973-theory-of-multiple-fracture-of.pdf'"
citation: "Aveston, J., Kelly, A. Theory of multiple fracture of fibrous composites. Journal of Materials Science 8 (1973) 352-362. National Physical Laboratory, Teddington, UK. Received 4 July 1972, accepted 5 September 1972."
date: 2026-08-23
tags: [ack-theory, multiple-cracking, crack-spacing, shear-lag, debonding, energetics, random-fiber-orientation, brittle-matrix, classic]
---

# 섬유 복합재료의 다중균열 이론

## Summary

Aveston-Cooper-Kelly(ACK) 1971 논문회의 원전의 두 가지 한계를 제거한 이론적 후속편(National Physical Laboratory). 첫째, 기존 이론의 '무부착(마찰만 존재)' 가정 대신 매트릭스 균열 후에도 계면 탄성 연속성이 유지되는 부착된 경우(bonded case)를 전단 지연(shear lag) 해석으로 공식화했다. 둘째, 평행 배열 섬유 가정을 벗어나 얇고 유연한 섬유가 2차원·3차원으로 무작위 배향된 경우의 균열간격을 유도했다. 여기서 도출된 균열간격 공식(x′ = σmu·Vm·r/(2τ′))과 에너지 기반 기준균열 변형률 증대 논리는 SHCC/ECC 다중균열 이론의 직계 조상이다.

## Key Contributions

- 부착 경우의 닫힌형 해: 계면 전단응력 τ = (√φ/2)Δσ₀·exp(-√φ·y)로 감쇠하며, φ는 매트릭스 전단강성 Gm과 ln(R/r) 기하항으로 구성. 균열간격 l = σmu·Vm·r/(2τmax)로 무부착 경우의 x′과 동일 형태가 되되 τ′이 τmax로 치환됨.
- 응력-변형률 곡선 예측: 부착 경우에서는 매트릭스 강도의 분산 같은 추가 가정 없이도 완만히 상승하는 경화 곡선이 자연스럽게 나옴(무부착 경우에는 필요했던 가정). 첫균열 이후 하중 제거 시 부착이 유지되면 원점으로 회귀하고, 마찰 계면이면 영구 변형 잔류.
- 박리(debonding) 발생 조건(Eq. 15): Ef/Ec가 4n²·Vf²·r² 항보다 커야 탄성 연속성 유지(n = τu/σmu). 시멘트에 대해 n=1이면 임계 Vf가 탄소 0.36·강 0.38·유리 0.50로 실용 범위를 벗어나므로 실제 FRC에서는 일부 박리가 필연적. n=2·n=4이면 각각 0.09·0.02로 낮아짐.
- 부분 박리 해석: 최소 균열간격 L = l′ + l이 대부분의 실용 조건에서 x′과 같거나 85 % 이상이므로, 간단한 무부착 이론으로도 충분함을 실증 — 계면 전단강도 τu가 σmu보다 훨씬 큰 경우에만 보정 필요.
- 에너지론(제8절): 기준균열 형성 조건 Ec·εmu² ≥ (전단 지연 항) + 4γm·Vm/r 형태로, r이 작아질수록 매트릭스 실효 파괴변형률 εmud가 증대. 탄성 계면이 박리 계면보다 변형률 증대폭이 크려면 τ′ < σmu/3이고 τu ≥ σmu여야 함(Eq. 26-27).
- 무작위 배향 보정: 단위 균열 면적을 가교하는 섬유 수는 평행 대비 2차원 무작위 2/π배, 3차원 무작위 1/2배. 균열간격은 평행 x′ 대비 2차원 (π/2)x′, 3차원 2x′로 증가 — 유연 섬유의 '도르래(pulley) 작용' 덕에 배향 손실이 생각보다 작다.

## Methods

- 수정 전단 지연 해석: 섬유-매트릭스 상대 변위를 육방정 격자 기하(R = r[π/(2√3 Vf)]^(1/2))로 모델링하고 Appendix 1에서 닫힌형 유도.
- 하중 전달 기본식 dF/dy = -(2Vf/r)τ로부터 무부착·부착·부분박리 세 가지 계면 상태의 균열간격 통합 유도.
- 에너지 관점 검증: 적용응력이 한 일 = 복합체 탄성 변형에너지 증가 + 매트릭스 파괴표면공작이라는 등호 조건에서 기준균열 변형률 유도(Appendix 1).
- 무작위 배향은 Appendix 2의 방향 확률 적분(N sinθ 분포 2D, N cosθ 분포 3D)과 유연 섬유 도르래 반력 가정으로 처리.
- 예시 계산: 포틀랜드 시멘트 + 1 vol % 강섬유(Ef = 2×10⁵ MPa), 유리/강/탄소 섬유의 임계 Vf 비교.

## Results

- 균열간격 의존성: 무부착 경우 균열간격은 x′~2x′ 사이(평균 x′에 가까움), 부착 경우 l~2l 사이. 균열 진행 중 추가 변형률은 균열 개수와 무관하게 일정(두 경우 모두).
- 시멘트계 실용 Vf(<5 %)에서는 박리가 불가피하므로 실무 균열간격 예측은 마찰 계면 이론으로 충분하며, 부분 박리 하에서도 최소 균열간격은 x′의 85 % 이상 유지.
- 배향 효과는 Cox 탄성해 확장이나 Allen·Laws의 효율계수가 제시하는 값보다 훨씬 작음 — 강도·인성 목적이라면 2차원 무작위 배치가 완전 평행 배열에 거의 필적.
- 이론의 한계 자각: 섬유 표면 수직·접선 방향 응력 무시, 포아송 효과 미반영 등을 명시하고, 수치해석(파단 섬유 문제)과의 비교에서 전단 지연 해석이 섬유 반경 0.4배 이상 떨어진 영역에서 잘 맞음을 인용.

## Related Notes

- [[li-wu-1992-psh-conditions]] — ACK 이론을 ECC PSH 설계 기준으로 재구성한 원전
- [[wu-1992-snubbing-bundling-crack-spacing]] — snubbing 지수와 번들 유효부착으로 확장한 직계 후속
- [[morton-1976-effect-metal-wires-fracture-brittle-matrix-composites]] — snubbing 현상의 실험적 원전
- [[lin-1999-interface-property-characterization]] — snubbing·계면 파라미터를 닫힌형 σ(δ) 법칙으로 통합
- [[kanda-1998-pva-interface-apparent-strength]] — 이 이론의 계면 전달개념을 PVA 섬유에 정량 적용
- [[kanda-2006-saturated-psh-design-criteria-ecc]] — PSH 성능지수로 발전한 실용 설계 기준
- [[pseudo-strain-hardening-criteria]] — 다중균열 발현 조건 개념 페이지
- [[fiber-bridging-constitutive-law]] — 섬유 가교 구성법칙 개념 페이지
- [[li-2023-ecc-micromechanics-critical-review]] — 이 이론 축을 총괄하는 리뷰 허브

