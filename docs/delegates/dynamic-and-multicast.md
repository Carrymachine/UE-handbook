---
sidebar_position: 2
---

# 동적 델리게이트와 멀티캐스트

## Summary

동적 델리게이트는 리플렉션과 Blueprint 연동이 필요할 때 쓰고, 멀티캐스트 델리게이트는 여러 리스너에게 같은 이벤트를 뿌릴 때 쓴다. 둘을 섞어 쓰는 경우도 많지만 목적은 분명히 다르다.

## 포함된 공식 주제

* `Dynamic Delegates`
* `Multi-cast Delegates`

## When You Use This

디자이너가 Blueprint에서 이벤트를 연결해야 하거나, 한 신호를 여러 시스템이 동시에 받아야 할 때 읽는다.

## Core Concept

동적 델리게이트는 직렬화와 반사 정보가 붙기 때문에 Blueprint와의 접점이 좋지만 비용이 더 크다. 멀티캐스트는 한 번 `Broadcast()` 했을 때 여러 함수가 호출되며, UI 갱신, 상태 알림, 시스템 간 이벤트 분배에 자주 쓴다.

## Example

```cpp
DECLARE_DYNAMIC_MULTICAST_DELEGATE_OneParam(FOnAmmoChanged, int32, NewAmmo);

UPROPERTY(BlueprintAssignable, Category = "Combat")
FOnAmmoChanged OnAmmoChanged;
```

## Explanation

`BlueprintAssignable`을 붙이면 Blueprint 그래프에서 이벤트를 바인딩할 수 있다. 반대로 순수 C++ 내부 콜백만 필요하다면 일반 델리게이트나 비동적 멀티캐스트가 더 단순하고 빠르다.

## Common Mistakes

* 동적 델리게이트에 연결할 함수를 `UFUNCTION()`으로 선언하지 않는다.
* 멀티캐스트를 이벤트 버스처럼 남용해 추적하기 어려운 의존성을 만든다.

## Related Topics

* [델리게이트 개요](/delegates/overview)
* [UFunctions](/reflection/ufunctions)

