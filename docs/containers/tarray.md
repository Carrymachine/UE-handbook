---
sidebar_position: 2
---

# TArray

## Summary

`TArray`는 Unreal에서 가장 자주 쓰는 컨테이너다. 순서를 보존하고, 인덱스로 접근하며, 대부분의 게임플레이 컬렉션에 기본 선택지로 사용된다.

## 포함된 공식 주제

* `TArray: Arrays in Unreal Engine`

## When You Use This

액터 목록, 아이템 슬롯, 웨이브 데이터처럼 순서가 있는 컬렉션을 저장할 때 쓴다.

## Core Concept

`TArray`는 `Add`, `Emplace`, `Insert`, `RemoveAt`, `Num` 같은 익숙한 연산을 제공한다. 다만 요소 삭제와 재할당이 일어나면 인덱스와 포인터 안정성이 깨질 수 있으므로, "배열 안의 위치"를 외부 계약처럼 다루지 않는 편이 안전하다.

## Example

```cpp
TArray<FString> PlayerNames;
PlayerNames.Add(TEXT("Kim"));
PlayerNames.Add(TEXT("Lee"));

for (const FString& Name : PlayerNames)
{
    UE_LOG(LogTemp, Log, TEXT("%s"), *Name);
}
```

## Explanation

범위 기반 `for`는 읽기 전용 순회에 가장 깔끔하다. 요소를 많이 추가하는 초기화 단계라면 `Reserve`를 고려할 수 있고, UObject 포인터를 담는다면 `TObjectPtr`와 `UPROPERTY()` 조합을 우선 생각한다.

## Common Mistakes

* `RemoveAt` 이후에도 예전 인덱스가 그대로 유효하다고 가정한다.
* 배열 요소 주소를 오래 들고 있다가 재할당 이후에 사용한다.

## Related Topics

* [컨테이너 개요](/docs/containers/overview)
* [TMap과 TSet](/docs/containers/tmap-and-tset)
