---
sidebar_position: 6
---

# 오브젝트 포인터

## Summary

UE5의 포인터 선택은 단순한 문법 문제가 아니라 가비지 컬렉션, 자산 로딩, 약한 참조, 클래스 참조까지 연결되는 설계 문제다. 어떤 포인터를 쓰느냐에 따라 수명 관리 방식이 달라진다.

## 포함된 공식 주제

* `Object Pointers`

## When You Use This

UObject를 멤버로 저장하거나, 나중에 로드할 자산을 참조하거나, 소유하지 않는 액터를 안전하게 가리켜야 할 때 읽는다.

## Core Concept

UE5 기본 멤버 참조는 보통 `TObjectPtr`와 `UPROPERTY()` 조합으로 생각한다. 소유하지 않는 UObject를 잠시 가리킬 때는 `TWeakObjectPtr`, 나중에 자산을 로드할 때는 `TSoftObjectPtr`, 클래스를 고르게 할 때는 `TSubclassOf`가 자연스럽다.

핵심은 "이 포인터가 객체 수명을 늘리는가", "GC가 이 참조를 보는가", "자산을 즉시 로드하는가"를 구분하는 것이다.

## Example

```cpp
UPROPERTY(EditAnywhere, Category = "Visual")
TObjectPtr<UStaticMeshComponent> MeshComponent;

UPROPERTY(EditAnywhere, Category = "Assets")
TSoftObjectPtr<UTexture2D> PortraitTexture;
```

## Explanation

첫 번째는 런타임 객체 참조이고, 두 번째는 자산 경로 중심의 지연 참조다. 둘 다 "포인터"처럼 보이지만 메모리, 로딩, 에디터 경험이 다르므로 같은 기준으로 다루면 안 된다.

## Common Mistakes

* UObject 멤버를 raw pointer로만 들고 있으면서 GC가 안전하게 처리해 줄 것이라고 생각한다.
* 자산을 늦게 로드해야 하는데도 하드 참조를 사용해 로딩 비용을 키운다.

## Related Topics

* [자산 로딩과 자산 참조](/docs/architecture/asset-loading-and-references)
* [TSubclassOf와 인터페이스](/docs/reflection/tsubclassof-and-interfaces)
* [스마트 포인터](/docs/reflection/smart-pointers)
