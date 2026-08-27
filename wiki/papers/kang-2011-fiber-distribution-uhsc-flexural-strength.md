---
title: "The effect of fibre distribution characteristics on the flexural strength of steel fibre-reinforced ultra high strength concrete"
type: source_note
source: "sources/Kang-2011-The effect of fibre distribution cha.pdf"
citation: "Kang, S. T., Lee, B. Y., Kim, J.-K., & Kim, Y. Y. (2011). The effect of fibre distribution characteristics on the flexural strength of steel fibre-reinforced ultra high strength concrete. Construction and Building Materials, 25(5), 2450-2457."
date: 2026-08-24
tags: [uhsc, steel-fiber, fiber-distribution, fiber-orientation, image-processing, flexural-strength, placing-direction, bang-yeon-lee, kaist, chungnam-national-university, construction-and-building-materials, landmark-paper]
---

# 강섬유 보강 초고강도 콘크리트(SFR-UHSC, 198 MPa)의 타설 방향에 따른 섬유 분산·배향 특성이 휨강도에 미치는 영향: 화상 처리 기반 정량 평가 및 예측

## Summary

초고강도 콘크리트(UHSC, 압축강도 $198\ \text{MPa}$)에 고강도 강섬유($\sigma_{fu} = 2500\ \text{MPa}$, $d_f = 0.2\ \text{mm}$, $L_f = 13\ \text{mm}$, $V_f = 2.0\ \text{vol.}\%$)를 보강한 SFR-UHSC의 **타설(Placing) 방향이 섬유의 공간 분산(Dispersion) 및 배향(Orientation) 특성에 미치는 영향과, 이 섬유 분포 특성이 휨강도에 미치는 정량적 효과**를 규명하기 위해, 보 종방향 평행 타설(PL) 및 직교 타설(TL) 두 조건으로 제작한 $100\ \text{mm} \times 100\ \text{mm} \times 400\ \text{mm}$ 3점 휨 시험체를 대상으로 휨시험을 수행하고, 파괴 단면의 **화상 처리(Image Processing) 기반 섬유 분산계수($\alpha_f$), 섬유 개수 밀도($F_n$), 평균 경사각($\bar{\theta}$) 및 배향계수($\eta_\theta$)**를 정밀 계측하여, 균일 분포 가정 대비 실측 섬유 분포를 반영한 휨강도 예측 정확도를 비교 평가한 **한국건설기술연구원(KICT) 강수태 연구원, 미시건 대학교(당시 소속) 이방연(Bang Yeon Lee) 교수, KAIST 김진근 교수, 충남대학교 김윤용 교수** 연구팀의 Construction and Building Materials 2011년 랜드마크 원전 논문. 연구 결과 종방향 평행 타설(PL) 시 보 축방향 횡단면(TC)의 섬유 배향계수가 $\eta_\theta = 0.83$으로 직교 타설(TL, $\eta_\theta = 0.72$) 대비 $15\%$ 높았으며, 이에 따라 휨강도가 **PL: $47.5\ \text{MPa}$ vs. TL: $36.8\ \text{MPa}$**로 $29\%$ 차이가 발생함을 실증하였다.

## Key Contributions

1. **타설 방향에 따른 강섬유 3차원 분포 특성(분산·배향·경사각)의 정량적 매핑 완성**:
   - 종방향(PL) 타설 시 유동 흐름에 의해 섬유가 보 축방향으로 정렬($\bar{\theta} \approx 25°$)되어 최적 가교 효율을 달성하는 메커니즘을 화상 분석으로 규명.
2. **화상 처리 기반 섬유 분산계수($\alpha_f$), 개수 밀도($F_n$), 경사각($\bar{\theta}$) 동시 산출 방법론 확립**:
   - 이진화(Binarization), 레이블링(Labeling), 원형도(Circularity = $F_c = \cos\theta$) 분석 알고리즘을 표준화.
3. **균일 분포 가정의 오차 검증 및 실측 분포 기반 휨강도 예측 정확도 향상**:
   - 균일 분포 가정 시 최대 $30\%$ 강도 과대/과소 예측 오차가 발생하지만, 실측 분포 반영 시 오차가 $5\%$ 이내로 축소.
4. **섬유 배향계수($\eta_\theta$)와 복합체 인장/휨강도 간의 선형 비례 관계 정량화**:
   - $\sigma_{cft} = \alpha \cdot \sigma_{ct}$ (단축 인장-휨 변환) 관계에서 $\alpha = 1.3\sim 1.5$, $\eta_\theta$가 강도에 선형 비례함을 실증.

## Methods

- **SFR-UHSC 배합 (Table 2)**:
  - 시멘트, 실리카 흄, 규사($d_{max} = 0.5\ \text{mm}$), 충전재, 감수제, 강섬유 ($V_f = 2.0\ \text{vol.}\%$).
  - 강섬유 사양: 직경 $0.2\ \text{mm}$, 길이 $13\ \text{mm}$ ($L_f/d_f = 65$), 인장강도 $2500\ \text{MPa}$.
  - 유동성: 플로우 시험 ASTM C1437 기준 약 $230\ \text{mm}$.
  - 평균 압축강도: $198 \pm 3.44\ \text{MPa}$.
- **타설 방향 변수 (Fig. 1)**:
  - PL (Parallel Longitudinal): 보 종방향에 평행하게 콘크리트 유동 타설.
  - TL (Transverse Longitudinal): 보 종방향에 직교하여 타설.
- **3점 휨 시험 (Section 3.1)**:
  - 시험체: $100 \times 100 \times 400\ \text{mm}$ 각주, PL 3개, TL 3개, Plain UHSC 4개.
  - 지간 $300\ \text{mm}$, 변위 제어 하중.
- **화상 처리 섬유 분포 분석 (Section 3.2 & Fig. 2~4)**:
  - 6방향 절단면(PL-TC, PL-HC, PL-VC, TL-TC, TL-HC, TL-VC) 촬영.
  - 분산계수 $\alpha_f = 1 - \text{COV}(F_n)$: 균일 분산 시 1, 편재 시 0.
  - 원형도 $F_c = A_{ob}/A_{cc} = \cos\theta$: 경사각 $\theta$ 역산출.

## Results

### 1. 타설 방향별 SFR-UHSC의 섬유 분포 특성 및 휨강도 비교표 (Table 3~4 & Fig. 5~8)

| 타설 방향 | 절단면 | 분산계수 ($\alpha_f$) | 섬유 밀도 ($F_n$, 개/cm$^2$) | 평균 경사각 ($\bar{\theta}$, deg) | 배향계수 ($\eta_\theta$) | 휨강도 ($\sigma_{cft}$, MPa) |
|---|---|---|---|---|---|---|
| **PL (종방향 평행)** | **TC (횡단면)** | **0.53 (최고)** | **38.5 개/cm$^2$** | **$25.2° \pm 3.5°$ (최적)** | **$0.83 \pm 0.02$** | **$47.5 \pm 2.8$ MPa** |
| PL | HC (수평면) | 0.42 | 28.2 개/cm$^2$ | $38.5° \pm 4.2°$ | $0.68 \pm 0.03$ | - |
| PL | VC (수직면) | 0.40 | 25.8 개/cm$^2$ | $42.1° \pm 4.5°$ | $0.62 \pm 0.03$ | - |
| **TL (직교)** | **TC (횡단면)** | **0.45** | **30.2 개/cm$^2$** | **$35.8° \pm 4.0°$** | **$0.72 \pm 0.03$** | **$36.8 \pm 3.2$ MPa** |
| TL | VC (수직면) | 0.48 | 32.5 개/cm$^2$ | $32.5° \pm 3.8°$ | $0.75 \pm 0.03$ | - |
| **Plain UHSC** | - | - | - | - | - | **$12.68 \pm 0.8$ MPa** |

### 2. 섬유 유동 정렬 메커니즘 해석
- **PL 타설의 우위 기구**: 종방향 타설 시 신선 콘크리트의 유동 전단류(Shear Flow)가 강섬유를 유동 방향(= 보 축방향)으로 정렬시키며, 이는 휨 시 인장 영역에서 균열면에 직교하는 최적 가교 배향을 형성.
- **TL 타설의 열위 기구**: 직교 타설 시 유동 방향이 균열면과 평행하므로 섬유가 균열 가교에 비효율적인 배향을 가지며, 결과적으로 휨강도가 $29\%$ 저하.
- **균일 분포 가정의 위험성**: 타설 조건을 무시하고 균일 섬유 분포를 가정한 강도 예측은 PL의 경우 과소평가, TL의 경우 과대평가를 유발하므로, 실물 시공에서 타설 방향 관리가 UHPC 품질 보증의 핵심 요인임.

- **종합 결론**: 본 논문은 강수태 연구원, 이방연 교수, 김진근 교수, 김윤용 교수 연구팀이 198 MPa SFR-UHSC의 타설 방향이 강섬유 분산·배향·경사각에 미치는 영향을 화상 처리 기법으로 세계 최초 정량화하고, 휨강도 예측에 실측 분포 반영의 필수성을 입증한 불후의 랜드마크 원전 논문임.

## Related Notes

- [[choi-2016-fiber-orientation-uhpcc-post-cracking-tensile]] — 이방연 교수: 섬유 배향각이 인장강도에 미치는 영향(배향각 2배 → 강도 2배).
- [[kang-2019-wra-rheology-fiber-orientation-uhpfrc]] — 이방연 교수: UHPFRC 유변학-섬유배향-휨강도 커플링 원전.
- [[strain-hardening-mechanism]] — 변형경화 미시역학 및 섬유 가교 이론.
- [[high-strength-strain-hardening-composites]] — 고강도 변형경화 복합체 설계 및 물성.
