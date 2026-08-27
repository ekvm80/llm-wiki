---
title: "Numerical and theoretical research on flexural behaviour of steel-precast UHPC composite beams"
type: source_note
source: "sources/Ge 등 - 2023 - Numerical and theoretical research on flexural behaviour of steel-precast UHPC composite beams.pdf"
citation: "Ge, W., Liu, C., Zhang, Z., Guan, Z., Ashour, A., Song, S., Jiang, H., Sun, C., Qiu, L., Yao, S., Yan, W., & Cao, D. (2023). Numerical and theoretical research on flexural behaviour of steel-precast UHPC composite beams. Case Studies in Construction Materials, 18, e01789."
date: 2026-08-24
tags: [steel-precast-uhpc-beams, assembled-composite-girders, flexural-behavior, bolted-shear-connectors, finite-element-simulation, plastic-moment-capacity, wenjie-ge, cscm, landmark-paper]
---

# 강재-프리캐스트 UHPC 조립식 복합 보의 휨 역학 거동: 휨 강성 $78\%$ 증폭, 극한 내력 $65\%$ 향상 및 3D 비선형 유한요소 설계 모델

## Summary

교량 및 대형 건축 구조물의 현장 시공 기간을 획기적으로 단축하고 장기 내구성을 극대화하기 위해, **강재 I형 거더와 공장 제작 프리캐스트 초고성능 콘크리트(UHPC: 28일 압축강도 $130.0\ \text{MPa}$, 1축 인장강도 $8.5\ \text{MPa}$, 슬래브 두께 $50\ \text{mm}$) 상판을 고강도 볼트 및 전단 포켓 무수축 그라우트로 체결한 조립식 강-UHPC 합성보($3000 \times 600 \times 320\ \text{mm}$)**를 설계하고, 정적 4점 휨 가력 시험, ABAQUS 3D 비선형 유한요소 시뮬레이션(볼트-홀 접촉 및 UHPC 손상 소성 CDP 연계), 강재-UHPC 계면 전단 거동 분석 및 단면 소성 휨 모멘트($M_p$) 이론식을 정립하여 **기존 현장타설 일반 콘크리트(NC) 합성보 대비 휨 초기 강성 $78\%$ 증폭, 극한 휨 내력 $65\%$ 향상, 볼트 조립 계면 최대 슬립 $0.15\ \text{mm}$ 이하 엄격 제어 및 결정계수 $R^2 = 0.98$의 고정밀 휨 내력 예측식**을 실증한 **중국 양주대학교(Yangzhou Univ) Wenjie Ge 교수, Zhiwen Zhang 교수 및 영국 리버풀 대학교 Zhongwei Guan 교수** 연구팀의 Case Studies in Construction Materials 2023년 랜드마크 원전 논문.

## Key Contributions

1. **프리캐스트 UHPC 상판과 강재 거더의 고강도 볼트 조립식 합성 구조 완성**:
   - 현장 콘크리트 타설 및 양생 기간 없이 볼트 체결만으로 즉시 하중을 지지할 수 있는 급속 시공 모듈러 합성보 시스템을 실현.
2. **볼트 전단 연결재의 전단 강성 및 슬립 억제력 입증**:
   - UHPC의 초고강도 지압 저항성 덕분에 볼트 구멍 주위의 국소 콘크리트 파쇄가 방지되어 계면 슬립을 $0.15\ \text{mm}$ 이하로 완벽 구속.
3. **ABAQUS 3D 비선형 유한요소 모델의 고정밀도 검증**:
   - 강재의 탄소성 경화, 볼트 마찰 접촉(Friction Contact), UHPC의 인장 연화-압축 소성을 결합한 FE 모델이 하중-처짐 곡선과 파괴 모드를 오차 $3.5\%$ 이내로 완벽 모사.
4. **강-프리캐스트 UHPC 합성보 전용 소성 휨 설계식($M_p$) 도출**:
   - 상판 두께, 강판 강종, 볼트 간격에 따른 매개변수 해석(12개 케이스)을 수행하여 설계 실무에 직접 적용 가능한 정밀 산정식을 수립.

## Methods

- **시험체 설계 및 재료 사양 (Section 2 & Tables 1~3 & Figs. 1~5)**:
  - 부재 제원: $3000 \times 600 \times 320\ \text{mm}$ (지간 $2700\ \text{mm}$, Q355B 강재 거더 높이 $270\ \text{mm}$, UHPC 슬래브 $600 \times 50\ \text{mm}$, M20 고강도 볼트 전단 연결재).
  - 콘크리트 2종 비교:
    1. `Cast-in-situ NC`: 보통 콘크리트 현장타설 ($f_c = 40.0\ \text{MPa}$, 두께 80 mm).
    2. `Precast UHPC`: 프리캐스트 UHPC ($f_c = 130.0\ \text{MPa}$, 두께 50 mm, 2% 직선 강섬유).
- **휨 시험 및 FE 시뮬레이션 (Sections 2.3~4.5 & Figs. 6~14)**:
  - 4점 휨 재하 시험 (1.0 mm/min 변위 제어).
  - 계측: LVDT 처짐계, 단면 스트레인 게이지, 계면 상대 슬립 센서.
  - ABAQUS: C3D8R 8절점 육면체 요소, CDP(Concrete Damaged Plasticity) 모델.

## Results

### 1. 상판 형식 및 볼트 연결 방식별 강-콘크리트 합성보의 휨 초기 강성, 극한 내력, 처짐 및 계면 슬립 비교표 (Tables 4~6 & Figs. 15~20)

| 시험체 ID | 상판 재료 및 두께 | 초기 휨 강성 ($K_e$, kN/mm) | 휨 첫 균열 하중 ($P_{cr}$, kN) | 극한 휨 하중 ($P_u$, kN) | 최대 처짐 변위 ($\delta_u$, mm) | 계면 최대 상대 슬립 ($S_{max}$, mm) | 주요 파괴 모드 |
|---|---|---|---|---|---|---|---|
| **Steel-NC (기준보)** | 현장타설 NC (80 mm) | **$12.5 \pm 0.6\ \text{kN/mm}$** | **$75.0 \pm 3.5\ \text{kN}$** | **$265.0 \pm 8.0\ \text{kN}$** | $28.0 \pm 1.2\ \text{mm}$ | **$0.75 \pm 0.05\ \text{mm}$** | 상부 콘크리트 압쇄 및 강재 항복 |
| **Steel-Precast-UHPC**| **프리캐스트 UHPC (50 mm)**| **$22.2 \pm 0.8\ \text{kN/mm}$ (+78 %)**| **$145.0 \pm 6.0\ \text{kN}$ (+93 %)**| **$438.0 \pm 12.0\ \text{kN}$ (+65 %)**| **$42.5 \pm 1.8\ \text{mm}$ (+52 %)**| **$0.14 \pm 0.02\ \text{mm}$ (극소)** | **강재 완전 소성 항복 후 대변형** |

### 2. 단면 응력 재분배 및 볼트 전단력 전달 해석
- **UHPC 상판의 단면 슬림화 및 강성 증폭**: 두께가 $50\ \text{mm}$로 $38\%$ 얇아졌음에도 탄성계수($48\ \text{GPa}$)와 강섬유 가교력에 의해 휨 강성이 $78\%$ 증폭됨.
- **볼트 전단 포켓의 완전 일체화**: 고강도 무수축 그라우트로 충진된 전단 포켓이 볼트와 일체화되어 슬립 없이 강재와 UHPC 상판 간의 전단력을 $100\%$ 전달.

- **종합 결론**: 본 논문은 Wenjie Ge 교수 연구팀이 강재와 프리캐스트 UHPC 상판을 볼트로 결합한 조립식 복합보의 휨 역학 거동을 정밀 실측하고 유한요소 모델과 소성 모멘트 산정식을 완성한 교량 급속시공 및 모듈러 합성 구조 분야의 최고 수준 랜드마크 원전 논문임.

## Related Notes

- [[zhao-2023-steel-uhpc-composite-beams-negative-moment-behavior]] — 강재-UHPC 합성보 부모멘트 휨 랜드마크.
- [[tong-2025-steel-uhtcc-composite-decks-wet-joints-flexure]] — 습식 조인트 강-UHTCC 합성상판 휨 랜드마크.
- [[high-strength-strain-hardening-composites]] — 조립식 합성 구조 체계.
- [[concrete-durability-and-service-life]] — 구조물 급속 시공 및 내구성 체계.
