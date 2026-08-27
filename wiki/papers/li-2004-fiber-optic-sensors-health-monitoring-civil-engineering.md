---
title: "Recent applications of fiber optic sensors to health monitoring in civil engineering"
type: source_note
source: "sources/li-2004-recent-applications-of-fiber-optic.pdf"
citation: "Li, H.-N., Li, D.-S., & Song, G.-B. (2004). Recent applications of fiber optic sensors to health monitoring in civil engineering. Engineering Structures, 26(11), 1647-1657."
date: 2026-08-24
tags: [fiber-optic-sensors, structural-health-monitoring, shm, fbg-sensors, fabry-perot-sensors, brillouin-scattering, civil-infrastructure, hong-nan-li, gang-bing-song, engineering-structures, landmark-paper, classic-paper, review-paper]
---

# 토목 구조물 건전성 모니터링(SHM)을 위한 광섬유 센서(FBG, Fabry-Perot, 분산형 Brillouin) 기술 집대성 및 실교량·댐 적용 불후의 고전 총설

## Summary

전기 저항식 센서(Strain Gauge) 및 진동현 센서가 겪는 전자기 노이즈 간섭(EMI), 장기 드리프트(Drift), 신호 감쇠 및 가혹한 야외 환경 하 단선 결함을 원천 극복하고, 대형 인프라 구조물의 100년 생애주기 안전성을 실시간 감시하기 위해, **광섬유 브래그 격자(FBG: 점 센서), 광섬유 패브리-페로 간섭계(Extrinsic Fabry-Perot Interferometer: EFPI), 장게이지 광섬유 센서(SOFO) 및 수십 km 연속 분산형 브릴루앙/라만 산란 센서(BOTDA/ROTDR)**의 광학적 작동 원리, 콘크리트 매립 캡슐화 패키징 기술, 글로벌 대형 인프라 실구조물(홍콩 칭마대교, 팅카우대교, 캐나다 컨페더레이션 대교, 중국 삼협 댐) 적용 사례를 전면 집대성한 **중국 대련이공대학교 Hong-Nan Li 석좌교수 및 미국 휴스턴 대학교 Gang-Bing Song 교수** 연구팀의 Engineering Structures 2004년 불후의 최고 랜드마크 고전 총설 논문.

## Key Contributions

1. **토목 인프라 전용 4대 광섬유 센서 시스템 체계적 분류 및 원리 수식화**:
   - FBG 파장 변조 센서, EFPI 위상 간섭 센서, 광강도 변조 센서, 분산형 브릴루앙 산란 센서의 장단점 및 측정 범위($\pm 5000\ \mu\varepsilon$)를 정밀 비교.
2. **콘크리트 타설 압력 및 수화열로부터 광섬유를 보호하는 매립 패키징 기술 총괄**:
   - 취약한 실리카 코어 광섬유를 금속 튜브(Stainless Steel Tube) 및 탄소섬유 복합재(FRP Smart Rebar) 내부에 밀봉하는 스마트 구조재 일체화 기법을 제시.
3. **대규모 글로벌 장대 교량 및 댐 SHM 프로젝트 모니터링 성과 종합 분석**:
   - 홍콩 칭마대교(Tsing Ma Bridge: 500개 이상 FBG 센서망), 삼협 댐 콘크리트 수화열 및 응력 계측 데이터를 분석하여 전자기파 면역성과 20년 이상 영구 안정성을 입증.
4. **미래 스마트 구조물(Smart Structures) 및 광학 자가진단 인프라 비전 확립**:
   - 다중화(Multiplexing) 기술을 통해 1가닥의 광섬유 케이블로 수백 개 지점의 변형률, 온도, 진동, 균열 개구를 동시 추적하는 모니터링 패러다임을 확립.

## Methods

- **센서 광학 메커니즘 분석 (Sections 2~3 & Figs. 1~6)**:
  - FBG 센서: 브래그 반사 파장 $\lambda_B = 2 n_{eff} \Lambda$, 변형률/온도 감도 $\Delta\lambda_B / \lambda_B = (\alpha + \xi)\Delta T + (1 - P_e)\Delta\varepsilon$.
  - EFPI 센서: 간섭 공진 공동 길이 $s$의 변화 위상 $\phi = 4\pi s / \lambda$.
  - BOTDA 분산형 센서: 음향 포논 상호작용 브릴루앙 주파수 천이 $\nu_B = 2 n v_a / \lambda_0$.
- **현장 실증 데이터베이스 (Sections 4~6 & Tables 1~3 & Figs. 7~14)**:
  - 교량 구조: 사장교, 현수교, PSC 거더교 (변형률, 처짐, 케이블 장력).
  - 댐 및 터널: 콘크리트 중력댐, 수압 터널 (수화열 온도 분포, 누수 지반 변위).

## Results

### 1. 주요 토목 광섬유 센서 종류별 측정 방식, 공간 분해능, 다중화 용량 및 환경 내구성 비교표 (Section 3 & Tables 1~2 & Figs. 15~20)

| 광섬유 센서 종류 | 센싱 작동 원리 | 측정 물리량 | 공간 계측 범위 | 측정 분해능 | 다중화 용량 (1가닥 케이블당) | 토목 환경 내구성 및 장점 |
|---|---|---|---|---|---|---|
| **FBG 센서 (광격자)** | **반사 파장 천이 ($\Delta\lambda_B$)** | **변형률, 온도, 동적가속도** | **국소 점 계측 (10mm)** | **$\pm 1.0\ \mu\varepsilon, 0.1\ ^\circ\text{C}$** | **$30\sim 100$ 개소 (WDM)**| **EMI 완전면역, 절대치 계측** |
| **EFPI 센서 (간섭계)** | 패브리-페로 광위상차 | 정적/동적 미세변형률 | 초국소 점 계측 (5mm) | $\pm 0.1\ \mu\varepsilon$ (초고정밀) | $1\sim 5$ 개소 | 온도 간섭 배제 우수 |
| **SOFO 센서 (장게이지)**| 저간섭 마이켈슨 간섭계 | 장구간 평균 변형률, 처짐 | 장구간 계측 ($1\sim 10\text{m}$) | $\pm 2.0\ \mu\text{m}$ | $10\sim 20$ 개소 | 콘크리트 균열 적분 평균화 |
| **BOTDA (분산형)** | **브릴루앙 산란 주파수 천이**| **연속 변형률 및 온도 분포**| **연속 분산 계측 ($10\sim 50\text{km}$)**| **$\pm 10\ \mu\varepsilon, 1.0\ ^\circ\text{C}$** | **수만 개 가상 센서 (연속)**| **초장대 파이프라인/터널 최적** |

### 2. 센서 패키징 및 장기 계측 신뢰도 해석
- **온도-변형률 분리 보상(Temperature Compensation)**: 기준 무응력 더미 FBG 센서를 쌍으로 배치하여 온도에 의한 팽창 드리프트를 $100\%$ 상쇄.
- **가혹한 알칼리/수분 환경 차단**: 특수 테프론/스테인리스 튜브 캡슐화로 수화열($80\ ^\circ\text{C}$) 및 강염기성($\text{pH} > 13$) 콘크리트 내부에서도 20년 이상 광섬유 열화를 원천 방지.

- **종합 결론**: 본 논문은 Hong-Nan Li 교수 연구팀이 토목 인프라를 위한 광섬유 센서(FBG/EFPI/BOTDA)의 작동 원리, 패키징 기술 및 글로벌 대형 교량·댐 모니터링 사례를 집대성하여 스마트 구조물 및 SHM 공학의 불후의 최고 교과서적 표준이 된 랜드마크 고전 총설 논문임.

## Related Notes

- [[chan-2006-fiber-bragg-grating-sensors-bridge-shm]] — FBG 교량 SHM 불후의 고전.
- [[kim-2015-sensor-type-pc-strand-embedded-fbg-sensor]] — KICT FBG 스마트 PC 강연선 랜드마크.
- [[kim-2017-enhanced-strain-measurement-range-fbg-sensor-steel-strands]] — 이방연 교수: FBG 대변형률 계측 랜드마크.
- [[concrete-durability-and-service-life]] — 구조물 스마트 유지관리 및 SHM 체계.
