# UE5 C++ 핸드북

한국어로 정리한 Unreal Engine 5 C++ 핸드북 사이트다.  
Docusaurus 기반으로 작성되어 있으며, Epic의 `Programming with C++` 문서군을 학습용 흐름에 맞게 재구성하는 것을 목표로 한다.

## 요구 사항

* Node.js 20 이상
* pnpm

## 설치

```bash
pnpm install
```

## 로컬 개발

```bash
pnpm start
```

로컬 개발 서버를 실행하고, 문서 변경 시 대부분의 수정 사항을 즉시 반영한다.

## 빌드

```bash
pnpm build
```

정적 사이트를 `build` 디렉터리에 생성한다.

## 빌드 결과 미리 보기

```bash
pnpm serve
```

빌드된 결과물을 로컬에서 확인할 때 사용한다.

## 타입 검사

```bash
pnpm typecheck
```

## 배포

SSH 사용:

```bash
USE_SSH=true pnpm deploy
```

SSH 미사용:

```bash
GIT_USER=<GitHub username> pnpm deploy
```

## 주요 스크립트

```bash
pnpm start
pnpm build
pnpm serve
pnpm typecheck
pnpm deploy
pnpm clear
```
