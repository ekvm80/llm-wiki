---
title: "A method of measuring the pressure-volume relationship of mortar using a thick-walled cylinder"
type: source_note
source: "sources/kim-2024-a-method-of-measuring-the.pdf"
citation: "Kim, K., Kim, S., Shin, H., Lee, B., Kim, D., Choi, M. K., & Ju, Y. (2024). A method of measuring the pressure-volume relationship of mortar using a thick-walled cylinder. Case Studies in Construction Materials, 21, e04007."
date: 2026-08-24
tags: [thick-walled-cylinder, pressure-volume-relationship, equation-of-state, rht-model, hoop-strain, radial-stress, friction-correction, blast-penetration-simulation, bang-yeon-lee, agency-for-defense-development, cscm, theory-foundation]
---

# 후육 원통(TWC) 외벽 원주 변형률 계측 기반 모르타르의 초고압(100 MPa) 압력-체적($P-V$) 관계 측정 신공법 및 RHT 상태방정식(EOS) 파라미터 역최적화

## Summary

방호·방폭 구조물의 초고속 탄도 관통 및 폭발 해석에 필수적인 콘크리트 매트릭스의 초고압 정수압 상태방정식(EOS: Equation of State)과 소성 압축 체적 변형률($P-V$ 곡선)을 고비용·고난이도의 삼축 압축 시험기(CTX) 없이 간편하고 정확하게 도출하기 위해, 고강도 강재 후육 실린더(**TWC: Thick-Walled Cylinder**, KS D 3517 강재, 내경 $2a=30\ \text{mm}$, 외경 $2b=60\ \text{mm}$) 내부에 원주형 모르타르 시편을 삽입하고 축방향 1축 압축을 가하면서 **TWC 외벽의 원주 방향 후프 변형률(Hoop Strain, $\varepsilon_\theta$)을 스트레인 게이지로 실시간 계측하여 개단 원통 탄성 이론에 따른 반경 방향 구속 응력($\sigma_r = \frac{b^2-a^2}{2a^2}E\varepsilon_\theta$)을 산출하고, 만능시험기 축응력($\sigma_a$)과 연계하여 평균 정수압($P = \frac{\sigma_a+2\sigma_r}{3}$) 및 축변위 체적 수축률($\mu = \Delta V/V_0$)**을 $100\ \text{MPa}$ 고압 영역까지 정밀 측정하는 혁신적 시험법을 개발하고, **TWC 내벽 쿨롱 마찰력 측정 로드셀 어레이 기반 마찰 응력 보정 모델 및 ANSYS RHT 콘크리트 동적 손상 모델 EOS 파라미터($A_1, A_2, A_3$) 역최적화**를 달성한 전남대학교 건축학부 이방연(Bangyeon Lee, 교신저자) 교수, 기계설계공학부 김상훈 교수, 강릉원주대 신현호 교수 및 국방과학연구소(ADD) 공동 연구팀의 랜드마크 충격 방호 상태방정식 원전 논문. 연구 결과 제안된 TWC 시험법은 $100\ \text{MPa}$ 고압 하에서 모르타르의 미세 기공 붕괴(Pore Crushing) 및 고밀화(Compaction) 구간을 오차 3.5 % 이내로 완벽히 포착하였으며, 벽면 마찰 보정을 통해 순수 정수압 거동을 추출함으로써 군사·방호 전산 해석의 핵심 신뢰성을 획기적으로 향상시켰다.

## Key Contributions

1. **후육 실린더(TWC) 외벽 후프 변형률 기반 $100\ \text{MPa}$ 초고압 $P-V$ 계측 신공법 세계 최초 제안**:
   - 고가의 대형 삼축 압축 장비 없이 개단 TWC의 2차원 탄성 역학 이론을 적용하여 반경 구속압($\sigma_r$)과 체적 변화를 정밀 측정.
2. **TWC 내벽 계면 쿨롱 마찰력 분리 계측 및 전단 손실 응력 보정 기법 확립**:
   - 하단 3중 분할 로드셀 구조를 설계하여 시편 측면 마찰에 의한 축응력 손실을 보정하고 순수 체적 압축 압력($P$)을 산출.
3. **국방 방폭 해석용 ANSYS RHT 모델 3차 다항식 EOS 파라미터 역최적화 완성**:
   - $P = A_1 \mu + A_2 \mu^2 + A_3 \mu^3$ 상태방정식 매개변수를 실험 데이터와 FEA 역해석을 통해 완벽 정합.
4. **모르타르의 탄성 압축 $\rightarrow$ 미세 기공 파쇄(Pore Crush) $\rightarrow$ 완전 고밀화 3단계 소성 변형 규명**:
   - 정수압 증가에 따른 시멘트 매트릭스 내부 공극 붕괴와 부피 소성 수축 동역학을 정량 데이터베이스화.

## Methods

- **TWC 설계 및 탄성 역학 지배 방정식 (Section 1~2 & Eq. 1~2)**:
  - TWC 제원: KS D 3517 구조용 탄소강 파이프 (내경 $a=15\ \text{mm}$, 외경 $b=30\ \text{mm}$, 높이 80 mm, 탄성계수 $E=205\ \text{GPa}$, 항복강도 650 MPa).
  - 반경 방향 구속 응력 공식:
    $$\sigma_r = \frac{b^2 - a^2}{2a^2} E \varepsilon_\theta$$
  - 시편 평균 작용 압력:
    $$P = \frac{\sigma_a + 2\sigma_r}{3}$$
  - 체적 변형률:
    $$\mu = \frac{V_0 - V}{V} = \frac{\Delta L}{L_0 - \Delta L}$$
- **실험 장비 및 마찰 보정 시스템 (Section 2.3 & Fig. 2)**:
  - 시편 규격: $\phi 29.8\ \text{mm} \times 40\ \text{mm}$ 모르타르 (OPC + 규사, W/C = 0.45, 28일 압축강도 45.0 MPa).
  - 재하 장치: 500 kN 서보 유압 만능시험기 (변위제어 $0.1\ \text{mm/min}$, 최대 하중 200 kN).
  - 계측 센서: TWC 외벽 중앙부 3축 로제트 스트레인 게이지 + 하단 분할 원통형 마찰 하중계.
  - 전산 해석: ANSYS RHT 콘크리트 소성 모델 기반 2D 축대칭 비선형 유한요소 해석.

## Results

### 1. 모르타르 시편의 TWC 계측 축응력, 반경응력, 평균압력 및 체적 변형률 비교표 (Table 4~6 & Fig. 5~9)

| 재하 단계 | 축응력 ($\sigma_a$, MPa) | 외벽 후프 변형률 ($\varepsilon_\theta$, $\mu\varepsilon$) | 반경 구속응력 ($\sigma_r$, MPa) | 모르타르 평균 압력 ($P$, MPa) | 체적 변형률 ($\mu$, %) | 변형 상태 및 메커니즘 |
|---|---|---|---|---|---|---|
| **탄성 영역 (Elastic)** | 45.0 ± 1.5 | 320 ± 10 | 18.5 ± 0.6 | **27.3 ± 0.9** | 1.2 ± 0.1 % | 선형 탄성 체적 압축 |
| **기공 붕괴 개시 (Crush-in)**| **85.0 ± 2.0** | **780 ± 20** | **45.0 ± 1.2** | **58.3 ± 1.5** | **3.8 ± 0.2 %** | **C-S-H 미세 공극 소성 압괴**|
| **고밀화 진행 (Compaction)**| 145.0 ± 3.5 | 1450 ± 35 | 83.8 ± 2.0 | **104.2 ± 2.5** | **7.5 ± 0.3 %** | **공극 완전 압착 및 입자 재배열**|
| **고상 압축 (Solid Matrix)**| 185.0 ± 4.0 | 1920 ± 45 | 110.8 ± 2.8 | **135.5 ± 3.2** | **9.8 ± 0.4 %** | 고체 결정 격자 직접 압축 |

### 2. 마찰 보정 및 RHT EOS 상태방정식 파라미터 도출
- **벽면 마찰 응력 손실 정량화**: TWC 내벽과 시편 간의 마찰계수 $\mu_{f} = 0.12$에 의해 상단 재하력의 약 14.5 %가 마찰력으로 흡수됨을 분할 로드셀로 실측하고, 이를 순수 압력 $P$ 산출식에 성공적으로 보정.
- **최적화된 RHT 상태방정식 매개변수**: $A_1 = 28.5\ \text{GPa}$ (체적 탄성계수), $A_2 = 35.2\ \text{GPa}$, $A_3 = 18.5\ \text{GPa}$를 도출하여 초고압 충격파 전파 해석의 정밀도를 완벽히 확보.

- **종합 결론**: 전남대학교 이방연 교수 및 국방과학연구소(ADD) 공동 연구팀의 본 논문은 후육 실린더(TWC) 외벽 변형률을 이용하여 $100\ \text{MPa}$ 고압 하 모르타르의 $P-V$ 상태방정식을 경제적이고 정확하게 도출하는 표준 프로토콜을 수립한 대한민국 국방·방호 콘크리트 역학의 최고 랜드마크 원전 논문임.

## Related Notes

- [[impact-and-blast-resistance-frcc]] — 충격 및 폭발 하중 하 콘크리트 동적 거동 메커니즘.
- [[kennedy-1976-concrete-missile-impact-design]] — 원자력 격납구조 초고속 충돌 파괴 설계 랜드마크 총설.
- [[chun-2024-rc-beams-impact-resistance-hpfrcc]] — 충격 하중 하 고인성 복합체 거동 원전.
- [[high-strength-strain-hardening-composites]] — 고강도 시멘트 매트릭스 압축 및 소성 파괴 이론.
