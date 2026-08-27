---
title: "On Interface Property Characterization and Performance of Fiber-Reinforced Cementitious Composites (Lin, Kanda & Li, 1999)"
type: source_note
source: "sources/On interface property characterization and per.pdf"
citation: "Lin, Z., Kanda, T., Li, V.C. On interface property characterization and performance of fiber-reinforced cementitious composites. Concrete Science and Engineering 1 (1999) 173-184. (RILEM)"
date: 2026-08-22
tags: [interface-characterization, single-fiber-pullout, chemical-bond, slip-hardening, snubbing, fiber-rupture, bridging-law, micromechanics, classic]
---

# 섬유보강 시멘트 복합재의 계면 특성 평가와 성능

## Summary

단섬유 인발 시험에서 계면 물성(화학부착 에너지 Gd·마찰부착 τ0·slip-hardening 계수 β)을 정량 추출하고, 여기에 snubbing 효과와 경사 인발 시 섬유 강도 저감(f′)까지 통합해 복합체 가교응력-균열개구 곡선 σ_B(δ)를 닫힌형으로 유도한 이론 논문(Michigan ACE-MRL+카지마 기술연구소). PVA 섬유의 강한 화학결합이 임계길이와 다중균열 조건(J′b>Jtip)에 미치는 영향을 체계화해, 이후 ECC 계면 맞춤 설계(REC15 개발)의 이론적 기반이 되었다.

## Key Contributions

- 3파라미터 인발 모델: 탈결합은 mode-II 터널링 균열(계면 파괴인성 Gd), 소규모 슬립은 일정 마찰 τ0, 대규모 인발은 slip-hardening β로 분리 정식화. 최대탈결합하중 식 P_a=πd_fτ₀L_e+½πd_f²√(G_d E_f) 로부터 Gd와 τ0를 직접 캘리브레이션.
- 경사 효과의 쌍대성 정식화: 인발하중 증가는 snubbing 계수 f(P(φ)=P(0)e^{fφ}), 섬유 현장강도 저하는 f′(σ_fu(φ)=σ_fu e^{-f'φ}) — 두 지수가 임계 매입길이 L_c=2L_eg√(1-f²)-γ 형태로 결합. 고분자 섬유에서 β=0.005~0.05, f=0.5~0.9, PVA f′≈0.3 범위 제시.
- 화학결합의 역설 정량화: 화학결합↑ → 초기 가교응력·인장강도↑ 그러나 상보에너지↓·파괴에너지↓(섬유 파단 촉진). 강도와 연성의 트레이드오프를 단일 모델로 설명 — PVA 코팅 설계의 이론적 근거.
- PVA-RMU vs RK 사례 연구: RMU(∅44 µm, 길이 6 mm, Vf 1.5 %)는 강도 높으나 Gd=0.8 J/m²로 Jtip(~2 J/m²) 미달→다중균열 불가. RK(∅40 µm, 12 mm, 2 %)는 Gd=3.4 J/m²로 조건 충족→연성 확보. 직경·길이 선택이 계면 물성 요구치를 바꿈을 입증.

## Methods

- 단섬유 인발: 1 N 미니 로드셀, 미세섬유 정렬 기법, PVA(∅14.8 µm) 검증. 탈결합 전 탄성 신장→탈결합(하중 강하점=화학부착 증거)→마찰 인발(오목한 상승=slip-hardening) 3단계 해석.
- 복합체 가교법칙: 방향각·심도 PDF(p(φ)=sinφ, p(z)=2/L_f) 적분 + 섬유 파단 도메인(임계매입길이 곡선 아래 제외) 처리로 닫힌형 유도(Appendix B). 마샬-콕스 J-적분으로 안정균열 조건 G_c≥J_tip 재확인.
- PVA 복합재: 시멘트 1.0/모래 0.4/W 0.45 매트릭스, 수중 7일+공기 1일 양생, dog-bone 직접인장.

## Results

- 모델 피팅: PVA-RMU 인발곡선을 Gd=6.0 J/m², τ0=3.0 MPa, β=0.05로 재현. 매입길이별 최대탈결합하중 예측과 실험 부합.
- 비정규 민감도: 화학결합 증가 시 짧은 섬유의 인장강도 큰 폭 상승(초기탈결합 응력 지배), 반면 파괴에너지는 감소. 최적 섬유길이 존재(파괴에너지 피크).
- 상보에너지 지도: 섬유길이×상대화학결합(γ/L_eg) 함수로 G_c 산포 제시 — ECC 배합 설계의 실무 도구.

## Related Notes

- [[fiber-bridging-constitutive-law]] — 본 논문이 닫힌형으로 유도한 σ_B(δ) 구성법칙
- [[kanda-1998-pva-interface-apparent-strength]] — 동일 그룹의 계면 물성·겉보기강도 선행 논문
- [[li-wu-1992-psh-conditions]] — 안정균열 조건 원전(G_c≥J_tip)
- [[li-2003-ecc-review-jact]] — 본 모델을 REC15 계면 맞춤에 적용한 총론
- [[morton-1976-effect-metal-wires-fracture-brittle-matrix-composites]] — snubbing 효과의 실험적 원전
- [[nematollahi-2017-one-part-shgc-micromechanics]] — 동일 프레임(Km-τ0 상관 포함)의 지오폴리머 적용 후속
- [[ranade-2013-hshdc-micromechanics]] — 3파라미터 모델을 고강도 매트릭스로 확장하며 경사경화 메커니즘 추가
