---
title: "A Review of Developments and Challenges for UHPC in Structural Engineering: Behavior, Analysis, and Design"
type: source_note
source: "sources/hung-2021-a-review-of-developments-and.pdf"
citation: "Hung, C. C., El-Tawil, S., & Chao, S. H. (2021). A Review of Developments and Challenges for UHPC in Structural Engineering: Behavior, Analysis, and Design. Journal of Structural Engineering, 147(9), 03121001."
date: 2026-08-24
tags: [uhpc, uhpfrc, structural-engineering, r-uhpc-beams-columns, development-length, shear-strength, seismic-retrofitting, asce-jse, state-of-the-art-review, theory-foundation]
---

# 구조공학에서 철근 보강 초고성능 콘크리트(R/UHPC) 부재의 역학 거동·비선형 해석·설계 기준 및 기술적 도전 과제 총설

## Summary

압축강도 150 MPa 이상, 직접 인장강도 8 MPa 이상 및 우수한 인장 변형경화·균열 제어 능력을 갖춘 초고성능 콘크리트(UHPC)가 건축·토목 구조 부재의 경량화, 내진 성능 극대화 및 초장수명화를 위해 널리 적용됨에 따라, 종래의 보통 콘크리트(NC) 설계 규준(ACI 318, AASHTO)을 R/UHPC(철근 보강 UHPC) 부재에 직접 적용할 때 발생하는 구조역학적 한계와 잠재적 취성 위험을 극복하기 위해, **보(Flexural Beams), 기둥(Columns), 보-기둥 접합부(Beam-Column Joints), 전단벽(Shear Walls), 교량 바닥판 이음부(Bridge Deck Splices), 충격·폭발 방호 부재 및 구조물 보수·보강(Retrofitting)**에 이르는 전 영역의 최신 연구 성과와 파괴 메커니즘을 집대성하고, 현행 국제 설계 기준(미국 ACI 239R/AASHTO, 프랑스 NF P 18-470, 스위스 SIA 2052, 일본 JSCE)의 안전 여유도와 개선 방향을 체계적으로 비교 분석한 국립성공대, 미시간대, 텍사스대 알링턴 공동 연구팀의 ASCE 최상위 랜드마크 종합 총설(State-of-the-Art Review) 논문. 연구진은 UHPC의 초고부착 강도($\tau_b \ge 10.0\ \text{MPa}$)로 인해 이형철근 정착 및 이음 길이가 **$8\sim 10 d_b$**(보통 콘크리트 $30\sim 40 d_b$ 대비 70 % 이상 단축)만으로 항복강도 발현이 가능함을 입증하였다. 또한 압축 파쇄 변형률($\varepsilon_{cu} = 0.015$, NC의 5배)과 인장 가교 전단 기여도($V_c$)를 통합한 차세대 한계상태 설계 철학을 정립하였다.

## Key Contributions

1. **R/UHPC 부재별 역학 거동 및 파괴 메커니즘 전면 체계화**:
   - 휨 부재(인장 변형경화에 의한 중립축 상승 지연), 압축 기둥(연성 지수 3배 향상), 보-기둥 접합부(전단 보강근 50 % 절감)의 구조 메커니즘을 규명.
2. **철근 정착 및 이음 길이 $8\sim 10 d_b$ 축소 설계 기준 정립**:
   - 25~35 mm 대구경 이형철근에 대해서도 피복 두께 $3 d_b$, 매설 길이 $8\sim 10 d_b$에서 420 MPa 이상 완전 항복을 보장하는 부착 메커니즘을 검증.
3. **UHPC 인장 가교 기여도를 고려한 전단 내력 산정 모델 확립**:
   - 콘크리트 전단 기여분($V_c$)에 강섬유 인장 가교 응력($\sigma_{tu}$)을 정량 통합하여 전단 스터럽 없이도 고전단 저항성을 확보하는 설계식을 제시.
4. **글로벌 UHPC 설계 기준(ACI, AASHTO, NF P 18-470, SIA 2052) 정밀 비교**:
   - 각국 기준의 재료 인장 연화/경화 모델링 가정, 안전 계수, 크리프/건조수축 설계 상수를 표로 일목요연하게 비교.

## Methods

- **분석 대상 구조 부재 및 시스템 (Section 2~8)**:
  - 휨 부재: 단순보, 연속보, 프리스트레스트 거더 (섬유 혼입률 $1\sim 4\ \text{vol.\%}$, 강섬유 형상 Straight, Hooked, Twisted).
  - 압축 및 휨압축 부재: R/UHPC 기둥, 중공 단면 기둥, 콘크리트 충전 강관(CFT).
  - 접합부: 프리캐스트 교량 바닥판 루프 이음(Loop Joints), 전단 포켓, 보-기둥 내진 접합부.
  - 특수 하중 부재: 차량 충돌, 고속 비체 충격, 폭발 하중 하의 동적 변형 거동.
- **국제 설계 기준 비교 프레임워크 (Section 9)**:
  - ACI 239R (미국), AASHTO Guide Specifications for UHPC (미국), NF P 18-470 (프랑스 표준), SIA 2052 (스위스 표준), JSCE Recommendations (일본).

## Results

### 1. 글로벌 주요 UHPC 구조 설계 기준 비교 분석표 (Table 1~3 & Fig. 1~6)

| 설계 기준 / 기관 | 압축강도 기준 ($f_c'$, MPa) | 극한 압축변형률 ($\varepsilon_{cu}$) | 인장 거동 모델링 | 전단 내력 산정식 특성 | 철근 최소 정착/이음 길이 |
|---|---|---|---|---|---|
| **미국 ACI 239R / AASHTO** | $\ge 120\ \text{MPa}$ | $0.0035 \sim 0.015$ | 양선형 (Bilinear) 또는 인장 무시 | $V_n = V_{cf} + V_s$ (섬유 인장 가교 반영) | **$8\sim 10 d_b$** (매우 짧음) |
| **프랑스 NF P 18-470** | $\ge 130\ \text{MPa}$ | $0.004 \sim 0.010$ | 3선형 (경화/연화 및 배향계수 $K$) | $V_{Rd} = V_{Rd,c} + V_{Rd,f} + V_{Rd,s}$ | **$10\sim 12 d_b$** |
| **스위스 SIA 2052** | $\ge 150\ \text{MPa}$ | $0.005 \sim 0.012$ | 2선형 경화 후 소성 흐름 | 인장 가교 응력 적분 기반 전단 해석 | **$8\sim 10 d_b$** |
| **일본 JSCE** | $\ge 150\ \text{MPa}$ | $0.0035 \sim 0.008$ | 1축 인장 파괴에너지($G_F$) 모델 | $V_y = V_{cd} + V_{sd} + V_{fd}$ | **$10\sim 15 d_b$** |

### 2. 구조 성능 및 도전 과제 종합 분석
- **철근 부착 성능**: 강섬유 체적비가 $1\% \rightarrow 2\% \rightarrow 4\%$로 증가할 때 최종 부착응력은 29 %, 53 % 비약적으로 상승하여 최대 10 MPa 초과.
- **초고강도 매트릭스의 취성 완화**: 섬유 혼입률 2.0 vol.% 이상에서 R/UHPC 기둥의 축방향 연성 지수는 보통 RC 대비 200~300 % 증가하여 내진 연성도 4.0 이상 확보.

- **종합 결론**: 본 논문은 전 세계 UHPC 구조 공학의 이론적·실험적·설계적 성과를 완벽히 집대성하여, 차세대 초고성능 철근 콘크리트 구조물의 해석 및 설계를 위한 독보적이고 권위 있는 글로벌 가이드라인을 확립한 랜드마크 총설 논문임.

## Related Notes

- [[high-strength-strain-hardening-composites]] — UHPC 및 고강도 복합체 재료 역학 체계.
- [[structural-repair-and-retrofitting]] — UHPC 구조 보강 및 접합부 공학 체계.
- [[choi-2016-fiber-orientation-uhpcc-post-cracking-tensile]] — 이방연 교수 연구팀 UHPCC 섬유 배향 및 인장 모델 원전.
- [[esfahani-2020-hpfrcc-substitution-gfrp-rc-beams]] — HPFRCC 복합 구조 보 거동 원전.
