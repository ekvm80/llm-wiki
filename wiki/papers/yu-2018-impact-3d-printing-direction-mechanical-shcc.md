---
title: "Impact of 3D Printing Direction on Mechanical Properties of SHCC (Yu et al., 2018)"
type: source_note
source: "sources/yu-2018-impact-of-3d-printing-direction.pdf"
citation: "Yu, K. Q., McGee, W., Ng, T. Y., Zhu, W., & Li, V. C. (2018). Impact of 3D printing direction on mechanical properties of strain-hardening cementitious composites (3DP-SHCC). In Proceedings of the 1st RILEM International Conference on Concrete and Digital Fabrication (Digital Concrete 2018), Zurich, Switzerland, pp. 247-258."
date: 2026-08-24
tags:
  - 3d-printing-shcc
  - printing-direction
  - fiber-orientation
  - layer-interface
  - anisotropy
  - digital-fabrication
---

## Summary
디지털 적층 제조(3D Concrete Printing) 기술을 고연성 변형경화형 복합체(SHCC/ECC)에 융합할 때, 압출 노즐 통과 시 발생하는 전단 유동 정렬과 적층 방향성(인쇄 방향 0°, 직교 방향 90°, 수직 적층 방향 Z축)이 섬유의 2D 평면 정렬도, 층간 계면 접합 강도(Interlayer Bond Strength) 및 일축 직접 인장 변형경화 포락선에 미치는 이방성(Anisotropy)을 미시간 대학교 빅터 리(Victor Li) 교수 연구팀이 규명한 랜드마크 논문이다. 노즐 압출 방향(0°)을 따라 인장 하중이 작용할 때 섬유의 고도 정렬($\alpha_\theta = 0.88$)로 인해 주조 시편 대비 직접 인장강도가 **45 %**, 극한 인장 변형률능이 **7.5 %**로 향상됨을 실증하였다.

## Key Contributions
- **3D 프린팅 SHCC의 압출 유동 섬유 정렬 메커니즘 최초 규명**: 노즐 전단 벽면 효과로 섬유가 인쇄 경로를 따라 1차원/2차원 정렬.
- **3차원 방향별 인장 이방성 계수 정량화**: 종방향(0°) 연성 7.5 % 대 적층 수직방향(Z축) 연성 2.8 % 포락선 수립.
- **적층 시간 간격(Open Time)에 따른 층간 접합 강도 제어**: 휴지 시간 10분 이내에서 층간 전단 강도 95 % 보존.
- **무거푸집 비정형 고연성 셸 구조물 시공 기반 확립**: 거푸집 없는 자율 적층 기술 실현.

## Methods
- 프린팅 시스템: 6축 산업용 로봇 암, 스크류 압출 노즐 (오리피스 $30 \times 15 mm$, 속도 $100 mm/s$).
- 배합: PVA-SHCC (REC15, $V_f = 2.0 \%$, 점도 조절제 HPMC, 나노 클레이 도핑).
- 시험: 3개 주방향(0°, 90°, Z축) 도그본 직접 인장 시험, 층간 직접 전단 시험, 단면 섬유 타원 화상 분석.

## Results
- 3D 프린팅 방향별 SHCC 28 d 인장 역학 물성 데이터:

| 재하 방향 | 섬유 정렬 계수 $\alpha_\theta$ | 초기 균열 강도 (MPa) | 극한 인장강도 (MPa) | 극한 인장 변형률능 (%) | 파괴 모드 |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **인쇄 종방향 (0°)** | **0.88** | **4.85** | **6.85** | **7.50 (최고 연성)** | **초고밀도 다중 미세균열** |
| 인쇄 횡방향 (90°) | 0.65 | 3.80 | 4.90 | 4.20 | 다중 미세균열 |
| 수직 적층방향 (Z축) | 0.48 | 3.20 | 3.95 | 2.80 | 층간 계면 분리 수반 |
| 기존 몰드 주조 (Mold) | 0.58 | 3.50 | 4.50 | 3.80 | 표준 다중균열 |

## Related Notes
- [[lee-2012-comparison-manufacturing-frc-panels]] - 압출 성형 패널 섬유 정렬
- [[fiber-orientation-distribution]] - 섬유 배향 분포 이론
- [[pseudo-strain-hardening-criteria]] - PSH 미시역학 이론
