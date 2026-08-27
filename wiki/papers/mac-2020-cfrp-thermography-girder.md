---
title: "Thermography-Based Deterioration Detection in Concrete Bridge Girders Strengthened with CFRP (Mac, Huh, Doan, Shin & Lee, 2020)"
type: source_note
source: "sources/Mac-2020-Thermography-Based Deterioration Dete.pdf"
citation: "Mac, V. H., Huh, J., Doan, N. S., Shin, G., Lee, B. Y. Thermography-based deterioration detection in concrete bridge girders strengthened with carbon fiber-reinforced polymer. Sensors 20(11) (2020) 3263. doi: 10.3390/s20113263"
date: 2026-08-22
tags: [thermography, step-heating-thermography, cfrp-strengthening, delamination, ndt, thermal-diffusivity, snr, chonnam-group]
---

# CFRP 보강 콘크리트 거더 내부 박리의 단계가열 열화상 검출·정량화

## Summary

전남대 그룹의 연구(교신저자 Huh, 이방연 공동저자·지도). CFRP 시트로 보강된 콘크리트 거더에서 CFRP층 손상보다 소홀했던 콘크리트 심부 박리를 단계가열 열화상(step heating thermography, SHT)으로 정량 검출했다. 깊이 1~8 cm 인공 박리 8개를 매입한 실험체로 검출 한계·가열시간 효과·CFRP 부착 효과를 규명하고, 기존에 없던 CSC(CFRP 보강 콘크리트) 경험적 열확산도 αe = 1.0153 cm²/min을 제안해 박리 깊이 예측 RMSE 0.4~0.7 cm를 달성했다.

## Key Contributions

- 검출 한계 정량화: 가열 40 min 이내 조건에서 깊이 7 cm까지 박리를 SHT로 검출 가능(최심부 8 cm는 최대 ΔT 0.033 °C로 NETD 수준이지만 SNR −0.653 dB 음수로 미검출). 깊이별 필요 최소 가열시간 명시 — 배면(깊이 ≤4 cm)은 10 min 이상에서 전부 검출, 5 cm는 15 min, 6 cm는 20 min, 7 cm는 25 min부터.
- CFRP 시트가 박리 대비(absolute contrast)를 오히려 높인다는 점 규명: 동일 조건 BD3 박리의 최대 ΔT가 CWC(무보강) 0.51 °C vs CSC(CFRP 보강) 0.73 °C(SNR 6.02 vs 8.66 dB). 원인은 CFRP 표면의 높은 방사율(0.97 vs 콘크리트 0.95)에 따른 흡열 증대 — CFRP가 열화상 검출을 방해하지 않음을 실증.
- CSC 거더의 경험적 열확산도 제안: 관측시간 OBT와 깊이의 관계 OBT = 0.9849×Z²(R² = 0.981)에서 αe = 1/0.9849 = 1.0153 cm²/min. Maldague 문헌값(CFRP 약 3.7, 콘크리트 약 0.53 cm²/min) 사이 값으로, 유효 매질 개념으로 설명. 현장 깊이 예측용.
- 후처리 알고리즘 비교(TSR + PPT + ABC): 짧은 가열(5 min)에서는 PPT 위상데이터가 우세(BD2 SNR 4.98→9.74 dB), 긴 가열(10~15 min)에서는 TSR이 우세. 두 방법 결과의 조합이 모든 케이스에서 ABC 단독보다 나쁘지 않아 다중 알고리즘 조합 권고.

## Methods

- 실험체: 설계압축강도 30 MPa 콘크리트 판형 시험체에 10×10×1 cm 폴리스티렌 인공 박리 8개(열전도도 k=0.027 W/m°C, 공기 0.024와 유사)를 매입. 전면에서 깊이 1~4 cm(FD 계열은 5~8 cm), 배면에서 5~8 cm(BD 계열은 1~4 cm) 위치. 각 컬럼에 동일 규격 박리를 CSC 영역과 CWC 영역에 한 쌍씩 배치해 CFRP 효과를 직접 비교.
- CFRP 시트: 일방향 시트 1겹(두께 0.167 mm), 에폭시 프라이머-주도포-시트 부착-마감도포 6단계 시공.
- 가열·계측: 할로겐 램프 4개(500 W×4, 총 2000 W)를 시험면에서 1.2 m 거치. 배면 가열 3/5/10/15/20 min, 전면 5~40 min 7구간 등 총 36케이스. 장파장 적외선카메라 FLIR SC660(열감도 0.03 °C)으로 0.5 Hz(2초 간격) 촬영, 가열·냉각 전 구간 기록.
- 해석 지표: 절대대비 Cab = T_de − T_nde(결함 ROI와 주변 ROI), SNR = 20 log10(|S−N|/σ_noise). 검출 판정 기준 ΔT ≥ NETD 0.03 °C AND SNR > 0 dB. 깊이 예측 Z² = αe×OBT(OBT = 냉각 개시부터 ΔT 피크까지).

## Results

- 대비-깊이-가열시간 관계: 같은 가열시간에서 얕은 결함이 높은 대비(10 min 가열 시 BD2-CF 0.86 °C vs BD3-CF 0.52 °C), 가열시간이 길수록 최대 ΔT 증가(FD4-CF: 10/20/30 min에서 0.02/0.05/0.07 °C).
- 깊이 예측 정확도: 전 케이스 평균 예측에서 이상선 대비 기울기 오차 약 2 %. RMSE는 15/20 min 가열에서 0.650/0.545 cm, 3/5/10 min에서 0.69/0.68/0.42 cm(배면 결함만), 25/30/40 min에서 0.63/0.64/0.50 cm(전면 결함만) — 가열시간이 길수록 정확.
- 후처리 SNR 비교(배면 가열): BD2-CF 5 min에서 ABC 4.98 → PPT 위상 9.74 dB(+95 %), TSR 1차 도함수 9.49 dB. BD3-CF 5 min에서 TSR 로그데이터로 1.90→4.61 dB(+143 %). 반면 10 min PPT 적용 시 BD3-CF는 3.46 dB로 ABC(5.08 dB)보다 하락 — 알고리즘 효과는 결함·조건 의존적.
- 저자 기여: 분석 V.H.M., 검증·감독에 Huh·Lee(사용자 교수) 참여. 해양수산부 항만 기술개발(20180323)·국토부 연구프로그램(19RDRP-B076564-06) 지원.

## Related Notes

- [[lee-kim-kim-2006-crack-pattern-recognition]] — 사용자 그룹 영상 기반 균열 검출 축(가시광 영상 vs 적외선 영상)
- [[lee-2005-enhanced-binarization-crack]] — NDT·이미지 진단 축의 이진화 전처리
- [[kim-2007-surface-wave-ai-engine]] — 표면파 NDT(탄성파 vs 열파)
- [[kim-2007-fbg-smart-tendon]] — 사용자 그룹 FBG 광섬유 계측 축
- [[li-2024-uhpc-rc-beam-acoustic-emission]] — AE 기반 손상 모니터링(능동 가열 열화상과 수동 센서의 대응)
