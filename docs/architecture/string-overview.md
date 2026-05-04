---
sidebar_position: 7
---

# 문자열 시스템 개요

## Summary

Unreal은 문자열을 하나의 타입으로 통일하지 않는다. 식별용 이름, 사용자 표시용 텍스트, 일반 조작용 문자열이 각각 다른 타입으로 나뉘며, 인코딩 경계도 따로 생각해야 한다.

## 포함된 공식 주제

* `String Handling`
* `Character Encoding`

## When You Use This

UI 텍스트, 데이터 키, 로그 문자열을 모두 같은 방식으로 처리하면 안 된다는 감이 올 때 읽는다.

## Core Concept

`FString`은 가공과 조작, `FName`은 빠른 식별, `FText`는 사용자 표시와 로컬라이제이션에 맞춰 설계됐다. 외부 파일이나 네트워크와 연결될 때는 엔진 내부 표현과 외부 인코딩이 다를 수 있다는 점도 항상 염두에 둬야 한다.

## Example

```cpp
const TCHAR* Label = TEXT("Boss");
```

## Explanation

`TEXT()` 매크로는 플랫폼별 `TCHAR` 표현과 맞추기 위한 기본 습관이다. 현대 UE 프로젝트에서는 단순해 보일 수 있지만, 문자열 시스템을 엔진 전체 규칙과 일치시키는 출발점이 된다.

## Common Mistakes

* 사용자에게 보여 줄 문자열까지 `FName`으로 처리한다.
* 외부 UTF-8 데이터와 엔진 문자열 변환 비용을 전혀 고려하지 않는다.

## Related Topics

* [FString, FName, FText](/architecture/fstring-fname-ftext)
* [컨테이너 개요](/containers/overview)

