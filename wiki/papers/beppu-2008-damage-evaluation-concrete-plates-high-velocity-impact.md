---
title: "Damage evaluation of concrete plates by high-velocity impact"
type: source_note
source: "sources/beppu-2008-damage-evaluation-of-concrete-plates.pdf"
citation: "Beppu, M., Miwa, K., Itoh, M., Katayama, M., & Ohno, T. (2008). Damage evaluation of concrete plates by high-velocity impact. International Journal of Impact Engineering, 35(12), 1419-1426."
date: 2026-08-24
tags: [high-velocity-impact, concrete-plates, cratering, spalling, perforation-limit, projectile-impact, autodyn-simulation, masuhiro-beppu, int-j-impact-eng, landmark-paper]
---

# 고속 발사체($200\sim 500\ \text{m/s}$) 충돌 하 콘크리트 방호판의 국소 파괴 거동: 전면 크레이터, 배면 스폴링 팽창 및 완전 관통 한계(Perforation) 메커니즘

## Summary

군사 방호 시설, 원자력 발전소 격납건물 및 방폭 구조물의 대테러 고속 충격 방호 설계를 위해, **머쉬룸형 강재 발사체(질량 $50\ \text{g}$, 탄두 직경 $25\ \text{mm}$, 충격 속도 $v = 200\sim 500\ \text{m/s}$)를 다양한 두께($h = 30\sim 130\ \text{mm}$)의 실규모 콘크리트 판($500 \times 500\ \text{mm}$, 정적 압축강도 $25\ \text{MPa}$)**에 수직 충돌시키는 고속 가스건 발사 충격 실험과 **AUTODYN 3D 비선형 충격 유한요소 수치해석**을 수행하여 **충격 속도 $210\ \text{m/s}$에서는 전면 압축 크레이터(Cratering)만 발생하나 $310\ \text{m/s}$에서 충격 압축파의 배면 인장파 반사로 배면 스폴링(Spalling)이 전면 분화구보다 2배 이상 크게 팽창하며 $415\ \text{m/s}$에서 완전 관통(Perforation) 한계에 도달**함을 규명하고 판 두께-속도 파괴 한계선도를 수립한 **일본 방위대학교(National Defense Academy) Masuhiro Beppu 교수 및 Tomonori Ohno 교수** 연구팀의 International Journal of Impact Engineering 2008년 랜드마크 원전 논문.

## Key Contributions

1. **고속 비체($200\sim 500\ \text{m/s}$) 충돌 하 콘크리트 3대 국소 파괴 모드 정량화**:
   - 1) 전면 크레이터링(Cratering), 2) 배면 스폴링(Spalling), 3) 완전 관통(Perforation)의 임계 전이 속도를 판 두께별로 완벽히 매핑.
2. **배면 스폴링의 응력파 반사 메커니즘 실증**:
   - 발사체 충돌로 유입된 고압 압축 응력파가 콘크리트 배면 자유단에서 인장 응력파로 위상 반사되어 콘크리트 동적인장강도를 초과함으로써 광대한 배면 파편 박리를 유발함을 규명.
3. **AUTODYN 3D RHT 콘크리트 손상 모델의 검증**:
   - 전단 파손, 변형률 속도 의존성, 잔류 마찰을 고려한 RHT 구성방정식이 고속 충격 파편 비산 체적을 $90\%$ 이상의 정확도로 모사함을 검증.
4. **수정 NDRC 방호 설계 공식의 한계 보정**:
   - 탄두 형상이 머쉬룸형으로 변형되는 고속 영역에서 기존 미 국방부(NDRC) 관통 한계식의 과소평가 오차를 보정하는 신뢰성 공식을 제시.

## Methods

- **발사 실험 시스템 및 시편 제원 (Section 2 & Figs. 1~3)**:
  - 고압 압축 가스건: 발사 튜브 길이 $2.0\ \text{m}$, 광학 레이저 속도 센서 장착.
  - 발사체: 고강도 강재 머쉬룸형 탄체 (질량 $50\ \text{g}$, 직경 $25\ \text{mm}$, MC901 나일론 사보).
  - 콘크리트 판: $500 \times 500\ \text{mm}$ (두께 $h = 30, 40, 60, 80, 100, 130\ \text{mm}$, 압축강도 $25.0\ \text{MPa}$).
  - 속도 영역: $v = 200\sim 500\ \text{m/s}$ (충격 운동에너지 $1.0\sim 6.25\ \text{kJ}$).
- **수치해석 시뮬레이션 (Section 4 & Figs. 7~10)**:
  - Hydrocode: AUTODYN 3D (Euler-Lagrange FSI 연성, RHT Concrete Model).

## Results

### 1. 충격 속도 및 판 두께별 콘크리트 판의 파괴 모드, 크레이터 및 스폴링 치수 비교표 (Section 3 & Tables 1~3 & Figs. 4~6)

| 판 두께 ($h$, mm) | 충격 속도 ($v$, m/s) | 충격 운동에너지 ($E_k$, kJ) | 전면 크레이터 직경 ($D_{c}$, cm) | 배면 스폴링 직경 ($D_{s}$, cm) | 관통 여부 (Perforation) | 주요 국소 파괴 메커니즘 |
|---|---|---|---|---|---|---|
| **$80\ \text{mm}$** | **$210\ \text{m/s}$** | **$1.10\ \text{kJ}$** | **$10.0 \pm 0.5\ \text{cm}$** | **$0.0\ \text{cm}$ (무손상)** | 미관통 (No) | 전면 국소 압축 크레이터링 |
| **$80\ \text{mm}$** | **$310\ \text{m/s}$** | **$2.40\ \text{kJ}$** | **$13.5 \pm 0.8\ \text{cm}$** | **$18.5 \pm 1.2\ \text{cm}$ (대형)** | 미관통 (No) | **배면 인장파 반사 스폴링 발생** |
| **$80\ \text{mm}$** | **$415\ \text{m/s}$** | **$4.30\ \text{kJ}$** | **$16.0 \pm 1.0\ \text{cm}$** | **$24.0 \pm 1.5\ \text{cm}$ (완전박리)**| **관통 발생 (Yes)** | **전단 플러깅 및 관통 분화구** |
| **$130\ \text{mm}$ (후판)** | **$485\ \text{m/s}$** | **$5.88\ \text{kJ}$** | **$18.5 \pm 1.2\ \text{cm}$** | $12.0 \pm 1.0\ \text{cm}$ | 미관통 (No) | 심부 관입 및 경미 스폴링 |

### 2. 동적 파동 전파 및 전단 플러깅(Shear Plugging) 해석
- **충격파 반사 인장 응력 집중**: 압축 충격파가 배면 자유단에서 반사되어 형성된 인장 응력이 콘크리트 동적인장강도($\approx 5\ \text{MPa}$)를 5배 이상 상회하여 원뿔형 스폴링 블록을 이탈시킴.
- **섬유 보강의 필요성 도출**: 일반 콘크리트의 취약한 스폴링을 방지하기 위해서는 강섬유나 고연성 PVA 섬유를 보강하여 배면 파편 비산을 봉합해야 함을 명확히 시사.

- **종합 결론**: 본 논문은 일본 방위대학교 Masuhiro Beppu 교수가 고속 발사체 충돌 하 콘크리트 판의 3대 국소 파괴 메커니즘과 배면 스폴링 팽창 법칙을 규명하고 방호 구조설계의 한계 관통 기준을 정립한 방호공학 분야의 최고 권위 랜드마크 원전 논문임.

## Related Notes

- [[chun-2024-rc-beams-impact-resistance-hpfrcc]] — 유두열 교수: HPFRCC 낙추 충격 저항성 랜드마크.
- [[ranade-2017-impact-resistance-high-strength-high-ductility-concrete]] — Victor Li: HSHDC 충격 배면스폴링 제로 랜드마크.
- [[nam-2017-blast-resistance-frcc-panels-contact-explosion]] — 김규용 교수: FRCC 접촉폭발 방폭 랜드마크.
- [[high-strength-strain-hardening-composites]] — 고강도 방호 복합체 체계.

