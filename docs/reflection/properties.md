---
sidebar_position: 4
---

# 프로퍼티

## Summary

`UPROPERTY`는 멤버 변수를 에디터, 직렬화, GC, Blueprint, 네트워크 시스템에 연결하는 선언이다. Unreal C++에서 멤버 선언은 타입만큼 지정자가 중요하다.

## 포함된 공식 주제

* `Properties`

## When You Use This

변수를 디테일 패널에 노출하거나, Blueprint 읽기/쓰기, 저장, 복제, GC 추적과 연결해야 할 때 읽는다.

## Core Concept

`EditAnywhere`, `VisibleAnywhere`, `BlueprintReadOnly`, `Transient`, `Replicated`, `Config` 같은 지정자는 변수의 역할을 선언한다. UE5에서는 UObject 멤버를 `TObjectPtr`로 선언하는 패턴도 함께 쓰는 것이 일반적이다.

## Example

```cpp
UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Movement")
TObjectPtr<UCurveFloat> SpeedCurve;
```

## Explanation

이 선언은 에디터에서 값을 넣고, Blueprint에서 읽을 수 있으며, GC가 참조를 추적하는 프로퍼티를 뜻한다. `UPROPERTY`는 단순 노출 옵션이 아니라 언리얼 런타임 규칙을 한데 묶는 메타데이터다.

## Common Mistakes

* UObject 참조 멤버를 `UPROPERTY` 없이 선언한다.
* 런타임에만 쓰는 임시 상태까지 무조건 `EditAnywhere`로 열어 둔다.

## Related Topics

* [리플렉션 시스템 개요](/docs/reflection/overview)
* [클래스 지정자와 메타데이터](/docs/reflection/class-and-metadata-specifiers)
