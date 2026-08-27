---
title: "Air Voids Size Distribution Determined by Ultrasonic Attenuation (Yim, Kim, Lee & Kwak, 2013)"
type: source_note
source: "sources/Yim-2013-Air voids size distribution determine.pdf"
citation: "Yim, H.J., Kim, J.H., Lee, B.Y., Kwak, H.G. Air voids size distribution determined by ultrasonic attenuation. Cement and Concrete Research (2013). KAIST·전남대 공동(이방연 공저)"
date: 2026-08-22
tags: [ultrasonic-attenuation, air-voids, size-distribution, ndt, log-normal-distribution, inverse-analysis, user-group]
---

# 초음파 감쇠 기반 기공 크기 분포 정량화

## Summary

사용자 그룹 논문(KAIST 김재홍·전남대 이방연 공저). 경화 시멘트재의 기공에 의한 초음파 감쇠 측정치를 수정 Roney 모델로 해석하고 비선형 최적화(역산)로 3차원 기공 체적 분율과 크기 분포를 산출하는 비파괴 정량화 기법을 제안했다. 로그정규 분포를 기저 함수로 사용해 영상분석·투수공극 시험과 교차 검증했으며, 500 kHz 이하 저주파에서도 유효해 두꺼운 실구조물 적용이 가능하다.

## Key Contributions

1. **초음파 감쇠 스펙트럼 → 3D 기공 분포 역산 프레임**: 수정 Roney 모델+비선형 최적화로 체적 분율과 크기 분포를 동시 산출. 투수공극 체적률과 양호한 일치.
2. **로그정규 분포가 최적 기저**: 영상처리 분포의 적합도 검증 결과 로그정규가 우수 — 이를 역산의 basis function으로 쓰면 1차·2차 모멘트가 영상분석 결과와 유의차 없음.
3. **고주파 한계 극복**: 500 kHz 이하 저주파에서 유효 — 두꺼운 부재의 현장 적용성 확보.
4. **고빈도 감쇠 조건 규명**: 투수공극 체적률 34 %에서 고주파 감쇠 급증 — 역산 기공 체적률 8.2 %와 대응.

## Methods

- 재료: 시멘트 페이스트(투수공극 체적률 변조 시험체).
- 장비: 초음파 발신·수신 프로브로 감쇠 스펙트럼 측정.
- 해석: 수정 Roney 모델 + 로그정규 분포 기저 비선형 최적화 → 체적 분율·크기 분포 도출.
- 검증: ASTM C642 투수공극 체적률 + 단면 영상분석(크기 분포) 교차 비교.

## Results

- 고주파 감쇠 증가는 기공 체적 분율 지배.
- 역산 체적률 vs 투수공극 체적률: 로그정규 기저 사용 시 정합 개선.
- 저주파(500 kHz 이하)에서도 유효 — 실 구조물 NDT 가능.

## Related Notes

- [[negahban-2021-pore-gradation-gpc-opcc]] — UPV·PDIA·LNP 공극 계측 축
- [[kim-2017-enhanced-strain-measurement-range]] — SHM 센서 축
- [[tran-2018-pulsed-thermography-defects]] — NDT 결함 검출
- [[astm-c215-resonant-frequency-test]] — 동특성 표준 시험법
