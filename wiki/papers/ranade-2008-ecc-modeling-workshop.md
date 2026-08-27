---
title: "Modeling Engineered Cementitious Composites (ECC) — ACBM/NIST 워크숍 발표 (Ranade, 2008)"
type: source_note
source: "sources/P7 Ranade & Li (2008).pdf"
citation: "Ranade, R. Modeling Engineered Cementitious Composites (ECC). 19th ACBM/NIST Computer Modeling Workshop 발표 슬라이드 12매(2008년 6월 16~18일, Gaithersburg, Maryland, University of Michigan ACE-MRL). 파일명과 달리 단독 발표자는 Ranade."
date: 2026-08-22
tags: [ecc-modeling, multiscale, workshop-slides, micromechanics, nist, fiber-bridging, poster-series]
---

# ECC 모델링 ACBM/NIST 워크숍 발표

## Summary

2008년 ACBM/NIST Computer Modeling Workshop에서 Ravi Ranade가 발표한 12매 슬라이드. ECC의 미시역학 설계 프레임(단일 섬유 인발 → 브리징 응력-균열개구 → 다중균열 → 구조)을 NIST의 콘크리트 마이크로스트럭처 모델링 역량과 연결해 나노-인프라 전 스케일 계산 도구 체계를 제안하고 협력을 공청한 자료다.

## Key Contributions

- ECC 스케일 연계 지도 정리: 10⁻⁶~10⁻⁵ m(단일 섬유 인발) → 다중 섬유 브리징 → 다중균열 구조요소 → ECC 부재 구조까지 각 단계의 실험-모델 대응 관계를 한 장으로 압축.
- 인터페이스 파라미터 체계: Gd(화학결합), τ0(마찰응력), β(slip hardening 계수)와 snubbing 계수 f를 포함한 σB-δ 브리징 곡선 모델 소개 — Yang & Li 2008 JACT(fiber-bridging constitutive law 원전)를 참고문헌으로 직접 인용.
- 균열폭 상한 논리: 무작위 균열이 서비스수명 예측을 불가능하게 하는 일반 콘크리트와 달리, ECC의 균열폭은 철근 상세·구조 크기와 무관한 재료 특성으로 상한 약 60 µm — 내구성·수송모델(ECC 서비스수명 예측) 연계 근거.
- NIST 모델 확정 과제 목록: C-S-H 성장 등 서브마이크로 제어, 섬유 분산·레올로지 시뮬레이션, 섬유 주위 수화물 성장, 자기수축-인장강도 발달 경쟁, 수송특성 기반 서비스수명·생애비용 예측, 슬래그/실리카퓸/플라이애시 치환 수화 모델링, 열화-재치유에 따른 시간 의존 특성 변화.
- 요약 메시지: "ECC는 연구실에서 실규모 현장 응용으로 이동 중"이며 나노-구조 스케일을 잇는 계산 도구 세트가 강도·내구성·경제성·지속가능 인프라에 기여 — 후속 HSHDC 보고서(P5)와 포스터(P3/P4)로 이어지는 로드맵의 모델링 축.

## Related Notes

- [[fiber-bridging-constitutive-law]] — 참고문헌에 직접 인용된 브리징 구성법칙 개념 페이지
- [[pseudo-strain-hardening-criteria]] — 다중균열 성립 조건 프레임
- [[ranade-2012-hshdc-poster]] — 같은 저자의 후속 HSHDC 포스터
- [[li-2003-ecc-review-jact]] — Performance Driven Design 총론(Li 1993 JSCE 계보)
