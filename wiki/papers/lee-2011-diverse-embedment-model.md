---
title: "Diverse Embedment Model for Steel Fiber-Reinforced Concrete in Tension: Model Development (Lee, Cho & Vecchio, 2011)"
type: source_note
source: "sources/2011-diverse-embedment-model-for-steel.pdf"
citation: "Lee, S.-C., Cho, J.-Y., Vecchio, F.J. Diverse embedment model for steel fiber-reinforced concrete in tension: Model development. ACI Materials Journal 108(5) (2011) 516-525."
date: 2026-08-22
tags: [sfrc, pullout-model, fiber-orientation, embedment-length, end-hooked-fiber, tension-model]
---

# 강섬유 보강 콘크리트 인장 해석을 위한 Diverse Embedment Model(DEM) 개발

## Summary

강섬유의 무작위 정착길이·배향각 분포를 모두 고려한 인장 응력 해석 모델 DEM을 개발. 단일 섬유의 양면 정착 인발 거동을 마찰결합+기계적 정착(end-hooked)으로 분리 해석하고, 부재 유한 치수가 배향 분포에 미치는 구속 효과까지 반영했다. VEM(Variable Engagement Model)의 한계(일정 결합응력 가정, 단측 슬립 가정)를 보완.

## Key Contributions

1. 양면 정착 인발의 정식화: 균열폭 = 양쪽 슬립의 합이라는 적합조건에서 짧은 쪽·긴 쪽 슬립의 평형 방정식(Eq. 2~3) 도출. 최대 섬유응력 시 균열폭이 정착 비율에 따라 s_f → 2s_f로 변화(VEM은 항상 s_f 고정 가정).
2. 경사각 효과: 첨두 슬립이 cos²θ로 증가(Eq. 7), 임계 균열폭 w_pq = s_f[1+4(l_a/l_f)²]/cos²θ. 마찰강도는 일정으로 두는 단순화 채택(Banthia-Trottier와 Ouyang 등 상반된 문헌 정리 포함).
3. end-hooked 섬유의 기계적 정착 모델: 정착력을 첨두 전 포물선·후 선형으로 이상화, 슬립이 훅 길이 초과 시 소실(Eq. 14). 마찰 메커니즘과 독립 병렬 기여로 처리.
4. 배향계수 α_f의 일반화: 2D(부재 두께 구속 θ_l~θ_u 절단)와 3D(두께+폭 구속) 국소 배향계수 유도 — 부재 크기 효과를 확률론적으로 내재화.
5. 강성체 이동(rigid body translation) 가정의 타당성 확인: 섬유 탄신변형이 슬립 대비 무시 가능함을 수치해로 검증(Runge-Kutta로 2단계 인발 해석).

## Methods

지배방정식(전단지연형 미분방정식) + bilinear bond-slip(Nammur-Naaman), 유효 콘크리트 지름 15d_f(CEB-FIP MC90). 단일섬유 인발 실험 데이터(Banthia-Trottier crimped fiber 등)로 배향 효과 이상화. 검증은 동행 논문(Lee et al. 2011, ACI MJ 108(5):526-535).

## Results

- 섬유 응력-균열폭 관계는 bilinear로 근사 가능.
- 균열폭 기반 섬유응력 산정식(Eq. 8~10)로 파단 여부 판정(최대 경험 응력 > 섬유 인장강도 → 파단).

## Related Notes

- [[kang-2008-fiber-orientation-impacts-on-the]] — 배향이 실측 강도에 미치는 영향(휨 +61 %)의 실험적 대응. DEM은 그 예측 프레임.
- [[li-wu-1992-psh-design-hpfrcc]]의 snubbing·배향 논의와 대비: DEM은 강섬유(기계적 정착), PSH 이론은 고분자 섬유(마찰+slip-hardening) 중심.
- [[fiber-bridging-constitutive-law]] — σ_B(δ) 통계적 합성의 강섬유 버전.
- [[qiu-2016-fatigue-dependent-fiber-bridging-model]] — 같은 확률론적 averaging(정착길이·배향 분포)을 피로 열화 조건으로 확장. 단일섬유 인발 → 브리징 합성 구조 공유.
