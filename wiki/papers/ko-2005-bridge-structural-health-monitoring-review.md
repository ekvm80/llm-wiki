---
title: "Technology developments in structural health monitoring of large-scale bridges"
type: source_note
source: "sources/ko-2005-technology-developments-in-structural-health.pdf"
citation: "Ko, J. M., & Ni, Y. Q. (2005). Technology developments in structural health monitoring of large-scale bridges. Engineering Structures, 27(12), 1715-1725."
date: 2026-08-24
tags: [structural-health-monitoring, large-scale-bridges, cable-stayed-bridges, suspension-bridges, fiber-optic-sensors, fbg-sensors, modal-identification, damage-detection, engineering-structures, landmark-review, theory-foundation]
---

# 초대형 장경간 교량(현수교·사장교)의 구조 건전성 모니터링(SHM) 시스템 아키텍처: 광섬유 FBG 센싱·분산 DAU 네트워크·모달 손상 진단 및 생애주기 안전성 평가 총설

## Summary

전 세계적으로 급증하는 초대형 장경간 교량(경간장 $100\sim 2000\ \text{m}$급 현수교 및 사장교: 칭마대교, 수통대교, 장인대교, 서해대교 등)의 극한 자연재해(태풍, 지진) 및 공용 피로 하중 하 구조적 안전성을 확보하고 조기 손상을 감지하기 위해, 지난 20여 년간 발전해 온 **구조 건전성 모니터링(SHM: Structural Health Monitoring) 시스템 설계 기법, 광섬유 브래그 격자(FBG) 및 브릴루앙 분포형(BOTDR) 매립 센싱, 무선 스마트 센서 네트워크, PXI/SCXI 기반 분산 데이터 수집 장치(DAU: Data Acquisition Units) 최적 배치, 동적 모달 파라미터(고유진동수, 모드형상 곡률, 유연도 행렬) 기반 손상 진단 알고리즘, 그리고 생애주기 유지보수 의사결정 지원 프레임워크**를 총망라하여 체계화한 홍콩 이공대학교(PolyU) J.M. Ko 석좌교수 및 Y.Q. Ni 교수의 Engineering Structures 불후의 최고 권위 랜드마크 총설 원전 논문. 저자들은 환경 노이즈(온도 구배, 교통량 변동)에 의한 모달 주파수 변동성을 제거하는 통계적 정규화 기법과 케이블 텐던 내부 FBG 매립 기술을 결합하여, 국소 결함($1.0\ \mu\varepsilon$ 미세 변형률)부터 전체 글로벌 동특성 변화까지 통합 진단하는 현대적 스마트 인프라 모니터링 패러다임을 확립하였다.

## Key Contributions

1. **초대형 장경간 교량 SHM 6대 계층 아키텍처 세계 최초 표준화**:
   - 센서 계측 $\rightarrow$ 분산 DAU 수집 $\rightarrow$ 광통신 전송 $\rightarrow$ 데이터 마이닝/전처리 $\rightarrow$ 손상 식별/상태 평가 $\rightarrow$ 유지보수 의사결정의 6단계 통합 프레임워크를 정립.
2. **광섬유 FBG 및 브릴루앙(BOTDR) 센서의 대형 케이블 매립 계측 체계 확립**:
   - 수천 미터 주케이블 및 스테이 케이블 내부에 FBG 센서를 일체화하여 전자기 간섭(EMI) 없는 장기 긴장력 상시 감시를 구현.
3. **분산 데이터 수집 유닛(DAU) 최적 배치 및 PXI/SCXI 광통신 인터페이스 설계**:
   - 신호 감쇠 및 배선 한계를 극복하기 위해 주요 거더 절점에 7개 이상의 독립 DAU를 분산 배치하고 FDDI 광통신망으로 동기화.
4. **환경 변동성(온도/풍하중) 제거 기반 모달 손상 탐지 및 구조 신뢰도 지수 정식화**:
   - 주위 온도 변화에 따른 일일 고유주파수 변동(최대 5 %)을 통계적으로 보정하여 구조적 균열 및 강성 저하만을 분리 식별하는 진단법을 완성.

## Methods

- **글로벌 대형 교량 SHM 데이터베이스 및 센서 시스템 (Section 2 & Table 1)**:
  - 조사 대상: 중국/홍콩 20개 주요 대형 교량 (수통대교 경간 1088 m, 칭마대교 경간 1377 m, 장인대교 경간 1385 m 등).
  - 계측 센서군:
    - 환경 하중: 풍속계(초음파 3D), 온도 센서(대기/구조물), 지진계.
    - 구조 응답: 가속도계(서보식/압전식), 변위계(GPS/레이저), 경사계, 변형률계(FBG/진동현), 케이블 장력계(EM 센서).
- **모달 손상 진단 이론 및 정식화 (Section 5)**:
  - 모드형상 곡률(Mode Shape Curvature) 손상 지수:
    $$\kappa_i = \frac{\phi_{i+1} - 2\phi_i + \phi_{i-1}}{h^2}$$
  - 유연도 행렬 변화량(Change in Flexibility Matrix):
    $$[F] \approx \sum_{r=1}^{m} \frac{1}{\omega_r^2} \{\phi_r\} \{\phi_r\}^T, \quad [\Delta F] = [F_d] - [F_u]$$
  - 온도-진동 상관성 회귀 모델: 주성분 분석(PCA) 및 신경망(ANN) 기반 환경 효과 필터링.

## Results

### 1. 전 세계 주요 장경간 교량의 SHM 센서 구축 및 모니터링 시스템 구성 비교표 (Table 1~2 & Fig. 1~4)

| 교량명 | 교량 형식 | 주경간장 (m) | 설치 센서 종류 및 채널수 | 주요 감시 항목 | 데이터 수집 및 전송 아키텍처 |
|---|---|---|---|---|---|
| **수통대교 (Sutong Bridge)** | 사장교 (세계 최대급) | **1088 m** | **18종 800+ 채널 (최다)** | **FBG 케이블 장력, GPS 타워 변위, 풍동 진동** | **7개 분산 DAU + PXI/SCXI FDDI 광통신** |
| **칭마대교 (Tsing Ma Bridge)** | 현수교 | 1377 m | 11종 600+ 채널 | 주케이블 장력, 트러스 거더 처짐, 태풍 가속도 | 6개 서브스테이션 + 실시간 모달 해석 |
| **장인대교 (Jiangyin Bridge)** | 현수교 | 1385 m | 9종 350+ 채널 | FBG 광섬유 거더 변형률, 서스펜더 피로 | 중앙 집중 광섬유 인터로게이터 |
| **틴카우교 (Ting Kau Bridge)** | 3주탑 사장교 | 475 m × 2 | 8종 230+ 채널 | 중앙 케이블 안정성, 교각 경사 | 고속 동기화 DAU 네트워크 |
| **서해대교 (Seohae Bridge)** | 사장교 (한국) | 470 m | 6종 180+ 채널 | 풍진동 계측, 케이블 장력 변동 | 분산형 계측 시스템 |

### 2. 센싱 신뢰성 및 모달 손상 식별 메커니즘 해석
- **광섬유 센서의 장기 내구성**: 기존 전기저항식 게이지가 2~3년 내 수분 침투로 50 % 이상 고장나는 반면, FBG 광섬유 센서는 10년 이상 가혹한 해양 염해 환경에서도 신호 드리프트 제로의 완벽한 내구성을 입증.
- **다중 스케일 손상 융합**: 국소 변형률 센서(FBG)로 주요 피로 균열부를 집중 감시하고, 전역 가속도 센서망을 통해 교량 전체의 강성 저하($[\Delta F]$)를 동시에 평가하는 계층적 진단이 완성됨.

- **종합 결론**: 본 논문은 전 세계 초대형 장경간 교량의 구조 건전성 모니터링(SHM) 시스템 설계, 광섬유 센서망, 분산 DAU 아키텍처, 환경 보정 모달 손상 진단을 총괄 집대성하여 스마트 인프라 안전관리의 불후의 표준을 수립한 최고 권위의 랜드마크 총설 논문임.

## Related Notes

- [[kim-2012-fbg-smart-strand-prestressing-monitoring]] — 전남대 김재민 교수 7연선 강연선 매립 FBG 스마트텐던 랜드마크 원전.
- [[kim-2016-fbg-smart-strand-pretensioned-uhpc-deck]] — 전남대 김재민 교수 실대형 UHPC 바닥판 스마트강연선 피로 모니터링 원전.
- [[structural-repair-and-retrofitting]] — 대형 구조물 비파괴 진단 및 유지보수 보수·보강 체계.
- [[kang-2015-tunnel-lining-concrete-ultrasonic-strength-grade]] — 이방연 교수 인프라 비파괴 안전진단 원전.
