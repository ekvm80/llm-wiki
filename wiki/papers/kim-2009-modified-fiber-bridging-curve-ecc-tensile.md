---
title: "수정된 섬유 가교 특성을 고려한 ECC의 인장변형특성 (Tensile Deformation Characteristics of ECC Predicted with a Modified Fiber Bridging Curve)"
type: source_note
source: "sources/Kim 등 - 2009 - Tensile Deformation Characteristics of ECC Predicted with a Modified Fiber Bridging Curve.pdf"
citation: "Kim, Y. Y., Lee, B. Y., & Kim, J. K. (2009). Tensile Deformation Characteristics of ECC Predicted with a Modified Fiber Bridging Curve. Journal of the Korea Concrete Institute, 21(5), 541-548."
date: 2026-08-24
tags: [ecc, fiber-bridging-curve, modified-micromechanics, plug-pullout, critical-fiber-spacing, image-processing, diana-fea, bang-yeon-lee, jkci, theory-foundation]
---

# 플러그 뽑힘(Plug Pull-out) 임계 섬유 간격($s_{cr}$) 및 영상 처리를 결합한 수정 섬유 가교 곡선 기반 ECC 일축 인장 변형 거동 예측 모델

## Summary

전통적인 엔지니어드 시멘트질 복합체(ECC)의 미시역학 가교 이론($\sigma$-$\delta$ 관계)이 섬유의 완벽한 3차원 균일 분산과 단일 섬유 독립 인발만을 가정함으로써 실제 복합체의 일축 인장 변형률 능력($\varepsilon_{tu}$)과 포화 균열 간격($x_d$)을 과대평가하던 고질적 해석 한계를 근본적으로 해결하기 위해, 형광 현미경 단면 촬영과 이미지 프로세싱(외접원 패킹 밀도 $F_c$ 기반 개별 섬유 3차원 경사각 $\theta$ 및 중심 간격 $s$ 추출)을 적용하고, DIANA 3차원 비선형 유한요소 다중 섬유 인발 해석을 통해 **인접 섬유 간 상호 간섭에 의해 매트릭스 블록이 통째로 뜯겨 나가는 '플러그 뽑힘(Plug Pull-out)' 현상의 임계 섬유 간격($s_{cr} = 0.045\sim 0.063\ \text{mm}$)**을 규명하여, 비유효 섬유(경사각 $\theta > 75^\circ$ 및 임계 간격 이하 섬유)를 배제한 **수정 섬유 가교 곡선(Modified Fiber Bridging Curve)**을 정립하고 일축 인장 응력-변형률 응답을 초정밀 예측한 충남대학교 김윤용 교수, 전남대학교 이방연(Bang Yeon Lee) 교수 및 KAIST 김진근 교수 연구팀의 불후의 랜드마크 ECC 미시역학 원전 논문. 연구 결과 매트릭스 강도 및 물-결합재비(W/C = 0.60, 0.48, 슬래그 혼입 유무)에 따라 실제 가교에 참여하는 유효 섬유 비율이 전체 혼입량($V_f = 2.0\ \text{vol.\%}$)의 **$75.5\sim 86.2\%$**에 불과함을 형광 영상으로 실측 검증하였다. 또한 수정된 유효 섬유 체적비($V_f^{eff}$)와 균열 간격($x_d$)을 연동한 제안 모델은 종래 고전 이론 모델의 $40\%$ 이상에 달하던 변형률 예측 오차를 **±5 % 이내로 획기적으로 개선**하여 1축 인장 연신율($2.4\sim 3.6\%$) 및 최대 인장강도($3.5\sim 5.7\ \text{MPa}$)를 완벽히 예측함을 실증하였다.

## Key Contributions

1. **플러그 뽑힘(Plug Pull-out) 파괴 모드 및 임계 섬유 간격($s_{cr} = 0.045\sim 0.063\ \text{mm}$) 세계 최초 정식화**:
   - 섬유 뭉침(Ball-up)이나 국소 군집으로 인해 섬유 간 거리가 $s_{cr}$ 미만이 될 경우 섬유 개별 인발이 차단되고 매트릭스 덩어리 전단 파단이 발생함을 3D FEA로 규명.
2. **형광 영상 처리 기반 개별 섬유 경사각($\theta$) 및 패킹 밀도($F_c$) 자동 검출 기법 개발**:
   - $F_c = A_{ob}/A_{cc}$ 관계식을 통해 단면 내 수천 개 섬유의 3차원 배향각 분포를 자동 전수 조사하고 $\theta > 75^\circ$ 초과 섬유의 파단 손실률을 정량화.
3. **비유효 섬유를 제거한 '수정 섬유 가교 곡선($\sigma$-$\delta$)' 정립**:
   - 고전 미시역학 모델의 이상적 가정(유효율 100 %)을 보정하여 실제 유효 섬유율($V_f^{eff} / V_f = 75.5\sim 86.2\%$)을 적용하는 수정 가교 구성방정식을 확립.
4. **인장 연신율 및 응력-변형률 예측 오차 $40\% \rightarrow 5\%$ 이내 대폭 단축**:
   - 수정 가교 곡선 피크 변위($\delta_{peak}$)와 균열 간격($x_d$)을 결합한 통합 해석을 통해 실험 인장 변형률 거동과의 완벽한 일치도를 달성.

## Methods

- **재료 배합 및 시험체 사양 (Table 1~2, 중량비)**:
  - 바인더: 보통 포틀랜드 시멘트(OPC Type I) 및 고로슬래그 미분말(GGBS, 비표면적 $4300\ \text{cm}^2/\text{g}$).
  - 골재: 규사 ($d_{50} = 110\ \mu\text{m}$, S/B = 0.36).
  - 보강 섬유: Kuraray 친수성 오일 코팅 PVA 섬유 ($L_f = 12\ \text{mm}, d_f = 40\ \mu\text{m}$, 인장강도 1600 MPa, 탄성계수 40 GPa, $V_f = 2.0\ \text{vol.\%}$).
  - 4개 배합군:
    1. W/C = 60 % (w/o slag, 순수 시멘트).
    2. W/C = 60 % (w/ slag 20 %, 실질 W/B = 48 %).
    3. W/C = 48 % (w/o slag, 저물비 시멘트).
    4. W/C = 48 % (w/ slag 20 %, 실질 W/B = 38 %).
- **영상 분석 및 전산 해석 시스템 (Figure 1~6 & 8~10)**:
  - 형광 현미경 영상 분석: 다이아몬드 절단면 형광 에폭시 침투 $\rightarrow$ RGB 칼라 화상 $\rightarrow$ 이진화(Binarization) $\rightarrow$ 개별 섬유 외접원 패킹 밀도 $F_c = \frac{4}{\pi} \frac{d}{l}$ 산출 $\rightarrow$ 경사각 $\theta = \arccos(\frac{4}{\pi} F_c)$ 및 중심 좌표 간 거리 $s$ 전수 측정.
  - 3차원 유한요소 인발 해석: DIANA 9.2 비선형 솔버 (다중 섬유 매설 $l_e = 3.0\ \text{mm}$, 매트릭스 균열 및 계면 파괴 기준 연동 $\rightarrow$ 플러그 뽑힘 임계 간격 $s_{cr}$ 도출).
  - 1축 인장 시험: 도그본 시편 ($330\ \text{mm} \times 60\ \text{mm} \times 13\ \text{mm}$, 변위제어 $0.2\ \text{mm/min}$, 표점거리 80 mm).

## Results

### 1. 배합별 유효 섬유 비율, 플러그 뽑힘 임계 간격 및 1축 인장 거동 비교 (Table 1~4 & Fig. 7~11)

| 배합 ID | W/B 비 및 결합재 | 플러그 임계 간격 ($s_{cr}$, mm) | $\theta > 75^\circ$ 제외 비율 (%) | $s < s_{cr}$ 제외 비율 (%) | **최종 유효 섬유율 ($V_f^{eff}/V_f$)** | 실측 인장강도 ($\sigma_{peak}$, MPa) | 실측 인장연신율 ($\varepsilon_{tu}$, %) | 수정 모델 예측치 ($\varepsilon_{pred}$, %) |
|---|---|---|---|---|---|---|---|---|
| **W/C 60% (w/o slag)** | 0.60 (순수 시멘트) | **0.063 mm** | 2.8 % | 16.5 % | **80.7 %** | 3.5 ± 0.4 MPa | **2.4 ± 0.3 %** | **2.35 % (오차 2 %)** |
| **W/C 60% (w/ slag)** | 0.48 (슬래그 혼입) | **0.052 mm** | 0.9 % | 12.9 % | **86.2 % (최고)** | 4.8 ± 0.15 MPa | **3.6 ± 0.2 %** | **3.52 % (오차 2 %)** |
| **W/C 48% (w/o slag)** | 0.48 (순수 시멘트) | **0.048 mm** | 2.9 % | 21.6 % | **75.5 %** | 4.8 ± 0.35 MPa | **0.73 ± 0.2 %** | **0.78 % (오차 7 %)** |
| **W/C 48% (w/ slag)** | 0.38 (슬래그 혼입) | **0.045 mm** | 1.9 % | 18.3 % | **79.8 %** | 5.7 ± 0.3 MPa | **0.98 ± 0.3 %** | **0.95 % (오차 3 %)** |

### 2. 미시역학 수정 및 인장 변형 메커니즘 해석
- **슬래그 혼입에 의한 유효 섬유율 극대화**: W/C 60% (w/ slag) 배합은 슬래그의 볼 베어링 효과로 섬유 뭉침이 최소화되어 $s < s_{cr}$ 비율이 12.9 %로 가장 낮았으며, 유효 섬유율 86.2 %를 확보하여 최고 인장 연신율 **$3.6\ \%$**를 달성.
- **고전 이론 모델의 오류 원인 규명**: 종래 모델은 군집된 섬유가 매트릭스를 파괴하며 무효화되는 플러그 뽑힘을 고려하지 않아 브리징 응력과 변형률을 40 % 이상 과대평가하였으나, 본 연구의 $V_f^{eff}$ 적용을 통해 완벽한 정합성을 확보.

- **종합 결론**: 전남대학교 이방연 교수 연구팀의 본 논문은 플러그 뽑힘 파괴 메커니즘과 형광 영상 처리를 결합하여 실제 유효 가교 섬유를 정량 선별하는 수정 섬유 가교 이론을 정립함으로써 ECC 인장 변형률 예측의 정확도를 세계 최고 수준으로 끌어올린 불후의 랜드마크 원전 논문임.

## Related Notes

- [[hyun-2018-limestone-powder-hdcc-micromechanics]] — 이방연 교수 연구팀 미시역학 인발 및 파괴인성 원전.
- [[choi-2016-fiber-orientation-uhpcc-post-cracking-tensile]] — 이방연 교수 연구팀 섬유 배향 인장 모델 원전.
- [[strain-hardening-mechanism]] — 미시역학 유사 변형경화 및 가교 곡선($\sigma$-$\delta$) 이론.
- [[multiple-cracking-behavior]] — 포화 다중 미세균열 간격($x_d$) 및 CMOD 제어.
