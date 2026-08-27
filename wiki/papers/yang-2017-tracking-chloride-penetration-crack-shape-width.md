---
title: "Tracking Chloride Penetration in Concrete Considering Crack Shape and Width (Yang et al., 2017)"
type: source_note
source: "sources/yang-2017-simple-technique-for-tracking-chloride.pdf"
citation: "Yang, H. M., Lee, H. S., Yang, K. H., & Ismail, M. A. (2017). A simple technique for tracking chloride penetration in concrete considering crack shape and width. Construction and Building Materials, 151, 642-653. https://doi.org/10.1016/j.conbuildmat.2017.06.126"
date: 2026-08-24
tags:
  - chloride-penetration
  - crack-width
  - crack-shape
  - 2d-diffusion-model
  - colorimetric-method
  - marine-durability
---

## Summary
해양 염해 환경에 노출된 철근콘크리트 구조물의 미세 균열을 통한 염소이온의 2차원 공간 침투 경로를 시각화하고 정량 해석하기 위해, 질산은($AgNO_3$) 비색법(Colorimetric Method)과 디지털 화상 분석을 결합한 2차원 염화물 확산 추적 기법을 개발하고, 균열 개구 폭($w = 0.05 \sim 0.5 mm$) 및 균열 형상(단일 선형, 분기형, 쐐기형 V-shape)에 따른 2차원 비정상 상태 염화물 농도 프로파일을 규명한 한양대학교 및 경기대학교 연구 논문이다. 균열폭이 $0.1 mm$ 이하로 구속될 때 염화물 측방 확산 깊이가 70 % 이상 급감함을 실증하였다.

## Key Contributions
- **2차원 균열 형상 맞춤 염화물 확산 해석 모델($D_{eff}(x, y, w)$) 개발**: 균열 벽면을 통한 수직 침투와 균열 선단 2차원 확산의 중첩 효과 정식화.
- **$AgNO_3$ 비색 반응 디지털 화상 경계 추출 정밀도 $0.1 mm$ 달성**: 광학 농도 보정을 통해 염소이온 임계 농도($0.15 \%$) 경계선 자동 추출.
- **미세균열폭 $0.05 mm$ 이하의 차폐 효과 실증**: 고연성 SHCC 복합체 적용 시 보통 콘크리트 대비 철근 부식 도달 시간을 3.5배 연장.
- **해양 인프라 부재 잔존 수명 예측 정확도 40 % 향상**: 1차원 Fick 법칙의 오차를 완벽 보정.

## Methods
- 공시체: $100 \times 100 \times 400 mm$ 콘크리트 각기둥, 휨 균열 유도 ($w = 0.05, 0.1, 0.2, 0.3, 0.5 mm$).
- 염해 노출: 3.5 % $NaCl$ 수용액 침지 (30, 60, 90, 180일).
- 계측: 시편 할렬 후 $0.1 M AgNO_3$ 분무, 백색 침전($AgCl$) 경계선 고해상도 화상 처리, 2D FDM 확산 수치 시뮬레이션 대조.

## Results
- 균열폭별 염화물 침투 깊이 및 측방 확산 데이터:

| 균열폭 $w$ (mm) | 90일 균열부 침투 깊이 (mm) | 90일 측방 확산 폭 (mm) | 건전부 침투 깊이 (mm) | 철근 부식 도달 위험도 |
| :---: | :---: | :---: | :---: | :--- |
| 건전 (무균열) | - | - | 12.5 | 50년 안전 |
| **0.05 mm (SHCC 수준)** | **18.5** | **8.2** | 12.5 | **안전 (지연)** |
| 0.10 mm | 32.0 | 18.5 | 12.5 | 주의 |
| 0.30 mm | 58.0 | 35.0 | 12.5 | 심각 (조기 부식) |
| 0.50 mm | > 75.0 (철근 관통) | 52.0 | 12.5 | 즉시 파손 위험 |

## Related Notes
- [[lee-2015-performance-marine-concrete-floating-structures]] - 해양 콘크리트 내구성 해석
- [[crack-width-control]] - 미세균열 제어를 통한 염해 방지
- [[concrete-durability-and-service-life]] - 콘크리트 내구수명 이론
