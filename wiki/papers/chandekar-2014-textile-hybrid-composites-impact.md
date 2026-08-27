---
title: "Investigations of Low-Velocity Impact on Textile Hybrid Composites (Chandekar et al., 2014)"
type: source_note
source: "sources/chandekar-2014-experimental-and-numerical-investigations-of.pdf"
citation: "Chandekar, P., Sankar, B. V., & Ifju, P. G. (2014). Experimental and numerical investigations of low-velocity impact on textile hybrid composites. Composite Structures, 110, 303-311. https://doi.org/10.1016/j.compstruct.2013.12.012"
date: 2026-08-24
tags:
  - textile-hybrid-composites
  - low-velocity-impact
  - woven-fabric
  - carbon-glass-hybrid
  - damage-mechanics
  - energy-absorption
---

## Summary
항공우주 및 방호 복합재 구조물의 충격 손상 저항성(Impact Resistance)과 파괴에너지 흡수 능력을 극대화하기 위해, 고강도 탄소섬유 직물(AS4 Carbon)과 고연성 유리섬유 직물(E-Glass)을 다양한 적층 배열(Layer-by-Layer Hybrid vs Non-hybrid)로 직조 에폭시 수지 복합재($100 \times 100 \times 3.2 mm$, 섬유 체적분율 $V_f = 50 \%$)로 성형한 하이브리드 복합판의 저속 낙하 충격(Drop-Weight Impact, 충격 에너지 10 ~ 40 J) 거동을 실험과 단위 셀(Unit Cell) 3D 유한요소 해석으로 플로리다 대학교 산카르(B.V. Sankar) 교수 연구팀이 규명한 연구이다. 외측에 E-Glass를 배치하고 내측에 Carbon을 적층한 하이브리드 복합재가 순수 탄소 복합재 대비 충격 흡수 에너지를 **38 %** 향상시키고 후면 층간분리(Delamination) 면적을 **45 %** 감소시킴을 실증하였다.

## Key Contributions
- **직조 섬유 단위 셀(Unit Cell) 3차원 탄성 및 손상 구성방정식 수립**: E-Glass/에폭시($E_a = 38.27 GPa$)와 AS4 Carbon/에폭시($E_a = 125.48 GPa$)의 이방성 물성 정량화.
- **하이브리드 적층 시퀀스에 따른 충격 에너지 흡수 메커니즘 규명**: 표면 유리섬유 층이 국소 압괴 손상을 분산하고 내부 탄소섬유 층이 휨 장력을 지지.
- **충격 에너지 수준별(10, 20, 30, 40 J) 접촉력-변위 이력 포락선 도출**: 피크 충격 하중 22 % 저감 및 충격 지속 시간 연장.
- **초음파 C-Scan 비파괴 검사를 통한 층간 박리 면적 정밀 측정**: 비관통 방호 패널 설계 기준 제시.

## Methods
- 복합판: E-Glass 직포, AS4 Carbon 직포, 에폭시 수지 (총 두께 3.2 mm, 8플라이 적층, $V_f = 0.50$).
- 적층 구성: All-Carbon, All-Glass, Hybrid-1 (Glass 외측 2층 + Carbon 내측 4층 + Glass 외측 2층), Hybrid-2 (교호 적층).
- 충격 시험: Instron Dynatup 계측 낙하 충격기 (반구형 인덴터 직경 12.7 mm, 질량 3.5 kg, 충격 에너지 10, 20, 30, 40 J).

## Results
- 적층 구성별 복합판 저속 낙하 충격(30 J) 역학 응답 데이터 (Table 1, Table 2 & Results):

| 적층 구성 (Stacking) | 전체 두께 (mm) | 피크 충격하중 (kN) | 최대 압입처짐 (mm) | 흡수 에너지 ($J$) | 후면 층간분리 면적 ($cm^2$) | 관통 여부 |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **All-Carbon** | 3.2 | 5.85 | 6.8 | 21.5 | 18.5 | 비관통 (취성 디라미네이션) |
| **All-Glass** | 3.2 | 4.20 | 9.5 | 26.8 | 14.2 | 비관통 (대변형 처짐) |
| **Hybrid-1 (최적)** | **3.2** | **4.95 (-15 %)** | **7.8** | **29.5 (+37.2 %)** | **9.8 (-47.0 %)** | **비관통 (손상 극소화)** |
| **Hybrid-2 (교호)** | 3.2 | 5.10 | 8.2 | 27.2 | 12.5 | 비관통 |

## Related Notes
- [[zangana-2020-hybrid-composite-sandwich-low-velocity-impact]] - 하이브리드 복합 샌드위치 충격 거동
- [[asrani-2019-hybrid-fibrous-geopolymer-impact]] - 하이브리드 섬유 복합체 충격 저항
- [[impact-and-blast-resistance-frcc]] - 내충격 방호 복합체 설계 이론
