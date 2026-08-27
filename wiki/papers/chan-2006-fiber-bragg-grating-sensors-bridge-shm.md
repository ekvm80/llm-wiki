---
title: "Fiber Bragg grating sensors for structural health monitoring of bridges"
type: source_note
source: "sources/chan-2006-fiber-bragg-grating-sensors-for.pdf"
citation: "Chan, T. H. T., Yu, L., Tam, H. Y., Ni, Y. Q., Liu, S. Y., Chung, W. H., & Cheng, L. K. (2006). Fiber Bragg grating sensors for structural health monitoring of bridges. Structural Health Monitoring, 5(4), 381-407."
date: 2026-08-24
tags: [fiber-bragg-grating, fbg-sensors, structural-health-monitoring, bridge-monitoring, dynamic-strain-measurement, temperature-compensation, smart-structures, tommy-chan, landmark-paper, classic-paper]
---

# 광섬유 브래그 격자(FBG) 센서 기반 장경간 교량 실시간 구조 건전성 모니터링(SHM): 동적 변형률 계측, 온도 보상 및 전자기 간섭(EMI) 완전 면역 메커니즘

## Summary

전기식 스트레인 게이지의 전자기 간섭(EMI) 취약성, 신호 감쇠 및 열악한 옥외 환경에서의 단명 한계를 극복하고 대형 인프라 교량의 장기 구조 건전성을 실시간 모니터링하기 위해, **광섬유 코어 내 굴절률 격자 간격 변조를 이용한 광섬유 브래그 격자(FBG: Fiber Bragg Grating, 중심 파장 $\lambda_B = 1550\ \text{nm}$) 다채널 광학 센싱 시스템**을 개발하고, **홍콩 칭마대교(Tsing Ma Suspension Bridge) 및 팅카우대교(Ting Kau Cable-Stayed Bridge) 실물 교량에 수백 개의 FBG 센서를 매립/부착**하여 **고속 열차 통과 시의 동적 미세 변형률($\pm 500\ \mu\varepsilon$), 온도 연계 복합 파장 이동($\Delta\lambda_B$), 전자기 잡음 제로($0.0\ \text{dB}$) 면역성 및 $100\ \text{Hz}$ 이상의 고속 동적 샘플링 안정성**을 세계 최초로 실증한 **홍콩이공대학교(HKPolyU) Tommy H. T. Chan 교수, Y. Q. Ni 교수 및 H. Y. Tam 교수** 연구팀의 Structural Health Monitoring 2006년 최고 권위 랜드마크 고전 논문.

## Key Contributions

1. **장경간 해상 교량 FBG 광학 센싱 모니터링 세계 최초 상용화 실증**:
   - 홍콩의 대표 현수교(칭마대교)와 사장교(팅카우대교)의 강재 트러스 및 콘크리트 주탑에 FBG 센서망을 설치하여 실시간 건전성 진단 표준을 정립.
2. **온도-변형률 교차 간섭 분리 및 정밀 보상(Temperature Compensation) 기술 확립**:
   - 무응력 FBG 더미 센서를 쌍(Pair)으로 배치하여 온도에 의한 굴절률 드리프트를 완벽 상쇄하고 순수 역학적 동적 변형률만을 $1\ \mu\varepsilon$ 분해능으로 추출.
3. **낙뢰 및 고전압 전철 가선 전자기 간섭(EMI) 완전 면역 실증**:
   - 전기적 도선이 아닌 순수 석영 유리 광섬유를 통해 신호가 빛의 파장으로 전송되므로 전자기 유도 노이즈가 $100\%$ 차단됨을 입증.
4. **단일 광섬유 파장 분할 다중화(WDM: Wavelength Division Multiplexing) 구현**:
   - 한 가닥의 광케이블에 서로 다른 반사 파장을 갖는 수십 개의 FBG 센서를 직렬 연결하여 배선 복잡성과 설치 공사비를 $80\%$ 절감.

## Methods

- **FBG 원리 및 센서 시스템 구성 (Section 2 & Figs. 1~3)**:
  - 브래그 반사 조건: $\lambda_B = 2n_{eff}\Lambda$ ($n_{eff}$: 코어 유효 굴절률, $\Lambda$: 격자 주기).
  - 파장 이동 관계식: $\Delta\lambda_B / \lambda_B = (1 - p_e)\Delta\varepsilon + (\alpha + \xi)\Delta T$ ($p_e = 0.22$: 광탄성 계수, $\alpha$: 열팽창계수, $\xi$: 열광학계수).
  - 계측 시스템: 광대역 ASE 광원 + 고속 파장 가변 필터 인터로게이터(Interrogator, 샘플링 레이트 $100\sim 500\ \text{Hz}$).
- **실물 교량 현장 시험 (Sections 3~5 & Figs. 4~12)**:
  - 대상 교량: 홍콩 칭마대교 (주경간 $1377\ \text{m}$ 철도-도로 복층 현수교).
  - 계측 항목: 공항고속철도(AEL) 열차 통과 시 강재 크로스 거더의 동적 휨 변형률, 태풍 풍하중 응답.

## Results

### 1. 실물 칭마대교 강재 거더의 고속 열차 통과 시 FBG 센서 대 기존 전기식 스트레인 게이지(ESG) 계측 성능 비교표 (Section 4 & Figs. 8~14)

| 계측 항목 및 특성 | 기존 전기식 저항 게이지 (ESG) | FBG 광섬유 센서 시스템 (FBG) | 성능 개선 및 이점 |
|---|---|---|---|
| **변형률 계측 분해능 ($\mu\varepsilon$)** | **$\pm 5.0\ \mu\varepsilon$** | **$\pm 0.5 \sim 1.0\ \mu\varepsilon$** | **정밀도 5배 향상** |
| **전철 가선 전자기 간섭 (EMI 노이즈)**| **심각한 고주파 노이즈 ($\text{SNR} < 15\ \text{dB}$)**| **노이즈 전무 ($\text{SNR} > 60\ \text{dB}$, 완전면역)**| **완벽한 신호 무결성** |
| **장기 신호 드리프트 (Zero Drift)** | **온도/습도에 따른 영점 표동 발생** | **파장 절대값 계측으로 표동 제로 ($0.0$)** | **장기 모니터링 최적** |
| **단일 케이블 센서 수용력** | 1채널 1케이블 (수백 가닥 배선) | **1광섬유 당 $16\sim 32$개 다중화 (WDM)**| **배선 공사비 $80\%$ 절감** |
| **열차 통과 시 최대 동적 변형률** | $450 \pm 25\ \mu\varepsilon$ (노이즈 중첩) | **$448.5 \pm 2.0\ \mu\varepsilon$ (선명한 파형)** | **정확한 피로 응력 이력 획득** |

### 2. 광학적 파장 변조 및 피로 손상 진단 메커니즘 해석
- **열차 하중 응답 파형의 선명성**: 고속 전철이 진입하여 통과할 때 발생하는 4개 대차 하중 피크가 FBG 파장 스펙트럼에서 완벽히 분리되어 교량의 피로 손상 누적도를 오차 $1\%$ 이내로 산출.
- **장기 해풍 내구성**: 에폭시 및 스테인리스 튜브로 캡슐화된 FBG 센서가 해양 염분 환경에서도 10년 이상 감도 열화 없이 가동됨을 검증.

- **종합 결론**: 본 논문은 Tommy Chan 교수 연구팀이 광섬유 FBG 센서를 실규모 장경간 교량에 적용하여 전자기 잡음 없는 고정밀 동적 변형률 계측과 장기 건전성 평가를 최초로 완벽 실증한 스마트 인프라 구조물 건전성 모니터링(SHM) 분야의 최고 권위 랜드마크 고전 논문임.

## Related Notes

- [[kim-2007-simulation-parameters-surface-wave-propagation-concrete-ann]] — 비파괴 음향 표면파 AI 진단 원전.
- [[monteiro-2017-self-sensing-piezoresistive-cement-carbon-black]] — 피에조저항 콘크리트 스마트 자가감지 원전.
- [[mac-2020-thermography-deterioration-detection-cfrp-bridge-girders]] — 적외선 열화상 비파괴 탐지 랜드마크.
- [[concrete-durability-and-service-life]] — 구조물 스마트 유지관리 및 수명 예측 체계.
