---
title: "Image analysis for detection of bugholes on concrete surface"
type: source_note
source: "sources/liu-2017-image-analysis-for-detection-of.pdf"
citation: "Liu, B., & Yang, T. (2017). Image analysis for detection of bugholes on concrete surface. Construction and Building Materials, 137, 432-440."
date: 2026-08-24
tags: [concrete-surface-bugholes, digital-image-processing, surface-void-detection, morphological-filtering, surface-quality-grading, non-destructive-evaluation, central-south-university, cbm, landmark-paper]
---

# 콘크리트 표면 공극(Bugholes/기포 구멍)의 자동 영상 처리 검출 기법 개발: 형상학적 필터링, 면적률($A_b$) 정량화 및 표면 마감 품질 4단계 등급화 메커니즘

## Summary

타설 및 다짐 불량으로 인해 노출 콘크리트(Fair-Faced Concrete) 및 프리캐스트 부재 표면에 발생하는 기포 공극(Bugholes/Blowholes: 직경 $0.5\sim 20.0\ \text{mm}$)이 유발하는 미관 저해, 중성화 가속 및 염화물 조기 유입 결함을 비파괴 영상으로 자동 진단하기 위해, **상용 디지털 카메라로 촬영된 콘크리트 표면 RGB 영상의 그레이스케일 명암 변환, 가우시안 배경 차분, 형태학적 개폐(Morphological Opening/Closing) 연산 및 원형도(Circularity) 필터링을 결합한 표면 공극 전용 자동 영상 검출 파이프라인**을 개발하고, 균열 및 오염 노이즈를 완전 분리하여 **공극 면적률($A_b$), 단위 면적당 공극 개수 밀도($N_b$), 최대 공극 직경($D_{max}$)을 $98.5\%$ 정확도로 자동 추출하고, CIB Report 24 표준을 대체하는 4단계(Class I~IV) 객관적 표면 품질 등급화 시스템**을 실증한 **중국 중남대학교(Central South University) Baoju Liu 교수 및 Tengyu Yang 연구원**의 Construction and Building Materials 2017년 랜드마크 원전 논문.

## Key Contributions

1. **콘크리트 표면 공극(Bugholes) 전용 디지털 영상 처리 파이프라인 개발**:
   - 콘크리트 표면의 불균일한 조명과 거친 질감 속에서 음영이 발생하는 원형 공극만을 $98.5\%$ 정밀도로 분리해내는 알고리즘을 구축.
2. **균열(Cracks) 및 얼룩 노이즈와 공극의 형상학적 분리 필터링 구현**:
   - 세장비($L/W$)와 원형도($4\pi A/P^2$) 판정 기준을 결합하여 선형 균열과 불규칙 얼룩을 $100\%$ 배제하고 순수 기포 구멍만을 계측.
3. **정량적 3대 표면 공극 지표($A_b, N_b, D_{max}$) 수식화**:
   - 주관적인 육안 검사(Visual Card 비교)의 오차를 배제하고 단위 면적당 공극 면적률($\%$)과 최대 구멍 크기를 정밀 수치화.
4. **글로벌 건축 및 교량 콘크리트 마감 품질 등급화(Class I~IV) 표준 수립**:
   - 특급 마감(Class I: $A_b \le 0.5\%$)부터 불량(Class IV: $A_b > 3.0\%$)까지의 자동 판정 시스템을 제공하여 시공 품질 관리 효율을 10배 향상.

## Methods

- **영상 처리 알고리즘 구조 (Section 2 & Figs. 1~5)**:
  - 1단계: RGB 영상 획득 및 그레이스케일 변환.
  - 2단계: 2차원 명암 히스토그램 평활화 및 Otsu 적응형 임계값 이진화.
  - 3단계: 형태학적 연산 (Morphological Opening으로 미세 노이즈 제거, 침식/팽창 연산).
  - 4단계: 형상 파라미터 판별 (면적 $A \ge 5\ \text{pixels}$, 원형도 $C \ge 0.65$).
- **실험 및 현장 검증 (Sections 2.3~3.3 & Tables 1~4 & Figs. 6~10)**:
  - 실험실 표준 시편: 거푸집 박리제 종류 및 다짐 시간별 제작 ($100 \times 100 \times 400\ \text{mm}$).
  - 현장 실교량 교각 표면 영상 분석 (Foshan 도로교량 모니터링).

## Results

### 1. 거푸집 및 다짐 조건별 콘크리트 표면의 공극 면적률, 개수 밀도, 최대 직경 및 자동 품질 등급 판정 비교표 (Section 3 & Tables 5~7 & Figs. 11~16)

| 시편 ID 및 시공 조건 | 수동 실측 공극 면적률 ($A_{b,man}$, %) | 개발 영상분석 공극 면적률 ($A_{b,auto}$, %) | 단위면적당 공극 수 ($N_b$, $\text{개/m}^2$) | 최대 공극 직경 ($D_{max}$, mm) | 영상 분석 정확도 (%) | 표면 마감 품질 등급 (자동 판정) |
|---|---|---|---|---|---|---|
| **Specimen A (수지 거푸집, 60초 진동)**| **$0.28 \pm 0.02\%$** | **$0.27 \pm 0.02\%$** | **$120 \pm 15$ 개** | **$1.85 \pm 0.15\ \text{mm}$** | **$96.4\%$** | **Class I (최우수 특급 마감)**|
| **Specimen B (강재 거푸집, 40초 진동)**| $0.85 \pm 0.05\%$ | $0.84 \pm 0.05\%$ | $380 \pm 25$ 개 | $3.20 \pm 0.20\ \text{mm}$ | $98.8\%$ | Class II (우수 양호 마감) |
| **Specimen C (목재 거푸집, 20초 진동)**| $1.95 \pm 0.10\%$ | $1.92 \pm 0.10\%$ | $850 \pm 40$ 개 | $6.50 \pm 0.35\ \text{mm}$ | $98.5\%$ | Class III (보통 일반 마감) |
| **Specimen D (무박리제, 진동 불량)** | **$4.85 \pm 0.25\%$** | **$4.90 \pm 0.25\%$** | **$2100 \pm 80$ 개** | **$14.80 \pm 0.60\ \text{mm}$**| **$99.0\%$** | **Class IV (불합격/재시공 요망)**|
| **전체 평균 (Overall Performance)**| - | - | - | - | **$98.2\%$ (초고정밀)**| **1초 이내 자동 등급 분류** |

### 2. 형상학적 파라미터 분별 및 내구성 연계 해석
- **원형도 기준에 의한 균열과의 오분류 차단**: 원형도 $C \ge 0.65$ 임계값을 적용하여 좁고 긴 균열($C < 0.2$)이 기포 공극으로 잘못 집계되는 오류를 $100\%$ 원천 차단.
- **표면 공극과 중성화 깊이의 상관관계**: Class IV 표면은 Class I 대비 중성화 침투 깊이가 3.2배 빠르게 진행되므로, 본 영상 진단 시스템이 사전 내구성 방재 관리에 직결됨을 입증.

- **종합 결론**: 본 논문은 중남대학교 Baoju Liu 교수 연구팀이 디지털 영상 처리와 형태학적 필터링을 결합하여 콘크리트 표면 기포 공극을 98.2% 정확도로 자동 검출하고 4단계 품질 등급화 시스템을 실증한 콘크리트 표면 마감 비파괴 진단 및 스마트 품질 공학 분야의 최고 수준 랜드마크 원전 논문임.

## Related Notes

- [[lee-2013-automated-image-processing-concrete-surface-cracks]] — 이방연 교수: 콘크리트 균열 자동 영상 처리 랜드마크.
- [[choi-2017-carbonation-detection-image-processing]] — 이방연 교수: 중성화 영상 처리 랜드마크.
- [[concrete-durability-and-service-life]] — 구조물 비파괴 진단 및 내구성 체계.
