---
sidebar_position: 3
---

# 오브젝트 처리와 가비지 컬렉션

## Summary

UObject는 생성과 동시에 끝나는 타입이 아니라, 엔진이 추적하고 정리하는 수명 시스템 안에서 움직인다. 그래서 참조 추적과 파괴 시점을 일반 C++ 객체처럼 다루면 문제를 만들기 쉽다.

## 포함된 공식 주제

* `Unreal Object Handling`
* `Incremental Garbage Collection`

## When You Use This

파괴된 액터 참조가 남거나, GC 타이밍과 UObject 수명 때문에 충돌이 나면 읽는다.

## Core Concept

GC는 리플렉션이 볼 수 있는 참조를 기준으로 살아 있는 UObject를 판단한다. UE5의 증분 가비지 컬렉션은 큰 정리 작업을 여러 프레임에 나눠 멈춤 시간을 줄인다. 핵심은 GC가 볼 수 있는 경로에 참조를 두는 것이다.

## Example

```cpp
UPROPERTY()
TObjectPtr<UObject> CachedObject;
```

## Explanation

같은 포인터여도 `UPROPERTY()`가 붙어 있으면 GC가 참조를 인식할 수 있다. 반대로 raw pointer만 남기면 객체는 이미 정리됐는데 코드상 포인터는 남아 있는 위험한 상태가 생길 수 있다.

## Common Mistakes

* UObject의 소멸 시점을 C++ 소멸자 감각으로만 추측한다.
* 가비지 컬렉션이 알아야 하는 참조를 반사 시스템 밖에 둔다.

## Related Topics

* [오브젝트와 생성](/reflection/objects)
* [프로퍼티](/reflection/properties)
* [스마트 포인터](/reflection/smart-pointers)

