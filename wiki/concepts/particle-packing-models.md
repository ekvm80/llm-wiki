---
title: "Particle Packing Models in High Performance Concrete and ECC"
type: concept
date: 2026-08-23
tags: [particle-packing, compressible-packing-model, cpm, modified-andreasen-andersen, packing-density, rheology, uhpc, concept]
source: internal
---


# 시멘트계 복합체의 입자 충전 모델 (Particle Packing Models: CPM & Modified A&A)

## 1. 개요 및 이론적 배경

고성능 콘크리트(HPC), 초고성능 콘크리트(UHPC) 및 초고연성 시멘트 복합체(ECC/UHDCC)에서 매트릭스의 유동성, 압축강도, 탄성계수 및 내구성을 극대화하기 위한 핵심 물리적 원리는 **입자 최밀 충전(Particle Packing)**이다. 시멘트, 실리카퓸, 슬래그, 플라이애시, 석회석 필러 및 마이크로 규사 등의 미립자를 기하학적으로 최적 조합하여 입자 간 공극 체적(Void Ratio)을 최소화하면, 고갈수(W/B 0.15~0.25) 조건에서도 공극을 채우고 남은 잉여수(Excess Water)가 입자 표면 윤활층(Water Film Thickness, WFT)을 형성하여 고유동성과 고밀실 수화 구조를 동시에 달성할 수 있다.

## 2. 대표적 입자 충전 이론 모델

### (1) 수정 Andreasen & Andersen (Modified A&A) 연속 충전 모델
연속 입도 분포(Continuous Particle Size Distribution)를 최적화하는 통계역학 모델:
$$P(d) = \frac{d^q - d_{min}^q}{d_{max}^q - d_{min}^q}$$
- $P(d)$: 입경 $d$ 이하의 누적 통과 백분율.
- $d_{max}, d_{min}$: 시스템 내 최대 및 최소 입경 ($0.1\ \mu\text{m} \sim 2.0\ \text{mm}$).
- $q$: 분포 계수 (Distribution Modulus).
  - $q = 0.22 \sim 0.25$: 미립자(Silica Fume, Filler) 함량이 높은 자기충전형 UHPC/ECC에 최적.
  - $q = 0.30 \sim 0.37$: 일반 구조용 고강도 콘크리트에 적합.

### (2) de Larrard의 압축충전모델 (Compressible Packing Model, CPM)
이산 입도 군(Discrete Particle Fractions) 간의 기하학적 상호작용과 시공 다짐 에너지를 정량화한 모델:
- **벽효과 (Wall Effect)**: 큰 입자의 평평한 표면 부근에서 작은 입자가 최밀 충전되지 못하고 공극률이 증가하는 현상.
- **이완효과 (Loosening Effect)**: 큰 입자들 사이에 끼인 작은 입자가 큰 입자들의 접촉을 밀어내어 골격을 이완시키는 현상.
- **다짐 지수 ($K$)와 실제 충전율 ($\Phi$)**:
  $$K = \sum_{i=1}^n K_i = \sum_{i=1}^n \frac{\Phi_i / \Phi_i^*}{1 - \Phi_i / \Phi_i^*}$$
  다짐 에너지가 무한대($K \rightarrow \infty$)일 때 가상 최밀 충전 밀도 $\gamma$에 수렴하며, 진동 다짐($K \approx 7.0$) 및 자중 충전($K \approx 4.0$) 조건에서의 실제 충전율 $\Phi$를 음함수 수치해석으로 계산.

## 3. 유변학(Rheology) 및 역학 특성과의 연계 메커니즘

- **소성점도 ($\mu$) 및 윤활 피동**:
  상대 고형분 농도($\Phi/\Phi_{max}$)가 임계값 이하로 제어될 때, 페이스트의 소성점도가 지수함수적으로 안정화되어 섬유 뭉침(Ball-up)을 방지하고 균일한 분산을 보장.
- **최대 페이스트 두께 (MPT: Maximum Paste Thickness)**:
  골재 사이를 채우는 잉여 페이스트의 유효 두께(MPT)가 얇고 균일할수록, 취성 매트릭스의 파괴인성($K_m$) 상승이 억제되어 PSH 에너지 조건($J'_b/J_{tip}$) 확보에 유리.

## 4. 관련 연구 논문 및 적용 사례

- [[de-larrard-2002-hpc-mixture-proportioning]] — 압축충전모델(CPM) 및 레올로지 통합 80 MPa HPC 배합 설계 원전.
- [[choi-2017-uhpm-pe-fiber-tensile-cracking]] — Modified A&A 모델($q=0.23$) 기반 150 MPa UHPM 배합.
- [[choi-2020-high-strength-composite-impact-resistance]] — 실리카퓸 및 마이크로 필러 최밀 충전 매트릭스.
- [[chun-2024-rc-beams-impact-resistance-hpfrcc]] — 고밀실 매트릭스 기반 HPFRCC 내충격 설계.
- [[uhpc-vs-ecc-design-space]] — 초고강도와 초고연성 매트릭스 간의 입도 충전 비교.

- [[du-2023-silicon-carbide-fineness-cement-composites]] — 탄화규소(SiC) 미립자 충전 고열전도 시멘트 복합체.

- [[hannawi-2016-fibers-microstructure-mechanical-uhpfrc]] — 섬유종류별 UHPFRC 미세구조 밀실화 및 응력하 기체투과·음향방출 원전.

- [[han-2016-concrete-spalling-influential-factors-fire]] — 경상국립대 한동엽 교수: ISO-834 화재 콘크리트 폭열 지배인자 수증기 내압 및 기공구조 메커니즘 원전.

- [[denkov-1999-mechanisms-mixed-antifoams-oil-bridges]] — Rhodia/소피아대: 소포제 오일가교 라플라스 모세관 파포 메커니즘 랜드마크 원전.
