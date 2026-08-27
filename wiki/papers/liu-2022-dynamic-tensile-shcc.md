---
title: "Dynamic Tensile Behavior of Strain Hardening Cementitious Composites (Liu et al., 2022)"
type: source_note
source: "sources/liu-2022-dynamic-tensile-behavior-of-strain-hardening.pdf"
citation: "Liu, F., Ding, W., & Qiao, P. (2022). Dynamic tensile behavior of strain hardening cementitious composites: Experimental study and constitutive modeling. Composite Structures, 280, 114885. https://doi.org/10.1016/j.compstruct.2021.114885"
date: 2026-08-24
tags:
  - strain-hardening-cementitious-composites
  - dynamic-tensile-behavior
  - strain-rate-effect
  - split-hopkinson-tension-bar
  - constitutive-model
---

## Summary
인장 홉킨슨 압력봉(Split Hopkinson Tension Bar, SHTB) 및 유압 서보 시험기를 이용하여 중고속 변형률 속도($\dot{\epsilon} = 10^{-4} \sim 100 s^{-1}$) 하에서 변형경화형 시멘트 복합체(SHCC)의 동적 직접 인장 거동을 규명한 연구이다. 변형률 속도 증가에 따른 동적 인장 강도 증가 계수(DIF), 인장 변형률능의 변화, 다중 균열 형성 밀도 및 파괴 파면의 섬유 파단 비율을 고속 카메라와 전자현미경으로 분석하였다. 속도 의존적 섬유 가교 손상 모델을 수립하여 동적 충격 및 폭발 하중 하의 SHCC 구조 해석 프레임워크를 제공하였다.

## Key Contributions
- **초고속 인장 영역($\dot{\epsilon} = 100 s^{-1}$) SHTB 직접 인장 시험 구현**: 펄스 셰이핑 및 시험편 정렬 기술을 적용하여 관성 효과가 보정된 순수 인장 응력-변형률 곡선 획득.
- **인장강도 및 에너지 흡수능력의 극적인 속도 향상 실증**: $\dot{\epsilon} = 85 s^{-1}$에서 동적 인장강도 $DIF = 2.15$, 인장 에너지 흡수 밀도 3.2배 증대.
- **동적 미세균열 전파 및 분기 해석**: 변형률 속도가 높을수록 균열 선단 전파 속도가 재료 Rayleigh 파속에 근접하며 균열 분기 현상이 가속화되어 다중 균열 수가 급증함 규명.

## Methods
- **재료 배합**: 고강도 PE 섬유($V_f = 2.0 \%$), $W/B = 0.20$, 실리카퓸 및 플라이애시 복합 매트릭스.
- **시험 기법**:
  - 준정적 및 중속도: 유압 고속 액추에이터 ($10^{-4}, 10^{-2}, 1.0 s^{-1}$).
  - 고속 충격: 알루미늄 SHTB 장치 ($20 \sim 100 s^{-1}$), DIC 변형률 계측.

## Results
- 변형률 속도별 인장 특성:
  - $10^{-4} s^{-1}$: 인장강도 $8.2 MPa$, 변형률능 $6.8 \%$, 에너지 흡수 $480 kJ/m3$.
  - $1.0 s^{-1}$: 인장강도 $12.4 MPa$ ($DIF = 1.51$), 변형률능 $6.2 \%$, 에너지 흡수 $690 kJ/m3$.
  - $85 s^{-1}$: 인장강도 $17.6 MPa$ ($DIF = 2.15$), 변형률능 $5.4 \%$, 에너지 흡수 $1540 kJ/m3$.

## Related Notes
- [[impact-and-blast-resistance-frcc]] - 고속 충격 및 방폭 설계 시멘트 복합재료
- [[kim-2010-strain-rate-dependent-tensile-ecc]] - 변형률 속도 의존적 인장 거동 비교
