---
title: "Tension Monitoring of a Prestressing Strand for Concrete Bridge Using In-Tendon FBG Sensors (Kim et al., 2010)"
type: source_note
source: "sources/Tension monitoring of a prestressing strand fo.pdf"
citation: "Kim, J. M., Kim, H. W., Kim, Y. S., & Park, Y. H. (2010). Tension monitoring of a prestressing strand for concrete bridge using in-tendon FBG sensors. In Bridge Maintenance, Safety, Management and Life-Cycle Optimization (pp. 3020-3026). CRC Press. https://doi.org/10.1201/b10430-413"
date: 2026-08-24
tags:
  - fbg-sensor
  - prestressing-strand
  - smart-strand
  - tension-monitoring
  - prestressed-concrete-bridge
  - shm
---

## Summary
프리스트레스트 콘크리트(PSC) 교량의 장기 공용 중 발생하는 PS 강연선의 유효 긴장력 손실(Prestress Loss)을 비파괴적으로 실시간 정밀 계측하기 위해, 7연선 강연선(7-wire steel strand)의 중심 강선(King wire) 내부에 광섬유 브래그 격자(Fiber Bragg Grating, FBG) 센서를 일체형으로 매립 패키징한 스마트 강연선(Smart Strand) 시스템을 개발하고, 인장 검교정 시험 및 실물 PSC 거더 도입 긴장력 장기 모니터링을 수행한 전남대학교 김정무 교수 연구팀과 한국도로공사의 대표 연구이다. 온도 보상형 2중 FBG 센서 설계를 통해 $1500 MPa$ 이상의 고인장 응력 하에서도 $99.5 \%$ 이상의 높은 선형 응답성과 $\pm 10 \mu\epsilon$ 이하의 정밀도를 확보함을 실증하였다.

## Key Contributions
- **중심 강선 홈 가공 및 광섬유 센서 보호 패키징 기술 개발**: 고온 에폭시 그라우팅을 통해 텐던 긴장 시 강선 간 압착 마찰 손상으로부터 FBG 센서를 완벽히 보호.
- **온도-변형률 교차 민감도 완전 보상 회로 구성**: 인장력을 받지 않는 독립 FBG 파장 필터를 동일 위치에 인접 배치하여 온도 변화($-20 \sim 60 °C$)에 따른 오차 100 % 제거.
- **실물 PSC 교량 거더 장기 긴장력 손실 추적 검증**: 정착부 쐐기 물림 슬립(Slip), 콘크리트 탄성변형, 건조수축 및 크리프에 의한 프리스트레스 손실 단계별 정량 분리 해석 성공.

## Methods
- 직경 15.2 mm 7연선 강연선 (인장강도 1860 MPa, 탄성계수 200 GPa).
- 중심 강선(King wire, 직경 5.2 mm)에 깊이 1.0 mm, 폭 1.0 mm의 종방향 미세 홈 가공 후 FBG 광섬유 센서 삽입 및 고강도 탄성 에폭시 접착 충전.
- 광학 계측 시스템: 광 파장 분할기(Interrogator, 파장 분해능 1 pm, 샘플링 속도 100 Hz).
- 만능재료시험기(UTM)를 통한 $0 \sim 200 kN$ 단계별 인장/제하 반복 검교정 시험.
- 실대형 $30 m$ PSC I형 거더 제작 시 스마트 강연선 배치 및 텐션 도입 모니터링.

## Results
- 긴장력 계측 및 성능 검증 데이터:

| 계측 항목 | 재래식 로드셀 (Load Cell) | 스마트 FBG 강연선 | 오차율 / 성능 비교 |
| :--- | :---: | :---: | :--- |
| 최대 도입 긴장력 (kN) | 195.4 | 194.8 | 오차 0.31 % 이내 일치 |
| 쐐기 정착 시 슬립 손실 (kN) | 12.8 | 12.5 | 손상 없이 실시간 캡처 |
| 장기 크리프/수축 손실 (28 d) | 측정 한계(장기 표동 발생) | 16.4 kN 정밀 계측 | 장기 안정성 확보 |
| 파장-변형률 선형성 ($R^2$) | - | 0.9998 | $0 \sim 10000 \mu\epsilon$ 구간 |
| 온도 보상 정밀도 ($pm/°C$) | - | $\Delta\lambda_{temp} = 10.2 pm/°C$ | 완벽 보상 달성 |

## Related Notes
- [[ye-2014-shm-civil-infrastructure-optical-fiber-sensing-review]] - 토목 인프라 광섬유 센싱 SHM 총설
- [[liaw-2007-c-band-tunable-lasers-fiber-bragg-grating]] - FBG 광섬유 레이저 계측 기술
- [[ndt-and-shm-of-cementitious]] - 시멘트 및 구조물 스마트 건전성 모니터링
