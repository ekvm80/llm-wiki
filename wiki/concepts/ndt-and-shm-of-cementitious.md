---
title: "NDT and SHM of Cementitious Composites (비파괴 검사 및 구조 건전성 모니터링)"
type: concept
source: "[[kim-2007-fbg-smart-tendon]], [[chan-2006-fbg-sensors-tsing-ma-bridge-shm]], [[materazzi-2013-cnt-dynamic-transducer]]"
date: 2026-08-23
tags: [concept, ndt, shm, acoustic-emission, fbg-sensor, image-processing, self-sensing, smart-composites]
---

# NDT and SHM of Cementitious Composites (시멘트 복합재의 비파괴 검사 및 구조 건전성 모니터링)

## 정의

시멘트계 복합재료 및 구조물의 균열 개시, 손상 진화, 다중균열 분포 및 응력/변형률 상태를 구조물의 기능 훼손 없이 실시간 또는 주기적으로 진단하고 감시하기 위한 **비파괴 검사(Non-Destructive Testing, NDT)** 및 **구조 건전성 모니터링(Structural Health Monitoring, SHM)** 기술 체계.

## 주요 감지 및 모니터링 기술군

1. **음향 방출 (Acoustic Emission, AE)**:
   - 재료 내부에서 미세 균열 개시, 섬유 탈결합(debonding), 섬유 인발/파단 시 발생하는 탄성파를 압전 센서로 감지.
   - 신호 파라미터(진폭, 에너지, 상승시간, RA치, $b$-value) 분석을 통해 전단 파괴와 인장 파괴 모드를 정량적으로 식별.
2. **광섬유 브래그 격자 (Fiber Bragg Grating, FBG) 센서**:
   - 광섬유 코어 내부에 형성된 격자의 파장 변화($\Delta \lambda_B$)를 통해 국부 변형률 및 온도를 초고정밀도로 측정.
   - 스마트 텐던(Smart Tendon)이나 콘크리트 내부에 매립되어 장기 긴장력 손실 및 부재 변형을 지속 감시.
3. **디지털 이미지 상관법 (DIC) 및 표면 비전 검사**:
   - 하중 재하 중 표면 변형장 및 균열 개구 변위($w$)를 마이크론 단위 해상도로 전구간 가시화하여 다중균열 포화도를 실시간 정량화.
4. **자가 감지 (Self-Sensing / Piezoresistive) 스마트 복합재**:
   - 탄소나노튜브(CNT), 탄소섬유, 그래핀 등을 매트릭스에 분산시켜 전도성 네트워크를 형성.
   - 외력 및 손상에 따른 전기 저항 변화($\Delta R / R_0$)를 통해 센서 매립 없이 재료 스스로 변형과 균열을 감지.

## 관련 파라미터

- $b$-value: AE 진폭 분포 지수 (미세 균열 다발 시 상승, 거대 균열 시 급락)
- $\lambda_B$: FBG 브래그 반사 파장 (nm)
- $\text{GF}$ (Gauge Factor): 자가감지 복합재의 압전저항 감도 계수 ($(\Delta R/R_0)/\epsilon$)

## 관련 노트

- [[kim-2007-fbg-smart-tendon]] — FBG 광섬유 센서 매립 스마트 긴장재 개발 및 교량 적용.
- [[chan-2006-fbg-sensors-tsing-ma-bridge-shm]] — 대형 현수교(Tsing Ma Bridge)의 FBG 기반 SHM 시스템.
- [[materazzi-2013-cnt-dynamic-transducer]] — CNT 기반 스마트 시멘트 센서의 동적 하중 감지.
- [[chen-2004-aggregate-effect-fracture-behavior-high-strength-concrete]] — AE 기법을 이용한 콘크리트 파괴 거동 실시간 모니터링.
- [[watkins-2003-smart-bridges]] — 스마트 교량 시스템 및 건전성 진단 총론.

- [[di-2014-fbg-sensor-embedded-strain-monitoring]] — 매설형 FBG 광섬유 센서의 변형률 계측 신뢰도 및 광손실 평가.

- [[udd-1996-fiber-optic-smart-structures]] — 광섬유 센서 기반 스마트 구조체 SHM 총설 원전.

