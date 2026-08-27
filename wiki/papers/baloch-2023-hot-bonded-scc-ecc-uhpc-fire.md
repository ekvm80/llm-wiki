---
title: "Effect of High Temperatures on Hot-Bonded SCC/ECC and SCC/UHPC Composite Systems (Baloch et al., 2023)"
type: source_note
source: "sources/Baloch 등 - 2023 - Effect of high temperatures on hot-bonded SCCECC and SCCUHPC composite systems.pdf"
citation: "Baloch, W.L., Siad, H., Lachemi, M., Sahmaran, M. Effect of high temperatures on hot-bonded SCC/ECC and SCC/UHPC composite systems. Construction and Building Materials 369 (2023) 130507. doi: 10.1016/j.conbuildmat.2023.130507"
date: 2026-08-22
tags: [ecc, uhpc, scc, composite-system, high-temperature, interfacial-bond, pva-fiber, steel-fiber]
---

# 고온 노출 hot-bonded SCC/ECC·SCC/UHPC 복합시스템의 휨·부착 거동

## Summary

신선한 상태에서 연속 타설하는 wet-on-wet(hot-joint) 방식으로 압축층 SCC 위에 인장층 ECC 또는 UHPFRC(각각 PVA·강섬유 2 vol %)를 적층한 기능적(functionally graded) 복합시스템 4종을 만들고, 23–800 °C 가열(측면 가열, 목표온도 도달 후 2.5 h 유지, 공랭) 후 잔여 휨 성능과 층간 분열인장 부착강도를 평가했다. 습식 계면이 구조적 약점이 아니라 오히려 모노리식 SCC보다 높은 인장 부착강도(+19.1~45.6 %)를 제공하며, 400 °C 이상에서는 섬유의 열적 안정성(PVA 열분해 vs 강섬유 생존)이 잔류 성능의 지배 인자로 작동함을 규명했다. 800 °C에서는 강섬유-UHPFRC계만 폭렬로 소멸하고 PVA-UHPFRC계는 생존하는 역전 현상이 핵심 발견이다.

## Key Contributions

1. **습식 계면의 우월성 실증**: fresh-to-fresh 타설의 동기 수화 + 계면을 가로지르는 섬유 정격 덕분에 분열인장 부착강도가 모노리식 SCC 대비 상온에서 CS-EC-PV +19.1 %, CS-EC-SF +31.9 %, CS-UH-PV +34.7 %, CS-UH-SF +45.6 %. 수리·보강 공학에서 약점으로 취급되던 콘크리트 간 계면이 hot-joint에서는 최약면이 되지 않음.
2. **PVA 열분해가 만드는 400 °C 취성 전환**: PVA 융점 230 °C, 400 °C 이상에서 열분해로 계면 터널(interfacial tunnel) 형성 → PVA계 복합시스템은 400 °C부터 연성 파괴가 취성 파괴로 전환(파괴면에 PVA 섬유 부재 확인). 강섬유계는 600 °C까지 연성 유지.
3. **CS-UH-SF 폭렬 역설**: 강섬유 UHPFRC계는 600 °C까지 전 시험체 중 최고 성능(P_MOR 6.43 kN @ 600 °C)이나 690–700 °C 구간에서 열폭렬로 800 °C 데이터 없음(SF-UHPFRC 단독체의 650 °C 초과 폭렬 취약성[11]이 그대로 지배). 반면 PVA-UHPFRC계는 용융 PVA가 기공압 완화 채널을 만들어 800 °C에서도 폭렬·박리 없이 생존.
4. **SEM/EDS로 정량화한 계면 수화 차이**: 600 °C 노출 후 Si/Ca 비가 SCC/계면/UHPC 층에서 0.63/0.78/0.96 vs SCC/계면/ECC 층 0.46/0.52/0.56. UHPFRC의 저 w/b 2차 수화(xonolite·tobermorite 안정 C-S-H)가 계면의 C-S-H 밀도·강성을 높여 부착 보존의 미시적 근거 제공.
5. **FEA/ANN 입력용 회귀모델**: 노출온도 T를 입력으로 P_MOR·인장부착·질량손실의 β_T 계수 로지스틱 선형회귀(예: CS-EC-PV β_T,PMOR = 0.9035 − 0.001109T), R² = 91–98 %. 복합시스템 스케일의 고온 잔류성능 모델로는 초기 사례.

## Methods

- **배합**(Table 2): ECC = OPC + GGBS/c 1.2 + 실리카샌드 0.8, w/c 0.58, PVA 또는 SF 2.0 vol %(fc 76.2/80.7 MPa, 휨 13.8/13.4 MPa). UHPFRC = HE 시멘트 + 실리카퓸/c 0.2 + GGBS/c 0.25 + 실리카샌드 0.8 + 석영분 0.35, w/c 0.21(fc 112.2/138.6 MPa, 휨 19.7/26.8 MPa). SCC = OPC 350 kg/m³, FA/c 0.43, w/c 0.48(fc 44.2 MPa, 휨 8.5 MPa). 슬럼프플로우 670 mm(SCC), 모르타르 플로우 ≥ 180 mm(ECC/UHPFRC).
- **섬유**(Table 1): PVA 8 mm × 38 μm, E 42 GPa, 1620 MPa, 융점 230 °C. 강섬유 13 mm × 0.2 mm, E 200 GPa, 2750 MPa.
- **시험체·시험**: 50 × 76 × 355 mm 프리즘(하부 ECC/UHPFRC 38 mm + 상부 SCC 38 mm, 표면처리·다짐 없이 즉시 연속 타설) 90개 + 모노리식 SCC 30개 → 4점 휨(ASTM C1609, 0.05 mm/min). 절단 큐보이드 50 × 76 × 76 mm 120개 → 분열인장 부착강도(ASTM C496, 0.1 MPa/s). 전기로 측면 가열 200/400/600/800 °C + 2.5 h 유지 + 공랭(로 가열곡선을 ISO 834·ASTM E119와 비교 제시). 질량손실, 표면 색변·균열 관찰, SEM/EDS(200 °C·600 °C 시편 계면).

## Results

- **휨 피크하중 P_MOR (kN)**:

| 온도 | SCC | CS-EC-PV | CS-EC-SF | CS-UH-PV | CS-UH-SF |
|---|---|---|---|---|---|
| 23 °C | 5.24 | 8.10 (+54.6 %) | 8.34 (+59.1 %) | 12.10 (+130.7 %) | 12.53 (+139.1 %) |
| 200 °C | 3.92 | 4.69 | 5.89 | 9.48 | 11.25 |
| 400 °C | 2.43 | 3.10 | 4.43 | 5.03 | 10.81 |
| 600 °C | 1.07 | 1.83 | 2.00 | 0.80 | 6.43 |
| 800 °C | 0.31 | 0.70 | 1.15 | 0.34 | –*(폭렬) |

- 상온 Δ_MOR은 CS-EC-PV +128.1 %, CS-EC-SF +85.4 %, CS-UH-PV +56.2 %, CS-UH-SF +50.6 %; 초기강성 +59.1~215.6 %; 비례한계 에너지 흡수는 SCC 대비 10.4/9.3/24.1/23.4 배(궁극한계 기준 5.8–16.1 배). 전 시험체에서 P_LOP < P_MOR, 즉 deflection hardening.
- **부착강도 감소율**: 400 °C에서 EC-PV −28.3 %, EC-SF −21.7 %, UH-PV −18.6 %, UH-SF −6.9 %(모노리식 SCC는 −35 % 초과). 600 °C 잔존율은 EC-PV 40 %, EC-SF 52 %, UH-PV 28 %(PVA 열분해+계면 균열로 이례적 급락, P_LOP 0.46 kN), UH-SF 50 %. 800 °C에서 모노리식 SCC −88.7 %(석회질 골재 탈탄산), CS 전반 −75 % 이상.
- **파괴 모드**: 400 °C 미만 전 CS 연성(저면에서 시작하는 곡절균열 + 미세 균열 동반). 400 °C 이상 PVA계는 무경고 취성 파괴, 강섬유계는 연성 유지·완만한 softening. 계면 박리·수평 미끄럼은 CS-UH-SF 폭렬분 외 800 °C까지 전무.
- **SEM**: 200 °C에서는 계면 전이영역에 양측 배합 성분(섬유+굵은 골재 입자)이 공존하며 손상 없음. 600 °C에서 PVA계는 계면 관통 터널(PVA 용융 흔적)과 진전 균열, 특히 CS-EC-PV 열화 최대. 그러나 600 °C 이후에도 완전 박리 없음.

## Related Notes

- [[lv-2025-high-temperature-ternary-egc-pe]] — PE 섬유 열약점(~150 °C) vs PVA(230 °C 융점·400 °C 열분해)의 온도 스펙트럼 비교; EGC는 매트릭스 내열성이 높아 800 °C 무폭렬이 공통 결론.
- [[abbas-2016-uhpc-mechanical-performance-durability-sustainability]] — 치밀한 UHPC의 수증기압 폭렬 취약성과 PP/PVA 용융 섬유 완화 논점의 원천; CS-UH-SF 폭렬·CS-UH-PV 생존 결과와 직결.
- [[cheng-2024-ceramsite-lw-egc-high-temp]] — 세라믹라이트 LWA EGC의 고온 잔류성능; 경량화 경로 vs 본 논문의 기능적 적층 경로 대비.
- [[sahmaran-2009-aggregate-type-size-ecc]] · Sahmaran et al. 2011(JMCE 23, 고온 ECC 잔류성능, 참고문헌 [2][43]) — 공동저자 Şahmaran 그룹의 ECC 고온 연구 계보.
- [[li-mo-2011-hes-ecc-repair]] · [[kumar-2022-egc-repair-sand-binder-ratio]] — ECC/EGC 오버레이 수리의 부착 논점을 fresh-to-fresh 신설 타설로 확장한 사례.
- [[pseudo-strain-hardening-criteria]] — CS 프리즘의 deflection hardening 판정(P_LOP < P_MOR)은 PSH 판정식의 휨 버전.
