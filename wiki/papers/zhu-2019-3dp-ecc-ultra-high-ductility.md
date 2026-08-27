---
title: "Development of 3D Printable ECC with Ultra-High Tensile Ductility for Digital Construction (Zhu et al., 2019)"
type: source_note
source: "sources/3D printable ECC UH.pdf"
citation: "Zhu, B., Pan, J., Nematollahi, B., Zhou, Z., Zhang, Y., Sanjayan, J. Development of 3D printable engineered cementitious composites with ultra-high tensile ductility for digital construction. Materials and Design 181 (2019) 108088. doi: 10.1016/j.matdes.2019.108088"
date: 2026-08-22
tags: [3d-printing, pe-ecc, ultra-high-ductility, thixotropy, buildability, fiber-alignment]
---

# 초고인장연성 3D 프린팅 ECC 개발

## Summary

압출식 3DCP용 PE-ECC를 개발해 인장변형률 11.4 %(주조 대비 우수)까지 달성한 논문. 강섬유 대체가 아닌 '자기보강(self-reinforced)' 구조 실현이 목표. OPC+황화알루미네이트 시멘트(SAC)+플라이애시 삼원계 바인더에 HPMC+아타펄자이트 나노클레이(ANC) 틱소트로피 혼입으로 압출성·적층성을 확보했다.

## Key Contributions

1. 초고연성 달성: PE 섬유 aspect ratio 500(12 mm×24 μm, 3 GPa, E 116 GPa)으로 V_f 1.5 %에서도 변형률 9.57 %, 2 %에서 11.43 %. 기존 3DP-ECC 문헌(PVA ~4 %, HDPE 3.2 %) 대비 월등.
2. 프린팅이 주조보다 우수하다는 발견: V_f 1.5~2 %에서 3D 프린팅 ECC의 인장강도·변형률이 주조품보다 각각 6~13 %·12~14 % 높음. 원인 2개:
   - 섬유 배향 최적화: 하중 방향 평행 단면당 유효 섬유 수가 주조 4241개/cm² vs 프린팅 6072개/cm²(SEM 통계). 압출이 섬유를 응력 방향에 정렬.
   - 기공 분포 균일화: 프린팅 매트릭스의 기공 크기 분포가 더 좁아 J′_b/J_tip 여유의 편차 감소 → 안정적 포화 다중균열.
3. 저섬유 영역에서는 역전: V_f 1.0 %에서는 프린팅 변형률 3.57 % < 주조 5.46 % — 포화 다중균열 임계 미달 시 정렬 이득보다 균열 수 부족이 지배. 배향 효과의 적용 한계 명시.
4. 구성 가능성(buildability) 정량 지표 제안: 무차원 H(높이 손실률)·W(폭 팽창률)·ϕ(직경 팽창률) — 17층 원통 적층 시험. M2(틱소트로피 첨가)는 H 0.8 %·W 5.5 %·ϕ 0.7 %로 M1(4.3/26.0/8.3 %) 대비 압도적.
5. 점도 회복률(VRR) 프린팀 적합성 지표: 프로토콜 1에서 M2 VRR 83.1 % vs M1 61.2 %. 정적 항복응력도 M2가 높아 적층 유리.

## Methods

Brookfield RST-SST vane 점도계(프로토콜 2종, Bingham down-curve 피팅), 간트리형 프린터(auger 압출기, 노즐 20 mm, 이송 100 mm/s·압출 100 g/s, 층 13 mm), JSCE dogbone(LVDT 게이지 80 mm), GB/T 17671 휨·압축, SEM+ImageJ 기공 통계.

## Results

- 압축강도 47.5~51.1 MPa(프린팅이 2~12 % 낮음 — 층간 기공), 휨강도 13.2~19.4 MPa(프린팅이 4~9 % 높음).
- 균열폭 69~82 μm(M2·M3), 균열 수 93~132개/80 mm 게이지.
- 기공 크기(67~68 μm)와 평균 균열폭이 근접 — 균일한 결함 크기가 다중균열 균등화에 기여.

## Related Notes

- [[pan-2023-dynamic-compressive-shpb-egc]]와 동일 그룹(Pan Jinlong, 동남대학교)의 후속 동적 연구 계보.
- 기공을 낮은 J_tip·σ_c의 설계 인자로 활용하는 논리는 [[li-mo-2011-hes-ecc-repair]]의 폴리스티렌 비드와 같은 맥락 — 의도적 초기 결함 전략(EPS beads 저섬유 EGC 설계와 직결).
- [[kang-2008-fiber-orientation-impacts-on-the]]의 배향-강도 관계를 인장에서 재현: 타설 방향(무작위) vs 압출(정렬) 차이가 바로 성능 차이로 나타남.
- [[yang-2009-rheological-control-in-production-of]]의 레올로지 제어 프레임이 프린팅 요건(압출성+적층성)으로 확장된 사례.
