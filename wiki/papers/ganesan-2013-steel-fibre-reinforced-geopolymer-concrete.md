---
title: "Engineering Properties of Steel Fibre Reinforced Geopolymer Concrete (Ganesan et al., 2013)"
type: source_note
source: "sources/acc0104003.pdf"
citation: "Ganesan, N., Indira, P.V., Santhakumar, A. Engineering properties of steel fibre reinforced geopolymer concrete. Advances in Concrete Construction 1(4) (2013) 305-318. doi: 10.12989/acc2013.1.4.305"
date: 2026-08-23
tags: [geopolymer-concrete, steel-fiber, fly-ash, mechanical-properties, regression-model, alkali-activated]
---

# 강섬유 보강 지오폴리머 콘크리트의 공학적 물성

## Summary

플라이애시 기반 지오폴리머 콘크리트(GPC)에 크립프 강섬유를 0~1 vol % 투입해 압축강도, 쪼갬인장강도, 휨파괴계수, 탄성계수, 포아송비를 인도 IS 규격 시험으로 정량화하고, 섬유계수 F=(lf/df)Vf를 도입한 회귀 강도식들을 제안한 실험 연구(NIT Calicut). M40 등급 배합에서 1 % 섬유 투입 시 압축강도 개선은 8.51 %에 그치지만 쪼갬인장 +61.63 %, 탄성계수 +64.92 %, 포아송비 +50 %로 인장·강성 지표가 크게 향상됨. 파일명 acc0104003만으로는 주제를 알 수 없어 본문에서 서지를 확정한 사례.

## Key Contributions

- 섬유계수 F=(lf/df)Vf 기반 설계식 4종: fcf = 45.37 + 3.852 Vf(압축), fct = 0.338 F√fc + 2.764(쪼갬인장), fcr = 0.218 F√fc + 5.054(휨파괴계수), Ec(×10^4) = 0.28 F√fc + 2.149(탄성계수). 예측오차가 각각 약 1.06 %, 0.003 %, 0.002 %, 0.002 % 이내.
- Vf=0 외삽값의 규격 비교: GPC의 fcr = 0.75√fc(IS 456의 OPC 값 0.7과 유사), Ec = 3190√fc(IS 456의 OPC 값 5000보다 현저히 낮음 — GPC 배합의 낮은 골재 부피분율 때문으로 해석).
- OPC 강섬유 콘크리트의 지견(Khaloo & Kim 1996, Song & Hwang 2004)이 지오폴리머 계에서도 재현됨을 확인: 섬유는 압축강도보다 인장·휨 거동을 지배적으로 개선.

## Methods

- 원재료(kg/m³): Mettur 화력발전소 Class F 플라이애시 639, 잔골재 285, 굵은골재(최대 20 mm) 975, 규산나트륨 용액 180, 수산화나트륨 14 몰 용액 72, 추가수 53, 나프탈렌계 고성능감수제 Conplast SP430 7.67.
- 활성화제: Na2SiO3/NaOH 질량비 2.5, 활성화제 용액/플라이애시 비 0.39(Rangan 2008 절차, Mustafa 등 2012 참조). 알칼리 용액은 사용 전날 미리 혼합.
- 섬유: 크립프 강섬유, 길이 30 mm, 직경 0.45 mm, 인장강도 800 MPa, 아스펙트비 66. Vf = 0/0.25/0.5/0.75/1 %.
- 양생: 성형 후 3일 정치, 60 °C 증기양생 24 h.
- 시험: 150 mm 입방체 압축(IS 516-1959), 150×300 mm 원주형 쪼갬인장(IS 5816-1999), 100×100×500 mm 프리즘 3등분점 휨(IS 516), 원주형 단축압축에 LVDT+측방 신율계로 Ec와 포아송비. 특성별 15개씩 총 75개 시편, 결과는 3개 평균.

## Results

- 신선한 콘크리트: 슬럼프 123 mm(Vf=0) → 77 mm(1 %), Vee-Bee 시간 7.9 → 20.3 s — 섬유량 증가에 따라 작업성이 크게 저하(감수제로 슬럼프 보정).
- 경화 물성(28 d): fc 45.37 → 49.23 MPa(+8.51 %), fct 2.58 → 4.17 MPa(+61.63 %), fcr 5.00 → 6.20 MPa(+24.00 %), Ec 2.15 → 3.55 ×10^4 MPa(+64.92 %), 포아송비 0.14 → 0.21(+50.00 %).
- 개선폭은 대부분 Vf에 대해 단조 증가하며, 압축강도만 0.25 %에서 이미 +3.22 %로 완만하게 시작해 1 %에서 +8.51 %로 정체되는 양상.
- 포아송비 0.21은 일반 콘크리트 설계 표준값 0.2를 상회 — 설계식에 반영할 여지 제시.

## Related Notes

- [[kim-2007-slag-ecc-tensile-fiber-dispersion]] — 알칼리 활성화 슬래그 매트릭스 ECC(사용자 그룹)
- [[song-2014-aas-carbonation-amse]] — 알칼리 활성화 재료 내구성 축
- [[lee-2015-pe-cementless-composite-tensile]] — 무시멘트 시멘트질 복합재 인장
- [[nematollahi-2017-one-part-shgc-micromechanics]] — 지오폴리머 매트릭스 SHCC 미시역학(ECC로의 확장점)
- [[fiber-bridging-constitutive-law]] — 섬유의 균열 가교 응력 전달 일반 원리
- [[bagheri-2019-ann-gp-boroaluminosilicate-geopolymer]] — 지오폴리머 압축강도 ML 예측(ANN+GP)
