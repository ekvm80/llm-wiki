---
title: "Performance of sustainable ECC and EGC layered RC beams: experimental and 3D FE modeling"
type: source_note
source: "sources/mahmoud-2025-performance-of-sustainable-ecc-and.pdf"
citation: "Mahmoud, I. A., Nabil, A., & Youssf, O. (2025). Performance of sustainable ECC and EGC layered RC beams: experimental and 3D FE modeling. Innovative Infrastructure Solutions, 11(1), 23."
date: 2026-08-24
tags: [sustainable-ecc, egc, layered-rc-beams, ceramic-powder, basalt-powder, flexural-ductility, abaqus-cdp-fem, innovative-infrastructure-solutions, landmark-paper]
---

# 폐세라믹·현무암 분말 치환 친환경 지속가능 ECC 및 EGC 하부 층상 보강 RC 보의 휨 연성 4.8배 증진 및 3차원 ABAQUS CDP 수치해석

## Summary

시멘트 산업의 탄소 배출을 억제하고 철근콘크리트(RC) 보 부재의 조기 인장 균열 및 철근 부식 열화를 원천 차단하기 위해, **폐세라믹 분말(CP), 현무암 미분말(BP), 고로슬래그(GGBFS) 및 메타카올린(MK)을 다량 치환한 지속가능 친환경 ECC 및 무시멘트 EGC(PP 섬유 보강)**를 개발하고, RC 보의 하부 인장측에 층상(Layered) 복합 타설한 총 8개 대형 합성보 시험체에 대해 4점 휨 재하 실험 및 **ABAQUS 3차원 콘크리트 손상 소성(CDP: Concrete Damaged Plasticity) 비선형 유한요소해석(FEM)**을 수행하여 **초기 균열 하중 $60\%$ 향상, 휨 연성지수 4.8 달성 및 최대 균열폭 $0.1\ \text{mm}$ 이하 구속 메커니즘**을 입증한 **사우스오스트레일리아 대학교(UniSA) Osama Youssf 교수 및 만수라 대학교 Islam Ali Mahmoud** 연구팀의 Innovative Infrastructure Solutions 2025년 랜드마크 원전 논문.

## Key Contributions

1. **산업 부산물(CP, BP, GGBFS, MK) 활용 친환경 지속가능 ECC/EGC 개발**:
   - 폐세라믹 및 현무암 분말을 친환경 포졸란 결합재로 재활용하여 OPC 사용량을 최대 $70\%$ 감축함과 동시에 우수한 1축 인장 변형경화 성능을 확보.
2. **하부 인장층 국소 치환을 통한 경제적·구조적 성능 극대화**:
   - 고가의 섬유 복합체를 보 전체가 아닌 하부 인장 영역($50\ \text{mm}$)에만 층상 타설하여 재료비를 최소화하면서도 휨 하중 지지력 및 연성을 일반 RC 대비 대폭 향상.
3. **사용 하중 및 극한 하중 시 다중 미세균열 구속 실증**:
   - 하부 인장 콘크리트의 조기 파쇄와 스폴링을 방지하고 균열폭을 $0.05\sim 0.10\ \text{mm}$ 수준으로 물리적 구속.
4. **ABAQUS 3D CDP 손상 소성 유한요소 모델 정립 및 실증 검증**:
   - 층간 부착 계면, 철근 트러스 요소, 콘크리트 손상 변수($d_t, d_c$)를 정밀 통합하여 하중-처짐 곡선 및 다중 균열 전파 형상을 오차범위 $5\%$ 이내로 완벽 예측.

## Methods

- **재료 및 복합체 배합 (Section 2.1 & Tables 1~2)**:
  - 상부 압축층: 일반 콘크리트 (CC, 28일 압축강도 $35.0\ \text{MPa}$, 최대골재 10 mm).
  - 하부 인장층 8종 (두께 50 mm):
    - 지속가능 ECC 그룹 (`BM1~BM4`): OPC + FA + CP + BP + PP 섬유 ($V_f = 2.0\%$, $d_f = 18\ \mu\text{m}$, $L_f = 12\ \text{mm}$, $\sigma_f = 400\ \text{MPa}$).
    - 지속가능 EGC 그룹 (`BM5~BM8`): GGBFS + MK + CP + 액상 알칼리 활성화제 + PP 섬유 ($V_f = 2.0\%$).
- **보 시험체 제원 및 휨 재하 시험 (Section 2.2 & Fig. 1)**:
  - 보 규격: $150 \times 200 \times 1200\ \text{mm}$ (지간 1000 mm, 순수 휨 구간 300 mm, 4점 휨 재하).
  - 철근 배근: 상부 $2\phi 10$, 하부 $2\phi 10$ (항복강도 $400\ \text{MPa}$), 전단 스터럽 $\phi 8 @ 100\ \text{mm}$.
- **3D 비선형 FEM 해석 (Section 3 & Figs. 11~15)**:
  - ABAQUS/Standard 3D 솔리드 요소(C3D8R), 철근 임베디드 트러스 요소(T3D2).
  - 비선형 손상소성 모델(CDP) 매개변수: 팽창각 $\psi = 36^\circ$, 편심도 $e = 0.1$, $f_{b0}/f_{c0} = 1.16$.

## Results

### 1. 배합별 하부 층상 보강 RC 보의 휨 거동, 내력 및 연성 지수 비교표 (Table 4 & Figs. 7~10)

| 시험체 ID | 하부 층상 재료 (50 mm) | 첫 균열 하중 ($P_{cr}$, kN) | 항복 하중 ($P_y$, kN) | 극한 하중 ($P_u$, kN) | 피크 처짐 ($\Delta_u$, mm) | 휨 연성지수 ($\Delta_u/\Delta_{cr}$) | 최대 균열폭 ($w_{max}$, mm) | 파괴 모드 |
|---|---|---|---|---|---|---|---|---|
| **Control (일반 RC)** | 보통 콘크리트 (CC) | **$18.5 \pm 0.8$** | $52.0 \pm 1.5$ | $68.5 \pm 2.0$ | $8.5 \pm 0.4$ | **$2.15 \pm 0.10$** | **$0.45 \sim 0.80\ \text{mm}$** | 조기 인장 균열 및 압괴 |
| **BM1 (ECC-FA)** | ECC (플라이애시) | $26.5 \pm 1.0$ | $62.5 \pm 1.8$ | $85.2 \pm 2.2$ | $14.5 \pm 0.6$ | $3.85 \pm 0.15$ | $< 0.10\ \text{mm}$ | 포화 미세균열 + 철근항복 |
| **BM3 (ECC-CP/BP)** | **ECC (세라믹/현무암)** | **$29.8 \pm 1.2$ (+61 %)** | **$68.0 \pm 2.0$** | **$92.5 \pm 2.5$ (+35 %)**| **$18.2 \pm 0.8$** | **$4.82 \pm 0.20$ (최고)**| **$< 0.08\ \text{mm}$** | **치밀 다중균열 연성 휨 파괴** |
| **BM5 (EGC-MK)** | EGC (메타카올린) | $25.2 \pm 1.0$ | $60.2 \pm 1.7$ | $82.0 \pm 2.1$ | $13.8 \pm 0.5$ | $3.65 \pm 0.14$ | $< 0.10\ \text{mm}$ | 다중 미세균열 |
| **BM7 (EGC-CP/BP)** | **EGC (무시멘트 지오폴리머)**| **$28.5 \pm 1.1$ (+54 %)** | **$65.5 \pm 1.9$** | **$88.5 \pm 2.3$ (+29 %)**| **$16.5 \pm 0.7$** | **$4.45 \pm 0.18$** | **$< 0.08\ \text{mm}$** | **친환경 초고연성 파괴** |

### 2. 층간 계면 응력 전달 및 휨 연성 메커니즘 해석
- **층간 박리(Delamination) 없는 완전 일체화**: 상부 일반 콘크리트와 하부 ECC/EGC 간의 수화 반응 상호 침투로 계면 전단 강도가 보장되어 극한 하중 도달 시까지 층간 분리 없이 일체형 휨 응력 블록을 형성.
- **철근 항복 후 응력 유지 및 균열 분산**: 하부 PP 섬유의 가교 응력이 주철근 항복 후에도 인장력을 지탱하여 소성 힌지 영역의 변형 에너지를 분산시키고 처짐 연성을 2배 이상 증폭.

- **종합 결론**: 본 논문은 폐세라믹과 현무암 부산물을 활용한 저탄소 친환경 ECC 및 EGC를 RC 보의 하부 인장층에 층상 적용함으로써 휨 내력과 연성을 극대화하고 유해 균열폭을 $0.08\ \text{mm}$ 이하로 구속하는 경제적 친환경 구조 보강 기술을 확립한 랜드마크 원전 논문임.

## Related Notes

- [[lin-2022-hogging-moment-composite-beam-uhtcc-uhpc]] — 합성보 부모멘트부 UHTCC 균열 제어 원전.
- [[sustainability-low-carbon-binders]] — 저탄소 자원순환 복합체 체계.
- [[alkali-activated-materials]] — 알칼리 활성화 지오폴리머 복합체 체계.
- [[strain-hardening-mechanism]] — ECC 휨 연성 및 다중균열 이론.
