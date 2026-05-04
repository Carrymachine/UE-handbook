---
sidebar_position: 7
---

# 클래스 지정자와 메타데이터

## Summary

Unreal은 클래스와 멤버에 부착하는 지정자와 메타데이터를 통해 에디터와 블루프린트 동작을 미세하게 조정한다. 같은 타입이라도 어떤 지정자를 붙였는지에 따라 편집 경험이 크게 달라진다.

## 포함된 공식 주제

* `Class Specifiers`
* `Metadata Specifiers`

## When You Use This

컴포넌트가 에디터 추가 목록에 안 뜨거나, 디테일 패널 표시 방식과 Blueprint 노출 정책을 조정해야 할 때 읽는다.

## Core Concept

클래스 지정자는 타입의 성격을 정하고, 메타데이터는 주로 에디터 표시 방식을 조정한다. 예를 들어 `Blueprintable`, `Abstract`, `ClassGroup`, `BlueprintSpawnableComponent`는 전혀 다른 층위의 의미를 가진다.

## Example

```cpp
UCLASS(ClassGroup=(Custom), meta=(BlueprintSpawnableComponent))
class UEPROJECT_API UHealthComponent : public UActorComponent
{
    GENERATED_BODY()
};
```

## Explanation

이 선언은 컴포넌트를 특정 그룹으로 묶고, Blueprint에서 추가 가능한 컴포넌트로 노출한다. 즉 "코드가 맞다"와 "에디터에서 다루기 좋다"는 서로 다른 문제이며, 지정자와 메타데이터가 그 간격을 메운다.

## Common Mistakes

* 런타임 의미가 없는 메타데이터를 로직 제어 수단처럼 사용한다.
* 컴포넌트 클래스에 필요한 스폰 관련 메타데이터를 빼먹고 에디터 노출 문제를 디버깅한다.

## Related Topics

* [리플렉션 시스템 개요](/docs/reflection/overview)
* [프로퍼티](/docs/reflection/properties)
