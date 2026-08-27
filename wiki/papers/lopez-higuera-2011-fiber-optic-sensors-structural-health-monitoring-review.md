---
title: "Fiber Optic Sensors in Structural Health Monitoring"
type: source_note
source: "sources/lópez-higuera-2011-fiber-optic-sensors-in-structural.pdf"
citation: "López-Higuera, J. M., Cobo, L. R., Incera, A. Q., & Cobo, A. (2011). Fiber Optic Sensors in Structural Health Monitoring. Journal of Lightwave Technology, 29(4), 587-608."
date: 2026-08-24
tags: [fiber-optic-sensors, structural-health-monitoring, shm, fbg-gratings, distributed-sensing, botda, ofdr, civil-infrastructure, wind-turbines, ieee-jlt, landmark-paper, classic-paper, review-paper]
---

# 구조물 건전성 모니터링(SHM)을 위한 광섬유 센서(FOS) 시스템 및 복조 기술 종합 총설: FBG, 간섭계, 연속 분산형(BOTDA/OFDR) 센서망의 원리, 다중화 및 인프라 적용 불후의 고전

## Summary

전통적인 전기식 센서가 직면하는 가혹한 야외 환경 하의 전자기 유도 노이즈(EMI), 낙뢰 파손, 장거리 신호 감쇠, 다중 케이블 배선의 중량 증가 한계를 근본적으로 극복하고, 대형 토목 인프라(교량, 댐, 터널), 풍력 발전기 터빈 블레이드, 우주 항공 복합재의 수명 전주기 안전성을 실시간 감시하기 위해, **광섬유 브래그 격자(FBG), 파브리-페로 간섭계(FP), 장게이지 센서(SOFO), 그리고 초장거리 연속 분산형 센서(Brillouin BOTDA, Raman ROTDR, Rayleigh OFDR/$\phi$-OTDR)를 포괄하는 광섬유 센서(Fiber Optic Sensors: FOS) 기술의 물리광학적 작동 원리, 광 인터로게이터(Interrogator) 복조 알고리즘, 파장/시분할 다중화(WDM/TDM) 아키텍처, 콘크리트 및 복합재 매립 패키징 신뢰성, 글로벌 랜드마크 인프라 실증 사례**를 전면 집대성한 **스페인 칸타브리아 대학교(University of Cantabria) José Miguel López-Higuera 석좌교수 연구팀**의 IEEE Journal of Lightwave Technology 2011년 불후의 최고 랜드마크 고전 총설 논문.

## Key Contributions

1. **글로벌 SHM 광섬유 센서(FOS) 4대 기술 체계의 완벽한 수학적·물리적 통합 분류**:
   - 점 센서(FBG), 준분산 센서(WDM FBG 어레이), 장게이지 적분 센서(SOFO), 연속 분산 센서(BOTDA/OFDR)의 공간 분해능, 측정 동적 대역폭, 다중화 한계를 일목요연하게 수식화.
2. **FBG 파장 변조 및 온도-변형률 교차 민감도(Cross-Sensitivity) 완벽 분리 메커니즘 정립**:
   - 브래그 파장 천이($\Delta\lambda_B/\lambda_B = C_{\varepsilon}\Delta\varepsilon + C_T\Delta T$)에서 더미 FBG 격자 또는 복굴절 편광 격자를 통해 온도 드리프트를 $100\%$ 상쇄하는 표준 복조 회로를 확립.
3. **분산형 브릴루앙/OFDR 광학 센싱의 $1\ \text{mm}\sim 100\ \text{km}$ 스케일 커버리지 입증**:
   - 파이프라인 및 터널의 $50\ \text{km}$ 장거리 변형률 감시(BOTDA)부터 풍력 블레이드 및 항공 복합재 내부의 $1\ \text{mm}$ 초고해상도 균열 추적(OFDR)까지 전 스케일 SHM 패러다임을 제시.
4. **글로벌 초대형 인프라(장대교량, 댐, 지하고속철도) FOS 모니터링 표준 가이드라인 확립**:
   - 수천 개 센서 노드의 신호를 1개의 광케이블로 집약하여 30년 이상 가혹 환경에서 무고장 가동되는 스마트 구조물 자율 신경망(Nervous System)을 완성.

## Methods

- **광학 센싱 지배 원리 및 수식 체계 (Sections 2~5 & Figs. 1~12)**:
  - 1. FBG 격자: $\lambda_B = 2 n_{eff} \Lambda$, 변형률 감도 $1.2\ \text{pm}/\mu\varepsilon$, 온도 감도 $10\ \text{pm}/^\circ\text{C}$.
  - 2. Fabry-Perot 간섭: 위상차 $\phi = \frac{4\pi n L}{\lambda}$, 공진 공동 길이 변화 계측.
  - 3. BOTDA 분산 센싱: 브릴루앙 주파수 $\nu_B = \frac{2 n v_a}{\lambda}$, 변형률 감도 $0.05\ \text{MHz}/\mu\varepsilon$, 온도 감도 $1.0\ \text{MHz}/^\circ\text{C}$.
  - 4. OFDR 고해상도 센싱: 광주파수 영역 반사계 (공간 분해능 $<1.0\ \text{mm}$).
- **산업별 적용 데이터베이스 (Sections 6~8 & Tables 1~4 & Figs. 13~24)**:
  - 토목 교량/터널, 풍력 발전 블레이드, 우주 항공 복합재 동체, 해양 가스 파이프라인.

## Results

### 1. 주요 광섬유 센서 기술별 센싱 메커니즘, 공간 분해능, 측정 거리, 다중화 용량 및 SHM 응용 분야 비교표 (Section 5 & Tables 1~3 & Figs. 25~30)

| 광센서 기술 분류 | 물리적 센싱 작동 원리 | 측정 물리량 | 공간 분해능 (Spatial Resolution) | 최대 측정 거리 (Range) | 다중화 용량 (1채널당) | 최적 SHM 적용 대상 |
|---|---|---|---|---|---|---|
| **FBG (점/준분산 센서)** | **브래그 반사 파장 천이 ($\Delta\lambda_B$)**| **변형률, 온도, 진동가속도** | **국소 점 ($1\sim 10\ \text{mm}$)** | **$10\sim 20\ \text{km}$** | **$30\sim 100$ 개소 (WDM/TDM)**| **교량 거더, 케이블, 댐퍼** |
| **EFPI (간섭계 센서)** | 패브리-페로 위상 간섭 | 미세 변형률, 압력, 음향 | 초국소 점 ($1\sim 5\ \text{mm}$) | $<2\ \text{km}$ | $1\sim 4$ 개소 | 고온/초정밀 국소 응력 |
| **SOFO (장게이지 센서)**| 저간섭 마이켈슨 간섭계 | 장구간 적분 변형률, 처짐 | 장구간 ($0.2\sim 10\ \text{m}$ 게이지)| $<5\ \text{km}$ | $10\sim 30$ 개소 | 콘크리트 균열 적분 변형 |
| **BOTDA (연속 분산 센서)**| **유도 브릴루앙 산란 주파수** | **연속 변형률 및 온도 프로파일**| **$0.5\sim 2.0\ \text{m}$ (광범위)** | **$>50\ \text{km}$ (초장거리)** | **연속 분포 (수만 포인트)** | **터널, 파이프라인, 제방** |
| **OFDR (초고해상도 분산)**| **레일리 산란 광주파수 간섭**| **마이크로 변형률 및 균열** | **$<1.0\ \text{mm}$ (초고해상도)**| **$<100\ \text{m}$** | **수십만 포인트 (밀집)** | **풍력 블레이드, 항공 동체** |

### 2. 센서 패키징 및 장기 가혹 환경 신뢰성 해석
- **전자기장 및 낙뢰 완전 면역(EMI Immunity)**: 고전압 철도 가선 및 낙뢰 위험 지역에서도 유도 기전력이 전혀 발생하지 않아 전산 장비 파손 및 신호 왜곡을 $100\%$ 방지.
- **스마트 구조 복합재 일체화**: 탄소섬유 복합재(CFRP) 라미네이트 성형 시 직경 $125\ \mu\text{m}$ 광섬유를 결함 없이 매립하여 제조 중 잔류 응력과 공용 중 층간 박리를 실시간 감시.

- **종합 결론**: 본 논문은 López-Higuera 석좌교수 연구팀이 FBG, 간섭계, 초장거리 분산형 광섬유 센서의 원리, 복조 기술 및 글로벌 대형 인프라 SHM 적용을 집대성하여 스마트 구조물 및 광학 센싱 공학 분야의 최고 권위 불후의 교과서적 표준이 된 랜드마크 고전 총설 논문임.

## Related Notes

- [[li-2004-fiber-optic-sensors-health-monitoring-civil-engineering]] — Hong-Nan Li & Gang-Bing Song: 토목 광섬유 센서 불후의 고전.
- [[chan-2006-fiber-bragg-grating-sensors-bridge-shm]] — FBG 교량 SHM 랜드마크.
- [[kim-2015-sensor-type-pc-strand-embedded-fbg-sensor]] — KICT FBG 스마트 PC강연선 랜드마크.
- [[concrete-durability-and-service-life]] — 스마트 SHM 유지관리 체계.
