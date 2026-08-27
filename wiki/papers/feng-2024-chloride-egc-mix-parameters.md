---
title: "Chloride Erosion Resistance of Fly Ash/Slag-Based EGC: Mix Parameter Effects (Feng et al., 2024)"
type: source_note
source: "sources/1-s2.0-S0959652624002324-main.pdf"
citation: "Feng, H., Xin, X., Guo, A., Yu, Z., Shao, Q., Sheikh, M.N., Sun, Z. Effect of mix proportion parameters on chloride erosion resistance of fly ash/slag-based engineered geopolymer composites. Journal of Cleaner Production 438 (2024) 140785."
date: 2026-08-22
tags: [egc, chloride-erosion, durability, ggbs, pe-fiber, diffusion-coefficient, mix-design]
---

# 플라이애시/슬래그 EGC의 염화물 침식 저항성과 배합 인자

## Summary

플라이애시 기반 EGC에 GGBS를 도입해 염화물 유발 침식 저항을 강화한 연구. GGBS 함량(40~100 %), W/B(0.32~0.38), 알칼리 활성화제(4~7 %), PE 섬유(1.0~2.5 vol %)가 염소 이온 확산계수·침식 깊이·강도 손실률에 미치는 영향을 120일 침식 시험으로 규명. 최적 EGC는 확산계수 0.0661×10⁻¹² m²/s, 압축 70~80 MPa, 인장강도 5~6 MPa, 인장변형률 8 %를 동시 달성.

## Key Contributions

1. GGBS 함량 효과: GGBS↑ → C-A-S-H 생성 증가 + 공극률 감소(24.13→13.41 %) + 임계공극크기 감소(5.16→3.29 nm)로 염화물 저항 향상. hydrotalcite가 Cl⁻를 구조 변형 없이 결합하는 것이 추가 메커니즘. 단, 인장변형률은 GGBS 60 % 초과 시 감소(8.15→3.89 %) — FA 입자가 섬유/매트릭스 계면을 채워 인발을 어렵게 하는 효과 상실.
2. W/B 효과: W/B↓ → 내염성 향상(확산계수 증가율 30→120일간 96 % vs 282 %). W/B 0.38은 인장강도 자체가 33.68 % 급락 — 배합 상한 존재.
3. 알칼리 활성화제 최적점 6 %: Si·Al 용해 촉진으로 C-A-S-H 증가·공극률 최소(10.06 %), 그러나 7 %에서는 규알루미나 겔 조기 침전과 표피 현상으로 역효과.
4. PE 섬유 최적점 2.0 %: 브리징으로 균열 억제·내염성 최고. 2.5 %는 분산 불량으로 공극 증가. 흥미로운 관찰: 침식 후 인장변형률이 오히려 증가(최대 59 %) — 섬유-매트릭스 계면 약화로 인발이 용이해짐.
5. 침식 후에도 strain-hardening 유지 확인(모든 배합).

## Methods

무수규산소다 활성화제, PE 섬유(직경 19~43 μm, 12 mm, 3000 MPa). ASTM C1543 준거 3 % NaCl 침지(30/60/90/120일), 심도별 분말 채취(2~35 mm) 후 Fick 제2법칙 MATLAB 피팅으로 확산계수 산출. MIP·XRD·SEM 병행.

## Results

- 압축강도 손실은 Ca(OH)₂와의 팽윤 복염(CaCl₂⋅Ca(OH)₂⋅H₂O) 생성이 원인.
- Friedel's salt는 90일 이후 형성되어 초기 흡착에는 기여 작음.
- 침식된 PE-2.0은 문헌의 미침식 ECC 대비 강도 1.5배·변형률 3배 수준.

## Related Notes

- [[han-2022-egc-impact-cold-temperature]]의 알칼리 농도-연성 반비례 결과와 일관(본 연구에서도 알칼리↑ → 매트릭스 밀실화 → 인장변형률 감소).
- [[shumuye-2024-nanoparticles-egc-review]]의 나노입자 과잉 응집 역효과와 같은 "최적점 존재" 패턴이 알칼리·섬유 함량에서도 재현.
- [[lee-2008-database-mix-optimization-convex-hull]] — 배합 인자-성능 관계를 데이터베이스로 최적화하는 방법론; 본 논문의 배합 인자 매핑이 데이터 기반 설계의 입력이 되는 관계.
