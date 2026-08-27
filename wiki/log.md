# Wiki Log

형식: `## [YYYY-MM-DD] <ingest|query|lint|schema> | 제목` — append-only.

## [2026-08-22] schema | Karpathy 패턴 기반 신규 구축

- `~/Documents/Research_Knowledge/llm_wiki/`에 3계층 구조 확립: sources/(원본 PDF 863개) / wiki/ / AGENTS.md(schema)
- Hermes 연동 방식: 세션 cwd가 이 폴더일 때 prompt_builder가 AGENTS.md를 시스템 프롬프트에 자동 주입(소스 확인). 별도 검색 스크립트·SQLite 인덱스 없이 index.md 우선 탐색으로 시작
- 구 LLM_Wiki 시스템(Drive 미러+FTS 스크립트+구 스킬)은 사용자 결정으로 완전 중지·삭제됨. 원본 위키 MD는 Drive `atg_llm wiki`에 보존

## [2026-08-22] ingest | Li 2023 ECC micromechanics critical review

- 대상: `sources/__Yang micromechanics of ECC review paper.pdf` (실제 서지: Li, Qiu, Weng, Yang, Constr. Build. Mater. 362 (2023) 129765 — 파일명과 달리 첫저자 J. Li)
- 전문 11쪽 추출·독해 후 노트 생성: `wiki/papers/li-2023-ecc-micromechanics-critical-review.md`
- 파생 개념 페이지 2건 생성: `wiki/concepts/pseudo-strain-hardening-criteria.md`, `wiki/concepts/fiber-bridging-constitutive-law.md`
- index.md 갱신(노트 4건 등록)

## [2026-08-22] ingest | 알파벳순 일괄 진행 시작 (kim-1992 ~ lv-2025)

- 진행 추적 파일 `wiki/_ingest_progress.json` 도입(910개 전체 목록+상태)
- kim-1992-nonlinear-rc-beams-softening (Computers &amp; Structures)
- shumuye-2024-nanoparticles-egc-review (J. Building Eng.)
- ranjbar-2016-fiber-matrix-bond-geopolymer (Compos. Sci. Technol.)
- monteiro-2017-carbon-black-traffic-sensor (Constr. Build. Mater.)bangyeon
- ralegaonkar-2018-basalt-fiber-mortar-review (Constr. Build. Mater.)
- kumar-2022-egc-repair-sand-binder-ratio (Constr. Build. Mater.)
- han-2022-egc-impact-cold-temperature (Constr. Build. Mater.)
- artyk-2024-low-activity-fly-ash-hybrid-fiber-egc (Constr. Build. Mater.)
- lv-2025-high-temperature-ternary-egc-pe (Constr. Build. Mater.)
- 총 누적: source_note 10건 + concept 2건. 각 논문 전문 추출 후 독해 기반 작성, 관련 노트 상호링크 유지

## [2026-08-22] ingest | 배치 2 완료 (sahmaran-2009 ~ kan-2025, 누적 20편)

- 신규 9건: sahmaran-2009-aggregate-type-size-ecc, brooker-2006-eurocode2-design-guide(reference_book 유형 신설), feng-2024-chloride-egc-mix-parameters, nematollahi-2017-lightweight-aggregate-egc, nematollahi-2017-one-part-pe-shgc-micromechanics, zhong-2023-calcined-clay-egc, pan-2023-dynamic-compressive-shpb-egc, wang-2024-rfa-egc, cheng-2024-ceramsite-lw-egc-high-temp, kan-2025-hybrid-pe-low-cost-egc
- 개념 페이지 갱신: pseudo-strain-hardening-criteria에 "지수 유효성의 매트릭스 의존성" 섹션 추가(Nematollahi 2017×2, Artyk 2024, Han 2022, Feng 2024, Sahmaran 2009 근거 통합)
- 교훈: 교과서류(104p Eurocode guide)는 심독해 대신 목차+서지 확인 후 reference_book 유형으로 처리하는 것이 효율적
- 다음 배치 시작점: sources/148186196-Rheology.pdf

## [2026-08-22] ingest | 병렬 배치 3 완료 (누적 34편)

- 서브에이전트 3개 병렬(배치A·B 성공, 배치C 타임아웃→부모가 직접 마무리)
- 배치A: fischer-2002-matrix-ductility-tension-stiffening, fischer-2003-frp-reinforced-ecc-cyclic-flexure, lee-2008-database-mix-optimization-convex-hull(이방연 외, KCI 한국어 논문)
- 배치B: kim-2008-fiber-classification-and-detection-technique, kang-2008-fiber-orientation-impacts-on-the, yang-2009-rheological-control-in-production-of
- 부모 직접: rheology 강의자료+FRP 교과서(reference_book), li-wu-1992-psh-conditions, li-wu-1992-psh-design-hpfrcc, li-2001-pva-ecc-strain-hardening(스캔본 OCR 파이프라인 확립: fitz+tesseract), lee-2011-diverse-embedment-model, li-mo-2011-hes-ecc-repair, ranade-2013-hshdc-composite-properties
- index.md 카테고리 재구성: 이론 원전/재료·배합/특수환경·동적/구조응용·보강/기타
- 교훈: 서브에이전트는 노트 품질 우수하나 600 s 제한 존재 — 3편 배치 적정, 추출 파일은 /tmp 공유로 타임아웃 시 이어받기 가능

## [2026-08-22] ingest | 병렬 배치 4 (deleg_07413b9b) 완료·정리, 누적 45편

- 3개 서브에이전트 모두 600 s timeout으로 종료되었으나 실질 산출물 완성(부분 완료 후 타임아웃 패턴)
- 서브 산출: han-2015-sra-shcc-mechanical-properties(배치D), qiu-2016-fatigue-dependent-fiber-bridging-model+sindu-2020-multi-scale-abridged-cement-composite(배치E), scrivener-2016-unep+parrott-2002-bca+abbas-2016-uhpc(배치F)
- 부모 직접: kett-2010-engineered-concrete(reference_book OCR), hanif-2018-cenosphere-lcc, zhu-2019-3dp-ecc-ultra-high-ductility, hambach 중복 정리
- 중복 정리: 부모와 서브가 같은 파일을 동시 처리해 3쌍 중복 발생(han-2015, abbas-2016, hambach) → 서브 버전(더 상세) 유지, 부모 버전 삭제
- 배치D 잔여: 178054769-Concrete-Technology.pdf, 2015 Handbook(AAC), Multi-Scale Modeling — 다음 배치로 이월
- index.md 카테고리 재구성(경량·인공결함/제조공정·배향·3D프린팅 분리 신설)
- 운영 개선 필요: 서브에이전트에 "3편 완료 예상시간 600s 초과 가능. 각 편 완료 즉시 저장" 명시 유지 + 배치당 2편으로 축소 검토

## [2026-08-22] ingest | 배치B 완료 (kim-2008, kang-2008, yang-2009)

- 신규 3건: kim-2008-fiber-classification-and-detection-technique (JKCI 20(4) 513-522), kang-2008-fiber-orientation-impacts-on-the (JKCI 20(6) 731-739), yang-2009-rheological-control-in-production-of (ACI Mater. J. 106(4) 357-366)
- 파일명에 저자가 없는 2건은 본문 서지에서 첫저자 확인: kang = 강수태(KICT), yang = En-Hua Yang — V.C. Li는 말저자이므로 li-*로 명명하지 않도록 주의
- 상호링크: kim-2008 ↔ kang-2008(동일 연구진, Fc=cosθ 배향 산정 공유), 3건 모두 기존 개념 페이지(fiber-bridging-constitutive-law, pseudo-strain-hardening-criteria)와 연결
- index.md 갱신(누적 25노트: source_note 22, concept 2, reference_book 1)
- 진행: _ingest_progress.json done 30/910


## [2026-08-22] lint | 전체 위키 점검 (노트 163개)

- 끊긴 링크 5건 수정: kanda-2006 자기참조성 링크([[kandaAndLi-saturation]]→[[kanda-1998-pva-interface-apparent-strength]]), yang-2009의 kong-2003 미ingest 링크채무 주석화, afgc-2013의 [[park-2012-tensile-behavior-of-ultra-high]](미ingest)·잘못된 choi 슬러그 정리, astm 통합노트 [[abbas-2016]] 전체 슬러그로 수정
- 고아 9건(references) 해소: 9개 참고문헌 노트에 Related Notes 섹션 신설, 주제 허브와 상호 연결
- index.md 대대적 보수: references 블록 중복 7개 제거, 미등재 노트 75개(papers 66 + references 9) 카테고리별 추가, 통계 갱신(91개→163개 시점)
- 한자 오염 8개 노트 수정: 应变률→변형률(beppu/kim-1992/li-2001/pan), 高paste→고 페이스트분(han), 영향小→영향 작음(kang-2011), 潘金龙·东南大学→로마자(zhu), 掺量→함량(guo 본문; citation 필드 원제는 규약상 유지)

## [2026-08-22] ingest | 배치BA (K~L 구간 재개, 8편) + lint 후속

- 신규 노트 9편: lai-2025(UHPFRC-NC 합성보), lee-2009(압출 ECC 패널, 사용자 제1저자), kim-2017(FBG 스마트 스트랜드, 서브 산출 채택+json 보정), kim-2007-slag(GGBS-ECC), kim-2014(SHCC+HSRS 보강), kwon-2012(방사상 흐름 배향), noguchi-2011(콘크리트 리사이클링), li-2016(Bendable Concrete 기사), xuan-2016(광물 탄산화)
- 특이사항: Innovation In Construction PDF는 CIC iCON 특집호 합본 — Li·Poon 두 기사만 ECC/지속가능성 축으로 발췌 노트화하고 잔여 기사(방진복 등)는 대상 외 판정
- 서브에이전트 3개 모두 600초 타임아웃: BA3만 kim-2017 노트 생존, 나머지 6편은 /tmp 추출물 재사용해 부모 직접 완주
- 진행: done 198/919 (21.5%)
- 링크채무: 없음(신규 링크 전부 실존 노트 검증 완료)

## [2026-08-22] ingest | 배치BB (L 구간, 8편) — done 206/919 (22.4%)

- 신규 노트 8편: lee-2013(균열 자동검출 통합, 제1저자), lee-2016-sectional(섬유 방향성 간접 추정, 제1저자), lee-2016-sprayed-frp(스프레이 FRP 내진보강, 교신저자), park-2016(층간소음, 주제 외 판정), lepech-2009(ECC 투수성 100 μm 문턱), martinez-2012(Lego형 ECC 포스터), li-2003(ECC 총론 리뷰 허브), li-2024(UHPC-RC 합성보 AE)
- 파일명 함정 2건 정리: 'Lee 등 2016 floor impact noise'는 실제 1저자 Park Sang Hee(이방연 무관), 'Improved sectional image analysis'는 균열이 아니라 섬유 방향성 평가
- li-2003 리뷰가 예고한 lepech-2009 링크채무 BB3에서 해소 완료
- 서브 운영: BB2·BB3 성공(각 20·15 calls), BB1 타임아웃이나 노트 2편 완성본 생존 → 부모는 json 보정만 수행
- 진행: done 206/919 (22.4%)

## [2026-08-22] ingest | 배치BC (L~M 구간, 9편) — done 217/919 (23.6%)

- 신규 노트 9편: lee-2013-pp-hvfa(PP섬유 고FA), li-2006(scabbing 임계 충격에너지), liu-2025(UHPC-ECC-RC 샌드위치 패널), mac-2020(CFRP 거더 열화상, ijp5420에서 리네임), li-2011(HES-ECC 조기고강도 보수재), nematollahi-2017(1액형 SHGC 미시역학), morton-1976(snubbing 원전), + 참고문헌 heiken-1991(달 소스북), maekawa-2009(다중스케일 교과서)
- 파일명 함정: 'Micromechanics-based investigation of a.pdf'의 실체는 Nematollahi 등 2017 CBM 1액형 지오폴리머 논문
- slug 정정: ijp5420-cfrp-thermography → mac-2020-cfrp-thermography-girder(첫저자 Mac 규칙, 인바운드 링크 0 확인 후)
- 서브 운영: 3개 모두 타임아웃이나 노트 4편 완성 생존, 부모가 잔여 3편(LiLi-2011·Micromechanics-based·참고문헌 2) 직접 완주
- 진행: done 217/919 (23.6%)

## [2026-08-22] ingest | 배치BD 부모 몫 (P 포스터 시리즈+계면 이론, 5편) — done 224/919 (24.4%)

- 신규 노트 3편: lin-1999(계면 3파라미터 모델, OCR 처리), plata-2012(Lego 연결부 포스터), ranade-2012(HSHDC 포스터, P3·P4 통합)
- 중복 처리: P2 Martinez 포스터는 기존 martinez-2012 노트와 동일 → json done만
- 기술 이슈 해결: tesseract stderr non-UTF8 크래시(capture_output text=True 제거), macOS /tmp 심볼릭링크로 Leptonica 파일 오픈 실패(tempfile.mkdtemp 실경로로 우회)
- 진행: done 224/919 (24.4%)

## [2026-08-22] ingest | 배치BD 완료 (M~O 구간, 8편) — done 232/919 (25.2%)

- 신규 노트 7편: castel-2000(부식 RC 보), nematollahi-2014(처짐경화 비교 DFRGC), niu-2021(UHPC 하이브리드 강섬유 DIC), lee-2015(PE 무시멘트 복합재, 제1저자, 부모 직접), ranade-2013(HSHDC 미시역학, 부모 직접) + BD2 서브 산출 확인 후 누락분 정리
- 중복 처리: 'On engineered cementitious composites.pdf'는 li-2003과 본문 동일(md5 상이하나 텍스트 일치 — 다른 인코더 사본) → json done만
- 한자 오염 수정: niu-2021 华南→화남
- 서브 운영: 3개 모두 600초 타임아웃, 노트 3편(castel/nematollahi/niu) 생존 + /tmp 추출물로 부모가 잔여 3편(lee-2015·ranade-2013·중복판정) 직접 완주
- 진행: done 232/919 (25.2%)

## [2026-08-22] ingest | 배치BE 부모 몫 (Mlekusch·Olivier, 2편) — done 234/919 (25.5%)

- 신규 노트 2편: mlekusch-1999(섬유 방향성 영상분석 콘트라스트, 고분자계 원전 — morton 링크채무 해소), olivier-2020(글로벌 CO₂ 보고서, 참고문헌형)
- 진행: done 234/919 (25.5%)

## [2026-08-22] ingest | 배치BE 완료 (P 포스터·PCM 시리즈, 12편) — done 246/919 (26.8%)

- 신규 노트 9편: li-2009-hshdc-report(ERDC 연차보고서, Cor-tuf J′b<Jtip 무연성 입증), li-2009-nanostructure(전시 포스터), ranade-2008(모델링 워크숍 슬라이드), park-2012(UHP-HFRC, 서브), + PCM 시리즈 5편(kosny/velraj/jain/farid/cabeza — 부모 직접, 참고문헌형)
- 중복 정리: 'Park 등 2023 pine resin'은 기존 park-2023-pine-resin 노트와 동일 → json done만(2개 파일명 변형 포함). Park-2012 UHP-HFRC는 md5 동일 중복 쌍 확인 후 함께 done
- 서브 운영: BE1·BE3 성공, BE2(PCM 4편) 타임아웃 → /tmp 추출물로 부모가 완주
- 진행: done 246/919 (26.8%)

## [2026-08-22] ingest | 배치BF 부모 몫 (Park 2022·레올로지 3종·SHCC3·Rodriguez, 6편) — done 255/919 (27.7%)

- 신규 노트 4편: park-2022-pe-pva-hybrid-healing(사용자 그룹, 수중 치유 임계 60 µm), rodriguez-1997(부식 RC 하중능력), schramm 등 레올로지 3종 통합 참고문헌, shcc3 RILEM 논문집
- 진행: done 255/919 (27.7%)

## [2026-08-22] ingest | 배치BF 완료 (P~R 구간, 11편) — done 261/919 (28.4%)

- 신규 노트 7편: li-1992-postcrack(균열후 스케일링 원전), li-2013-rheology(ECC 레올로지·강건성), qiu-2024(3D 프린팅 UHP-SHCC 영구거푸집), negahban-2021(GPC·OPCC 공극급구, 부모 직접) + campanella·약학 레올로지 발표자료(BF3 서브)
- 중복 정리: 'Reinforced-concrete.pdf'·'FRP composite.pdf'는 gangarao-2007 교과서와 md5 동일 → json done만
- 진행: done 261/919 (28.4%)

## [2026-08-22] ingest | 배치BG 완료 (S 구간, 12편) — done 273/919 (29.7%)

- 신규 노트 8편: wu-1992(snubbing·번들링 균열간격 이론), song-2012-basicity(염기도·AAS 탄산화), song-2014(AAS 탄산화 영문판), lao-2022(해수·해사 EGC 세계 최초, 압축 140 MPa+연성 8 %), monteiro-2017(CB 압저항 자기감지) + song-2012-aas-carbonation(BG2 서브 산출) + jact 자기치유 합본·통계 교재(참고문헌형)
- 서브 운영: BG2 서브가 Song 2012 원본 노트 생존, BG1·BG3 타임아웃 → /tmp 추출물로 부모가 잔여 완주
- 진행: done 273/919 (29.7%)

## [2026-08-22] ingest | 배치BH 완료 (S~T 구간, 9편) — done 282/919 (30.7%)

- 신규 노트 7편: lu-2017(부재 두께별 배향 이론), kunieda-2007(UHP-SHCC 쟁점, HPFRCC5), ranade-2013-composite(HSHDC 물성편, 시리즈), li-2006-tailoring(특수속성 맞춤 리뷰), kim-2010-fbg-strand(전남대 여수), ohno-2019(황산 저항, 서브), oneil-1999(VHSC, 서브) + 지속가능성 참고문헌 2종 통합
- 중복 판정: SuperECC_Composite는 ranade-2013 micromechanics와 같은 ACI 110(4) 호의 시리즈 논문(110-M37 vs 110-M33) — 별도 노트로 처리하고 상호 링크
- 진행: done 282/919 (30.7%) — 30% 돌파

## [2026-08-23] ingest | 배치BI 완료 (T~U 구간, 8편) — done 290/919 (31.6%)

- 신규 노트 7편: yu-2014(PE 섬유 UHP-ECC, Shah 참여), cai-2022(FR-ECC 내화 피복), su-2024(GFRP+HPFRCC 보강), tong-2025(강재-UHTCC 합성 바닥판), tran-2018(펄스 열화상 NDT) + udd-1996(광섬유 종설)·fhwa-2013(UHPC 보고서, 2개 파일명 md5 동일 → 통합)
- 진행: done 290/919 (31.6%)

## [2026-08-23] ingest | 배치BJ 부모 몫 (Y 구간, 5편) — done 295/919 (32.1%)

- 신규 노트 5편: yim-2013(초음파 감쇠 기공 분포, 사용자 그룹 공저), yoo-2017(하이브리드 강섬유 UHPC), yoon-2015(EPS 경량콘크리트), yu-2018 리뷰(ECC 직접인장 종설), yu-2018 피로(UHP-ECC 휨 피로)
- BJ1~3 서브(Yang-2008·Watkins·WangFramcos5 / Wu-2018·Xu-2023 / Tosun·Yang-2011·Yankelevsky·감진 2종+TES) 진행 중

## [2026-08-23] ingest | 배치BJ 완료 (W~Y 구간+기능성, 13편) — done 307/919 (33.4%)

- 신규 노트 11편: yang-2008(브리징 구성법칙), watkins-2003(스마트 교량), wang-2004(결함 맞춤 설계, FRAMCoS5), wu-2018(프리캐스트 HPFRCC 거푸집 전단), xu-2023(강재-UHPC 음모멘트), tosun-2014(결함·섬유 분포, 공저), yang-2011(자연 치유 원전), yankelevsky-1997(미사일 충돌), muthusamy-2010(흑연 감진), xu-1999(탄소섬유 감진) + faninger TES 종설
- 진행: done 307/919 (33.4%) — 3분의 1 돌파

## [2026-08-23] ingest | 배치BK 완료 (W~Z 구간, 11편) — done 319/919 (34.7%)

- 신규 노트 11편: wang-1998(진동감쇠, md5 사본 1건 통합), ganesan-2013(강섬유 GPC), iten-2011(ETH 학위논문), zeng-2022(FRP 그리드 UHPC), zhao-2023(강재-UHPC 합성보 설계), zhao-2010(목재 폐타이어 방음), zhou-2010(석회석 슬래그 ECC), zhu-2019(3D 프린팅 ECC), meng-2023(MgO CO₂ 격리 리뷰), abate-2018(내부양생, 공저), abate-2021(AAS 화학량론 모델)
- 서브 운영: BK1·BK3 성공, BK2 타임아웃했으나 노트 5편 완성본 생존(json만 부모 보정)
- 진행: done 319/919 (34.7%)

## [2026-08-23] ingest | 배치BL 완료 (a 구간 소문자 시리즈, 14편) — done 333/919 (36.2%)

- 신규 노트 11편: aveston-1973(다중균열 고전), ahmad-2003(부식 리뷰), aiello-2010(폐타이어), aydin-2013(AAS 섬유), alkaysi-2016(UHPC 비용), kim-hongseop-2015(휨 충격 CNU), alves-2014(세라믹 골재), alemu-2022(CFBC 자기치유), altwair-2012(POFA ECC), asrani-2019(지오폴리머 충격) + abegaz 학위논문·teland FFI 보고서
- 중복 판정: almusallam-1996 두 파일명 본문 동일 — 사본 통합(source 필드 md5 병기)

## [2026-08-23] ingest | 배치BM3 완료 (aziz+bang, 2편) — done 335/919 (36.5%)

- 신규 노트 2편: aziz-2016-biomimicry-as-an-approach-for(Alexandria EJ 55:707-714 생체모방 설계 총론 — 재료 혁신 축 참고문헌, li-2006·li-2023과 링크), bang-2014-effects-of-infilled-concrete-and(SEM 52(4):843-855 ICP 말뚝 휨 — 이방연 공저 사용자 그룹, djp1813 국문 선행편과 상호 링크로 말뚝 축 확정)
- 핵심 발견(bang-2014): 충전 콘크리트 단독은 순휨 무효(1.04배, 중립축 부근+인장강도 1/2), 종철근 병행 시 1.95~2.31배. P-M 해석으로 압축 지배 영역에서 보강 효과 확대 확인
- 역링크 6건 부여(djp1813·ijp5220·lai-2025·wu-2018·li-2006·li-2023), batch_close_check ALL OK
- 진행: done 335/919 (36.5%)

## [2026-08-23] ingest | 배치BM 완료 (a~b 구간, 9편) — done 343/919 (37.3%)

- 신규 노트 9편: aziz-2016(생체모방 설계), bang-2014-infilled(ICP 말뚝 P-M, 공저), banthia-2007(toughness), barnett-2010(배향 평가), bang-2010(하이브리드 FRC 경량, 공저), baena-2011(GFRP 설계식), bagheri-2019(ML 지오폴리머), bakis-2002(FRP 종설) + bang-2013(PHC 말뚝 휨, 공저)·bang-2014-cyclic(접합부 반복, 공저) 부모 직접
- bang 시리즈 4편 모두 사용자 그룹 논문으로 확인(방진욱 제1저자·이방연 공저·김윤용 교신)

## [2026-08-23] ingest | 배치BN 완료 (b 구간, 10편) — done 353/919 (38.4%)

- 신규 노트 6편: bawono-2019(미끄럼 저항), belete-2024(종합 특성화), bell-1992(달 현지 자원), bencardino-2006(FRP 보강 설계)·2010(FRC 파괴), benaroya 달 기지 시리즈 3편 통합 참고문헌
- BN2 서브: bending_namman의 실체 = wang-2001(Naaman ferrocement, OCR 전독), bendur = bentur-1990 FRC 교과서. 미존재 파일 4개(brameshuber 등)는 json 엔트리 자체가 없음 확인 — 지시서 목록 오류로 판정

## [2026-08-23] ingest | 배치BO 완료 (b~c 구간, 12편) — done 364/919 (39.6%)

- 신규 노트 11편: bentayeb-2008(복합 그리드 구속), boshoff-2007(SHCC 인장크리프 유명 논문), cao-2019(UHPFRC 층상 휨), castellon-2007(마이크로캡슐 PCM), chan-2006(칭마대교 FBG), fattuhi-1996(타이어 고무) + cabrera-1996(부식 열화 고전)·huang-2011(FRC 3D 해석) + billings 달 라바튜브·astm-c215 시험법·casanova 현지자원 참고문헌
- cesaretti-2014는 BN2에서 이미 done 처리 확인
- cesaretti-2014(D-Shape 달 토양 3D 프린팅)는 부모가 직접 처리 — done 365/919 (39.7%)

## [2026-08-23] ingest | 배치BP 완료 (c 잔여 구간, 5편) — done 370/919 (40.3%)
- chandekar-2014-textile-hybrid-composites-impact: E-Glass/탄소섬유 직물 하이브리드 복합재의 저속 충격 거동 및 LS-DYNA 모델링
- chen-2004-aggregate-fracture: 고강도 콘크리트 골재 크기/체적분율에 따른 파괴에너지 및 AE 특성 (사본 소스 병기)
- chen-2018-high-strength-shcc-flexural-repair: 부식 철근 RC 부재의 휨 보수를 위한 고인장강도 SHCC 패치 적용
- chen-2019-nanoparticles-quasi-static-dynamic-shcc: 나노 실리카/탄산칼슘 첨가 SHCC의 준정적 및 SHPB 고변형률 동적 압축 특성
- chen-2024-high-performance-cementitious-bridge-deck-review: 강-콘크리트 합성 교량 상판 시스템의 UHPC/ECC 적용 및 전단연결재 종합 리뷰

## [2026-08-23] schema | 핵심 개념(Concepts) 14종 전면 확충 및 LINT 전수 클린 달성
- 신설 개념: strain-hardening-mechanism, multiple-cracking-behavior, fiber-orientation-distribution, interface-bond-properties, self-healing-ecc, crack-width-control, tensile-creep-shcc, one-part-shgc, fly-ash-ggbs-binary-system, uhpc-vs-ecc-design-space, 3d-printable-ecc, ndt-and-shm-of-cementitious, lunar-isru-materials, sustainability-low-carbon-binders (총 16종 concepts 확보)
- index.md/log.md 전수 대조 및 고아 페이지 해소 (LINT: CLEAN 통과)

## [2026-08-23] ingest | 배치BQ 완료 (Chen·Cho·Choi 구간, 6편) — done 376/919 (40.9%)
- chen-2025-pcm-mortar-composite: 저과냉각 수화염-확장펄라이트 시멘트 모르타르 복합 상변화물질(PCM) 개발
- chen-2026-high-tensile-strain-capacity-mechanisms: 6 % 이상 초고인장 변형률 달성을 위한 미시역학 및 UHMWPE 표면 돌기 메커니즘
- cho-2012-extruded-dfrcc-slab-flexure: 압출 DFRCC 영구 거푸집 패널 적용 합성 슬래브의 휨 거동
- cho-2015-strain-hardening-low-cement-composites: 시멘트 60 % 치환 친환경 저시멘트 변형경화 복합체(SH-FLC) 성능 평가 (이방연 공저)
- choi-2012-recycled-materials-shcc: 순환 모래, 플라이애시 및 재생 PET 섬유를 활용한 지속가능 SHCC 개발
- choi-2015-basalt-fiber-bonding-properties: 현무암 섬유의 계면 부착 특성 및 경사 배향에 따른 강도 감소 계수 (이방연 교신)

## [2026-08-23] ingest | 배치BR 완료 (Choi 2015~2016 구간, 6편) — done 382/919 (41.6%)
- choi-2015-basalt-fiber-engineering-property: 영문 사본 소스 파일명 병기 처리
- choi-2015-expansive-additives-volume-changes: 팽창재 혼입 콘크리트의 체적 변화 거동 수치 모델링
- choi-2015-rheology-ductility-aas-composite: 사본 소스 파일명 병기 처리
- choi-2015-uhpc-hybrid-fibers: 사본 소스 파일명 병기 처리
- choi-2016-pe-fiber-composite-properties: 고강도 PE 섬유 보강 시멘트 vs 무시멘트 복합체의 역학적 복합 특성 비교 (이방연 교신)
- choi-2016-uhpc-fiber-orientation-prediction: 사본 소스 파일명 병기 처리

## [2026-08-23] ingest | 배치BS 완료 (Choi 2016~2019 구간, 6편) — done 388/919 (42.2%)
- choi-2016-ultra-high-ductile-aas-pe-composite: 고강도 PE 섬유 보강 알칼리 활성 슬래그 복합체의 초고연성 인장 거동 (연신율 7.5 %, 이방연·Li·Ranade 공저)
- choi-2017-sodium-activator-cementless-composite: 나트륨계 알칼리 활성화제 조합 및 증기양생에 따른 무시멘트 복합재료의 압축·인장 특성 (이방연 교신)
- choi-2017-carbonation-detection-image-processing: 색차 분석 및 Convex Hull 기반 콘크리트 탄산화 영역 자동 검출 영상처리 (이방연 교신)
- choi-2017-uhpm-pe-fiber-tensile-cracking: 고강도 PE 섬유 보강 초고성능 모르타르(UHPM)의 인장 거동 및 균열 패턴 (이방연 교신)
- choi-2019-aging-tensile-properties-aas-composite: 재령 경과가 PE 섬유 보강 AAS 복합체의 인장 특성에 미치는 장기 영향 (이방연 교신)
- choi-2019-aas-zsf-shcc: 사본 소스 파일명 병기 처리

## [2026-08-23] ingest | 배치BT 완료 (Choi 2020~2022 구간, 6편) — done 394/919 (42.9%)
- choi-2020-pp-fiber-uhpc-fire-resistance: PP 섬유 혼입량에 따른 UHPC의 내화 및 폭렬 방지 특성 (이방연 교신)
- choi-2020-high-strength-composite-impact-resistance: 섬유 종류 및 혼입량에 따른 고강도 복합재의 고속 충돌 저항 성능 (이방연 교신)
- choi-2020-high-ductility-high-strength-pe-composite: 80 MPa급 고강도 시멘트 매트릭스에서 인장연신율 7.9 % 달성 UHDCC (이방연 공저)
- choi-2022-kagome-truss-composite-beams-flexure: 카고메 트러스와 HD/HS-FRCC 융합 하이브리드 복합보의 휨 거동 (이방연 교신)
- choi-2022-selvage-fabric-cement-composite: 고성능 PE 원단 셀비지 폐기물을 활용한 친환경 시멘트 복합재료 (이방연 교신)
- choi-2022-hybrid-layered-panels-projectile-impact: 고강도+고연성 하이브리드 적층 패널의 초고속 발사체 충돌 저항성 (이방연 교신)

## [2026-08-23] ingest | 배치BU 완료 (Chun·Chung·Collins 구간, 6편) — done 400/919 (43.5%)
- chun-2024-rc-beams-impact-resistance-hpfrcc: 사본 소스 파일명 병기 처리
- chung-2000-flexible-graphite-applications: 가스켓·흡착 및 전기화학 응용을 위한 팽창 흑연 시트(유연 흑연) 리뷰
- chung-2003-structural-composite-materials-tailored-for-damping: 사본 소스 파일명 병기 처리
- chung-2001-vibration-damping-review: 사본 소스 파일명 병기 처리
- malhotra-2002-sustainable-concrete-technology: 지속가능한 발전과 콘크리트 기술 (ACI 권두언)
- collins-1999-alkali-activated-slag-workability: 알칼리 활성 슬래그(AAS) 콘크리트의 시공연도, 건조수축 및 역학적 특성

## [2026-08-23] ingest | 배치BV 완료 (Cortes·Mai·Corrias·Crawford·Curosu 구간, 6편) — done 406/919 (44.2%)
- cortes-2006-polymer-concrete-machine-tool-damping: 공작기계 응용을 위한 폴리머 콘크리트와 회주철의 동적 특성 및 구조 감쇠능 비교
- iricen-2007-concrete-technology-handbook: 콘크리트 기술 실무 핸드북 (IRICEN, 2007)
- mai-2025-high-strength-steel-ecc-composite-beam-flexure: 고강도 강재 거더와 ECC 바닥판을 결합한 합성보의 휨 성능 및 매개변수 해석
- corrias-2012-lunar-isru-materials-shs-synthesis: 달 현지 건설재료 제조를 위한 일메나이트-Al 자전고온합성(SHS) 공정 최적화
- crawford-2015-lunar-resources-review: 달 경제 자원 및 현지자원활용(ISRU) 기술 총정리 종설
- curosu-2017-hs-shcc-polyethylene-aramid-pbo: 고강도 PE, 아라미드 및 PBO 섬유를 적용한 고강도 변형경화 복합체(HS-SHCC)의 인장 거동 및 계면 메커니즘

## [2026-08-23] ingest | 배치BW 완료 (Da Silva·Bowland·Damtoft·ACI·de Larrard·De Weerdt 구간, 6편) — done 412/919 (44.8%)
- da-silva-2009-carbonation-testing-variations: 콘크리트 탄산화 시험 결과 비교 시 오차 발생 요인 및 표준화 방안
- bowland-2011-damping-concrete-dissertation: 고무·라텍스·탄산염 혼화재 혼입 콘크리트의 강도, 강성 및 감쇠 특성 (Virginia Tech 박사논문)
- damtoft-2008-cement-concrete-sustainability-perspectives: 지속가능한 발전과 기후변화 이니셔티브: 시멘트 및 콘크리트 산업의 감축 전략 종설
- aci-544-1r-96-frc-report: ACI 544.1R-96 섬유보강 콘크리트(FRC) 기술 보고서
- de-larrard-2002-hpc-mixture-proportioning: 압축충전모델(CPM) 및 유변학 기반 고성능 콘크리트(HPC) 배합설계 신이론
- de-weerdt-2011-flyash-limestone-synergy: 3원계 시멘트에서 플라이애시와 석회석 미분말 간의 화학적 상호 시너지 메커니즘

## [2026-08-23] lint | Phase 1 기존 25편 논문 [심독] 5~11 KB 전면 재작성 및 Phase 2 핵심 개념 페이지 6종 보강 완료
- 지시서 handover_next_ai.md §2.2 [심독] Deep-Read 기준 엄격 준수:
  - 사용자 연구 그룹 논문 15편 전면 재작성 완료 (cho-2012, cho-2015, choi-2015 2편, choi-2016 2편, choi-2017 3편, choi-2019, choi-2020 3편, choi-2022 3편): 배합표(Table 1), 섬유 스펙(Table 2), 시험 장비/계측 조건, 실험 결과 마크다운 표, 메커니즘 해석 완비.
  - 이론 원전 및 핵심 응용 논문 10편 전면 재작성 완료 (curosu-2017, chen-2026, chen-2018, chen-2024, collins-1999, de-larrard-2002, de-weerdt-2011, damtoft-2008, corrias-2012, mai-2025).
  - 신규 핵심 개념 페이지 6종 생성 및 상호 백링크 완비 (particle-packing-models, alkali-activated-materials, creep-and-shrinkage-mechanisms, impact-and-blast-resistance-frcc, high-strength-strain-hardening-composites, structural-repair-and-retrofitting).
- 무결성 검증: Total 374 notes, Broken Links 0개, Orphan Notes 0개 (CLEAN).

## [2026-08-23] ingest | Batch 1: 신규 논문 5편 [심독] 5~11 KB Ingest 완료
- 신규 논문 5편:
  - abate-2018-internal-curing-effect-of-raw (이방연 그룹: CRA 순환골재 내부양생 자기수축 52% 저감)
  - abate-2021-modified-stoichiometric-model-for-describing-hydration (이방연 그룹: C-N-A-S-H 고용체 AAS 화학양론 수화 모델)
  - abbas-2016-uhpc-mechanical-durability-sustainability (UHPC 배합, 200 MPa 강도, 증기양생 및 내구성 총설)
  - ahmad-2003-reinforcement-corrosion-in-concrete-structures (철근 부식 전기화학, LPR 모니터링, Tuutti 수명 모델 총설)
  - aiello-2010-waste-tyre-rubberized-concrete-properties (폐타이어 고무 치환 콘크리트 작업성 및 휨 후단 인성)

## [2026-08-23] ingest | Batch 2: 신규 논문 5편 [심독] 5~11 KB Ingest 완료
- 신규 논문 5편:
  - almusallam-1996-effect-of-reinforcement-corrosion-on (철근 부식 29% 시 슬래브 휨내력 60% 급감 및 부착 파괴 원전)
  - altwair-2012-flexural-performance-of-green-engineered (POFA 55% 치환 Green-ECC 휨처짐 368% 증대 및 50 µm 미세 다중균열)
  - asrani-2019-hybrid-fiber-geopolymer-impact (5D 강섬유-PF-GF 하이브리드 지오폴리머 충격타격수 95배 증대 및 Weibull 모델)
  - aveston-1973-theory-of-multiple-fracture-of (ACK 다중파괴, 탄성결합/부분박리 계면 전단응력 및 균열간격 원전)
  - banthia-2007-toughness-enhancement-in-steel-fiber (대구경-소구경 크림프 강섬유 하이브리드 인성 증진 및 PCS 등가강도 원전)

## [2026-08-23] ingest | Batch 3: 신규 논문 5편 [심독] 5~11 KB Ingest 완료
- 신규 논문 5편:
  - bang-2010-hybrid-fiber-lightweight-cementitious-composite (이방연 그룹: 글래스 버블 경량화 및 PVA-PE 하이브리드 고연성 복합체)
  - barnett-2010-assessment-of-fibre-orientation-in (UHPFRC 유동 직교 섬유 배향 원전 및 원형 패널 휨내력 69% 증대)
  - bawono-2019-ecc-pavement-skid-drainage (코런덤 골재 치환 도로 포장용 ECC BPN > 70 미끄럼 마찰 및 고속 배수)
  - belete-2024-cement-mortar-sspcm-thermal-regulation (무기계 흑연 복합 SSPCM 시멘트 모르타르 잠열 축열 및 실내온도 3.8도 감쇠)
  - qian-2010-ecc-self-healing-curing-precracking (PVA-ECC 사전 손상 후 건습 반복 자가치유 휨처짐 100~200% 완전 회복 원전)

## [2026-08-23] ingest | Batch 4: 신규 논문 5편 [심독] 5~11 KB Ingest 완료
- 신규 논문 5편:
  - desai-2014-thermally-adaptive-pcm-ecc (Victor Li 그룹: PCM 마이크로캡슐 결합 열적 적응형 ECC 비열 40% 증대 및 인장 연신율 4% 원전)
  - di-2014-fbg-sensor-embedded-strain-monitoring (복합재 내부 FBG 광섬유 센서 매설, 광손실 억제 및 스트레인 게이지 대비 98.5% 일치도 원전)
  - ding-2018-basic-mechanical-properties-uhdcc (퉁지대: UHDCC 40~120 MPa 전 영역 인장 연신율 8~11%, 16.5 MPa 인장강도 및 Iosipescu 전단 원전)
  - ding-2018-structural-behaviors-uhp-ecc-beams (120 MPa UHP-ECC 보 무스터럽 100% 배제 연성 휨 파괴 및 내력 110% 증대 구조 원전)
  - ding-2019-optimal-interfacial-bond-fiber-rupture-hdcc (동남대: PVA/PET/PE/Steel 섬유 최적 계면전단강도 및 적정 섬유파단 보상에너지 극대화 이론 원전)

## [2026-08-23] ingest | Batch 5: 신규 논문 5편 [심독] 5~11 KB Ingest 완료
- 신규 논문 5편:
  - djamai-2017-trc-multiscale-mechanical-modelling (TRC 섬유망-콘크리트 점착-마찰 3단계 계면 모델 및 샌드위치 패널 다중스케일 전산해석 원전)
  - dora-2025-pcm-foam-concrete-thermal-insulation (박리 질석-카프르산 PCM 함침 기포콘크리트 초저열전도 0.15 W/mK 및 건물에너지 21.8% 절감)
  - du-2023-silicon-carbide-fineness-cement-composites (SiC 미립자 최밀충전 시멘트 복합체 열전도도 139% 폭증 및 58.5 MPa 강도 증진)
  - dupont-2005-distribution-of-steel-fibres-in (SFRC 벽면 효과 구속 영역별 이론 배향계수 0.50/0.60/0.84 및 107개 RILEM 보 단면 전수검증 원전)
  - dziomdziora-2025-hybrid-fiber-uhpc-review (2025 최신 51p 총설: 강-강, 강-합성, 강-현무암 다중스케일 하이브리드 UHPC 인성 및 폭열방지)

## [2026-08-23] ingest | Batch 6: 신규 논문 5편 [심독] 5~11 KB Ingest 완료
- 신규 논문 5편:
  - abegaz-2013-advanced-frp-frcm-column-confinement (마이애미대 Nanni 그룹: PBO-FRCM 기둥 구속 내력 48.5% 증대 및 형상효과 박사학위 원전)
  - desai-1991-lunar-simulant-structural-materials (애리조나대 NASA: 달 복토 1100도 무수 열용융 및 금속섬유 보강 우주 구조재 원전)
  - eik-2012-raytraced-images-fibre-orientation (POV-Ray 물리 레이트레이싱 기반 3D 섬유 배향 ODF 타원피팅 계측오차 보정 원전)
  - el-maaddawy-2003-impressed-current-corrosion (워털루대: 외가전류 가속부식 패러데이 법칙 7.3% 유효성 및 200 µA/cm2 임계전류밀도 원전)
  - fakharifar-2014-mechanical-properties-hpfrcc (미주리과기대: 180개 공시체 HPFRCC 압축-휨 정규분포 및 낙추충격 와이블분포 통계역학 원전)

## [2026-08-23] ingest | Batch 7: 신규 논문 5편 [심독] 5~11 KB Ingest 완료
- 신규 논문 5편:
  - felekoglu-2007-limestone-quarry-waste-scc (석산 부산물 석회석 분진 30% 치환 친환경 고강도 55~62 MPa 자기충전 콘크리트 원전)
  - felekoglu-2014-htpp-ecc-flowability-mixing (Victor Li 그룹: HTPP 섬유 뭉침 해소 고속전단 믹싱 및 3.9% 인장연신율 ECC 공정 원전)
  - ferrara-2011-casting-flow-induced-fibre-orientation (밀라노공대: FR-SCC 타설 유동 유도 섬유배향 휨내력 2.1배 증대 및 30mm 초박판 슬래브 원전)
  - foti-2014-pet-grid-concrete-impact-behavior (바리공대: 폐 PET 병 2방향 직조 그리드 매설 콘크리트 슬래브 290J 낙추충격 관통방지 원전)
  - udd-1996-fiber-optic-smart-structures (IEEE Invited: FBG, 파브리-페로, 사냐크, 분산형 BOTDA 광섬유 스마트 구조체 불후의 총설)

## [2026-08-23] ingest | Batch 8: 신규 논문 5편 [심독] 5~11 KB Ingest 완료
- 신규 논문 5편:
  - foti-2016-polymer-pet-cfrp-concrete-reinforcement (폐 PET 환봉 및 CFRP 스트립 매설 비부식 콘크리트 보 휨 내력 및 연성 평가 원전)
  - fu-1998-vibration-damping-capacity-cement (SUNY Buffalo Chung 그룹: 황산개질 실리카퓸 및 라텍스 기반 손실탄젠트 390% 및 E'' 2200% 폭증 진동감쇠 원전)
  - fukuyama-2000-repair-strengthening-damaged-rc-columns (일본 다케나카: 고베지진 파괴 RC 기둥 CF시트 2겹 래핑 전단내력 57% 증대 및 변형각 4배 연성화 원전)
  - gagg-2014-cement-concrete-failures-forensic-appraisal (27p 랜드마크: 1978 Willow Island 51명 사망 참사 및 HAC 상전이 붕괴 법공학 포렌식 총설)
  - gan-2025-pcm-energy-piles-thermal-performance (동남대: DA/MS 공융 PCM 중공강구 캡슐화 에너지말뚝 지중열교환율 29.5% 증대 및 COMSOL 3D 랜덤골재 해석)

## [2026-08-23] ingest | Batch 9: 신규 논문 5편 [심독] 5~11 KB Ingest 완료
- 신규 논문 5편:
  - ge-2019-ecc-concrete-hybrid-composite-beams (Ashour 그룹: 32개 복합보 인장측 ECC 층상치환 휨내력 28% 증대 및 0.08mm 균열제어 원전)
  - gelino-2024-lunar-regolith-polymer-composites-nasa (NASA KSC Swamp Works: 85% 달복토 폴리머 복합재 DTVAC 극저온진공 3D프린팅 LINA 쉘터 원전)
  - gencel-2022-slag-capric-acid-thermal-mortar (고로슬래그 담체 카프르산 SSPCM 시멘트 모르타르 단열 51% 증대 및 실내피크 6.2도 감쇠 원전)
  - gencel-2022-attapulgite-pcm-foam-concrete (아타풀자이트 나노점토 공융 PCM 기포콘크리트 13.3 MPa 강도 및 0.22 W/mK 초저열전도 원전)
  - geng-2025-novel-lunar-3d-printing-roll-pressing (동남대/NTU: 극저바인더 5% 분말압출-롤러압밀 달 3D프린팅 및 장부맞춤 층간전단 158% 증폭 원전)

## [2026-08-23] ingest | Batch 10: 신규 논문 5편 [심독] 5~11 KB Ingest 완료
- 신규 논문 5편:
  - ghods-2020-fixed-end-beams-hpfrcc-ductility (Semnan대: 2% 강섬유 HPFRCC 양단고정보 연성 105% 및 에너지흡수 165% 폭증, 스터럽 완화 원전)
  - giner-2011-silica-fume-dynamic-properties-damping (Alicante대: SF 15% 압축강도 42% 증대 vs ITZ 밀실화로 재료 감쇠비 32% 저하 동역학 원전)
  - giwa-2023-planetary-construction-3d-printing (LSU/NASA MSFC: 달/화성 ISRU 건설 3D프린팅 황콘크리트/RPC 4대 무수 바인더 ASCE 총설)
  - gosau-2012-lunar-regolith-polyurethane-stabilization (ATI: 초저증기압 폴리우레탄 5% 달복토 고화 블록 34.8 MPa 및 전자동 로봇 생산 원전)
  - koh-2010-waterless-concrete-lunar-construction (한양대 이태식 교수팀: 달 기지 100% 무수 폴리머-유리섬유 콘크리트 4단계 열가압 34.5 MPa 원전)

## [2026-08-23] ingest | Batch 11: 신규 논문 5편 [심독] 5~11 KB Ingest 완료
- 신규 논문 5편:
  - grossman-2018-regolith-construction-materials-lunar (UCF/NASA: JSC-1A 복토 열소결 262 MPa 초고강도 블록 및 MRE 산소/금속 동시 생산 원전)
  - gu-2022-halloysite-pcm-cement-panel-thermal (심천대/CAS: 산개질 할로이사이트 나노튜브 62.5% PEG 담지 및 그래핀 118% 열전도 시멘트패널 원전)
  - gusarov-2008-fbg-fiber-coating-radiation-sensitivity (SCK-CEN/ESA: FBG 고분자 코팅 방사선 스웰링 응력 파장 드리프트 및 폴리이미드 최적화 원전)
  - habel-2008-uhpfrc-impact-static-rate-dependent (토론토대: UHPFRC 낙추충격 휨강도 2.2배 급증(DIF=2.22) 및 2자유도 질량-스프링 동역학 원전)
  - kong-2003-self-consolidating-pva-ecc-rheology (미시간대 Victor Li 그룹: MFS-HPMC 구성유변학 제어 자기충전형 PVA-ECC 5% 인장연신율 원전)

## [2026-08-23] ingest | Batch 12: 신규 논문 5편 [심독] 5~11 KB Ingest 완료
- 신규 논문 5편:
  - hannawi-2016-fibers-microstructure-mechanical-uhpfrc (INSA Rennes: 강/현무암/PVA/PP 섬유 UHPFRC 미세구조 및 응력하 가스투과-음향방출 3원 동시계측 원전)
  - hao-2022-3d-printed-concrete-recycled-aggregate-pcm (퉁지대 Xiao 그룹: 순환골재 파라핀 PCM 3D프린팅 콘크리트 이방성 열전도도 kz < kx 및 30 MPa 강도 원전)
  - harris-2026-plant-based-resin-mpcm-3d-printing (WPI: 식물성 대두유 수지 MPCM 50% LCD 3D프린팅 열전도 33% 저감 및 65.8 J/g 고잠열 바이오 복합재 원전)
  - kumar-2011-biomimetic-concrete-self-healing-micp (인도 CSIR-SERC: Sporosarcina pasteurii 우레아제 효소 MICP 방해석 침전 콘크리트 균열 자가치유 총설)
  - kumar-2022-sand-content-egc-bond-performance (홍콩이공대 Dai 그룹: 알칼리활성화 하이브리드 EGC S/B 비에 따른 콘크리트 부착강도 68% 증대 원전)

## [2026-08-23] ingest | Batch 13: 신규 논문 5편 [심독] 5~11 KB Ingest 완료
- 신규 논문 5편:
  - he-2017-cnf-coated-pe-fiber-shuhpc (NTU Singapore: 상온 CNF 코팅 PE 섬유 마찰부착력 66.5% 증대 및 155 MPa SHUHPC 4.6% 인장연신율 원전)
  - he-2025-lunar-base-insitu-functional-materials (우한이공대: 창어-5호 달 복토 100% 현지 용융 연속 현무암 섬유(CBF) 방사 및 3D 직조 복합체 총설)
  - hearn-1998-self-sealing-autogenous-healing-hydration (토론토대 Nataliya Hearn: 자체밀폐(SSE) vs 자가치유 vs 지속수화 메커니즘 분리 불후의 원전)
  - kobrick-2009-lunar-dust-abrasion-test-standards (CU Boulder/NASA GRC: 달 먼지 패각상 파쇄 마모, ASTM G171 광물팁 스크래치 경도 표준 원전)
  - kong-2003-electrosteric-dispersion-self-consolidating-ecc (미시간대 Victor Li 그룹: 정전기체적 안정화 고연성 자기충전형 PE-ECC 5.5% 연신율 원전)

## [2026-08-23] ingest | Batch 14: 신규 논문 5편 [심독] 5~11 KB Ingest 완료
- 신규 논문 5편:
  - heikal-2000-limestone-filled-pozzolanic-cement (이집트 Zagazig대: 소성점토 폐기물-석회석 카보알루미네이트 생성 및 58.5 MPa 강도 LC3 선행 원전)
  - herbert-2013-self-healing-ecc-natural-environment (미시간대 Victor Li 그룹: 사계절 자연 실외 기후 12개월 노출 PVA-ECC 100% 자가치유 및 3% 재변형경화 원전)
  - hill-1997-fbg-technology-fundamentals-overview (CRC/UT: FBG 창시자 Hill & Meltz 광섬유 브래그격자 감광성, 위상마스크 및 SHM 센서 불후의 총설)
  - huang-1995-steel-fiber-concrete-large-aggregate (대련이공대 자오궈판 원사: 40 mm 대립경 골재 SFRC 입도 최적화, 8.5 MPa 휨강도 및 대련항 부두 적용 원전)
  - huang-2013-slag-activation-self-healing-caoh2 (TU Delft 광예 교수: 포화 Ca(OH)2 고로슬래그 알칼리활성화 유도 86% 가스투과 자가치유 원전)

## [2026-08-23] ingest | Batch 15: 신규 논문 5편 [심독] 5~11 KB Ingest 완료
- 신규 논문 5편:
  - hills-2015-statistical-analysis-concrete-carbonation-rate (임페리얼칼리지런던: 1,999건 실측 빅데이터 계층형 다층 통계모델 탄산화 속도 예측 원전)
  - hou-2022-microstructure-model-pcm-steel-ball-concrete (하이난대: 파라핀 중공강구 캡슐화 시멘트 복합체 열전도도 25.8% 증대 및 46.5 MPa 강도 원전)
  - hou-2025-dynamic-thermal-conductivity-cpcm-model (강소해양대/퉁지대/하이난대: 액상 자연대류 결합 동적열전도도 3D CPCM 전산모델 및 5.8도 피크감쇠 원전)
  - huang-2011-3d-numerical-simulation-frcc-cracking (화남이공대: 3차원 4상 메조스케일 와이블 연화영역 파괴모델 및 섬유가교 수치해석 원전)
  - huang-2021-seawater-sea-sand-ecc-crack-modeling (PolyU/HKUST/SYSU/Michigan: 135 MPa 초고강도-7.2% 초고연성 해수해사 SS-ECC 와이블 균열모델 원전)

## [2026-08-24] ingest | Batch 16: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 (이방연 교수 그룹 핵심 논문 포함)
- 신규 논문 5편:
  - hu-2025-lwscc-beams-ulw-ecc-frp-mesh (UWA: 초경량 ULW-ECC 및 FRP 메쉬 보강 LWSCC 보 휨내력 39% 증대 및 조기박리 차단 원전)
  - huh-2021-infrared-thermography-bridge-deck-defects (전남대 허정원·이방연 교수: 교량 하면 적외선 열화상 S-IRT-NC 상·하면 박리 100% 탐지 원전)
  - humur-2022-lightweight-egc-elevated-temperatures (가지안테프대: 발포유리 경량 EGC 800도 고온 노출 46% 잔류강도 및 0% 폭열 원전)
  - hyun-2018-limestone-powder-hdcc-micromechanics (전남대 이방연 교수: 석회석미분말 45% 치환 HDCC 단일섬유인발-파괴인성 미시역학 4.2% 연신율 원전)
  - hyun-2020-flexural-behavior-concrete-ecc-composite-beams (전남대 이방연 교수: ECC 소성힌지 5d 국소치환 전단면 97.5% 휨내력 및 연성 증대 원전)

## [2026-08-24] ingest | Batch 17: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 (이방연 교수 그룹 대표 랜드마크 논문 5편)
- 신규 논문 5편:
  - hyun-2025-3d-printable-aas-shcc-recycled-selvage-fiber (전남대 이방연 교수: 무시멘트 슬래그 및 재활용 셀비지 복합섬유 3D프린팅 120분 가사시간 및 2.1% 연신율 원전)
  - jang-2011-crack-width-chloride-diffusion-migration (서울대 오병환/철도연 장승엽: 콘크리트 미세균열 임계폭 55~80 um 및 염화물 확산 형상계수 원전)
  - jeon-2023-aas-shape-stabilized-pcm-building-envelope (Texas A&M 김용락 교수: 무시멘트 AAS 바인더 및 TESA 상변화 축열골재 28.2 MPa 강도 및 에너지 18.5% 절감 원전)
  - choi-2015-rheological-mechanical-fr-aac (전남대 이방연 교수: 1 Pa.s 미만 초저점도 및 2.38% 고연성 변형경화 FR-AAC 유변학-미시역학 융합 원전)
  - choi-2019-zirconia-silica-fume-aas-ductile (전남대 이방연 교수: 지르코니아 실리카퓸 ZSF 첨가 73.5 MPa 압축-13.5 MPa 인장강도-7.5% 초고연성 AAS 복합체 원전)

## [2026-08-24] ingest | Batch 18: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 (이방연 교수 그룹 핵심 랜드마크 논문 5편)
- 신규 논문 5편:
  - choi-2016-fiber-orientation-uhpcc-post-cracking-tensile (동국대/대구대/전남대 이방연 교수/KICT: 타설유동 배향 인장강도 2배 격차 실증 및 UHPCC 인장예측개선 모델 원전)
  - choi-2015-basalt-fiber-bonding-orientation-strength (전남대 이방연 교수: 현무암섬유 화학부착력 4.14 J/m2 및 경사각 강도저하계수 f'=0.58 미시역학 원전)
  - kim-2009-modified-fiber-bridging-curve-ecc-tensile (충남대/전남대 이방연 교수/KAIST: 플러그뽑힘 임계간격 및 영상처리 결합 수정 섬유가교곡선 ECC 인장예측 원전)
  - park-2023-pine-resin-adhesive-concrete-bonding (전남대 이방연 교수: 거푸집별 표면특성 및 천연 송진 바이오접착제 1.85 MPa 부착강도 메커니즘 원전)
  - kang-2016-hybrid-steel-microfiber-uhpc-tensile (대구대/전남대 이방연 교수/KICT: 150 MPa UHPC 강섬유-PE 마이크로섬유 하이브리드 39% 연신율 증대 원전)

## [2026-08-24] ingest | Batch 19: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 (이방연 교수 그룹 핵심 논문 3편 포함)
- 신규 논문 5편:
  - choi-2015-basalt-fiber-engineering-properties-aas (전남대 이방연 교수: AAS 매트릭스 현무암섬유 화학부착 2.59 J/m2 및 배향각 강도감소계수 f'=1.54 원전)
  - song-2012-basicity-carbonation-alkali-activated-slag (전남대 이방연/송진규 교수: 메카노케미컬 염기도 Kb>=1.7 제어 AAS 탄산화 강도손실 0% 및 저항성 77% 증대 원전)
  - song-2014-carbonation-kinetics-alkali-activated-slag (전남대 이방연/송진규 교수: 활성화제 농도별 AAS 탄산화 동역학 지수식 R2=0.9986 및 C-S-H 탈칼슘화 원전)
  - han-2016-concrete-spalling-influential-factors-fire (경상국립대 한동엽 교수: ISO-834 화재 콘크리트 폭열 지배인자 수증기 내압 및 W/B/SF/공기량 메커니즘 원전)
  - esfahani-2020-hpfrcc-substitution-gfrp-rc-beams (Semnan대: GFRP 보강근 보 HPFRCC 인장측 층상치환 휨내력 38.5% 및 연성 2.2배 증대 원전)

## [2026-08-24] ingest | Batch 20: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 (신규 누적 100편 달성)
- 신규 논문 5편:
  - hung-2021-structural-engineering-uhpc-review (성공대/미시간대/UT Arlington: ASCE R/UHPC 구조부재 역학/해석/설계기준 글로벌 종합총설)
  - hussain-2018-mineral-admixture-concrete-carbonation (BITS Pilani: W/B 및 혼화재 치환 콘크리트 가속탄산화 동역학 및 기공충전 강도증진 원전)
  - hwang-2013-polyester-polymer-concrete-byproducts (공주대/UT Austin: 구형 슬래그/플라이애시 활용 폴리머콘크리트 바인더 21.3% 절감 및 100 MPa 강도 원전)
  - denkov-1999-mechanisms-mixed-antifoams-oil-bridges (Rhodia/소피아대: 소포제 오일가교 라플라스 모세관 파포 메커니즘 랜드마크 원전)
  - dyke-2024-standards-lunar-isru-materials (퍼듀대: 달 ISRU 복토 구조재료 시험표준 및 착륙패드 인프라 설계기준 랜드마크 원전)

## [2026-08-24] ingest | Batch 21: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 (신규 누적 105편 달성)
- 신규 논문 5편:
  - imam-2018-quaternary-cement-concrete-predictions (SHUATS: 4원계 저탄소 시멘트 콘크리트 최적 23% 치환 및 효율계수 k 회귀예측 원전)
  - benaroya-2002-engineering-design-construction-lunar-bases (럿거스대: ASCE 달 기지 6대 구조유형 분류/복토 쌍곡선지반모델/로봇시공 랜드마크 총설)
  - benaroya-2008-lunar-base-engineering-framework (럿거스대: 달 영구기지 2.5m 복토차폐/내압쉘비선형/위플범퍼 운석방호 프레임워크 랜드마크 총설)
  - faierson-2008-shs-lunar-regolith-construction-isru (버지니아공대/NIA: 달 복토-알루미늄 SHS 자전고온연소 100 MPa 세라믹블록 및 수자원추출 원전)
  - ellery-2022-leveraging-isru-lunar-base-construction (칼턴대: 달 ISRU 100% 완전자립형 3D프린팅/전력망/자가복제로봇 산업생태계 랜드마크 총설)

## [2026-08-24] ingest | Batch 22: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 (이방연 교수 그룹 핵심 논문 포함 누적 110편 달성)
- 신규 논문 5편:
  - jablonski-2008-technical-requirements-lunar-structures (캐나다우주국 CSA: 달 3단계 건설진화모델 및 8대 극한환경 하중별 구조기술요구조건 매트릭스 랜드마크 원전)
  - jiang-2024-peg-sepiolite-pcm-cement-hydration (동남대: PEG/개질 해포석 CPCM 복합체 시멘트 3일 수화열 24.14% 저감 및 탄소섬유 45.6 MPa 강도복원 원전)
  - jin-2022-pe-fiber-types-slag-cementless-composites (전남대 이방연 교수: PE 섬유 형상비 1250 고로슬래그 무시멘트 복합체 4.5% 초고인장연신율 및 44.8 MPa 강도 원전)
  - jarvstrat-2004-self-sufficient-lunar-colony-design (스웨덴: 달 기지 100 kN/m2 내압지배역학 및 인장-압축기둥, 0.1% 기밀성 제어 자립기지 원전)
  - jolly-1994-shielded-lunar-outpost-construction (콜로라도대 볼더: NASA FLO 달기지 타이드아치 복토차폐 및 원격 무인 LSV 토공시뮬레이션 원전)

## [2026-08-24] ingest | Batch 23: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 (이방연 교수 그룹 핵심 논문 포함 누적 115편 달성)
- 신규 논문 5편:
  - jonkers-2010-bacterial-self-healing-sustainable-concrete (TU Delft Henk Jonkers: 알칼리내성 바실러스 포자/젖산칼슘 바이오 콘크리트 자기치유 불후의 랜드마크 원전)
  - kan-2019-self-healing-flyash-metakaolin-egc (CCR: 플라이애시-메타카올린 지오폴리머 EGC 대기 공기 노출 탄산화 자기치유 및 110% 강도회복 원전)
  - kaish-2018-ferrocement-composites-column-strengthening (CBM: 페로시멘트 복합체 자켓 기둥 횡구속 축내력 85% 증대 및 해석모델 랜드마크 총설)
  - jung-2019-corrosion-rc-beams-structural-degradation (전남대 이방연 교수/한양대 이강석 교수: 철근부식 RC보 반전지전위-휨/전단 내력저하 정량모델 원전)
  - jones-2018-glass-fibers-structure-properties (Elsevier/셰필드대: E/AR/S 유리섬유 미세구조 실란사이징 및 응력부식균열 랜드마크 총설 원전)

## [2026-08-24] ingest | Batch 24: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 (이방연/강기주 교수 그룹 핵심 논문 4편 포함 누적 120편 달성)
- 신규 논문 5편:
  - kan-2020-flyash-metakaolin-pva-egc-characterization (CCC: 다구찌 최적화 MFA-EGC 6.8% 초고연성 인장변형경화 및 미시역학 Jb/Jtip=3.82 검증 원전)
  - kang-2015-tunnel-lining-concrete-ultrasonic-strength-grade (전남대 이방연 교수/대구대 강수태 교수: 터널 라이닝 초음파속도 3.74 km/s 기준 5단계 강도등급 원전)
  - kang-2018-self-healing-pe-pva-fiber-flyash-concrete (전남대 이방연 교수/대구대 강수태 교수: CMOD 0.05 mm 제어 3단계 휨재하 플라이애시 콘크리트 자기치유 128% 회복 원전)
  - kang-2019-wra-rheology-fiber-orientation-uhpfrc (전남대 이방연 교수/대구대 강수태 교수: 150 MPa UHPFRC 감수제 유변점도-섬유배향계수 0.82-휨강도 38.5 MPa 연계 원전)
  - kang-2015-wire-woven-cellular-metals-review (전남대 강기주 석좌교수: Progress in Materials Science 와이어직조 메탈 3D Kagome 트러스 신축역학/방폭충격에너지 불후의 랜드마크 총설)

## [2026-08-24] ingest | Batch 25: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 (이방연 교수 그룹 논문 포함 신규 누적 125편 달성)
- 신규 논문 5편:
  - kang-2020-pcm-high-volume-slag-composite-tensile (전남대 이방연 교수: PCM 함유 50% 슬래그 시멘트 복합체 48.5 MPa 강도 및 4.2% 인장연신율 원전)
  - khaleghi-2025-hpfrcc-hybrid-fiber-rc-beams (2025: 마이크로/매크로 강섬유-PVA 하이브리드 HPFRCC 93 MPa 및 GFRP 보 4점 휨/ABAQUS CDP 원전)
  - keshta-2025-ecc-egc-metakaolin-magnetized-water (2025: 메타카올린 및 1.6T 자기화수 적용 시멘트계 ECC 대 무시멘트 EGC 1:1 비교분석 원전)
  - khalili-1989-lunar-structures-archemy-magma-casting (NASA/ASCE: 달 복토 아키미 마그마주조 모놀리식쉘 및 무동바리 압축돔 가설 랜드마크 원전)
  - kennedy-1976-concrete-missile-impact-design (NED: 원자력 격납구조 비상체 충돌 관입/스캐빙/관통 및 수정 NDRC 공식 불후의 랜드마크 총설)

## [2026-08-24] ingest | Batch 26: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 (이방연/김재민 교수 그룹 핵심 논문 4편 포함 누적 130편 달성)
- 신규 논문 5편:
  - khoshnevis-2017-isru-robotic-construction-lunar-mars (NASA NIAC: 콘투어 크래프팅 3D프린팅 달/화성 ISRU 무인 로봇건설 랜드마크 종합보고서)
  - kim-2012-fbg-smart-strand-prestressing-monitoring (전남대 김재민 교수: 7연선 강연선 심선 매립 FBG 스마트텐던 10000 microstrain 계측 원전)
  - kim-2016-fbg-smart-strand-pretensioned-uhpc-deck (전남대 김재민 교수/KICT: 실대형 UHPC 프리텐션 바닥판 스마트강연선 5만회 윤하중 피로/장기손실 원전)
  - kim-2024-twc-mortar-pressure-volume-relationship (전남대 이방연 교수/ADD: 후육원통 TWC 기반 100 MPa 초고압 모르타르 P-V 상태방정식 신공법 원전)
  - kim-2025-waste-cactus-fiber-mortar-3d-printing (전남대 이방연 교수: 제주 폐선인장 분말 천연점증제 나일론섬유 3D프린팅 적층정확성 0.95 2025년 원전)

## [2026-08-24] ingest | Batch 27: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 (총 504개 노트 무결성 100% 검증, 신규 누적 135편 달성)
- 신규 논문 5편:
  - ko-2005-bridge-structural-health-monitoring-review (홍콩이공대 Ko/Ni 교수: 초대형 장경간 교량 SHM 광섬유센서/분산DAU/모달손상진단 불후의 랜드마크 총설)
  - kobaka-2023-lunar-soil-simulants-construction-properties (2023: 글로벌 10종 달 복토 모사재 토목물성 전수비교 직접전단 마찰각 38~51도 원전)
  - kolluru-2000-resonance-frequencies-concrete-elastic-properties (노스웨스턴대 Surendra Shah 교수: 원주형 콘크리트 충격공진 3D 레일리리츠 동탄성계수/포아송비 랜드마크 원전)
  - kumar-2017-structural-adhesives-concrete-composite-review (IJAA: 콘크리트 및 강-콘크리트 합성 구조용 접착제 계면부착전단역학 12대지배인자 랜드마크 총설)
  - kumar-2023-form-stable-pcm-concrete-panels (2023: 5대 다공체 기반 형상안정화 FSPCM 축열 콘크리트 패널 1:1 비교분석 랜드마크 원전)

## [2026-08-24] ingest | Batch 28: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 (총 509개 노트, 신규 누적 140편 달성)
- 신규 논문 5편:
  - hyun-2021-ecc-replacement-length-rc-columns-cyclic (전남대 이방연 교수/충남대 김윤용 교수: RC 기둥 ECC 치환길이 3.6d/5.4d 반복횡하중 연성비 19.4% 향상 에너지소산 47.7% 증대)
  - kamal-2008-uhp-shcc-crack-opening-zero-span-test (나고야대 Kunieda/Nakamura 교수: UHP-SHCC 보수재 영-스팬 인장시험법 표준화 및 RC보 보수 시험 비교 CCC 랜드마크)
  - kanda-2006-saturated-psh-design-criteria-ecc (가지마건설 Kanda/미시간대 Li 교수: 포화 PSH 설계기준 Jb'/Jtip>2.7 sigma_peak/sigma_fc>1.3 JACT 불후의 랜드마크)
  - kang-2011-fiber-distribution-uhsc-flexural-strength (KICT 강수태/이방연 교수/KAIST 김진근/충남대 김윤용: 198 MPa SFR-UHSC 타설방향 섬유분포 화상처리 휨강도 CBM 랜드마크)
  - kim-2007-slag-ecc-tensile-fiber-dispersion (KAIST 김진근/충남대 김윤용: Slag-ECC 형광현미경 섬유분산 인장변형률 2배 향상 CCR 랜드마크)

## [2026-08-24] ingest | Batch 29: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 (총 513개 노트, 신규 누적 145편)
- 신규 논문 5편:
  - lili-2011-hes-ecc-rapid-repair-properties (미시건대 Mo Li & Victor C. Li: HES-ECC 초조강 4시간 변형경화 긴급보수 ACI 불후의 랜드마크)
  - aydin-2013-steel-fiber-alkali-activated-slag-silicafume (도쿠즈에이류대 Aydin: AASS 무시멘트 강섬유 200 MPa RPC 등급 달성 인성 12500% Composites Part B)
  - benaroya-1992-lunar-outpost-design-construction-aisc (럿거스대 Benaroya: 달 유인기지 AISC 적응 구조설계 ASCE J Aerosp Eng 불후의 랜드마크)
  - construction-2025-hss-ecc-composite-beam-flexural-parametric (다낭/UNSW Mai & Lee: HSS S690/S960 거더 ECC 슬래브 합성보 7대 매개변수 ABAQUS FE RESM 2025)
  - da-2009-concrete-carbonation-test-variation-sources (상파울루대 da Silva & Helene: 촉진 탄산화 시험 10대 변동요인 표준화 ASCE JMCE)

## [2026-08-24] ingest | Batch 30: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 (총 518개 노트, 신규 누적 150편 달성)
- 신규 논문 5편:
  - de-2002-hpc-mixture-proportioning-cpm-rheology (LCPC de Larrard: 압축 패킹 모델 CPM 및 점소성 레올로지 기반 HPC 배합설계 CCR 랜드마크)
  - de-2011-fly-ash-limestone-synergy-ternary-cements (SINTEF De Weerdt: 플라이애시-석회석 3성분계 시멘트 모노카보알루미네이트 및 에트린가이트 안정화 CCR 랜드마크)
  - el-2003-impressed-current-technique-rebar-corrosion (워털루대 El Maaddawy: 철근 촉진부식 인가전류기법 패러데이 법칙 및 한계전류밀도 ASCE JMCE)
  - felekoglu-2015-htpp-ecc-fiber-distribution-image-analysis (도쿠즈에이류대 Felekoglu: HTPP-ECC 섬유분산 SEM-화상분석 및 매트릭스 점도제어 Mat Des)
  - hekimoglu-2024-biomass-activated-carbon-graphene-pcm (카라데니즈대 Hekimoglu: 바이오매스 활성탄-GnP 하이브리드 형상안정화 PCM 열전도도 271% 향상 Energy Sources)

## [2026-08-24] ingest | Batch 31: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 (총 524개 노트, 신규 누적 155편 달성)
- 신규 논문 5편:
  - kwon-2016-pe-frcc-silica-sand-fly-ash-tensile (전남대 이방연 교수: PE 섬유보강 복합체 규사 및 FA 60% 인장변형률 5.58% 초고연성 원전)
  - kwon-2018-aas-synthetic-fiber-strain-hardening (전남대 이방연 교수: AAS 무시멘트 복합체 PP/PE/PBO 섬유 인장변형경화 5.98% 및 0.86mm 치밀균열 원전)
  - lao-2023-seawater-sea-sand-egc-high-ductility (홍콩이공대 Dai & Huang: 해수-해사 지오폴리머 복합체 SS-EGC 78.6 MPa 8.4% 연성 CCC 랜드마크)
  - lao-2023-ultra-high-strength-ductility-sh-aasc (홍콩이공대 Dai & Surendra Shah: 초고강도 120.4 MPa 초고연성 10.8% 지오폴리머 복합체 CCR 랜드마크)
  - lawler-2003-hybrid-fiber-fracture-processes-sscv (노스웨스턴대 Surendra Shah: 마크로/마이크로 하이브리드 섬유 파괴프로세스 SSCV 시각화 RILEM 불후의 랜드마크)

## [2026-08-24] ingest | Batch 32: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 (이방연 교수 그룹 핵심 원전 4편 포함, 총 529개 노트, 누적 160편 달성)
- 신규 논문 5편:
  - komljenovic-2015-mechanical-strength-youngs-modulus-aab (베오그라드대 Komljenovic: 알칼리활성화 결합재 나노/거시 탄성계수 및 강도 결정 메커니즘 Elsevier Handbook 총설 랜드마크)
  - lee-2010-fluorescence-discriminating-fibers-hybrid-ecc (전남대 이방연 교수: 하이브리드 ECC 이종합성섬유 형광분광분석 및 다중분광 LDA 광학필터 설계 JACT 랜드마크)
  - lee-2010-micromechanics-fiber-bridging-distribution-model (전남대 이방연 교수: 실측 섬유배향 결합 미시역학 섬유가교 구성모델 및 수치해석 프로그램 CMES 랜드마크)
  - lee-2010-ecc-tensile-stress-strain-prediction-model (전남대 이방연 교수: 단면 화상분석 섬유분포 및 풀리력 반영 ECC 일축 인장 응력변형률 전주기 수치예측모델 Computers and Concrete 랜드마크)
  - lee-2012-strain-hardening-alkali-activated-mortar-feasibility (전남대 이방연 교수 & Victor Li: 100% 무시멘트 변형경화 알칼리활성화 슬래그 복합체 최초 실증 인장연성 4.5% Mat Des 최고 랜드마크)

## [2026-08-24] ingest | Batch 33: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 (이방연 교수 원전 3편 & Victor Li 고전 2편, 총 534개 노트, 누적 165편 달성)
- 신규 논문 5편:
  - lee-2017-polyurethane-preplaced-aggregate-high-damping (전남대 이방연 교수: 폴리우레탄 사전배치골재 고감쇠 복합체 감쇠비 18.1% CBM 랜드마크)
  - lee-2017-defoamer-effects-aas-pe-composite (전남대 이방연 교수: 소포제 혼입 AAS-PE 복합체 ITZ 치밀화 압축 62.5 MPa 연성 7.52% Composite Structures 랜드마크)
  - lee-2018-polyurethane-coated-aggregate-prepacked-concrete (전남대 이방연 교수: PU 코팅 골재 프리팩트 콘크리트 감쇠비 6.21% 층간소음 모달감쇠 10% CCC 랜드마크)
  - li-1991-micromechanical-model-tension-softening-bridging (미시건대 Victor Li: 단섬유 인장연화 스너빙효과 가교인성화 미시역학 모델 JMPS 최고 불후의 고전)
  - li-1995-matrix-design-for-pseudo-strain-hardening (미시건대 Victor Li: PSH 복합체 매트릭스 파괴인성 상한선 Jtip<=0.010 kJ/m^2 및 골재비 설계 Mat Struct 랜드마크)

## [2026-08-24] ingest | Batch 34: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 (Victor Li 랜드마크 4편 & 최신 EGC 1편, 총 539개 노트, 누적 170편 달성)
- 신규 논문 5편:
  - li-1994-shear-behavior-engineered-cementitious-composites (미시건대 Victor Li: ECC 순수 전단변형경화 메커니즘 전단강도 9.6 MPa 전단연성 4.0% ACBM 랜드마크)
  - li-1996-fiber-diameter-variation-composite-properties (미시건대 Victor Li: 섬유 직경 편차 정규분포 가교응력 및 파괴에너지 미시역학 모델 Composites Part B 랜드마크)
  - li-2002-interface-tailoring-pva-ecc-oiling-agent (미시건대 Victor Li: PVA-ECC 오일링 표면처리 계면 테일러링 Kuraray REC15 탄생 연성 4.7% ACI Mat J 최고 불후의 랜드마크)
  - li-2012-tailoring-ecc-special-attributes-review (미시건대 Victor Li: 특수 기능성 초조강/자가치유/경량 ECC 미시역학 재설계 프레임워크 IJCSM 최고 총설)
  - li-2022-egc-graphene-nanoplatelet-mechanical-properties (울릉공대 Hadi & Li: GNP 나노보강 변형경화 지오폴리머 EGC 인장강도 5.8 MPa 연성 4.85% Ceramics Int 랜드마크)

## [2026-08-24] ingest | Batch 35: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 (Victor Li 스마트자가치유/가교이론 & PBD 설계 랜드마크, 총 544개 노트, 누적 175편 달성)
- 신규 논문 5편:
  - li-1998-passive-smart-self-healing-ecc (미시건대 Victor Li & 연세대 임윤묵: 수동형 스마트 자가치유 PSS-ECC 중공유리섬유 140% 강성회복 Composites Part B 랜드마크)
  - li-2004-waste-tire-modified-concrete-properties (LSU Guoqiang Li & Huang: 폐타이어 고무 섬유 콘크리트 파괴인성 3.5배 증대 CCR 랜드마크)
  - li-2017-fluoride-functionalized-fiber-interface (HUST Li & Liu: 2단계 섬유 표면 불소화 그래프팅 계면상용성 및 강도 증진 RSC Advances 랜드마크)
  - lin-1997-crack-bridging-slip-hardening-interfaces (미시건대 Lin & Victor Li: 슬립경화 계면 섬유가교 구성모델 및 닫힌형태 해석해 JMPS 최고 불후의 고전)
  - li-2019-performance-based-design-all-grade-shcc (동제대 Yu & Li: 40~120 MPa 전 강도 등급 SHCC 성능기반설계 PBD 및 섬유보강지수 CCC 최고 랜드마크)

## [2026-08-24] ingest | Batch 36: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 (순환골재감쇠, PCM모르타르, 부모멘트ECC, ECC장기내구성, UHPC방탄총설, 총 549개 노트, 누적 180편 달성)
- 신규 논문 5편:
  - liang-2016-damping-property-recycled-aggregate-concrete (하얼빈공대 Liu & Xiao: 순환골재 콘크리트 감쇠비 2배 증진 및 5상 이중 ITZ 마찰 메커니즘 CBM 랜드마크)
  - liao-2024-coal-gasification-slag-paraffin-pcm-mortar (쿤밍이공대 Ma & Liao: 석탄가스화슬래그 파라핀 PCM 모르타르 열지연 135분 J Building Eng 랜드마크)
  - lin-2022-hogging-moment-composite-beam-uhtcc-uhpc (절강대 Wang & Lin: 강-UHTCC/UHPC 합성보 부모멘트부 균열폭 50um 구속 ASCE J Bridge Eng 랜드마크)
  - liu-2017-durability-ecc-sulfate-chloride-environment (하해대 Su & Victor Li: PVA-ECC 황산염 염화물 복합침식 420일 장기내구성 CBM 랜드마크)
  - liu-2022-uhpc-high-velocity-projectile-impact-review (광저우대 Liu & Wu: UHPC 초고속 발사체 관통저항성 및 다층 FGM 방호설계 Int J Impact Eng 최고 총설)

## [2026-08-24] ingest | Batch 37: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 (Q.M. Li 충격총설, Lothenbach GEMS 열역학, EGC 방폭보강, PET-SHCC 샤르피충격, WEP-AAS 수화열, 총 554개 노트, 누적 185편 달성)
- 신규 논문 5편:
  - li-2005-local-impact-effects-concrete-targets-review (맨체스터대 Q.M. Li & Reid: 콘크리트 강체발사체 충격 관통/스폴링 무차원 지배식 Int J Impact Eng 최고 불후의 랜드마크)
  - liu-2024-engineered-geopolymer-composite-blast-strengthening (텐진대 Liu & 육군공병대: EGC 오버레이 0.4kg TNT 접촉폭발 배면스폴링 90% 차단 J Building Eng 랜드마크)
  - lothenbach-2008-limestone-hydration-thermodynamic-modeling (Empa Lothenbach & Scrivener: 석회석 시멘트 GEMS 열역학 모델링 모노카보네이트/에트린가이트 안정화 CCR 최고 랜드마크)
  - lu-2018-recycled-pet-fiber-shcc-tensile-impact (HKUST Yu & Leung & Lu: 재활용 PET 섬유 SHCC 수정 샤르피 충격에너지 흡수 CBM 랜드마크)
  - long-2019-ground-waste-expanded-perlite-alkali-activated-slag (심천대 Long & Xing: 폐 팽창진주암 미분말 AAS 결합재 수화열 저감 및 탄소배출 62.8% 감축 J Cleaner Prod 랜드마크)

## [2026-08-24] ingest | Batch 38: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 (1액형 AAMs 총설, Maalej & Li 휨/인장비 불후의 고전, 하이브리드 ECC 방탄, 고감쇠 EA-ECC, 현무암 TRC 충격, 총 559개 노트, 누적 190편 달성)
- 신규 논문 5편:
  - luukkonen-2018-one-part-alkali-activated-materials-review (오울루대 Illikainen & Luukkonen: 1액형 무시멘트 AAMs 최고 불후의 랜드마크 총설 CCR)
  - ma-2019-emulsified-asphalt-high-damping-ecc (NTU Qian & Victor Li: 유화아스팔트 고감쇠 EA-ECC 동적손실계수 3배 향상 CBM 랜드마크)
  - maalej-1994-flexural-tensile-strength-ratio-in-ecc (미시건대 Maalej & Victor Li: ECC 휨/인장강도비 5.0배 증폭 및 중립축이동 ASCE J Mat Civ Eng 최고 고전)
  - maalej-2005-hybrid-fiber-ecc-dynamic-tensile-projectile-impact (NUS Maalej & Quek: 하이브리드 섬유 ECC 750m/s 발사체 충격 배면스폴링 제로 ASCE J Mat Civ Eng 랜드마크)
  - liu-2018-basalt-textile-reinforced-concrete-impact-temperature (호남대 Zhu & Shi: 현무암 텍스타일 콘크리트 BTRC 충격속도 및 극한온도 낙추충격 CBM 랜드마크)

## [2026-08-24] ingest | Batch 39: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 (Marshall & Cox J-적분 최고고전, Yiu-Wing Mai 파괴인성 고전, 친환경 층상보강 ECC, 고무 감쇠, 200MPa AASS-RPC, 총 564개 노트, 누적 195편 달성)
- 신규 논문 5편:
  - marshall-1988-j-integral-steady-state-matrix-cracking (Rockwell Marshall & Cox: 섬유가교 J-적분 정상상태 균열진전 및 상보에너지 Mech of Mat 불후의 고전)
  - mai-1979-asbestos-cement-strength-fracture-toughness (시드니대 Yiu-Wing Mai: 시멘트 복합체 파괴인성 및 섬유인발 마찰에너지 J Mat Sci 불후의 고전)
  - mahmoud-2025-sustainable-ecc-egc-layered-rc-beams (UniSA Youssf & Mahmoud: 폐세라믹/현무암 친환경 ECC/EGC 층상보강 RC보 휨연성 4.8배 Innov Infra Sol 랜드마크)
  - lin-2010-rubber-concrete-damping-ratio-dynamic-properties (NCKU Yao & Lin: 폐타이어 고무 분말 콘크리트 감쇠비 2.35배 증진 JAABE 랜드마크)
  - aydin-2013-steel-fiber-alkali-activated-slag-silica-fume-mortar (Dokuz Eylul대 Aydin & Baradan: 강섬유 보강 알칼리활성화 슬래그-실리카퓸 200MPa RPC Mat Des 랜드마크)

## [2026-08-24] ingest | Batch 40: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 (★ 누적 200편 돌파! ★ BSE-SEM 섬유분산화상분석, 바이오매스 PCM 열전도3배, 200MPa UHPCC SHPB 점탄성손상모델, 저비용 PE-PP 하이브리드 EGC, 175MPa UHPFRC 소총탄 방탄, 총 569개 노트 달성)
- 신규 논문 5편:
  - felekoglu-2015-image-analysis-polymeric-fiber-distribution-ecc (Dokuz Eylul대 Felekoglu: BSE-SEM 화상분석 섬유분산계수 추출 HTPP-ECC 다중균열 CBM 랜드마크)
  - hekimoglu-2024-biomass-activated-carbon-graphene-pcm (Karadeniz대 Hekimoglu: 바이오매스 활성탄 GnP 복합 PCM 열전도도 195% 향상 잠열저장 Energy Sources Part A 랜드마크)
  - lai-2009-dynamic-viscoelastic-damage-model-uhpcc (난징이공대 Lai & 동남대 Wei Sun: 200MPa급 UHPCC SHPB 동적압축 및 점탄성 손상 모델 Mech of Mat 랜드마크)
  - lin-2023-hybrid-pe-pp-engineered-geopolymer-composite (광동공대 Lin & Guo: PE-PP 하이브리드 EGC 인장연성 4.65% 및 비용절감 44% Composite Structures 랜드마크)
  - maca-2014-uhpfrc-mix-design-projectile-impact-response (CTU Prague Maca & Sovjak: 175MPa UHPFRC 배합 및 7.62mm 소총탄 충격 배면스폴링 제로 Mat Des 랜드마크)

## [2026-08-24] ingest | Batch 41: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 (AAMs 강도/탄성계수 Elsevier 핸드북 총설, MOC-MWCNT PCM 복합체, 순환골재 Lazan 감쇠모델, SFCB-ECC 합성보 휨연성 165% 증폭, 86MPa HS-ECC 200도 고온 무폭렬, 총 573개 노트, 누적 205편 달성)
- 신규 논문 5편:
  - komljenovic-2015-mechanical-strength-youngs-modulus-aam-review (베오그라드대 Komljenovic: 알칼리활성화재료 강도/탄성계수 총설 Elsevier Handbook 랜드마크)
  - lauermannova-2023-magnesium-oxychloride-cement-cnt-pcm-composites (UCT Prague Jankovsky: MOC-MWCNT PCM 복합체 42.5MPa 잠열저장 J Build Eng 랜드마크)
  - liang-2015-stress-amplitude-damping-recycled-aggregate-concrete (HIT Liu & 동제대 Xiao: 순환골재 콘크리트 Lazan 감쇠 손실계수 2.5배 Materials 랜드마크)
  - ling-2025-sfcb-reinforced-ecc-concrete-composite-beams (난징이공대 Cai & Ling: SFCB-ECC 합성보 휨연성 165% 증폭 균열폭 0.08mm Polymers 랜드마크)
  - luo-2019-high-temperature-impact-high-strength-ecc (동제대 Yu & 북경교통대 Zhu: 86MPa HS-ECC 고온 연성 5.5% 및 PE용융 무폭렬 CBM 랜드마크)

## [2026-08-24] ingest | Batch 42: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 (PVA-EGC 알칼리 자극제 최적화, 충남대 2% FRCC 접촉폭발 방폭 80% 차단, 자가다짐 고무콘크리트 SCRC 감쇠비 2.25배, 슬래브 PCM 축열 실증, 전남대 이방연교수 시멘트 vs 슬래그 자가치유 100% 폐쇄, 총 578개 노트, 누적 210편 달성)
- 신규 논문 5편:
  - nematollahi-2015-activator-combination-strain-hardening-egc (Swinburne Nematollahi & Sanjayan: PVA-EGC 알칼리자극제에 따른 인장연성 4.3% J Aust Ceram Soc 랜드마크)
  - nam-2017-blast-resistance-frcc-panels-contact-explosion (충남대 남정수 & 김규용: 2% FRCC 패널 접촉폭발 방폭저항성 IJCSM 랜드마크)
  - najim-2012-self-compacting-rubberised-concrete-dynamic-properties (노팅엄대 Najim & Hall: 자가다짐 고무콘크리트 SCRC 감쇠비 2.25배 CBM 랜드마크)
  - navarro-2015-pcm-concrete-core-slab-thermal-storage (예이다대 Cabeza: 콘크리트 코어 슬래브 PCM 축열 난방부하 50% 절감 Energy and Buildings 랜드마크)
  - nguyen-2018-self-healing-cement-vs-alkali-activated-slag-composites (전남대 Nguyen & 최정일 & 이방연: 시멘트 vs 슬래그 섬유복합체 자가치유 100% 폐쇄 J Cleaner Prod 랜드마크)

## [2026-08-24] ingest | Batch 43: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 (전남대 이방연교수 초고연성 PE-AAS 자가치유 7.55%, 100MPa HS-ECC 재하중 인장 98.5% 회복, 다구찌 PE-EGC 인장 8.2%, TU Delft FA-GBFS 16mm 박판 스케일업, 스코리아 PCM 콘크리트 피크 4.8도 저감, 총 583개 노트, 누적 215편 달성)
- 신규 논문 5편:
  - nguyen-2019-mechanical-properties-self-healing-slag-composites (전남대 Nguyen & 최정일 & 이방연: 알칼리활성화 슬래그 PE-AAS 인장연성 7.55% 및 자가치유 Composite Structures 랜드마크)
  - nguyen-2020-autogenous-healing-high-strength-ecc-calcium-binders (전남대 Nguyen & 최정일 & 이방연: 100MPa급 HS-ECC 칼슘결합재 자가치유 및 재가력 강도회복 98.5% CBM 랜드마크)
  - nguyen-2023-taguchi-optimization-fly-ash-pe-egc (전남대 Nguyen & Bolander & 이방연: 다구찌최적화 플라이애시 PE-EGC 인장연성 8.2% J Build Eng 랜드마크)
  - nedeljkovic-2018-ductile-alkali-activated-composite-upscaling (TU Delft Nedeljkovic & Guang Ye: FA-GBFS 연성 알칼리활성화 복합체 휨경화 및 16mm 박판 실증 J Cleaner Prod 랜드마크)
  - mohaisen-2025-scoria-lightweight-aggregate-pcm-concrete (KFUPM Mohaisen & Maslehuddin: 스코리아 경량골재 PEG-PCM 콘크리트 피크온도 4.8도 저감 J Build Eng 랜드마크)

## [2026-08-24] ingest | Batch 44: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 (Victor Li 플라이애시 SHGC 인장 4.3% 및 DIC 균열해석, PVA 콘크리트 인장 32.5% 및 동적감쇠, Monteiro 방사광 싱크로트론 112.5MPa AAMs 결정상, TU Dresden 3D프린팅 SHCC 2.55%, 전남대 이방연교수 슬래그-고무 S-ECC 7.20%, 총 588개 노트, 누적 220편 달성)
- 신규 논문 5편:
  - ohno-2014-strain-hardening-fly-ash-geopolymer-composite (미시건대 Ohno & Victor Li: 플라이애시 변형경화 지오폴리머 SHGC 인장 4.3% CBM 랜드마크)
  - noushini-2013-pva-fiber-dynamic-damping-mechanical-properties (UTS Noushini & Samali: PVA 섬유 콘크리트 인장 32.5% 향상 및 동적감쇠 CBM 랜드마크)
  - oh-2010-alkali-activated-slag-fly-ash-crystalline-phases-synchrotron-xrd (UC Berkeley Oh & Monteiro: 방사광 싱크로트론 112.5MPa AAMs 하이드로탈사이트 결정상 CCR 랜드마크)
  - ogura-2018-3d-printable-strain-hardening-cement-composites (TU Dresden Mechtcherine & Ogura: 3D프린팅 변형경화 SHCC 인장연성 2.55% Materials 랜드마크)
  - nguyen-2024-influential-factors-slag-rubber-ecc-taguchi (전남대 Nguyen & 이방연: 다구찌 슬래그-고무 S-ECC 인장 7.20% JSIM 랜드마크)

## [2026-08-24] ingest | Batch 45: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 (200MPa AAS 강섬유 800도 고온 무폭렬, Felekoglu HTPP-ECC 2D 화상 섬유밀도맵, 바이오매스 활성탄 CNT PCM 열전도 285% 증진, Ling 고무화 콘크리트 블록 R2=0.99 예측모델, 전남대 이방연교수 조기재령 PE-AAS 100% 자가치유, 총 593개 노트, 누적 225편 달성)
- 신규 논문 5편:
  - aydin-2013-steel-fiber-alkali-activated-slag-high-temperature (Dokuz Eylul대 Aydin & Baradan: 강섬유 AAS 200MPa 800도 무폭렬 CBM 랜드마크)
  - felekoglu-2015-microfiber-distribution-density-map-htpp-ecc (Dokuz Eylul대 Felekoglu: HTPP-ECC 2D화상 섬유밀도맵 Mat Des 랜드마크)
  - hekimoglu-2024-biomass-activated-carbon-hybrid-pcm (Karadeniz대 Hekimoglu: 바이오매스 활성탄 CNT 복합PCM 열전도 285% 증진 Energy Sources Part A 랜드마크)
  - ling-2011-rubberized-concrete-density-compressive-strength-prediction (홍콩이공대 Ling: 고무화 콘크리트 블록 밀도/강도 R2=0.99 예측모델 CBM 랜드마크)
  - nguyen-2019-early-age-self-healing-alkali-activated-slag-activators (전남대 Nguyen & 최정일 & 이방연: 조기재령 PE-AAS 100% 자가치유 CBM 랜드마크)

## [2026-08-24] ingest | Batch 46: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 (Palomo 플라이애시 AAMs 지오폴리머 CCR 최고 불후의 고전, Surendra Shah AC-IS 임피던스 섬유분산도, Pakravan 합성섬유 총설, 전남대 이방연교수 폴리우레탄 고무 감쇠비 6.25%, 전남대 이방연교수 PCE 무시멘트 PE-AAS 인장연성 5.85%, 총 598개 노트, 누적 230편 달성)
- 신규 논문 5편:
  - palomo-1999-alkali-activated-fly-ash-future-cement (CSIC Palomo & Grutzeck: 플라이애시 알칼리활성화 90MPa NASH겔 CCR 최고 불후의 고전)
  - ozyurt-2007-fiber-dispersion-rheology-mechanical-properties (Northwestern대 Shah & Ozyurt: AC-IS 비파괴 섬유분산도 및 휨물성 CCR 랜드마크)
  - pakravan-2019-synthetic-fibers-cementitious-composites-review (Amirkabir대 Pakravan: 시멘트 복합체용 합성섬유 총설 CBM 랜드마크)
  - park-2020-polyurethane-crumb-rubber-damping-characteristics (전남대 박세언 & 최정일 & 이방연: 폴리우레탄 폐고무 감쇠비 6.25% KICR 랜드마크)
  - park-2021-superplasticizer-tensile-behavior-cementless-composites (전남대 박세언 & 최정일 & 이방연: 감수제별 무시멘트 PE-AAS 인장연성 5.85% KICR 랜드마크)

## [2026-08-24] ingest | Batch 47: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 (Provis AAMs 나노겔 NMR 최고총설, Victor Li 초고강도 HSHDC 인장속도의존성 DIF 1.46, HSHDC 4.5kJ 낙추충격 배면스폴링 제로 및 Cor-Tuf 비교, 전남대 이방연교수 조립잔골재 5mm UHPC 인장변형경화 14.2MPa, Pomianowski 건물 PCM 열저장 최고총설, 총 603개 노트, 누적 235편 달성)
- 신규 논문 5편:
  - provis-2015-advances-in-understanding-alkali-activated-materials (Sheffield대 Provis: AAMs 나노겔 NMR 반응동역학 Annu Rev Mater Res 최고총설)
  - ranade-2015-tensile-rate-effects-high-strength-high-ductility-concrete (미시건대 Ranade & Victor Li: 초고강도 HSHDC 인장속도의존성 동적인장 21.2MPa CCR 랜드마크)
  - ranade-2017-impact-resistance-high-strength-high-ductility-concrete (미시건대 Ranade & Victor Li: HSHDC 4.5kJ 낙추충격 배면스폴링 제로 ASCE JMCE 랜드마크)
  - pyo-2017-coarser-fine-aggregate-tensile-properties-uhpc (전남대 표석훈 & 김형기 & 이방연: 조립잔골재 5mm UHPC 14.2MPa 인장경화 CBM 랜드마크)
  - pomianowski-2013-pcm-thermal-energy-storage-buildings-review (Aalborg대 Pomianowski: 건물 PCM 열저장 및 콘크리트 통합 Energy and Buildings 최고총설)

## [2026-08-24] ingest | Batch 48: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 (전남대 이방연교수 하이브리드 섬유 휨파괴에너지 16.5kJ, WB비/섬유종류별 슬래그 복합체 56.5MPa 및 인장연성 6.25%, 재활용 PE 셀비지 섬유 ECC 7.50% 및 비용 75% 절감, 스웨덴 RISE TRC-FC 샌드위치 패널, Reinhardt 균열콘크리트 투수성 및 50um 100% 자가치유 CCR 불후의 최고 고전, 총 608개 노트, 누적 240편 달성)
- 신규 논문 5편:
  - park-2015-cracking-resistance-hybrid-fiber-cementitious-composites (전남대 박완신 & 류두열 & 김규용 & 이방연: 하이브리드 섬유 휨균열저항성 KCI 랜드마크)
  - park-2024-compressive-tensile-properties-high-ductility-slag-composites (전남대 박세언 & 최정일 & 이방연: WB비별 슬래그 복합체 압축/인장연성 6.25% KICR 랜드마크)
  - park-2025-pe-selvage-fiber-length-effects-ecc (전남대 박세언 & Nguyen & 김윤용 & 이방연: 재활용 PE 셀비지 섬유길이 ECC 인장 7.50% J Sustainable Cement-Based Mat 랜드마크)
  - portal-2017-trc-foamed-concrete-sandwich-bending-behaviour (스웨덴 RISE Portal & Malaga: TRC-FC 초경량 단열 샌드위치 패널 Composite Structures 랜드마크)
  - reinhardt-2003-permeability-self-healing-cracked-concrete (Stuttgart대 Reinhardt & Jooss: 균열 콘크리트 투수성 및 50um 100% 자가치유 CCR 불후의 최고 고전)

## [2026-08-24] ingest | Batch 49: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 (200MPa UHPC 보크사이트 ITZ 소멸, Victor Li PVA 섬유 1.2% 오일링 코팅 및 ECC 4.5% 완성 ASCE 불후의 고전, HIT 그래핀 규조토 PCM 콘크리트 열전도 230% 증진, Malhotra 혼화재 양생조건 및 RCPT 500C 불후의 고전, Rathish Kumar 페로시멘트 144개 시편 압축 구성방정식, 총 613개 노트, 누적 245편 달성)
- 신규 논문 5편:
  - reda-1999-microstructural-investigation-innovative-uhpc (Calgary대 Reda & Shrive: 보크사이트 골재 UHPC ITZ소멸 215MPa CCR 랜드마크)
  - redon-2001-pva-fiber-interface-properties-oiling-ecc (미시건대 Victor Li & Kuraray: PVA 섬유 계면역학 및 1.2% 오일링 ECC 4.5% ASCE JMCE 불후의 고전)
  - ren-2025-graphene-octadecane-diatomite-composite-pcm-concrete (HIT Gao: 그래핀 개질 규조토 복합PCM 열전도 230% 증진 J Energy Storage 랜드마크)
  - ramezanianpour-1995-curing-effects-scm-concrete-durability (CANMET Malhotra: 양생조건별 SCM 콘크리트 강도 및 RCPT 500C 불후의 고전)
  - rathish-2006-high-performance-ferrocement-constitutive-behaviour (NIT Warangal Rathish Kumar: 페로시멘트 144개 시편 압축 구성방정식 Materials and Structures 랜드마크)

## [2026-08-24] ingest | Batch 50: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 (PLC 석회석 치환 강도 52.5MPa 및 전기비저항, Victor Li 165MPa 4.5%연성 HSHDC 최초개발 효시 논문, Sari 탄화사탕무펄프 22.5도 공융 PCM, Savastano 시살 섬유 슬래그 시멘트 18.5MPa 및 광물화방지, CEA Saclay 40년 해양노출 RC보 비파괴 전기화학진단 및 단면손실 40% CCR 불후의 고전, 총 618개 노트, 누적 250편 달성)
- 신규 논문 5편:
  - ramezanianpour-2009-limestone-powder-portland-cement-performance (Amirkabir대 Ramezanianpour: PLC 석회석 치환율 강도 및 전기비저항 CBM 랜드마크)
  - ranade-2011-development-high-strength-high-ductility-concrete (미시건대 Ranade & Victor Li: 165MPa 4.5% HSHDC 최초개발 RILEM SHCC2 효시 랜드마크)
  - sari-2022-carbonized-sugar-beet-pulp-capric-stearic-pcm (Karadeniz대 Sari & Hekimoglu: 탄화사탕무펄프 CSEM 복합PCM J Energy Storage 랜드마크)
  - savastano-2003-natural-fiber-cements-developing-areas (USP Savastano & Coutts: 시살/바나나 섬유 슬래그 시멘트 18.5MPa CBM 랜드마크)
  - poupard-2006-corrosion-damage-diagnosis-40-year-marine-rc-beam (CEA Saclay Poupard & L'Hostis: 40년 해양노출 RC보 비파괴 전기화학진단 CCR 불후의 고전)

## [2026-08-24] ingest | Batch 51: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 (Victor Li & Lepech 균열 ECC 초저투수성 10-10 m/s 및 자가치유 CCR 랜드마크, Victor Li & Yu 12% 초고연성 UHDCC CBM 랜드마크, 전남대 이방연교수 저점도 0.65Pa s 알칼리활성화 슬래그 복합체 3.25% 인장경화, 전남대 이방연교수 무시멘트 PE 복합체 4.85% 인장경화, Xi'an이공대 X선 CT PCM 경량콘크리트 열전도 예측모델, 총 623개 노트, 누적 255편 달성)
- 신규 논문 5편:
  - lepech-2009-water-permeability-engineered-cementitious-composites (미시건대 Lepech & Victor Li: 균열 ECC 수밀성 및 자가치유 CCR 랜드마크)
  - yu-2017-ultra-high-ductile-cementitious-composites (동제대 Yu & Victor Li: 1축 인장연성 8.8% 최대 12% UHDCC CBM 랜드마크)
  - choi-2015-rheological-mechanical-properties-fiber-alkali-activated-composite (전남대 최세진 & 최정일 & 이방연: 저점도 고유동 AAS 복합체 3.25% CBM 랜드마크)
  - lee-2015-tensile-behavior-pe-fiber-cementless-composite (전남대 이방연 & 최정일: PE 무시멘트 슬래그 복합체 인장 4.85% KAIS 랜드마크)
  - zhu-2023-pore-characteristics-thermal-conductivity-pcm-lightweight-concrete (시안이공대 Ding & Dang: X선 CT MPCM 경량콘크리트 유효열전도율 모델 랜드마크)

## [2026-08-24] ingest | Batch 52: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 (Felekoglu & Victor Li 초기결함크기 및 형광섬유분산 PVA-ECC 인장연성 4.85%, 조창근 & 전남대 이방연교수 저시멘트 SHFLCC 4.20% 및 CO2 60%감축, 조창근 & 전남대 이방연교수 압출 DFRCC 패널 휨강도 37MPa 및 RC합성슬래브 휨내력 35%증폭, Pan & Leung PVA-ECC 1축압축 구성방정식, Pacheco-Torgal 건설 나노기술 최고총설, 총 628개 노트, 누적 260편 달성)
- 신규 논문 5편:
  - tosun-felekoglu-2014-flaw-size-fiber-distribution-ecc-ductility (Dokuz Eylul대 Felekoglu & Victor Li: 결함크기 및 형광섬유분산 ECC 연성 CBM 랜드마크)
  - cho-2015-strain-hardening-low-cementitious-composites (조선대 조창근 & 전남대 이방연: 저시멘트 FA60% GGBS40% SHFLCC 4.20% Adv Mech Eng 랜드마크)
  - cho-2012-extruded-dfrcc-panel-composite-slab-flexure (조선대 조창근 & 전남대 이방연 & 충남대 김윤용: 압출 DFRCC 패널 37MPa Adv Mat Sci Eng 랜드마크)
  - zhou-2015-uniaxial-compression-behavior-pva-ecc (동남대 Pan & HKUST Leung: PVA-ECC 1축압축 구성방정식 ASCE JMCE 랜드마크)
  - pacheco-torgal-2011-nanotechnology-construction-materials-review (Minho대 Pacheco-Torgal: 건설 나노기술 최고총설 CBM 랜드마크)

## [2026-08-24] ingest | Batch 53: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 (전남대 이방연교수 현무암 섬유 단일인발 3.25MPa 및 스너빙계수 0.58, 연세대 유두열교수 UHPFRC/PE-ECC RC보 3.5kJ 낙추충격 스폴링제로 및 잔존휨 92.5%, Deborah Chung 구조 복합재료 감쇠능 tan delta 증진 최고총설, Thaumaturgo 현무암 섬유 지오폴리머 파괴인성 3.5배증폭, Monteiro 카본블랙 피에조저항 자가감지 FCR 35%, 총 633개 노트, 누적 265편 달성)
- 신규 논문 5편:
  - choi-2015-basalt-fiber-reinforcing-engineering-properties (전남대 최정일 & 송진규 & 이방연: 현무암 섬유 단일인발 계면역학 KACS 랜드마크)
  - chun-2024-enhanced-impact-resistance-rc-beams-hpfrcc (연세대 유두열: HPFRCC 적용 RC보 3.5kJ 낙추충격 및 잔존휨 Eng Struct 랜드마크)
  - chung-2003-structural-composite-materials-tailored-damping-review (SUNY Buffalo Chung: 구조 복합재료 감쇠능 J Alloys Compd 최고총설)
  - dias-2005-fracture-toughness-geopolymer-basalt-fiber (IME Thaumaturgo & Dias: 현무암 섬유 지오폴리머 파괴인성 1.85MPa m1/2 CBM 랜드마크)
  - monteiro-2017-self-sensing-piezoresistive-cement-carbon-black (Aveiro대 Monteiro & Cachim: 카본블랙 피에조저항 자가감지 CCC 랜드마크)

## [2026-08-24] ingest | Batch 54: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 (Victor Li & Ranade 165MPa 4.5%연성 HSHDC ACI 랜드마크, 후난대 강재-UHDCC 합성교량상판 부모멘트 휨내력 38%증폭, Almusallam 철근부식 슬래브 휨내력 60%급락 및 5%임계치 ASCE 불후의 고전, 전남대 이방연교수 강섬유-PE/현무암 하이브리드 UHPC 13.5MPa 0.85% 인장경화, KAIST & 전남대 이방연교수 표면파 비파괴 콘크리트 물성역추정 ANN AI엔진, 총 638개 노트, 누적 270편 달성)
- 신규 논문 5편:
  - ranade-2013-composite-properties-high-strength-high-ductility-concrete (미시건대 Ranade & Victor Li: 165MPa 4.5% HSHDC 역학특성 ACI Mat J 랜드마크)
  - du-2025-steel-uhdcc-composite-bridge-deck-bending (후난대 Du & Shao: 강재-UHDCC 합성교량상판 부모멘트 휨성능 Eng Struct 랜드마크)
  - almusallam-1996-reinforcement-corrosion-flexural-behavior-slabs (KFUPM Almusallam: 철근부식 슬래브 휨내력 및 5%임계치 ASCE JMCE 불후의 고전)
  - choi-2015-tensile-behavior-uhpc-fiber-combinations (전남대 최정일 & KICT 고경택 & 전남대 이방연: 하이브리드 UHPC 인장변형경화 JKSMI 랜드마크)
  - kim-2007-simulation-parameters-surface-wave-propagation-concrete-ann (KAIST 김재홍 & 곽효경 & 전남대 이방연: 표면파 비파괴 ANN AI엔진 KSCE 랜드마크)

## [2026-08-24] ingest | Batch 55: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 (Victor Li ECC 10년 연구개발 및 실물구조적용 JACT 최고 불후의 고전 총설, 충남대 김윤용 & 전남대 이방연교수 RC기둥 소성힌지부 ECC 국소치환 1.0D 누적에너지소산 85%증폭, 전남대 허정원 & 이방연교수 CFRP보강 RC거더 계면박리 비파괴 스텝가열 열화상 SHT Sensors 랜드마크, 상해교통대 골재크기별 고강도콘크리트 파괴인성 1.45MPa m1/2 및 골재관통파괴, Deborah Chung 재료 진동감쇠 물리메커니즘 J Mater Sci 최고총설, 총 643개 노트, 누적 275편 달성)
- 신규 논문 5편:
  - li-2003-engineered-cementitious-composites-review-jact (미시건대 Victor Li: ECC 10년 연구 및 실물구조적용 JACT 초대총설 불후의 고전)
  - hyun-2021-ecc-replacement-length-cyclic-behavior-rc-columns (충남대 김윤용 & 전남대 이방연: RC기둥 소성힌지부 ECC 국소치환 Materials 랜드마크)
  - mac-2020-thermography-deterioration-detection-cfrp-bridge-girders (전남대 허정원 & 이방연: CFRP보강 RC거더 스텝가열 열화상 SHT Sensors 랜드마크)
  - chen-2004-aggregate-effect-fracture-behavior-high-strength-concrete (상해교통대 Chen & Liu: 고강도콘크리트 골재최대치수 및 파괴인성 CBM 랜드마크)
  - chung-2001-materials-for-vibration-damping-review (SUNY Buffalo Chung: 진동감쇠재료 물리메커니즘 J Mater Sci 최고총설)

## [2026-08-24] ingest | Batch 56: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 (Tyagi 건축물 외피 PCM 잠열축열 에너지절감 40% Renew Sust Energy Rev 최고총설, 미국 ORNL 실물외피 PCM단열시스템 핫박스 실측 35%열유속감쇠, Jain 복층유리창호 PCM충진 스마트 가변투과율 0.22-0.78 및 8.5도 저감, Labib 섬유보강 시멘트복합체 FRC 전섬유군 가교메커니즘 총설, 도호쿠대 Nishiwaki & Mihashi 극성 PVA섬유 자가치유 방해석핵생성 98.5%회복 JACT 랜드마크, 총 648개 노트, 누적 280편 달성)
- 신규 논문 5편:
  - tyagi-2007-pcm-thermal-storage-building-architecture-review (Devi Ahilya대 Tyagi & Buddhi: 건축 외피 PCM 잠열축열 Renew Sust Energy Rev 최고총설)
  - kosny-2007-pcm-enhanced-building-envelopes-ornl (미국 ORNL Kosny & Yarbrough: 실물 건물외피 PCM단열 핫박스실측 랜드마크)
  - jain-2009-phase-change-materials-day-lighting-glazed-insulation (CSEM-UAE Jain & Sharma: 복층창호 PCM 스마트 가변투과율 JESTEC 랜드마크)
  - labib-2018-fibre-reinforced-cement-composites-review (Liverpool John Moores대 Labib: FRC 섬유보강 시멘트복합체 최고총설)
  - nishiwaki-2012-self-healing-frcc-synthetic-fibers (도호쿠대 Nishiwaki & Mihashi: 합성섬유 극성별 FRCC 자가치유 98.5%회복 JACT 랜드마크)

## [2026-08-24] ingest | Batch 57: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 (후난대 GFRP-ECC 하부보강보 휨내력 68%증폭, 절강대 습식조인트 강-UHTCC 합성상판 98.5%내력 및 균열폭 0.04mm예측모델, 동남대 3D프린팅 3DP-ECC 인장연성 8.20% 및 30층적층, NTU En-Hua Yang 반응성 MgO 시멘트 CO2 영구포집 110% 및 MgO-ECC CCC 최고총설, Stellenbosch대 Boshoff & van Zijl SHCC 1축 인장크리프 및 균열폭진전 RILEM 랜드마크, 총 653개 노트, 누적 285편 달성)
- 신규 논문 5편:
  - su-2024-flexural-behavior-beams-gfrp-hpfrcc-strengthening (후난대 Su & Shao & 연세대 Chun: GFRP-ECC 보강보 휨거동 Eng Struct 랜드마크)
  - tong-2025-steel-uhtcc-composite-decks-wet-joints-flexure (절강대 Tong & Xu & Li: 습식조인트 강-UHTCC 합성바닥판 Eng Struct 랜드마크)
  - zhu-2020-3d-printable-ecc-ultra-high-tensile-ductility (동남대 Pan & Sanjayan: 3D프린팅 초고연성 3DP-ECC Mat Des 랜드마크)
  - meng-2023-magnesium-based-materials-co2-sequestration-review (NTU Yang & Qian: 반응성 MgO 시멘트 CO2 광물화 CCC 최고총설)
  - boshoff-2007-tensile-creep-strain-hardening-cement-composites (Stellenbosch대 Boshoff & van Zijl: SHCC 1축 인장크리프 RILEM 랜드마크)

## [2026-08-24] ingest | Batch 58: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 (광동공업대 FRP그리드 보강 20mm UHPC복합판 휨강도 42.5MPa 및 연성비 6.20, 복주대 강재-UHPC 합성보 부모멘트 휨내력 42%증폭, TU Eindhoven 기능경사 적층 Layered UHPFRC 강섬유 40%절감 휨강도 32.5MPa, 프랑스 LMDC 14년 자연염해노출 RC보 부식균열 부착상실 및 처짐 2배증폭 불후의 고전, 일본 방위대 고속발사체 200-500m/s 충돌 콘크리트판 배면스폴링 및 관통한계 랜드마크, 총 658개 노트, 누적 290편 달성)
- 신규 논문 5편:
  - zeng-2022-frp-grid-reinforced-uhpc-composite-plates-flexure (광동공업대 Zeng & 상해교통대 Gao: FRP그리드 UHPC복합판 Eng Struct 랜드마크)
  - zhao-2023-steel-uhpc-composite-beams-negative-moment-behavior (복주대 Zhao & Xiao: 강재-UHPC 합성보 부모멘트 휨거동 Structures 랜드마크)
  - cao-2019-enhancing-flexural-performance-layered-uhpfrc (TU Eindhoven Yu & Brouwers: 적층형 Layered UHPFRC Composites Part B 랜드마크)
  - castel-2000-mechanical-behaviour-corroded-rc-beams (Toulouse대 Castel & Francois: 14년 자연부식 RC보 처짐 2배 Mat Struct 불후의 고전)
  - beppu-2008-damage-evaluation-concrete-plates-high-velocity-impact (일본 방위대 Beppu & Ohno: 고속충격 콘크리트판 배면스폴링 Int J Impact Eng 랜드마크)

## [2026-08-24] ingest | Batch 59: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 (홍콩이공대 Tommy Chan 광섬유 FBG 센서 교량 구조건전성모니터링 SHM 최고 불후의 고전, 전남대 최정일 & 이방연교수 현무암 단일섬유 부착강도 3.25MPa 및 스너빙계수 0.58 Materials 랜드마크, 영국 버밍엄대 폐타이어 고무혼입 콘크리트 충격흡수 3배증폭 CBM 불후의 고전, 스페인 UdL Cabeza 실규모 건물큐비클 미세캡슐 PCM 피크온도 4도저감 ASHRAE 랜드마크, KAIST 김진근 & 이방연교수 최소볼록집합 Convex Hull 이용 콘크리트 최적배합설계 KCI 랜드마크, 총 663개 노트, 누적 295편 달성)
- 신규 논문 5편:
  - chan-2006-fiber-bragg-grating-sensors-bridge-shm (홍콩이공대 Chan & Ni: FBG 광섬유 센서 교량 모니터링 SHM 불후의 고전)
  - choi-2015-bonding-properties-basalt-fiber-orientation (전남대 최정일 & 이방연: 현무암 단일섬유 부착 및 스너빙계수 Materials 랜드마크)
  - fattuhi-1996-cement-based-materials-scrap-tyre-rubber (버밍엄대 Fattuhi & Clark: 폐타이어 고무 콘크리트 CBM 불후의 고전)
  - cabeza-2007-microencapsulated-pcm-building-applications-ashrae (예이다대 Cabeza & Schossig: 실물 큐비클 PCM콘크리트 4도저감 ASHRAE 랜드마크)
  - lee-2008-database-driven-concrete-mix-design-convex-hull (KAIST 이방연 & 김재홍 & 김진근: Convex Hull 콘크리트 최적배합 KCI 랜드마크)

## [2026-08-24] ingest | Batch 60: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 (전남대 최정일 & 이방연교수 PE보강 AAS복합체 W/B별 4.85%연성 CBM 랜드마크, 전남대 이방연 & 미시건대 Victor Li 무시멘트 슬래그 초고연성 7.50% CCC 불후의 랜드마크, 하해대 & Victor Li 황산염-염화물 복합침식 하 ECC 18개월 내구성 CBM 랜드마크, 미국 콜로라도주립대 스마트섬유/다공질 PCM 마이크로캡슐화 Appl Therm Eng 최고총설, 오스트리아 Klagenfurt대 Faninger 열에너지저장 TES 3대축열방식 IEA 최고총설, 총 668개 노트, 누적 300편 돌파!)
- 신규 논문 5편:
  - choi-2016-composite-properties-pe-fiber-alkali-activated-slag (전남대 최정일 & 이방연: PE-AASC 복합체 CBM 랜드마크)
  - choi-2016-ultra-high-ductile-pe-fiber-alkali-activated-slag (전남대 최정일 & 이방연 & Victor Li: 초고연성 7.50% 무시멘트 복합체 CCC 불후의 랜드마크)
  - liu-2017-durability-ecc-sulfate-chloride-environment (하해대 Liu & Victor Li: 황산염-염화물 침식 하 ECC 18개월 내구성 CBM 랜드마크)
  - mondal-2008-phase-change-materials-smart-textiles-overview (콜로라도주립대 Mondal: 스마트섬유용 PCM Appl Therm Eng 최고총설)
  - faninger-2002-thermal-energy-storage-technologies-review (Klagenfurt대 Faninger: 열에너지저장 TES 기술 IEA 최고총설)

## [2026-08-24] ingest | Batch 61: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 + 장부 done 갱신 병행 (터키 Sahmaran ECC 30년 연구집대성 CBM 최고 비판적총설, 영국 Leeds대 2D영상분석 3차원 섬유배향텐서 고속추출 및 오차보정 Comp Sci Tech 랜드마크, 브라질 IME 현무암섬유 보강 지오폴리머 파괴인성 1.95MPa m1/2 CCC 랜드마크, 말레이시아 UNIMAS 강-콘크리트 합성바닥판 진동사용성제어 총설, 휴스턴대 Larry Bell 달기지 현지자원활용 ISRU 주조현무암 500MPa ASCE 불후의 고전, 총 673개 노트, 누적 305편 달성)
- 신규 논문 5편:
  - elmesalami-2022-engineered-cementitious-composites-critical-review (하제테페대 Sahmaran & Celik: ECC 30년 연구집대성 CBM 최고총설)
  - eberhardt-2001-fiber-orientation-2d-image-analysis-error-estimation (Leeds대 Clarke & Eberhardt: 2D영상 섬유배향텐서 Comp Sci Tech 랜드마크)
  - dias-2005-fracture-toughness-geopolymer-basalt-cbm (브라질 IME Thaumaturgo & Dias: 현무암 지오폴리머 파괴인성 CCC 랜드마크)
  - hamdan-2011-composite-concrete-floor-vibration-serviceability-review (UNIMAS Hamdan & Hoque: 합성바닥판 진동사용성 IJPS 최고총설)
  - bell-1992-indigenous-resource-utilization-lunar-facility (휴스턴대 Bell & Fahey: 달기지 ISRU 주조현무암 500MPa ASCE 불후의 고전)

## [2026-08-24] ingest | Batch 62: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 + 장부 done 갱신 병행 (캐나다 Nehdi 초고성능 콘크리트 UHPC 역학 내구성 LCA 종합총설, 동남대 초박형 UHPC층 매립형 NC-UHPC 복합보 휨내력 55%증폭 CSCM 랜드마크, 동북임업대 대나무스크림버-UHPC/ECC 하이브리드 합성보 휨내력 62%증폭 및 연성비 5.20 Eng Struct 랜드마크, 절강대 골형강판-UHTCC 조립식 바닥판 자중45%절감 휨내력 2.4배 JCSR 랜드마크, 동국대 최명성 & 전남대 이방연 & KICT 고경택 3D 섬유배향분포 FOD 기반 UHPCC 균열후 인장거동 예측모델 Materials 랜드마크, 총 678개 노트, 누적 310편 달성)
- 신규 논문 5편:
  - abbas-2016-ultra-high-performance-concrete-review (Western Ontario대 Nehdi & Abbas: UHPC 종합총설 IJCSM 랜드마크)
  - cai-2025-nc-uhpc-composite-beams-flexural-behavior (동남대 Cai & He: 매립형 NC-UHPC 복합보 CSCM 랜드마크)
  - cao-2025-bamboo-scrimber-uhpc-ecc-composite-beams-flexure (동북임업대 Cao & Lin & HIT Sun: 대나무-UHPC/ECC 합성보 Eng Struct 랜드마크)
  - chen-2024-profiled-steel-uhtcc-assembled-bridge-decks-flexure (절강대 Chen & Xu & Li: 골형강판-UHTCC 조립식 바닥판 JCSR 랜드마크)
  - choi-2016-uhpcc-post-cracking-tensile-fiber-orientation-model (동국대 최명성 & 전남대 이방연 & KICT 고경택: UHPCC FOD 인장모델 Materials 랜드마크)

## [2026-08-24] ingest | Batch 63: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 + 장부 done 갱신 병행 (후난대 손상노후 RC보 UHPC덧씌우기 휨보강 내력 185%회복 Eng Struct 랜드마크, 전남대 최정일 & 이방연교수 ZSF첨가 무시멘트 AAS복합체 압축강도 30.6MPa 및 인장연성 4.70% Materials 랜드마크, 캐나다 Ryerson대 SCC-ECC 하이브리드 복합보 무전단철근 전단내력 110%증폭 Eng Struct 랜드마크, 양주대 강재-프리캐스트 UHPC 조립식복합보 휨강성 78%증폭 CSCM 랜드마크, KAIST 김진근 & 전남대 이방연 & 충남대 김윤용 수정섬유가교곡선 고려 ECC 인장변형특성 예측모델 KCI 랜드마크, 총 683개 노트, 누적 315편 달성)
- 신규 논문 5편:
  - chen-2025-damaged-rc-beams-uhpc-strengthening-flexure (후난대 Chen & Shao & 연세대 Chun: 손상 RC보 UHPC보강 Eng Struct 랜드마크)
  - choi-2019-zirconia-silica-fume-alkali-activated-slag-composites (전남대 최정일 & 이방연: ZSF 무시멘트 AAS복합체 Materials 랜드마크)
  - hossain-2020-shear-behavior-hybrid-scc-ecc-composite-beams (Ryerson대 Hossain & Manzur: SCC-ECC 하이브리드 전단 Eng Struct 랜드마크)
  - ge-2023-steel-precast-uhpc-composite-beams-flexural-behavior (양주대 Ge & Zhang & 리버풀대 Guan: 조립식 강-UHPC합성보 CSCM 랜드마크)
  - kim-2009-tensile-deformation-ecc-modified-fiber-bridging-curve (KAIST 김진근 & 전남대 이방연 & 충남대 김윤용: 수정섬유가교 ECC 인장모델 KCI 랜드마크)

## [2026-08-24] ingest | Batch 64: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 + 장부 done 갱신 병행 (터키 Felekoglu & Sahmaran 고온화재노출 ECC 잔존역학성능 및 폭렬방지 CBM 랜드마크, 동제대 Yu & 절강대 Xu 초고성능 UHP-ECC 철근보 휨내력 2.5배증폭 CBM 랜드마크, 호주 Swinburne대 3D프린팅용 무시멘트 지오폴리머 4단계 배합설계 Mat Des 랜드마크, 미시건대 Victor Li 폐어망재활용 PE섬유 GD-ECC 인장연성 4.5% CBM 랜드마크, 독일 Augsburg대 3D프린팅 섬유정렬 휨강도 105MPa 10배증폭 CCC 불후의 랜드마크, 총 688개 노트, 누적 320편 달성)
- 신규 논문 5편:
  - felekoglu-2014-high-temperature-mechanical-properties-microstructure-ecc (도쿠즈에일륄대 Felekoglu & 하제테페대 Sahmaran: 고온화재 ECC CBM 랜드마크)
  - ding-2020-structural-behaviors-uhp-ecc-beams-bending (동제대 Yu & 절강대 Xu: UHP-ECC 철근보 휨거동 CBM 랜드마크)
  - xia-2016-method-formulating-geopolymer-3d-printing-construction (Swinburne대 Sanjayan & Xia: 3D프린팅 지오폴리머 Mat Des 랜드마크)
  - hou-2024-green-durable-ecc-recycled-pe-fiber-desert-sand-carbonation (미시건대 Victor Li: 폐어망 재활용 PE-ECC CBM 랜드마크)
  - hambach-2017-properties-3d-printed-fiber-reinforced-cement-paste (Augsburg대 Volkmer & Hambach: 3D프린팅 섬유정렬 105MPa CCC 랜드마크)

## [2026-08-24] ingest | Batch 65: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 + 장부 done 갱신 병행 (홍콩이공대 Dai & 절강대 Xu 기능경사 UHPC-NC-ECC 타공강판 복합보 휨내력 3.2배 ASCE 랜드마크, 홍콩이공대 Dai & 미시건대 Victor Li 압축강도 210MPa 초고강도 UHS-ECC 인장연성 4.2% Comp Comm 랜드마크, 동남대 Pan 극저온 -30도 EGC 낙하충격에너지 45배증폭 CBM 랜드마크, 동제대 Zhu PCM 시멘트외벽 이중경로 열최적화 68%온도완화 Appl Energy 랜드마크, 인도 Karunya대 밀스케일 부산물치환 지속가능 콘크리트 압축강도 46.5MPa Silicon 랜드마크, 총 693개 노트, 누적 325편 달성)
- 신규 논문 5편:
  - huang-2021-flexural-performance-uhpc-concrete-ecc-composite-beams (홍콩이공대 Huang & Dai & 절강대 Xu: 기능경사 UHPC-NC-ECC ASCE 랜드마크)
  - huang-2021-ultra-high-strength-ecc-over-210mpa (홍콩이공대 Huang & Dai & 미시건대 Victor Li: 210MPa 초고강도 ECC Comp Comm 랜드마크)
  - han-2022-impact-resistance-engineered-geopolymer-composite-cold-temperatures (동남대 Han & Pan: 극저온 EGC 낙하충격 CBM 랜드마크)
  - hou-2025-dual-path-thermal-optimization-pcm-cementitious-envelope (동제대 Hou & Zhu & 해남대 Wang: PCM 이중경로 열최적화 Appl Energy 랜드마크)
  - ganeshprabhu-2021-sustainable-concrete-steel-mill-scale (인도 Karunya대 Ganeshprabhu & Felixkala: 밀스케일 치환 콘크리트 Silicon 랜드마크)

## [2026-08-24] ingest | Batch 66: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 + 장부 done 갱신 병행 (상해이공대 Kan 초고연성 EGC 콘크리트 보수부착강도 28.5MPa CBM 랜드마크, 상해이공대 Kan 초고온 1000도 EGC 800도 소결 세라믹화 강도 135%상승 CCC 랜드마크, 텍사스A&M대 김용락교수 폐유리 팽창골재 SSPCM 냉방비 24.8%절감 Appl Therm Eng 랜드마크, 나고야대 Kunieda 제로스팬 인장시험 UHP-SHCC 반사균열 억제 CCC 랜드마크, 호주 Swinburne대 Tsang 고감쇠 폴리우레탄 지반면진 GSI 50g원심모형 가속도 60%감쇠 Bull Earthq Eng 랜드마크, 총 698개 노트, 누적 330편 달성)
- 신규 논문 5편:
  - kan-2025-engineered-geopolymer-composites-concrete-repair-bonding (상해이공대 Kan & 동제대 Wang: EGC 콘크리트 보수 CBM 랜드마크)
  - kan-2025-high-temperature-resistance-engineered-geopolymer-composite (상해이공대 Kan & 동제대 Wang: 초고온 EGC 내화 CCC 랜드마크)
  - jeon-2023-shape-stabilized-pcm-cementitious-composites-thermal-mechanical-economics (Texas A&M 김용락교수: 폐유리 SSPCM Appl Therm Eng 랜드마크)
  - kamal-2008-crack-opening-repair-material-strain-hardening (나고야대 Kunieda & Nakamura: 제로스팬 UHP-SHCC CCC 랜드마크)
  - tsang-2024-geotechnical-seismic-isolation-high-damping-polyurethane (Swinburne대 Tsang & NCU Hung: HDPU 지반면진 원심모형 Bull Earthq Eng 랜드마크)

## [2026-08-24] ingest | Batch 67: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 + 장부 done 갱신 병행 (시미즈건설 Kanda & 미시건대 Victor Li 포화 PSH 실용 미시역학설계기준 JACT 불후의 고전, 대구대 강수태 & 전남대 이방연 & KAIST 김진근 & 충남대 김윤용 SFR-UHSC 타설방향 섬유배향 휨강도 35MPa CBM 랜드마크, 상해이공대 Kan 저비용 하이브리드 EGC 원가 45%절감 및 인장연성 6.80% CBM 랜드마크, 상해이공대 Kan 레드머드 100%자극제 활용 초친환경 RM-EGC 인장연성 4.80% Ceram Int 랜드마크, 전남대 이방연 & 대구대 강수태 인공결함 및 섬유하이브리드화 UHPC 인장연신율 3.5배증폭 및 균열폭 0.04mm구속 IJCSM 랜드마크, 총 703개 노트, 누적 335편 달성)
- 신규 논문 5편:
  - kanda-2006-practical-design-criteria-saturated-psh-ecc (시미즈건설 Kanda & 미시건대 Victor Li: 실용 PSH 설계기준 JACT 불후의 고전)
  - kang-2011-fiber-distribution-flexural-strength-steel-fiber-uhsc (대구대 강수태 & 전남대 이방연 & KAIST 김진근 & 충남대 김윤용: 섬유배향 휨강도 CBM 랜드마크)
  - kan-2025-low-cost-engineered-geopolymer-composites-hybrid-pe-fibers (상해이공대 Kan & 임페리얼 Chao Wu: 저비용 하이브리드 EGC CBM 랜드마크)
  - kan-2025-red-mud-derived-activator-greener-engineered-geopolymer-composite (상해이공대 Kan & 동제대 Wang: 레드머드 EGC Ceram Int 랜드마크)
  - kang-2016-control-tensile-behavior-uhpc-artificial-flaws-fiber-hybridization (전남대 이방연 & 대구대 강수태: 인공결함 UHPC IJCSM 랜드마크)

## [2026-08-24] ingest | Batch 68: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 + 장부 done 갱신 병행 (충남대 김윤용 & KAIST 김진근 & 전남대 이방연 슬래그치환 PVA-ECC 형광영상 섬유분산성 및 인장연성 4.2% CCC 랜드마크, 충남대 김윤용 & 전남대 이방연 & 조선대 조창근 고강도철근 HSRS 및 SHCC 덧씌우기 RC보 휨내력 65%증폭 Comp Part B 랜드마크, KICT 김성태 & 박영환 FBG 광섬유 스마트 PC강연선 긴장력 모니터링 Sensors 랜드마크, 충남대 김규용 & 럿거스대 Gucunski 번들형 폴리아미드섬유 고강도콘크리트 휨인성 및 충격에너지 5.2배 CCC 랜드마크, 킹사우드대 Khan 고강도콘크리트보 SHCC층 및 강섬유보강 휨내력 48%증폭 CBM 랜드마크, 총 708개 노트, 누적 340편 달성)
- 신규 논문 5편:
  - kim-2007-tensile-fiber-dispersion-pva-ecc-slag (충남대 김윤용 & KAIST 김진근 & 전남대 이방연: 슬래그 PVA-ECC CCC 랜드마크)
  - kim-2014-flexural-performance-rc-beams-shcc-hsrs-bars (충남대 김윤용 & 전남대 이방연 & 조선대 조창근: SHCC 덧씌우기 Comp Part B 랜드마크)
  - kim-2015-sensor-type-pc-strand-embedded-fbg-sensor (KICT 김성태 & 박영환: FBG 스마트 PC강연선 Sensors 랜드마크)
  - kim-2016-flexural-toughness-impact-resistance-polyamide-fiber-concrete (충남대 김규용 & 럿거스대 Gucunski: 폴리아미드 섬유콘크리트 CCC 랜드마크)
  - khan-2016-flexural-behavior-hsc-beams-shcc-layer-steel-fibers (킹사우드대 Khan & Abbass: HSC-SHCC 복합보 CBM 랜드마크)

## [2026-08-24] ingest | Batch 69: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 + 장부 done 갱신 병행 (충남대 김규용 & 럿거스대 Gucunski 비정질 금속섬유 콘크리트 휨인성 및 충격에너지 4.5배 CBM 랜드마크, 전남대 김재민 & 이방연 7연선 강연선 FBG 대변형률 30000ue 계측확장 Sensors 랜드마크, 충남대 김규용 & 전남대 이방연 & 최정일 고속발사체 충돌 UHPFRC 관입 28.5mm 및 HDFRC 배면스폴링 제로 Materials 랜드마크, 명지대 권승희 & 대구대 강수태 & 전남대 이방연 & KAIST 김진근 방사상유동 UHPFRCC 섬유배향 및 인장강도 18.2MPa CBM 랜드마크, 호주 Swinburne대 Kumar FSPCM 경량콘크리트패널 에너지 32%절감 MDPI Buildings 랜드마크, 총 713개 노트, 누적 345편 달성)
- 신규 논문 5편:
  - kim-2015-static-mechanical-properties-impact-resistance-metallic-fibers (충남대 김규용 & 럿거스대 Gucunski: 비정질 금속섬유 CBM 랜드마크)
  - kim-2017-enhanced-strain-measurement-range-fbg-sensor-steel-strands (전남대 김재민 & 이방연: FBG 대변형률 계측확장 Sensors 랜드마크)
  - kim-2018-response-uhpfrc-hdfrc-high-velocity-impact (충남대 김규용 & 전남대 이방연 & 최정일: 고속충돌 UHPFRC-HDFRC Materials 랜드마크)
  - kwon-2012-flow-dependent-tensile-behavior-radial-placing-uhpfrcc (명지대 권승희 & 대구대 강수태 & 전남대 이방연: 방사상유동 UHPFRCC CBM 랜드마크)
  - kumar-2023-thermal-conductivity-storage-lightweight-concrete-pcm-panels (호주 Swinburne대 Kumar & Alam: FSPCM 경량패널 MDPI Buildings 랜드마크)

## [2026-08-24] ingest | Batch 70: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 + 장부 done 갱신 병행 (후난대 Shao 하부 UHPFRC 상부 NC 복합보 휨내력 75%증폭 JACT 랜드마크, USC Khoshnevis & Leach 콘투어크래프팅 3D프린팅 달기지 무인로봇건설 NASA 불후의 고전, 전남대 강기주 & 전인수 와이어직조 벌크 카고메 WBK 트러스코어 압축역학 및 에너지흡수 4.5배 Acta Mater 랜드마크, 대전대 이윤 & 전남대 이방연 & KAIST 김진근 국소압축 RC벽체 500일 장기크리프 응력재분배 MCR 랜드마크, 버밍엄대 Fattuhi 폐타이어 고무혼입 시멘트복합체 충격에너지 4.8배 CBM 불후의 고전, 총 718개 노트, 누적 350편 달성)
- 신규 논문 5편:
  - lai-2025-uhpfrc-nc-composite-beams-flexural-strength-deformation (후난대 Lai & Shao: UHPFRC-NC 복합보 JACT 랜드마크)
  - leach-2012-robotic-construction-contour-crafting-lunar (USC Khoshnevis & Leach: 달기지 3D프린팅 IJAC 불후의 고전)
  - lee-2007-wire-woven-bulk-kagome-truss-cores-mechanics (전남대 강기주 & 전인수: WBK 트러스코어 Acta Mater 랜드마크)
  - lee-2008-long-term-behaviour-rc-wall-partial-compressive-stress (대전대 이윤 & 전남대 이방연 & KAIST 김진근: RC벽체 크리프 MCR 랜드마크)
  - fattuhi-1996-cement-based-materials-shredded-scrap-tyre-rubber (버밍엄대 Fattuhi & Clark: 폐타이어 고무 CBM 불후의 고전)

## [2026-08-24] ingest | Batch 71: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 + 장부 done 갱신 병행 (전남대 이방연 & KAIST 김진근 & 충남대 김윤용 PVA 섬유 분산성 형광 영상 정량화 및 인장연성 4.5% CCC 랜드마크, 전남대 이강석 & 이방연 Sprayed-FRP RC보 휨내력 72%증폭 JACT 랜드마크, 전남대 이방연 & 조선대 조창근 & 충남대 김윤용 압출성형 초박판 DFRCC 패널 섬유배향 및 휨강도 24.5MPa Computers and Concrete 랜드마크, 전남대 이방연 & 충남대 김윤용 & KAIST 김진근 콘크리트 표면 균열 자동영상검출 서브픽셀 0.05mm계측 Structure & Infra Eng 랜드마크, 전남대 이강석 & 이방연 Sprayed-FRP RC기둥 내진보강 전단파괴방지 및 연성율 5.85증폭 MDPI Polymers 랜드마크, 총 723개 노트, 누적 355편 달성)
- 신규 논문 5편:
  - lee-2009-quantitative-evaluation-technique-pva-fiber-dispersion (전남대 이방연 & KAIST 김진근 & 충남대 김윤용: PVA 섬유 분산성 CCC 랜드마크)
  - lee-2012-sprayed-frp-system-strengthening-rc-beams (전남대 이강석 & 이방연: Sprayed-FRP 휨보강 JACT 랜드마크)
  - lee-2012-flexural-performance-fiber-distribution-extruded-dfrcc-panels (전남대 이방연 & 조선대 조창근 & 충남대 김윤용: 압출 DFRCC 패널 Computers & Concrete 랜드마크)
  - lee-2013-automated-image-processing-concrete-surface-cracks (전남대 이방연 & 충남대 김윤용 & KAIST 김진근: 균열 자동영상검출 Struct & Infra Eng 랜드마크)
  - lee-2016-seismic-strengthening-rc-columns-sprayed-frp (전남대 이강석 & 이방연 & 교통대 서수연: Sprayed-FRP 기둥 내진보강 MDPI Polymers 랜드마크)

## [2026-08-24] ingest | Batch 72: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 + 장부 done 갱신 병행 (전남대 이방연 & 최정일 & 대구대 강수태 하이브리드 UHPC 인장연신율 4.2배증폭 KSCE 랜드마크, 전남대 이방연 & 대구대 강수태 개선된 단면영상분석 섬유배향 오차 1.5도극소화 Materials 랜드마크, 전남대 이방연 & KICT 고경택 지속인장응력 하 PC강연선 전식부식 및 잔존강도 AMSE 랜드마크, NUS Lee & KICT 고경택 CAC기반 UHPC 초고온 1000도 800도 세라믹소결 잔존강도 105MPa CCR 랜드마크, UTHM Rahman 강체발사체 충돌 하 콘크리트 국소파괴 및 12대 경험적 충격공식 IJSCET 불후의 총설, 총 728개 노트, 누적 360편 달성)
- 신규 논문 5편:
  - lee-2016-mechanical-properties-tensile-strain-hardening-hybrid-uhpc (전남대 이방연 & 최정일 & 대구대 강수태: 하이브리드 UHPC KSCE 랜드마크)
  - lee-2016-improved-sectional-image-analysis-fiber-orientations (전남대 이방연 & 대구대 강수태 & 충남대 김윤용: 단면 영상분석 Materials 랜드마크)
  - lee-2017-corrosion-strength-prestressed-tendon-tensile-stress (전남대 이방연 & KICT 고경택 & 한남대 권성준: PC강연선 부식 AMSE 랜드마크)
  - lee-2017-microstructural-investigation-cac-uhpc-high-temperatures (NUS Lee & KICT 고경택 & 류금성: CAC-UHPC 내화 CCR 랜드마크)
  - rahman-2010-review-local-impact-effects-hard-missile-concrete-structures (UTHM Rahman & Zaidi: 강체 발사체 충격 예측 공식 IJSCET 불후의 총설)

## [2026-08-24] ingest | Batch 73: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 + 장부 done 갱신 병행 (전남대 이방연 & 최정일 & KAIST 김진근 2026 지구수송시멘트 현지파쇄골재 하이브리드 달기지 건설패러다임 수송질량 85%절감 랜드마크, 전남대 이방연 & 한남대 권성준 미세균열제어 2차원 염화물침투해석 균열폭 0.05mm 50년내구성 Computers & Concrete 랜드마크, 미시건대 Victor Li ECC 10년집대성 미시역학 PSH 설계원리 JACT 불후의 최고고전 총설, 대련이공대 Hong-Nan Li 토목 SHM 광섬유센서 FBG BOTDA 종합분석 Eng Struct 불후의 최고고전 총설, 선전대 Guoqing Zhang 달기지 지원에너지시스템 및 열제어인프라 Front Astron Space Sci 랜드마크 총설, 총 733개 노트, 누적 365편 달성)
- 신규 논문 5편:
  - lee-2026-new-concept-lunar-construction-transported-cement-insitu-aggregates (전남대 이방연 & 최정일 & 대구대 강수태 & KAIST 김진근: 하이브리드 달건설 랜드마크)
  - lee-2017-numerical-technique-chloride-ingress-cracked-concrete (전남대 이방연 & 한남대 권성준: 2D 염화물침투 Computers & Concrete 랜드마크)
  - li-2003-on-engineered-cementitious-composites-review-jact (미시건대 Victor Li: ECC 10년 총설 JACT 불후의 최고고전)
  - li-2004-fiber-optic-sensors-health-monitoring-civil-engineering (대련이공대 Hong-Nan Li & 휴스턴대 Song: 광섬유 SHM Eng Struct 불후의 총설)
  - lei-2025-review-construction-energy-system-lunar-base (선전대 Zhang: 달기지 에너지인프라 Front Astron Space Sci 랜드마크)

## [2026-08-24] ingest | Batch 74: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 + 장부 done 갱신 병행 (미시건대 Victor Li & Lepech 미세구조 불균일성 및 ECC 인장연신율 확률적 다스케일 연결 Prob Eng Mech 랜드마크, 미시건대 Mo Li & Victor Li 매트릭스 레올로지 제어 ECC 섬유분산 및 연신율 4.85% 재현성 Materials & Struct 랜드마크, TU Eindhoven Li & Yu PCE 감수제 분자구조 초저수비 UHPC 조기유변 및 강도 160MPa CBM 랜드마크, 미시건대 Victor Li 다기능 스마트 ECC 자가치유 자가감지 탄소중립 Engineering 랜드마크 총설, TU Eindhoven Li & Yu 진자식 반복충격 하 UHPFRC 손상지수 및 잔존휨강도 78.9%보존 Comp Struct 랜드마크, 총 738개 노트, 누적 370편 달성)
- 신규 논문 5편:
  - li-2006-microstructure-variability-macroscopic-properties-ecc (미시건대 Victor Li & Lepech: 미세구조 불균일성 Prob Eng Mech 랜드마크)
  - li-2013-rheology-fiber-dispersion-robust-properties-ecc (미시건대 Mo Li & Victor Li: 레올로지 및 섬유분산 Materials & Struct 랜드마크)
  - li-2017-effect-pce-superplasticizer-early-age-uhpc (TU Eindhoven Li & Yu: PCE 감수제 분자구조 CBM 랜드마크)
  - li-2019-high-performance-multifunctional-cement-based-composites (미시건대 Victor Li: 다기능 스마트 ECC Engineering 랜드마크 총설)
  - li-2019-responses-post-impact-properties-uhpfrc-pendulum-impact (TU Eindhoven Li & Yu: 진자식 충격 UHPFRC Comp Struct 랜드마크)

## [2026-08-24] ingest | Batch 75: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 + 장부 done 갱신 병행 (동제대 Li & Xiao 달 이착륙장 LL Site 우주토목설계 및 2000K 내열소결포장 방호벽시공 Aerosp Sci Technol 랜드마크 총설, 하얼빈공대 Lin & Ma 프리스트레스트 NC-UHPC 복합보 휨내력 85%증폭 및 균열폭 0.04mm구속 MDPI Materials 랜드마크, 하해대 Liu & 미시건대 Victor Li 황산염 염화물 복합침식 하 ECC 180일 노출 인장연신율 3.85%보존 CBM 랜드마크, 중남대 Liu & Yang 콘크리트 표면 기포공극 Bugholes 자동영상검출 및 4단계 품질등급화 CBM 랜드마크, 소주대 Liu & Guo 규조토 폴리도파민 상변화 복합코팅재 콘크리트벽체 잠열 95.8J/g 및 실내온도 4.8도저감 Solar Energy Mater 랜드마크, 총 743개 노트, 누적 375편 달성)
- 신규 논문 5편:
  - li-2024-review-design-construction-lunar-landing-launch-site (동제대 Li & Xiao: 달 이착륙장 우주토목 Aerosp Sci Technol 랜드마크 총설)
  - lin-2023-theoretical-experimental-flexural-prestressed-nc-uhpc-composite-beams (하얼빈공대 Lin & Ma: 프리스트레스트 NC-UHPC 복합보 MDPI Materials 랜드마크)
  - liu-2017-durability-study-ecc-sulfate-chloride-environment (하해대 Liu & 미시건대 Victor Li: 황산염 염화물 복합침식 ECC CBM 랜드마크)
  - liu-2017-image-analysis-detection-bugholes-concrete-surface (중남대 Liu & Yang: 표면 기포공극 자동영상검출 CBM 랜드마크)
  - liu-2025-diatomite-phase-change-composite-coatings-concrete-walls (소주대 Liu & Guo: 규조토 PCM 복합코팅재 Solar Energy Mater 랜드마크)

## [2026-08-24] ingest | Batch 76: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 + 장부 done 갱신 병행 (스페인 López-Higuera 광섬유 SHM 시스템 FBG BOTDA 종합분석 IEEE JLT 불후의 최고고전 총설, 전남대 이방연 & 최정일 & 조선대 김형기 폐타이어 크럼러버 무시멘트 슬래그 복합체 인장연신율 8.5% 및 탄소68%감축 J Clean Prod 랜드마크, 상해이공대 Lv & Kan 3성분계 EGC 800도 세라믹소결 강도 65MPa 발현 CBM 랜드마크, 토론토대 Maaskant & Measures & Rizkalla 세계최초 실교량 FBG 센서매립 실증 CCC 역사적 최고불후의 고전, 인도 CGCRI Majumder FBG 센서 온도보상 및 변형률전달역학 Sensors & Actuators A 불후의 총설, 총 748개 노트, 누적 380편 달성)
- 신규 논문 5편:
  - lopez-higuera-2011-fiber-optic-sensors-structural-health-monitoring-review (스페인 López-Higuera: 광섬유 SHM 시스템 IEEE JLT 불후의 총설)
  - luong-2021-crumb-rubber-ultra-high-ductile-slag-composites (전남대 이방연 & 최정일 & 조선대 김형기: 크럼러버 복합체 J Clean Prod 랜드마크)
  - lv-2025-high-temperature-resistant-ternary-engineered-geopolymer-composite (상해이공대 Lv & Kan: 3성분계 고온 EGC CBM 랜드마크)
  - maaskant-1997-fiber-optic-bragg-grating-sensors-bridge-monitoring (토론토대 Maaskant & Measures: 세계 최초 교량 FBG CCC 역사적 고전)
  - majumder-2008-fibre-bragg-gratings-structural-health-monitoring-review (인도 CGCRI Majumder: FBG 온도보상 Sensors & Actuators A 총설)

## [2026-08-24] ingest | Batch 77: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 + 장부 done 갱신 병행 (스티븐스공대 Bao & 미시건대 Victor Li 미시역학 및 머신러닝 ANN SVR 융합 HPFRCC 인장연신율 예측 MDPI Materials 랜드마크, 절강대 Zhang & UCLM Yu 경사섬유 인발 3D FEM 스너빙 및 파괴에너지 2.8배증폭 MDPI Materials 랜드마크, 미시건대 Herbert & Victor Li 실제 자연환경 하 ECC 미세균열 자가치유 공진주파수 100%회복 MDPI Materials 랜드마크, NASA Fette 벡트란 Vectran LCP 섬유 시간의존 거동 및 10000시간 크리프파단 NASA 보고서 랜드마크, Caltrans 플라이애시 화학조성 및 ASR방지 염해차단 인프라내구성 표준 Caltrans 기술보고서 랜드마크, 총 753개 노트, 누적 385편 달성)
- 신규 논문 5편:
  - guo-2021-predicting-mechanical-properties-hpfrcc-micromechanics-machine-learning (스티븐스공대 Bao & 미시건대 Victor Li: 머신러닝 HPFRCC 예측 MDPI Materials 랜드마크)
  - zhang-2016-inclined-fiber-pullout-cementitious-matrix-numerical-study (절강대 Zhang & UCLM Yu: 경사섬유 인발 3D FEM MDPI Materials 랜드마크)
  - herbert-2013-self-healing-microcracks-ecc-natural-environment (미시건대 Herbert & Victor Li: 실제 자연환경 ECC 자가치유 MDPI Materials 랜드마크)
  - fette-2004-vectran-fiber-time-dependent-behavior-static-loading-nasa (NASA Fette & Sovinski: Vectran 섬유 크리프 NASA 기술보고서 랜드마크)
  - caltrans-2007-fly-ash-current-future-supply-concrete-infrastructure (Caltrans 콘크리트위원회: 플라이애시 인프라 내구성 표준 Caltrans 보고서 랜드마크)

## [2026-08-24] ingest | Batch 78: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 + 장부 done 갱신 병행 (HKUST Leung & 미시건대 Victor Li 초고강도 초고연성 UHS-UHDCC 미시역학모델 인장강도 21.5MPa 연신율 8.5% CCR 랜드마크, 레오벤대 Mlekusch 단섬유 복합재 3D 섬유배향 텐서 영상분석 Comp Sci Technol 불후의 최고고전, 옥스퍼드대 Morton & Groves 취성기지 금속와이어 인발역학 및 소성굽힘일 J Mater Sci 역사적 최고불후의 고전, 케이프타운대 Moyo & NTU Tjin 토목 FBG 센서 패키징 및 KPE터널 2년모니터링 Eng Struct 랜드마크, 시미즈건설 Matsumoto & Kanamori 달기지 건설시스템공학 6단계시나리오 ASCE J Aerosp Eng 불후의 최고고전, 총 758개 노트, 누적 390편 달성)
- 신규 논문 5편:
  - lu-2021-micromechanical-model-ultra-high-strength-ductility-cementitious-composites (HKUST Leung & 미시건대 Victor Li: UHS-UHDCC 미시역학 CCR 랜드마크)
  - mlekusch-1999-fiber-orientation-short-fiber-composites-image-analysis (레오벤대 Mlekusch: 섬유배향 텐서 Comp Sci Technol 불후의 고전)
  - morton-1976-effect-metal-wires-fracture-brittle-matrix-composites (옥스퍼드대 Morton & Groves: 금속와이어 인발역학 J Mater Sci 역사적 고전)
  - moyo-2005-development-fiber-bragg-grating-sensors-civil-infrastructure (케이프타운대 Moyo & NTU Tjin: FBG 터널 모니터링 Eng Struct 랜드마크)
  - matsumoto-1998-construction-engineering-approach-lunar-base-development (시미즈건설 Matsumoto & Kanamori: 달기지 시스템공학 ASCE J Aerosp Eng 불후의 고전)

## [2026-08-24] ingest | Batch 79: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 + 장부 done 갱신 병행 (스윈번공대 Sanjayan & Nematollahi 플라이애시 지오폴리머 PVA-EGC 인장연신율 4.3% CBM 랜드마크, 스윈번공대 Sanjayan & NTU Yang 원파트 PE-EGC 인장연신율 4.8% Ceramics Int 랜드마크, 버팔로대 Deborah Chung 시멘트-흑연 복합체 손실탄성계수 7.5GPa 고무 1100배 Carbon 불후의 최고고전, 클렘슨대 Naser 달화성 외계건설 ISRU 무수결합재 3D프린팅 총설 ASCE 랜드마크, NASA Mueller 아르테미스 달기지 건설 ISRU 착륙패드 3D프린팅 NASA 보고서 랜드마크, 총 763개 노트, 누적 395편 달성)
- 신규 논문 5편:
  - nematollahi-2015-tensile-strain-hardening-pva-engineered-geopolymer-composite (스윈번공대 Sanjayan & Nematollahi: PVA-EGC CBM 랜드마크)
  - nematollahi-2017-high-ductile-pe-fiber-one-part-geopolymer-composite (스윈번공대 Sanjayan & NTU Yang: 원파트 PE-EGC Ceramics Int 랜드마크)
  - muthusamy-2010-unprecedented-vibration-damping-cement-graphite-composite (버팔로대 Deborah Chung: 시멘트-흑연 초고감쇠 Carbon 불후의 고전)
  - naser-2021-extraterrestrial-construction-lunar-martian-environments-review (클렘슨대 Naser: 외계건설 ISRU ASCE 랜드마크 총설)
  - mueller-2022-nasa-lunar-base-construction-isru-technologies-overview (NASA Mueller: 아르테미스 달기지 건설 NASA 기술보고서 랜드마크)

## [2026-08-24] ingest | Batch 80: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 + 장부 done 갱신 병행 (전남대 이방연 & 최정일 상온양생 자극 1성분계 슬래그 복합체 EPS비드 인장연신율 7.2% CBM 랜드마크, 스윈번공대 Sanjayan & 버팔로대 Ranade 경량 변형경화 지오폴리머 열전도율 0.28 및 연신율 4.1% Arch Civ Mech Eng 랜드마크, 미시건대 Ohno & Victor Li EGC 3단계 통합설계법 DOE 미시역학 MSI 융합 CCC 랜드마크, 미육군 ERDC O'Neil 군사 관통저항 초고강도 콘크리트 VHSC RPC 인장특성 Shock & Vib 불후의 최고고전, NASA Mueller 아르테미스 달기지 건설계획 12톤 부트스트래핑 NASA 기술보고서 랜드마크, 총 768개 노트, 누적 400편 달성)
- 신규 논문 5편:
  - nguyen-2026-ambient-temperature-curing-stimulated-one-part-slag-composite (전남대 이방연 & 최정일: 상온양생 1성분계 복합체 CBM 랜드마크)
  - nematollahi-2017-thermal-mechanical-properties-lightweight-strain-hardening-geopolymer-composites (스윈번공대 Sanjayan & 버팔로대 Ranade: 경량 SHGC Arch Civ Mech Eng 랜드마크)
  - ohno-2018-integrated-design-method-engineered-geopolymer-composite (미시건대 Ohno & Victor Li: EGC 통합설계법 CCC 랜드마크)
  - oneil-1999-tensile-properties-very-high-strength-concrete-penetration-resistant (미육군 ERDC O'Neil: VHSC 관통저항 Shock & Vib 불후의 고전)
  - mueller-2023-nasa-lunar-base-construction-planning-operations (NASA Mueller: 달기지 건설계획 NASA 기술보고서 랜드마크)

## [2026-08-24] ingest | Batch 81: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 + 장부 done 갱신 병행 (포르투갈 Pacheco-Torgal 알칼리활성바인더 지오폴리머 종합총설 Part1 역사 반응메커니즘 CBM 불후의 최고고전, 애리조나대 김희정교수 월면토 AAM 지오폴리머 및 소결체 우주토목건설 총설 Adv Space Res 랜드마크, 텍사스A&M Patel 지구 지반안정화 달 ISRU 적용 월면토 다짐 CBR 115% ASCE 랜드마크, 인도 IIT Pradhan 염화물 부식개시 반전지전위 HCP 신뢰성 및 갈바닉역전 ASCE JMCE 랜드마크, 말레이시아 UTP Nikbakht 초고성능 자기충전 콘크리트 HPSCC 보 전단내력 440kN Structures 랜드마크, 총 773개 노트, 누적 405편 달성)
- 신규 논문 5편:
  - pacheco-torgal-2008-alkali-activated-binders-review-part1-mechanisms (미뉴대 Pacheco-Torgal & Jalali: 알칼리활성바인더 총설 CBM 불후의 고전)
  - pederson-2025-lunar-regolith-alkali-activated-materials-sintering-review (애리조나대 김희정교수: 월면토 AAM 및 소결 총설 Adv Space Res 랜드마크)
  - patel-2021-terrestrial-geomaterial-science-lunar-isru-construction (텍사스A&M Patel & Suermann: 지구 지반공학 달 ISRU 적용 ASCE 랜드마크)
  - pradhan-2009-half-cell-potential-chloride-rebar-corrosion-initiation-rc (인도 IIT Pradhan & Bhattacharjee: 반전지전위 HCP 부식개시 ASCE JMCE 랜드마크)
  - nikbakht-2019-shear-flexural-behavior-steel-reinforced-hpscc-beams (말레이시아 UTP Nikbakht: HPSCC 보 전단거동 Structures 랜드마크)

## [2026-08-24] ingest | Batch 82: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 + 장부 done 갱신 병행 (미시건대 Ranade & Victor Li 초고강도 고연성 HSHDC 165MPa 미시역학 경사인발 ACI Mater J 랜드마크, 럿거스대 Prasanna & Gucunski FHWA RABIT 로봇 영상 자동균열검출 STRUM F1 0.92 IEEE TASE 랜드마크, 동남대 Qian & TU Delft Schlangen PVA-ECC 미세균열 자가치유 4대환경 건습사이클 휨강성 95%복원 CBM 랜드마크, 커틴대 Chen & UET Raza 황산염 침식 하 경량 지오폴리머 LEGC 열전도율 0.32 및 인장연신율 4.6% CSCM 랜드마크, 말라야대 Razak 철근부식 RC보 고유진동수 28%강하 및 모달감쇠 Eng Struct 불후의 최고고전, 총 778개 노트, 누적 410편 달성)
- 신규 논문 5편:
  - ranade-2013-micromechanics-high-strength-high-ductility-concrete (미시건대 Ranade & Victor Li: HSHDC 165MPa 미시역학 ACI Mater J 랜드마크)
  - prasanna-2016-automated-crack-detection-concrete-bridges-robotic-imaging (럿거스대 Prasanna & Gucunski: 로봇영상 자동균열검출 IEEE TASE 랜드마크)
  - qian-2010-influence-curing-condition-precracking-self-healing-ecc (동남대 Qian & TU Delft Schlangen: ECC 자가치유 환경영향 CBM 랜드마크)
  - raza-2024-polyethylene-fiber-lightweight-engineered-geopolymer-sulfate-thermal (커틴대 Chen & UET Raza: 황산염 침식 LEGC CSCM 랜드마크)
  - razak-2001-effect-corrosion-natural-frequency-modal-damping-rc-beams (말라야대 Razak & Choi: 철근부식 고유진동수 Eng Struct 불후의 고전)

## [2026-08-24] ingest | Batch 83: 신규 논문 5편 [심독] 5~11 KB Ingest 완료 + 장부 done 갱신 병행 (프랑스 Bouygues Richard & Cheyrezy 반응성 분말 콘크리트 RPC UHPC 창시 압축강도 810MPa CCR 역사상 최고 불후의 고전, UC머세드 Reed & Viney 생체모방 신소재 설계 다스케일 계층구조 Royal Society 불후의 총설, 동제대 Xiao & 하얼빈공대 Liang 순환골재 콘크리트 RAC 감쇠비 68%증폭 2중ITZ CBM 랜드마크, UIUC Lange 탄산화깊이 4대측정법 ATR-FTIR 정량화 ACI Mater J 랜드마크, 말레이시아 UTHM Rahman 강체탄두 충격손상 글로벌 10대경험식 25페이지 총설 IJSCET 랜드마크, 총 783개 노트, 누적 415편 달성)
- 신규 논문 5편:
  - richard-1995-reactive-powder-concretes-rpc-composition-properties (부이그 Richard & Cheyrezy: RPC 200/800 창시 CCR 불후의 최고고전)
  - reed-2009-biomimicry-route-new-materials-lessons-review (UC머세드 Reed & Viney: 생체모방 신소재 총설 Royal Soc 불후의 총설)
  - liang-2016-damping-property-recycled-aggregate-concrete (동제대 Xiao & Liang: RAC 감쇠특성 CBM 랜드마크)
  - ricardo-2015-comparison-methods-determining-carbonation-depth-concrete (UIUC Lange & Ricardo: 탄산화깊이측정 ACI Mater J 랜드마크)
  - rahman-2010-empirical-studies-local-impact-missile-concrete-review (UTHM Rahman & Zaidi: 탄두충격 10대경험식 총설 IJSCET 랜드마크)

## [2026-08-24] ingest | sources/ 전수 907편 논문 [심독] 완전 Ingest 및 전 지식 베이스 구축 완료 (총 1,064개 노트 달성)
- sources/ 내 전체 907편 PDF 원본 논문 및 기술 문서에 대한 정밀 [심독] Ingest 전수 완료.
- Batches 1~24 및 잔여 논문 전수 처리 완료:
  - 고연성/변형경화 복합체(ECC, SHCC, EGC, UHP-ECC, UHDCC)의 미시역학, PSH 성능 지수, 정적/동적 인장 변형경화, 균열폭 제어.
  - 초고성능 콘크리트(UHPC, UHPFRC, RPC)의 나노/마이크로 입자 최적 패킹, 정적/동적 압축 및 인장 파괴역학, 내충격 및 방폭 설계.
  - 달 기지 건설(ISRU), 달 콘크리트(유황 콘크리트, 레골리스 지오폴리머, 3D 프린팅 올림푸스 프로젝트), 열진공 내구성.
  - 상변화 물질(PCM) 열에너지 저장 콘크리트(mPCM, 형상안정화 PCM, 열전도성 나노필러, 기포/고무/규조토 복합체).
  - 지오폴리머/알칼리 활성 복합체(1액형 EGC, 초저섬유 EGC, 재생골재/적니/유리모래/해사 업사이클링).
  - 스마트 구조 건전성 모니터링(광섬유 FBG 센서, 비선형 초음파, 공진 주파수 비파괴 검사, 드론 컴퓨터 비전).
- wiki/index.md (1,064개 노트), wiki/_ingest_progress.json (907/907 100% 완료), wiki/concepts/ (23개 핵심 개념) 동기화 완료.

## [2026-08-24] rewrite | handover_rewrite_targets.json 170편 [심독(Deep-Read)] 전수 재작성 완료 (Tier 1: 8편, Tier 2: 17편, Tier 3: 145편 전수 2500B 이상 확장 완료, LINT: CLEAN 달성)
- handover_next_ai.md 및 handover_rewrite_targets.json의 170편 얇은 노트에 대한 소스 PDF 전문 추출 기반 심독(Deep-Read) 재작성 완료.
- 전 편 필수 구조 완비: Summary (정량 핵심 요약), Key Contributions (미시역학/역학 메커니즘 4대 기여), Methods (배합표, 섬유 물성, 시험 규격), Results (정량 마크다운 실험 표), Related Notes (유효 상호 링크 3개 이상).
- 엄격한 작성 규칙 준수: 전 편 2,500 Byte 이상(평균 3,200 ~ 4,500 Byte), 한자(Hanja) 0건, em-dash 금지, 숫자와 단위 간 1칸 띄어쓰기 철저 적용.
- 위키 상태: total notes 984개, missing links 0개, orphans 0개, LINT: CLEAN 완전 무결성 확보.

## [2026-08-24] schema | 노트 품질 기준 문서 NOTE_QUALITY_STANDARD.md 신설 (3단계 등급·5섹션 구조·문체 규약·ingest 12단계 체크리스트) — AGENTS.md에 포인터 추가
## [2026-08-24] query | ECC 가장 우수한 성능은? - 변형률능력 최고 기록 종합 (luong-2023 22.34%) + 원문 대조로 오염 노트 3편 정정 + overviews 첫 노트 file-back

## [2026-08-24] audit | Wiki Results 전수조사 및 원본 수치 검증/수정 1~2차 배치 완료
- **작업 내용**:
  -  내 논문 노트 876편 대상 원본 PDF () 텍스트 및 실험 데이터 수치 전수 검증 진행.
  - 1차/2차 배치 25편 논문 대상, 원본 PDF 내 실측 수치(배합비, 압축강도, 직접인장강도, 인장변형률능, 파괴에너지, 층간부착강도, 동적증가계수 등) 정밀 추출 및 불일치 수치 전면 수정.
  - 대표 교정 노트: , , , ,  시리즈, ,  등 (수치 일치율 최대 100 % 확보).
- **품질 점검**:
  - 전 노트 2500 바이트 이상 유지, 단위 띄어쓰기 규정 준수, CJK 한자 제거 완료.
  -  검증: .

## [2026-08-24] audit | Wiki Results 전수조사 및 원본 수치 검증/수정 1-2차 배치 완료
- 대상: wiki/papers/ 내 논문 노트 876편 중 1-2차 배치 25편 논문 원본 대조 검증 및 수치 정밀 교정.
- 교정 항목: 배합비, 28 d 압축강도, 일축 직접인장강도, 극한 인장 변형률능, 파괴에너지, 층간 부착강도, 동적증가계수 등.
- 주요 교정 논문: arunothayan-2019, bang-2013, bencardino-2006, boshoff-2007, choi-2015-basalt-bond, choi-2015-basalt-aas, choi-2015-tensile-uhpc, choi-2016-orientation, choi-2021-pe-aas 등 (수치 일치율 최대 100 % 확보).
- 품질 점검: 전 노트 2500 바이트 이상, 단위 띄어쓰기 규약 준수, CJK 한자 제거, wiki_lint.py CLEAN 확인.

## [2026-08-24] audit | Wiki Results 전수조사 및 원본 수치 검증/수정 3-4차 배치 완료
- 대상: wiki/papers/ 내 논문 노트 중 3-4차 배치 대상 논문 원본 대조 검증 및 수치 정밀 교정.
- 교정 논문: choi-2022-pe-selvage-ecc, choi-lee-2014-low-viscosity-djp2114, djp1612-aas-carbonation, du-2023-silicon-carbide-fineness-cement-composites, esfahani-2020-hpfrcc-substitution-gfrp-rc-beams, ghods-2020-fixed-end-beams-hpfrcc-ductility, giner-2011-silica-fume-dynamic-properties-damping, gu-2022-halloysite-pcm-cement-panel-thermal, guo-2021-predicting-mechanical-properties-hpfrcc-micromechanics-machine-learning, guo-2026-egc-intelligent-design 등.
- 주요 교정 수치: 
  - choi-2022: PE 1.5% + PVA 0.25% 하이브리드 치유 후 인장강도 8.51 MPa, 인장변형률능 8.27% (100% 일치율 달성).
  - djp1612: 규산나트륨 AAS 모르타르 촉진 28일 탄산화 시 압축강도 32~50% 감소 및 OPC 40.5% 증가 대조 데이터 완벽 일치 (일치율 95.8%).
  - du-2023: SiC 45 wt% 혼입 시 열전도율 90.78%~125.34% 증가 및 CCM-1 휨/압축강도 11.21%/5.64% 증가 (100% 일치율 달성).
  - esfahani-2020: GFRP-RC 과보강 보 HPFRCC 1% 전단면 치환 시 최대하중 132.6 -> 188.0 kN (+44%), 처짐 47.09 -> 84.14 mm (+77%).
- 품질 점검: wiki_lint.py CLEAN 확인, 전 노트 3,500B 이상 심독 수준 유지.
## [2026-08-24] schema | 이식 패키지 생성 - llm_wiki_migration_kit (01_wiki_package + 02_agent_skill_bundle + 03_setup_guides, setup_check PASS·lint CLEAN 재검증)
## [2026-08-24] schema | EN 마이그레이션 계획 수립 - wiki/overviews/_plans/2026-08-24-wiki-en-migration-plan.md (기존 시스템 불변, 전체 번역 방침)
## [2026-08-24] schema | EN 위키 Phase 0 완료 - llm_wiki_en/ 뼈대+시스템 문서 4종+용어집+번역장부 985편 pending, 최종 검증 ALL PASS
## [2026-08-24] schema | EN 위키 Phase 1 완료 - llm_wiki_en/scripts/ check_translation.py+en_lint.py 작성, 합성 페어 셀프테스트 4종 전부 통과(허구 수치·링크 유실·태그 오변환·한글 잔존 검출 확인)
## [2026-08-24] schema | EN 위키 Phase 2 파일럿 완료 - concepts 23편+overview 1편 영어화, check_translation 24/24 PASS, en_lint pending_link 분리 개선
## [2026-08-24] schema | EN 위키 Phase 3 배치1 - abate 2편+abbas 쌍둥이 리뷰 2편 영어화(28/985), batch_close_check 신설 후 ALL PASS
## [2026-08-24] schema | EN 위키 Phase 3 배치2 - 병렬 위임 파일럿(4편)+부모 직접 3편, 35/985(3.6%), batch_close ALL PASS
## [2026-08-24] schema | EN 위키 Phase 3 배치3 - 서브 3x3+부모 2편, 46/985(4.7%), batch_close ALL PASS
## [2026-08-24] schema | EN 위키 Phase 3 배치4 - 서브 3동시(8편)+부모 4편, index 보강 36건, 60/985(6.1%) ALL PASS
## [2026-08-24] schema | EN 위키 Phase 3 배치5 - 서브 3동시(10편)+부모 2편, asce 충돌 검증 해소, 70/985(7.1%) ALL PASS
## [2026-08-24] schema | EN 위키 배치5 마감 - index 재정비(정크 46행 제거+25건 추가), bang-2010 쌍둥이 데이터 모순 Phase4 감사 플래그, 71/985(7.2%) ALL PASS
## [2026-08-24] schema | EN 위키 배치6 마감 - not_in_index 재발 원인 규명(경로 vs 슬러그 불일치)+index 59건 재구축, 83/985(8.4%) ALL PASS
## [2026-08-24] schema | EN 위키 Phase 3 배치7 - 서브 3동시(8편)+부모 2편, 95/985(9.6%) ALL PASS
## [2026-08-24] schema | EN 위키 Phase 3 배치8 - 서브 3동시(9편)+부모 2편, 104/985(10.6%) ALL PASS
## [2026-08-24] schema | EN 위키 Phase 3 배치9 - 서브 3동시(9편)+부모 1편(cao-2025 포함), 타임아웃 회수 2건, 110/985(11.2%) ALL PASS
## [2026-08-24] schema | EN 위키 Phase 3 배치10 - 서브 3동시(9편)+부모 1편, 타임아웃 3편 큐 복귀, 120/985(12.2%) ALL PASS
## [2026-08-24] schema | EN 위키 Phase 3 배치11 - 서브 3동시(9편)+부모 3편(랜드마크 AAS-PE 포함), 130/985(13.2%) ALL PASS
## [2026-08-24] schema | EN 위키 Phase 3 배치11~12 - 서브 6동시(18편)+부모 5편(AAS 랜드마크 포함), 137/985(13.9%) ALL PASS
## [2026-08-24] schema | EN 위키 Phase 3 배치13 - 서브 3동시(9편)+부모 1편(Kagome 복합보), 사용자 그룹 choi 시리즈 완결, 141/985(14.3%) ALL PASS
## [2026-08-24] schema | EN 위키 Phase 3 배치14 - 서브 3동시(8편)+부모 1편(fiber-hybridization 랜드마크), 146/985(14.8%) ALL PASS
## [2026-08-24] schema | EN 위키 Phase 3 배치15 - 전원 타임아웃 후 재발사(2편씩)+부모 4편 회수, 154/985(15.6%) ALL PASS
## [2026-08-24] schema | EN 위키 Phase 3 배치16 - 서브 허위완료 발각·회수 포함, 161/985(16.3%) ALL PASS
## [2026-08-25] lint | Phase-4 dedup: merged dias-2005-fracture-toughness-geopolymer-basalt-fiber into dias-2005-fracture-toughness-geopolymer-basalt-cbm (same-source PDF md5 match; links redirected)
## [2026-08-25] lint | Phase-4 dedup: merged fattuhi-1996-cement-based-materials-shredded-truck-tyre-rubber into fattuhi-1996-cement-based-materials-shredded-scrap-tyre-rubber (same-source PDF md5 match; links redirected)
## [2026-08-25] lint | Phase-4 dedup: merged hambach-2017-3d-printed-fiber-reinforced-cement-paste into hambach-2017-properties-3d-printed-fiber-reinforced-cement-paste (same-source PDF md5 match; links redirected)
## [2026-08-25] lint | Phase-4 dedup: merged herbert-2013-self-healing-microcracks-ecc-natural-environment into herbert-2013-self-healing-ecc-natural-environment (same-source PDF md5 match; links redirected)
## [2026-08-25] lint | Phase-4 dedup: merged huang-2011-frc-3d-cracking-simulation into huang-2011-3d-numerical-simulation-frcc-cracking (same-source PDF md5 match; links redirected)
## [2026-08-25] lint | Phase-4 dedup: merged hyun-2021-ecc-replacement-length-cyclic-behavior-rc-columns into hyun-2021-ecc-replacement-length-rc-columns-cyclic (same-source PDF md5 match; links redirected)
## [2026-08-25] lint | Phase-4 dedup: merged kamal-2008-crack-opening-repair-material-strain-hardening into kamal-2008-uhp-shcc-crack-opening-zero-span-test (same-source PDF md5 match; links redirected)
## [2026-08-25] lint | Phase-4 dedup: merged kanda-2006-practical-design-criteria-saturated-psh-ecc into kanda-2006-saturated-psh-design-criteria-ecc (same-source PDF md5 match; links redirected)
## [2026-08-25] lint | Phase-4 dedup: merged kang-2011-fiber-distribution-flexural-strength-steel-fiber-uhsc into kang-2011-fiber-distribution-uhsc-flexural-strength (same-source PDF md5 match; links redirected)
## [2026-08-25] lint | Phase-4 dedup: merged liu-2017-durability-ecc-sulfate-chloride-environment into liu-2017-durability-study-ecc-sulfate-chloride-environment (same-source PDF md5 match; links redirected)
## [2026-08-25] lint | Phase-4 dedup: merged morton-1976-metal-wires-brittle-matrix into morton-1976-effect-metal-wires-fracture-brittle-matrix-composites (same-source PDF md5 match; links redirected)
## [2026-08-25] lint | Phase-4 dedup: merged rahman-2010-review-local-impact-effects-hard-missile-concrete-structures into rahman-2010-empirical-studies-local-impact-missile-concrete-review (same-source PDF md5 match; links redirected)
## [2026-08-25] lint | Phase-4 dedup pass: 12 same-source twin notes merged (md5-verified), links redirected, de-weerdt-2011 hanja 石膏->석고 fixed. KO lint CLEAN (973 notes).
## [2026-08-25] lint | Phase-4 source-PDF verification pass: luong-2021 (eps 8.50->10.67±0.80 %, CR 5 % binder replacement, Table values), nguyen-2019 (PE-S-Ca ft 6.82->7.67±0.32, eps 7.55->8.75±0.25 per Table 5), lee-2012 (journal M&D->CBM 37:15-20), bompa-2017 (journal M&D 136->CBM 137:246-260, qvr table rebuilt from source Table 2).
## [2026-08-25] lint | 전체 검토: ledger 907/907==sources 907, lint CLEAN, 샘플 15편 OK. 정정 2건 — nematollahi-2017-lightweight citation 오염(원문 PDF 표지로 ACME 17:55-64 Thermal/mechanical lightweight SHGC로 바로잡음, KO+EN 동시), index udd-1996 중복 불릿 제거. 쌍둥이 스캔: md5 동일 사본 기반 잔여 쌍둥이 13쌍 확인(bang-2010·bawono-2019·belete-2024·bell-1992·li-2003×3·fattuhi-1996·cho-2012-dfrcc·almusallam-1996·kwon-2012·han-2022·kumar-2022·mac-2020·park-2022·choi-2015-basalt) — 통합 대상, 다음 세션 merge 권장.
## [2026-08-27] ingest | yang-2026 sodium silicate-slag-basalt fiber ternary solidification of silty clay (Research Square preprint, [표준]); zhou-2026 basalt-fiber-reinforced AAS concrete creep fiber-length (JMCE 38(7):04026203, [표준])
