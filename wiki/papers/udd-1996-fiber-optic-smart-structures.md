---
title: "Fiber Optic Smart Structures"
type: source_note
source: "sources/Udd-1996-Fiber optic smart structures.pdf"
citation: "Udd, E. (1996). Fiber optic smart structures. Proceedings of the IEEE, 84(1), 60-73."
date: 2026-08-23
tags: [fiber-optic-sensors, smart-structures, shm, fbg, fabry-perot, interferometry, distributed-sensing, eric-udd, invited-paper, theory-foundation]
---

# 광섬유 스마트 구조체(Fiber Optic Smart Structures)의 센싱 메커니즘, 파장 다중화 및 구조 건전성 모니터링(SHM) 총설

## Summary

항공우주 비행체, 스마트 복합재료 및 토목 인프라(교량, 댐, 터널, 원자력 격납건물)의 생애주기 동안 내부 변형률, 온도, 압력, 음향 방출 및 구조 손상을 실시간으로 자가 진단하기 위해 개발된 **광섬유 센서(Fiber Optic Sensors) 기반 스마트 구조체(Smart Structures)** 기술의 이론적 작동 원리와 시스템 아키텍처를 총망라한 미국 Blue Road Research사 Eric Udd 박사의 불후의 IEEE 초청 랜드마크 총설 논문. 본 논문은 전자기파 간섭(EMI) 완전 면역, 소형 경량, 초고내구성 및 재료 내부 직접 매설(Embedded Sensing)이 가능한 광섬유의 물리적 장점을 바탕으로, 광강도 변조형(Intensity-based), 위상 간섭형(Fabry-Perot EFPI/IFPI, Sagnac, Mach-Zehnder), 분광 파장 변조형(Fiber Bragg Grating: FBG) 및 브릴루앙/라만 분산형 광섬유 센싱(Distributed BOTDA/OTDR) 기술의 지배 방정식을 체계화하고, 파장분할다중화(WDM) 및 시분할다중화(TDM)를 통해 수천 개의 센서를 단일 광섬유 네트워크로 통합하는 구조 건전성 모니터링(SHM)의 표준 패러다임을 확립하였다.

## Key Contributions

1. **광섬유 스마트 구조체 4대 센싱 메커니즘의 물리적 이론 체계화**:
   - **강도 변조형 (Intensity)**: 광섬유 미세 굽힘(Microbending) 및 개구수(NA) 정렬 손실을 이용한 단순 변위/진동 감지.
   - **간섭계형 (Interferometric: Fabry-Perot, Sagnac, Mach-Zehnder)**: 광파의 위상차($\Delta\phi = \frac{2\pi n}{\lambda} \Delta L$)를 이용한 $\text{sub-}\mu\varepsilon$ 급 초고감도 동적 변형률 계측.
   - **파장 변조형 (Spectrally-based FBG)**: 브래그 파장 이동($\Delta\lambda_B / \lambda_B = (1-p_e)\varepsilon + (\alpha_\Lambda + \xi)\Delta T$)을 이용한 절대 변형률 및 온도 측정.
   - **분산형 센싱 (Distributed BOTDR/BOTDA)**: 광섬유 자체를 연속 센서로 활용하여 수십 km 구조물의 1차원 변형률/온도 연속 프로파일 매핑.
2. **다중화(Multiplexing)를 통한 스마트 구조물 내 3차원 분산 계측망 구현**:
   - 파장분할다중화(WDM), 시분할다중화(TDM), 공간다중화(SDM) 기법을 융합하여 단일 광학 케이블 라인에 수십~수백 개의 FBG 센서 노드를 직렬 연결하고 국부 균열 및 손상을 정밀 위치 추적.
3. **복합재료 및 토목 콘크리트 매설 신뢰성 및 계면 전달 효율 입증**:
   - 유리/탄소섬유 복합재 및 시멘트 매트릭스 내부에 매설 시 모재의 구조적 결함을 유발하지 않고 변형률 전달 오차 1 % 미만의 완벽한 계면 일체성을 확보하는 패키징 기술을 정립.

## Methods

- **센서 유형별 광학 원리 및 구성 체계 (Figure 1~12)**:
  - **FBG 센서 (Fiber Bragg Grating)**:
    - 코어 굴절률의 주기적 변조($\Lambda$), 브래그 중심 파장 $\lambda_B = 2 n_{eff} \Lambda$.
    - 변형률 민감도: $1550\ \text{nm}$ 대역에서 약 $1.2\ \text{pm}/\mu\varepsilon$, 온도 민감도 약 $10\ \text{pm}/^\circ\text{C}$.
  - **파브리-페로 간섭계 (Extrinsic Fabry-Perot Interferometer: EFPI)**:
    - 모세관 튜브 내 2개 단면 사이의 공진 에탈론 갭($s$), 위상 변화 $\Delta\phi = \frac{4\pi}{\lambda}\Delta s$.
  - **사냐크 간섭계 (Sagnac Interferometer)**:
    - 반대 방향으로 회전하는 광파의 비상호적(Non-reciprocal) 위상차를 계측하여 고주파 음향 방출(AE) 및 충격 위치 탐지.
  - **분산형 브릴루앙 산란 (Brillouin Optical Time Domain Analysis)**:
    - 음향 포논과의 비탄성 산란에 의한 주파수 천이($\nu_B \approx 11\ \text{GHz}$)를 이용한 분산 계측 ($1\ \text{m}$ 공간 해상도, $30\ \text{km}$ 계측 거리).

## Results

### 1. 광섬유 스마트 센싱 시스템 유형별 성능 및 적용 분야 비교

| 센서 유형 | 물리적 변조 방식 | 계측 파라미터 | 공간 분해능 / 범위 | 다중화 용량 (단일 채널) | 주요 구조물 적용처 |
|---|---|---|---|---|---|
| **FBG (브래그 격자)** | 파장 변조 (Spectral $\lambda_B$) | 정적/동적 변형률, 온도 | 국부 점 센서 ($1\sim 10\ \text{mm}$) | **WDM 기반 50~100개 직렬** | 교량 거더, 풍력 블레이드, 항공기 |
| **EFPI (파브리-페로)** | 위상 간섭 (Phase Interference)| 미세 변위, 고온 변형률 | 국부 점 센서 ($1\sim 20\ \text{mm}$) | TDM 기반 5~10개 | 원자로 배관, 초고온 연소 챔버 |
| **Sagnac / M-Z** | 광 경로 위상차 간섭 | 음향 방출 (AE), 진동 주파수 | 분포/적분형 라인 센서 | 단일 루프 | 충격 손상 위치 감지, 침입 탐지 |
| **BOTDA (브릴루앙)**| 비탄성 후방 산란 주파수 | 연속 변형률 및 온도 프로파일 | $0.5\sim 1.0\ \text{m}$ 해상도 / $50\ \text{km}$ | **연속 분포형 (수만 포인트)** | 댐 제방 침하, 장대 터널, 파이프라인 |

### 2. 스마트 복합재료의 자가 진단 메커니즘 해석
- **전자기 간섭 면역성**: 뇌우, 고전압 송전선로, 전자기 펄스(EMP) 환경에서도 신호 왜곡 및 노이즈 없이 100 % 완벽한 데이터 신뢰성을 보장.
- **다중 물리량 동시 분리 계측**: 2개 이상의 파장 대역 FBG를 직렬 배치하여 온도($\Delta T$)에 의한 열팽창과 기계적 변형률($\varepsilon$)을 완벽히 분리 보정하는 알고리즘 확립.

- **종합 결론**: Eric Udd 박사의 본 논문은 단순한 계측기를 넘어 구조물 자체가 신경망을 가진 것처럼 자가 상태를 감지하는 '스마트 구조체'의 개념을 전 세계에 최초로 정립하고 광섬유 SHM 기술의 공학적 상용화를 이끈 기념비적 초석 논문임.

## Related Notes

- [[di-2014-fbg-sensor-embedded-strain-monitoring]] — 복합재 내부 FBG 광섬유 센서 매설 및 변형률 모니터링 원전.
- [[ndt-and-shm-of-cementitious]] — 시멘트계 복합재 비파괴 진단 및 스마트 센싱 체계.
- [[impact-and-blast-resistance-frcc]] — 광섬유 센서를 활용한 동적 충격 및 변형률 계측.
- [[crack-width-control]] — 스마트 센서를 통한 미세 균열 진단 및 모니터링.

- [[gusarov-2008-fbg-fiber-coating-radiation-sensitivity]] — FBG 고분자 코팅 방사선 스웰링 및 내방사선성 원전.
