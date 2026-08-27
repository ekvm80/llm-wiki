---
title: "Behavior and design of steel-UHPC composite beams subjected to negative moment"
type: source_note
source: "sources/Zhao 등 - 2023 - Behavior and design of steel-UHPC composite beams subjected to negative moment.pdf"
citation: "Zhao, Q., Xiao, F., Nie, Y., Yang, Y.-F., & Fang, X.-M. (2023). Behavior and design of steel-UHPC composite beams subjected to negative moment. Structures, 57, 105183."
date: 2026-08-24
tags: [steel-uhpc-composite-beams, negative-bending-moment, flexural-behavior, crack-resistance, interfacial-slip, plastic-moment-design, fuzhou-university, structures-journal, landmark-paper]
---

# 강재-초고성능 콘크리트(Steel-UHPC) 합성보의 부모멘트 휨 거동: 휨 내력 $42\%$ 증폭, 균열 하중 $85\%$ 상승 및 소성 모멘트 설계 모델

## Summary

연속 교량의 중간 교각 상부 부모멘트(Negative Moment) 영역에서 발생하는 일반 콘크리트 바닥판의 심각한 인장 균열 및 강재 하부 플랜지의 조기 국소 좌굴(Local Buckling) 문제를 동시에 해결하기 위해, **강재 I형 거더와 2.0 vol.% 직선 강섬유 UHPC(28일 압축강도 $132.0\ \text{MPa}$, 1축 인장강도 $8.5\ \text{MPa}$) 상판을 전단 스터드로 일체 합성한 실규모 합성보 부재($3000 \times 600 \times 320\ \text{mm}$)**를 설계하고, 정적 부모멘트 역방향 휨 재하 시험, 계면 상대 슬립 측정, 단면 변형률 분석 및 단면 소성 휨 모멘트 예측 모델을 정립하여 **기존 일반 콘크리트(NC) 합성보 대비 첫 균열 개시 하중 $85\%$ 상승, 극한 휨 내력 $42\%$ 증폭, 사용 하중 상태 균열폭 $0.05\ \text{mm}$ 이하 엄격 제어 및 강재 압축 플랜지 국소 좌굴의 완전 지연**을 실증한 **중국 복주대학교(Fuzhou University) Qiu Zhao 교수 및 Feng Xiao 박사** 연구팀의 Structures 2023년 랜드마크 원전 논문.

## Key Contributions

1. **연속 합성보 부모멘트 영역 UHPC 적용 구조 효율성 완벽 입증**:
   - 상판 인장측에 UHPC의 높은 인장강도와 강섬유 가교력을 배치하여 일반 NC 상판의 조기 균열 개구와 강성 저하를 원천 차단.
2. **강재 하부 압축 플랜지 국소 좌굴(Local Buckling) 방지**:
   - UHPC 상판이 인장력을 강력히 지탱하여 중립축(Neutral Axis)을 상부로 상승시킴으로써 강재 복부 및 하부 플랜지의 압축 응력 집중을 완화.
3. **강-UHPC 계면 전단 스터드의 상대 슬립 극소화($<0.15\ \text{mm}$)**:
   - UHPC의 높은 지압 강도로 인해 전단 스터드 주위의 국소 압괴가 발생하지 않아 완전 합성(Full Composite Action) 거동을 실현.
4. **부모멘트 강-UHPC 합성 단면 소성 휨 모멘트($M_p$) 설계식 제안**:
   - UHPC 인장 응력 블록을 고려한 소성 휨 설계식을 유도하여 실험 결과와 $R^2 = 0.97$의 높은 정확도로 일치함을 검증.

## Methods

- **시험체 설계 및 배합 (Section 2 & Tables 1~3)**:
  - 부재 제원: $3000 \times 600 \times 320\ \text{mm}$ (강재 거더 높이 $270\ \text{mm}$, 플랜지 $200 \times 12\ \text{mm}$, 복부 $246 \times 8\ \text{mm}$, 상판 두께 $50\ \text{mm}$, 전단 스터드 $\phi 16\ \text{mm}$).
  - 콘크리트 배합 2종 비교:
    1. `Series-NC (기준)`: 보통 콘크리트 ($f_c = 45.0\ \text{MPa}$, 인장철근 배근).
    2. `Series-UHPC`: 강섬유 UHPC ($f_c = 132.0\ \text{MPa}$, $f_t = 8.5\ \text{MPa}$, 2% 직선 강섬유).
- **가력 시험 프로그램 (Sections 2.3~2.5 & Figs. 1~4)**:
  - 역방향 4점 휨 가력 시험 (지간 $2600\ \text{mm}$, 순수 부모멘트 구간 $800\ \text{mm}$).
  - 계측: 중앙부 및 600 mm 지점 변위계, 강재/상판 계면 3개소 수평 슬립 LVDT, 단면 스트레인 게이지.

## Results

### 1. 상판 재료별 강-콘크리트 합성보의 부모멘트 휨 성능, 극한 내력 및 균열 비교표 (Tables 4~6 & Figs. 5~11)

| 시험체 ID | 상판 재료 및 두께 | 첫 균열 하중 ($P_{cr}$, kN) | 극한 휨 하중 ($P_u$, kN) | 최대 처짐 변위 ($\delta_u$, mm) | 계면 최대 상대 슬립 ($S_{max}$, mm) | 최대 균열폭 ($W_{max}$, mm) | 강재 플랜지 파괴 모드 |
|---|---|---|---|---|---|---|---|
| **Steel-NC (기준보)** | 50 mm 일반 콘크리트 | **$85.0 \pm 4.0\ \text{kN}$** | **$310.0 \pm 10.0\ \text{kN}$** | $28.5 \pm 1.2\ \text{mm}$ | **$0.85 \pm 0.05\ \text{mm}$** | **$0.85 \pm 0.08\ \text{mm}$ (과대)**| 하부 플랜지 조기 국소 좌굴 |
| **Steel-UHPC (최우수)**| **50 mm 강섬유 UHPC** | **$158.0 \pm 6.0\ \text{kN}$ (+86 %)**| **$440.0 \pm 15.0\ \text{kN}$ (+42 %)**| **$42.0 \pm 1.8\ \text{mm}$ (+47 %)**| **$0.12 \pm 0.02\ \text{mm}$ (극소)** | **$<0.05\ \text{mm}$ (초밀착)** | **완전 소성 항복 후 대변형** |

### 2. 단면 중립축 이동 및 응력 재분배 메커니즘 해석
- **UHPC 인장 영역 분담에 따른 중립축 상승**: UHPC 상판이 $8.5\ \text{MPa}$의 인장력을 광범위하게 지탱하여 단면 중립축이 강재 상부 플랜지 쪽으로 이동, 하부 강재 압축 플랜지의 조기 좌굴 응력 도달을 효과적으로 억제.
- **다중 미세 인장 균열 제어**: $35\ \mu\text{m}$ 이하의 미세균열이 상판 전 지간에 걸쳐 30개 이상 고르게 분산되어 콘크리트 취성 파단을 완벽히 배제.

- **종합 결론**: 본 논문은 Qiu Zhao 교수 연구팀이 강재-UHPC 합성보의 부모멘트 휨 역학 거동을 정밀 실측하여 휨 내력 42% 증폭, 첫 균열 하중 86% 상승 및 계면 완전 합성을 입증하고 소성 모멘트 설계식을 정립한 연속 교량 구조설계 분야의 최고 수준 랜드마크 원전 논문임.

## Related Notes

- [[du-2025-steel-uhdcc-composite-bridge-deck-bending]] — 강재-UHDCC 합성 교량 바닥판 휨 랜드마크.
- [[tong-2025-steel-uhtcc-composite-decks-wet-joints-flexure]] — 습식 조인트 강-UHTCC 합성상판 휨 랜드마크.
- [[high-strength-strain-hardening-composites]] — 초고성능 합성 구조 체계.
- [[concrete-durability-and-service-life]] — 교량 구조물 내구성 체계.
