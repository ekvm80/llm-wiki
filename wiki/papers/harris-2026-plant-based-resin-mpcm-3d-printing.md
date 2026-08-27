---
title: "A plant-based resin composite containing microencapsulated phase change material for thermal management"
type: source_note
source: "sources/harris-2026-a-plant-based-resin-composite-containing.pdf"
citation: "Harris, I., MacNeill, O., De Obaldia, E., & Yagoobi, J. (2026). A plant-based resin composite containing microencapsulated phase change material for thermal management. Thermal Science and Engineering Progress, 103210."
date: 2026-08-23
tags: [plant-based-resin, bio-composites, microencapsulated-pcm, mpcm-28, lcd-3d-printing, thermal-management, latent-heat-storage, finite-element-analysis, theory-foundation]
---

# 식물성 대두유 수지(PBR) 기반 마이크로캡슐 상변화물질(MPCM) 복합체의 LCD 3D 프린팅 성형 및 열관리 거동

## Summary

탄소 배출을 줄이고 지속가능한 바이오 기반 스마트 외피 및 전자부품 열관리(Thermal Management) 솔루션을 구현하기 위해, 콩기름(Soybean Oil) 유래의 친환경 광경화 식물성 수지(Plant-Based Resin: PBR)를 매트릭스로 채택하고, 멜라민 쉘로 캡슐화된 파라핀계 마이크로캡슐 상변화물질(MPCM-28, 상변화 피크온도 $28.0\ ^\circ\text{C}$, 융해잠열 $180.5\ \text{J/g}$)을 20 vol.%, 33 vol.%, 50 vol.%로 혼입하여 상용 LCD 광조형(Vat Photopolymerization) 3D 프린팅으로 정밀 적층 성형한 후, 인장강도, 겉보기 밀도, 열전도도($k$), 비열($c_p$), DSC/TGA 열안정성, 그리고 과도 열유속 가열 하에서의 유한요소 해석(FEA) 및 실측 열조절 성능을 정밀 규명한 미국 우스터 폴리테크닉 연구소(WPI) 및 파나마 기술대(UTP) Jamal Yagoobi 교수 연구팀의 2026년 최신 랜드마크 바이오 복합재 원전 논문. 연구 결과 광경화 반응의 광투과 방해 없이 MPCM을 50 vol.%까지 균일 분산하여 **$65.8\ \text{J/g}$의 고용량 잠열**을 저장할 수 있는 3D 조형체를 완성하였다. 또한 MPCM 50 vol.% 혼입 시 열전도도가 **$0.21 \rightarrow 0.14\ \text{W/m}\cdot\text{K}$로 33.3 % 감소(단열성 개선)**하고 유효 비열이 **$1.45 \rightarrow 2.25\ \text{J/g}\cdot\text{K}$로 55.2 % 급증**하였으며, 외부 가열 시 표면 온도 상승 속도를 48 % 늦추고 최고 온도를 **$4.8\ ^\circ\text{C}$ 감쇠**시킴을 실험 및 수치해석으로 입증하였다.

## Key Contributions

1. **식물성 바이오 수지(PBR) 기반 고충전(50 vol.%) MPCM 광경화 3D 프린팅 공정 확립**:
   - 석유계 합성 수지 대신 대두유 기반 친환경 광경화 수지를 사용하여 MPCM 혼입 시의 자외선(UV 405 nm) 산란을 노출 시간 최적화($3.5\sim 5.0\ \text{s}$)로 극복하고 고정밀 3차원 축열 구조체를 조형.
2. **단열성과 잠열 축열성의 동시 향상 ($k = 0.14\ \text{W/m}\cdot\text{K}, \Delta H_m = 65.8\ \text{J/g}$)**:
   - 중공 캡슐 구조의 낮은 열전도 특성으로 인해 열전도도가 33 % 저감되어 외부 열침투를 차단함과 동시에 $28\ ^\circ\text{C}$ 상변화 구간에서 대량의 잠열을 흡수하여 등온 유지 성능을 발휘.
3. **열-역학적 성능 및 비선형 FEA 과도 열전달 모델링 검증**:
   - 실험 데이터와 3차원 유한요소 전산해석(FEA)을 결합하여 가열-냉각 사이클 동안의 상변화 이동 계면(Stefan Problem)을 상대오차 4.2 % 이내로 완벽히 모사.

## Methods

- **원재료 및 MPCM 복합 수지 배합 (Table 1~2 & Figures 1~2)**:
  - 매트릭스: 상용 식물성 수지 (Anycubic Plant-based UV Resin, 대두유 유래 아크릴레이트 모노머/올리고머, 밀도 $1.08\ \text{g/cm}^3$).
  - PCM: 마이크로캡슐 파라핀 (MPCM-28, 멜라민-포름알데히드 쉘, 평균 입경 $15\sim 20\ \mu\text{m}$, 상변화 온도 $28.0\ ^\circ\text{C}$, 잠열 $180.5\ \text{J/g}$).
  - 배합 매트릭스 (4종):
    1. PBR-0 (순수 식물성 수지 대조군).
    2. PBR-MPCM20 (MPCM 20 vol.%, 17.5 wt.%).
    3. PBR-MPCM33 (MPCM 33 vol.%, 29.8 wt.%).
    4. PBR-MPCM50 (MPCM 50 vol.%, 46.2 wt.%).
- **LCD 광경화 3D 프린팅 및 시험체 제작**:
  - 프린터: Anycubic Photon Mono X 6K (405 nm UV 파장, 레이어 두께 $50\ \mu\text{m}$, 조사 시간 4.5초).
  - 시험체 형상: 열물성 측정용 원통 블록($\phi 30\ \text{mm} \times 15\ \text{mm}$), ASTM D638 Type IV 인장 시편, 열관리 시험용 평판($100\ \text{mm} \times 100\ \text{mm} \times 5\ \text{mm}$).
- **실험 장비 및 시험 방법**:
  - 열물성: Thermtest MP-V 플랫폼 (과도 평면 열원법 TPS, 열전도도 및 열확산율 동시 측정).
  - 열분석: DSC (Netzsch 214 Polyma, $5\ ^\circ\text{C/min}$), TGA (Q50, 질소 분위기 $25\sim 600\ ^\circ\text{C}$).
  - 인장 시험: Instron 5969 만능재료시험기 (로드셀 50 kN, 변위 속도 $5\ \text{mm/min}$).
  - 과도 열관리 시험: 100 W 유연성 실리콘 히터 패드, 4채널 Type-K 열전대 및 적외선 열화상 카메라(FLIR).

## Results

### 1. MPCM 혼입률별 바이오 복합재 물리·역학 및 열물성 비교 (Table 3~5 & Fig. 3~7)

| 시험체 ID | MPCM 혼입률 (vol.%) | 겉보기 밀도 ($\text{g/cm}^3$) | 인장강도 ($\sigma_t$, MPa) | 파단 연신율 ($\varepsilon_f$, %) | 열전도도 ($k$, W/mK) | 유효 비열 ($c_p$, J/gK) | 융해 잠열 용량 ($\Delta H_m$, J/g) |
|---|---|---|---|---|---|---|---|
| **PBR-0 (Control)** | 0.0 % (대조군) | 1.08 ± 0.01 | 32.5 ± 1.5 | 8.5 ± 0.5 % | 0.21 ± 0.01 | 1.45 ± 0.05 | 0.0 J/g (잠열 없음) |
| **PBR-MPCM20** | 20.0 vol.% | 1.02 ± 0.01 | 22.4 ± 1.2 | 6.2 ± 0.4 % | 0.18 ± 0.01 | 1.72 ± 0.06 | 28.5 ± 1.2 J/g |
| **PBR-MPCM33** | 33.0 vol.% | 0.98 ± 0.01 | 15.8 ± 1.0 | 4.8 ± 0.3 % | 0.16 ± 0.01 | 1.95 ± 0.07 | 45.2 ± 1.8 J/g |
| **PBR-MPCM50** | **50.0 vol.%** | **0.92 ± 0.01** | **10.5 ± 0.8** | **3.2 ± 0.2 %** | **0.14 ± 0.01 (−33 %)**| **2.25 ± 0.08 (+55 %)**| **65.8 ± 2.2 J/g** |

### 2. 열관리 및 지속가능성 해석
- **열완충(Thermal Buffering) 메커니즘**: $1000\ \text{W/m}^2$ 열유속 가열 시 MPCM50 패널은 상변화 온도 대역($27\sim 30\ ^\circ\text{C}$)에서 12분 동안 등온 플래토(Plateau)를 형성하여 이면 온도를 $4.8\ ^\circ\text{C}$ 낮게 유지.
- **친환경성**: 석유 기반 폴리머 매트릭스를 콩기름 바이오 레진으로 대체하여 탄소 발자국을 45 % 감축.

- **종합 결론**: WPI 연구팀의 본 연구는 식물성 대두유 수지와 마이크로캡슐 PCM을 3D 프린팅 기술로 융합하여, 경량성(0.92 g/cm³), 단열성(0.14 W/mK) 및 고잠열 축열 성능(65.8 J/g)을 동시에 발현하는 차세대 지속가능 바이오 스마트 열관리 소재를 정립한 최신 원전 논문임.

## Related Notes

- [[gu-2022-halloysite-pcm-cement-panel-thermal]] — 할로이사이트-PEG 상변화 시멘트 패널 열조절 원전.
- [[desai-2014-thermally-adaptive-pcm-ecc]] — 마이크로캡슐 파라핀 PCM 결합 적응형 ECC 원전.
- [[sustainability-low-carbon-binders]] — 지속가능 바이오 및 저탄소 복합재 체계.
- [[gencel-2022-attapulgite-pcm-foam-concrete]] — 나노점토 공융 PCM 복합재 원전.
