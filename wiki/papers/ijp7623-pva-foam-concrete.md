---
title: "Mechanism of PVA Fiber Reinforcement in Foam Concrete: Microstructural Analysis and Regression Model (Yu, Zhang, Sanjayan et al., 2023)"
type: source_note
source: "sources/IJP7623E_Mechanism of PVA fiber_JMCE.pdf"
citation: "Yu, K., et al. Mechanism of PVA fiber reinforcement in foam concrete: Microstructural analysis and regression model. Journal of Materials in Civil Engineering 35(12) (2023) 04023447. doi: 10.1061/JMENE23.ME-54470 계열"
date: 2026-08-22
tags: [foam-concrete, pva-fiber, microstructure, pore-structure, fiber-dispersion, regression-model, user-group]
---

# PVA 섬유 보강 폼콘크리트의 미세구조 분석과 회귀 모델

## Summary

PVA 섬유의 종류(직경 19·200 µm, 길이 3·6·12 mm)·혼입률(0~0.9 vol %)·폼콘크리트 밀도(800·1700 kg/m³)를 변수로 한 32계열 실험에서 형광 영상 기반 섬유 분산 계수, 공극 크기·형상 계수·분포를 정량화하고 압축강도와의 상관을 회귀 모델로 규명한 연구. 고밀도(1700 kg/m³)에서는 섬유 분산이 지배 인자(+15.5 % 강도 향상), 저밀도(800 kg/m³)에서는 섬유가 공극 구조 자체를 개선해 +45.3 %까지 향상됨 — 밀도에 따라 보강 메커니즘이 다르다는 점을 통계적으로 입증했다.

## Key Contributions

1. **밀도별 보강 메커니즘 차이 규명**: 고밀도 폼콘크리트는 공극 구조와 섬유 분산이 무상관 — 유효 섬유 분산만이 강도 지배 인자. 저밀도 폼콘크리트는 섬유 분산이 공극 구조와 강도 모두에 직접 영향 — 균일 분산된 섬유가 대형 공극 감소·공극 원형화·균등 분포를 유도.
2. **섬유 직경의 역전 효과**: 고밀도에서는 굵은 섬유(200 µm)가 분산이 좋아 우수, 저밀도에서는 가는 섬유(19 µm)가 매트릭스 부착력이 커서 우수. 중간 길이(6 mm)가 저밀도에서 최적 분산.
3. **최적 혼입률 존재 증명**: 섬유 혼입률은 분산 계수와 음의 상관 — 과잉 혼입은 오히려 강도 하락. 1700 kg/m³에는 200 µm 섬유 0.6 %, 800 kg/m³에는 19 µm 섬유 0.15 %가 최적.
4. **정량화 프레임워크**: 섬유 분산 계수 α(Eq. 1, Kang-Lee-Yu 방식), 공극 형상 계수(Eq. 2~3, 크기 가중 평균), 유효 직경(Eq. 4), watershed 분할 공극 위치 분석을 MATLAB으로 자동화 — kim-2008·lee-2010 형광 기법의 폼콘크리트 확장.

## Methods

- **배합**: 시멘트:모래:물 = 1:0.4:0.4(질량비) 고정. 800 kg/m³(시멘트 420·모래 168·물 168·폼 44 kg/m³), 1700 kg/m³(935·374·374·17). 합성계 발포제(ISOLTECH ISOCEM-S/X) 2.5 % 용액을 6 bar 압축공기로 발포, 폼 밀도 ~70 kg/m³ 제어.
- **혼합**: Hobart 믹서 부적합(수직 교란 부족으로 폼 상승 분리) → 플라스틱 버킷+페인트 믹서+드릴 500 rpm. PVA 섬유를 물과 손으로 30 s 예비 혼합 → 시멘트·모래 추가(ASTM C305) → 폼 투입 후 3.5 min 혼합(안정 밀도·최고 강도 조건).
- **양생**: 탈형 후 랩 밀봉, 23 °C 양생실.
- **시험**: 압축 ASTM C109(50 mm 큐브×3), 1700 kg/m³는 1000 N/s·800 kg/m³는 200 N/s 재하. 미세구조: 실린더 시료 절단→80 °C 건조→진공 에폭시 침윤(저밀도는 흑색 염료)→다이아몬드 톱 절단→LEICA M205 A 현미경+ImageJ 이진화→MATLAB 분석.
- **통계**: t-test(p<0.05 유의)+ANOVA(f-test)로 회귀 모델 신뢰성 검증.

## Results

- 최대 강도 향상: 저밀도 +45.3 %, 고밀도 +15.5 %(각각 최적 섬유 조건).
- 섬유 혼입률↑ → 분산 계수 α↓(두 밀도 공통 음의 상관).
- 200 µm 섬유는 19 µm 대비 단면당 섬유 수가 적어 소면적 영상 대표성 부족 → 별도 형광 카메라 촬영으로 보완.

## Related Notes

- [[kim-2008-fiber-classification-and-detection-technique]] — 형광 영상 섬유 검출 원기술
- [[lee-2010-fluorescence-discriminating-fibers-hybrid-ecc]] — 형광 섬유 식별·분산 계수 적용
- [[kang-2011-fiber-distribution-uhsc-flexural-strength]] — α 계수 적용 선례
- [[yoon-2015-lightweight-concrete-eps]] — 경량 콘크리트 축
- [[tosun-2014-flaw-size-fiber-distribution-pva-ecc]] — 섬유 분포-인장연성 상관
