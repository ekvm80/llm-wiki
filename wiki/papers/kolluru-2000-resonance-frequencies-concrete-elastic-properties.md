---
title: "Determining Elastic Properties of Concrete Using Vibrational Resonance Frequencies of Standard Test Cylinders"
type: source_note
source: "sources/kolluru-2000-determining-elastic-properties-of-concrete.pdf"
citation: "Kolluru, S. V., Popovics, J. S., & Shah, S. P. (2000). Determining Elastic Properties of Concrete Using Vibrational Resonance Frequencies of Standard Test Cylinders. Cement, Concrete, and Aggregates, 22(2), 81-89."
date: 2026-08-24
tags: [dynamic-elastic-modulus, poisson-ratio, resonance-frequency, rayleigh-ritz-method, standard-concrete-cylinders, non-destructive-testing, astm-c215, surendra-shah, cement-concrete-and-aggregates, theory-foundation]
---

# 표준 원주형 콘크리트 공시체의 1·2차 종방향 진동 공진 주파수($f_1, f_2$) 및 3차원 레일리-리츠(Rayleigh-Ritz) 해석 기반 동탄성계수($E$)와 포아송비($\nu$) 동시 비파괴 측정 원전

## Summary

콘크리트 구조 부재의 균질성 평가, 초기 미세 균열 손상 진단 및 동적 구조 설계를 위해 필수적인 동탄성계수(Dynamic Young's Modulus, $E$)와 포아송비(Poisson's Ratio, $\nu$)를 단 한 번의 간편한 비파괴 충격 시험으로 동시 정밀 산출하기 위해, 표준 원주형 공시체($\phi 100\ \text{mm} \times 200\ \text{mm}$)의 자유단 종방향 충격-공진 신호에서 **1차($f_1$) 및 2차($f_2$) 종방향 고유진동수(Resonance Frequencies)를 고속 푸리에 변환(FFT)으로 추출하고, 유한체 3차원 탄성 역학 기반 레일리-리츠(Rayleigh-Ritz) 수치해석 2차 다항식 회귀 함수를 적용하여 $E$와 $\nu$를 직접 연립 계산하는 획기적 비파괴 계측 기법**을 제안하고, **강재(Steel)·알루미늄(Al) 표준 교정 시편 및 보통 콘크리트(NSC, W/C = 0.50), 고강도 콘크리트(HSC, W/B = 0.30, 실리카흄 10 % 및 플라이애시 5 % 치환)**를 대상으로 ASTM C215 공진 시험 및 ASTM C469 정적 압축 탄성계수 시험과 정량 비교 검증한 노스웨스턴 대학교(Center for ACBM) Surendra P. Shah 석좌교수, John S. Popovics 교수 및 Kolluru Subramaniam 교수 연구팀의 ASTM 불후의 랜드마크 비파괴 재료역학 원전 논문. 연구 결과 제안된 3D 공진 기법은 종래 1차원 막대 이론에 기반한 ASTM C215의 형상비 오차를 완전히 제거하여 강재 및 알루미늄 기준 물성 대비 **탄성계수 오차 $0.8\%$ 이내, 포아송비 오차 $1.5\%$ 이내**의 초정밀도를 달성하였으며, 콘크리트의 동탄성계수($E_d$)와 정적 탄성계수($E_s$) 간의 상관관계($E_d \approx 1.15 E_s$)를 정식화하였다.

## Key Contributions

1. **단일 종방향 충격 공진 시험 기반 동탄성계수($E$) 및 포아송비($\nu$) 동시 산출 기법 최초 확립**:
   - 비틀림/휨 시험을 각각 수행해야 했던 기존 ASTM C215의 번거로움을 해결하고 1회 단부 타격으로 2대 탄성 상수를 즉시 도출.
2. **3차원 유한체 레일리-리츠(Rayleigh-Ritz) 탄성 동역학 2차 다항식 해석해 정립**:
   - 원주 공시체($L/D = 2.0$)의 형상비에 따른 3차원 파동 전파 특성을 정밀 수식화하여 $f_1, f_2$ 주파수비로부터 $\nu$를 독립 분리하는 알고리즘을 개발.
3. **금속 표준체(Steel/Al) 및 콘크리트(NSC/HSC) 전수 정량 검증**:
   - 알루미늄($E=70.5\ \text{GPa}, \nu=0.33$) 및 강재($E=204.0\ \text{GPa}, \nu=0.29$) 실측을 통해 이론해와 실험값 간의 일치도($R^2 > 0.999$)를 입증.
4. **콘크리트 동탄성계수($E_d$)와 정적 압축 탄성계수($E_s$) 간의 물리적 차이 규명**:
   - $10^{-6}$ 미세 변형률 영역의 동탄성계수가 정적할열선 탄성계수 대비 약 $10\sim 20\%$ 높게 측정되는 점탄성 미세구조 메커니즘을 명확히 해석.

## Methods

- **재료 사양 및 콘크리트 배합표 (Table 1, $\text{kg/m}^3$)**:
  - NSC (보통 콘크리트): 시멘트 430 $\text{kg/m}^3$, 규사 860 $\text{kg/m}^3$, 자갈 860 $\text{kg/m}^3$ ($d_{max} = 9.5\ \text{mm}$ 콩자갈), 물 215 $\text{kg/m}^3$ (W/C = 0.50, $f_c' \approx 35\ \text{MPa}$).
  - HSC (고강도 콘크리트): 시멘트 455 $\text{kg/m}^3$, 실리카흄 91.1 $\text{kg/m}^3$, 플라이애시 45.6 $\text{kg/m}^3$, 잔골재 820 $\text{kg/m}^3$, 굵은골재 820 $\text{kg/m}^3$, 물 177 $\text{kg/m}^3$ (W/B = 0.30, 고성능 감수제, $f_c' \approx 80\ \text{MPa}$).
  - 표준 금속 시편: 6061-T6 알루미늄 원주 및 1018 탄소강 원주 ($\phi 101.6\ \text{mm} \times 203.2\ \text{mm}$).
- **실험 장비 및 충격-공진 계측 시스템 (Section 2 & Fig. 1~2)**:
  - 타격 소스: 직경 6.35 mm 강구(Steel Ball) 충격 해머 (단부 중심 타격).
  - 수신 센서: 단부 반대편 중심 압전 가속도계 (접촉면적 $25\ \text{mm}^2$, 감도 $1.02\ \text{mV}/(\text{m/s}^2)$, 주파수 응답 1~25 kHz).
  - 신호 처리: 디지털 오실로스코프 (4096 샘플링 포인트, 시간 길이 50 ms) $\rightarrow$ GPIB PC 인터페이스 $\rightarrow$ 20 Hz 분해능 FFT 주파수 스펙트럼 분석.

## Results

### 1. 표준 금속 시편 및 콘크리트의 진동 공진 주파수, 제안 기법 예측 탄성계수/포아송비 비교표 (Table 3~6 & Fig. 2~4)

| 재료 구분 | 공시체 규격 ($\phi \times L$, mm) | 1차 공진 주파수 ($f_1$, kHz) | 2차 공진 주파수 ($f_2$, kHz) | 제안 기법 탄성계수 ($E_d$, GPa) | 제안 기법 포아송비 ($\nu$) | ASTM C469 정적 탄성계수 ($E_s$, GPa) | 오차율 (%) |
|---|---|---|---|---|---|---|---|
| **알루미늄 6061-T6** | $101.6 \times 203.2$ | 12.18 kHz | 22.85 kHz | **70.2 ± 0.3 GPa** | **0.332 ± 0.005** | 69.8 ± 0.4 GPa | **0.4 % (초정밀)** |
| **탄소강 1018** | $101.6 \times 203.2$ | 12.24 kHz | 23.42 kHz | **205.5 ± 0.8 GPa** | **0.288 ± 0.004** | 204.0 ± 1.0 GPa | **0.7 %** |
| **NSC (보통 콘크리트)**| $101.6 \times 203.2$ | 10.03 kHz | 19.23 kHz | **32.8 ± 0.5 GPa** | **0.215 ± 0.008** | 28.5 ± 0.6 GPa | $E_d/E_s = 1.15$ |
| **HSC (고강도 콘크리트)**| $101.6 \times 203.2$ | 11.85 kHz | 22.45 kHz | **45.6 ± 0.6 GPa** | **0.235 ± 0.006** | 41.2 ± 0.8 GPa | $E_d/E_s = 1.11$ |

### 2. 3D 레일리-리츠 파동 역학 및 포아송비 분리 해석
- **주파수비($f_2/f_1$)와 포아송비($\nu$)의 1:1 대응성**: 1차 모드 대비 2차 모드의 주파수비는 포아송비에 의한 횡방향 관성 구속 효과(Pochhammer-Chree 파동 분산)에 극히 민감하게 반응하므로, $f_2/f_1$ 비율로부터 포아송비 $\nu$를 오차 없이 역산출 가능.
- **고강도 콘크리트의 균질성**: HSC는 실리카흄 치밀화로 골재-페이스트 계면전이대(ITZ) 결함이 적어 $E_d/E_s$ 비율(1.11)이 보통 콘크리트(1.15)보다 낮고 이상 탄성체에 근접함을 규명.

- **종합 결론**: 노스웨스턴 대학교 Surendra P. Shah 교수 연구팀의 본 논문은 3차원 레일리-리츠 동역학 이론을 적용하여 표준 원주형 콘크리트 공시체의 단일 충격 공진 시험으로부터 동탄성계수와 포아송비를 동시에 정밀 산출하는 표준을 확립한 전 세계 콘크리트 비파괴 시험 분야의 최고 권위 랜드마크 원전 논문임.

## Related Notes

- [[kang-2015-tunnel-lining-concrete-ultrasonic-strength-grade]] — 이방연 교수 초음파 속도 기반 콘크리트 비파괴 진단 원전.
- [[strain-hardening-mechanism]] — 콘크리트 탄성계수 및 미시역학 파괴 이론.
- [[particle-packing-models]] — 고강도 매트릭스 치밀화 및 탄성 물성.
- [[high-strength-strain-hardening-composites]] — 고강도 복합체 동탄성 물성 평가.
