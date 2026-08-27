---
title: "Fiber-Bridging Constitutive Law of Engineered Cementitious Composites (Yang, Wang, Yang & Li, 2008)"
type: source_note
source: "sources/Yang-2008-Fiber-bridging constitutive law of e.pdf"
citation: "Yang, E.-H., Wang, S., Yang, Y., Li, V.C. Fiber-Bridging Constitutive Law of Engineered Cementitious Composites. Journal of Advanced Concrete Technology 6(1), 181-193, 2008."
date: 2026-08-23
tags: [ecc, fiber-bridging, constitutive-law, micromechanics, sigma-delta-curve, crack-width-control]
---

# ECC 섬유 브리징 구성법칙 σ(δ)의 해석 모델과 실험 검증

## Summary

ECC의 섬유 브리징 구성법칙 σ(δ)를 재료 구성 파라미터에서 출발해 해석적으로 예측하고 노치 쿠폰 인장시험으로 검증한 논문. Lin 등 1999년 단순화 모델을 기반으로 세 가지 신규 섬유/매트릭스 상호작용 메커니즘 — 양방향 탈결합·인발(two-way debonding/pullout), 매트릭스 미소박리(matrix micro-spalling), Cook-Gordon 효과 — 을 추가해 특히 균열개구변위 예측 정확도를 끌어올렸다. [[fiber-bridging-constitutive-law]] 개념 페이지 계보표의 2008년 항목이 바로 이 논문이다.

## Key Contributions

1. **양방향 인발 모델링**: slip-hardening 계면(PVA)에서는 짧은 매입측 완전탈결합 후에도 인발하중이 계속 상승하므로 긴 매입측이 후속 탈결합·인발에 참여한다. 섬유 양측의 슬립 기여 δL+δS=δ를 하중 평형으로 배분(Eq. 8~16)해 균열개구 과소예측을 해소한 주역 메커니즘이다.
2. **매트릭스 미소박리 반경험식**: 섬유 출구점 국부 파괴로 생기는 박리 크기 s를 외력에 비례·매트릭스 인장강도와 섬유 지름에 반비례하는 형태(Eq. 17, 박리계수 k=500 보정)로 제안. 예측 박리 0~28 μm가 관측 최대 30 μm와 일치. 박리는 실효 배향각을 줄여 섬유 파단을 늦추고 첨두 브리징 응력을 높인다.
3. **Cook-Gordon 효과의 σ(δ) 편입**: 균열 선단 앞의 수직 응력에 의한 조기 계면 박리가 자유 섬유구간 α를 늘려 추가 개구 δcg=4αP/(π d_f²E_f)를 만든다. 친수성 PVA는 α=2d_f(78 μm)로 영향이 작지만, 소수성 PE·PP계에서는 클 것으로 전망.
4. **실험 검증 프로토콜**: 섬유체적을 0.5·0.1 vol.%로 낮춰 단일균열 조건을 만들고 깊은 측면 노치(6 mm)+얕은 표면 노치(2 mm) 쿠폰을 변형제어 인장해 σ(δ) 곡선을 직접 계측 — 모델이 평균 거동을 잘 재현.
5. **최약 평면 지배 논리**: 2 vol.% 예측 첨두 6.7 MPa@130 μm와 합성재 인장실측(약 5 MPa@평균 60 μm)의 격차를 균열면별 유효 섬유량 ±25 % 산포로 설명. σ=5 MPa 수준에서 개구변위 범위 37~133 μm, 평균 62 μm가 관측값 60 μm와 부합 — 균열폭 자기제어 메커니즘의 미시역학적 해석을 제공.

## Methods

- 재료: PVA-ECC M45(필드 표준 배합) — 시멘트 571, 플라이애시 685, 규사(평균 110 μm) 456, 물 332 kg/m³, 폴리카르본산계 고성능감수제 6.8 kg/m³, PVA 섬유(12 mm, 39 μm, 인장강도 1600 MPa, 밀도 1300 kg/m³, 유제 코팅 1.2 wt%) 26 kg/m³(2 vol%). σ(δ) 계측용으로 0.5·0.1 vol.% 변형 배합 사용.
- 시험: 쿠폰 90 × 76 × 13 mm, 다이아몬드 톱 노치, 서보유압 변형제어 0.0001 mm/s(준정적), 5 mm 게이지 신율계 2개로 균열직후 변형 제거한 균열개구변위 추출. 28 d 기건 양생(50±5 % RH, 23±2 °C).
- 마이크로파라미터 결정: 계면 τ0·Gd·β는 단섬유 인발시험(Redon 등 2001), 겉보기 섬유강도 σfu=1060 MPa과 강도저감계수 f'=0.33은 단섬유 in-situ 강도시험(Kanda & Li 1998), snubbing 계수 f=0.2는 Wu 2001 범위(0.2~0.8)의 하한(오일 코팅 1.2 % 반영), Em=20 GPa는 인장 초기기울기, σm=5 MPa는 웨지 스플리팅 시험 역해석, Cook-Gordon 파라미터 α=78 μm는 Bentur 제안 하한 2d_f 채택.
- 적분: 섬유 위치 z·배향 φ 확률밀도함수 평균(Eq. 21~25). 쿠폰 두께 13 mm가 섬유 길이와 비슷해 2차원 랜덤 배향 p(φ)=2/π 가정(3차원은 p(φ)=sin φ).

## Results

- 모델 입력 파라미터: d_f=39 μm, L_f=12 mm, E_f=22 GPa, σfu=1060 MPa, f=0.2, f'=0.33, α=78 μm, Em=20 GPa, σm=5 MPa, k=500.
- 계면 물성의 섬유체적 의존(공기량 증가로 조직이 느슨해져서 결합 저하):

| 매트릭스 | τ0 (MPa) | Gd (J/m²) | β |
|---|---|---|---|
| 0.1 vol.% PVA | 1.91 | 1.24 | 0.63 |
| 0.5 vol.% PVA | 1.58 | 1.13 | 0.60 |
| 2 vol.% PVA | 1.31 | 1.08 | 0.58 |

- 메커니즘별 분해(Vf=2 vol.% 예측): 1-way(Lin 등 1999) 6.2 MPa @93 μm → +양방향 6.3 MPa @130 μm → +미소박리 6.7 MPa @131 μm → +Cook-Gordon 6.7 MPa @133 μm. 양방향 인발이 개구변위 예측 정확도를, 미소박리가 첨두응력을 담당하고 Cook-Gordon은 PVA에서 무시 가능.
- 검증: Vf=0.1·0.5 vol.% 실험 σ(δ) 산포(첨두응력은 시편 간 편차가 크나 대응 개구변위는 거의 일정 — 섬유 수가 많으면 응력은 높아지지만 평균 스프링 강성이 커서 개구가 묶임) 속에서 모델 곡선이 평균 거동과 잘 일치.

## Related Notes

- [[fiber-bridging-constitutive-law]] — 본 논문이 정립한 σ(δ) 구성법칙의 개념 페이지(계보 2008 항목)
- [[pseudo-strain-hardening-criteria]] — J'tip ≤ J'b 에너지 기준과 σc<σ0 강도 기준에 σ(δ) 곱셈기로 입력되는 관계
- [[lin-1999-interface-property-characterization]] — 개선 대상이 된 1-way 단순화 모델·계면 파라미터(Gd·τ0·β) 원전
- [[wu-1992-snubbing-bundling-crack-spacing]] — snubbing 계수 f·균열간격 이론 축의 원전 계보
- [[kanda-2006-saturated-psh-design-criteria-ecc]] — J'b/Jtip 등 PSH 성능지수의 실용화 확장
- [[lu-2017-fiber-orientation-thickness]] — 본 논문의 2D/3D 배향 분포 가정을 부재 두께 관점에서 확장
- [[qiu-2016-fatigue-dependent-fiber-bridging-model]] — 정적 σ(δ)에 피로 열화 축을 추가한 후속 브리징 모델

