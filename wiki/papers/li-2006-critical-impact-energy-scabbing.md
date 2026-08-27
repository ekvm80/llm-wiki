---
title: "Critical impact energies for scabbing and perforation of concrete target (Li et al., 2006, Nuclear Engineering and Design)"
type: source_note
source: "sources/Li-2006-Critical impact energies for scabbing.pdf"
citation: "Li, Q.M., Reid, S.R., Ahmad-Zaidi, A.M. Critical impact energies for scabbing and perforation of concrete target. Nuclear Engineering and Design 236 (2006) 1140-1148. doi:10.1016/j.nucengdes.2005.10.017"
date: 2026-08-22
tags: [concrete-impact, scabbing, perforation, critical-impact-energy, ndrc-formula, empirical-formula, dimensional-analysis, ballistic-limit, protective-structures]
---

# 콘크리트 표적의 scabbing·관통 임계 충격 에너지

## Summary

Manchester 대학 Q.M. Li·S.R. Reid(충격역학)팀의 원자력 시설 방호 구조물 논문(사용자 그룹 외). 상대 표적 두께 H/d가 콘크리트 표적의 국부 손상(scabbing, 관통 perforation)이 개시되는 임계 충격 에너지에 미치는 영향을 무차원수 분석으로 정리하고, 영국 원자력 산업의 R3 Impact Assessment Procedure에 담긴 UMIST 경험식(Reid-Wen 2001)을 (1) 차원분석, (2) NDRC 계열 경험식 유도식, (3) 준경험식(NDRC + Li-Chen 2003 관통식), (4) 해석식(Li-Tong 2003 관통-플러깅 모델)으로 합리화해 World Impact Data(Bainbridge 1988, 수백 건 실험 데이터베이스)와 교차검증했다. 결론은 UMIST식이 항상 하한(안전측)을 주므로 안전계수 없이 원자력 예비설계에 권장된다는 것. sources/에는 동일 논문 사본 2개(`Li-2006-Critical impact energies for scabbing.pdf`, `li-2006-critical-impact-energies-for-scabbing.pdf`)가 있으며 하나의 노트로 통합 처리했다.

## Key Contributions

1. **무차원 프레임 확립**: scabbing 한계 hs와 관통 한계 e를 Ec/(d³fc) = G(M/(ρd³), H/d, ft/fc[, τf/fc]) 형태의 무차원 관계로 정식화. 골재 특성 크기와 경량~중간 보강(r = 0.3~1.5 % ewef)은 관통·scabbing에 거의 무영향이라는 근거로 변수에서 제외 — H/d가 지배 파라미터임을 보임.
2. **3계열 경험식의 동일 좌표 비교**: UMIST식(R3), NDRC 유도식, 준경험식을 모두 임계 충격 에너지 Ec/(d³fc)-H/d 평면으로 변환해 H/d 구간별 우열 관계(E=실험, N=NDRC, S=준경험, U=UMIST)를 계통적으로 정리.
3. **관통 임계 에너지의 해석식**: Li-Tong 2003의 관통 단계+콘 플러깅 단계 2단계 모델(k = 2, 콘 각 α = 60°)로 Ecp/(d³fc)-H/d 닫힌식(Eq. 28) 유출 — 준경험식보다 실험 데이터 적합이 우수. 콘 각도에 대한 둔감성 확인(Dancygier 1998의 70°, Li-Reid 2004 응력분석 평균 균열각 59.2°와 병기).
4. **안전계수 가이던스**: UMIST식은 scabbing·관통 모두에서 일관되게 최저 예측 → 안전계수 불필요, 원자력 시설 콘크리트 예비 충격 설계에 최적이라고 권고. NDRC·준경험식은 전반적으로 실험에 더 가깝지만 과대평가 가능성이 있어 안전계수 병행 필요. 아울러 에너지 보존(Eq. 29~30)으로 기존 관통 실험 데이터에서 탄도 한계(balistic limit) 데이터를 확장하는 기법 제시.

## Methods

- 차원분석으로 scabbing·관통의 지배 무차원수 도출 후, 세 부류 공식을 같은 좌표계로 재유도해 Bainbridge(1988) World Impact Data의 'just scabbing' 및 'just/almost perforated' 실험값과 비교.
- UMIST식 유효 범위: 발사체 직경 d 22~600 mm, 질량 M 1~2622 kg, 속도 V₀ ≤ 427 m/s, fc 19.9~78.5 MPa, 보강비 r ≤ 4 % ewef, 두께 H 50.8~640 mm(평두(flat-nosed) 발사체, N* = 0.72).
- 동적 파쇄응력 σt(Pa) = 4.2fc + 135.0 MPa + [0.014fc + 0.45 MPa]·Vc(m/s); 재료 무차원수 S = 72.0·fc^-0.5(fc는 MPa 단위); 충격함수 I = MV₀²/(Sd³fc), N = M/(ρd³).

## Results

- Scabbing 메커니즘: 충격 압축 응력파가 원면(뒷면) 자유 표면에서 반사되며 인장 파괴를 일으키는 것으로, 완전 관통이나 전체 구조 응답보다 훨씬 짧은 시간에 발생.
- Scabbing 비교: H/d ≈ 0.5 부근에서는 UMIST식이 실험에 최접근; 0.5 < H/d ≤ 3.0에서 E > N > S > U; H/d > 3.0에서 N > S > E > U — 모든 구간에서 UMIST식이 최저값.
- Perforation 비교: 전 구간 대략 N > E > S > U. UMIST식은 유효 하한(H/d ≥ 0.34) 밖에서 음수가 되는 사례 존재.
- 해석식(플러깅 모델)이 준경험식보다 실험과 잘 맞고, 탄도 한계 확장 데이터에서도 동일하게 우수. 단 H/d = 4 부근은 실험 산포가 크므로(소질량 고속 vs 대질량 저속 사례 혼재) 주의.
- 실무 결론: UMIST(R3)식은 안전측 하한이라 안전계수 불필요·원자력 예비설계 권장, NDRC·준경험식은 안전계수 필수.

## Related Notes

- [[kim-2018-uhpfrc-hdfrc-projectile]] — 그룹의 UHPFRC/HDFRC 패널 발사체 충격 논문이 수정 NDRC 공식으로 관통 깊이·scabbing 한계 두께를 검증한 사례(본 논문이 정리한 NDRC 계열 공식의 FRC 적용)
- [[kim-2015-shcc-impact-magazine]] — SHCC 충격 저항 문헌 리뷰(섬유보강 재료의 충격 축 입문 노트)
- [[pan-2023-dynamic-compressive-shpb-egc]] — SHPB 동적 압축으로 잇는 동적 거동 축
