---
title: "New Technique for Reinforcement of Concrete Columns Confined by Embedded Composite Grid (Bentayeb, Ait Tahar & Chateauneuf, 2008)"
type: source_note
source: "sources/bentayeb-2008-new-technique-for-reinforcement-of.pdf"
citation: "Bentayeb, F., Ait Tahar, K., Chateauneuf, A. New technique for reinforcement of concrete columns confined by embedded composite grid. Construction and Building Materials 22 (2008) 1624-1633. DOI 10.1016/j.conbuildmat.2007.06.015."
date: 2026-08-23
tags: [frp-grid, confinement, embedded-composite-grid, e-glass, rc-column, strain-hardening-concrete, finite-element]
---

# 매립형 복합재 그리드로 구속한 콘크리트 기둥의 새 보강 기법

## Summary

알제리 Tizi Ouzou 대학 LaMoMS와 프랑스 Blaise Pascal 대학 LGC의 공동 연구. 외부 부착 FRP 재킷과 달리 E-glass 복합재 그리드를 콘크리트 단면 내부에 매립(embedded)해 기둥을 구속하는 신기법을 실험·이론·유한요소로 검증했다. 매립 방식은 표면 처리·접착 계면 조기 파괴 문제를 원천 제거하고 콘크리트 연속성을 유지하며 미관을 해치지 않는 것이 장점. 원주형 시험체 압축시험에서 평균 강도 약 20 % 증가(30.03에서 36.48 MPa)와 비취성 파괴 전환을 확인했고, Wu의 외부구속 모델에 그리드 형상계수 u1·u2를 도입한 자체 구속 모델을 제안했다.

## Key Contributions

- 매립형 구속 개념의 정량 입증: 구속비(fl/f'co)= 0.19로 연화/경화 임계값 0.10을 상회하는 변형률 경화 영역 확보. 배치별 무구속 32.38·31.69·26.04 MPa 대비 구속 37.86·34.80·36.79 MPa, 평균 30.03에서 36.48 MPa(+21.5 %).
- 계면 문제 소거: 콘크리트가 그리드 개구부로 압입되어 프리스트레스 유착이 생기고, 파괴 후에도 물리적 계면이 유지됨. 피복(concrete cover)은 압축시험 중 탈락하지만 구속 코어는 하중에 저항 — 피복이 붕괴 전 경보 역할을 하는 안전 설계 개념으로 제시.
- 그리드 전용 구속 모델 제안: 구속밀도 ρf를 그리드 기하(bf= 3 mm, sf= 20 mm, tf= 1 mm, 개구율 Av/Ab)로 닫힌형 유도하고, 최종강도 f'cu= f'co(0.75 + 2.5 u1u2ff/f'co), 최종변형률 형태의 식으로 일반화. Wu 모델 예측 f'cp= 37.11·f'cu= 37.39 MPa vs 실험 36.48 MPa로 오차 2.5 % 이내.
- 문헌 데이터 400개 이상 원주형(F'co 23~70 MPa, FRP 인장강도 300~4000 MPa)과의 보정 링크 — Richart형 f'cc= f'co+ kfl 계열(Fardis·Saafi·Miyauchi·Lam-Teng·Toutanji·Karabinis-Rousakis)과의 k 계수 비교 체계 제공.
- 경제성: 직경 300 mm·길이 4 m 기둥 기준 그리드+최소철근(6 mm @ 300 mm) 6.9 EUR vs 기존 스터럽(8 mm @ 200 mm) 7.5 EUR — 재료비만으로도 우위, 시공성·공기 단축은 추가 이점.
- ANSYS 축대칭 8절점 4800 요소 해석: 구속으로 횡방향 변위 17 % 저감(7.9에서 6.6 ×10^-3 mm), 응력 흐름이 구속 코어 내에서 균질화.

## Methods

- 시험체: 직경 160 mm × 높이 320 mm 원주형 18개(3 배치 × 구속 3 + 무구속 3). Eurocode 2 배합(포틀랜드 시멘트·자갈·천연사·감수제), NFP18-406 압축시험, 3000 kN 만능시험기, 재하속도 0.5 kN/s, 황 납작층으로 편심 제거, 28일 포화석회수 양생.
- 그리드: 수지 함침 E-glass 섬유, 메시 20 × 30 mm와 20 × 25 mm 교대, 항복강도 560 MPa, 탄성계수 4.1 GPa(제조사 값). 철근·스터럽 주위에 타설 전 매립.
- 모델: Wu(2002)의 구속 지수 k1= ρf Ef sqrt(f'co)/f'co = 0.26으로 경화형 판정, peak 강도·변형률 식(5a)(5b)와 제안식(14a)(14b) 병행. FE는 상판 변위 0.1 mm 시점의 방사변위·수직응력 분포 비교.

## Results

- 파괴모드: 무구속은 취성 파괴, 매립 그리드 구속체는 축·횡 방향으로 그리드가 변형되며 균열편이 단면 내에 갇히는 연성 거동. 응력집중은 그리드 피복이 없는 시험체 하단에 발생.
- Table 1 극한하중: 평균 604.08 kN(무구속) vs 729.94 kN(구속). 배치 3처럼 무구속 강도가 낮은 경우 증진폭이 더 큼(26.04에서 36.79 MPa).
- Table 3 모델값: fl= 5.95 MPa, ρf= 28.12 ×10^-4, 구속비 0.19, e'cp= 0.062, e'cu= 0.096.
- 파라메트릭: 피크응력은 구속밀도에 둔감, 최종강도는 고강도 콘크리트에서 구속밀도 증가 시 최대 25 %까지 상승.
- 한계: 동적 하중·균열 폭 평가·신뢰도 기반 설계계수는 후속 과제로 남김.

## Related Notes

- [[bencardino-2006-frp-strengthened-rc-beams-holistic]] — 외부 부착 FRP 보강의 통합 설계(외부장착 vs 매립 대비축)
- [[su-2024-flexural-behavior-beams-gfrp-hpfrcc-strengthening]] — GFRP+HPFRCC 보강 부재
- [[kim-2014-shcc-hsrs-strengthened-rc-beam]] — SHCC 보강층을 통한 RC 부재 성능 개선
- [[ahmad-2003-reinforcement-corrosion-in-concrete-structures]] — 철근 부식 열화 리뷰(매립 금속계 보강의 내구성 맥락)

