---
title: "Impact Resistance of UHPC Panels Subjected to Projectile Impact (Zhang et al., 2022)"
type: source_note
source: "sources/zhang-2022-impact-resistance-of-ultra-high-performance.pdf"
citation: "Zhang, S., Wu, C., & Li, J. (2022). Impact resistance of ultra-high performance concrete panels subjected to high-velocity projectile impact. International Journal of Impact Engineering, 160, 104068. https://doi.org/10.1016/j.ijimpeng.2021.104068"
date: 2026-08-24
tags:
  - uhpc-panels
  - projectile-impact
  - ballistic-resistance
  - steel-fiber
  - penetration-depth
  - scabbing-prevention
---

## Summary
방호 벙커 및 중요 기반시설의 고속 발사체 방호 능력을 극대화하기 위해, 초고강도 강섬유 보강 콘크리트(UHPC, $f_c = 155 MPa$, 강섬유 $V_f = 2.0 \sim 3.0 \%$) 패널($500 \times 500 \times 50 \sim 100 mm$)의 고속 철갑 탄환(12.7 mm AP 발사체, $v = 850 m/s$) 충돌 하중 하에서의 관입 깊이(Penetration Depth), 전면 분화구(Crater) 직경, 배면 박락(Scabbing) 한계 두께 및 관통 저항성을 실탄 가스건 실험과 3차원 유한요소 충돌 시뮬레이션(LS-DYNA)으로 호주 그리피스 대학교 우청(C. Wu) 교수 연구팀이 규명한 연구이다. 강섬유 2.5 vol % 보강 UHPC 패널이 보통 콘크리트 대비 관입 깊이를 **72 %** 저감하고 75 mm 두께에서 $850 m/s$ 탄환의 배면 파편 비산을 100 % 완벽 차단함을 실증하였다.

## Key Contributions
- **$850 m/s$ 초고속 발사체 충돌 하 UHPC 국소 탄착 손상 법칙 수립**: 관입 깊이 $H = 22.5 mm$로 축소.
- **강섬유 체적분율($V_f = 1.5 \sim 3.0 \%$)에 따른 배면 박락 한계 두께($h_{sc}$) 정량화**: $h_{sc}$를 220 mm에서 75 mm로 66 % 박판화.
- **LS-DYNA RHT 및 Johnson-Holmquist 콘크리트 손상 모델 매개변수 완성**: 충돌 해석 오차율 5 % 이내 달성.
- **국방 방호 패널 및 원전 격납 차폐벽 슬림화 설계 기준 제시**: 방호 구조물 자중 60 % 절감 실현.

## Methods
- 재료: UHPC ($f_c = 155 MPa$, 마이크로 직선 강섬유 $L_f = 13 mm, d_f = 0.2 mm, V_f = 2.5 \%$).
- 패널 두께: $t = 50, 75, 100 mm$ ($500 \times 500 mm$).
- 시험: 12.7 mm 철갑탄 (질량 48 g, 탄속 $850 \pm 15 m/s$), 고속 레이저 속도계, 3D 광학 레이저 스캐너.

## Results
- UHPC 패널 두께별 12.7 mm 철갑탄 충돌 손상 데이터:

| 재료 구분 | 패널 두께 (mm) | 충돌 탄속 ($m/s$) | 관입 깊이 (mm) | 전면 크레이터 직경 (mm) | 배면 박락 직경 (mm) | 관통 여부 |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| 보통 콘크리트 (NC) | 100 mm | 850 | 관통 | 320 | 450 (대형 파쇄) | 완전 관통 파괴 |
| UHPC (Steel 2.5 %) | 50 mm | 850 | 28.5 | 110 | 185 (미세 박락) | 비관통 (배면 손상) |
| **UHPC (Steel 2.5 %)** | **75 mm** | **850** | **22.5** | **95** | **0.0 (무손상)** | **비관통 (배면 완전 무손상)** |
| **UHPC (Steel 2.5 %)** | **100 mm** | **850** | **18.5** | **88** | **0.0 (무손상)** | **비관통 (완벽 방호)** |

## Related Notes
- [[wang-2016-hpfrcc-projectile-impact-resistance]] - HPFRCC 발사체 충격 저항
- [[yankelevsky-1997-slab-missile-impact]] - 발사체 충격 이론 모델
- [[impact-and-blast-resistance-frcc]] - 내충격 방호 복합체 설계 이론
