---
sidebar_position: 8
---

# UFunctions

## Summary

`UFUNCTION`은 함수를 Blueprint, 네트워크, 콘솔, 에디터 이벤트 시스템과 연결하는 선언이다. 어떤 태그를 붙이느냐에 따라 호출 위치와 코드 생성 규칙이 크게 달라진다.

## 포함된 공식 주제

* `UFunctions`

## When You Use This

Blueprint에서 호출할 함수, 서버 RPC, 이벤트 오버라이드 지점을 선언해야 할 때 읽는다.

## Core Concept

`BlueprintCallable`, `BlueprintPure`, `Server`, `Client`, `NetMulticast`, `BlueprintImplementableEvent`, `BlueprintNativeEvent`는 서로 다른 목적을 가진다. 특히 RPC와 Native Event는 선언만이 아니라 `_Implementation` 함수 규칙까지 따라온다.

## Example

```cpp
UFUNCTION(BlueprintCallable, Category = "Combat")
void Fire();

UFUNCTION(Server, Reliable)
void ServerFire();
```

## Explanation

첫 함수는 블루프린트 호출용 공개 API고, 두 번째는 서버에서 실행될 RPC다. 둘 다 `UFUNCTION`이지만 호출 주체와 생성되는 보조 코드가 다르다. 그래서 "함수를 노출한다"는 말을 항상 더 구체적으로 생각해야 한다.

## Common Mistakes

* `BlueprintPure`에 실제 상태 변경 로직을 넣는다.
* RPC나 Native Event에 필요한 `_Implementation` 규칙을 빠뜨린다.

## Related Topics

* [동적 델리게이트와 멀티캐스트](/delegates/dynamic-and-multicast)
* [클래스 지정자와 메타데이터](/reflection/class-and-metadata-specifiers)

