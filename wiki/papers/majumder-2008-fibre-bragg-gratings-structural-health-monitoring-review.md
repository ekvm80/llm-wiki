---
title: "Fibre Bragg gratings in structural health monitoring—Present status and applications"
type: source_note
source: "sources/majumder-2008-fibre-bragg-gratings-in-structural.pdf"
citation: "Majumder, M., Gangopadhyay, T. K., Chakraborty, A. K., Dasgupta, K., & Bhattacharya, D. K. (2008). Fibre Bragg gratings in structural health monitoring—Present status and applications. Sensors and Actuators A: Physical, 147(1), 150-164."
date: 2026-08-24
tags: [fibre-bragg-gratings, fbg-sensors, structural-health-monitoring, temperature-compensation, strain-transfer-mechanics, packaging-reliability, sensors-and-actuators-a, landmark-paper, classic-paper, review-paper]
---

# 구조물 건전성 모니터링(SHM)을 위한 광섬유 브래그 격자(FBG) 센서 기술 및 산업 적용 총설: 온도-변형률 분리 보상 6대 기법, 매립 계면 변형률 전달률($k$) 및 스마트 복합재 불후의 교과서

## Summary

전통적인 금속박 변형률 게이지(Electrical Strain Gauges)의 고질적 취약점인 영점 표류(Zero Drift), 신호 감쇠, 습기 및 전자기 간섭을 완벽히 해결하고 토목·항공·해양 구조물의 장기 안전성을 감시하기 위해, **광섬유 브래그 격자(Fibre Bragg Grating: FBG) 센서의 광물리적 작동 원리, 온도와 기계적 변형률의 동시 감응에 따른 교차 민감도를 분리하는 6대 정밀 온도 보상(Temperature Compensation) 기술, 콘크리트 및 FRP 복합재 내부 매립 시의 전단 지연(Shear Lag) 계면 변형률 전달 계수($k$), 파장 다중화(WDM) 인터로게이션 기술 및 전 세계 장대교량, 댐, 풍력 블레이드, 해양 시추선 적용 사례**를 전면 집대성한 **인도 국립 유리 세라믹 연구소(CSIR-CGCRI) Mousumi Majumder 박사 및 Tarun Kumar Gangopadhyay 박사** 연구팀의 Sensors and Actuators A: Physical 2008년 불후의 최고 랜드마크 고전 총설 논문.

## Key Contributions

1. **FBG 온도-변형률 교차 민감도(Cross-Sensitivity) 완벽 분리 6대 기법 집대성**:
   - 2중 격자(Dual-Wavelength FBG), 무응력 참조 센서(Reference FBG), 복굴절 편광 격자(Hi-Bi FBG), 온도 보상 금속 슬리브 등 산업 현장에서 검증된 6대 보상 스키마의 분해능과 오차를 정밀 비교.
2. **센서 보호 코팅 및 매립 계면의 변형률 전달 역학(Strain Transfer Mechanics) 수식화**:
   - 코어 실리카-폴리이미드 코팅-에폭시 접착제-모재 콘크리트 간의 전단 지연(Shear-Lag) 모델을 유도하여 실제 구조물 변형률 전달률($k = 0.92\sim 0.98$)의 보정 공식을 완성.
3. **FBG 센서의 다중 파장 분할 다중화(WDM) 네트워크 최적화**:
   - 단일 광섬유 채널 내에 중심 파장 간격($\Delta\lambda \ge 3\sim 5\ \text{nm}$)을 배열하여 1가닥의 케이블로 수십 개 지점의 변형률을 동시 복조하는 아키텍처를 제시.
4. **글로벌 토목·항공·철도 인프라 FBG 실증 데이터베이스 총괄**:
   - 캐나다 Confederation Bridge, 스위스 Luzzone Dam, 보잉 항공기 스마트 윙 복합재의 10년 이상 장기 무고장 계측 실적을 체계적으로 수록.

## Methods

- **광학 및 역학 이론 분석 (Sections 2~4 & Figs. 1~8)**:
  - FBG 파장 변조: $\Delta\lambda_B = \lambda_B \left[ (1 - P_e)\varepsilon + (\alpha + \xi)\Delta T \right] = K_{\varepsilon}\varepsilon + K_T\Delta T$.
  - 2원 연립 방정식 복조: $\begin{bmatrix} \Delta\lambda_{B1} \\ \Delta\lambda_{B2} \end{bmatrix} = \begin{bmatrix} K_{\varepsilon 1} & K_{T1} \\ K_{\varepsilon 2} & K_{T2} \end{bmatrix} \begin{bmatrix} \varepsilon \\ \Delta T \end{bmatrix}$.
  - 변형률 전달 계수: $k = 1 - \frac{\cosh(\Gamma x)}{\cosh(\Gamma L/2)}$, 여기서 $\Gamma$는 계면 강성 파라미터.
- **인터로게이션 및 적용 데이터베이스 (Sections 5~7 & Tables 1~4 & Figs. 9~15)**:
  - 복조 기술: 파장 가변 레이저(TSL), 매칭 격자 필터(Matching FBG), 어레이 도파로 회절격자(AWG), CCD 분광기.

## Results

### 1. 주요 FBG 온도 보상 기법별 작동 방식, 변형률/온도 분해능, 복잡성 및 적용성 비교표 (Section 3 & Tables 1~2 & Figs. 16~20)

| FBG 온도 보상 스키마 | 작동 원리 및 센서 구성 | 변형률 측정 분해능 ($\Delta\varepsilon$) | 온도 측정 분해능 ($\Delta T$) | 복조 시스템 복잡도 | 실구조물 현장 적용 적합성 |
|---|---|---|---|---|---|
| **독립 참조 더미 FBG (Reference FBG)**| **무응력 튜브 내 더미 격자 인접 배치** | **$\pm 1.0\ \mu\varepsilon$ (초고정밀)** | **$\pm 0.1\ ^\circ\text{C}$** | **낮음 (가장 단순/직관적)** | **토목 교량/콘크리트 최고 적합** |
| **동일 광섬유 2중 파장 격자 (Dual FBG)**| 파장대가 다른 2개 FBG 근접 기록 | $\pm 5.0\ \mu\varepsilon$ | $\pm 0.5\ ^\circ\text{C}$ | 중간 | 복합재 패널 매립 우수 |
| **복굴절 편광 격자 (Hi-Bi FBG)** | 편광 축별 파장 분리 ($x, y$ 편광) | $\pm 2.0\ \mu\varepsilon$ | $\pm 0.2\ ^\circ\text{C}$ | 높음 (편광 제어 필요) | 항공 우주 스마트 스킨 |
| **기계식 바이메탈 슬리브 (Bimetal)** | 열팽창 반대 금속 하우징 상쇄 | $\pm 10.0\ \mu\varepsilon$ | - (수동 상쇄) | 낮음 | 단순 정적 변형률 전용 |

### 2. 매립 계면 전단 지연 및 장기 피로 수명 해석
- **게이지 길이($L$)에 따른 전달률 수렴**: 접착 게이지 길이가 $15\ \text{mm}$ 이상 확보될 때 중심부 변형률 전달률이 $k \ge 0.98$로 수렴하여 모재의 변형을 왜곡 없이 $100\%$ 측정.
- **$10^7$회 고사이클 동적 피로 내구성**: $1000\ \mu\varepsilon$ 진폭의 천만 회 반복 하중 하에서도 FBG 격자의 반사율 및 브래그 파장의 열화가 전혀 발생하지 않음을 입증.

- **종합 결론**: 본 논문은 Majumder 박사 연구팀이 FBG 센서의 물리 광학 원리, 6대 온도 보상 기법, 매립 계면 변형률 전달 역학 및 전 세계 대형 인프라 SHM 적용을 집대성하여 스마트 구조물 및 광학 센싱 공학 분야의 최고 수준 랜드마크 원전 총설 논문임.

## Related Notes

- [[maaskant-1997-fiber-optic-bragg-grating-sensors-bridge-monitoring]] — Measures & Rizkalla: 세계 최초 실교량 FBG 실증 불후의 고전.
- [[lopez-higuera-2011-fiber-optic-sensors-structural-health-monitoring-review]] — López-Higuera: 광섬유 센서 SHM 총설 불후의 고전.
- [[li-2004-fiber-optic-sensors-health-monitoring-civil-engineering]] — Hong-Nan Li: 토목 광섬유 센서 총설.
- [[concrete-durability-and-service-life]] — 구조물 스마트 유지관리 및 SHM 체계.
