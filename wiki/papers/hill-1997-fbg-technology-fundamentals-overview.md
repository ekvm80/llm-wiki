---
title: "Fiber Bragg Grating Technology Fundamentals and Overview"
type: source_note
source: "sources/hill-1997-fiber-bragg-grating-technology-fundamentals.pdf"
citation: "Hill, K. O., & Meltz, G. (1997). Fiber Bragg Grating Technology Fundamentals and Overview. Journal of Lightwave Technology, 15(8), 1263-1276."
date: 2026-08-23
tags: [fiber-bragg-grating, fbg, photosensitivity, phase-mask, coupled-mode-theory, optical-fiber-sensors, structural-health-monitoring, wdm-filter, ieee-invited, theory-foundation]
---

# 광섬유 브래그 격자(FBG) 기술의 기본 원리, 감광성 메커니즘, 위상 마스크 제작 공정 및 스마트 구조 센서 응용 총설

## Summary

광섬유 코어 내부에 자외선(UV) 간섭 레이저를 조사하여 영구적인 주기적 굴절률 변조(Periodic Index Perturbation, $\Delta n \sim 10^{-5}\sim 10^{-3}$)를 형성하는 **광섬유 브래그 격자(FBG: Fiber Bragg Grating)** 기술의 발견 역사(1978년 Hill et al. 최초 발견 및 1989년 Meltz et al. 측면 노광법), 게르마늄 도핑 석영 유리($\text{Ge-SiO}_2$)의 감광성(Photosensitivity) 물리 메커니즘($\text{GeE}'$ 점결함 및 유리 치밀화), 위상 마스크(Phase Mask) 양산 제작 공정, 모드 결합 이론(Coupled-Mode Theory), 그리고 **광통신 파장분할다중화(WDM) 필터 및 토목·항공 구조물 건전성 모니터링(SHM) 변형률·온도 광센서의 작동 원리**를 총망라하여 집대성한 FBG 창시자 Kenneth O. Hill(캐나다 통신연구센터 CRC) 박사 및 Gerald Meltz(IEEE Fellow) 박사의 세계 최고 권위 불후의 랜드마크 원전 초청 총설 논문. 본 논문은 브래그 공진 반사 파장 공식($\lambda_B = 2 n_{eff} \Lambda$)과 변형률-온도 광탄성 결합 방정식($\Delta \lambda_B / \lambda_B = (1 - p_e)\varepsilon + (\alpha_\Lambda + \xi)\Delta T$)을 수학적으로 완벽히 정립하였으며, 1550 nm 파장 대역에서 **변형률 감도 $1.2\ \text{pm}/\mu\varepsilon$** 및 **온도 감도 $10\sim 13\ \text{pm}/^\circ\text{C}$**를 발현하는 내재적 절대 파장 인코딩(Wavelength-encoded) 센서의 이론적 토대를 확립하였다.

## Key Contributions

1. **FBG 발명자(Hill & Meltz)에 의한 브래그 격자 물리·공학 이론의 집대성**:
   - 1978년 Hill의 정재파 내부 기록법과 1989년 Meltz의 횡방향 UV 간섭계 및 1993년 제로차수 억제 위상 마스크(Phase Mask) 기술의 원리와 발전을 완벽히 정리.
2. **브래그 공진 반사 조건 및 모드 결합 이론(Coupled Mode Theory) 정립**:
   - $\lambda_B = 2 n_{eff} \Lambda$ 공진 조건 하에서 전진 도파 모드가 후진 반사 모드로 100 % 에너지 결합(Reflectivity $R = \tanh^2(\kappa L) \approx 100\%$)을 일으키는 정밀 수치 해석 모델을 수립.
3. **스마트 구조물 SHM 변형률·온도 광센서의 결합 방정식 유도**:
   - 광탄성 텐서(Photoelastic tensor, $p_e \approx 0.22$) 및 열광학 계수($\xi$)를 결합하여 전자기 간섭(EMI)이 전혀 없는 초고감도 내재적 광섬유 센서의 응답 특성을 엄밀히 규명.
4. **파장 다중화(Wavelength-Division Multiplexing: WDM) 어레이 기술 제시**:
   - 단 한 가닥의 광섬유 케이블에 서로 다른 반사 파장($\lambda_{B1}, \lambda_{B2}, \dots$)을 갖는 수십 개의 FBG 센서를 직렬 연속 배치하여 대형 구조물의 준분포형(Quasi-distributed) 실시간 계측을 가능케 함.

## Methods

- **FBG 기본 광학 방정식 (Section V, Eq. 1~8)**:
  1. 브래그 파장 공진 조건:
     $$\lambda_B = 2 n_{eff} \Lambda$$
     - $n_{eff}$: 광섬유 코어의 유효 굴절률 ($\approx 1.45$).
     - $\Lambda$: 브래그 격자 피치 주기 ($\approx 0.53\ \mu\text{m}$ for 1550 nm).
  2. 변형률($\varepsilon$) 및 온도($\Delta T$)에 대한 파장 시프트 방정식:
     $$\frac{\Delta \lambda_B}{\lambda_B} = \left( 1 - p_e \right) \varepsilon + \left( \alpha_\Lambda + \xi \right) \Delta T$$
     - 유효 광탄성 계수: $p_e = \frac{n_{eff}^2}{2} [p_{12} - \nu(p_{11} + p_{12})] \approx 0.22$.
     - 실리카 열팽창계수: $\alpha_\Lambda = \frac{1}{\Lambda}\frac{\partial \Lambda}{\partial T} \approx 0.5 \times 10^{-6}\ \text{K}^{-1}$.
     - 실리카 열광학계수: $\xi = \frac{1}{n_{eff}}\frac{\partial n_{eff}}{\partial T} \approx 8.6 \times 10^{-6}\ \text{K}^{-1}$.
  3. 반사율(Reflectivity) 및 결합 계수($\kappa$):
     $$R = \tanh^2(\kappa L), \quad \kappa = \frac{\pi \Delta n \cdot \eta}{\lambda_B}$$
     - $L$: 격자 길이, $\Delta n$: 유도 굴절률 변조 진폭, $\eta$: 모드 중첩 적분비.
- **제작 공정 기술 (Sections II~IV)**:
  - 위상 마스크법 (Phase Mask Technique): $\pm 1$차 회절광 간섭 ($\Lambda = \Lambda_{mask}/2$, 0차 회절 투과율 < 5 % 억제).
  - 감광성 증대 수소 처리(Hydrogen Loading): 고압 $\text{H}_2$ 100 bar, $100\ ^\circ\text{C}$ 처리로 $\Delta n > 10^{-2}$ 극대화.

## Results

### 1. FBG 센서 파장 대역별 변형률·온도 감도 및 광학 파라미터 (Table 1~3 & Fig. 1~5)

| 중심 파장 ($\lambda_B$) | 격자 주기 ($\Lambda$) | 유효 굴절률 ($n_{eff}$) | 변형률 감도 ($K_\varepsilon$) | 온도 감도 ($K_T$) | 대역폭 ($\Delta \lambda_{FWHM}$) | 최대 반사율 ($R_{max}$) |
|---|---|---|---|---|---|---|
| **830 nm 대역** | $0.286\ \mu\text{m}$ | 1.450 | **$0.65\ \text{pm}/\mu\varepsilon$** | **$6.8\ \text{pm}/^\circ\text{C}$** | 0.1~0.2 nm | > 99.9 % |
| **1310 nm 대역** | $0.452\ \mu\text{m}$ | 1.448 | **$1.02\ \text{pm}/\mu\varepsilon$** | **$10.5\ \text{pm}/^\circ\text{C}$** | 0.1~0.3 nm | > 99.9 % |
| **1550 nm 대역 (표준)**| **$0.534\ \mu\text{m}$** | **1.447** | **$1.21\ \text{pm}/\mu\varepsilon$** | **$13.2\ \text{pm}/^\circ\text{C}$** | **0.2~0.5 nm** | **> 99.99 %** |

### 2. 센싱 메커니즘 및 구조 건전성 모니터링(SHM) 시사점
- **절대 파장 인코딩의 무보정성**: 광도(Intensity) 감쇠나 광원 요동에 영향을 받지 않고 반사 스펙트럼의 피크 파장만 측정하므로, 장기 매설 시 영점 드리프트가 없어 영구적 신뢰성 보장.
- **다중 센싱 배열(Multiplexing)**: 단일 광섬유에 20~50개의 상이한 파장 FBG를 직렬 배치하여 교량, 터널, 항공기 날개의 다점 변형률 분포를 동시 측정.

- **종합 결론**: Kenneth Hill과 Gerald Meltz의 본 논문은 FBG 기술의 탄생, 감광성 물리학, 위상 마스크 제조 및 스마트 구조물 SHM 광센서 이론을 집대성하여 전 세계 광섬유 센서 공학의 표준 교과서가 된 기념비적 불후의 명저 원전 논문임.

## Related Notes

- [[di-2014-fbg-sensor-embedded-strain-monitoring]] — 콘크리트 매설 FBG 스마트 센서 변형률 모니터링 원전.
- [[gusarov-2008-fbg-fiber-coating-radiation-sensitivity]] — FBG 고분자 코팅 방사선 감도 및 광탄성 파장 드리프트 원전.
- [[udd-1996-fiber-optic-smart-structures]] — 광섬유 스마트 구조물 및 다중화 총설.
- [[structural-repair-and-retrofitting]] — 노후 인프라 건전성 진단 및 모니터링 체계.
