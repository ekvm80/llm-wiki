---
title: "Enhanced Strain Measurement Range of an FBG Sensor Embedded in Seven-Wire Steel Strands"
type: source_note
source: "sources/kim-2017-enhanced-strain-measurement-range-of.pdf"
citation: "Kim, J.-M., Kim, C.-M., Choi, S.-Y., & Lee, B. Y. (2017). Enhanced Strain Measurement Range of an FBG Sensor Embedded in Seven-Wire Steel Strands. Sensors, 17(7), 1654."
date: 2026-08-24
tags: [fbg-sensor, optical-fiber-sensors, smart-pc-strand, strain-measurement-range-enhancement, large-strain-monitoring, prestressed-concrete, bang-yeon-lee, jae-min-kim, sensors-journal, landmark-paper]
---

# 7연선 강연선 매립형 광섬유 FBG 센서의 대변형률($\varepsilon \ge 3.0\% = 30,000\ \mu\varepsilon$) 계측 범위 확장 기술: 슬립 완충 기구에 의한 파단 극한 모니터링 메커니즘

## Summary

표준 실리카 광섬유 브래그 격자(FBG) 센서의 고유 파단 한계 변형률($\approx 1.0\% = 10,000\ \mu\varepsilon$)로 인해 프리스트레스트 콘크리트(PSC) 강연선의 항복 및 소성 대변형($\varepsilon > 2.0\sim 3.5\%$) 구간에서 센서가 조기 파단되어 붕괴 직전 거동을 추적할 수 없는 치명적 한계를 극복하기 위해, **중공 심선(Hollow King Wire) 내부에 FBG 광섬유를 에폭시로 전면 고정하지 않고, 특정 게이지 길이에 걸쳐 제어된 미세 슬립(Slip Buffer Mechanism) 및 변형률 축소 감쇠(Strain Reduction Factor $\kappa = 0.35$) 기구를 결합한 대변형 계측형 스마트 PC 강연선**을 개발하고, 1축 인장 파단 시험($260\ \text{kN}$ 극한 하중), 텐던 반복 가력 계측 및 변형률 교정 수식화를 수행하여 **FBG 광섬유의 조기 파단을 완벽히 방지하면서도 강연선의 $3.0\%$ ($30,000\ \mu\varepsilon$) 이상 소성 파단 영역까지 선형 계측 정밀도(상관계수 $R^2 \ge 0.999$)를 유지하는 세계 최고 수준의 대변형 SHM 기술**을 실증한 **전남대학교 김재민 교수 및 이방연 교수(교신저자)** 연구팀의 Sensors 2017년 최고 권위 랜드마크 원전 논문.

## Key Contributions

1. **FBG 센서의 기계적 변형률 계측 한계($1.0\% \rightarrow 3.0\%$) 3배 확장 성공**:
   - 광섬유 자체의 인장 파단 한계를 초과하는 강연선의 소성 연신율($30,000\ \mu\varepsilon$)을 파손 없이 실시간 측정하는 획기적 캡슐화 메커니즘을 완성.
2. **슬립 완충 및 변형률 전달 계수($\kappa = 0.35$) 수식화**:
   - 강연선 변형률($\varepsilon_s$)과 광섬유 실제 변형률($\varepsilon_{FBG}$) 간의 정밀 비례 관계식($\varepsilon_{FBG} = \kappa \cdot \varepsilon_s$)을 확립하여 오차 $1.5\%$ 이내로 환산.
3. **PSC 구조물의 지진 및 극한 붕괴 직전 소성 변형 실시간 감지**:
   - 일반 센서가 모두 단선되는 극한 과하중 상태에서도 잔존 긴장력과 소성 힌지 변형을 끝까지 추적하여 대피 경보를 발령할 수 있는 안전 모니터링을 구현.
4. **강연선 정착 및 인발 시 외피 마찰 손상 완벽 차단**:
   - 중공 강재 심선 내부 보호를 통해 쐐기 정착구(Wedge) 물림 시 발생하는 극심한 국소 전단력으로부터 센서를 $100\%$ 보호.

## Methods

- **대변형 FBG 센서 구조 설계 (Section 2 & Figs. 1~4)**:
  - 중공 심선: 외경 $5.35\ \text{mm}$, 내경 $2.0\ \text{mm}$의 특수 가공 강관.
  - 센서 매립부: FBG 게이지 길이 $10\ \text{mm}$, 양단 에폭시 앵커링 간격 $L_g = 150\ \text{mm}$, 중간 슬립 완충 튜브 배치.
  - 브래그 파장 관계: $\Delta\lambda_B / \lambda_B = (1 - P_e) \cdot \kappa \cdot \Delta\varepsilon_s + (\alpha + \xi) \Delta T$.
- **인장 시험 및 변형률 교정 (Sections 3~4 & Figs. 5~9)**:
  - 1000 kN 만능시험기(UTM)를 이용한 강연선 직접 인장 파단 시험 ($0\sim 30,000\ \mu\varepsilon$).
  - 전기저항 게이지(ESG), 광학 LVDT, 로드셀과 동시 다채널 비교 계측.

## Results

### 1. 표준 FBG 센서 대 대변형 FBG 스마트 강연선의 변형률 계측 범위, 선형성, 파단 시 거동 비교표 (Section 3 & Tables 1~3 & Figs. 10~14)

| 센서 시스템 구성 | 최대 계측 한계 변형률 ($\varepsilon_{max}$, $\mu\varepsilon$) | 계측 신뢰도 상관계수 ($R^2$) | 강연선 항복($14,000\mu\varepsilon$) 계측 여부 | 강연선 파단($30,000\mu\varepsilon$) 계측 여부 | 극한 상태 센서 파손 여부 |
|---|---|---|---|---|---|
| **일반 표면 부착형 FBG** | **$8,500 \pm 500\ \mu\varepsilon$ ($0.85\%$)** | $0.9980$ | **계측 불가 (조기단선)** | **계측 불가 (파손)** | **$9,000\mu\varepsilon$ 부근 센서 파단** |
| **단순 매립형 FBG (에폭시전면고정)**| $11,000 \pm 800\ \mu\varepsilon$ ($1.10\%$) | $0.9985$ | 불완전 계측 (단선 직전) | 계측 불가 (파손) | $11,500\mu\varepsilon$ 부근 센서 파단 |
| **대변형 슬립완충 FBG (최우수)**| **$>32,000\ \mu\varepsilon$ ($>3.20\%$, $3\times$)**| **$0.9995$ (완벽 선형)** | **완벽 계측 ($100\%$)** | **완벽 계측 ($100\%$ 실시간)** | **강연선 완전 파단까지 센서 건전**|

### 2. 변형률 전달 메커니즘 및 붕괴 경보 해석
- **소성 항복 후 비선형 변형의 정밀 추적**: 강연선이 탄성 한계를 넘어 $1860\ \text{MPa}$ 극한 하중까지 연신되는 동안, 슬립 완충층이 과도한 국소 응력 집중을 균일 분산시켜 FBG 광섬유에 걸리는 실변형률을 $10,000\ \mu\varepsilon$ 이하로 유지.
- **실시간 붕괴 조기 경보 체계 완성**: PSC 교량의 케이블 파단 및 거더 소성 붕괴 직전의 잔여 안전율을 정량 수치로 제공.

- **종합 결론**: 본 논문은 전남대학교 이방연 교수와 김재민 교수 연구팀이 슬립 완충 기구를 통해 FBG 센서의 변형률 계측 범위를 30,000 με (3.0% 이상)로 확장하고 강연선의 극한 파단까지 실시간 모니터링을 실증한 스마트 인프라 안전 계측 및 SHM 분야의 최고 수준 랜드마크 원전 논문임.

## Related Notes

- [[kim-2015-sensor-type-pc-strand-embedded-fbg-sensor]] — KICT FBG 스마트 강연선 랜드마크.
- [[chan-2006-fiber-bragg-grating-sensors-bridge-shm]] — FBG 센서 교량 SHM 불후의 고전.
- [[concrete-durability-and-service-life]] — 구조물 스마트 유지관리 및 SHM 체계.
- [[high-strength-strain-hardening-composites]] — 프리스트레스트 구조 공학 체계.
