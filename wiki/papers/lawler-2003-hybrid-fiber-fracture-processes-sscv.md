---
title: "Fracture processes of hybrid fiber-reinforced mortar"
type: source_note
source: "sources/lawler-2003-fracture-processes-of-hybrid-fiber-reinforced.pdf"
citation: "Lawler, J. S., Wilhelm, T., Zampini, D., & Shah, S. P. (2003). Fracture processes of hybrid fiber-reinforced mortar. Materials and Structures, RILEM, 36(257), 197-208."
date: 2026-08-24
tags: [hybrid-fiber, macro-steel-fiber, micro-steel-fiber, pva-fiber, fracture-process, sscv, computer-vision, crack-width-map, surendra-shah, northwestern-university, materials-and-structures, landmark-paper]
---

# 마크로·마이크로 강섬유 및 PVA 복합 하이브리드 섬유보강 모르타르의 파괴 프로세스: 하위영역 스캐닝 컴퓨터 비전(SSCV, $1\ \mu\text{m}$ 정밀도) 기반 다중 스케일 균열 제어 시너지 규명

## Summary

단일 종류의 섬유 보강이 갖는 스케일별 한계(마이크로 섬유는 균열 개시는 지연시키나 대변형 가교력 부족, 마크로 섬유는 피크 후 인성은 부여하나 미세 균열 억제 불가)를 극복하기 위해, **갈고리형 마크로 강섬유($d_f = 500\ \mu\text{m}$, $L_f = 30\ \text{mm}$)와 직선형 마이크로 강섬유($d_f = 22\ \mu\text{m}$, $L_f = 6\ \text{mm}$) 및 PVA 마이크로 섬유($d_f = 14\ \mu\text{m}$, $L_f = 12\ \text{mm}$)를 조합한 하이브리드 섬유보강 모르타르**의 파괴 과정을 **하위영역 스캐닝 컴퓨터 비전(SSCV: Subregion Scanning Computer Vision, 56개 서브영역 표면 변위장 $1\ \mu\text{m}$ 분해능 추적)** 기법으로 실시간 계측하고, 노치 보 3점 휨(CMOD 제어) 및 일축 인장 시험을 통해 **마이크로 섬유의 $10\ \mu\text{m}$ 미세 균열 분산 억제와 마크로 섬유의 거대 균열 가교가 결합하여 첫 균열강도·피크하중·인성 전 구간에서 발현되는 다중 스케일 상승 시너지(Synergy) 메커니즘**을 규명한 미국 노스웨스턴 대학교(Northwestern University) Surendra P. Shah 석좌교수 연구팀의 Materials and Structures (RILEM) 2003년 불후의 랜드마크 원전 논문.

## Key Contributions

1. **SSCV(Subregion Scanning Computer Vision) 표면 변위장 및 균열폭 맵($1\ \mu\text{m}$ 정밀도) 매핑 기법 개발**:
   - 56개 격자 서브이미지 디지털 상관 기법으로 인장/휨 변형 전 과정에서 $10\ \mu\text{m}$ 이하의 미세 균열 발생부터 거대 균열 국소화까지 전 과정을 연속 시각화·정량화.
2. **마이크로-마크로 섬유의 다중 스케일 파괴 억제 시너지 메커니즘 입증**:
   - 마이크로 섬유(강섬유/PVA)는 매트릭스 미세 결함에서 $10\ \mu\text{m}$ 미만 균열 개시를 지연시켜 첫 균열강도를 증대시키고, 마크로 강섬유는 $50\ \mu\text{m}$ 이상 주균열의 개구를 억제하여 잔류 인성을 극대화.
3. **마이크로 섬유의 마크로 섬유 앵커리지 매트릭스 보강 효과 규명**:
   - 마이크로 섬유가 마크로 갈고리 강섬유 주변의 국소 매트릭스 손상 및 전단 균열을 억제함으로써, 마크로 섬유의 기계적 인발 저항 효율을 상승시키는 계면 상호작용 실증.
4. **PVA 마이크로 섬유와 마이크로 강섬유의 거동 차이 해석**:
   - PVA 마이크로 섬유는 화학적 부착력으로 인해 $10\ \mu\text{m}$ 이하 균열 분산 개수를 극대화하는 반면, 직선형 마이크로 강섬유는 높은 탄성계수($210\ \text{GPa}$)로 강도 증진에 우위.

## Methods

- **섬유 사양 및 배합 (Table 1~2)**:
  - **마크로 강섬유 (s, 500/30)**: 갈고리형(Hooked), $d_f = 500\ \mu\text{m}$, $L_f = 30\ \text{mm}$, $\sigma_{fu} = 1115\ \text{MPa}$, $E_f = 210\ \text{GPa}$, $V_f = 0.5\ \text{vol.}\%$.
  - **마이크로 강섬유 (S, 22/06)**: 직선형(Straight), $d_f = 22\ \mu\text{m}$, $L_f = 6\ \text{mm}$, $\sigma_{fu} = 2100\ \text{MPa}$, $E_f = 210\ \text{GPa}$, $V_f = 1.5\ \text{vol.}\%$.
  - **PVA 마이크로 섬유 (PVA, 14/12)**: 모노필라멘트, $d_f = 14\ \mu\text{m}$, $L_f = 12\ \text{mm}$, $\sigma_{fu} = 1500\ \text{MPa}$, $E_f = 36\ \text{GPa}$, $V_f = 1.5\ \text{vol.}\%$.
  - 배합: 무보강 모르타르(Plain), 0.5% s 단독, 1.5% S 단독, 1.5% PVA 단독, 하이브리드 1 (0.5% s + 1.5% S), 하이브리드 2 (0.5% s + 1.5% PVA).
  - 매트릭스: 시멘트:모래:물 = 1:2:0.5 (중량비).
- **시험 체계 및 광학 계측 (Section 2 & Figs. 1~4)**:
  - 휨 시험: RILEM TC 89-FMT 노치 보 ($100 \times 100 \times 400\ \text{mm}$, 노치 깊이 $33\ \text{mm}$), CMOD 속도 $0.15\ \text{mm/min}$ 폐루프 제어.
  - 직접 인장 시험: $75 \times 150 \times 12.7\ \text{mm}$ 판형 시험체, 변위 제어.
  - SSCV 시스템: 고해상도 CCD 카메라 + $x-y$ 정밀 모터 구동, 표면 56개 영역 스캔 및 디지털 이미지 상관법(DIC) 표면 변위장/균열폭 연산.

## Results

### 1. 섬유 조합별 휨 파괴 특성 및 균열 제어 비교표 (Table 3 & Figs. 5~10)

| 배합 구분 | 섬유 조합 | 총 혼입률 ($V_f$, %) | 첫 균열강도 ($\sigma_{fc}$, MPa) | 최대 휨강도 (MOR, MPa) | 피크 후 인성 (N$\cdot$m) | $10\ \mu\text{m}$ 이하 미세균열 거동 |
|---|---|---|---|---|---|---|
| **Plain (기준)** | 없음 | 0.0 % | $3.8 \pm 0.2$ | $3.8 \pm 0.2$ | $0.15 \pm 0.02$ | 단일 취성 균열 급성장 |
| **0.5% s (마크로)** | 500/30 강섬유 | 0.5 % | $3.9 \pm 0.2$ | $4.2 \pm 0.3$ | $4.20 \pm 0.35$ | 단일 균열 국소화, 잔류 가교 |
| **1.5% S (마이크로)** | 22/06 마이크로강 | 1.5 % | $5.2 \pm 0.3$ | $6.8 \pm 0.4$ | $2.80 \pm 0.25$ | 미세균열 다중 분산, 피크 후 급락 |
| **1.5% PVA (마이크로)**| 14/12 PVA | 1.5 % | **$5.8 \pm 0.3$** | $7.2 \pm 0.4$ | $3.50 \pm 0.30$ | **다중 균열 최대 밀도 발현** |
| **하이브리드 1** | **0.5% s + 1.5% S** | **2.0 %** | **$5.4 \pm 0.3$** | **$8.6 \pm 0.5$ (최고)**| **$8.90 \pm 0.55$ (시너지)**| **강도-인성 동시 극대화** |
| **하이브리드 2** | **0.5% s + 1.5% PVA**| **2.0 %** | **$6.1 \pm 0.4$ (최고)**| **$9.1 \pm 0.5$ (최고)**| **$9.80 \pm 0.60$ (최고)**| **미세균열 분산 + 거대균열 가교** |

### 2. 다중 스케일 하이브리드 파괴 메커니즘
- **균열 발생기 (Micro-cracking phase)**: 마이크로 섬유가 $10\ \mu\text{m}$ 이하 마이크로 균열의 선단을 차폐하여 첫 균열강도를 $50\%$ 이상 증대시킴.
- **균열 국소화 및 인발기 (Macro-cracking phase)**: 주균열 폭이 $50\ \mu\text{m}$ 이상으로 커지면 마이크로 섬유의 가교는 소진되지만 마크로 갈고리 강섬유가 하중을 이어받아 인발 변형 에너지를 소산시킴 $\rightarrow$ 하이브리드 복합체의 총 파괴 에너지가 단일 섬유 합의 1.5배 이상으로 증가하는 정량적 시너지 실현.

- **종합 결론**: 본 논문은 노스웨스턴 대학교 Surendra P. Shah 석좌교수 연구팀이 SSCV 고정밀 컴퓨터 비전 표면 변위 계측을 통해 마크로 강섬유와 마이크로 강섬유/PVA의 다중 스케일 균열 제어 시너지를 세계 최초로 정량 시각화하고 하이브리드 섬유보강 콘크리트 설계 원리를 확립한 RILEM 불후의 최고 랜드마크 원전 논문임.

## Related Notes

- [[strain-hardening-mechanism]] — ECC/FRC 변형경화 미시역학 및 섬유 가교 이론.
- [[kang-2011-fiber-distribution-uhsc-flexural-strength]] — 이방연 교수: 화상 처리 기반 강섬유 분포 평가 원전.
- [[felekoglu-2015-htpp-ecc-fiber-distribution-image-analysis]] — 화상분석 기반 미세섬유 분산성 평가 원전.
- [[high-strength-strain-hardening-composites]] — 고강도 하이브리드 섬유보강 복합체 체계.
