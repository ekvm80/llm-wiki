---
title: "Optimum Concrete Mixture Proportion Based on a Database Considering Regional Characteristics (Lee, Kim & Kim, 2009)"
type: source_note
source: "sources/IJP0309S_Optimum Concrete Mixture.pdf"
citation: "Lee, B. Y., Kim, J. H., & Kim, J. K. (2009). Optimum concrete mixture proportion based on a database considering regional characteristics. Journal of Computing in Civil Engineering, 23(5), 258-265. https://doi.org/10.1061/(ASCE)0887-3801(2009)23:5(258)"
date: 2026-08-24
tags:
  - concrete-mix-design
  - optimization
  - database-driven
  - neural-networks
  - regional-characteristics
---

## Summary
지역별 재료 특성(시멘트 반응성, 골재 입형/물성 등)의 변동성을 통계적 데이터베이스에 반영하여 콘크리트의 최적 배합비를 도출하는 고도화된 전산 배합 설계 알고리즘을 제안한 연구이다. 제한된 지역 데이터베이스 범위를 벗어난 비현실적 예측(extrapolation error)을 방지하기 위해 유효 탐색 영역(effective boundary)을 평가하는 볼록 껍질(Convex Hull) 및 인공신경망(ANN) 기반 평가 기법을 결합하였다. 강도, 슬럼프, 경제성, 내구성을 동시에 만족하는 다목적 유전자 알고리즘(MOGA)을 적용하여 현장 적용성과 예측 신뢰도를 획기적으로 개선하였다.

## Key Contributions
- **데이터베이스 영역 제약 기반 과적합/외삽 방지**: 실제 생산된 지역 콘크리트 데이터베이스의 신뢰 도메인 내에서만 탐색이 이루어지도록 구속하여 비합리적인 배합비 출력을 원천 차단함.
- **다목적 최적화 프레임워크 구축**: 목표 압축강도(28 d $f_{ck}$), 슬럼프(시공성), 재료비(경제성), $CO_2$ 배출량 등을 종합적으로 최적화하는 목적 함수 수립.
- **인공신경망-유전자 알고리즘(ANN-GA) 결합 모델 검증**: 대규모 레미콘 플랜트의 실측 배합 데이터(수백 배치)를 기반으로 학습 및 검증을 수행하여 강도 예측 오차를 5 % 이내로 축소함.

## Methods
- **데이터베이스 구축**: 국내 특정 지역 레미콘 공장에서 생산된 다양한 강도 등급($18 \sim 60 MPa$)의 배합 및 물성 데이터베이스.
- **입력 변수**: 물-결합재비($W/B$), 물 함량($W$), 잔골재율($S/a$), 혼화재 치환율(플라이애시, 슬래그), 감수제 투입량.
- **출력 변수**: 28 d 압축강도, 슬럼프 플로우, 단위 용적당 비용.
- **최적화 기법**:
  - 비선형 상관성 학습을 위한 다층 퍼셉트론(MLP) 인공신경망.
  - 파레토 최적해(Pareto optimal front)를 도출하는 유전자 알고리즘.

## Results
- 기존 고전적 실험식(Bolomey식 등) 대비 실제 지역 골재 특성이 반영되어 배합 강도 예측 결정계수 $R^2 = 0.94$ 이상의 높은 정밀도 확보.
- 목표 강도 $30 MPa$, 슬럼프 $150 mm$ 조건에서 기존 관행 배합 대비 시멘트 사용량을 약 $12 \sim 15 kg/m3$ 절감하면서 동등 강도를 확보하여 경제성 및 친환경성을 동시에 달성함.

## Related Notes
- [[particle-packing-models]] - 콘크리트 입자 충전 이론 기반 최적화 설계
- [[sustainability-low-carbon-binders]] - 저탄소 최적 배합 설계 및 탄소 저감 기술
- [[lee-2009-extruded-ecc-panel-fiber-distribution]] - 압출 성형 ECC 패널의 섬유 분포 및 역학 성능
