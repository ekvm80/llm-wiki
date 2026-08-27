---
title: "A fundamental method for prediction of failure of SHCC without prior information (Das & Leung, 2020)"
type: source_note
source: "sources/CKY leung_a fundamental prediction of failure of SHCC.pdf"
citation: "Das, A.K., Leung, C.K.Y. A fundamental method for prediction of failure of strain hardening cementitious composites without prior information. Cement and Concrete Composites 114 (2020) 103745."
date: 2026-08-22
tags: [failure-prediction, finite-time-singularity, acoustic-emission, power-spectral-entropy, shcc, structural-health-monitoring, monte-carlo]
---

# 사전 정보 없는 SHCC 파괴 시점 예측(유한시간 특이점 기반)

## Summary

SHCC 구조의 잔존 사용수명(MRSL = EFT − COC, 실험실 데이터나 배합 정보 없이 센서 데이터만으로 예측하는 최초의 방법론. 손상역학 σ = E(1−D)ε로부터 유한시간 특이점(finite-time singularity) ε ∝ [1/(t_c − t)]^m을 유도하고, 이것이 Voight 경험칙(d²D/dε² = K·(dD/dε)^m — 화산 분출·사면 붕괴 예측에 쓰이던 식)과 동일 형태임을 보인 뒤, 측정 가능한 매개변수로 기저를 바꿔 역속도(inverse rate) 직선 외삽으로 파괴 시점을 얻는다. AE 파형의 전력스펙트럼 엔트로피(PSE)를 매개변수로 쓰면 정규 조건에서 파괴시점 편차가 통상 5 % 미만이고, 불확실성·부분데이터·비선형 가변진폭 하중에서도 강건함을 Monte Carlo 시뮬레이션으로 입증했다.

## Key Contributions

1. **유한시간 특이점 → Voight 경험칙의 SHCC 적용 정당화**: 대표체적(RVE) 손상역학에서 출발해 (1−D) ∝ (ε(t_c) − ε)^m의 멱법칙이 Li의 미시역학 수치모델과 실제 인장시험의 접선강성 저하 곡선 형태를 초기 국면 이후 재현함을 보이고, 이중미분으로 d²D/dε² = K(dD/dε)^m을 도출. 지수 m < 2 오목 / m = 2 선형 / m > 2 볼록의 세 실패경로가 모두 역속도 감소로 수렴.
2. **매개변수 치환과 예측식**: 파괴 직전 역변화율 → 0 조건으로 적분하여 ε(t_c) = ε + (dD/dε)^(1−m)/(K(m−1)), 손상에 양의 상관된 현장 측정량 P로 치환하면 t_c = t + (dP/dt)^(1−m)/(K(m−1)). P로는 thresholding·필터링 독립적이고 SNR에 둔감한 PSE(AE 전력스펙트럼 엔트로피, S_xx의 −Σ S log₂S)를 선택.
3. **학습 데이터 밀도 제어 아이디어**: 모델이 성립하지 않는 초기 국면이 학습을 오염시키므로, 능동센서의 질의 주기를 공학적으로 낮추거나 AE처럼 초기에 사건 밀도가 낮은 수동 감지를 써서 자연히 초기 데이터 밀도를 낮추는 실무 전략 제시.
4. **확률론적 프레임**: 균열 과정의 고유 확률성을 P = p(γ)로 모델링하고 Monte Carlo로 파괴시점 분포를 산출. 결정론적 의사결정값이 필요하면 평균 − 표준편차(보수적 추정, 예: mean 2.17 × 10³ s − σ 4.02 × 10² s = 1.77 × 10³ s)를 사용.
5. **DIC 기반 파괴 판정의 객관화**: 응력-변형률 곡선 육안 판독의 모호성(국부화 후에도 작은 stress jump 잔존)을 지적하고, 균열면적 CA와 그것을 변형률 초과분으로 가중한 TCA(TCA 급증 = 파괴)를 ground truth로 정의(Eq. 14–15, 모르타르 인장한계 ~0.01 % 문턱).
6. **R-SHCC 비선형 하중 확장**: 강재보강 SHCC 보(길이 1 m, 지간 900 mm/재하점 300 mm)의 가변진폭 비주기 4점 휨 피로에서 ~5500 s에 재료파괴(국부화, 부재 내력은 철근으로 응력 재분배되어 유지)를 InvPSE 기반 예측이 잘 재현 — 하중 곡선이 비선형이어도 손상이 시간 누적형이면 방법론 유효.
7. **크리프로의 이론적 확장**: SHCC 인장크리프 속도 ε̇_n = k·σ_n^p(0.3/0.5/0.7× 인장강도 준거 문헌 데이터에서 멱함수 확인)가 양의 되먹임 형식이라 본 방법론과 결합 가능 — 장기 지속하중 상황까지 커버 가능성 제시.

## Methods

시험편 350 × 25 × 8 mm 인장 쿠폰 2배합: Mix-1(FA 0.8 : 시멘트 CEM I 42.5 0.18 : 실리카퓸 0.02 : 규사 최대 0.16 mm 0.2 : 물 0.22 : SP 0.003 중량비, PVA Kuraray K-II REC15 1.5/2/2.5 vol %), Mix-2(FA 0.65 : 바인더(PC+FA) 0.35 : rock fines 최대 2.36 mm 0.3 : 물 0.3 : SP 0.004, PVA 2 %). 수중 28일 이상 양생. Lloyd-Ametek EZ50(50 kN) 0.1 mm/min 변위제어, LVDT 150 mm 게이지, AE 센서 2개(중심에서 ±4 cm), DIC(Ncorr 오픈소스, Canon EOS D6 II 30 s 간격 자동촬영). PSE 역속도는 10 s 등간격 창에서 계산, m = 2(지구재료의 통상값)로 피팅하고 역속도 곡선이 X축과 만나는 점을 예측 파괴시점으로 정의. 검증 지표 NE = |예측 − 실제|/총시험시간.

## Results

- **정규 조건**: 시험시간 군집별 평균 NE — ≤500 s: 0.103, 500–1000 s: 0.041, 1000–1500 s: 0.034, 1500–2000 s: 0.037, 2000–2500 s: 0.023, ≥2500 s: 0.029. 즉 통상 <5 % 오차, 총 파괴시간 의존성 없음(변형률 용량 3 % 미만~이상 폭넓은 범위에서 일반화). 최단 시험군의 열화는 학습점 부족 + 짧은 시간에서의 NE 민감도 때문.
- **확률 안정성**: 관측치 위에 추가로 불확실성 U(실험 대비 2배 수준)를 얹은 worst case에서 normal/lognormal/uniform 3종 모두 최빈값의 NE < 0.05. lognormal이 극단 사건이 많아 분산 최대.
- **부분 데이터**(Case A 초반만 감시 / B 손상 감지 후 감시 / C 고정창 이동): ±0.1 NE 구간 내 확률 평균 ~0.86, 대부분 분포 전체가 ±0.1 NE 내. Case A는 초기국면(m = 2에서 위로 볼록, concave up) 이탈로 과소예측, Case B는 말기국면(m = 2에서 아래로 볼록, convex down) 이탈로 과대예측 — 창 크기가 커질수록 왜곡 국면 영향이 희석됨.
- **R-SHCC 보**: 가변진폭 비주기 하중에서 TCA 급증(~5500 s)과 예측 분포가 부합. 개별 InvPSE 점이 진폭 변화에 요동쳐도 충분히 큰 시간창이 평균화.

## Related Notes

- [[pseudo-strain-hardening-criteria]] — '파괴'의 정의(다중균열 종단과 균열 국부화)가 PSH 소진과 직결. PSE가 포화 다중균열 국면 vs 국부화 국면의 운용 regime 식별자로 개발된 맥락도 동일 저자 선행작.
- [[li-wu-1992-psh-conditions]] — 서두에 인용되는 SHCC 미시역학 설계 기반(Li-Leung 1992 다중균열 이론) 원전. 본 논문의 미시역학 시뮬레이션 비교 기준도 Li 계열 모델.
- [[qiu-2016-fatigue-dependent-fiber-bridging-model]] — 반복하중에 의한 브리징 능력 열화를 미시역학으로, 본 논문은 그 결과로 나타나는 거동 열화를 센서 시계열로 다루는 상보 쌍.
- [[monteiro-2017-carbon-black-traffic-sensor]] — 시멘트계 자기감지 매개변수(PSE vs 전기저항)로 구조 상태를 읽는다는 점에서 같은 sensing-for-infrastructure 축.
