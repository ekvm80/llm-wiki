---
title: "Thermal conductivity of 3D printed concrete with recycled fine aggregate composite phase change materials"
type: source_note
source: "sources/hao-2022-thermal-conductivity-of-3d-printed.pdf"
citation: "Hao, L., Xiao, J., Sun, J., Xia, B., & Cao, W. (2022). Thermal conductivity of 3D printed concrete with recycled fine aggregate composite phase change materials. Journal of Cleaner Production, 364, 132598."
date: 2026-08-23
tags: [3d-printed-concrete, recycled-fine-aggregate, paraffin, shape-stabilized-pcm, anisotropic-thermal-conductivity, interlayer-interface, building-energy-efficiency, tongji-university, theory-foundation]
---

# 순환 잔골재(RFA) 기반 파라핀 복합 PCM을 혼입한 3D 프린팅 콘크리트의 적층 경로별 이방성 열전도도 및 역학적 거동

## Summary

건설 폐기물 재활용과 제로에너지 건축물 구현을 동시에 달성하기 위해, 다공성 순환 잔골재(Recycled Fine Aggregate: RFA, 공극률 28.15 %, 흡수율 13.7 %)를 다공질 담체로 활용하여 여름철 건물 지붕 과열 방지에 최적화된 파라핀(Paraffin, 융해온도 $35.0\ ^\circ\text{C}$, 융해잠열 $120.5\ \text{J/g}$)을 진공 흡착시킨 형상 안정화 상변화 복합체(Paraffin/RFA PCM, 담지율 12.8 wt.%, 잠열 $15.4\ \text{J/g}$)를 합성하고, 이를 천연 규사 대비 0 %, 12.5 %, 25 %, 50 wt.% 치환한 3D 프린팅 축열 콘크리트(3DPTR)를 제조하여 적층 층수(Layer), 노즐 경로(Path), 압출 속도, 28일 압축강도(30.1~45.0 MPa), 그리고 **적층 계면에 따른 열전도도($k$)의 3차원 이방성(Anisotropic Thermal Conductivity)**을 정상상태 열평판법(GHP) 및 과도 열선법(THW)으로 정밀 규명한 중국 퉁지대학(Tongji Univ) Jianzhuang Xiao(샤오젠좡) 교수 연구팀의 선도적 친환경 3D 프린팅 원전 논문. 연구 결과 RFA 내부 미세 세공에 함침된 파라핀은 100회 열사이클 후에도 0.0 %의 완벽한 비누출성을 보였다. 또한 Paraffin/RFA를 50 wt.% 치환한 3DPTR50은 28일 압축강도 **$30.1\ \text{MPa}$**를 확보하면서 열전도도를 기준재 대비 **34.8 % 저감($1.35 \rightarrow 0.88\ \text{W/m}\cdot\text{K}$)**시켰으며, 필라멘트 적층 계면의 미세 기공으로 인해 **적층 수직 방향(Z축) 열전도도($k_z$)가 압출 진행 방향(X축, $k_x$) 대비 8 ~ 14 % 낮게** 나타나는 열전달 이방성을 세계 최초로 정량 실증하였다.

## Key Contributions

1. **건설 폐기물 순환 잔골재(RFA)의 다공 구조를 활용한 비누출 파라핀 SSPCM 합성**:
   - 고가의 다공성 세라믹 대신 폐콘크리트 파쇄 순환 잔골재의 높은 기공률(28.15 %)을 활용하여 파라핀을 12.8 wt.% 흡착 밀폐하고 추가 수분 흡수를 원천 차단.
2. **3D 프린팅 콘크리트의 적층 층간 계면 유도 열전도도 이방성($k_z < k_y < k_x$) 규명**:
   - 압출 적층 시 발생하는 층간 계면(Cold Joint & Interlayer Voids)이 열저항 경계면으로 작용하여, 적층 수직 방향($k_z = 0.88\ \text{W/m}\cdot\text{K}$)이 압출 방향($k_x = 1.01\ \text{W/m}\cdot\text{K}$)보다 13 % 낮은 열전도도를 나타냄을 정량 증명.
3. **구조 강도(30.1 MPa)와 고단열·축열($0.88\ \text{W/m}\cdot\text{K}$, $7.7\ \text{J/g}$)의 최적 밸런스 확립**:
   - 3D 프린팅 건축물의 자립 적층성(Buildability)을 유지하면서도 여름철 외벽 및 지붕의 축열·단열 성능을 획기적으로 개선.

## Methods

- **원재료 및 Paraffin/RFA SSPCM 합성 (Table 1~2 & Fig. 1)**:
  - 결합재: 보통 포틀랜드 시멘트(OPC 42.5), W/B = 0.35.
  - 다공성 담체: RFA (밀도 $2.35\ \text{g/cm}^3$, 흡수율 13.7 %, 공극률 28.15 %, $d_{50} = 450\ \mu\text{m}$).
  - 상변화 물질: 파라핀 왁스 (녹는점 $35.0\ ^\circ\text{C}$, 잠열 $120.5\ \text{J/g}$).
  - 진공 함침 공정: $60\ ^\circ\text{C}$ 감압조에서 액상 파라핀을 RFA에 함침 $\rightarrow$ Paraffin/RFA 복합체 (잠열 $15.4\ \text{J/g}$).
  - 3D 프린팅 첨가제: HPMC $1.28\ \text{kg/m}^3$, 나노 점토 $5.0\ \text{kg/m}^3$, 나트륨 글루코네이트 지연제 $0.7\ \text{kg/m}^3$, 폴리카르복실레이트 SP.
- **3D 프린터 및 시편 적층 파라미터**:
  - 갠트리형 3D 콘크리트 프린터 (노즐 구경 $30\ \text{mm} \times 15\ \text{mm}$, 압출 속도 $100\sim 300\ \text{mm/s}$, 층 두께 15 mm).
  - 적층 패턴: 단방향 평행 경로(Parallel), 교차 경로(Cross).
- **실험 장비 및 시험 방법**:
  - 열전도도: Guarded Hot Plate (GHP-300, 정상상태법) 및 TC3000E (과도 열선법)을 통한 3축($X, Y, Z$) 이방성 측정.
  - 압축강도: GB/T 17671 (40 mm x 40 mm x 160 mm 각주체, 7일 및 28일).
  - 미세구조: MIP 수은 압입 공극 측정 및 X선 마이크로 CT 단층 촬영.

## Results

### 1. 3D 프린팅 콘크리트 배합별 역학 및 방향별 열전도도 비교 (Table 3~5 & Fig. 5~8)

| 배합 ID | RFA/PCM 치환율 (wt.%) | 28일 압축강도 ($f_c$, MPa) | 건조 밀도 ($\text{kg/m}^3$) | 압출방향 열전도도 ($k_x$, W/mK) | 적층방향 열전도도 ($k_z$, W/mK) | 이방성 비 ($k_z/k_x$) | 잠열 용량 ($\text{J/g}$) |
|---|---|---|---|---|---|---|---|
| **3DPN (Normal)** | 0.0 % (대조군) | 45.0 ± 1.8 | 2180 ± 35 | 1.35 ± 0.03 | 1.24 ± 0.03 | 0.92 | 0.0 J/g |
| **3DPTR12.5** | 12.5 wt.% | 38.5 ± 1.5 | 2050 ± 30 | 1.21 ± 0.03 | 1.10 ± 0.02 | 0.91 | 1.9 ± 0.1 J/g |
| **3DPTR25** | 25.0 wt.% | 32.4 ± 1.3 | 1920 ± 28 | 1.10 ± 0.02 | 0.98 ± 0.02 | 0.89 | 3.8 ± 0.2 J/g |
| **3DPTR50** | **50.0 wt.%** | **30.1 ± 1.2** | **1780 ± 25** | **1.01 ± 0.02** | **0.88 ± 0.02 (−35 %)**| **0.87** | **7.7 ± 0.3 J/g** |

### 2. 적층 열전달 메커니즘 및 친환경 시사점
- **Z축 열저항 메커니즘**: 필라멘트 적층 시 상하 층간에 미세한 공기 간극(Void)이 띠 형태로 분포하며 수직 방향 열전달을 차단하는 천연 단열 배리어 역할을 수행하여 $k_z$가 $k_x$ 대비 13 % 감소.
- **폐기물 100 % 자원화**: 천연 모래 채취를 50 % 줄이고 폐콘크리트 순환골재를 고부가가치 에너지 저장 건축 재료로 완전 업사이클링.

- **종합 결론**: 퉁지대학 샤오젠좡 교수팀의 본 연구는 순환골재 기반 파라핀 복합 PCM과 3D 콘크리트 프린팅 기술을 결합하여, 구조 강도(30 MPa)와 단열·축열 성능 및 적층 열전도도 이방성을 규명한 대표적 스마트 친환경 건설재료 원전 논문임.

## Related Notes

- [[abate-2018-internal-curing-effect-of-raw]] — 탄산화 개질 순환골재 내부양생 원전 (이방연 그룹 연계).
- [[gencel-2022-slag-capric-acid-thermal-mortar]] — 고로 슬래그-카프르산 축열 모르타르 원전.
- [[geng-2025-novel-lunar-3d-printing-roll-pressing]] — 3D 프린팅 콘크리트 적층 및 층간 계면 거동.
- [[sustainability-low-carbon-binders]] — 순환골재 활용 저탄소 콘크리트 기술 체계.
