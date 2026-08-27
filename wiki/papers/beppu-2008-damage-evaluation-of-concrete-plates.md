---
title: "Damage Evaluation of Concrete Plates by High-Velocity Impact (Beppu et al., 2008)"
type: source_note
source: "sources/Beppu 등 - 2008 - Damage evaluation of concrete plates by high-velocity impact 1.pdf"
citation: "Beppu, M., Miwa, K., Itoh, M., Katayama, M., Ohno, T. Damage evaluation of concrete plates by high-velocity impact. International Journal of Impact Engineering 35(8) (2008) 1419–1426. doi: 10.1016/j.ijimpeng.2008.07.021"
date: 2026-08-22
tags: [impact, high-velocity, concrete, cratering, spalling, perforation, autodyn, strain-rate-effect]
---

# 고속 충돌에 의한 콘크리트판 국부손상 평가

## Summary

신규 개발한 공기포 발사 장치(12 m 가속관, 내경 35 mm)로 50–1000 g 투사체를 100–500 m/s로 발사해 두께 3–13 cm의 콘크리트판(fc 25 N/mm²)에 강체 버섯형 투사체(헤드 직경 25 mm, 50 g)를 충돌시키고, cratering→spalling→perforation의 3가지 국부손상 모드를 실험·수치해석으로 규명한 논문. 고속카메라와 표면 스트레인 게이지로 파괴 과정을 ms 해상도에서 추적하고, AUTODYN 2D 축대칭 해석에서 비선형 Drucker–Prager 항복 기준 + 변형률속도 효과(ε̇ = 10¹ s⁻¹) 조합만이 실험을 재현함을 보였다.

## Key Contributions

1. **파괴 모드 경계의 실험 데이터**: 두께 8 cm 판 기준 충돌속도 210 m/s → cratering(전면 크레이터 직경 약 10 cm + 배면 방사상 균열), 310 m/s → spalling(배면 박리 면적 > 전면 크레이터), 415 m/s → perforation. 관입깊이는 충돌속도에 대략 비례하며, 수정 NDRC 식[2]은 파괴 모드 경계는 잘 예측하지만 관입깊이는 과대평가.
2. **손상 과정의 시간 분해 관찰**: 배면 원형 균열은 충돌 후 0.1–0.2 ms에 형성, 콘크리트 덩어리 이탈(scattering)은 5–15 ms에 발생(두께 9 cm, 420 m/s). 내부 균열은 충격점에서 배면까지 발달. 전면 크레이터링은 0.6 ms 이내에 표면 콘크리트가 분쇄·분말화 완료.
3. **배면 변형률 거동의 정량 증거**: 배면 게이지 최대 압축변형률 1100 με(0.14 ms) 도달 후 인장으로 반전 — 압축 응력파가 자유면에서 인장 반사되어 spalling이 유발됨을 계측으로 확인. 전면 게이지는 압축 영역 진동(~250 με), 충격점 인근 게이지는 즉시 파손.
4. **수치모델 민감도 규명**: 선형 vs 비선형 Drucker–Prager × ε̇ = 10⁻⁵~10² s⁻¹ 조건 탐색 결과, (i) 삼축 고압 하에서 실험과 같은 하강 형상의 비선형 기준이 관입깊이 재현에 필수, (ii) 변형률속도가 클수록 손상이 국지화(인장강도 증가율이 압축보다 커서), 결론적으로 비선형 기준 + ε̇ = 10¹ s⁻¹ 조합이 실험 재현.
5. **cratering/spalling 메커니즘 개념도**: 충격 직후 가압부 소성항복 → 소성영역 급확산(t ≈ 1.13×10⁻³ ms 시작), 압축파 자유면 반사로 배면 인장 파괴(t ≈ 3.49×10⁻² ms), spalling 경로에서는 추가로 대각균열 발생·발달(t ≈ 5.36×10⁻² ms) 후 박리 편이 2–3 m/s로 이탈.

## Methods

- **발사 시스템**: 공기실 + 부스터 + 압축기, 12 m/φ35 mm 가속관, 투사체 질량별 속도 범위 100 g: 250–500 m/s / 1000 g: 100–250 m/s, 운동에너지 3–32 kJ. MC901 나일론 새브(sabot).
- **시험**: 500 × 500 mm 콘크리트판(두께 3–13 cm, fc 25 N/mm², E 25.5 kN/mm², ν 0.15), 충돌속도 200–500 m/s. 고속비디오 카메라로 파괴 과정 촬영, 전·배면에 게이지길이 8 cm 스트레인 게이지(중심에서 50/150 mm 위치, 각 면 4개) 설치.
- **수치해석**: AUTODYN, 2D 축대칭, 4절점 사각 요소(판 12,800개 @ 2.5 × 2.5 mm, 투사체 28개). 선형 상태방정식, 강재는 탄성체(회수 투사체 무손상 확인), 침식 기준 기변형률 2.5(250 %). 검증 대상은 spalling 사례(두께 8 cm, 310 m/s). DIF: 압축은 Fujikake et al.[3], 인장은 Ross et al.[4] 식 채택, 정적 변형률 각각 1.2×10⁻⁵·1.0×10⁻⁷ s⁻¹.

## Results

- **가정 변형률속도별 강도 증가(Table 2)**:

| ε̇ (s⁻¹) | 압축 DIF | 인장 DIF | fc′d (MPa) | ft′d (MPa) |
|---|---|---|---|---|
| 10⁻⁵(정적) | 1.00 | 1.00 | 25.00 | 2.50 |
| 10⁻¹ | 1.26 | 1.70 | 31.50 | 4.25 |
| 10⁰ | 1.44 | 2.44 | 36.00 | 6.10 |
| 10¹ | 1.70 | 4.06 | 42.50 | 10.15 |
| 10² | 2.07 | 8.04 | 51.75 | 20.10 |

- 실제 파괴 과정(1 ms 이내, 변형률 100–2000 με)으로부터 역산한 변형률은 10⁻¹~10² s⁻¹ order.
- 수치해석 결과는 전 시험 사례의 파괴 모드와 관입깊이를 재현(Fig. 19). 스트레인 이력은 전면 게이지 2와 외측 게이지 6·8의 프로파일·최댓값을 합리적으로 재현하나, 배면 게이지 5·7은 균열 위치의 시험-해석 불일치로 차이 큼(점 단위 변형률 비교의 한계 명시).
- 후속 과제로 투사체 형상·강성 영향과 3D 해석 제시.

## Related Notes

- [[pan-2023-dynamic-compressive-shpb-egc]] — SHPB에 의한 EGC 고변형률 압축(재료 점)과 본 논문의 판 구조 국부손상(구조 점)이 동역학 스펙트럼의 양 끝; 변형률속도 효과(DIF) 채택이 공통 논점.
- [[han-2022-egc-impact-cold-temperature]] — ECC/EGC 충격 저항 연구의 plain-concrete 기저 데이터; 섬유 가교가 spalling·scattering 억제로 이어지는 논점 비교 출발점.
- 수정 NDRC 등 경험식 기반 설계와 메커니즘 기반 수치해석의 대비는 UHPC/ECC의 내충격 설계([[abbas-2016-uhpc-mechanical-performance-durability-sustainability]])에서 반복되는 구도.
