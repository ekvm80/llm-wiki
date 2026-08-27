---
title: "3D Printable ECC (3D 프린팅용 고인성 시멘트 복합재)"
type: concept
source: "[[li-2023-ecc-micromechanics-critical-review]], [[lu-2017-fiber-orientation-thickness]]"
date: 2026-08-23
tags: [concept, 3d-printing, additive-manufacturing, printability, buildability, fiber-alignment, anisotropy, rheology]
---

# 3D Printable ECC (3D 적층제조용 변형경화 시멘트 복합재)

## 정의

거푸집(formwork) 없이 노즐을 통해 층상(layer-by-layer)으로 압출 적층되는 3D 콘크리트 프린팅(3DCP) 기술에 고연성 변형경화(ECC/SHCC) 메커니즘을 결합한 적층제조용 건설 재료.

## 핵심 요구 특성 및 물리적 상충 관계

1. **프레시 상태 레올로지 (Fresh Rheology)**:
   - **압출성 (Extrudability)**: 노즐을 통과할 때 낮은 항복응력과 전단박화(shear-thinning) 거동을 보여 막힘 없이 원활히 토출되어야 함.
   - **적층성 (Buildability)**: 토출 직후 자중 및 상부 적층 하중에 견딜 수 있도록 정적 항복응력(static yield stress)과 틱소트로피(thixotropy)가 빠르게 회복되어야 함.
2. **섬유 배향과 이방성 (Fiber Alignment & Mechanical Anisotropy)**:
   - 좁은 노즐 압출 과정에서 작용하는 강한 전단 응력장으로 인해 불연속 단섬유들이 **프린팅 진행 방향(인쇄선 방향)으로 고도로 평행하게 정렬**됨.
   - **종방향 (인쇄선 평행 방향)**: 섬유 배향 계수 $\eta_\theta \approx 0.9$ 이상으로 극대화되어 직접인장강도(>8 MPa) 및 인장 연신율(4~8 %)이 일반 몰드 타설 ECC 대비 크게 향상됨.
   - **횡방향 및 층간 (Layer-to-layer interface)**: 섬유 가교가 결손되어 상대적으로 취약한 층간 부착면(cold joint)이 형성되므로 이방성 극복을 위한 계면 인터로킹 설계가 중요함.

## 배합 및 프린팅 파라미터

- 결합재: 고함량 플라이애시(HVFA), 실리카퓸, 점성개질제(VMA), 틱소트로피 증진제(나노클레이).
- 섬유: 고탄성 PE 섬유, PVA 섬유 (길이 6~12 mm).
- 프린팅 변수: 노즐 직경/형상, 압출 속도, 이동 속도, 적층 지연 시간(layer interval time).

## 관련 노트

- [[lu-2017-fiber-orientation-thickness]] — 압출 및 얇은 부재에서의 섬유 배향 계수 이론.
- [[fiber-orientation-distribution]] — 유동 유도 배향 및 이방성 구성 모델.
- [[strain-hardening-mechanism]] — 적층 부재에서의 인장 변형경화 발현 조건.
- [[qian-2010-self-healing-ecc-nanoclay]] — 레올로지 제어용 나노클레이 혼입 복합재.
