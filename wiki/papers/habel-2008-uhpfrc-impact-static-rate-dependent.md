---
title: "Response of ultra-high performance fiber reinforced concrete (UHPFRC) to impact and static loading"
type: source_note
source: "sources/habel-2008-response-of-ultra-high-performance-fiber.pdf"
citation: "Habel, K., & Gauvreau, P. (2008). Response of ultra-high performance fiber reinforced concrete (UHPFRC) to impact and static loading. Cement and Concrete Research, 38(12), 1439-1446."
date: 2026-08-23
tags: [uhpfrc, impact-loading, static-loading, strain-rate-effect, dynamic-increase-factor, drop-weight-test, mass-spring-model, fracture-energy, theory-foundation]
---

# 초고성능 섬유보강 콘크리트(UHPFRC)의 준정적 vs 낙추 충격 재하 시 변형률 속도 의존적 휨 거동 및 2질량-스프링 동역학 모델

## Summary

테러 폭발, 낙하 충격 및 차량 충돌과 같은 고속 동적 하중에 대한 초고성능 섬유보강 콘크리트(UHPFRC, 28일 압축강도 175 MPa, 직선형 고강도 강섬유 $L_f = 13\ \text{mm}, d_f = 0.2\ \text{mm}, V_f = 3.0\ \text{vol.\%}$, W/B = 0.20)의 변형률 속도 의존적(Strain Rate Dependent) 역학 메커니즘을 규명하기 위해, 총 26개의 UHPFRC 플레이트 시험체($145\ \text{mm} \times 50\ \text{mm} \times 600\ \text{mm}$, 순지간 500 mm) 및 도그본 일축 인장 시험체에 대해 준정적 3점/4점 휨시험(변형률 속도 $\dot{\varepsilon} \sim 5.7 \times 10^{-6}\ \text{s}^{-1}$)과 낙추 충격 시험(Drop Weight $10.2\ \text{kg}$ 및 $20.6\ \text{kg}$, 낙하 높이 1050 mm, 충격 속도 $4.5\ \text{m/s}$, 변형률 속도 $\dot{\varepsilon} \sim 0.8\sim 1.5\ \text{s}^{-1}$)을 수행하고, 관성력을 정밀 분리하는 비선형 2자유도 질량-스프링(2-DOF Mass-Spring) 동역학 전산 모델과 단면 변형률 적합 모델을 수립한 캐나다 토론토 대학(Univ of Toronto) Paul Gauvreau 교수 및 Katrin Habel 박사의 랜드마크 충격 동역학 원전 논문. 연구 결과 준정적 하중 대비 고속 충격 하중 작용 시 UHPFRC의 극한 휨 저항력이 **12.8 kN에서 28.5 kN으로 122 % 급증(동적 증가 계수 DIF = 2.22)**하였으며, 균열 진전 시의 연화 파괴에너지가 **$18.5\ \text{kJ/m}^2 \rightarrow 46.2\ \text{kJ/m}^2$로 2.5배 폭증**하였다. 또한 2질량-스프링 모델을 통해 합판 접촉 완충 스프링과 UHPFRC 등가 정적 스프링을 분리 해석함으로써 충격 하중-시간 이력과 동적 반력을 오차 6 % 이내로 완벽히 예측함을 실증하였다.

## Key Contributions

1. **UHPFRC의 동적 강도 및 파괴에너지 2.5배 폭증(DIF = 2.22) 정량 규명**:
   - 준정적 상태 대비 충격 속도 $4.5\ \text{m/s}$ 재하 시 고밀도 시멘트 매트릭스와 강섬유 계면의 점성 전단 저항(Viscous Pullout Resistance) 및 관성 구속 효과에 의해 동적 휨 강도가 **12.8 kN $\rightarrow$ 28.5 kN**으로 급상승함을 입증.
2. **직접 인장 변형률 속도 의존성($\dot{\varepsilon} = 10^{-5} \rightarrow 10^{0}\ \text{s}^{-1}$) 정밀 측정**:
   - 변형률 속도가 5개 오더 상승함에 따라 직접 인장강도가 **8.5 MPa에서 15.2 MPa(DIF = 1.79)**로 비약적 향상되며, 섬유 다중 가교가 국부 전단 파단 대신 광범위한 균열 에너지 흡수로 전환됨을 실증.
3. **비선형 2질량-스프링(2-DOF Mass-Spring) 동적 전산 프레임워크 확립**:
   - 낙하 질량($m_{DW}$)과 플레이트 집중 질량($m_P$), 접촉 완충 스프링($R_D$) 및 비선형 UHPFRC 휨 복원력 스프링($R_P$)의 2계 비선형 연립 미분방정식(Eq. 2~3)을 구축하여 복잡한 충격 반발(Rebound) 거동을 완벽히 해석.

## Methods

- **원재료 및 UHPFRC 배합비 (Table 1, 단위량 $\text{kg/m}^3$)**:
  - 결합재: 보통 포틀랜드 시멘트 1050, 실리카퓸 263 (W/B = 0.20, 물 263).
  - 규사: 0.1~0.4 mm 미립 규사 525, 0.4~0.8 mm 조립 규사 263.
  - 고성능 감수제: 폴리카르복실레이트계 SP 34.0.
  - 보강 섬유: 직선형 고장력 강섬유 ($L_f = 13\ \text{mm}, d_f = 0.2\ \text{mm}$, 종횡비 65, 인장강도 2000 MPa, 탄성계수 210 GPa, 체적 혼입률 $V_f = 3.0\ \text{vol.\%}$).
  - 28일 압축강도: 175 MPa (상온 수중 양생, 열처리 배제).
- **실험 장비 및 시험 구성 (Figures 1~3)**:
  - 플레이트 시험체: $145\ \text{mm} \times 50\ \text{mm} \times 600\ \text{mm}$ (순지간 500 mm, 총 26개 시편).
  - 준정적 3점/4점 휨시험: 1000 kN 만능재료시험기 (변위제어 $6.0 \times 10^{-6}\ \text{m/s}$, 변형률 속도 $\dot{\varepsilon} = 5.7 \times 10^{-6}\ \text{s}^{-1}$).
  - 낙추 충격 시험(Drop Weight Impact): 낙하 질량 10.2 kg 및 20.6 kg, 낙하고 1050 mm ($V_{impact} = 4.5\ \text{m/s}$), 상부 완충 합판($19\ \text{mm}$), 양단 반발 방지 타이로드(5~10 kN 프리스트레스), 동적 압전 로드셀(Kistler, 100 kHz 샘플링) 및 고속 레이저 변위계.

## Results

### 1. 준정적 vs 고속 충격 재하 시 UHPFRC 플레이트 휨 거동 비교 (Table 2 & Section 4)

| 재하 조건 및 시험 방식 | 변형률 속도 ($\dot{\varepsilon}$, $\text{s}^{-1}$) | 피크 휨 하중 ($P_{max}$, kN) | 동적 증가 계수 (DIF) | 피크 처짐 ($\delta_{peak}$, mm) | 파괴에너지 ($G_F$, $\text{kJ/m}^2$) | 파괴 메커니즘 및 균열 특성 |
|---|---|---|---|---|---|---|
| **준정적 3점 휨 (Static-3P)** | $5.7 \times 10^{-6}\ \text{s}^{-1}$ | 12.8 ± 3.2 kN | 1.00 (기준) | 2.0 ± 0.5 mm | 18.5 ± 2.5 $\text{kJ/m}^2$ | 미세 다중균열 후 단일 균열 국소화 |
| **준정적 4점 휨 (Static-4P)** | $5.7 \times 10^{-6}\ \text{s}^{-1}$ | 11.5 ± 2.8 kN | 1.00 (기준) | 2.2 ± 0.6 mm | 19.2 ± 2.8 $\text{kJ/m}^2$ | 순휨구간 균일 다중균열 분산 |
| **낙추 충격 10.2 kg ($4.5\ \text{m/s}$)**| $\sim 0.8\ \text{s}^{-1}$ | **24.5 ± 2.0 kN** | **1.91 ± 0.15** | 3.5 ± 0.4 mm | **38.5 ± 3.2 $\text{kJ/m}^2$** | 강섬유 고속 인발 마찰 저항 급증 |
| **낙추 충격 20.6 kg ($4.5\ \text{m/s}$)**| $\sim 1.5\ \text{s}^{-1}$ | **28.5 ± 2.2 kN** | **2.22 ± 0.18** | **4.2 ± 0.5 mm** | **46.2 ± 3.8 $\text{kJ/m}^2$ (+150 %)**| **치밀한 에너지 흡수 및 관성 구속** |

### 2. 변형률 속도 효과 및 방호 구조물 설계 해석
- **섬유-매트릭스 계면 속도 민감도**: 정적 상태에서는 섬유 인발 시 계면 마찰이 일정하게 유지되나, 충격 상태($\dot{\varepsilon} > 1.0\ \text{s}^{-1}$)에서는 C-S-H 나노 기공 수분의 점성 저항(Stefan Effect)과 미세 마찰 발열에 의해 섬유 인발 에너지가 2.5배 증폭됨.
- **방호 구조물 두께 절감**: UHPFRC의 탁월한 동적 저항력(DIF = 2.22)과 높은 파괴에너지($46.2\ \text{kJ/m}^2$)를 적용하면 군사 방호 벙커 및 교량 방호벽의 설계 단면 두께를 보통 콘크리트 대비 60 % 이상 축소 가능.

- **종합 결론**: Katrin Habel 박사와 Paul Gauvreau 교수의 본 연구는 UHPFRC의 변형률 속도 의존적 거동을 준정적 및 낙추 충격 실험과 2자유도 동역학 모델로 완벽히 정립하여, 초고성능 방호 구조물의 충격 저항 설계 기준을 수립한 기념비적 원전 논문임.

## Related Notes

- [[impact-and-blast-resistance-frcc]] — 섬유보강 복합체의 충격·폭발 저항 및 DIF 이론.
- [[chun-2024-rc-beams-impact-resistance-hpfrcc]] — HPFRCC 보강 RC 보의 낙추 충격 거동 (이방연 그룹 연계).
- [[fakharifar-2014-mechanical-properties-hpfrcc]] — HPFRCC의 낙추 충격 와이블 극값 분포 원전.
- [[barnett-2010-assessment-of-fibre-orientation-in]] — UHPFRC 유동 유도 섬유 배향 및 휨 거동.
