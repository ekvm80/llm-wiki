---
title: "Design Optimization of the Flexural Behavior of a Novel UHPC–ECC–RC Composite Sandwich Panel (Liu, Huang & Bian, 2025)"
type: source_note
source: "sources/Liu 등 - 2025 - Design Optimization of the Flexural Behavior of a Novel UHPC–ECC–RC Composite Sandwich Panel.pdf"
citation: "Liu, Y., Huang, D., Bian, Y. Design optimization of the flexural behavior of a novel UHPC–ECC–RC composite sandwich panel. The Structural Design of Tall and Special Buildings 34 (2025) e70101. doi: 10.1002/tal.70101"
date: 2026-08-22
tags: [uhpc, ecc, composite-sandwich-panel, precast, flexural-optimization, nsga-ii, gan-data-augmentation, neural-network, sichuan-group]
---

# UHPC–ECC–RC 복합 샌드위치 패널의 휨 거동 설계 최적화

## Summary

프리캐스트 콘크리트 샌드위치 단열 패널(PCSP)의 표층 일부를 ECC와 UHPC로 치환해 내력과 친환경성을 동시에 노리는 연구(사천대 그룹). 상·하 와이스(wythe) 표층 20 mm를 치환한 ECSP(ECC)와 UCSP(UHPC)를 4점 휨시험하고 ABAQUS 3차원 유한요소로 재현한 뒤, 압축측에는 UHPC·인장측에는 ECC를 배치하는 역할 분리형 UE-CSP 개념을 제안했다. GAN 데이터 증폭 + 신경망 예측 + NSGA-II 다목적 최적화로 최적 단면(상부 UHPC 12 mm, 하부 ECC 28 mm)을 확정해 피크하중 115.04 kN, 연성지수 8.03을 달성했다.

## Key Contributions

- 재료 역할 분리 설계 원칙의 실험 입증: 휨 조건에서 상부 와이스 표층은 압축, 하부는 인장이 지배적이므로 같은 고성능 콘크리트를 양측에 쓰면 기능을 다 못 쓴다. ECC를 압축측(상부)에 넣은 T20B20-1은 하부 전용 대비 피크하중 +11 %·연성 +53 %였지만 ECC-일반콘크리트 계면 박리가 발생했고, UHPC 양면 배치(TU20BU20-1)는 T20B20-1 대비 피크하중 −29 %·연성 −22 %로 오히려 열세 — 인장측 재료의 균열 후 지속 기여(ECC 변형경화)가 압축강도보다 휨 성능에 더 결정적.
- 계면 전단 강도 데이터: 사선전단시험으로 UHPC-NC 계면 5.60 MPa로 ECC-NC 계면 대비 82 % 높음 → UCSP에서는 계면 박리가 없었음. 이 수치를 cohesive 인터페이스(traction-separation, Maxs 손상기준) 파라미터로 FE에 반영.
- 데이터 주도 최적화 프레임: 소표본 유한요소 해석 데이터(파라메트릭 7점)를 GAN으로 85샘플로 증폭(RMSE 15~25 % 저감), 2-7-5-2 신경망(tanh+sigmoid, Levenberg-Marquardt, MSE 0.0027, 예측오차 피크하중 4.71 %·연성 5.83 %)을 목적함수로 NSGA-II(개체군 200, 교차 0.85, 돌연변이 0.25)+TOPSIS 의사결정으로 최적화.
- 비용-성능 정량 평가(2025년 청두 가격): UE-CSP는 ECSP 대비 중량 +0.8 %에서 피크하중 +51 %·연성 +35 %·자재비 −2.2 %, UCSP 대비 중량 −1.8 %에서 피크하중 +113 %·연성 +72 %·비용 +5.4 %. ECC/UHPC 고단가(각 4500/5000 CNY/m³)를 상쇄하는 경제성 입증.

## Methods

- 재료: 일반콘크리트 압축 44 MPa·인장 1.5 MPa·탄성계수 33.5 GPa, ECC 압축 45.4 MPa·인장 7.16 MPa·극한인장변형률 6.49 %·탄성계수 16.8 GPa, UHPC(프리믹스, 중국서부건설그룹) 압축 129.2 MPa·인장 5.65 MPa·극한인장변형률 1.37 %·탄성계수 42.2 GPa.
- 실험체: 와이스 내 철망(직경 6 mm, 격자 180×250 mm), GFRP 트러스 커넥터(매입길이 45 mm), 4점 휨시험. ECSP는 선행 연구(Bian 등 2023 Eng Struct) 결과 인용.
- FE: ABAQUS CDP 모델, 와이스 C3D8R, 커넥터·철망 T3D2, 단열판 crushable foam(E=5 MPa, 포아송 0.1). 요소 삭제 임계 최대주변형률 NC 0.0001 / UHPC 0.014 / ECC 0.065. 검증: P_T/P_FE = 1.07±0.061, μ_T/μ_FE = 1.04±0.058(FE가 각각 약 7 %·4 % 과소예측).
- 파라메트릭: 총 치환 두께 40 mm 고정, 상부 UHPC 5~35 mm × 하부 ECC 5~35 mm 7케이스(기준 20/20 포함).

## Results

- 실험: T0B20-1(하부만 ECC) 68.72 kN·연성 3.88, T20B20-1 76.18 kN·5.95, TU20BU20-1 53.94 kN·4.67. ECC층 하부 인장연단의 삼각형 미세균열 분산 vs UHPC층의 주균열+강섬유 가교 대조.
- UE-CSP 기준안(상 20 mm UHPC + 하 20 mm ECC, FE): 89.26 kN·연성 7.21 — ECSP 대비 +17 %·+21 %, UCSP 대비 +65 %·+54 %. 피크 이후 장연화 구간 유지, 손상은 일반콘크리트층에 집중되어 표층 보호.
- 커넥터 응력: 피크 시 GFRP 트러스 최대인장응력 T20B20-1 675 MPa, TU20BU20-1 593 MPa, UE-CSP 800 MPa(극한강도 도달) — 복합작용까지 최대 활용.
- 최적화: 최적해 U 12 mm/E 28 mm에서 NSGA-II 예측 115.04 kN·8.03, FE 검증 107.57 kN·8.31(오차 8 % 이내), 기준 UE-CSP 대비 P +20.5 %·TI +11.4 %.
- 한계 자인: UE-CSP 성능은 유한요소 해석에 근거하며 실험 검증은 미완료 — 후속 구조시험·내구성 프로그램(염분·동결융해·탄산화 연성열화)을 계획 중이라 명시.

## Related Notes

- [[cao-2025-bamboo-scrimber-concrete-composite-beams-uhpc-ecc]] — UHPC+ECC 재료 조합의 합성 부재 적용 축
- [[lai-2025-uhpfrc-nc-composite-beam-flexure]] — 고성능 콘크리트 인장층 배치에 따른 합성 단면 휨 설계
- [[ge-2023-steel-precast-uhpc-composite-beams-flexural-behavior]] — 프리캐스트 UHPC 합성 부재
- [[du-2025-steel-uhdcc-composite-bridge-deck-bending]] — 초고인성 세멘트질 재료의 복합 부재 거동
- [[guo-2026-egc-intelligent-design]] — CatBoost+SHAP+NSGA-III 데이터 주도 설계 축(GAN+NN+NSGA-II와 같은 패러다임)
- [[pseudo-strain-hardening-criteria]] — 인장층 ECC가 균열 후에도 기여하는 변형경화 발현 조건
- [[fiber-bridging-constitutive-law]] — UHPC 주균열 면과 ECC 미세균열 면의 섬유 가교 차이

