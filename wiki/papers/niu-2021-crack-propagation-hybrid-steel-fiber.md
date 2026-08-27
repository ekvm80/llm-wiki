---
title: "Crack Propagation Behavior of UHPC Reinforced with Hybrid Steel Fibers under Flexural Loading (Niu, Wei & Jiao, 2021)"
type: source_note
source: "sources/Niu 등 - 2021 - Crack propagation behavior of ultra-high-performance concrete (UHPC) reinforced with hybrid steel fi.pdf"
citation: "Niu, Y., Wei, J., Jiao, C. Crack propagation behavior of ultra-high-performance concrete (UHPC) reinforced with hybrid steel fibers under flexural loading. Construction and Building Materials 294 (2021) 123510. doi: 10.1016/j.conbuildmat.2021.123510"
date: 2026-08-22
tags: [uhpc, hybrid-steel-fiber, crack-propagation, dic, flexure, crack-opening-displacement, deflection-hardening, guangzhou-group]
---

# 휨 하중 하 하이브리드 강섬유 보강 UHPC의 균열 진전 거동

## Summary

직선 강섬유(∅ 0.2 mm)를 길이별(6, 13, 20 mm)로 총섬유 부피비 2.0 % 고정 조건에서 하이브리드화하고(ASTM C1609 3점 휨 + DIC) 균열 개시와 진전 과정을 정량화한 연구(광저우대·화남이공대 그룹). DIC 변형률장을 압축·균열공정·국재화(localization)·거시균열 4개 존으로 구분해 해석하여, 섬유-매트릭스 완전탈착(full debonding) 변형률이 약 0.32 %, 거시균열 발생 한계 변형률이 약 3.25 %로 섬유 길이와 무관하게 일정함을 밝혔다. 최적 조합은 13 mm 섬유 0.5 %+20 mm 섬유 1.5 %(M0.5L1.5)로, 균열 개시 변형률속도와 균열 진전 속도가 모든 시험체 중 가장 낮았다. 동일 논문의 사본 2종(niu-2021-crack-propagation-behavior-of-ultra-high-performance.pdf)이 sources/에 있어 하나의 노트로 통합 처리했다.

## Key Contributions

- 섬유 길이 하이브리드의 최적점 규명: 장섬유(20 mm) 위주 + 중간섬유(13 mm) 소량 조합 L1.5M0.5가 f_MOR 20.47 MPa·d_MOR 1.34 mm로 단일 장섬유 L2.0(18.78 MPa·1.24 mm) 대비 각각 +9.15 %·+8.06 %. 중간장섬유를 적게 넣을 때 장섬유 분포가 개선되어 가교·균열저항 이점은 살리고 분산 불량·계면 약층 단점은 억제하는 메커니즘으로 해석. 반면 단섬유(6 mm)만으로는 휨 연화(S2.0, M0.5S1.5는 f_LOP>f_MOR).
- DIC 기반 4-zone 프레임과 재료 상수 후보 2개: 균열 선단을 (I) 압축, (II) 균열공정(FPZ, 섬유 탈착 구간, 폭 0.022 mm 경계), (III) 국재화(폭 0.05 mm까지), (IV) 거시균열 존으로 분리. 완전탈착 변형률 약 0.32 %(Kang 식의 탈착변위 D0 = 0.022 mm에 대응)와 거시균열 발생 문턱 변형률 약 3.25 %는 어떤 섬유 구성에서도 불변 — UHPC 휨 균열의 준-물성 상수로 활용 가능. 30 %F_MOR 하중 단계에서는 국재화 존만 잔존(길이 약 15 mm, 팁 변형률 3.25 %).
- COD 진화 프로파일의 하이브리드 의존성: 장섬유를 단섬유로 0.5~1.0 % 치환하면 보 방향 COD 프로파일이 선형 유지, 1.5~2.0 % 치환에서는 급변·불규칙. 하중 제거 단계 최대 COD는 S2.0 1.88 mm, M2.0 4.26 mm, L2.0 7.32 mm이며 L1.5M0.5가 7.69 mm(L2.0 대비 +5.05 %)로 최대.
- 균열 개시·진전의 두 단계 정량 법칙: 균열 개시 변형률은 시간에 선형(y=ax+b), 균열길이는 지수함수 y=A1−A2·e^(−x/B)(A1=보 높이 100 mm, A2·B는 실험 계수표 제공)로 피팅되며 진전 속도 dy/dx=(A2/B)e^(−x/B)로 초기 급속 진전 후 감쇠·정상화. M0.5L1.5의 개시 변형률속도 0.00492 %/s(원문 단위 표기 'L/s'는 오탈자로 판단)로 L2.0 대비 16.89 % 낮음.

## Methods

- 배합: 시멘트 CEM II 52.5R 770 + 실리카퓸 230 + 규사(0.16~0.315 mm 300, 0.63~1.25 mm 700) kg/m³, W/B 0.16, 고성능감수제 3.5 %(고형분 30 %). 몰드 한쪽 면 타설로 섬유 배향 균일화, 90 s 진동, 수중 28일 양생.
- 시험체 계열: 단일(S2.0/M2.0/L2.0) + 하이브리드 9종(M1.5S0.5 등 치환비 0.5/1.0/1.5 %).
- 압축·쪼갬인장: 100 mm 큐브, 각 0.5·1.2 MPa/s(UTM 300 t). 휨: MTS 250 kN 변위제어 0.2 mm/min, 100×100×400 mm 보, 지간 300 mm, 처짐 3 mm까지(LVDT 2개 스틸 프레임 장착).
- DIC: 1024×1024 px 카메라 2대, 스피클 패턴, ROI 100×200 mm, 청색 광원 2개, 1 s 간격 촬영. 하중 단계별(F_LOP, F_MOR, 30 %F_MOR) 변형률장 비교.

## Results

- 압축강도: 무섬유 기준(NF) 120.4 MPa 대비 섬유 혼입으로 147.1~170.5 MPa(최대 M1.0L1.0, 최소 S1.5M1.5). 하이브리드 구성의 영향은 작음. 쪼갬인장강도는 NF 8.1 MPa 대비 6/13/20 mm 단일 혼입 시 각각 +51.9 %·+134.6 %·+159.2 % 증가, M0.5L1.5가 21.8 MPa로 최고(L2.0 대비 +3.81 %).
- f_LOP는 평균 11.97 MPa(처짐 0.075 mm)로 섬유 길이·구성과 무관한 매트릭스 고유값인 반면, f_MOR과 d_MOR은 섬유 구성에 크게 의존(L2.0의 d_MOR 1.24 mm는 S2.0 대비 +552.63 %).
- 균열 패턴: 6+13 mm 조합은 치환비가 클수록 균열 경로 불규칙, 20 mm 포함 조합은 지그재그 경로. L1.5M0.5는 F_MOR에서 거시균열 길이 13.62 mm로 최단.
- 로드-처짐 곡선상 휨 경화(deflection-hardening, f_LOP<f_MOR)는 중간장섬유 비율 1.0 % 이상(M1.0S1.0, M1.5S0.5, M2.0) 및 20 mm 섬유 혼입 전 시험체에서 발현.
- 도입부에서 사용자 그룹(Bang Yeon Lee 등)의 UHPC 하이브리드 섬유(강+합성섬유) 인장거동 연구를 하이브리드 분류 문헌으로 인용.

## Related Notes

- [[fiber-bridging-constitutive-law]] — 완전탈착 변형률 0.32 %가 직결되는 섬유-매트릭스 가교 응력 전달 구조
- [[pseudo-strain-hardening-criteria]] — f_LOP<f_MOR 휨 경화 발현 조건과 PSH 설계 기준의 대응
- [[lee-kim-kim-2006-crack-pattern-recognition]] — 영상 기반 균열 정량화(DIC/이미지 분석) 방법론 축
- [[maekawa-2009-multiscale-modeling-structural-concrete]] — 균열 진전·국재화 현상의 다중스케일 해석 틀
- [[park-2012-tensile-behavior-uhp-hfrc]] — UHP-HFRC(200 MPa 매트릭스 + 거섬유 1 %+잔섬유) 16계열 직접인장: 거섬유 종류가 곡선 형상 지배, T-섬유 최고(18.6 MPa, 0.64 %).
