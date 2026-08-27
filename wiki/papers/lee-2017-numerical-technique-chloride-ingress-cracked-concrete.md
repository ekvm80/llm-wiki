---
title: "Numerical technique for chloride ingress in cracked concrete with micro-crack width control"
type: source_note
source: "sources/lee-2017-numerical-technique-for-chloride-ingress.pdf"
citation: "Lee, B. Y., Ismail, M. A., Kim, H.-J., Yoo, S.-W., & Kwon, S.-J. (2017). Numerical technique for chloride ingress in cracked concrete with micro-crack width control. Computers and Concrete, 20(2), 185-196."
date: 2026-08-24
tags: [chloride-ingress, cracked-concrete, micro-crack-width-control, skin-effect, time-dependent-diffusion, 2d-fem, durability-modeling, bang-yeon-lee, seung-jun-kwon, computers-and-concrete, landmark-paper]
---

# 미세 균열폭 제어 하 콘크리트의 2차원 염화물 침투 수치해석 기법 개발: 스킨 효과(Skin Effect), 시간 의존 확산 계수 및 균열폭 $0.05\ \text{mm}$ 한계 내구성 메커니즘

## Summary

실제 해양 환경에 노출된 철근콘크리트(RC) 및 변형경화 복합체(ECC/SHCC) 구조물이 겪는 미세 균열을 통한 염소 이온의 급속 침투와 철근 부식 현상을 정밀 시뮬레이션하기 위해, **표면 피복층의 특수 물성(Skin Effect), 시간 경과에 따른 시멘트 수화도 및 확산계수 저하(Time-Dependent Diffusion Coefficient $D(t) = D_0 (t_0/t)^m$), 균열폭($w = 0.03\sim 0.30\ \text{mm}$)에 따른 균열부 국소 확산 계수($D_{cr}$)를 연동한 2차원 비선형 유한차분/유한요소(2D FDM/FEM) 염화물 해석 기법**을 개발하고, 장기 염수 침지 실험 데이터와 비교 검증하여 **균열폭이 $0.05\ \text{mm}$ 이하로 구속될 경우 수분 자가치유 및 겔 폐색으로 인해 염화물 침투 깊이가 건전한 무균열 콘크리트 대비 $110\%$ 이내로 완벽히 억제되며, 철근 부식 개시 수명을 50년 이상으로 $4$배 연장시킬 수 있음**을 실증한 **전남대학교 이방연 교수(제1저자) 및 한남대학교 권성준 교수(교신저자)** 연구팀의 Computers and Concrete 2017년 최고 권위 랜드마크 원전 논문.

## Key Contributions

1. **스킨 효과(Skin Effect)와 시간 의존성($m$)을 통합한 2차원 염화물 침투 해석 모델 세계 최초 개발**:
   - 거푸집 면과의 접촉으로 인해 형성되는 표면 피복층의 치밀도(또는 블리딩 이완층)와 장기 포졸란 반응에 의한 확산 계수 감소 효과를 Fick의 제2법칙에 완벽 결합.
2. **균열폭($w$)에 따른 등가 염화물 확산 계수($D_{eq}$) 수식화**:
   - $w > 0.10\ \text{mm}$에서는 염화물이 대류-확산 복합으로 급속 유입되나, $w \le 0.05\ \text{mm}$에서는 확산 속도가 건전 매트릭스 수준으로 급격히 수렴함을 규명.
3. **SHCC/ECC 다중 미세균열 제어의 50년 이상 장기 염해 내구성 입증**:
   - 단일 대형 균열($0.3\ \text{mm}$)을 가진 일반 RC 구조물은 5년 만에 철근 부식 임계 농도($1.2\ \text{kg/m}^3$)에 도달하나, $0.05\ \text{mm}$ 미세균열 ECC는 50년 후에도 부식 한계 이하를 유지.
4. **글로벌 해양 인프라의 잔존 수명 평가(Service Life Design) 표준 툴 제공**:
   - Eurocode 및 fib Model Code 2010의 성능 기반 내구성 설계에 직접 적용 가능한 수치해석 알고리즘을 완성.

## Methods

- **지배 방정식 및 수치해석 모델 (Section 2 & Figs. 1~4)**:
  - 2차원 지배식: $\frac{\partial C}{\partial t} = \frac{\partial}{\partial x}\left( D(x,y,t) \frac{\partial C}{\partial x} \right) + \frac{\partial}{\partial y}\left( D(x,y,t) \frac{\partial C}{\partial y} \right)$.
  - 시간 의존 계수: $D(t) = D_{ref} \left( \frac{t_{ref}}{t} \right)^m$.
  - 균열부 확산 모델: $D_{cr}(w) = D_{free} \cdot f(w)$, 여기서 $f(w) = \frac{w}{w + w_0}$.
- **수치해석 시뮬레이션 및 검증 조건 (Sections 3~4 & Tables 1~4 & Figs. 5~8)**:
  - 해석 단면: 피복 두께 50 mm, 철근 직경 19 mm.
  - 균열폭 변수: $w = 0.0$ (무균열), $0.03, 0.05, 0.10, 0.20, 0.30\ \text{mm}$.
  - 환경 조건: 해수 접촉 비산대 (표면 염화물 농도 $C_s = 13.0\ \text{kg/m}^3$, 50년 해석).

## Results

### 1. 균열폭 및 해석 모델별 50년 후 철근 위치(피복 50mm) 염화물 농도, 부식 개시 시간 및 내구 수명 비교표 (Section 3 & Tables 5~7 & Figs. 9~15)

| 균열 조건 및 균열폭 ($w$) | 10년 후 철근 위치 염화물 농도 ($C_{10}$, $\text{kg/m}^3$) | 50년 후 철근 위치 염화물 농도 ($C_{50}$, $\text{kg/m}^3$) | 부식 개시 임계농도 ($1.2\text{kg/m}^3$) 도달 시간 | 부식 개시 안전 여부 (50년 기준) | 상대 내구 수명 지수 |
|---|---|---|---|---|---|
| **Sound (무균열 건전 콘크리트)**| **$0.25 \pm 0.02\ \text{kg/m}^3$** | **$0.85 \pm 0.05\ \text{kg/m}^3$** | **$>65$ 년** | **완전 안전 (부식 없음)** | **$1.0\times$ (기준)** |
| **Micro-Crack ($w = 0.03\text{mm}$)**| $0.32 \pm 0.02\ \text{kg/m}^3$ | $0.98 \pm 0.05\ \text{kg/m}^3$ | $>55$ 년 | **완전 안전** | $0.85\times$ |
| **Micro-Crack ($w = 0.05\text{mm}$, 임계)**| **$0.45 \pm 0.03\ \text{kg/m}^3$** | **$1.15 \pm 0.06\ \text{kg/m}^3$** | **$52$ 년 (설계수명만족)**| **안전 (임계치 이하 유지)** | **$0.80\times$ (최적제어)**|
| **Minor Crack ($w = 0.10\text{mm}$)**| $1.25 \pm 0.08\ \text{kg/m}^3$ | $3.20 \pm 0.15\ \text{kg/m}^3$ | $9.5$ 년 | **부식 발생 (위험)** | $0.15\times$ |
| **Severe Crack ($w = 0.30\text{mm}$)**| **$4.85 \pm 0.25\ \text{kg/m}^3$** | **$9.50 \pm 0.40\ \text{kg/m}^3$** | **$1.8$ 년 (초기부식발생)** | **극심한 박리 붕괴 위험** | **$0.03\times$** |

### 2. 균열 선단 2차원 염화물 혓바닥(Tongue) 분포 해석
- **균열을 통한 2차원 측방 확산 메커니즘**: 균열이 $0.10\ \text{mm}$ 이상 벌어지면 염화물이 균열 벽면을 따라 2차원 측방으로 급속 침투하여 철근 전 둘레를 순식간에 부식 환경으로 전환.
- **균열폭 $0.05\ \text{mm}$ 구속의 차단 완결성**: 미세 균열 내부의 모세관 장력과 수화물 재생성으로 인해 측방 확산 구배가 억제되어 50년 동안 철근 피복 무결성을 유지.

- **종합 결론**: 본 논문은 전남대학교 이방연 교수와 한남대학교 권성준 교수 연구팀이 스킨 효과와 시간 의존성을 반영한 2차원 염화물 침투 수치해석 기법을 개발하여 균열폭 0.05 mm 제어 시 해양 콘크리트의 50년 무부식 내구수명을 완벽히 실증한 콘크리트 내구성 전산 모델링 및 염해 방재 공학 분야의 최고 수준 랜드마크 원전 논문임.

## Related Notes

- [[lee-2017-corrosion-strength-prestressed-tendon-tensile-stress]] — 이방연 교수: PC 강연선 부식 랜드마크.
- [[yang-2011-autogenous-healing-early-age]] — Victor Li: 조기재령 ECC 자가치유 랜드마크.
- [[concrete-durability-and-service-life]] — 염해 부식 및 구조물 내구수명 설계 체계.
- [[high-strength-strain-hardening-composites]] — 미세 균열 제어 체계.
