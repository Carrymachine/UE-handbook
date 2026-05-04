---
sidebar_position: 2
---

# 오브젝트와 생성

## Summary

`UObject`는 언리얼 오브젝트 모델의 기본 단위다. 일반 C++ 객체 생성 습관과 달리 `NewObject`, `CreateDefaultSubobject`, Outer 관계, 리플렉션 등록을 함께 생각해야 한다.

## 포함된 공식 주제

* `Objects`
* `UObject Instance Creation`

## When You Use This

새 UObject 기반 타입을 만들거나, 액터 생성자에서 컴포넌트를 만들거나, 데이터 중심 보조 객체를 구성할 때 읽는다.

## Core Concept

`UObject`는 가비지 컬렉션과 메타데이터 시스템에 연결되는 객체다. 일반적인 런타임 인스턴스는 `NewObject`, 기본 서브오브젝트는 생성자 안에서 `CreateDefaultSubobject`, 월드에 배치되는 액터는 `SpawnActor`가 기본 경로다.

## Example

```cpp
UInventoryEntry* Entry = NewObject<UInventoryEntry>(this);
```

## Explanation

`this`는 Outer 역할을 하며, 소유 관계와 수명 추적에 영향을 준다. Unreal에서 객체 생성은 단순 메모리 할당이 아니라 "어떤 컨텍스트 아래에 객체를 두는가"까지 포함한 작업이다.

## Common Mistakes

* UObject를 `new`로 만들어 GC와 리플렉션 흐름에서 분리한다.
* 생성자 밖에서도 기본 서브오브젝트처럼 취급해야 할 객체를 `CreateDefaultSubobject` 없이 다룬다.

## Related Topics

* [오브젝트 처리와 가비지 컬렉션](/docs/reflection/object-handling-and-gc)
* [오브젝트 포인터](/docs/object-pointers)
