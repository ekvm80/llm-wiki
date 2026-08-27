---
title: "Dynamic Compressive Behavior of High-Strength EGC: Fiber Length Effects via SHPB (Pan et al., 2023)"
type: source_note
source: "sources/1-s2.0-S2352710223022167-main.pdf"
citation: "Pan, H., Xie, Z., Chen, G., Su, J., Zhuo, K., Chen, Z., Lin, J., Feng, C., Guo, Y. Dynamic compressive behavior of high-strength engineered geopolymer composites. Journal of Building Engineering 80 (2023) 108036."
date: 2026-08-22
tags: [egc, shpb, dynamic-compressive, fiber-length, dif, pe-fiber, strain-rate]
---

# 고강도 EGC의 동적 압축 거동과 섬유 길이 효과

## Summary

PE 섬유 길이(6/12/18 mm, 모두 2 vol %)가 EGC의 정적·동적 압축 거동에 미치는 영향을 SHPB(Split Hopkinson Pressure Bar)로 규명. 변형률 속도 78~218 s⁻¹ 범위에서 동적압축강도·DIF·충격인성을 평가하고 CEB-FIP 모델을 섬유 aspect ratio 항으로 수정한 예측식을 제시했다.

## Key Contributions

1. 섬유 길이의 역U자 효과: 동적강도·DIF·충격인성 모두 12 mm에서 최대(동적강도 157.2 MPa, DIF 최대 1.88). 메커니즘 — 6 mm는 정착길이 부족으로 에너지 소산 한계, 18 mm는 낮은 작업성으로 응집·기공 결함 증가.
2. 정적-동적 반전 현상 규명: 정적 압축강도는 섬유 혼입 시 오히려 감소(PE 소수성·화학결합 부재로 계면 약점부 형성 + 기공 증가), 동적 조건에서는 섬유가 강도를 크게 향상(균열 전파 속도가 빨라져 약점부 우회 → 섬유 브리징 작동).
3. 변형률 속도별 파괴 모드 전환: 저속(≤91 s⁻¹)에서는 짧은 섬유(다수·분산 양호)가 약면 브리징에 유리, 고속(≥160 s⁻¹)에서는 긴 섬유의 큰 정착깊이가 파단·인발 에너지 흡수에 유리.
4. DIF 예측 모델 제안: CEB-FIP 모델은 EGC 과대평가, Luo(무섬유 지오폴리머)·Khan(FRGC) 식과도 경향 불일치 → aspect ratio 기반 수정 계수 a 도입한 PE-EGC 전용식(Eq. 8) 제시.
5. EGC 탄성계수가 ECC의 약 절반 수준이라는 관찰 재확인 — 동적 하중 저항 잠재력 시사.

## Methods

FA:GGBS = 7:3, 활성화제 10 M NaOH+sodium silicate(modulus 2.3), W/B 0.25, S/B 0.16(quartz sand D50 126 μm), BaCl2 지연제. 수중양생 28일. SHPB 직경 100 mm, 시험체 Ø100×50 mm, 황동 성형구름으로 응력 평형 확보, 변형률 속도는 균일변형 구간 기울기로 정의.

## Results

- 정적 압축강도 86.7~107 MPa(고강도급), 섬유 길이 증가 시 감소.
- 동적 강도: PE6/12/18 각 143/157/139 MPa(≈195 s⁻¹), 정적 대비 +30~63 %.
- 충격인성(변형률 2 %까지 면적): PE12 최대 1.82 J/cm3.

## Related Notes

- [[han-2022-egc-impact-cold-temperature]]의 저속 낙추 충격과 상보: 여기서는 고변형률 영역을 커버.
- PE 소수성-계면 약점 논리는 [[ranjbar-2016-fiber-matrix-bond-geopolymer]]와 일관되며, [[nematollahi-2017-one-part-pe-shgc-micromechanics]]의 PE 계면 데이터(τ_0만 존재, G_d 없음)로 뒷받침.
- 섬유 길이 최적화 개념은 [[kumar-2022-egc-repair-sand-binder-ratio]]의 PE 18 mm 선택(인장연성 중심)과 대비 — 동적 설계는 12 mm가 유리.
- [[beppu-2008-damage-evaluation-of-concrete-plates]] — 고속 충돌(200–500 m/s)에서 무섬유 콘크리트판의 cratering/spalling/perforation 모드와 DIF 모델(Fujikake·Ross) 정리; 본 노트의 SHPB 재료점 동역학과 판 구조점 국부손상을 잇는 기저 문헌.
