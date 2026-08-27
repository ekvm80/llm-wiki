---
title: "Fiber Bragg grating sensors for structural health monitoring of Tsing Ma bridge: Background and experimental observation (Chan et al., 2006)"
type: source_note
source: "sources/'chan-2006-fiber-bragg-grating-sensors-for.pdf'"
citation: "Chan, T.H.T., Yu, L., Tam, H.Y., Ni, Y.Q., Liu, S.Y., Chung, W.H., Cheng, L.K. Fiber Bragg grating sensors for structural health monitoring of Tsing Ma bridge: Background and experimental observation. Engineering Structures 28 (2006) 648-659. DOI 10.1016/j.engstruct.2005.09.018. Hong Kong Polytechnic Univ. + TNO TPD."
date: 2026-08-23
tags: [fbg, structural-health-monitoring, tsing-ma-bridge, suspension-bridge, dynamic-strain, wasrms]
---

# 청마대교 FBG 센서 구조건전성 모니터링 — 배경과 현장 실험 관측

## Summary

홍콩 폴리테크닉대 토목·광자공학 팀과 TNO(TPD)의 공동 현장 실증(2003년 5월). 세계 최장 도로·철도 병용 현수교인 청마대교(Tsing Ma, 주경간 1377 m)의 행거 케이블·로커 베어링·트러스 거더에 FBG 센서 40개를 3개 어레이로 설치하고 철도·도로 하중에 의한 동변형률을 측정해, 개교 이래 운영 중인 상시 모니터링 시스템 WASHMS(약 800개 센서, 그중 변형률게이지 110개)의 저항 변형률게이지와 비교했다. DEMINSYS 고속 해조기(CCD 기반, 전 채널 동시 DC~20 kHz, 검출한계 1 pm 미만)로 열차 통과를 명확히 검출했으며 FBG 결과가 WASHMS와 높은 일치를 보여 대형 교량의 동변형률 모니터링 대안임을 입증했다.

## Key Contributions

- FBG 센서 원리의 교량 적용 정식화: Bragg 파장 λB = 2nΛ, 변형률 민감도 800 nm대 ~0.64 pm/με·1.55 μm대 ~1.15 pm/με, 온도 민감도 ~6.8 pm/°C·~13 pm/°C. 스트레스 프리 FBG로 온도 보상하는 식 (6)(열·역학 효과 분리) 제시.
- 다중화 기법 비교 정리: WDM(섬유당 ~40개, 정확도 1 pm → 0.1 °C/1 με), TDM(10 pm → 1 °C/10 με, SNR 낮음), FDM·SDM — 파장 부호화가 광원 강도 변동·전송로 손실에 불감이라는 점을 FBG의 핵심 강점으로 명시.
- 실물 현수교 3개 전략 지점 설치 패키지: Corning SMF28 섬유에 산욕 피복 제거+어닐 처리 후 니티놀 스트립(6×110 mm, 초탄성·내식·8 % 신장 무변형)에 에폭시 접착, IP65 ABS 함체(120×80×60 mm)에 수용 — WASHMS 저항 변형률게이지 함체와 기능·외형 호환.
- 고속 해조 DEMINSYS 실증: TNO 개발, 1530–1565 nm, 채널 간격 ~4 nm, 리드아웃 최대 ~20 kHz(샘플당 서브-pm 평균화). WASHMS 변형률게이지의 검출 한계(~20 Hz)보다 높은 주파수 이벤트 정보 제공 가능.
- 현장 관측 결과: 행거 케이블에서 열차 통과(t = 307 s·377 s, 반대 방향 2편)와 중차량(t = 195 s) 식별, 진행 방향 추정까지 가능. 로커 베어링·트러스 거더(21개 어레이, Chainage 23488)에서도 설치 위치 차이에도 불구하고 저항 게이지와 매우 유사한 신호.
- 신호 품질 정량화: FBG 노이즈는 주로 13 Hz 성분(DEMINSYS의 교량 진동 유입), 10점 이동평균으로 대역 ~2 kHz로 축소, 5000점 필터로 서브-pm/με 분해능 달성.
- FBG 우위 종합: 원격 감시, 설치 용이, 비부식, 유지보수비 저감 — 첫 FBG 교량 현장 적용(1995년 캘거리 콘크리트 거더 매입, Measures et al.) 이래 실물 대형 현수교 규모로 확장한 사례.

## Methods

- 대상 구조물: 청마대교 — 상부층 복현3차선 고속도로+하부층 철도 2선, 26 m 간격 종 트러스+정방향(orthotropic) 강바닥, 4.5 m 간격 Vierendeel 가로프레임(4번째마다 서스펜더 지지). 1997-05-22 개교.
- 설치: 행거 케이블 6개, 로커 베어링, 하부층 Chainage 23488 단면 지지구조에 총 40개(3 어레이, 21개는 트러스 거더). 방청 페인트 국소 제거 후 시안아크릴레이트(함체 외연, 즉시 고정)+2액형 방수 에폭시(센서·내연, 강결합) 이중 접착.
- 계측: 연속 24 h 가동(온도+변형률), ~20 h 야간 계측(샘플링 ~500 Hz), 행거는 리드아웃 0.106 ms, 로커는 2.1 ms, 트러스는 0.0528 ms 샘플링. 무선 온도보상용 스트레스 프리 FBG 병설.
- 비교 기준: 인접 위치의 WASHMS 저항 변형률게이지 동시 로깅.

## Results

- 열차 3회 통과(320·420·560 s) 시 FBG와 WASHMS 게이지 오버슈트가 정확히 대응(Figure 11).
- 로커 베어링: 하중 경로가 복잡해 센서 위치 의존성이 큼에도 두 센서형의 1 h 히스토리가 매우 유사, 열차 통과 명확 검출.
- 트러스 거더: FBG(상) vs 게이지(하) 형상 고일치, 필터링 후 서브-pm/μ ε 분해능 확인.
- 결론: 동변형률 응답의 명확·정확한 검출, 저항 게이지 대비 원격성·내식성·유지보수 이점 — 후속 논문([31] Chan et al. 2006 투고)에서 상세 계측·해석 예고.

## Related Notes

- [[kim-2007-fbg-smart-tendon]] — 사용자 그룹의 FBG 스마트 스트랜드 원전: 교량 케이블 계측이라는 같은 응용 맥락을 인장재 내장형으로 발전.
- [[kim-2010-fbg-strand-tension-monitoring]] — 여수 FBG 스마트 스트랜드 현장 적용(사용자 그룹).
- [[kim-2017-enhanced-strain-measurement-range]] — FBG 측정 범위 확장 기술 계열.
- [[watkins-2003-smart-bridges]] — 스마트 교량 총론(본 논문 3년 전).
- [[udd-1996-fiber-optic-smart-structures]] — 광섬유 스마트 구조 교과서(참고문헌 [35] Kersey 장이 수록된 Udd 편집서 계열).
- [[iten-2012-strain-sensing-cables]] · [[iten-2011-distributed-fiber-optic-sensing-dissertation]] — 분산 광섬유 변형률 계측 계열.
