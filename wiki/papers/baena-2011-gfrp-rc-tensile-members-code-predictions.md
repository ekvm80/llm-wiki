---
title: "Experimental study and code predictions of fibre reinforced polymer reinforced concrete (FRP RC) tensile members (Baena, Turon, Torres & Miàs, 2011)"
type: source_note
source: "sources/baena-2011-experimental-study-and-code-predictions.pdf"
citation: "Baena, M., Turon, A., Torres, Ll., Miàs, C. Experimental study and code predictions of fibre reinforced polymer reinforced concrete (FRP RC) tensile members. Composite Structures 93 (2011) 2511-2520. doi: 10.1016/j.compstruct.2011.04.012"
date: 2026-08-23
tags: [gfrp-bar, rc-tensile-member, tension-stiffening, crack-spacing, crack-width, code-comparison, eurocode2, aci-440]
---

# GFRP 철근 RC 인장부재의 실험과 설계기준 예측 비교

## Summary

지로나대 AMADE 그룹의 GFRP 철근 콘크리트 인장부재(tie) 실험 논문(Composite Structures 93, 2511-2520). GFRP 봉 지름 3종(12.7/15.9/19.1 mm)과 정사각 단면 2종(170/110 mm)을 조합해 부재률 0.51~1.69 %인 6개 실험체를 축인장 시험하고, 하중-평균변형률 응답·균열간격·균열폭을 Eurocode 2(EC2-92/-04), ACI 224/ACI 440, Model Code 90(MC90) 예측과 비교했다. FRP의 낮은 탄성계수 때문에 사용성(처짐·균열폭)이 설계를 지배하는데, 강재용 설계식의 단순 확장이 GFRP RC 인장부재에 부적합함을 정량적으로 확인하고 균열간격에 대한 새 회귀식을 제안한다.

## Key Contributions

- **변형 예측**: ACI 224/440(Branson 방정식 기반 유효단면 Ae)은 부재 강성을 과대추정해 변형률을 명백히 과소예측 — ACI 440.1R-03의 저감계수 βd = 0.5(E_FRP/E_steel)+1을 도입해도 여전하다. 반면 EC2-92의 평균변형률식은 부착계수 β1=0.5(매끈면)와 1(리브)의 양극한값 범위에서 실험곡선을 포괄하며 β1=0.5가 보수적이다.
- **균열 안정화**: 균열 안정화 하중과 첫균열 하중의 비 Psta/Pcrack은 MC90의 상수 1.3 가설과 달리 부재률 의존을 보인다(실험 1.14~1.75, 부재률이 클수록 커짐).
- **균열간격**: EC2-92 평균균열간격식(srm = 50 + 0.25 k1k2 db/ρeff, k1=0.8)은 실험값을 1.96~3.83배, EC2-04 최대균열간격식은 2.09~5.17배 과대예측. 새 회귀식 **srm = 20.8 + 0.0835 db/ρeff**(mm)을 제안 — 절편이 작아 큰 피복두께를 갖는 인장부재에서 콘크리트 피복의 역할이 휨부재와 다름을 시사한다.
- **균열폭**: ACI 224는 FRP 부착특성 계수 부재로 과소예측. 휨용으로 개발된 ACI 440.1R-03(Gergely-Lutz 변형, kb 설계값 1.2)과 ACI 440.1R-06(물리모델, kb 기본값 1.4)이 오히려 GFRP tie의 최대균열폭을 정확히 예측(두 판이 거의 동일). EC2 균열폭식은 균열간격 예측에 종속되므로 직접 적용 시 과대예측 — 본 논문의 srm 식을 대입하면 실질 개선된다.
- **수축 영향 정량화**: MC90 수축변형률 예측으로 초기 단축 εm,i = εsh/(1+nρ)과 추가 초기인장하중 Padd = εsh·E_FRP·A_FRP를 산정 — 28일 조기 시험과 낮은 FRP 탄성계수 덕분에 전체 응답에 대한 영향은 미미했다.

## Methods

- Hughes Brothers Aslan 100 나선감깐 sand-coated GFRP 봉. 부재 길이 1300 mm, 양단 50 mm 비부착 처리로 유효 부착길이 1200 mm. 단면 중앙에 봉 1본 배근.
- 콘크리트: 레디믹스, 최대 골재 20 mm, 목표강도 50 MPa. 배합 C1/C2/C3의 압축강도 48.1/56.2/46.6 MPa, 탄성계수 27,315/33,275/34,514 MPa. GFRP 봉 인장강도 535~1030 MPa(공칭지름별 상이).
- 가력: 드릴관통 스레드바+에폭시 그립 시스템으로 봉 손상 없이 양단 인장, 변위제어. 새 균열 출현 때마다 하중 정지 후 균열·변형률 기록. 변형은 LVDT와 게이지길이 150 mm Demec 기계식 변형률계로 이중 계측, 균열폭은 광학확대경(정밀도 0.05 mm).
- 노치(N) 2개 실험체(19-170-N, 16-170-3N)는 봉 내부 스트레인게이지와 노치로 균열 위치를 유도한 수치해석용 실험체 — 변형 응답 분석에만 사용하고 균열 통계에서는 제외.

## Results

- 인장 응답 3영역: 균열 전 선형 → 균열 진행(기울기 저하, 변위제어 지그재그) → 균열 안정화 후 기존 균열 개폐만 증가. ρ=1.00 % 실험체에서는 횡균열과 분할균열(splitting)이 혼합 발생.
- 첫균열 하중 Pcrack = 28.4~74.6 kN, 안정화 시 횡균열 수 4~9개. 균열간격 비 실험 평균 sr,max/srm = 1.53(문헌 범위 1.33~1.54 내), sr,min/srm = 0.58(문헌 범위 0.67~0.77보다 약간 낮음).
- 균열폭: 균열 발생 단계에서 평균균열폭 wm,exp = 0.40~1.95 mm, 최대 3.00 mm(ρ=1.69 %, 87.69 kN)까지. 최대·최소 균열폭은 평균균열폭과 선형 추세.

## Related Notes

- [[bakis-2002-frp-composites-construction-state-of-the-art]] — FRP 건설 종설(내부철근 섹션의 '사용성 지배' 논점을 인장부재 실험으로 정량 검증)
- [[gangarao-2007-frp-rc-design-textbook]] — FRP RC 설계 교과서(본 논문이 비교한 설계식들의 체계)
- [[su-2024-flexural-behavior-beams-gfrp-hpfrcc-strengthening]] — GFRP 바+HPFRCC 보강 보(GFRP 부착·사용성 축의 응용 편)
- [[esfahani-2020-hpfrcc-substitution-gfrp-rc-beams]] — GFRP 철근 보에서 HPFRCC 치환(균열폭·연성 개선 경로)
- [[fischer-2003-frp-reinforced-ecc-cyclic-flexure]] — FRP 철근 ECC 휨(낮은 철근 강성을 매트릭스 인장연성으로 보완)
- [[ecc-hybrid-frp-steel-beams]] — FRP+강재 하이브리드 보(FRP 선형탄성 파괴의 연성 보완)
- [[pseudo-strain-hardening-criteria]] — RC tie의 균열 안정화 개념과 SHCC 다중균열 안정화의 이론적 대응

