---
title: "Experimental Investigation of High-performance Fiber-reinforced Cementitious Composite and its Effect on RC Beams by Numerical Method"
type: source_note
source: "sources/khaleghi-2025-experimental-investigation-of-high-performance-fiber-reinforced.pdf"
citation: "Khaleghi, R., Shokoohfar, A., Farokhzad, R., & TahamouliRoudsari, M. (2025). Experimental Investigation of High-performance Fiber-reinforced Cementitious Composite and its Effect on RC Beams by Numerical Method. Periodica Polytechnica Civil Engineering, 69(1), 45-59."
date: 2026-08-24
tags: [hpfrcc, hybrid-fibers, micro-steel-fiber, macro-hooked-steel-fiber, pva-fiber, gfrp-rebars, 4-point-bending, abaqus-cdp-model, periodica-polytechnica, theory-foundation]
---

# 마이크로·매크로 강섬유 및 PVA 하이브리드 보강 90 MPa급 HPFRCC의 JSCE 1축 인장 거동, GFRP 배근 보 4점 휨 성능 및 ABAQUS CDP 비선형 유한요소 해석

## Summary

GFRP(유리섬유강화폴리머) 보강근을 배근한 철근콘크리트(RC) 구조 부재의 취성적 파괴와 과도한 사용성 처짐·균열을 극복하기 위해, 마이크로 직선 강섬유(MS), 매크로 후크형 강섬유(MSH) 및 친수성 PVA 섬유를 하이브리드로 복합 혼입한 **90 MPa급 고성능 섬유보강 시멘트 복합체(HPFRCC: High-Performance Fiber-Reinforced Cementitious Composites)**를 개발하고, **JSCE 도그본 1축 직접 인장 시험, $500\ \text{mm}$ 소형 보 및 $1700\ \text{mm}$ 실대형 GFRP 배근 보(순경간 1500 mm) 4점 휨 재하 시험, 그리고 ABAQUS 콘크리트 손상 소성(CDP: Concrete Damaged Plasticity) 비선형 유한요소 해석**을 통해 섬유 조합별 **압축강도(85.5~93.0 MPa), 인장 변형경화, 휨 내력(최대 124.5 kN), 처짐 연성 지수, 균열 개구 억제 및 전단 내력 증대 효과**를 체계적으로 규명한 이란 이슬람아자드대학교 Reza Khaleghi 박사 및 Ahmad Shokoohfar 교수 연구팀의 최신 2025년 랜드마크 하이브리드 HPFRCC 구조 원전 논문. 연구 결과 마이크로 강섬유(1.0 vol.%)와 매크로 후크 강섬유(1.0 vol.%) 및 PVA(0.5 vol.%)를 조합한 삼중 하이브리드 배합(M1)에서 마이크로 섬유의 조기 미세균열 가교와 매크로 섬유의 거대 균열 후크 인발 저항 시너지가 극대화되어, 28일 압축강도 **$93.0\ \text{MPa}$**, 실대형 보의 최대 휨 내력 **$124.5\ \text{kN}$**(무보강 대비 72.4 % 증대) 및 처짐 연성 **2.8배 증대**를 달성하였다. 또한 ABAQUS CDP 전산 모델을 통해 실험 파괴 거동을 오차 5 % 이내로 완벽히 재현하였다.

## Key Contributions

1. **마이크로(MS)-매크로(MSH)-PVA 삼중 하이브리드 90 MPa급 HPFRCC 개발**:
   - 다중 스케일 섬유 가교 메커니즘을 통해 28일 압축강도 93.0 MPa 및 실대형 보 휨 내력 72.4 %($72.2 \rightarrow 124.5\ \text{kN}$) 증대를 실현.
2. **GFRP 보강근 배근 보의 전단 취성 파괴 $\rightarrow$ 고연성 휨 파괴 모드 전환**:
   - GFRP 보강근의 낮은 탄성계수($48\sim 52\ \text{GPa}$)로 인한 급격한 대각 전단 균열을 HPFRCC 매트릭스가 완벽히 구속하여 전단 보강근 없이도 연성 휨 거동을 유도.
3. **$1700\ \text{mm}$ 실대형 보 4점 휨 실험과 ABAQUS CDP 비선형 유한요소 해석 완벽 일치**:
   - 콘크리트 손상 소성 파라미터(팽창각 $\psi = 36^\circ$, 편심률 $\epsilon = 0.1$, $f_{b0}/f_{c0} = 1.16$)를 정식화하여 전산 해석 오차를 ±4.5 % 이내로 검증.
4. **JSCE 규격 도그본 직접 인장 시험 기반 다중 미세균열 거동 입증**:
   - 인장 응력-변형률 곡선에서 균열 발생 후 인장 강도가 상승하는 유사 변형경화 및 국소화 지연 메커니즘을 확인.

## Methods

- **재료 사양 및 HPFRCC 배합비 (Table 1~2, $\text{kg/m}^3$)**:
  - 결합재: 1종 보통 포틀랜드 시멘트(Type I OPC, 분말도 $3250\ \text{cm}^2/\text{g}$), 실리카 흄 슬러리(SF 고형분 $1.35\ \text{g/cm}^3$), 석영 분말(QP), 탄산칼슘 분말($\text{CaCO}_3$).
  - 골재 및 감수제: 미립 규사 ($d \le 0.6\ \text{mm}$), 고성능 폴리카르본산계 감수제(SP).
  - 보강 섬유 (3종 하이브리드 조합):
    1. MS (Micro Steel): 직경 $0.25\ \text{mm}$, 길이 16 mm, 인장강도 2720 MPa, 탄성계수 210 GPa.
    2. MSH (Macro Steel Hooked): 직경 $0.70\ \text{mm}$, 길이 50 mm, 인장강도 1120 MPa, 탄성계수 200 GPa.
    3. PVA 섬유: 직경 $15\ \mu\text{m}$, 길이 12 mm, 인장강도 1250 MPa, 탄성계수 33 GPa.
  - 내부 보강근: $\phi 6\ \text{mm}$ 및 $\phi 8\ \text{mm}$ GFRP 철근 ($f_t = 1251\sim 1325\ \text{MPa}, E = 48.2\sim 52.1\ \text{GPa}$).
- **실험 장비 및 시험 방법 (Section 2 & Fig. 1~5)**:
  - 1축 인장: JSCE 2008 도그본 시편 (2톤 서보 전기식 만능재하시험기, 변위제어 $0.5\ \text{mm/min}$).
  - 휨 재하: 4점 휨 시험 (500 mm 소형 보 경간 300 mm, 1700 mm 실대형 보 경간 1500 mm, 중앙부 LVDT 처짐 계측).
  - 전산 해석: ABAQUS 3D 솔리드 C3D8R 요소 및 T3D2 트러스 요소를 결합한 비선형 CDP 모델링.

## Results

### 1. 섬유 배합별 HPFRCC의 압축강도 및 $1700\ \text{mm}$ 실대형 GFRP 보 휨 실험 결과 비교표 (Table 3~5 & Fig. 6~12)

| 배합 ID | 섬유 구성 (체적비) | 28일 압축강도 ($f_c$, MPa) | 항복 하중 ($P_y$, kN) | 최대 휨내력 ($P_{max}$, kN) | 내력 증대율 (%) | 극한 처짐 ($\delta_u$, mm) | 파괴 모드 |
|---|---|---|---|---|---|---|---|
| **Control (NC)** | 무보강 일반 콘크리트 | 32.5 ± 1.2 | 45.2 ± 1.5 | 72.2 ± 2.0 | 0.0 % (기준) | 14.5 ± 0.6 | GFRP 파열 및 전단 취성 파괴 |
| **M1 (하이브리드 최적)**| **MS 1.0% + MSH 1.0% + PVA 0.5%**| **93.0 ± 2.5 (최고)**| **88.5 ± 2.2** | **124.5 ± 3.2 (최고)**| **+72.4 %** | **40.5 ± 1.2 (최고)**| **고연성 다중 휨 파괴 ($\mu = 2.8$)**|
| **M2 (MS 단독)** | MS 2.0 % 단독 | 85.5 ± 2.0 | 76.0 ± 2.0 | 108.2 ± 2.8 | +49.9 % | 28.5 ± 1.0 | 미세 휨 균열 후 인발 |
| **M3 (MSH 단독)**| MSH 2.0 % 단독 | 92.4 ± 2.4 | 81.5 ± 2.1 | 115.0 ± 3.0 | +59.3 % | 34.0 ± 1.1 | 후크 인발 연성 파괴 |

### 2. 다중 스케일 가교 및 GFRP 상호작용 해석
- **다중 스케일 가교 시너지**: 미세 균열($w < 50\ \mu\text{m}$)은 고밀도 마이크로 강섬유(MS)와 PVA 섬유가 1차 억제하고, 균열 개구 확대($w > 0.5\ \text{mm}$) 시에는 $50\ \text{mm}$ 매크로 후크 강섬유(MSH)가 기계적 앵커링을 발휘하여 하중을 지속 지지함.
- **GFRP 취성 극복**: 비부식성 GFRP 철근의 고인장 성능($>1250\ \text{MPa}$)이 HPFRCC의 인장 구속력에 의해 조기 탈락 없이 100 % 완전 발현됨.

- **종합 결론**: 본 논문은 마이크로·매크로 강섬유 및 PVA 하이브리드 보강을 통해 90 MPa급 HPFRCC의 역학 물성을 극대화하고, GFRP 보강근 배근 실대형 보의 휨 내력(72 % 증대)과 연성을 대폭 향상시킨 최신 2025년 구조 복합체 랜드마크 원전 논문임.

## Related Notes

- [[esfahani-2020-hpfrcc-substitution-gfrp-rc-beams]] — GFRP 보강근 보 HPFRCC 층상 치환 휨내력 원전.
- [[kang-2016-hybrid-steel-microfiber-uhpc-tensile]] — 이방연 교수 강섬유-마이크로섬유 하이브리드 UHPC 원전.
- [[high-strength-strain-hardening-composites]] — 고강도 섬유보강 변형경화 복합체 체계.
- [[hung-2021-structural-engineering-uhpc-review]] — 고성능 콘크리트 구조 부재 설계 원전.
