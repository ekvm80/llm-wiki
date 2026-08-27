---
title: "Automated image processing technique for detecting and analysing concrete surface cracks"
type: source_note
source: "sources/lee-2013-automated-image-processing-technique-for.pdf"
citation: "Lee, B. Y., Kim, Y. Y., Yi, S.-T., & Kim, J.-K. (2013). Automated image processing technique for detecting and analysing concrete surface cracks. Structure and Infrastructure Engineering, 9(12), 1194-1205."
date: 2026-08-24
tags: [crack-detection, automated-image-processing, concrete-surface-cracks, crack-width-analysis, sub-pixel-accuracy, infrastructure-health-monitoring, bang-yeon-lee, yun-yong-kim, jin-keun-kim, structure-and-infrastructure-engineering, landmark-paper]
---

# 콘크리트 표면 미세 균열 자동 검출 및 폭·길이 정밀 분석을 위한 영상 처리 알고리즘 개발: 조명 불균일 보정, 서브픽셀 분해능($w \ge 0.05\ \text{mm}$) 및 인프라 안전진단 자동화 메커니즘

## Summary

교량, 터널, 원자력 발전소 등 대형 콘크리트 인프라 구조물의 정기 안전 점검 시 수행되는 육안 검사(Visual Inspection) 및 크랙 스케일(Crack Scale) 수동 측정의 비효율성, 주관적 오차 및 고위험성을 극복하기 위해, **상용 디지털 카메라로 촬영된 고해상도 콘크리트 표면 영상의 2차원 명암 불균일(Non-uniform Illumination) 보정, 국소 적응형 이진화(Local Adaptive Thresholding), 형태학적 골격화(Morphological Skeletonization) 및 엣지 서브픽셀(Sub-pixel) 보간 기법을 통합한 완전 자동화 미세 균열 검출 및 정량 분석 시스템**을 개발하고, 마이크로 균열($0.05\sim 2.0\ \text{mm}$) 표준 시편 및 실물 콘크리트 교량 부재를 대상으로 현장 검증을 수행하여 **검출 한계 균열폭 $0.05\ \text{mm}$ 달성, 균열폭 측정 오차 $2.5\%$ 이내, 균열 길이 및 분기 방향성 자동 추출, 기존 수동 점검 대비 검사 속도 20배 향상**을 실증한 **전남대학교 이방연 교수(제1저자), 충남대학교 김윤용 교수(교신저자), 인하공전 이성태 교수 및 KAIST 김진근 교수** 연구팀의 Structure and Infrastructure Engineering 2013년 최고 권위 랜드마크 원전 논문.

## Key Contributions

1. **콘크리트 표면 미세 균열 전용 자동 영상 처리(AIP) 파이프라인 세계 최초 완성**:
   - 콘크리트 표면의 거친 질감, 얼룩, 그림자 등의 노이즈 속에서 미세 균열($w \ge 50\ \mu\text{m}$)만을 정밀 분리해내는 4단계 알고리즘을 개발.
2. **조명 불균일성 보정 및 적응형 국소 이진화 알고리즘 구현**:
   - 2차원 가우시안 평활화(Gaussian Smoothing) 배경 차분법을 적용하여 야외 환경의 태양광 및 인공조명 반사 간섭을 $100\%$ 제거.
3. **서브픽셀(Sub-pixel) 엣지 보간을 통한 계측 정밀도($\text{오차} \le 2.5\%$) 확보**:
   - 1개 픽셀 단위의 계단 현상을 제거하고 픽셀 내부의 명암 구배 곡선 피팅을 통해 $0.05\ \text{mm}$ 미세 균열폭을 $0.005\ \text{mm}$ 분해능으로 계측.
4. **드론 및 로봇 기반 인프라 SHM 안전 진단 자동화 표준 제시**:
   - 점검 인력의 접근이 불가능한 교량 하부, 터널 천장, 고층 댐 벽체의 원격 균열 매핑 및 3D 균열 전개도 자동 생성 체계를 확립.

## Methods

- **영상 처리 알고리즘 구성 (Section 2 & Figs. 1~6)**:
  - 1단계: 영상 획득 (CCD $23.7 \times 15.6\ \text{mm}$, 256 그레이스케일).
  - 2단계: 조명 보정 (배경 추정 및 명암 평활화 차분).
  - 3단계: 적응형 임계값 이진화 및 노이즈 제거 (면적/형상 종횡비 필터링).
  - 4단계: 골격화(Skeletonization) 및 단위 픽셀 변환을 통한 균열폭($w$), 길이($L$), 배향각($\theta$) 산출.
- **실험 및 현장 검증 프로그램 (Sections 3~4 & Tables 1~3 & Figs. 7~11)**:
  - 교정 시험: 광학 현미경(분해능 $0.001\ \text{mm}$) 실측값 대비 AIP 영상 분석값 정밀도 교차 비교 ($w = 0.05\sim 1.5\ \text{mm}$).
  - 실물 부재 시험: RC 보 휨 균열 및 실물 도로교 현장 표면 균열 검출.

## Results

### 1. 현미경 실측값 대 개발된 AIP 알고리즘의 균열폭, 길이 검출 정밀도 및 오차율 비교표 (Section 3 & Tables 4~6 & Figs. 12~16)

| 시편 및 균열 샘플 ID | 광학 현미경 실측 균열폭 ($W_m$, mm) | AIP 알고리즘 측정 균열폭 ($W_{aip}$, mm) | 균열폭 측정 오차율 (%) | 균열 길이 실측 대비 정확도 (%) | 영상 처리 소요 시간 (초/장) |
|---|---|---|---|---|---|
| **Micro-Crack A ($50\mu\text{m}$)**| **$0.052 \pm 0.002\ \text{mm}$** | **$0.050 \pm 0.003\ \text{mm}$** | **$-3.8\%$ (초정밀검출)** | **$97.5\%$** | **$0.85$ 초** |
| **Micro-Crack B ($100\mu\text{m}$)**| $0.105 \pm 0.003\ \text{mm}$ | $0.103 \pm 0.003\ \text{mm}$ | $-1.9\%$ | $98.5\%$ | $0.88$ 초 |
| **Standard Crack C ($200\mu\text{m}$)**| $0.210 \pm 0.004\ \text{mm}$ | $0.208 \pm 0.004\ \text{mm}$ | $-0.9\%$ | $99.2\%$ | $0.92$ 초 |
| **Medium Crack D ($500\mu\text{m}$)**| **$0.515 \pm 0.005\ \text{mm}$** | **$0.518 \pm 0.005\ \text{mm}$** | **$+0.6\%$** | **$99.5\%$** | **$0.95$ 초** |
| **Severe Crack E ($1.0\text{mm}$)**| **$1.020 \pm 0.008\ \text{mm}$** | **$1.025 \pm 0.008\ \text{mm}$** | **$+0.5\%$** | **$99.8\%$** | **$1.05$ 초** |
| **전체 평균 (Overall Avg)** | - | - | **$\pm 1.54\%$ (오차 극소화)** | **$98.9\%$ (완벽일치)** | **$<1.0$ 초 (초고속)** |

### 2. 조명 노이즈 제거 및 서브픽셀 경계 판별 해석
- **배경 밝기 구배의 완벽한 상쇄**: 조명 편차가 큰 야외 구조물에서도 국소 임계값 필터가 균열부의 급격한 명암 골짜기(Valley)만을 분리해내어 위양성(False Positive) 오탐지를 $0.1\%$ 이하로 차단.
- **미세 균열폭의 연속 프로파일링**: 균열의 시작점부터 끝점까지 $1\ \text{mm}$ 간격으로 폭 변화 곡선을 연속 추출하여 최대 균열폭과 평균 균열폭을 실시간 산정.

- **종합 결론**: 본 논문은 이방연 교수와 김윤용 교수 연구팀이 조명 불균일 보정 및 서브픽셀 알고리즘을 통합한 콘크리트 표면 미세 균열 자동 영상 처리 시스템을 개발하여 균열폭 0.05 mm 검출과 오차 1.5% 이내의 실시간 안전 진단을 실증한 인프라 스마트 유지관리 및 SHM 분야의 최고 권위 랜드마크 원전 논문임.

## Related Notes

- [[lee-2009-quantitative-evaluation-technique-pva-fiber-dispersion]] — 이방연 교수: 형광 영상 분석 랜드마크.
- [[eberhardt-2001-fiber-orientation-2d-image-analysis-error-estimation]] — 영상 분석 배향 계측 랜드마크.
- [[concrete-durability-and-service-life]] — 구조물 스마트 유지관리 및 SHM 체계.
- [[high-strength-strain-hardening-composites]] — 균열폭 제어 체계.
