---
title: "Improved Sectional Image Analysis Technique for Evaluating Fiber Orientations in Fiber-Reinforced Cement-Based Materials (Lee et al., 2016, Materials)"
type: source_note
source: "sources/Lee-2016-Improved sectional image analysis tec.pdf"
citation: "Lee, B.Y., Kang, S.-T., Yun, H.-B., Kim, Y.Y. Improved sectional image analysis technique for evaluating fiber orientations in fiber-reinforced cement-based materials. Materials 9(1) (2016) 42. doi:10.3390/ma9010042"
date: 2026-08-22
tags: [fiber-orientation, image-analysis, sectional-image, genetic-algorithm, orientation-distribution, resolution-error, user-group]
---

# 섬유 방향성 평가용 개선 단면 영상분석 기법

## Summary

전남대 이방연 제1저자(교신저자 김윤용·충남대, 강수태·대구대, H.-B. Yun·UCF 공저)의 MDPI Materials 논문. 파일명의 "단면 영상분석 기법 개선"은 균열이 아니라 **섬유 방향성** 평가를 가리킨다. 기존 방식처럼 단면 영상에서 섬유 한 개씩의 장단축비 l/d로 방향각 θ를 직접 재면 저각도 영역과 저해상도에서 계통오차가 커진다는 점(l/d는 이론적으로 1/cosθ라서 0°와 30°의 l/d 차이가 겨우 15.3 %)을 인공 영상으로 정량화하고, 대신 "절단 단면에 보이는 섬유 개수 자체가 방향성 분포에 의존한다"는 관계를 역으로 이용해 Xia 등의 2-모수 분포함수를 유전알고리즘으로 피팅하는 간접 추정 기법을 제안했다. 검증 결과 특히 2차원 분포 + 저해상도 조건에서 직접 측정보다 확률밀도 오차가 최대 80.6 % 감소했다.

## Key Contributions

1. **직접 측정의 오차 구조 규명**: θ = arccos(d/l) 직접 측정의 감도는 θ가 작아질수록 붕괴(0°↔30°의 l/d 차 15.3 %, 0°↔45° 차 41.2 %, θ = 85°의 l/d는 45°의 8.08배). 여기에 해상도 효과가 겹친다 — 섬유 직경이 5 픽셀이면 θ = 0°를 22.2°로, 15°를 41.2°로 오판(150 픽셀일 때는 오차 1° 미만). 강섬유 200 µm가 화면상 5 픽셀이면 픽셀 1개 오차가 곧 40 µm 계측 오차.
2. **개수 기반 간접 추정 프레임**: 이론 섬유 개수 Nf,t = (4VfAs/πd²)·∫g(θ)cosθ dθ(Vf는 섬유 체적비, As는 단면적)와 영상에서 측정한 개수 Nf,m의 차 |Nf,t − Nf,m|을 적합도로 하여 Xia 등의 2-모수 지수형 분포함수 g(θ)의 형상 모수 p, q를 최적화. p = 1, q = 0.5이면 sinθ(완전 3차원 랜덤), p = q = 1이면 1/π(완전 2차원 랜덤)에 대응.
3. **검출 파이프라인 고도화**: Otsu 임계값 이진화 후 면적 임계값으로 오검출 객체를 걸러내고, 뭉친 섬유 영상은 분수령(watershed) 분할 + 형태학적 재구성으로 분리(재구성으로 과분할 억제). 섬유는 정규화된 2차 중심모멘트가 같은 타원의 장축 l·단축 d로 특징화.
4. **적용 여건 제시**: 촬영 해상도(픽셀 수)가 제한된 상황에서 방향성이 기계 성능에 미치는 영향을 더 정확히 평가할 수 있는 실무 도구 — 3차원 분포에서 단면당 보이는 섬유 수는 1차원 대비 1/2, 2차원 분포에서는 2/π라는 개수 관계도 함께 정리.

## Methods

- 인공 검증 영상: Vf = 2.0 vol % 가정, 섬유 직경 5/15/25 픽셀 × 2D/3D 랜덤 분포 조합 6종 — I05-3(2000×2000, 2038개), I05-2(2594개), I15-3(6000×6000, 2038개), I15-2(2594개), I25-3(5000×5000, 510개), I25-2(649개).
- 유전알고리즘: 실수값 GA, 모집단 크기 200, 룰렛휠 선택, 무작위 유전자 조합 교차, 평균 0인 가우시안 난수 더하기 변이, 50연속 세대 동안 목적함수 무개선 시 정지.
- 비교 대상: Lee 등의 기존 기법(2009년 PVA 섬유 분산 정량 평가, 본문 참고문헌 [8])에 따른 개별 섬유 방향각 직접 측정.
- 연구비: 국토교통부 기술진흥연구사업 15CTAP-C097490-01, NRF 2015R1A5A1037548.

## Results

- 직접 측정의 확률밀도함수는 실제 분포와 저θ 영역에서 크게 어긋나며, 저θ 섬유 비중이 높은 2차원 분포 영상이 3차원보다 오차가 큼(평균 섬유당 오차는 3차원이 2차원보다 32.4 % 낮음).
- 해상도 개선 효과: 평균 섬유당 오차는 I05-2 대비 I15-2에서 70.0 %, I25-2에서 80.8 % 감소(I05-3 대비 I15-3 60.1 %, I25-3 79.3 % 감소).
- 제안 기법 vs 직접 측정(실제 분포 대비 확률밀도 차이): 3차원에서 I05-03은 72.7 %, I15-03은 43.7 % 개선, 그러나 I25-03은 21.9 % 악화(표본 510개의 PDF 변동이 원인으로 추정). 2차원에서는 I05-02 80.6 %, I15-02 56.1 %, I25-02 17.1 % 개선.
- 결론적으로 제안 기법은 2차원 분포 + 낮은 픽셀 수 조건에서 특히 우수하며, 해상도가 충분해지면 두 방식의 오차는 수렴.

## Related Notes

- [[kim-2008-fiber-classification-and-detection-technique]] — 본문 파이프라인(이진화·분수령 분할·형태학적 재구성)이 뿌리를 둔 그룹 섬유 검출 알고리즘 원전
- [[kim-2007-fiber-dispersion-fluorescence]] — 형광영상 기반 섬유 분산 정량화(같은 그룹의 섬유 분포 평가 축 선행 연구)
- [[lee-2009-extruded-ecc-panel-fiber-distribution]] — 같은 Xia 계열 방향성 분포함수 피팅을 실제 압출 ECC 단면에 적용한 그룹 선행 사례
- [[fiber-bridging-constitutive-law]] — 본문 서론이 다루는 snubbing 효과(경사 섬유 뽑힘하중 증가)와 방향성 PDF 기반 복합체 가교응력 환산은 이 가교 구성법칙의 방향성 확장에 해당
- [[li-2023-ecc-micromechanics-critical-review]] — 방향성이 인장 거동에 미치는 영향을 미시역학 프레임에서 총정리하는 허브
- [[mlekusch-1999-fiber-orientation-contrast]] — 단면 영상 섬유 분석의 콘트라스트 처리 원전(고분자계)
