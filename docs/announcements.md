# 공지

## Summary

이 문서는 저장소 운영 공지와 문서 작성 기준의 변경 사항을 모아두는 페이지다. 자주 바뀌는 규칙은 README보다 사이드바 상단 공지 문서에 두는 편이 추적하기 쉽다.

## 현재 공지

### 2026-05-04

* GitHub Pages 진입 경로를 문서 루트로 변경했다.
* Docusaurus 기본 메인 페이지를 제거하고, 루트 `/`에서 바로 핸드북 문서 레이아웃이 보이도록 정리했다.
* 사이드바 상단에 `Contributor List`, `공지`, `진행 상황`, `핸드북 의도`, `Unreal Engine 역사`를 배치했다.
* 현재 문서 기준 버전은 `UE 5.6`이며, 설명에서는 `UE 5.4+` 범위를 기본 참고 범위로 둔다.

## 운영 원칙

* 공식 문서를 대량 번역하지 않는다.
* 한국어 설명과 영어 API 이름을 분리해서 유지한다.
* 구조 개편이 생기면 이 페이지에 먼저 기록한다.

## 자동 변경 이력

이 섹션은 GitHub Actions가 `main` 브랜치 변경을 감지해 자동으로 갱신한다.

버전 규칙:

* 기본 증가는 `patch`다.
* 커밋 메시지에 `[minor]`가 포함되면 `minor`를 올린다.
* 커밋 메시지에 `[major]`가 포함되면 `major`를 올린다.

{/* AUTO-ANNOUNCEMENTS:START */}
### v0.1.2 · 2026-05-04

* 커밋 범위: `7c5bd7f` -> `1cafe40`
* 커밋 메시지: `fix: logo, favicon`
* 사이트/자동화 수정: `사이트 설정`, `정적 자산: favicon.png`, `정적 자산: logo.png`

### v0.1.1 · 2026-05-04

* 커밋 범위: `5e4bd65` -> `a86ff7c`
* 커밋 메시지: `ci: add workflow`
* 사이트/자동화 수정: `GitHub Actions: deploy.yml`, `사이트 설정`, `favicon.png`, `logo.png`, `자동화 스크립트: update-announcements.mjs`, `정적 자산: favicon.png`, `정적 자산: logo.png`

{/* AUTO-ANNOUNCEMENTS:END */}

## Related Topics

* [Contributor List](/contributors)
* [진행 상황](/progress)
