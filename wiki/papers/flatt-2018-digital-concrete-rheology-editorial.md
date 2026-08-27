---
title: "Editorial for special issue on digital concrete / rheology and processing (Flatt, Roussel & Sanjayan, 2018)"
type: source_note
source: "sources/flatt-2018-editorial-for-special-issue-on.pdf"
citation: "Flatt, R. J., Roussel, N., & Sanjayan, J. G. (2018). Editorial for special issue on digital concrete / rheology and processing. Cement and Concrete Research, 112, 1-4. https://doi.org/10.1016/j.cemconres.2018.06.002"
date: 2026-08-24
tags:
  - 3d-printing-concrete
  - digital-concrete
  - rheology
  - thixotropy
  - yield-stress-evolution
---

## Summary
Cement and Concrete Research 특별호의 에디토리얼 논문으로, 3D 콘크리트 프린팅(3DCP) 및 디지털 패브리케이션 기술의 핵심 물리화학적 토대와 유변학(Rheology)적 설계 프레임워크를 종합 정리한 고전적 논문이다. 거푸집 없는 적층 제조에서 요구되는 펌프성(pumpability), 압출성(extrudability), 적층성(buildability), 층간 부착 강도(interlayer bonding) 간의 상충 관계를 정량화하고, 초기 수화 정지 구간의 틱소트로피(thixotropy) 및 항복응력 진전율($A_{thix}$) 제어 메커니즘을 디지털 콘크리트 과학의 핵심 연구 지표로 제시하였다.

## Key Contributions
- **디지털 콘크리트 4대 공정 요구조건 체계화**: 펌프성(유동 저항 최소화), 압출성(노즐 형상 유지), 적층성(자중 및 상부 하중 지지 항복강도 발현), 층간 결합성(콜드 조인트 방지)의 유변학적 상호작용 정리.
- **적층성과 틱소트로피 구조화율 수식 프레임워크**: 적층 높이에 따른 하단부 파괴를 방지하기 위한 정적 항복응력 발현 속도 $A_{thix} = \partial \tau_0 / \partial t$의 임계 조건 모델 제시.
- **가속 수화 및 활성화 기술 로드맵 제시**: 믹싱 후 압출 직전 화학적 촉진제 주입(set-on-demand)을 통한 유동성 확보와 급속 경화 양립 방안 제안.

## Methods
- 학술 리뷰 및 유변학적 상태 방정식 통합 분석.
- 점탄성 및 소성 항복 모델: Bingham 모델($\tau = \tau_0 + \mu_p \dot{\gamma}$) 및 Herschel-Bulkley 모델 적용.
- 틱소트로피 구조화 계수 $A_{thix}$ (Pa/s 또는 Pa/min) 기반 적층 한계 속도 도출:
  $$\tau_{0}(t) = \tau_{0,0} + A_{thix} t$$
  $$h_{max} = \frac{2 \tau_0(t)}{\rho g}$$

## Results
- 3D 프린팅 시멘트계 재료의 성공적 구현을 위해서는 압출 시 낮은 점도와 전단응력 상태를 유지하다가, 압출 직후 정적 항복응력($\tau_{0,static}$)이 급격히 증가하는 틱소트로피 회복 특성이 필수적임.
- 층간 지연 시간($t_{gap}$) 증가에 따른 표면 건조 및 수화 생성물 불연속성으로 인해 인장 및 전단 부착 강도가 최대 50 % 이상 저하되는 이방성 문제가 디지털 콘크리트의 최대 도전과제임을 강조.

## Related Notes
- [[3d-printable-ecc]] - 3D 프린팅용 고연성 복합체의 적층성 및 섬유 배향 메커니즘
- [[particle-packing-models]] - 프린팅 페이스트 및 모르타르의 입자 최적 충전 이론
- [[zhu-2019-3dp-ecc-ultra-high-ductility]] - 초고연성 3D 프린팅 ECC의 유변학 및 역학 거동
