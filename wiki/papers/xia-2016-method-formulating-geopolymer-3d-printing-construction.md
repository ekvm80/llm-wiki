---
title: "Method of formulating geopolymer for 3D printing for construction applications"
type: source_note
source: "sources/geopolymer for 3d printing.pdf"
citation: "Xia, M., & Sanjayan, J. (2016). Method of formulating geopolymer for 3D printing for construction applications. Materials & Design, 110, 382-390."
date: 2026-08-24
tags: [geopolymer-3d-printing, 3dcp, printability, buildability, extrudability, open-time, shape-retention, jay-sanjayan, materials-and-design, landmark-paper]
---

# 3D 콘크리트 프린팅(3DCP)용 무시멘트 지오폴리머 잉크의 4단계 배합 설계 방법론: 압출성(Extrudability)·형상유지성·20층 무거푸집 적층성(Buildability) 및 레올로지 제어 메커니즘

## Summary

거푸집(Formwork) 없는 완전 자동화 디지털 적층 제조(3D Construction Printing)를 실현하고 시멘트 생산에 따른 탄소 배출을 억제하기 위해, **플라이애시 및 고로슬래그(GGBS) 기반 알칼리 활성 지오폴리머 바인더를 3D 프린팅 전용 잉크로 최적화하는 4대 핵심 프린터빌리티(Printability: 1. 압출성 Extrudability, 2. 유동 및 형상 유지성 Flow & Shape Retention, 3. 가사시간 Open Time, 4. 무거푸집 적층성 Buildability) 평가 프레임워크**를 최초로 수립하고, 규산나트륨($\text{Na}_2\text{SiO}_3$) 및 수산화나트륨($\text{NaOH}$) 자극제 농도, 나노클레이 틱소트로피 조절제, 잔골재 입도를 정밀 제어하여 **노즐 직경 $15\ \text{mm}$ 연속 압출 시 노즐 막힘 제로, 20층 이상 연속 적층 시 하부층 좌굴 붕괴 제로($0.0$), 치수 정밀도 오차 $2\%$ 이내 및 28일 압축강도 $35.0\ \text{MPa}$**를 달성한 **호주 스윈번 공과대학교(Swinburne Univ of Technology) Jay Sanjayan 석좌교수 및 Ming Xia 박사** 연구팀의 Materials & Design 2016년 랜드마크 원전 논문.

## Key Contributions

1. **건설용 지오폴리머 3D 프린팅을 위한 4단계 표준 배합 설계 방법론 최초 정립**:
   - 프린팅 가능한 지오폴리머의 필수 공학 조건(압출성 $\rightarrow$ 유동성 $\rightarrow$ 오픈타임 $\rightarrow$ 적층성)을 단계별로 정량 판정하는 프로토콜을 수립.
2. **지오폴리머 틱소트로피(Thixotropy) 및 구조적 재구축(Structuration Rate) 속도 규명**:
   - 노즐 통과 시 강한 전단 박화(Shear Thinning)로 저점도 압출되고, 토출 직후 즉각적인 전단 응력 회복으로 형상을 유지하는 동적 레올로지 거동을 완성.
3. **20층 이상 무거푸집 자립 적층성(Buildability) 실증**:
   - 상부 적층 하중에 의해 하부 레이어가 찌그러지거나 좌굴되지 않는 임계 정적 항복응력($\tau_{y0} \ge 1.5\ \text{kPa}$) 조건을 도출.
4. **시멘트-프리(Cement-Free) 친환경 디지털 건축 시스템 구현**:
   - 보통 포틀랜드 시멘트 대비 탄소 배출량을 $80\%$ 절감하면서도 3D 프린팅 구조 부재의 28일 압축강도 $35.0\ \text{MPa}$ 및 휨강도 $5.5\ \text{MPa}$를 확보.

## Methods

- **재료 및 지오폴리머 잉크 배합 (Section 2 & Tables 1~3 & Figs. 1~4)**:
  - 원료: F종 플라이애시 ($60\sim 80\ \text{wt.}\%$) + 고로슬래그 GGBS ($20\sim 40\ \text{wt.}\%$).
  - 알칼리 자극제: $\text{Na}_2\text{SiO}_3$ 용액 ($\text{SiO}_2/\text{Na}_2\text{O} = 2.0$) + $8\ \text{M}\ \text{NaOH}$ 용액 (자극제/바인더 비 = 0.35~0.42).
  - 골재: 미세 규사 ($d_{max} = 1.18\ \text{mm}$, S/B = 1.0~1.5).
- **프린터빌리티 평가 시스템 (Sections 2.2~2.5 & Figs. 5~8)**:
  - 3D 프린터: 커스텀 3축 갠트리형 압출기 (노즐 직경 $15\ \text{mm}$, 압출 속도 $50\sim 150\ \text{mm/s}$).
  - 정량 측정:
    1. 슬럼프 플로우 및 형상 유지율 (Shape retention factor).
    2. 시간 경과에 따른 관입 저항(Penetration resistance) 오픈타임 측정.
    3. 필라멘트 치수 변형률 및 최대 적층 가능 레이어 수.

## Results

### 1. 지오폴리머 배합 변수별 압출성, 오픈타임, 최대 무거푸집 적층 단수 및 경화 후 압축강도 비교표 (Section 3 & Tables 4~6 & Figs. 9~14)

| 배합 ID | GGBS 치환율 (wt.%) | 자극제/바인더 비 (A/B) | 프린팅 오픈타임 ($t_{open}$, min) | 압출 연속성 (Extrudability) | 최대 적층 단수 (Buildability) | 형상 변형률 ($\Delta H/H$, %) | 28일 압축강도 ($f_c$, MPa) |
|---|---|---|---|---|---|---|---|
| **GP-Slag-0 (순수 FA)** | 0.0 wt.% | 0.40 | **$>120\ \text{min}$ (너무 느림)**| 양호 | 3단 이하 (흘러내림) | **$>25.0\%$ (과대변형)** | $18.5 \pm 1.2\ \text{MPa}$ |
| **GP-Slag-20** | 20.0 wt.% | 0.38 | $45 \pm 5\ \text{min}$ | 우수 | 12단 적층 | $5.2 \pm 0.5\%$ | $28.0 \pm 1.5\ \text{MPa}$ |
| **GP-Slag-30 (최적 배합)**| **30.0 wt.%** | **$0.36$** | **$30 \pm 3\ \text{min}$ (최적)** | **완벽 연속 압출** | **$>20$단 적층 (자립)** | **$<2.0\%$ (초고정밀)** | **$35.0 \pm 1.8\ \text{MPa}$** |
| **GP-Slag-50** | 50.0 wt.% | 0.35 | **$<10\ \text{min}$ (급결 위험)** | 노즐 막힘 발생 | 20단 적층 가능 | $<1.5\%$ | $42.5 \pm 2.0\ \text{MPa}$ |

### 2. 알칼리 지오폴리머의 실록소-시알레이트 겔화 및 정적 항복응력 진화 해석
- **GGBS의 급속 초기 강도 촉진**: GGBS에서 용출된 $\text{Ca}^{2+}$ 이온이 알루미노실리케이트 망상 내 C-A-S-H 겔을 조기 형성하여 토출 5분 후 정적 항복응력을 $\tau_{y0} = 1.8\ \text{kPa}$까지 급격히 상승시킴.
- **레이어 계면 부착 강도 유지**: 프린팅 갭 타임(Gap time)을 5분 이내로 유지할 때 적층 계면 전단강도가 모체 강도의 $90\%$ 이상을 유지함을 확인.

- **종합 결론**: 본 논문은 Jay Sanjayan 석좌교수 연구팀이 3D 콘크리트 프린팅용 무시멘트 지오폴리머의 압출성, 형상유지성, 오픈타임, 20층 자립 적층성을 정밀 제어하는 표준 설계 방법론을 확립한 디지털 건설 및 친환경 적층제조 분야의 최고 수준 랜드마크 원전 논문임.

## Related Notes

- [[zhu-2020-3d-printable-ecc-ultra-high-tensile-ductility]] — 3D 프린팅 초고연성 ECC 랜드마크.
- [[alkali-activated-materials]] — 알칼리 활성 지오폴리머 재료 체계.
- [[high-strength-strain-hardening-composites]] — 3D 프린팅 고성능 복합체 체계.
- [[sustainability-low-carbon-binders]] — 저탄소 디지털 건설 체계.
