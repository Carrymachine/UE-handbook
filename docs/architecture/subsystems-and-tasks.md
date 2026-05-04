---
sidebar_position: 9
---

# 서브시스템과 태스크

## Summary

서브시스템은 전역성 있는 서비스를 올바른 수명 범위에 배치하는 방법이고, 태스크 시스템은 일을 병렬화하거나 비동기로 분배하는 방법이다. 둘 다 액터에 모든 책임을 몰아넣지 않게 도와준다.

## 포함된 공식 주제

* `Programming Subsystems`
* `Tasks System`
* `Tasks System Reference`

## When You Use This

인벤토리 관리자, 세션 서비스, 월드 단위 캐시처럼 액터보다 더 긴 생명주기가 필요한 시스템을 만들 때 읽는다.

## Core Concept

서브시스템은 `UEngineSubsystem`, `UGameInstanceSubsystem`, `UWorldSubsystem`, `ULocalPlayerSubsystem`처럼 수명 범위가 정해져 있다. 태스크 시스템은 이런 서비스 내부의 무거운 계산을 워커 스레드로 넘길 때 유용하지만, UObject 접근 스레드 안전성은 별도로 지켜야 한다.

## Example

```cpp
UCLASS()
class UEPROJECT_API UInventorySubsystem : public UGameInstanceSubsystem
{
    GENERATED_BODY()
};

UE::Tasks::Launch(TEXT("BuildInventoryCache"), []()
{
    // CPU-heavy work
});
```

## Explanation

인벤토리 같은 시스템은 특정 액터에 붙이는 것보다 게임 인스턴스 범위 서비스로 두는 편이 자연스럽다. 다만 태스크 내부에서는 UObject를 안전하지 않게 만지지 않도록 경계를 분명히 해야 한다.

## Common Mistakes

* 전역성 있는 서비스를 아무 액터에나 붙여 수명 책임을 모호하게 만든다.
* 워커 스레드 태스크 안에서 UObject를 메인 스레드처럼 다룬다.

## Related Topics

* [언리얼 아키텍처 개요](/docs/architecture/overview)
* [오브젝트 처리와 가비지 컬렉션](/docs/reflection/object-handling-and-gc)
