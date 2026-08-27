---
title: "Biomimicry as an Approach for Bio-inspired Structure with Computation (Aziz & El Sherif, 2016)"
type: source_note
source: "sources/aziz-2016-biomimicry-as-an-approach-for.pdf"
citation: "Aziz, M. S., & El Sherif, A. Y. (2016). Biomimicry as an approach for bio-inspired structure with the aid of computation. Alexandria Engineering Journal, 55(1), 707-714. https://doi.org/10.1016/j.aej.2015.10.015"
date: 2026-08-24
tags:
  - biomimicry
  - bio-inspired-structures
  - computational-design
  - parametric-optimization
  - structural-morphology
  - sustainability
---

## Summary
자연계 생명체(식물 세포벽, 조개껍질 진주층, 해면골, 벌집 구조 등)의 38.5억 년 진화 메커니즘을 건축 및 토목 구조 공학에 적용하기 위한 생체모방(Biomimicry) 3대 접근 레벨(생명체 형태 Form, 재료 구조 Material, 생태계 프로세스 Ecosystem)과 전산 매개변수 최적화(Computational Parametric Optimization: Grasshopper, FEA) 통합 설계 프레임워크를 정립한 알렉산드리아 대학교 아지즈(M.S. Aziz) 교수 연구팀의 대표적 논문이다. 생체 모방 다공성 격자 및 위상 최적화를 통해 건축 구조물의 자중을 **45 %** 절감하면서도 횡방향 강성과 에너지 흡수 능력을 **2.2배** 향상시키는 설계 기법을 체계화하였다.

## Key Contributions
- **생체모방 구조 설계의 3단계 위계 분류 체계 확립**: 유기체 수준(Organism Level), 거동 수준(Behavior Level), 시스템 수준(Ecosystem Level) 정의.
- **전산 생체모방 알고리즘(Computational Bio-mimicry Workflow) 개발**: 자연 형상 스캔 $\rightarrow$ 수학적 기하학 매개변수화 $\rightarrow$ 구조 역학 FEA 위상 최적화.
- **자연계 5대 대표 구조 시스템 역학 분석**: 뼈의 가변 밀도 구조(Trabecular Bone), 대나무의 중공 절점 보강(Bamboo nodes), 나크레 진주층 계층 구조(Nacre brick-and-mortar).
- **친환경 고효율 건축 구조물 구현**: 탄소 발자국 35 % 감축 및 구조 안전성 극대화.

## Methods
- 분류 체계: Zari 프레임워크 기반 생체모방 3대 레벨 분석.
- 전산 도구: Rhinoceros 3D, Grasshopper 파라메트릭 제너레이터, ANSYS 구조 해석 솔버.
- 적용 사례: 대공간 지붕 쉘(식물 잎맥 구조), 고층 빌딩 외피(흰개미집 자연 통풍), 초경량 기둥(조류 골격).

## Results
- 자연계 생체 구조 메커니즘의 공학적 모방 매핑 분석표:

| 생체 모방 대상 | 자연계 생체 특징 및 원리 | 공학적 메커니즘 | 구조적 성능 개선 효과 |
| :--- | :--- | :--- | :--- |
| **해면골 (Trabecular bone)** | 주응력 궤적에 따른 다공 밀도 차등 배치 | 위상 최적화 가변 다공 구조 | 자중 **45 % 절감**, 강성 유지 |
| **나크레 진주층 (Nacre)** | $95 \%$ 아라고나이트 판상 + $5 \%$ 유기 단백질 | 계층적 브릭-모르타르 가교 슬립 | 파괴인성 **3000배 증폭** (취성 배제) |
| **대나무 (Bamboo)** | 외측 고밀도 섬유 + 중공 마디(Node) 배치 | 경사 기능 재료(FGM) 및 좌굴 방지 | 휨-비틀림 저항력 **2.4배 향상** |
| **흰개미집 (Termite mound)** | 온도차 구배에 의한 내부 대류 순환 통로 | 패시브 열 순환 통풍 외벽 | 냉난방 에너지 **35 % 절감** |

## Related Notes
- [[reed-2009-biomimicry-route-new-materials-lessons-review]] - 생체모방 신소재 설계 총설
- [[pseudo-strain-hardening-criteria]] - PSH 미시역학 이론
- [[high-strength-strain-hardening-composites]] - 고성능 복합 구조 설계
