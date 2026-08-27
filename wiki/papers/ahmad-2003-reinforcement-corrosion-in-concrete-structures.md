---
title: "Reinforcement corrosion in concrete structures, its monitoring and service life prediction: A review"
type: source_note
source: "sources/ahmad-2003-reinforcement-corrosion-in-concrete-structures,.pdf"
citation: "Ahmad, S. (2003). Reinforcement corrosion in concrete structures, its monitoring and service life prediction: A review. Cement and Concrete Composites, 25(4-5), 459-479."
date: 2026-08-23
tags: [reinforcement-corrosion, electrochemical-monitoring, half-cell-potential, linear-polarization-resistance, tuutti-model, service-life-prediction, chloride-threshold, review]
---

# 철근 콘크리트 구조물의 철근 부식 메커니즘, 비파괴 전기화학 모니터링 및 잔여 공용 수명 예측 모델 총설

## Summary

해양 환경 및 제설염 살포 지역에서 철근 콘크리트(RC) 구조물의 조기 파손을 유발하는 가장 지배적인 내구성 열화 현상인 철근 부식(Reinforcement Corrosion)의 전기화학적 부식 전지(Corrosion Cell) 형성 메커니즘, 양극(산화) 및 음극(환원) 반쪽 반응의 열역학적 기전력($emf$) 평형, 부식 영향 인자(임계 염화물 농도, 탄산화 pH 저하, 산소·수분 확산, 표면 균열폭), 비파괴 전기화학 계측 기술(반전지 전위, 선형분극저항 LPR, 교류 임피던스 EIS, 갈바닉 센서) 및 투티(Tuutti)의 2단계 모델(개시 기간 $t_i$ + 진전 기간 $t_p$) 기반 잔여 공용 수명(Service Life) 예측 수치 모델을 포괄적으로 집대성한 사우디 킹파드 석유광물대(KFUPM) Shamsad Ahmad 교수의 기념비적 종합 총설 논문. 본 논문은 공극수 pH 저하(12.5 $\rightarrow$ <9.0)에 의한 부동태 피막(Passive Film) 파괴 거동과 철근 단면 손실률($A_{st}$), 부착 응력 감소, 부식 생성물 팽창압에 의한 피복 박락 한계 균열폭($w_{cr} \ge 0.3\ \text{mm}$) 발생 시점을 정량 예측하는 이론적 및 실증적 수명 평가 체계를 확립하였다.

## Key Contributions

1. **철근 부식 전기화학 셀 반응 및 기전력($emf$) 열역학 지배식 정립**:
   - **양극 반응 (Anodic Oxidation)**: $\text{Fe} \rightarrow \text{Fe}^{2+} + 2e^-$, $E_A = -0.44 + 0.0296 \log [\text{Fe}^{2+}]\ \text{(V)}$.
   - **음극 반응 (Cathodic Reduction)**: $\text{O}_2 + 2\text{H}_2\text{O} + 4e^- \rightarrow 4\text{OH}^-$, $E_C = 1.229 + 0.0148 \log [\text{O}_2] - 0.0591\ \text{pH}\ \text{(V)}$.
   - **총 부식 기전력 ($e = E_C - E_A$)**:
     $$e = 1.669 + 0.0148 \log [\text{O}_2] - 0.0591\ \text{pH} - 0.0296 \log [\text{Fe}^{2+}]$$
   - 탄산화에 의한 pH 감소와 용존 산소 농도 증가가 부식 구동 전위($e$)와 부식 전류($I_{corr}$)를 지수적으로 가속함을 정량화.
2. **전기화학적 비파괴 모니터링 기법의 정밀도 및 한계 분석**:
   - **반전지 전위법 (Half-Cell Potential, ASTM C876)**: 부식 확률 평가 ($-350\ \text{mV CSE}$ 이하 시 90 % 이상 활성 부식).
   - **선형분극저항법 (LPR: Linear Polarization Resistance)**: Stern-Geary 관계식($I_{corr} = B / R_p$)을 이용한 실시간 부식 속도(Instantaneous Corrosion Rate, $\mu\text{m/year}$) 정량 측정.
   - **전기화학 임피던스 분광법 (EIS)**: 용액 저항($R_s$)과 분극 저항($R_p$), 이중층 커패시턴스($C_{dl}$)를 주파수 도메인에서 분리 해석.
3. **투티(Tuutti) 모델 기반 2단계 공용 수명($T = t_i + t_p$) 예측 수치화**:
   - **개시 기간 ($t_i$)**: Fick의 제2법칙 확산 방정식($C(x, t) = C_s [1 - \text{erf}(x / 2\sqrt{D t})]$)을 통해 임계 염화물 농도($C_{th} = 0.05\sim 0.1\ \%\ \text{by concrete wt.}$) 도달 시점 산정.
   - **진전 기간 ($t_p$)**: 부식 팽창 생성물($\text{Fe(OH)}_3, \text{Fe}_3\text{O}_4$, 체적 2~6배 팽창)이 유발하는 피복 인장응력이 콘크리트 인장강도($f_t$)를 초과하여 표면 종방향 균열($w = 0.3\ \text{mm}$) 및 피복 탈락을 유발하는 기간을 탄성-소성 후막 원통 이론(Thick-walled Cylinder Theory)으로 모델화.

## Methods

- **부식 지배 파라미터 및 임계 기준 종합**:
  - 임계 염화물 이온 농도 ($C_{th}$): 총 시멘트 중량 대비 0.15 ~ 0.40 wt.% (수용성 염화물 0.06 ~ 0.15 wt.%).
  - 부식 속도 판정 기준: $I_{corr} < 0.1\ \mu\text{A/cm}^2$ (무시할 수준/Passive), $0.1 \sim 0.5\ \mu\text{A/cm}^2$ (저~중등도), $0.5 \sim 1.0\ \mu\text{A/cm}^2$ (중등~고도), $> 1.0\ \mu\text{A/cm}^2$ (매우 위험).
- **수명 예측 모델링 기법**:
  - Fickian 확산 모델 + 환경 계수(온도 Arrhenius, 습도, 결합재 염화물 결합능력 $\alpha, \beta$).
  - Bazant 및 Weyers의 부식 생성물 팽창 한계압력 수치 모델.

## Results

### 1. 비파괴 전기화학 부식 진단 기법 비교

| 모니터링 기술 | 계측 물리량 | 평가 결과 및 출력 정보 | 장점 | 현장 적용 시 제약 요인 |
|---|---|---|---|---|
| **반전지 전위 (HCP)** | 전위차 ($V$ vs CSE) | 부식 발생 확률 (%) | 신속, 광범위 매핑 용이 | 실제 부식 속도($\mu\text{m/yr}$) 산출 불가, 함수율 영향 |
| **선형분극저항 (LPR)** | 분극 저항 ($R_p$, $\Omega$) | 순간 부식 전류 밀도 ($I_{corr}$) | 실시간 부식 속도 직접 산출 | IR 강하 보정 필요, 가드링(Guard Ring) 제어 필수 |
| **전기화학 임피던스 (EIS)**| 임피던스 스펙트럼 ($Z$) | 부식 메커니즘, 피막 저항 | 메커니즘 심층 해석 | 장비 고가, 현장 측정 시간 과다 소요 |
| **갈바닉 전류계** | 갈바닉 전류 ($I_g$) | 이종 금속/깊이별 부식 전류 | 영구 매설 연속 모니터링 | 매설 센서 위치로 한정, 국부적 데이터 |

### 2. 잔여 수명 예측 모델의 구조적 시사점
- **균열 제어의 중요성**: 표면 균열폭이 0.1 mm를 초과할 경우 염소 이온 확산 경로가 단축되어 개시 기간($t_i$)이 80 % 이상 급감함.
- **초고연성 복합체(SHCC)의 차폐 효과**: 균열폭을 50 µm 미만으로 구속하는 SHCC/ECC 피복을 적용할 경우 염화물 침투가 완전 차단되어 $t_i$가 사실상 무한대로 연장됨.

- **종합 결론**: 철근 부식은 전기화학적 전위 평형과 다공성 매질 내 물질 전달의 복합 물리 현상이며, 구조물의 100년 내구수명 확보를 위해서는 저투수성 매트릭스와 50 µm 이하의 미세 균열 제어 피복재(ECC) 적용이 가장 핵심적인 해결책임을 확립함.

## Related Notes

- [[chen-2018-ultra-high-ductility-cement-composite-curving]] — 25 % 부식 손실 철근 보의 SHCC 휨 보수 원전.
- [[crack-width-control]] — 염해 부식 방지를 위한 50 µm 미세 균열폭 제어 기준.
- [[structural-repair-and-retrofitting]] — 노후 부식 구조물의 단면 수복 및 보강 메커니즘.
- [[choi-2017-carbonation-detection-image-processing]] — 탄산화 깊이 측정 (이방연 그룹).
- [[sustainability-low-carbon-binders]] — 저탄소 혼합 시멘트의 염화물 고정 및 내부식성.
