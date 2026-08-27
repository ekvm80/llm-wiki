---
title: "알칼리 활성 슬래그의 수화에 대한 개선된 화학량론적 모델 / Modified-Stoichiometric Model for Describing Hydration of Alkali-Activated Slag (Abate, Park, Song, Lee & Kim, 2021)"
type: source_note
source: "sources/'abate-2021-modified-stoichiometric-model-for-describing-hydration.pdf'"
citation: "Abate, S.Y., Park, S., Song, K.-I., Lee, B.-Y., Kim, H.-K. 알칼리 활성 슬래그의 수화에 대한 개선된 화학량론적 모델(Modified-stoichiometric model for describing hydration of alkali-activated slag). 한국건설순환자원학회 논문집(J. Recycled Construction Resources) 9(1):1-12, 2021. DOI 10.14190/JRCR.2021.9.1.1. 조선대(김형기 교신저자)·부경대(박솔뫼)·전남대(송금일·이방연) 공동"
date: 2026-08-23
tags: [aas, hydration-model, stoichiometric-model, thermodynamic-modelling, non-evaporable-water, chemical-shrinkage, porosity, user-group]
---

# 알칼리 활성 슬래그(AAS) 수화의 개선된 화학량론적 모델

## Summary

사용자 그룹 논문(전남대 이방연 공저, 교신저자는 조선대 김형기). 규산나트륨 활성 AAS의 최종 수화물 구성을 선형대수만으로 계산하는 개선 화학량론 모델을 제안하고, GEM-Selektor v3.5 + Cemdata18 열역학 평형 계산 및 OPC 결과와 비교했다. Chen-Brouwers 2007 모델을 Myers 등 2014의 C-(N-)A-S-H 서브래티스 고용체 데이터로 갱신한 것이 골자다. 상 부피 구성은 열역학 모델 대비 최대 20 % 이내 차이로 추세가 일치했고, 고정수량은 실험값과 10 % 이내로 잘 맞았으나 화학수축은 30 % 이상 벗어나 지표별 주의를 요한다고 결론지었다.

## Key Contributions

- AAS 화학량론의 현대화: 기존 모델에서 portlandite와 hydrogarnet을 수화물 후보에서 제거(C/S·Fe 함량 현실성+계산 단순화), C-S-H gel과 C-A-H를 통합한 C-(N-)A-S-H 고용체 접근으로 전환.
- 구속조건 도입: Richardson 등 1994 WDX 실험 관계식(S/C와 A/C의 선형 관계)으로 미지수 a(C/S), b(A/S)를 연결해 화학적 부정정 문제를 풀어냄. 계산된 a = 1.07~1.19로 고용체 한계 1.25 이내.
- gel상 물성 보간식: Myers 등 2014의 C-(N-)A-S-H 5종+C-S-H 3종 내성분(end-member) 데이터를 보간함수로 연결해 bulk 고정수량 H_CNASH와 밀도 rho_CNASH를 도출(rho = 0.46 H + 2.24 형태). M-A-H는 hydrotalcite형 층상 이중수산화물(LDH)로 보고 M/A 몰비 5 고정.
- 검증 성적: 고정수량 wne/b 무한대 계산치 0.24~0.28 vs 동일 재료·배합 실험(TG·진공건조·EDTA 반응도, Park 등 2020a) 0.24~0.26 — 10 % 이내 일치. 공극률은 두 모델이 2 %p 이내 일치.
- 한계 정량화: 화학수축은 열역학 모델 약 14 ml/100 g binder(배합 무관) vs 화학량론 7.5~13.0 ml/100 g — Kim 등 2019(DoH 70 %에서 9 ml/100 g, 최종 약 13 추정)와 Thomas 등 2012(13.5~14.5 ml/100 g) 실험값은 열역학 쪽과 일치하므로, 부피 민감 지표에 대한 화학량론 사용은 30 % 이상 오차 경고.
- 열역학 계산의 부가 확인: LDH의 M/A 4·6·8 3종이 대략 8:4:2 비율로 생성되어 평균 M/A 약 5 — 화학량론 가정의 유효성 뒷받침. 열역학 계산에는 미량 portlandite가 나오지만 XRD/TG 실험에서는 확인 안 됨(Park 등 2020a).
- 실용적 위상: 반복 계산 없는 Excel 수준 선형방정식으로 강도·수축·내구성 검토용 현상론 지표 산출 가능 — 열역학 프로그램 접근성 장벽의 대안.

## Methods

- 원료 조성: 국내 G제철 고로 슬래그(석고 첨가 분쇄품, CaO 45.7·SiO2 29.1·Al2O3 11.7·MgO 3.1 %, Park 등 2020b)와 OPC는 XRF 대신 CEM I 42.5R 이론 순수 클링커 조성(Rietveld 분석상 부결정질 불순물 때문). 슬래그 중 황을 황산염(SO3 2.0 %)과 황화물(S 0.3 %)로 구분해 ASTM C114 BaCl2법·CdCl-ZnSO4법으로 각각 정량 — 황화물은 H2S로 안정해 수화물을 만들지 않는다는 점에서 열역학 계산에 필수.
- 배합: 활성화제 Na2SiO3·5H2O(메타규산나트륨 5수염)를 결합재(슬래그+활성화제) 중량비 6 %, 10 %, 14 %의 3단계 x w/b 0.4, 0.5의 2단계 = 6배합. 슬래그와 활성화제 100 % 반응 가정의 최종 수화 상태만 계산(수화 kinetics 아님). w/b 0.4 이하는 유동성 확보 불가로 제외.
- 비교군: OPC 화학량론은 Brouwers 2011(Powers-Brownyard 계승), OPC 열역학 결과는 Park 등 2020b에서 차용. Gehlenite·Akermanite는 반응 거의 없으나 양이 적어 무시하는 통례 적용.
- 산출량: 수화물 몰수 식(1)~(8), 고정수량·화학수축 Vcs·공극률 파이 식(11)~(15). 공극은 연행공기·닫힌 공기를 제외한 이론적 공극(모세관+겔 공극 개념량)임을 명시.

## Results

- 상 구성(AAS, w/b 0.5 예): C-(N-)A-S-H 약 33~36 %, stratlingite 9~16 %(SS 6 %에서 두드러짐), M-A-H 4~8 %, 잔여수용액 17~30 %, void(화학수축분) 13~23 %. AFt는 규산나트륨계에서 실제 생성되지 않아 w/o AFt가 현실에 가깝고 w/ AFt는 비교용.
- w/b는 상 구성에 큰 영향이 없고 규산나트륨량이 지배: SS 증가는 고정수량·공극률·화학수축을 모두 증가. 과잉 활성화제는 장기적으로 이론 공극 팽창→수축 과대·미세균열 가능성(28일 수화도 기준 SS 6 % 배합이 SS 14 %의 1일 수준, Park 등 2020b).
- OPC 대조: AAS의 화학수축(void 비중)이 OPC보다 월등히 크고, OPC 열역학 계산에서는 잔여수 일부가 C-S-H 겔공극으로 구분되는 것이 AAS 계산에는 없는 차이.
- 오차 원인 진단: 여러 수화물 몰비의 단순화에서 기인하며, portlandite 등 열역학 확인 수화물의 추가 편입 시 감소 예상.

## Related Notes

- [[abate-2018-internal-curing-effect-of-raw]] — 같은 연구진(아베테·송금일·이방연·김형기)의 슬래그 시멘트 모르타르 실험편. 본 논문이 이론편이라면 2018 논문은 고정수량 실험 측정 사례
- [[choi-2020-aas-shcc-micromechanics]] — AAS 기반 SHCC 미시역학(사용자 그룹). AAS 수화모델의 복합재 응용 방향
- [[song-2012-aas-carbonation-characteristics]] — AAS 탄산화 특성(사용자 그룹 AAS 축)
- [[shi-2006-alkali-activated-cements-and-concretes]] — AAS 교과서 허브
- [[nematollahi-2017-one-part-shgc-micromechanics]] — AAM 계열 SHGC 미시역학. 활성화제 종류별 수화물 다양성 논점 공유
