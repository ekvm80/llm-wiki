---
title: "Pseudo Strain-Hardening Design in Cementitious Composites (Li & Wu, 1992, RILEM HPFRCC)"
type: source_note
source: "sources/1st PE_li_HPFRCC_91.pdf"
citation: "Li, V.C., Wu, H.-C. Pseudo strain-hardening design in cementitious composites. In: Reinhardt, H.W., Naaman, A.E. (eds) High Performance Fiber Reinforced Cement Composites, RILEM, E & FN Spon (1992) 371-387."
date: 2026-08-22
tags: [psh, hpfrcc, design-methodology, snubbing, two-way-debonding, fiber-orientation, scan-ocr]
---

# 시멘트 복합재의 PSH 설계 (RILEM HPFRCC 워크숍)

## Summary

PSH를 달성한 연속 정렬(CA)·단무작위(SR) 섬유 보강 시멘트복합재의 실험 인장특성을 문헌 총정리하고, Michigan 대학의 U-M 모델(파단역학+브리징 응력-개구 관계) 예측과 비교. 단무작위 시스템 고유의 문제(배향 효과, 고 V_f에서의 양방향 탈결합)를 다루고 K-c 파괴메커니즘 지도 기반 설계 절차를 제시했다. ECC 프로그램(U-M)의 설계 철학을 처음 공식화한 문서 중 하나.

## Key Contributions

1. PSH 달성 사례 데이터베이스(Table 1): 강섬유·탄소섬유·PP·glass strand·FRDSP·SIFCON 등의 σ_mu/σ_mc/σ_cu와 ε_mu/ε_mc/ε_cu 정리. CA 시스템은 강도가 매트릭스 대비 최대 수십 배(V_f 12 % 탄소섬유), SR은 FRDSP·SIFCON 예외적으로 우수.
2. 변형능력 결론: 파괴변형률은 CA와 SR이 유사. SR에서 ε_mc는 매트릭스의 10~30배, ε_cu는 30~60배 달성 가능 — 다중균열이 잘 설계되면 1~2 자릿수 향상.
3. U-M 모델 검증: ACK(CA)·U-M(SR) 모델 예측 vs 실험 비교. snubbing 계수 미보고로 인한 불확실성 명시.
4. SR 고유 이슈 규명:
   - 배향각 효과(snubbing): 인발 저항 최대 2배 증가. 단, 경사 인발 시 매트릭스 spalling(plug pull-out, 원추 박리)으로 조기 하중 손실 가능 — Fig. 5~7.
   - 양방향 탈결합(two-way debonding): 고 aspect ratio·고 V_f에서 우세. 브리징 하중 최대 100 % 감소 가능. SIFCON(5~20 %)은 양방향 지배 영역(Fig. 10).
   - 섬유 굽힘 파단: 낮은 파단신율 섬유(탄소·glass)에서 경사각 증가 시 브리징 응력 감소(Fig. 8).
5. K-c 메커니즘 지도(Fig. 11)와 임계섬유체적비 설계도(Fig. 12): 결합강도-aspect ratio 조합이 V_f,crit 선 위·섬유 파단선 아래에 위치하도록 설계. Spectra 섬유(τ≈1 MPa, aspect 334)에 V_f=3 % 예측 → 실험으로 다중균열 확인.

## Methods

문헌 데이터 총정리 + U-M 모델(ACK 확장) 예측 비교. 파라미터 미보고 항목은 교육적 추정 사용을 명시.

## Results

- 고성능은 바인더 기술+섬유 기술의 결합에서 나온다. 고강도 바인더만으로 변형능력은 개선되지 않음.
- 누설 방수 구조물 등 균열 불허 용도는 첫균열 강도·변형률이, 균열 허용 용도는 궁극 강도·변형률이 설계 지표.

## Related Notes

- [[li-wu-1992-psh-conditions]]와 같은 해의 워크숍 논문 — 이론(App Mech Rev)과 설계 관점(RILEM)이 한 쌍.
- snubbing·양방향 탈결합 개념은 [[li-2023-ecc-micromechanics-critical-review]] 리뷰 Table 1의 2008 Yang 수치해 발전 경로 출발점.
- [[fiber-bridging-constitutive-law]]의 Cook-Gordon·micro-spalling 등 부가 메커니즘 논의의 초기 근거.

## 비고

- 스캔본 OCR 확보. 그래프 축 값 일부 왜곡 가능.
