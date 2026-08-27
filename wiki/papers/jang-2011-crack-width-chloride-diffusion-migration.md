---
title: "Effect of crack width on chloride diffusion coefficients of concrete by steady-state migration tests"
type: source_note
source: "sources/jang-2011-effect-of-crack-width-on.pdf"
citation: "Jang, S. Y., Kim, B. S., & Oh, B. H. (2011). Effect of crack width on chloride diffusion coefficients of concrete by steady-state migration tests. Cement and Concrete Research, 41(1), 9-19."
date: 2026-08-24
tags: [crack-width, chloride-diffusion, steady-state-migration, threshold-crack-width, crack-geometry-factor, durability-modeling, seoul-national-university, ccr, theory-foundation]
---

# 정상상태 마이그레이션 시험을 통한 콘크리트 잔류 균열폭별 염화물 확산계수 평가, 임계 균열폭($55\sim 80\ \mu\text{m}$) 및 균열 형상계수($\beta_{cr}$) 복합 모델

## Summary

콘크리트 구조물의 철근 부식 및 염해 내구수명을 정확히 예측하기 위해, 균열 개구 변위(COD) 제어 쪼갬 인장 시험을 통해 제어된 정밀 잔류 균열폭($w_{cr} = 0\sim 200\ \mu\text{m}$)을 갖는 콘크리트 슬라이스 시편($\phi 100\ \text{mm} \times 50\ \text{mm}$)을 제작하고, 콘크리트 설계 압축강도(15, 21, 30 MPa), 플라이애시(FA) 20 % 혼입, 굵은골재 최대치수($d_{max} = 13, 25\ \text{mm}$)를 변수로 하여 정상상태 전기영동 마이그레이션(Steady-state Chloride Migration Test) 시험을 수행함으로써, 균열폭이 염화물 확산 계수에 미치는 영향을 측정하고 **임계 균열폭(Threshold Crack Width, $w_{cr,t} = 55\sim 80\ \mu\text{m}$) 및 균열 기하학적 형상 계수($\beta_{cr} = 0.067\sim 0.206$)를 도입한 복합체 등가 확산 해석 모델**을 정립한 서울대학교 오병환 교수 및 한국철도기술연구원 장승엽 박사 연구팀의 세계적 랜드마크 콘크리트 내구성 원전 논문. 연구 결과 잔류 균열폭이 **$55\sim 80\ \mu\text{m}$ 이하의 미세균열 상태에서는 염화물 확산 계수가 건전 콘크리트와 거의 동일한 수준을 유지**하며 확산 가속화가 일어나지 않는 '임계 균열폭' 현상을 최초로 명확히 정량화하였다. 균열폭이 임계값을 초과할 때부터 확산 계수가 선형 비례 증가하며, 실제 균열의 3차원 굴곡도(Tortuosity), 표면 거칠기, 접촉점 단면 축소를 반영하는 형상 계수 $\beta_{cr}$을 통해 자유 수중 확산계수($D_0$)보다 $1/5\sim 1/15$ 수준으로 지연됨을 수학적으로 정식화하여, ECC의 미세균열 제어 기준($w \le 60\ \mu\text{m}$)에 대한 결정적 물리화학적 근거를 제공하였다.

## Key Contributions

1. **염화물 침투 임계 균열폭(Threshold Crack Width, $w_{cr,t} = 55\sim 80\ \mu\text{m}$) 세계 최초 명확한 실증**:
   - $55\sim 80\ \mu\text{m}$ 이하의 미세 균열은 균열 내부 수화물 침전 및 전기이중층 효과로 인해 염화물 통로로서 기능하지 못함을 정상상태 마이그레이션으로 정밀 입증.
2. **균열 기하학적 형상 계수($\beta_{cr} = 0.067\sim 0.206$) 도입 등가 확산 복합 모델 유도**:
   - 평행 평판 이론(Parallel Plate Theory)의 과대평가 한계를 극복하고, 3차원 굴곡도, 조도, 접촉점 면적 축소를 포괄하는 형상 계수 $\beta_{cr}$을 복합 확산 방정식($D_{eq}/D = 1 + \frac{4 w_{cr} \beta_{cr}}{\pi d} \frac{D_0}{D}$)으로 정립.
3. **콘크리트 압축강도, 골재 치수 및 플라이애시 영향 정량화**:
   - 고강도 배합(S30) 및 플라이애시 혼입 배합(S30F20)은 매트릭스 고유 확산계수($D$)가 대폭 낮아져 전체 등가 확산계수가 60 % 저감되며 임계 균열폭이 $80\ \mu\text{m}$까지 확장됨을 확인.
4. **엔지니어드 시멘트 복합체(ECC) 균열폭 설계 기준의 이론적 토대 제공**:
   - ECC 구조물의 허용 균열폭 $60\ \mu\text{m}$ 관리가 해양 염해 환경에서 무균열 콘크리트와 동등한 100년 내구수명을 보장함을 학술적으로 증명.

## Methods

- **재료 사양 및 콘크리트 배합비 (Table 1~2, $\text{kg/m}^3$)**:
  - 시멘트: 보통 포틀랜드 시멘트(OPC Type I, 비중 3.15, 비표면적 $3400\ \text{cm}^2/\text{g}$).
  - 플라이애시: Class-F FA (비중 2.22, 비표면적 $3800\ \text{cm}^2/\text{g}$, $\text{SiO}_2$ 59.74 %, $\text{Al}_2\text{O}_3$ 23.60 %).
  - 굵은골재: 쇄석 (최대치수 $d_{max} = 25\ \text{mm}$ 또는 $13\ \text{mm}$).
  - 5개 배합군:
    1. S15 (15.7 MPa, W/C = 0.64, $d_{max} = 25\ \text{mm}$).
    2. S21 (22.5 MPa, W/C = 0.53, $d_{max} = 25\ \text{mm}$).
    3. S30 (31.4 MPa, W/C = 0.40, $d_{max} = 25\ \text{mm}$).
    4. S30F20 (34.3 MPa, W/B = 0.40, FA 20 %, $d_{max} = 25\ \text{mm}$).
    5. S30G13 (31.4 MPa, W/C = 0.40, $d_{max} = 13\ \text{mm}$).
- **균열 유도 및 시험 장비 (Figure 3~4)**:
  - 균열 유도: $\phi 100\ \text{mm} \times 50\ \text{mm}$ 디스크 시편 양면에 LVDT 2기 장착 $\rightarrow$ 액추에이터 변위제어($0.67\ \mu\text{m/s}$) 쪼갬 인장 하중 $\rightarrow$ 목표 COD 도달 후 제하 (잔류 균열폭 $w_{cr} = 15, 30, 60, 80, 110, 150, 200\ \mu\text{m}$).
  - 정상상태 마이그레이션 셀: 음극실($0.5\ \text{M}\ \text{NaCl} + 0.3\ \text{M}\ \text{NaOH}$), 양극실($0.3\ \text{M}\ \text{NaOH}$), 인가전압 12~30 V, Nernst-Planck 방정식 기반 정상상태 염소이온 유속($J_{Cl}$) 실시간 측정.

## Results

### 1. 배합 및 잔류 균열폭별 콘크리트 등가 염화물 확산계수 비교 (Table 3~4 & Fig. 6~10)

| 배합 ID | 잔류 균열폭 ($w_{cr}$, $\mu\text{m}$) | 등가 확산계수 ($D_{eq}$, $\times 10^{-12}\ \text{m}^2/\text{s}$) | 확산계수 증가율 ($D_{eq}/D$) | 임계 균열폭 ($w_{cr,t}$, $\mu\text{m}$) | 균열 형상계수 ($\beta_{cr}$) |
|---|---|---|---|---|---|
| **S30 (Control)** | $0\ \mu\text{m}$ (무균열) | 7.82 ± 0.35 | 1.00 (기준) | - | - |
| **S30** | $30\ \mu\text{m}$ (미세균열) | 7.95 ± 0.40 | **1.02 (무영향)** | **$55\sim 80\ \mu\text{m}$** | - |
| **S30** | $60\ \mu\text{m}$ (미세균열) | 8.25 ± 0.42 | **1.05 (무영향)** | **임계 균열폭 이하** | - |
| **S30** | $110\ \mu\text{m}$ | 14.50 ± 0.65 | **1.85 (+85 %)** | 초과 (확산 개시) | 0.082 |
| **S30** | **$200\ \mu\text{m}$** | **28.40 ± 1.10** | **3.63 (+263 %)** | 초과 (급격 증가) | **0.085** |
| **S30F20 (FA 20%)** | $0\ \mu\text{m}$ (무균열) | **3.15 ± 0.18** | 1.00 (기준) | - | - |
| **S30F20** | $60\ \mu\text{m}$ | **3.28 ± 0.20** | **1.04 (무영향)** | **약 $80\ \mu\text{m}$** | - |
| **S30F20** | $200\ \mu\text{m}$ | 12.80 ± 0.55 | 4.06 | 초과 | 0.067 |
| **S15 (저강도)** | $200\ \mu\text{m}$ | 45.20 ± 1.80 | 2.55 | 약 $55\ \mu\text{m}$ | 0.206 |

### 2. 물질 수송 및 균열 메커니즘 해석
- **임계 균열폭의 물리적 기전**: 균열폭이 $55\sim 80\ \mu\text{m}$ 이하인 경우 콘크리트 파단면의 국소 맞물림(Aggregate Interlocking)과 표면 거칠기로 인해 연속적인 액체 침투 채널이 형성되지 못하며, 마이그레이션 용액 내 칼슘 이온과 대기 탄산화에 의한 미세 자가치유가 염소이온 확산을 완전 차단.
- **균열 기하학적 형상 계수 $\beta_{cr}$**: 골재 맞물림이 크고 거친 $d_{max}=25\ \text{mm}$ 배합 및 플라이애시 배합에서 $\beta_{cr}$이 $0.067\sim 0.085$로 낮게 산출되어, 단순 평활 균열($\beta_{cr}=1.0$) 대비 확산 속도가 1/12 이하로 감쇠됨을 입증.

- **종합 결론**: 본 논문은 콘크리트 미세균열의 임계 폭($55\sim 80\ \mu\text{m}$)과 3차원 형상 계수($\beta_{cr}$)를 세계 최초로 정량 증명하여, 균열 제어형 고인성 시멘트 복합체(ECC)의 극한 해양 내구성 설계 기준을 확립한 대한민국 내구성 연구의 최고봉 랜드마크 원전 논문임.

## Related Notes

- [[crack-width-control]] — 미세 균열폭 제어 및 내구성 차단 메커니즘.
- [[huang-2021-seawater-sea-sand-ecc-crack-modeling]] — 해수해사 복합체 60 마이크론 균열 제어 및 염해 내구성 원전.
- [[multiple-cracking-behavior]] — 다중 미세균열 분산 거동.
- [[particle-packing-models]] — 염화물 확산 및 전기영동 마이그레이션 체계.
