---
title: "Effect of the Fiber Coating on the Radiation Sensitivity of Type I FBGs"
type: source_note
source: "sources/gusarov-2008-effect-of-the-fiber-coating.pdf"
citation: "Gusarov, A., Chojetzki, C., McKenzie, I., Thienpont, H., & Berghmans, F. (2008). Effect of the Fiber Coating on the Radiation Sensitivity of Type I FBGs. IEEE Photonics Technology Letters, 20(21), 1802-1804."
date: 2026-08-23
tags: [fiber-bragg-gratings, fbg, fiber-coating, radiation-sensitivity, polyimide-coating, acrylate, ormocer, structural-health-monitoring, space-radiation, ieee, theory-foundation]
---

# 광섬유 브래그 격자(FBG) 센서의 고분자 코팅 종류(폴리이미드·아크릴레이트·오르모세르)가 감마 방사선 유도 파장 감도에 미치는 영향

## Summary

우주 궤도 구조물 및 원자력 인프라의 가혹한 방사선 환경 하에서 광섬유 브래그 격자(Fiber Bragg Gratings: FBG) 기반 구조 건전성 모니터링(SHM) 및 방사선 선량계(Dosimeter)의 신뢰성을 확보하기 위해, $18\ \text{mol.\%}\ \text{GeO}_2$가 고농도 도핑된 감광성 코어 FBG에 3가지 상용 보호 코팅인 폴리이미드(Polyimide), 아크릴레이트(Acrylate), 유무기 복합 오르모세르(Ormocer), 그리고 기계적으로 코팅을 완전 박리한 무코팅(Stripped) 광섬유를 대상으로 $^{60}\text{Co}$ 감마선 조사 챔버에서 총 흡수선량 **40 kGy (근지구 우주 임무 누적 수준)**까지 연속 조사하여 방사선 유도 격자 반사 진폭 감쇠, 브래그 파장 이동($\Delta\lambda_B$) 및 온도 감도 계수($K_T$)의 변화를 정밀 측정한 벨기에 SCK-CEN 원자력연구소 및 브뤼셀 자유대학(VUB) Andrei Gusarov 박사 및 유럽우주국(ESA ESTEC) 연구팀의 랜드마크 광전자-원자력 계측 원전 논문. 연구 결과 감마선 조사에 의해 고분자 코팅재의 방사선 분해 가스 방출 및 미세 기포 형성에 따른 팽창(Swelling)이 발생하여 광섬유 코어에 추가적인 축방향 인장 응력을 가함으로써 무코팅 섬유 대비 상당한 추가 파장 드리프트를 유발함을 세계 최초로 정량 규명하였다. 특히 **폴리이미드 코팅 FBG는 40 kGy 고선량 조사 후에도 반사 진폭 저하가 극소화되고 파장 드리프트가 가장 안정적**으로 유지되어 가혹 방사선 환경 구조 모니터링에 가장 최적의 코팅재임을 실증하였다.

## Key Contributions

1. **FBG 방사선 유도 파장 이동에 대한 고분자 코팅의 기계적 응력 결합 메커니즘 규명**:
   - 기존의 실리카 유리 자체 결함(Color Center) 생성에만 국한되던 해석을 확장하여, 감마선 조사 시 고분자 코팅의 체적 팽창(Swelling)이 광탄성 효과(Photoelastic Effect)를 통해 코어 굴절률 및 격자 주기를 변화시키는 역학적 결합 모델을 정립.
2. **40 kGy 고선량 조사 하 4종 코팅별 FBG 안정성 체계적 비교**:
   - 폴리이미드 코팅, 아크릴레이트 코팅, 오르모세르(Ormocer) 및 무코팅 FBG의 반사 진폭 감쇠 거동과 잔류 파장 이동량을 실험적으로 정량화.
3. **광탄성 굴절률 변화 한계 수식 모델(Eq. 2) 확립**:
   - 코팅재의 파단 강도($\sigma_b$)와 광탄성 계수($p_{11}, p_{12}$)를 결합하여 코팅 두께 및 물성에 따른 최대 유도 굴절률 변화($\Delta n_{max} \sim 10^{-3}$)의 이론적 상한선을 도출.
4. **우주 및 원자력 구조물 SHM 센서 선정 및 선량계(Dosimeter) 설계 지침 수립**:
   - 정밀 변형률 계측 시에는 폴리이미드 코팅을 선택하여 오차를 최소화하고, 반대로 고감도 방사선 선량계 설계 시에는 코팅 두께를 두껍게 조절하여 감도를 증폭시키는 공학적 설계 기법 제시.

## Methods

- **FBG 센서 사양 및 코팅 재료 매트릭스 (Table 1 & Section II)**:
  - 코어 사양: $18\ \text{mol.\%}\ \text{GeO}_2$ 고도핑 감광성 단일모드 광섬유 (Draw Tower Gratings 공정으로 코팅 도포 전 격자 직접 각인).
  - 브래그 파장 대역: $\lambda_B \approx 1550\ \text{nm}$, 초기 격자 진폭 $A_0 = 4.5\sim 15.0\ \text{dB}$.
  - 4개 코팅 그룹:
    1. Polyimide 코팅 (두께 $15\ \mu\text{m}$, 파단강도 $\sigma_b \approx 230\ \text{MPa}$, 열팽창계수 $\approx 3 \times 10^{-6}/\text{K}$).
    2. Acrylate 코팅 (두께 $60\ \mu\text{m}$, 파단강도 $\sigma_b \approx 50\ \text{MPa}$).
    3. Ormocer 유무기 복합 코팅 (두께 $20\ \mu\text{m}$).
    4. Stripped (오르모세르 코팅을 기계적으로 박리한 순수 실리카 유리 섬유).
- **방사선 조사 및 실시간 광학 계측 시스템**:
  - 방사선원: $^{60}\text{Co}$ 감마선 챔버 (선량률 약 $1.0\ \text{kGy/h}$, 총 조사선량 40 kGy).
  - 광학 계측: 광 스펙트럼 분석기(OSA), 파장 분해능 $0.001\ \text{nm}$, 항온조 온도 제어 ($25.0 \pm 0.1\ ^\circ\text{C}$).

## Results

### 1. 코팅 종류별 40 kGy 감마선 조사 전후 FBG 광학 파라미터 변화 비교 (Table 1 & Fig. 1)

| 코팅 종류 | 초기 격자 진폭 ($A_0$, dB) | 40 kGy 후 진폭 ($A_1$, dB) | 초기 온도계수 ($K_{T0}$, pm/°C) | 조사 후 온도계수 ($K_{T1}$, pm/°C) | 방사선 유도 파장 드리프트 특성 |
|---|---|---|---|---|---|
| **Polyimide (폴리이미드)** | 4.8 ± 0.2 dB | 4.2 ± 0.2 dB | 11.2 ± 0.2 pm/°C | 11.1 ± 0.2 pm/°C | **가장 작고 안정적 (우주 SHM 최적)** |
| **Acrylate (아크릴레이트)** | 4.6 ± 0.2 dB | 3.8 ± 0.2 dB | 10.8 ± 0.2 pm/°C | 10.6 ± 0.2 pm/°C | 코팅 연화 및 부분 가스 방출 |
| **Ormocer (오르모세르)** | 14.5 ± 0.3 dB | 11.2 ± 0.3 dB | 12.8 ± 0.3 pm/°C | 12.7 ± 0.3 pm/°C | 진폭 감소 상대적 큼 |
| **Stripped (무코팅 섬유)** | 14.2 ± 0.3 dB | 10.8 ± 0.3 dB | 10.2 ± 0.2 pm/°C | 10.1 ± 0.2 pm/°C | 순수 유리 결함 유도 드리프트 |

### 2. 코팅 팽창(Swelling)과 광탄성 응력 해석
- **코팅 유도 응력의 정량화**: 감마선에 의해 분해된 고분자 사슬의 라디칼 반응 및 미세 기포 형성에 의해 코팅이 팽창하면서 코어에 전달되는 축방향 인장 응력은 폴리이미드의 경우 최대 $\Delta n \approx 10^{-4}$ 수준의 굴절률 변화를 발생시킴.
- **온도 감도 계수의 불변성**: 40 kGy 조사 후에도 모든 코팅의 온도 감도 계수($K_T$)는 오차 범위($\pm 0.2\ \text{pm/}^\circ\text{C}$) 내에서 일정하게 유지되어 온도-변형률 분리 보정이 여전히 유효함을 입증.

- **종합 결론**: 본 연구는 우주 및 원자력 가혹 환경에서 FBG 광센서 적용 시 고분자 보호 코팅의 방사선 팽창과 기계적 응력 결합 현상을 최초로 규명하고, 최적의 내방사선 코팅재로 폴리이미드를 확립한 광섬유 스마트 구조공학의 선구적 원전 논문임.

## Related Notes

- [[di-2014-fbg-sensor-embedded-strain-monitoring]] — 구조체 내부 FBG 광섬유 센서 매설 및 변형률 모니터링 원전.
- [[udd-1996-fiber-optic-smart-structures]] — FBG, EFPI 광섬유 스마트 센서 구조 모니터링 IEEE 총설.
- [[udd-1996-fiber-optic-smart-structures]] — 토목 및 우주 복합구조 건전성 모니터링 체계.
- [[gelino-2024-lunar-regolith-polymer-composites-nasa]] — 우주 방사선 환경 우주 구조 복합재.
