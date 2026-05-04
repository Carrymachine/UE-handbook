---
sidebar_position: 1
---

# 컨테이너 개요

## Summary

Unreal 컨테이너는 단순한 자료구조가 아니라 리플렉션, 직렬화, 에디터, 디버그 편의성과 함께 쓰이도록 설계돼 있다. 그래서 UE 코드에서는 STL보다 `TArray`, `TMap`, `TSet`이 먼저 보인다.

## 포함된 공식 주제

* `Containers in Unreal Engine`

## When You Use This

게임플레이 데이터를 배열, 맵, 집합 형태로 저장해야 할 때 어떤 타입부터 고를지 정해야 한다면 읽는다.

## Core Concept

`TArray`는 순서 있는 동적 배열, `TMap`은 키-값 쌍, `TSet`은 중복 없는 집합이다. 중요한 차이는 Unreal 컨테이너가 `UPROPERTY()`와 함께 더 자연스럽게 동작하고, 엔진 유틸리티와 함께 쓰기 좋다는 점이다.

## Example

```cpp
UPROPERTY()
TArray<int32> SpawnScores;
```

## Explanation

컨테이너 자체보다 더 중요한 것은 "엔진이 이 데이터를 볼 수 있느냐"다. 위 예시처럼 `UPROPERTY()`를 붙이면 GC 추적, 에디터 노출, 직렬화 흐름에 자연스럽게 연결된다.

## Common Mistakes

* 언리얼 프로젝트에서도 습관적으로 STL 컨테이너만 사용한다.
* UObject 포인터를 담아 놓고 `UPROPERTY()` 없이 안전할 것이라고 생각한다.

## Related Topics

* [TArray](/containers/tarray)
* [TMap과 TSet](/containers/tmap-and-tset)
* [프로퍼티](/reflection/properties)

