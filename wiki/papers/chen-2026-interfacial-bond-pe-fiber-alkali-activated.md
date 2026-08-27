---
title: "To achieve high tensile strain capacity in cementitious composites"
type: source_note
source: "sources/chen-2026-to-achieve-high-tensile-strain.pdf"
citation: "Chen, J., Basang, Z., Wang, R., Dai, N., Jiang, F., Wang, F., Xiao, J., Yu, K., & Yu, J. (2026). To achieve high tensile strain capacity in cementitious composites. Composites Part B: Engineering, 112000."
date: 2026-08-23
tags: [tensile-strain-capacity, ultra-high-ductility, debonding-and-pullout, debonding-and-rupture, fiber-bridging, statistical-dispersion, kequan-yu, theory-foundation]
---

# 시멘트계 복합체에서 6 % 이상 초고인장 연신율 구현을 위한 미시역학 조건 및 통계역학적 해석

## Summary

대다수의 섬유보강 시멘트 복합체(FRC/ECC)가 2~4 % 수준의 인장 연신율에 머물고 극소수의 배합만이 **6 % 이상의 초고인장 변형률 능력(Ultra-High Tensile Strain Capacity)**을 발현하는 물리적·통계적 메커니즘을 규명하기 위해, 11종의 대표적인 상용 단섬유(강섬유, 탄소섬유, 유리섬유, 아라미드, PBO, PVA, PP, UHMWPE 등)의 계면 부착-인발 메커니즘을 단일 섬유 단위에서부터 다중균열 통계역학 모델로 종합 정립한 동제대(Tongji Univ) Kequan Yu 및 Jiangtao Yu 연구팀의 최신 기념비적 이론 논문. 연구진은 섬유의 거동을 섬유 인발 슬립 지배형(DP: Debonding & Pullout)과 섬유 파단 지배형(DR: Debonding & Rupture)으로 수학적으로 엄밀히 이원화하고, DR 섬유는 유효 탈착 길이 $L_f$ 내의 자체 탄소성 신율에 갇혀 2 % 이상의 연신율 발현이 수학적으로 불가능함을 증명하였다. 반면 UHMWPE와 같은 DP 섬유는 전체 매립 길이에 걸친 마찰 슬립 변위가 균열 개구(CMOD)를 제공하고, 미세 섬유 직경($d_f \le 20\ \mu\text{m}$)에 따른 단위 면적당 가교 개수 밀도($N_f \propto 1/d_f^2$) 증가가 균열면 간 가교력의 통계적 변동 계수(COV)를 획기적으로 낮춤으로써 비로소 **6~12 %**의 극한 변형경화 연신율이 실현됨을 정량적으로 증명하였다.

## Key Contributions

1. **단일 섬유 파괴 메커니즘 2대 분류 (DP vs DR) 및 수학적 연신율 상한선 증명**:
   - **DP형 (Debonding & Pullout: UHMWPE, PP)**: 섬유 파단 없이 전체 매립 길이 $L_f$에 걸친 마찰 인발 슬립으로 균열 개구 변위(CMOD)를 공급 $\rightarrow$ 포화 다중균열 발생 시 **6~12 %** 초고연신율 구현 가능.
   - **DR형 (Debonding & Rupture: Steel, Carbon, Glass, Aramid, PBO)**: 강한 계면 부착으로 섬유 파단 발생 $\rightarrow$ 유효 탈착 구간($L_f = R_u^f d_f / 4\tau$) 내 자체 신율만 기여하므로 이론적 연신율 상한선이 **<2.0 %**로 엄격히 제한됨.
   - **Hybrid형 (PVA)**: 강한 화학 부착으로 일부 파단 + 일부 인발 $\rightarrow$ 통상 2.0~4.5 % 연신율 발현.
2. **섬유 직경($d_f$)과 다중균열 가교력 통계 분산(Statistical Dispersion)의 수학적 상관식 정립**:
   - 동일 체적 혼입률($V_f = 2.0\ \%$)에서 섬유 직경이 $40\ \mu\text{m} \rightarrow 15\ \mu\text{m}$로 감소하면 단위 면적당 가교 섬유 수 $N_f$가 7.1배 증가.
   - 가교력의 공간적 변동 계수(COV)가 $1/\sqrt{N_f}$에 비례하여 급감함으로써, 약한 단면의 조기 파괴 국부화를 원천 차단하고 100 % 포화 다중균열을 유도.
3. **초고연성(>6 %) 실현을 위한 PSH 2대 기준의 정량적 임계 마진 확립**:
   - 강도 조건: $\sigma_0/\sigma_{fc} \ge 2.0$ (최대 가교응력/초기 균열강도).
   - 에너지 조건: $J'_b/J_{tip} \ge 3.0\sim 5.0$ (가교 상보에너지/기지 파괴에너지).

## Methods

- **11종 섬유 미시역학 파라미터 데이터베이스 분석 (Table 2)**:
  - 섬유 종류: Microsteel, Hooked steel, Carbon, Basalt, Glass, POM, Aramid, PBO, PVA, PP, UHMWPE.
  - 파라미터: 공칭 직경($d_f$), 인장강도($R_u^f$), 탄성계수($E_f$), 파단 신율($\varepsilon_u^f$), 계면 전단강도($\tau$), 유효 탈착 길이($L_f$).
- **통계역학적 다중균열 수치 시뮬레이션 모델**:
  - 바이리니어(Bi-linear) 및 슬립 연화 단일 섬유 인발 구성식.
  - 섬유 매립 길이, 경사각(Snubbing effect), 직경 편차를 반영한 가우스/와이블(Weibull) 확률 분포 함수 결합.
  - 몬테카를로(Monte Carlo) 기반 다중 단면 가교력 적분 및 복합체 인장 응력-변형률 응답 해석.

## Results

### 1. 섬유 종류별 미시역학 파라미터 및 인장 연신율 상한선 비교 (Table 2)

| 섬유 종류 | 직경 ($d_f$, µm) | 인장강도 (MPa) | 탄성계수 (GPa) | 파단신율 (%) | 계면강도 ($\tau$, MPa) | 파괴 모드 | 복합체 인장연신율 실측/한계 |
|---|---|---|---|---|---|---|---|
| **Microsteel** | 200 | 2500 | 200 | 2.5 % | 4.0 | DR | 0.3 ~ 0.8 % |
| **Carbon** | 7 | 4000 | 230 | 1.7 % | 2.5 | DR | 0.1 ~ 0.5 % |
| **Basalt** | 13 | 2500 | 85 | 2.8 % | 1.8 | DR | 0.2 ~ 0.6 % |
| **Aramid** | 12 | 3400 | 73 | 4.6 % | 3.8 | DR | 0.8 ~ 1.6 % |
| **PBO** | 13 | 5800 | 180 | 3.5 % | 4.4 | DR | 1.0 ~ 1.8 % |
| **PVA (REC15)** | 40 | 1600 | 40 | 6.0 % | 2.5 | Hybrid | 2.0 ~ 4.5 % |
| **PP** | 20 | 600 | 6 | 15.0 % | 1.0 | DP | 2.0 ~ 5.0 % |
| **UHMWPE** | **15 ~ 25** | **2800 ~ 3200** | **88 ~ 120** | **3.0 %** | **1.5 ~ 2.5** | **DP** | **6.0 ~ 12.0 % (초고연성 달성)** |

### 2. 가교 섬유 직경과 통계적 다중균열 포화도 상관관계
- 직경 $40\ \mu\text{m}$ PVA 섬유: $V_f = 2\ \%$에서 단면당 섬유 수 약 1,600개/$cm^2$, 가교력 COV 약 8~12 %, 연신율 3~4 %에서 조기 파단 국부화.
- 직경 $16\ \mu\text{m}$ PE 섬유: $V_f = 2\ \%$에서 단면당 섬유 수 약 **10,000개/$cm^2$**, 가교력 COV **3 % 이하**로 급감 $\rightarrow$ 80개 이상의 극한 포화 다중균열 유도 및 7~10 % 초고연신율 구현.

- **종합 결론**: 6 % 이상의 극한 인장 연신율을 구현하기 위해서는 (1) 계면 파단이 없는 완전 마찰 슬립형 고강도 섬유(UHMWPE) 선택, (2) 직경 20 µm 이하의 미세 직경 설계를 통한 높은 가교 개수 밀도 확보, (3) $\sigma_0/\sigma_{fc} \ge 2.0$의 PSH 강도 여유 확보가 필수적임을 수학적·미시역학적으로 확립함.

## Related Notes

- [[pseudo-strain-hardening-criteria]] — PSH 정상상태 균열 및 에너지 조건 원전 (Victor Li).
- [[choi-2016-ultra-high-ductile-aas-pe-composite]] — 7.50 % 초고연성 AAS-PE 복합체 실증 (이방연 그룹).
- [[choi-2020-high-ductility-high-strength-pe-composite]] — 7.90 % 초고연성 80 MPa UHDCC 실증 (이방연 그룹).
- [[strain-hardening-mechanism]] — PSH 강도 및 에너지 기준의 미시역학 이론 체계.
- [[multiple-cracking-behavior]] — 균열 개구(CMOD) 합산과 포화 다중균열 메커니즘.
