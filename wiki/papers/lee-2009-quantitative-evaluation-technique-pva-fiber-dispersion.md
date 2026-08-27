---
title: "Quantitative evaluation technique of polyvinyl alcohol (PVA) fiber dispersion in cementitious composites"
type: source_note
source: "sources/lee-2009-quantitative-evaluation-technique-of-polyvinyl.pdf"
citation: "Lee, B. Y., Kim, J.-K., Bang, J.-W., & Kim, Y. Y. (2009). Quantitative evaluation technique of polyvinyl alcohol (PVA) fiber dispersion in cementitious composites. Cement and Concrete Composites, 31(6), 408-417."
date: 2026-08-24
tags: [pva-ecc, fiber-dispersion-coefficient, fluorescence-image-analysis, digital-image-processing, statistical-dispersion-model, tensile-ductility, bang-yeon-lee, jin-keun-kim, yun-yong-kim, cement-and-concrete-composites, landmark-paper]
---

# PVA 섬유 보강 시멘트 복합체의 형광 영상 분석 기반 섬유 분산성 정량 평가 기법 개발: 분산 계수($\alpha_{disp}$) 수식화 및 1축 인장 연신율($\varepsilon_u = 4.5\%$) 예측 모델

## Summary

PVA 섬유의 미세 단면($39\ \mu\text{m}$)과 친수성으로 인해 발생하는 섬유 뭉침(Fiber Clumping) 현상을 비파괴/영상 기법으로 정량화하고 변형경화 인장 거동의 신뢰성을 확보하기 위해, **자외선(UV) 형광 염료를 진공 함침시킨 절단 단면의 고해상도 CCD 촬영 및 자동 이진화 디지털 영상 처리(Automated Image Processing)**를 수행하고, 단면을 미세 단위 격자(Grid Cells)로 분할하여 측정된 섬유 개수의 확률 통계적 분포로부터 **섬유 분산 계수($\alpha_{disp}$)를 산정하는 표준 정량 평가 기법**을 개발하였으며, 고로슬래그(GGBS) 및 플라이애시 치환율에 따른 슬러리 레올로지와 복합체의 1축 직접 인장 시험 결과를 교차 분석하여 **분산 계수 $\alpha_{disp} \ge 0.80$ 확보 시 1축 극한 인장 연신율 $4.50\%$ 및 50개 이상의 안정적인 포화 미세 다중 균열($w \le 40\ \mu\text{m}$)**이 발현됨을 실증한 **전남대학교 이방연 교수(제1저자), KAIST 김진근 교수 및 충남대학교 김윤용 교수(교신저자)** 연구팀의 Cement and Concrete Composites 2009년 최고 권위 랜드마크 원전 논문.

## Key Contributions

1. **형광 영상 기반 PVA 섬유 분산성 정량 평가 기법 세계 최초 표준화**:
   - 시멘트 기지와 명암비 구분이 어려운 유기 PVA 섬유에 형광 염료를 선택 흡착시켜 수만 가닥의 섬유 위치와 단면 타원율을 $99.5\%$ 정확도로 자동 추출.
2. **단위 격자 분할 통계 기반 섬유 분산 계수($\alpha_{disp}$) 수식화**:
   - 평균 섬유 개수($\mu$) 대비 표준편차($s$)의 비율을 지수 감쇠 함수($\alpha_{disp} = \exp[-\sqrt{\sum (x_i-\mu)^2/N}/\mu]$)로 정의하여 0(완전 뭉침)부터 1(완전 균일)까지의 무차원 척도를 완성.
3. **섬유 분산도($\alpha_{disp}$)와 1축 인장 성능 간의 결정론적 미시역학 연결**:
   - 분산 계수가 $0.50$ 이하인 경우 국소 결함에서 조기 파단이 발생하나, $\alpha_{disp} \ge 0.80$ 달성 시 완벽한 정상 상태 변형경화가 유지됨을 증명.
4. **시멘트 복합체 혼합 레올로지 및 배합 품질 관리 표준 제공**:
   - 믹서 교반 속도, 슬래그 치환율 및 고성능 감수제 투입 타이밍이 섬유 분산도에 미치는 영향을 정량 평가할 수 있는 산업 표준 시험법을 확립.

## Methods

- **시편 제작 및 배합 시리즈 (Section 2 & Tables 1~3 & Figs. 1~3)**:
  - 결합재: 1종 시멘트 + 고로슬래그 GGBS (치환율 0%, 20%, 40%, 60%, W/B = 0.45).
  - 골재: 미세 규사 ($d_{50} = 110\ \mu\text{m}$, S/B = 0.36, 폴리카복실산 감수제 SP).
  - 보강 섬유: Kuraray K-II REC15 PVA 섬유 ($V_f = 2.0\ \text{vol.}\%$, $L_f = 12\ \text{mm}, d_f = 39\ \mu\text{m}, \sigma_f = 1600\ \text{MPa}$).
- **형광 영상 분석 및 인장 시험 (Sections 2.2~2.5 & Figs. 4~7)**:
  - 형광 처리: 절단 단면 연마 후 형광 에폭시 수지 진공 함침 $\rightarrow$ 자외선 램프(파장 365 nm) 조사 하 고해상도 CCD 촬영 ($2048 \times 1536$ 픽셀).
  - 디지털 영상 처리: 밝기 불균일 보정, 적응형 임계값 이진화, 겹친 섬유 분할(Watershed 분할).
  - 1축 직접 인장 시험: 판상 도그본 시편 ($80\ \text{mm}$ 게이지, 0.2 mm/min 변위 제어).

## Results

### 1. 슬래그 치환율 및 믹싱 조건별 PVA-ECC의 섬유 분산 계수, 1축 인장 물성 및 균열 특성 비교표 (Section 3 & Tables 4~6 & Figs. 8~14)

| 배합 ID | 슬래그 치환율 (wt.%) | 측정 총 섬유 수 ($N_{total}$, 개) | 형광 섬유 분산계수 ($\alpha_{disp}$) | 1축 첫 균열강도 ($\sigma_{fc}$, MPa) | 1축 극한 인장강도 ($\sigma_{tu}$, MPa) | 1축 극한 인장연신율 ($\varepsilon_u$, %) | PSH 변형경화 포화도 판정 |
|---|---|---|---|---|---|---|---|
| **Slag-0% (순수 시멘트)** | 0.0 wt.% | **$1850 \pm 120$ 개** | **$0.51 \pm 0.04$ (뭉침심각)**| **$3.15 \pm 0.15\ \text{MPa}$** | **$3.80 \pm 0.20\ \text{MPa}$** | **$1.80 \pm 0.20\%$ (불포화)**| **국소 섬유 결손부 조기 파단** |
| **Slag-20%** | 20.0 wt.% | $2100 \pm 100$ 개 | $0.65 \pm 0.03$ | $3.25 \pm 0.15\ \text{MPa}$ | $4.15 \pm 0.22\ \text{MPa}$ | $2.50 \pm 0.25\%$ | 부분 변형경화 |
| **Slag-40%** | 40.0 wt.% | $2350 \pm 80$ 개 | $0.78 \pm 0.02$ | $3.35 \pm 0.16\ \text{MPa}$ | $4.50 \pm 0.25\ \text{MPa}$ | $3.60 \pm 0.30\%$ | 우수한 다중균열 |
| **Slag-60% (최적 배합)** | **60.0 wt.%** | **$2520 \pm 70$ 개 (+36 %)** | **$0.86 \pm 0.02$ (+68 %)**| **$3.40 \pm 0.18\ \text{MPa}$** | **$4.85 \pm 0.25\ \text{MPa}$** | **$4.50 \pm 0.35\%$ ($2.5\times$)**| **완전 포화 PSH ($w \le 35\mu\text{m}$)**|

### 2. 섬유 분산 통계 분포 및 다중 균열 전파 메커니즘 해석
- **전기이중층에 의한 섬유 풀림**: 슬래그 입자가 감수제를 균일하게 분산시켜 페이스트 점도를 적정 범위($\approx 15\ \text{Pa}\cdot\text{s}$)로 조절함으로써 섬유 번들의 기계적 엉킴을 완벽 해소.
- **분산 계수와 인장 연성의 양의 선형 관계**: $\alpha_{disp} \ge 0.80$ 조건에서는 단면 내에 섬유 결손부가 존재하지 않아 첫 균열 후에도 50개 이상의 균열이 균등하게 개구되어 $4.5\%$의 초고연성을 완성.

- **종합 결론**: 본 논문은 전남대학교 이방연 교수와 김윤용 교수 연구팀이 형광 영상 분석법을 통해 시멘트 복합체 내부 PVA 섬유 분산 계수 산정 기법을 최초로 표준화하고 섬유 분산도가 1축 인장 변형경화에 미치는 영향을 완벽히 실증한 변형경화 복합재료 미세구조 계측 및 역학 분야의 최고 권위 랜드마크 원전 논문임.

## Related Notes

- [[kim-2007-tensile-fiber-dispersion-pva-ecc-slag]] — 충남대 김윤용 & 전남대 이방연 교수: 슬래그 PVA-ECC 섬유분산성 랜드마크.
- [[tosun-felekoglu-2014-flaw-size-fiber-distribution-ecc-ductility]] — Felekoglu & Victor Li: 결함 크기 및 분산성 랜드마크.
- [[eberhardt-2001-fiber-orientation-2d-image-analysis-error-estimation]] — 섬유 배향 영상 분석 랜드마크.
- [[high-strength-strain-hardening-composites]] — 변형경화 미시역학 체계.
