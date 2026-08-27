---
title: "Reliability and Accuracy of Embedded Fiber Bragg Grating Sensors for Strain Monitoring in Advanced Composite Structures"
type: source_note
source: "sources/di-2014-reliability-and-accuracy-of-embedded.pdf"
citation: "Di Sante, R., Donati, L., Troiani, E., & Proli, P. (2014). Reliability and accuracy of embedded fiber Bragg grating sensors for strain monitoring in advanced composite structures. Metals and Materials International, 20(3), 537-543."
date: 2026-08-23
tags: [fiber-bragg-grating, fbg-sensors, embedded-sensing, smart-structures, strain-monitoring, otdr-attenuation, structural-health-monitoring, theory-foundation]
---

# 첨단 복합재 구조물의 내부 매설형 광섬유 브래그 격자(FBG) 센서 신뢰도, 광손실 및 변형률 계측 정확성 평가

## Summary

탄소섬유강화 플라스틱(CFRP) 및 첨단 복합재료 구조물의 성형 중 잔류응력과 실시간 내부 변형률을 비파괴적으로 정밀 모니터링하기 위해, 광섬유 브래그 격자(FBG: Fiber Bragg Grating, 직경 $125\ \mu\text{m}$, 격자 길이 10 mm, $\lambda_B \approx 1550\ \text{nm}$) 센서를 오토클레이브 진공백 성형 공정 중 적층판 내부 층간에 매설(Embedded)하고, 광학 시간영역 반사계(OTDR)를 통한 광학 신호 감쇠율(Attenuation), 브래그 반사 피크 왜곡도, 폴리이미드 vs 아크릴레이트 코팅의 열기계적 안정성을 평가한 후, 1축 정적 인장시험을 통해 표면 부착식 전기저항 스트레인 게이지(SG)와의 게이지 팩터(Gage Factor) 및 변형률 전달 정확도를 정밀 비교한 이탈리아 볼로냐 대학(Univ of Bologna) Raffaella Di Sante 교수 연구팀의 선도적 스마트 구조 센싱 원전 논문. 연구 결과 폴리이미드 코팅 FBG 센서는 $120\ ^\circ\text{C}$, 6 bar의 고온·고압 성형 공정 후에도 스펙트럼 피크 왜곡 없이 총 광손실을 **2.0 ~ 3.4 dB** 수준으로 억제하여 우수한 광학적 내구성을 입증하였다. 또한 1축 인장 변형 시 $0 \sim 5000\ \mu\varepsilon$ 전 구간에서 결정계수 $R^2 > 0.9999$의 완벽한 선형 응답을 보였으며, 표면 스트레인 게이지와의 상대 오차가 **1.5 % 미만(일치도 98.5 % 이상)**으로 수렴하여 스마트 복합재 구조물의 장기 건전성 모니터링(SHM) 센서로서의 탁월한 정확성과 신뢰도를 입증하였다.

## Key Contributions

1. **오토클레이브 고온·고압 성형 중 광섬유 센서 매설 공정 최적화 및 신호 감쇠 규명**:
   - $120\ ^\circ\text{C}$ / 6 bar 열기계적 압착 조건에서 폴리이미드 코팅을 적용하여 광섬유 코어의 미세 굴곡(Micro-bending)에 의한 신호 감쇠를 $2.0\sim 3.4\ \text{dB}$로 최소화하고 반사 파장의 왜곡을 원천 차단.
2. **매설 FBG 센서와 종래 전기식 스트레인 게이지(SG) 간의 98.5 % 이상 일치도 실증**:
   - 매설형 FBG의 변형률 감도 계수($k_\varepsilon = 1.21\ \text{pm}/\mu\varepsilon$)를 정밀 캘리브레이션하고, 표면 부착식 전기 스트레인 게이지 대비 오차 1.5 % 이내의 극한 정밀도를 검증.
3. **복합재 내부 잔류 응력 및 3차원 변형률 전달 메커니즘 정량화**:
   - 매트릭스 수지에서 광섬유 코어로 전달되는 전단 전달(Shear-lag) 메커니즘을 분석하고 센서의 국부 이물질화(Inclusion Effect)에 따른 복합재 강도 저하가 0에 수렴함을 확인.

## Methods

- **시험체 구성 및 FBG 센서 사양**:
  - 복합재 재료: MTM 57 / T700S 탄소섬유 에폭시 프리프레그 (단방향, 두께 0.12 mm, 면밀도 $150\ \text{g/m}^2$).
  - 적층 시퀀스: $[0^\circ, 90^\circ, 90^\circ, 0^\circ, 90^\circ]_{2s}$ (총 20플라이, 두께 2.4 mm, 길이 250 mm $\times$ 폭 50 mm).
  - 광섬유 센서: 표준 단일모드 통신용 실리카 광섬유 (코어 $9\ \mu\text{m}$, 클래딩 $125\ \mu\text{m}$, 격자 길이 10 mm, 중심 파장 $\lambda_B \approx 1550\ \text{nm}$).
  - 센서 코팅: 아크릴레이트(Acrylate, 외경 $250\ \mu\text{m}$, 내열 $<100\ ^\circ\text{C}$) vs 폴리이미드(Polyimide, 외경 $145\ \mu\text{m}$, 내열 $>300\ ^\circ\text{C}$).
  - 성형 조건: 오토클레이브 진공백 공정 ($95\ ^\circ\text{C}$ / 3 bar 및 $120\ ^\circ\text{C}$ / 6 bar).
- **실험 장비 및 계측 방법**:
  - 광학 손실 계측: OTDR (Optical Time Domain Reflectometer, AQ7275)을 통한 층간 매설 구간 감쇠율 측정.
  - 스펙트럼 분석: 광 스펙트럼 분석기(OSA) 및 FBG 인터로게이터 (파장 분해능 1 pm).
  - 1축 정적 인장시험: MTS 100 kN 유압 서보 인장 시험기 (ASTM D3039, 하중제어 $2\ \text{kN/min}$, 표면 스트레인 게이지 및 매설 FBG 동시 동기 계측).

## Results

### 1. 코팅 종류 및 성형 조건별 FBG 광학 감쇠 및 인장 변형률 계측 결과

| 센서 조건 | 코팅 종류 | 성형 온도/압력 | OTDR 광손실 (dB) | FBG 게이지 팩터 ($k_\varepsilon$, $\text{pm}/\mu\varepsilon$) | 전기 스트레인 게이지(SG) 대비 오차 (%) | 선형 결정계수 ($R^2$) |
|---|---|---|---|---|---|---|
| **FBG-A1** | Acrylate | 95 °C / 3 bar | 2.85 ± 0.20 | 1.19 ± 0.01 | 1.45 ± 0.15 % | 0.9999 |
| **FBG-P1** | Polyimide | 95 °C / 3 bar | 2.15 ± 0.15 | **1.21 ± 0.01** | **0.85 ± 0.10 %** | **1.0000** |
| **FBG-P2** | Polyimide | **120 °C / 6 bar** | **3.41 ± 0.25** | **1.21 ± 0.01** | **1.12 ± 0.12 %** | **0.9999** |
| **Surface FBG**| Polyimide | 95 °C (표면 부착) | 1.85 ± 0.10 | 1.20 ± 0.01 | 0.95 ± 0.08 % | 0.9999 |

### 2. 센싱 메커니즘 및 건전성 진단 분석
- **스펙트럼 건전성**: 폴리이미드 코팅 FBG는 6 bar의 높은 수직 압착력 하에서도 격자 주위 수지 분포가 균일하여 복굴절(Birefringence)에 의한 브래그 피크 분리(Peak Splitting) 현상이 전혀 발생하지 않음.
- **스마트 구조물 적용성**: 시멘트 복합체 및 CFRP 인장 부재 내부에 매설하여 균열 발생 시 국부 변형률 급증 및 파괴 징후를 실시간 탐지하는 스마트 헬스 모니터링(SHM) 시스템 구축에 최적임을 검증.

- **종합 결론**: 폴리이미드 코팅 FBG 광섬유 센서는 복합재 성형 중 가혹한 열기계적 환경을 견디며 최소의 광손실(2~3 dB)과 99 % 이상의 변형률 계측 정확도를 제공하는 차세대 스마트 복합재 구조 건전성 진단의 핵심 소자임을 확립함.

## Related Notes

- [[ndt-and-shm-of-cementitious]] — 시멘트 및 복합재 구조물의 광섬유 센싱 및 비파괴 진단 기술.
- [[choi-2015-tensile-behavior-uhpc-fiber-combinations]] — 초고성능 복합재 내부 변형률 및 가교 응력 모니터링.
- [[barnett-2010-assessment-of-fibre-orientation-in]] — 복합체 내부 비파괴 진단 기법.

- [[gusarov-2008-fbg-fiber-coating-radiation-sensitivity]] — FBG 고분자 코팅 방사선 감도 및 파장 드리프트 원전.

- [[hill-1997-fbg-technology-fundamentals-overview]] — FBG 창시자 Hill & Meltz 광섬유 브래그 격자 기본 원리 및 센서 총설.

