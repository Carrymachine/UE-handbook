---
sidebar_position: 1
---

# 델리게이트 개요

## Summary

델리게이트는 함수 포인터를 좀 더 안전하고 유연하게 쓰기 위한 Unreal의 호출 모델이다. 이벤트 연결, 콜백, 비동기 완료 통지처럼 "나중에 누군가를 호출할 일"이 있을 때 핵심이 된다.

## 포함된 공식 주제

* `Delegates`

## When You Use This

한 시스템이 다른 시스템의 구체 타입을 몰라도 특정 시점에 함수를 실행해야 할 때 읽는다.

## Core Concept

Unreal 델리게이트는 단일 호출, 멀티캐스트, 동적 델리게이트처럼 용도별 종류가 나뉜다. 어떤 델리게이트를 선택하느냐는 호출 대상 수, Blueprint 노출 필요 여부, 직렬화 여부에 따라 달라진다.

## Example

```cpp
DECLARE_DELEGATE_OneParam(FOnHealthChanged, float);

FOnHealthChanged OnHealthChanged;
```

## Explanation

이 선언은 `float` 하나를 받는 단일 델리게이트 타입을 만든다. 이후 `BindRaw`, `BindUObject`, `BindLambda` 같은 방식으로 함수를 연결할 수 있다.

## Common Mistakes

* 델리게이트 타입은 맞는데 바인딩 대상 수명 관리를 놓친다.
* Blueprint 노출이 필요하지 않은데도 동적 델리게이트만 사용한다.

## Related Topics

* [동적 델리게이트와 멀티캐스트](/docs/delegates/dynamic-and-multicast)
* [오브젝트 포인터](/docs/object-pointers)
