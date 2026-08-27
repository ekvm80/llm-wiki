---
title: "EGC with Low-Activity Fly Ash and Hybrid Fibers: Experiment + Micromechanical Design (Artyk et al., 2024)"
type: source_note
source: "sources/1-s2.0-S0950061824009012-main.pdf"
citation: "Artyk, Z., Kuan, Y., Ogwumeh, C.M., Shon, C.-S., Zhang, D., Kim, J. Development of engineered geopolymer composite with low-activity fly ash and hybrid fibers: Experiment and micromechanical modeling. Construction and Building Materials 422 (2024) 135760."
date: 2026-08-22
tags: [egc, low-activity-fly-ash, hybrid-fiber, pva, pp, steel-fiber, micromechanics, thermal-conductivity, retrofit]
---

# 저활성 플라이애시 EGC + 하이브리드 섬유: 실험과 미시역학 설계

## Summary

ASTM 규격 미달 저활성 플라이애시(카자흐스탄 현지산, 325번 체 통과 47 %, 강도활성지수 <75 %)와 GGBFS(1:1)로 EGC를 개발하고 PVA·PP·강섬유 하이브리드(총 2 vol %) 효과를 평가. 무보강 조적조 보수용 경량·단열·연성 복합재가 목표. 단일균열 인장 시험 기반 미시역학 모델 파라미터를 보정해 하이브리드 설계도표를 제시했다.

## Key Contributions

1. 저활성 플라이애시로도 인장연화 달성: 적절한 섬유 조합 시 압축 20 MPa 초과, 인장변형률 2 % 초과, 열전도도 0.25 W/mK 미만 동시 충족.
2. 섬유 하이브리드 효과: PVA+PP 조합이 시너지로 압축강도 최대(25 MPa, PVA 단일 20.8 MPa 초과). PVA 단일 인장강도 2.1 MPa·변형률 2.72 %, 1.5 % PVA+0.5 % PP가 이와 동등(2.1 MPa·2.68 %) — PVA 25 % 절감 가능. PP·강섬유 단독은 PSH_S < 1.0으로 취성 파괴.
3. PSH 지수의 재평가: 에너지 기준 PSH_E ≥ 2.7은 저활성 플라이애시 EGC에서 판별력 부족(K_m이 낮아 PSH_E > 5여도 연성 없음). 강도 기준 PSH_S ≥ 1.3이 유효 지표. PSH 지수-변형능력 선형 상관식 제시(R2 = 0.85/0.88).
4. 미시역학 파라미터 보정값(Table 7): PVA G_d=0.73 J/m2·τ_0=1.05 MPa·β=0.58, PP τ_0=0.24 MPa, 강섬유 τ_0=2.1 MPa·β=0.75 등 — 저활성 플라이애시 지오폴리머 계면 데이터로 ECC 문헌값 범위와 비교 제공.
5. 하이브리드 중첩(superposition) 모델 검증: 단일섬유 보정 파라미터의 체적비 중첩으로 하이브리드 σ_B(δ) 예측, 첨두 전 응답은 잘 일치.
6. 설계도표: 목표 변형능력 1.5 % 달성에 필요한 최소 PVA 함량 — PP 병용 0.84 %, 강섬유 병용 1.04 %, PP+강 병용 0.95 %.

## Methods

배합: FA:GGBFS 0.5:0.5, 활성화제/바인더 0.35(Na2SiO3/NaOH 2.5, 12 M), W/B 0.38, S/B 0.36, 감수제 1 %. 상온 밀폐 24 h 후 기건양생. 시험: 플로우테이블, 건조수축(ASTM C490), 압축(원주), 직접인장(dog-bone, 게이지 100 mm), 단일균열 인장, 3점 휨(K_m 산출), 열전도도. 파라미터 보정은 Dakota Gauss-Newton(quoFEM).

## Results

- 밀도 1600~1700 kg/m3(경량 콘크리트 기준 1850 이하).
- 건조수축: 매트릭스 35일 약 3 %(무조골재 문제), PVA 혼입 시 0.8 %로 저감. PP·강섬유는 효과 작음(약 2 %).
- 매트릭스는 7→28일 압축강도 역행(수축균열), 섬유 혼입이 이를 방지.
- 열전도도: 전 배합 약 0.2 W/mK(보통 콘크리트 1.36~2.0 대비 현저히 낮음).
- 강섬유(35 mm) 단독은 길이 때문에 분산 불량으로 압축 9.8 MPa로 최저.

## Related Notes

- [[li-2023-ecc-micromechanics-critical-review]]의 미시역학 역설계(backward tailoring) 절차를 저활성 플라이애시 EGC에 적용한 사례. PSH_S ≥ 1.3 기준의 유효성 재확인, PSH_E 기준의 매트릭스 의존성 한계 지적은 [[pseudo-strain-hardening-criteria]]에 추가할 근거.
- PVA 오일 코팅 비용 문제 → 하이브리드로 저감한다는 접근은 [[shumuye-2024-nanoparticles-egc-review]]의 비용·탄소 평가와 함께 실용화 관점 자료.
- [[lee-2008-database-mix-optimization-convex-hull]] — 미시역학 역설계 외의 다른 축: 데이터베이스+최적화로 배합을 찾는 방법론 대조.
- FA 공급·품질 한계의 글로벌 정량 근거는 [[scrivener-2016-unep-eco-efficient-cements]] §8(연간 ~900 Mt, 활용 1/3).

- [[cho-2012-basic-mixing-and-mechanical-tests]] — 무시멘트 고인성 복합체의 국내 초기 실증(GGBS+PVA, KCI 2012). 저활성/무시멘트 결합재 계보의 출발점.
