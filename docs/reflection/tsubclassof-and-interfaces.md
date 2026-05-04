---
sidebar_position: 6
---

# TSubclassOf와 인터페이스

## Summary

`TSubclassOf`는 "클래스 자체"를 안전하게 참조하는 타입이고, Unreal 인터페이스는 서로 다른 클래스 계층을 공통 계약으로 묶는 방법이다. 둘 다 설계 유연성을 높일 때 자주 등장한다.

## 포함된 공식 주제

* `TSubclassOf`
* `Unreal Interfaces`

## When You Use This

스폰할 클래스 종류를 에디터에서 고르게 하거나, 여러 타입이 같은 기능 계약을 구현하게 만들고 싶을 때 읽는다.

## Core Concept

`TSubclassOf<AActor>`는 인스턴스가 아니라 클래스 타입 제한을 표현한다. 인터페이스는 `UINTERFACE`와 실제 C++ 인터페이스 본체를 함께 선언해, 상속 계층과 무관한 기능 계약을 추가한다.

## Example

```cpp
UPROPERTY(EditDefaultsOnly, Category = "Spawn")
TSubclassOf<AActor> ProjectileClass;
```

## Explanation

이 프로퍼티는 에디터에서 `AActor` 하위 클래스만 고르게 제한한다. 비슷하게 인터페이스는 문을 열 수 있는 액터, 상호작용 가능한 액터처럼 "역할 중심" 설계를 만들 때 유용하다.

## Common Mistakes

* 클래스 참조가 필요한데도 실제 객체 포인터를 저장하려 한다.
* 인터페이스를 일반 다중 상속처럼만 이해하고 `UINTERFACE` 쪽 선언을 빼먹는다.

## Related Topics

* [오브젝트 포인터](/docs/object-pointers)
* [UFunctions](/docs/reflection/ufunctions)
