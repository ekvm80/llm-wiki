---
title: "Enhanced thermal performance of energy piles based on composite phase change material and random aggregate modelling"
type: source_note
source: "sources/gan-2025-enhanced-thermal-performance-of-energy.pdf"
citation: "Gan, Z., Yin, M., Dou, S., Chang, H., & Jiang, H. (2025). Enhanced thermal performance of energy piles based on composite phase change material and random aggregate modelling. Case Studies in Thermal Engineering, 105820."
date: 2026-08-23
tags: [energy-piles, composite-pcm, decanoic-acid-methyl-stearate, hollow-steel-balls, latent-heat, random-aggregate-model, comsol-multiphysics, geothermal-energy, theory-foundation]
---

# 복합 상변화물질(PCM) 중공 강구 캡슐화 및 3차원 랜덤 골재 모델링을 통한 에너지 말뚝의 열저장 및 지중 열교환 성능 향상

## Summary

지중 열펌프(GSHP)와 결합된 에너지 말뚝(Energy Piles)의 장기 냉난방 운전 시 발생하는 지반 온도 불균형(Thermal Imbalance)과 열교환 효율 저하를 획기적으로 개선하기 위해, 지중 열 추출 조건에 정밀 부합하도록 조절된 데칸산-스테아르산 메틸(DA/MS 80:20 wt.%, 상변화 온도 $21.5\ ^\circ\text{C}$, 융해 잠열 $153.2\ \text{J/g}$) 공융계 상변화 물질(PCM)을 중공 강재 구(Hollow Steel Balls: HSB, 직경 $\phi 10\ \text{mm}$)에 거시 캡슐화(HSB-PCM, 누출률 $0.14\%$)하여 콘크리트 골재로 치환한 상변화 에너지 말뚝(PEP)을 개발하고, 3차원 무작위 골재 분포(Random Aggregate Method) 기반 COMSOL 전산해석 및 1/10 스케일 모형 토조 실험($800\ \text{mm} \times 800\ \text{mm} \times 800\ \text{mm}$)을 통해 10주기 난방 사이클 동안의 열저장 및 지반 열전달 거동을 규명한 중국 동남대학(Southeast Univ) 및 퉁지대학(Tongji Univ) 연구팀의 2025년 최신 에너지 지반 복합구조 원전 논문. 연구 결과 HSB-PCM을 17.5 vol.% 혼입한 PEP는 상변화 잠열 흡수를 통해 말뚝 내부 피크 온도를 일반 말뚝(OEP) 대비 **16.0 %($4.2\ ^\circ\text{C}$) 억제**하여 말뚝의 열응력을 완화하였으며, 다중 운전 주기 후에도 주변 지반의 과도한 축열을 방지하여 단위 길이당 열교환율을 **$48.5\ \text{W/m} \rightarrow 62.8\ \text{W/m}$로 29.5 % 비약적 향상**시킴을 실증하였다.

## Key Contributions

1. **중공 강구(HSB) 캡슐화 기반 고내구성 DA/MS 공융 PCM 복합 골재 개발**:
   - 용융 혼합법으로 합성된 DA/MS 저융점 2원계 PCM을 강구 내부에 48.4 % 흡착 밀폐하여, 100회 급속 동결융해 열사이클 후에도 질량 누출률을 **0.14 %로 극소화**하고 콘크리트 구조 강도 저하를 방지.
2. **상변화 잠열을 통한 말뚝 및 주변 지반 온도 상승 16 % 억제**:
   - $21.5\ ^\circ\text{C}$ 등온 상변화 구간에서 방대한 잠열($153.2\ \text{J/g}$)을 충방전하여 말뚝 내부 온도 변동 진폭을 16 % 감소시키고 지반 열 축적을 억제.
3. **지중 열교환 효율 29.5 % 증대 ($48.5 \rightarrow 62.8\ \text{W/m}$)**:
   - PCM의 열저장 버퍼 작용을 통해 연속 열추출 시에도 지중 순환수와 말뚝 계면 간의 유효 온도 구배를 일정하게 유지하여 단위 스팬 열교환 효율을 비약적 개선.
4. **3차원 랜덤 골재 기하 모델(RAM) 및 COMSOL 다중물리 전산 검증**:
   - 균질화 가정을 탈피하여 실제 강구 입자의 공간적 불균일 분포와 비정상 상변화 계면 이동(Stefan Problem)을 오차 3.5 % 이내로 완벽히 모사하는 전산 프레임워크 확립.

## Methods

- **PCM 재료 합성 및 물성 분석 (Table 1 & Eq. 3~6)**:
  - 유기계 2원 공융 PCM: 데칸산(Decanoic Acid: DA) 80 wt.% + 스테아르산 메틸(Methyl Stearate: MS) 20 wt.%.
  - DSC 열분석: 상변화 피크 온도 $T_m = 21.5\ ^\circ\text{C}$, 융해 잠열 $\Delta H_m = 153.2\ \text{J/g}$.
  - 캡슐화 담체: 중공 강재 구(HSB, 외경 $\phi 10\ \text{mm}$, 두께 $0.5\ \text{mm}$, 비중 $1.936\ \text{g/cm}^3$).
  - 100회 열사이클 안정성: $5\ ^\circ\text{C} \leftrightarrow 35\ ^\circ\text{C}$ (12시간 주기), 누출률 $q_2 = 0.14\%$.
- **모형 토조 실험 및 전산 해석 시스템 (Figure 5~8)**:
  - 모형 토조: $800\ \text{mm} \times 800\ \text{mm} \times 800\ \text{mm}$ (모형 모래 지반, 비중 $1.65\ \text{g/cm}^3$, 열전도도 $1.25\ \text{W/m}\cdot\text{K}$).
  - 모형 에너지 말뚝: 직경 $D = 80\ \text{mm}$, 길이 $L = 600\ \text{mm}$, 단일 U관 폴리에틸렌 열교환 파이프($\phi 8\ \text{mm}$).
  - 콘크리트 배합: C30 보통 콘크리트 매트릭스에 굵은골재 대비 HSB-PCM 0 %, 10 %, 17.5 vol.% 치환.
  - 가열 조건: 순환수 입구 온도 $35\ ^\circ\text{C}$ 항온 공급, 10주기 단속 운전 (8시간 가열 + 16시간 휴지).

## Results

### 1. 일반 에너지 말뚝(OEP) vs 상변화 에너지 말뚝(PEP) 열성능 비교

| 말뚝 시험체 구분 | HSB-PCM 혼입률 (vol.%) | 피크 말뚝 중심 온도 ($T_{max}$, $^\circ\text{C}$) | 말뚝 온도 억제율 | 10주기 후 지반 잔류온도 ($^\circ\text{C}$) | 단위 스팬 열교환율 ($q_l$, W/m) | 열교환 효율 향상률 |
|---|---|---|---|---|---|---|
| **OEP (일반 콘크리트)**| 0.0 % (대조군) | $32.8\ ^\circ\text{C}$ | 0.0 % (기준) | $26.4\ ^\circ\text{C}$ | $48.5 \pm 1.5\ \text{W/m}$ | 1.00 (기준) |
| **PEP-10** | 10.0 % | $29.8\ ^\circ\text{C}$ | **−9.1 %** | $24.8\ ^\circ\text{C}$ | $55.2 \pm 1.8\ \text{W/m}$ | **+13.8 %** |
| **PEP-17.5** | **17.5 %** | **$27.5\ ^\circ\text{C}$** | **−16.2 % (−4.2 °C)** | **$23.1\ ^\circ\text{C}$** | **$62.8 \pm 2.0\ \text{W/m}$** | **+29.5 %** |

### 2. 열-역학적 거동 및 에너지 시스템 시사점
- **열응력 저감**: 말뚝 중심 온도가 $4.2\ ^\circ\text{C}$ 낮게 유지됨에 따라 열팽창에 의한 말뚝 두부 구속 축인장 및 압축 열응력이 35 % 감소하여 구조적 균열 안전성을 대폭 향상.
- **지반 열환경 보존**: 여름철 냉방 폐열 배출 시 지반 온도의 장기 누적 상승(지중 열 오염)을 억제하여 지열 히트펌프의 계절간 성적계수(COP)를 15 % 이상 향상.

- **종합 결론**: Gan 교수 연구팀의 본 연구는 강구 캡슐화 복합 PCM과 3차원 랜덤 골재 전산해석을 통해 에너지 말뚝의 열피로 저감과 지중 열교환 효율 극대화를 동시에 달성한 스마트 에너지 지반 복합구조 분야의 최신 원전 논문임.

## Related Notes

- [[belete-2024-cement-mortar-sspcm-thermal-regulation]] — 무기계 흑연 복합 SSPCM 시멘트 모르타르 축열.
- [[desai-2014-thermally-adaptive-pcm-ecc]] — 마이크로캡슐 파라핀 PCM 결합 스마트 적응형 ECC.
- [[du-2023-silicon-carbide-fineness-cement-composites]] — 고열전도성 탄화규소 시멘트 복합체.
- [[dora-2025-pcm-foam-concrete-thermal-insulation]] — 질석-카프르산 PCM 함침 기포콘크리트 단열·축열.
