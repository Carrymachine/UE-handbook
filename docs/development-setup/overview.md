---
sidebar_position: 1
---

# 개발 환경 개요

## Summary

Unreal C++ 생산성은 에디터보다 툴체인 구성이 더 크게 좌우하는 경우가 많다. IDE 선택, 타깃 이해, Live Coding 사용 범위를 먼저 정리하면 이후 문서가 훨씬 잘 읽힌다.

## 포함된 공식 주제

* `Development Setup`

## When You Use This

새 C++ 프로젝트를 만들기 전이나, 이미 프로젝트는 열리지만 빌드와 코드 반영 흐름이 불안정할 때 읽는다.

## Core Concept

개발 환경 섹션의 핵심은 세 가지다. 첫째, Unreal이 요구하는 IDE와 컴파일러 버전을 맞춘다. 둘째, `Editor`, `Game`, `Client`, `Server` 타깃의 차이를 이해한다. 셋째, `Live Coding`과 전체 재빌드를 언제 구분해서 써야 하는지 판단한다.

## Example

```text
ProjectNameEditor
ProjectName
ProjectNameClient
ProjectNameServer
```

## Explanation

같은 프로젝트라도 어떤 타깃으로 빌드하느냐에 따라 로드되는 모듈과 실행 방식이 달라진다. 에디터에서 게임 코드를 수정하는 일상적인 작업은 보통 `ProjectNameEditor` 타깃을 기준으로 생각하면 된다.

## Common Mistakes

* 에디터 작업을 하면서 `Game` 타깃을 빌드해 결과가 안 보인다고 느낀다.
* IDE만 설치하면 Unreal 쪽 도구 구성이 끝난다고 생각한다.

## Related Topics

* [IDE 설정과 선택](/docs/development-setup/editors)
* [코드 생성과 컴파일 흐름](/docs/development-setup/code-workflow)
* [Live Coding](/docs/development-setup/live-coding)
