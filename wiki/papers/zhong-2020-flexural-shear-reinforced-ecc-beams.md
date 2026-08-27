---
title: "Flexural and Shear Performance of Reinforced ECC Beams (Zhong et al., 2020)"
type: source_note
source: "sources/zhong-2020-flexural-and-shear-performance-of.pdf"
citation: "Zhong, H., Zhang, J., & Li, V. C. (2020). Flexural and shear performance of reinforced engineered cementitious composite (R/ECC) beams under combined loading. Engineering Structures, 222, 111120. https://doi.org/10.1016/j.engstruct.2020.111120"
date: 2026-08-24
tags:
  - reinforced-ecc
  - flexural-behavior
  - shear-performance
  - combined-loading
  - stirrup-free
  - shear-span-ratio
---

## Summary
전단 경간비($a/d = 1.5, 2.5, 3.5$)와 전단 보강근(스터럽 Stirrups) 유무가 고연성 복합체 보강 보(R/ECC Beams, $150 \times 250 \times 2000 mm$)의 전단/휨 파괴 모드 전환, 전단 내력, 균열 분산 및 처짐 연성에 미치는 영향을 실험 및 트러스-아치 통합 역학 모델로 칭화대학교 장준(J. Zhang) 교수와 미시간 대학교 빅터 리(Victor Li) 교수가 규명한 Engineering Structures 명저 논문이다. ECC 매트릭스의 유사 인장 항복 가교력이 대각선 전단 균열의 개구를 구속하여, **전단 스터럽을 100 % 생략한 무스터럽 R/ECC 보가 전단 철근을 배근한 보통 RC 보 대비 전단 내력을 45 % 상회**하고 전단 취성 파괴를 연성 휨 파괴로 전환함을 실증하였다.

## Key Contributions
- **무스터럽(Stirrup-Free) R/ECC 보의 전단 취성 파괴 배제 메커니즘 실증**: 인장 가교력이 전단 균열면 마찰 맞물림(Aggregate Interlocking)과 콘크리트 인장 기여분을 3배 증대.
- **전단 경간비($a/d = 1.5 \sim 3.5$)별 휨-전단 상호작용 포락선 수립**: 전단 내력 $V_u = V_c(ECC) + V_s$ 정량 산정식 확립.
- **처짐 연성 지수 $\mu_\Delta > 5.5$ 확보**: 전단 지배 구간($a/d = 1.5$)에서도 취성 파괴 없는 안정적 에너지 소산 실현.
- **원전 및 교량 기둥-보 접합부 횡방향 전단 철근 배근 50 % 이상 간소화 실현**: 시공성 및 경제성 비약적 향상.

## Methods
- 8개의 실대형 보 ($150 \times 250 \times 2000 mm$, 인장 철근 2-D19, $f_y = 450 MPa$, 전단 스터럽 유무).
- 재료: 보통 콘크리트 (NC 40 MPa) 대 PVA-ECC ($f_c = 48 MPa$, 직접 인장강도 $4.8 MPa$, $\epsilon_u = 3.8 \%$).
- 전단 경간비: $a/d = 1.5$ (깊은 보 전단 지배), $a/d = 2.5$ (휨-전단), $a/d = 3.5$ (휨 지배).
- 시험: 4점 휨 재하 시험, LVDT 처짐 계측, 전면 DIC 전단 변형률 매핑.

## Results
- 전단 경간비 및 스터럽 유무별 보 부재 내력 및 파괴 모드 비교표:

| 시험체 ID | 매트릭스 | 전단 경간비 ($a/d$) | 스터럽 배근 | 전단 균열 하중 (kN) | 극한 내력 (kN) | 파괴 모드 |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| RC-a1.5-NoStirrup | NC | 1.5 | 무배근 | 65.0 | 115.0 | 대각 인장 취성 전단 파괴 |
| RC-a1.5-Stirrup | NC | 1.5 | 표준 배근 | 85.0 | 185.0 | 휨-전단 파괴 |
| **ECC-a1.5-NoStirrup** | **PVA-ECC** | **1.5** | **무배근** | **125.0** | **268.0 (+45 %)** | **고연성 전단-휨 파괴 (무취성)** |
| **ECC-a3.5-NoStirrup** | **PVA-ECC** | **3.5** | **무배근** | **145.0** | **210.0** | **완전 연성 휨 항복 파괴** |

## Related Notes
- [[shao-2021-gradual-crushing-reinforced-hpfrcc-beams]] - HPFRCC 보 거동
- [[yassin-2024-flexural-reinforced-uhp-ecc-beams-pe-fibers]] - R/UHP-ECC 보 휨 거동
- [[high-strength-strain-hardening-composites]] - 고성능 복합 구조 설계
