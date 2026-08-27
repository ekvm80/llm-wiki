---
title: "Ductility and Cracking Behavior of UHPC-RC Composite Beam under Bending Test Based on Acoustic Emission Parameters (Li, Gou, Tan, Hedayat, Sun & Guo, 2024)"
type: source_note
source: "sources/Li 등 - 2024 - Ductility and cracking behavior of UHPC-RC composite beam under bending test based on acoustic emiss.pdf"
citation: "Li, S., Gou, W., Tan, Z., Hedayat, M., Sun, W., Guo, P. Ductility and cracking behavior of UHPC-RC composite beam under bending test based on acoustic emission parameters. Structures 70 (2024) 107624. doi: 10.1016/j.istruc.2024.107624"
date: 2026-08-22
tags: [uhpc-rc-composite-beam, acoustic-emission, ductility-index, crack-classification, b-value, ndt, zhengzhou-group]
---

# AE 파라미터 기반 UHPC-RC 합성보의 연성·균열 거동 평가

## Summary

정주대학교 그룹의 연구. 인장측에 50 mm UHPC층을 둔 UHPC-RC 합성보와 대조 RC 보를 4점 휨시험하면서 AE(음향방출)로 손상을 모니터링하고, 누적 링 카운트·에너지 기반 신규 연성지수(ARD·AED)와 RA-AF·b값 결합파라미터로 균열 분류를 수행했다. UHPC 합성보는 균열하중 2배·항복 18.8 %·극한 20.2 % 증가했지만 변위연성지수는 7 % 감소했으며, ARD·AED가 변위 기반 지수와 2 % 이내 오차로 일치함을 보였다.

## Key Contributions

- AE 누적 링 카운트·에너지 기반 연성지수 ARD=AER_u/AER_y, AED=AEE_u/AEE_y 제안. RC 보 1.11/1.10 vs UHPC-RC 1.04/1.02로 변위연성지수와 경향 일치(오차 2 % 이내) — 파괴 후가 아닌 계측 중 연성 평가 가능.
- RA(상승시간/진폭)-AF(링카운트/지속시간) 결합파라미터로 인장균열·전단균열 분류: RC 보는 전단균열 지배(O-A기 59 %→B-C기 96 %), UHPC-RC는 초기·파괴 단계에서 인장균열 비중 확대(UHPC층 효과).
- b값(log₁₀N=a-b(A_dB/20), 250개 진폭 윈도)으로 미세→거시 균열 전이 정량화: 미→거시 전이점이 RC 14 % vs UHPC-RC 22 %(극한하중 기준) — UHPC층이 미세균열 단계를 연장.
- UHPC-RC 계면 샌드블라스팅(평균 깊이 2.5 mm) 처리로 파괴 시까지 박리 없음 확인.

## Methods

- 실험체: 2000×150×250 mm 보 2종, 인장철근 ϕ14-HRB400E 3본(비율 1.43 %), 스터럽 ϕ8@80. UHPC층 50 mm(하부). C30 압축강도 33.8 MPa, UHPC 147.2 MPa(28일), UHPC 축인장 6.82 MPa.
- 4점 재하(1000 kN 잭), 중앙 처짐 100 mm 변위계, 인장철근 스트레인게이지.
- AE: RS-2A 센서 4개(스팬 중심 좌우 200 mm), DS5-16B 전파형 분석기, 전증폭 40 dB, 바셀린 결합.

## Results

- 하중 단계: 균열 RC 19.5 kN vs 합성보 39 kN(+100 %), 항복 149/177 kN(+18.8 %), 극한 158/190 kN(+20.2 %). 변위연성 μ_Δ는 RC 1.30 → 합성보 1.21(-7 %).
- AE 3단계 구분: 무음(0~14 %/0~22 %), 급증 후 완만(14~96 %/22~92 %), 급변(96~100 %/92~100 %). 누적 링카운트·에너지가 역학적 3단계(미세균열·거시균열·파괴)와 대응.
- b값: RC는 파괴 단계에서 큰 폭 요동(미세+거시 균열 혼재·손상 큼), UHPC-RC는 안정 유지(UHPC층이 내부 균열 생성 억제).

## Related Notes

- [[lai-2025-uhpfrc-nc-composite-beam-flexure]] — UHPFRC-NC 합성보 해석 설계 축(인장츠 UHPFRC 배치 공통)
- [[ge-2023-steel-precast-uhpc-composite-beams-flexural-behavior]] — UHPC 프리캐스트 합성보
- [[du-2025-steel-uhdcc-composite-bridge-deck-bending]] — 초고인성 복합 부재
- [[kim-2017-enhanced-strain-measurement-range]] — 사용자 그룹 SHM 계측 축(FBG vs AE)
- [[lee-kim-kim-2006-crack-pattern-recognition]] — 영상 기반 균열 검출과 AE 기반 균열 분류 대응
- [[chun-2024-rc-beams-impact-resistance-hpfrcc]] — HPFRCC 적용 RC 부재 충격 응답

