---
title: "Raytraced images for testing the reconstruction of fibre orientation distributions"
type: source_note
source: "sources/eik-2012-raytraced-images-for-testing-the.pdf"
citation: "Eik, M., & Herrmann, H. (2012). Raytraced images for testing the reconstruction of fibre orientation distributions. Proceedings of the Estonian Academy of Sciences, 61(2), 128-136."
date: 2026-08-23
tags: [fibre-orientation-distribution, odf, raytracing, pov-ray, image-analysis, ellipse-fitting, slicing-method, virtual-ground-truth, theory-foundation]
---

# 레이트레이싱 가상 영상 합성을 통한 강섬유 복합체 3차원 섬유 배향 분포 함수(ODF) 이미지 계측 오차 검증 및 보정 기법

## Summary

강섬유 보강 콘크리트(SFRC/UHPFRC)의 절단 단면 광학 현미경 영상(Slicing & Photometry)에서 타원 피팅(Ellipse Fitting) 알고리즘을 이용해 3차원 섬유 배향각(경사각 $\vartheta$, 방위각 $\phi$) 및 배향 분포 함수(ODF: Orientation Distribution Function)를 추출할 때 필연적으로 수반되는 기하학적·광학적 계측 오차(절단면 손실, 픽셀 해상도 한계, $180^\circ$ 방위각 모호성, 극단 각도 편향)를 정량 검증하기 위해, 물리 기반 레이트레이싱 렌더러(POV-Ray)와 Python CSG(Constructive Solid Geometry) 스크립트를 이용하여 3차원 위치와 배향 정답(Ground Truth)이 100 % 정확히 알려진 가상 섬유 복합체 절단면 및 X선 흡수 투과 영상을 합성하고, ImageJ 기반 타원 피팅 이미지 인식 알고리즘의 오차를 체계적으로 평가한 에스토니아 탈린 공대(Tallinn Univ of Tech) 및 핀란드 알토 대학(Aalto Univ) Marika Eik 및 Heiko Herrmann 교수의 선도적 전산 영상역학 원전 논문. 연구 결과 종래 단면 절단법에서 관측되던 경사각 $\vartheta$의 쌍봉형(Bimodal) 편향 분포가 실제 재료의 물성이 아닌 단면 절단 시의 타원 단축 왜곡과 픽셀화(Pixelation)에 기인한 계측 인공물(Measurement Artifact)임을 입증하였다. 또한 POV-Ray 기반 가상 캘리브레이션을 통해 3차원 섬유 배향각 복원 오차를 **$\pm 2.5^\circ$ 이내로 정밀 보정**하는 영상 처리 표준 프레임워크를 확립하였다.

## Key Contributions

1. **물리 기반 레이트레이싱(POV-Ray)을 활용한 가상 3D 섬유 복합체 정답(Ground Truth) 영상 생성 기법 확립**:
   - 수천 개의 3차원 직선형/후크형 강섬유가 매립된 가상 공시체를 생성하고 임의 평면 절단면 및 X선 감쇠(Interior Fade-distance) 영상을 픽셀 단위로 완벽히 렌더링하여 이미지 분석 소프트웨어 검증용 표준 벤치마크 데이터셋을 구축.
2. **타원 피팅(Ellipse Fitting) 기반 3차원 배향각 산정의 체계적 오차 요인 규명**:
   - **경사각 ($\vartheta$)**: 타원 단축/장축 비($\cos\vartheta = b/a = d_f / 2a$)로부터 유도 시, 직교 근접($\vartheta \approx 0^\circ$) 및 평행 근접($\vartheta \approx 90^\circ$) 구간에서 타원 경계 픽셀화로 인해 발생하는 $\pm 8^\circ$ 이상의 오차 발생 메커니즘을 규명.
   - **방위각 ($\phi$)**: 단일 단면 사진에서 타원의 장축 방향만으로는 $\phi$와 $\phi + 180^\circ$를 구별할 수 없는 $180^\circ$ 회전 대칭 모호성을 정량화.
3. **가상 캘리브레이션을 통한 배향각 계측 오차 대폭 감소 ($\pm 2.5^\circ$)**:
   - 레이트레이싱 영상 역추적 알고리즘을 통해 타원 피팅의 단축 가변성을 보정함으로써, 실제 콘크리트 절단면의 섬유 배향 계수($\alpha$) 산정 신뢰도를 98 % 이상으로 향상.

## Methods

- **구면 좌표계 기반 3차원 섬유 배향각 정의 (Figure 3 & Eq. 1~3)**:
  - 경사각 (Inclination angle, out-of-plane) $\vartheta$: 단면 법선 벡터와 섬유 축 사이의 각도 ($0 \le \vartheta \le \pi/2$).
    $$\vartheta = \arccos\left(\frac{b_{ellipse}}{a_{ellipse}}\right) = \arccos\left(\frac{d_f}{2a}\right)$$
  - 방위각 (Azimuth angle, in-plane) $\phi$: 단면 평면 내 기준축과 타원 장축 사이의 각도 ($0 \le \phi < 2\pi$).
  - 직교 단면 극한: $\lim_{\vartheta \to 0} \cos\vartheta = 1 \rightarrow 2a = d_f$ (원형 단면).
- **POV-Ray 가상 영상 합성 시스템**:
  - CSG 모델링: Python 스크립트로 500~2000개의 직선형 및 엔드후크형 강섬유($d_f = 0.50\ \text{mm}, L_f = 30\ \text{mm}$)를 지정된 ODF 분포(등방성, 2D 정렬, 1D 배향)로 3차원 공간 배치.
  - 슬라이스 절단 모사: `clipped_by` 객체 수정자를 적용하여 가상 절단면 생성.
  - X선 흡수 모사: `interior { media { absorption ... } }` 구문을 사용하여 CT 투과 영상 생성.
- **이미지 프로세싱 및 통계 분석**:
  - ImageJ Particle Analysis 모듈을 통한 타원 자동 피팅.
  - R 통계 패키지(CircStats, directional)를 활용한 2차원/3차원 방향 통계 분포 적합도 검정.

## Results

### 1. 가상 정답 영상 vs ImageJ 타원 피팅 계측 오차 비교

| 섬유 배향각 파라미터 | 실제 설정값 (Ground Truth) | 이미지 분석 측정값 (ImageJ) | 오차 및 편향 특성 | 보정 후 정확도 |
|---|---|---|---|---|
| **직교 경사각 ($\vartheta \approx 0^\circ$)** | $0.0^\circ$ (완전 직교) | **$8.5^\circ \pm 3.2^\circ$** | 원형을 타원으로 과적합하는 편향 발생 | **$\le 1.5^\circ$** |
| **중간 경사각 ($\vartheta = 45^\circ$)** | $45.0^\circ$ | **$44.8^\circ \pm 1.8^\circ$** | 가장 높은 정확도 발현 구간 | **$\le 1.0^\circ$** |
| **평행 경사각 ($\vartheta \approx 85^\circ$)** | $85.0^\circ$ | **$79.2^\circ \pm 4.5^\circ$** | 절단면 길이 과소평가로 인한 오차 | **$\le 2.5^\circ$** |
| **방위각 ($\phi$)** | 임의 3차원 방향 | $\phi$ vs $\phi + 180^\circ$ | $180^\circ$ 대칭 모호성 존재 | 양면 슬라이스 연계로 해소 |

### 2. ODF 분포 및 가상 검증의 학술적 기여
- **인공 쌍봉성(Bimodality) 제거**: 기존 실험 연구들에서 콘크리트 내부 섬유 배향이 이중 피크를 갖는다고 보고되었던 현상이 이미지 분석 알고리즘의 타원 단축 피팅 노이즈에 의한 왜곡임을 명확히 규명.
- **비파괴 CT 캘리브레이션**: X선 CT 스캔 전산 재구성 시 아티팩트 보정용 표준 디지털 팬텀(Digital Phantom)으로 POV-Ray 합성 영상을 공식 채택할 수 있는 방법론 확립.

- **종합 결론**: 본 연구는 컴퓨터 그래픽스 레이트레이싱 기술을 복합재료 비파괴 영상역학에 성공적으로 접목하여, 섬유 배향각 이미지 측정 알고리즘의 오차를 원천 규명하고 초정밀 ODF 복원을 가능케 한 전산 재료 영상 해석 분야의 대표적 원전 논문임.

## Related Notes

- [[fiber-orientation-distribution]] — 섬유 배향각 분포 및 3차원 ODF 역학 이론.
- [[dupont-2005-distribution-of-steel-fibres-in]] — 강섬유 단면 배향 계수 및 분포 해석.
- [[barnett-2010-assessment-of-fibre-orientation-in]] — X선 CT 및 비저항 기반 섬유 배향 진단.
- [[ndt-and-shm-of-cementitious]] — 복합체 내부 비파괴 영상 및 센싱 기술.
