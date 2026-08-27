---
title: "Multicomponent Optimization and Thermal Conductivity Model of PCM Rubber Concrete (Wang et al., 2026)"
type: source_note
source: "sources/wang-2026-multicomponent-optimization-design-and-thermal.pdf"
citation: "Wang, Y., Mia, M. S., Kim, H. K., & Lee, B. Y. (2026). Multicomponent optimization design and thermal conductivity model of PCM-rubber composite concrete for building energy conservation. Cement and Concrete Composites, 166, 105980."
date: 2026-08-24
tags:
  - pcm-rubber-concrete
  - thermal-conductivity-model
  - multi-objective-optimization
  - microencapsulated-pcm
  - energy-conservation
  - building-insulation
---

## Summary
건축물 외피의 단열성(낮은 열전도율)과 축열성(높은 잠열 용량) 및 충격 흡수 연성을 동시에 최적화하기 위해, 폐타이어 고무 분말(Rubber powder, 10 ~ 30 vol %)과 마이크로 캡슐화 상변화 물질(MPCM, 10 ~ 30 vol %)을 다성분계로 하이브리드 혼입한 복합 축열 콘크리트(PCM-RuC)의 유효 열전도율 다상 예측 모델(Multiphase Thermal Conductivity Model)을 수립하고, 유전 알고리즘 기반 다목적 최적 배합을 설계한 전남대학교 이방연 교수 연구팀의 2026년 최신 연구이다. 수정 Maxwell-Eucken 3상 열전도 모델을 정립하여 복합체의 열전도율을 $0.35 W/(m\cdot K)$로 60 % 저감하고 유효 잠열 **35.0 J/g** 및 압축강도 28.5 MPa를 달성하였다.

## Key Contributions
- **고무 입자-MPCM 3상 다공질 복합체의 유효 열전도율($k_{eff}$) 이론 모델 완성**: 고무의 저열전도성과 MPCM의 잠열 축열 효과를 결합한 폐쇄형 예측식 수립 ($R^2 = 0.98$).
- **단열과 축열의 2중 에너지 세이빙 시너지 규명**: 실내 온도 피크치를 $4.8 °C$ 완화하고 건물 냉난방 에너지를 45 % 절감.
- **다목적 최적화(NSGA-II)를 통한 강도-열물성 균형점 도출**: 고무 15 vol % + MPCM 20 vol %에서 구조용 외벽 패널 기준 충족.
- **폐타이어 업사이클링과 제로에너지 건축의 융합**: 라이프사이클 탄소 배출 대폭 감축.

## Methods
- 매트릭스: OPC ($W/C = 0.38$), 고무 분말 ($d = 1.0 mm$), 파라핀 MPCM ($T_m = 26 °C$, $\Delta H = 150 J/g$).
- 열물성 및 역학 시험: Hot Disk TPS 열전도율, DSC 잠열, 28 d 압축강도, 실물 외벽 단열 모의 챔버 연속 온도 측정.

## Results
- PCM-고무 복합 콘크리트 열역학 및 역학 물성 측정 결과표:

| 배합 ID | 고무 분율 (vol %) | MPCM 분율 (vol %) | 28 d 압축강도 (MPa) | 열전도율 ($W/(m\cdot K)$) | 유효 잠열 $\Delta H$ ($J/g$) | 챔버 피크 온도 저감 ($°C$) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| Control | 0 % | 0 % | 52.5 | 0.88 | 0.0 | 기준 |
| RuC-20 | 20 % | 0 % | 36.0 | 0.52 | 0.0 | $-1.5 °C$ |
| MPCM-20 | 0 % | 20 % | 38.5 | 0.58 | 28.5 | $-3.2 °C$ |
| **PCM-RuC-Opt** | **15 %** | **20 %** | **28.5** | **0.35** | **35.0** | **$-4.8 °C$** |

## Related Notes
- [[mia-2026-thermal-properties-cement-embedded-mpcm]] - MPCM 시멘트 열물성
- [[tang-2025-pcm-concrete-energy-storage]] - PCM 콘크리트 축열 기술 총설
- [[bompa-2017-experimental-constitutive-modelling-rubberised-concrete]] - 고무 콘크리트 역학
