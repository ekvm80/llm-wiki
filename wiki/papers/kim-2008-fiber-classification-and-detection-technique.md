---
title: "Fiber Classification and Detection Technique for PVA-ECC Sectional Images (Kim et al., 2008)"
type: source_note
source: "sources/2008-fiber-classification-and-detection-technique.pdf"
citation: "Kim, Y.Y., Lee, B.Y., Kim, J.-K. PVA-ECC 단면 이미지의 섬유 분류 및 검출 기법 (Fiber classification and detection technique proposed for applying on the PVA-ECC sectional image). Journal of the Korea Concrete Institute 20(4) (2008) 513-522."
date: 2026-08-22
tags: [pva-fiber, image-analysis, fluorescence, ann, watershed-algorithm, fiber-dispersion, ecc]
---

# PVA-ECC 단면 이미지의 섬유 분류 및 검출 기법

## Summary

명암비가 낮고 비전도성인 PVA 섬유의 분산성을 정량 평가하기 위해 형광현미경 이미지에 자동 섬유 검출 알고리즘을 제안한 연구. 이진화 1차 검출의 오류(인접 섬유의 병합 검출)를 교정하기 위해 섬유 이미지를 5유형으로 분류하는 ANN 분류기와, 유형별로 분수령 알고리즘·형태학적 재구성을 조합한 재검출 단계를 도입하여 검출 정확도를 크게 향상시켰다. 검출된 섬유 직경 오차는 6.84 %로, 분산성 평가 목적에는 허용 범위로 판단했다.

## Key Contributions

1. **5유형 분류 체계**: 분수령 알고리즘의 밝기 정점 수로 Type S1(정확한 단일 섬유)과 Type N으로 구분하고, Type N을 N1(촬영 방향 평행 섬유—원형 단면상, 과도분할 오류), N2(수직 섬유—장타원상, 과도분할 오류), N3(S1형 군집이 하나로 병합), N4(N1·N2형 군집 병합)로 세분화. N3·N4만 재검출 대상으로 삼아 불필요한 처리를 배제.
2. **변환 불변 형상 특징 5종**: 회전·이동·크기·명암 변화에 불변인 Fs(solidity = A_ob/A_ch), Fc(packing density = A_ob/A_cc = d/l = cosθ — 단면 기울어진 각도 θ 정량화), Fp(둘레/면적), Fl(장변/면적), Frl(장변/평균장변)을 정의. 1,350개 섬유 이미지 데이터베이스로 ANN 학습.
3. **ANN 분류기**: 은닉층 1개(5-4-4 구조, 10-fold 교차검증으로 최적화), 은닉층 tan-sigmoid·출력층 선형, Levenberg-Marquardt + 가중치 감소 학습. Jackknife 검증 정확도: N1 97.7 %, N2 89.7 %, N3 97.0 %, N4 67.5 %, 전체 95.3 %. 학습된 가중치·바이어스를 논문에 수록해 재현성 확보.
4. **유형별 재검출 전략**: N3은 분수령 알고리즘만 적용, N4는 과도분할 방지를 위해 형태학적 재구성(마커 = 마스크 − h, h = 20)을 선수행한 후 분수령 적용. 3알고리즘(이진화만 / +분수령 / +재구성·분수령) 비교에서 제안 알고리즘의 검출 성능이 현저히 우수함을 확인.
5. **검증**: 검출 섬유 직경 평균 42.2 μm vs 실제 39.5 μm → +6.84 % 오차(이진화 역치가 다소 작은 것이 원인). 분산성 평가는 섬유 위치가 크기보다 중요하므로 10 % 이내 오차는 허용 가능.

## Methods

- 시편: 미시역학 설계 PVA-ECC, 28일 수중양생 후 다이아몬드 커터로 두께 13 mm × 폭 36 mm × 높이 20 mm 절단, 표면 그라인더 연마.
- 이미지: 형광현미경(Olympus BX51) + CCD 카메라, 40배 확대. RGB → grayscale → binary(Otsu 역치) 변환.
- 분류기: ANN(5 입력 특징값을 −1~1로 선형사상, 4출력 one-hot). 학습 데이터 1,350개 이미지.
- 검출 결과는 김윤용 등(2007, 비파괴검사학회지 27(2) 148-156)의 통계적 분산성 평가 기법과 연계되어 정량 평가로 이어짐.

## Results

- ANN 유형별 분류 오차행렬(Total 95.3 %)에서 N4(67.5 %)가 가장 낮음 — 긴 병합 이미지의 형상 다양성이 원인.
- 특징값 범위(최소/최대): Fs 0.3913/1, Fc 0.028/0.962, Fp 0.2461/1.0365, Fl 0.0512/0.4538, Frl 0.3996/10.532.
- 제안 기법으로 N3·N4 유형의 병합 오류가 교정되고, 형태학적 재구성 선수행으로 분수령 과도분할 문제가 해소됨(Fig. 13).

## Related Notes

- [[kang-2008-fiber-orientation-impacts-on-the]] — 동일 연구진(김윤용·이방연·김진근)이 같은 해 강섬유-UHSC에 적용한 이미지 프로세싱 기반 분포 평가. Fc = cosθ 배향 측정 아이디어 공유.
- [[li-2023-ecc-micromechanics-critical-review]] — ECC 미시역학 설계는 완전 섬유 분산을 가정하며, 본 논문의 검출 기법은 그 가정의 실험적 검증 수단.
- [[fiber-bridging-constitutive-law]] — 섬유 분산성이 브리징 효율(σ_B(δ))의 전제 조건. 분산 불량은 가교 응력 변동성의 직접 원인.
- [[lee-2009-extruded-ecc-panel-fiber-distribution]] — 본 검출 기법을 압출 ECC 패널 섬유분포 평가에 적용
