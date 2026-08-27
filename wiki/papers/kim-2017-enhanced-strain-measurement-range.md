---
title: "Enhanced Strain Measurement Range of an FBG Sensor Embedded in Seven-Wire Steel Strands (Kim et al., 2017, Sensors)"
type: source_note
source: "sources/Kim-2017-Enhanced strain measurement range of.pdf"
citation: "Kim, J.-M., Kim, C.-M., Choi, S.-Y., Lee, B.Y. Enhanced strain measurement range of an FBG sensor embedded in seven-wire steel strands. Sensors 17(7) (2017) 1654. doi:10.3390/s17071654"
date: 2026-08-22
tags: [fbg, smart-strand, prestressing, structural-health-monitoring, polyimide]
---

# 강연선 매입 FBG 센서의 변형률 측정 범위 확대

## Summary

7연선 강연선의 king wire를 중공관으로 치환해 FBG 센서를 매입하는 스마트 스트랜드 기술에서, 매입 센서의 최대 변형률 측정 범위가 강재 항복변형률(약 1 %)에 못 미치는 문제(기존 약 0.65 %)를 재료·구조 양면에서 해결한 논문(전남대 이방연 교신저자). 광섬유 리코팅을 acrylate에서 polyimide로 바꾸고 FBG 센서를 polyimide 보호 튜브로 감싸 에폭시로 통합하는 방식을 제안하여, 평균 최대 측정 범위 1.73 %(무보호 대비 +88 %)를 달성했고 전 시편이 항복변형률을 초과했으며 최대 2.36 %까지 계측 가능함을 검증했다.

## Key Contributions

1. **측정 범위 저하의 원인 규명**: king wire 관과 FBG 센서를 통합하는 에폭시 접착층에 균열이 생기고 이것이 광섬유 국부 손상으로 이어지는 것이 매입 시 측정 범위 급감의 주원인이라고 특정. 실제로 스트랜드에 매입하면 bare 광섬유 대비 파괴변형률이 OF-A(acrylate) 86 %, OF-P(polyimide) 81 % 감소.
2. **리코팅 재료 효과 정량화**: polyimide(인장강도 102 MPa, 탄성계수 4.28 GPa, 밀도 1.48 g/cm³) 리코팅 광섬유의 파괴변형률은 acrylate(10.7 MPa, 47.4 MPa, 0.94 g/cm³) 대비 결론부 기준 0.79 % vs 0.45 %(75 % 증가, 본문 3.1절에는 2.3배 서술이 병존). 스트랜드 매입 상태에서도 OF-P가 OF-A보다 76 % 높은 파괴변형률 기록.
3. **polyimide 보호 튜브 설계**: 외경 1.23 mm / 내경 1.13 mm polyimide 튜브(인장강도 231 MPa, 탄성계수 2.50 GPa, 23 °C 제조사 값)로 FBG 센서를 보호하고, 점도 150 cPs·Shore D 경도 85·lap shear 강도 14 MPa 에폭시로 센서-튜브-king wire 관을 통합. 결과적으로 FBG-P-NP(무튜브) 평균 0.92 % → FBG-P-PP(튜브) 평균 1.73 %(+88 %).
4. **PSC 모니터링 실용성 확보**: PSC 교량 설계변형률(항복강도의 90 % 사용, 약 0.9 %)과 항복변형률(약 1 %)을 넘는 구간까지 계측이 가능해져, 항복 이후 과잉하중 이력 추적이 가능한 스마트 스트랜드 완성.

## Methods

- FBG 원리: Bragg 파장 λ_B = 2n_eff·Λ, 반사 파장 변화율 Δλ/λ_B = (1−P_e)Δε + (α+ξ)ΔT. 선행 연구([23])의 캘리브레이션 계수 사용 — P_e = 0.22, α = 1.20×10⁻⁵/°C, ξ = 5.67×10⁻⁶/°C.
- 스마트 스트랜드 구조: king wire를 스테인리스 이음매 없는 관(외경 5.3 mm, 내경 1.9 mm)으로 치환하고 직경 0.25 mm 광섬유를 에폭시 충전으로 고정.
- 인장시험: 스트랜드 길이 1.4 m, 만능시험기 하중제어 20.0 kN/min로 210 kN까지 재하. bare 광섬유 인장은 0.6 mm/min 변위제어, 재료당 6시편.
- 검증 시편: FBG-P-NP(normal, 무튜브)와 FBG-P-PP(proposed, polyimide 튜브) 스트랜드 각각 총 7시편.

## Results

| 형태 | 최대 변형률 측정 범위(평균) |
|---|---|
| Bare 광섬유 — acrylate 리코팅 | 0.45 % |
| Bare 광섬유 — polyimide 리코팅 | 0.79 % |
| 스트랜드 매입 FBG-P-NP(무튜브) | 0.92 %(항복변형률 약 1 % 미달) |
| 스트랜드 매입 FBG-P-PP(polyimide 튜브) | 1.73 %(FBG-P-NP 대비 +88 %) |

- FBG-P-PP 전 시편이 항복변형률 1.0 %를 초과했고, 계측 최대값은 2.36 %.
- 기존 문헌의 매입 FBG 측정 한계는 약 0.65 %(6517.16 με)였음 — 본 기법은 이를 2.7배 수준으로 확장.

## Related Notes

- [[kim-2007-fbg-smart-tendon]] — 동일 계열의 원기술: 텐던(공심 king wire)에 FBG를 매입해 프리스트레스 도입력을 계측한 스마트 텐던(본문 참고문헌 21). 본 논문은 그 후속으로 매입 센서의 측정 범위 한계를 다룸.
- [[iten-2012-strain-sensing-cables]] — 광섬유 센서 보호법(연질 플라스틱 인필 + 경질 외튜브 2중 보호로 측정 범위 개선)을 정리한 참고문헌 [25]. polyimide 튜브 보호 개념과 같은 문제 의식.
- [[li-2024-uhpc-rc-beam-acoustic-emission]] — AE 기반 손상 모니터링과 FBG 변형률 계측의 대응 기술축
