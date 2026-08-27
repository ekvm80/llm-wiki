---
title: "The Variation of Flow-Dependent Tensile Behavior in Radial Flow Dominant Placing of UHPFRCC (Kwon, Kang, Lee & Kim, 2012)"
type: source_note
source: "sources/Kwon-2012-The variation of flow-dependent tens.pdf"
citation: "Kwon, S.H., Kang, S.-T., Lee, B.Y., Kim, J.-K. The variation of flow-dependent tensile behavior in radial flow dominant placing of ultra high performance fiber reinforced cementitious composites (UHPFRCC). Construction and Building Materials 33 (2012) 109-121. doi: 10.1016/j.conbuildmat.2012.01.006"
date: 2026-08-22
tags: [uhpfrc, fiber-orientation, radial-flow, placement, tensile-behavior, jeffery-equation, fictitious-crack-model]
---

# UHPFRCC 방사상 흐름 타설에서 유동 의존 인장거동 변화

## Summary

1320×1320×100 mm UHPFRCC 플레이트를 중앙 자유낙하로 타설해 방사상 흐름을 유도하고, 위치별 절단 보(36개)의 휨인장 시험으로 흐름거리에 따른 인장거동 변화를 실험 확인한 다음, Jeffery 방정식 기반 섬유 회전 해석+방향성 PDF 통합 브리징 모델+FEM(가상균열모델)으로 예측한 논문(KAIST 김진근·강수태·이방연 공동연구). 섬유가 흐름거리가 증가할수록 흐름 방향과 평행하게 정렬되어, 시험축이 흐름에 평행하면 성능이 저하하고 수직이면 향상됨을 해석·실험 일치로 입증했다.

## Key Contributions

- 방사상 흐름에서의 섬유 방향성 분포 진화 해석 프레임: Jeffery 방정식에 원통좌표 1차원 방사류 속도장 Vr=Q/(2πrh)를 대입해 흐름거리별 방향각 θ의 확률밀도함수 변화를 수치 추적(110 스텝, 5 mm 간격).
- 방향성 PDF를 균열면에 걸쳐 적분해 섬유 브리징 응력 σ_B(δ)를 계산하는 절차의 구조물 스케일 검증. 단섬유 인발모델은 Lee 등(2010) 경사 강섬유 인발식, 매트릭스 연화는 이선형 연화곡선.
- 실험-해석 정합 확인: 축이 흐름에 수직한 계열 2에서는 흐름거리 증가에 따라 최대하중·처짐경화가 증가하고, 평행한 계열 1·3에서는 감소 — 해석이 이 비대칭을 정확히 재현.
- 실무 함의: 소형 시험편 휨결과를 구조물에 외삽하는 것의 위험성을 정량화하고, 타설 흐름 유도로 목표 배향을 얻는 생산 전략의 근거 제시.

## Methods

- UHPFRCC 배합(시멘트 질량비): 시멘트 1.00, 물 0.25, 실리카퓸 0.25, 잔골재 1.10, 충진재 0.30, 고감소제 0.018, 강섬유(길이 13 mm, 직경 0.2 mm) 2 vol %.
- 플레이트 중앙에서 약 200 mm 높이 자유낙하 타설 후 방사상 자유플로우, 표면마감만 시행. 100×100×440 mm 보 36개 절단, 지간 300 mm 4점 휨, 250 kN 액추에이터 변위제어, LVDT 처짐 계측.
- 해석: 초기 방향분포 w(h,φ)=1/4π(3D 랜덤), Q=0.001 m³/s, 흐름깊이 50 mm 가정. FEM은 중앙부 단일균열 가정+계면요소, 균열후 거동은 매트릭스 연화+브리징 합성곡선.

## Results

- 초기균열 처짐은 36개 전체가 0.06~0.08 mm 좁은 범위로 위치 무관. 최대하중은 위치에 따라 유의미한 차이.
- 계열 1(평행): 중앙→외곽으로 갈수록 최대하중 증가 없음, r≥275 mm에서 처짐경화 소멸(1-6·1-7은 초기균열=최대하중 후 급강하). 계열 3도 유사.
- 계열 2(수직): 전 보가 처짐경화 발현, 2-7~2-10에서 경화 증분 최대. 2-11~12(외곽)는 증분 감소.
- 해석 PDF: 평행 케이스에서 θ가 흐름거리와 함께 증가(섬유가 시험축에 수직 배치→인발 저항 저하), 수직 케이스에서 반대. FEM 하중-처짐 곡선이 실험과 부합, 2-6/2-7의 경화 vs 1-6/1-7·3-6/3-7의 비경화까지 재현.

## Related Notes

- [[kang-2008-fiber-orientation-djp0808]] — 동일 그룹 섬유 배향·휨강도 관계 선행 연구
- [[kang-2011-fiber-distribution-uhsc-flexural-strength]] — 강섬유 분포 특성이 휨강도에 미치는 영향(참고문헌 6)
- [[kim-2007-fiber-dispersion-fluorescence]] — 사용자 그룹 섬유 분포 정량 평가(영상기반)
- [[lee-2009-extruded-ecc-panel-fiber-distribution]] — 압출 공정의 의도적 배향과 본 논문의 유동 유도 배향 대비
- [[fiber-bridging-constitutive-law]] — 방향성 PDF 통합 브리징 응력 프레임
- [[lai-2025-uhpfrc-nc-composite-beam-flexure]] — UHPFRC 구조 응용 축
- [[afgc-2013-uhpfrc-recommendations]] — UHPFRC 설계 권고(안전계수 접근 언급)

