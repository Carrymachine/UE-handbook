---
sidebar_position: 3
---

# Unreal C++ 입문 가이드

## Summary

Unreal C++는 문법 자체는 C++이지만, 실제로는 엔진 규칙을 함께 배워야 읽을 수 있는 언어에 가깝다. 접두사, 매크로, 엔진 타입, 리플렉션, 가비지 컬렉션이 모두 코드 작성 방식에 영향을 준다.

이 문서는 `언리얼식 C++` 카테고리를 어떤 순서로 읽어야 하는지 안내하는 시작점이다. 목표는 규칙 암기가 아니라 "왜 Unreal 코드가 일반 C++와 다르게 보이는가"를 이해하는 것이다.

## When You Use This

기존 C++ 경험은 있지만 Unreal C++ 파일을 처음 열었을 때, `UCLASS`, `GENERATED_BODY`, `AActor`, `TArray`, `bCanJump` 같은 표기가 한꺼번에 나와 코드가 낯설게 느껴질 때 읽는다.

## Core Concept

Unreal C++ 입문자는 보통 문법보다 "코드 모양"에서 먼저 막힌다. 같은 로직이라도 Unreal에서는 다음 질문을 먼저 던진다.

1. 이 타입은 월드에 놓이는 액터인가, 그냥 데이터인가, UObject인가?
2. 이 멤버는 에디터, 블루프린트, 직렬화, GC가 알아야 하는 값인가?
3. 이 값은 `std::vector`보다 `TArray`가 자연스러운가?
4. 이 클래스 선언은 UnrealHeaderTool이 읽을 수 있는 형태인가?

즉, Unreal C++는 "엔진과 계약하는 C++"라고 보는 편이 이해가 빠르다. 일반 C++에서는 컴파일러만 이해하면 되는 선언도, Unreal에서는 에디터와 런타임 시스템까지 함께 이해해야 한다.

## Step By Step

이 카테고리는 다음 순서로 읽는 것을 추천한다.

1. [일반 C++와 Unreal C++의 차이](/unreal-cpp-vs-standard-cpp)
2. [접두사와 이름 규칙](/prefixes-and-naming)
3. [Unreal 클래스 헤더 해부](/class-header-anatomy)
4. [Unreal 타입 선택 기준](/engine-types)
5. [오브젝트 포인터](/object-pointers)
6. [컨테이너](/containers/overview)
7. [델리게이트](/delegates/overview)

앞쪽 문서는 "읽는 법"이고, 뒤쪽 문서는 "쓰는 법"에 가깝다. 처음부터 `TMap`, `TSoftObjectPtr`, 멀티캐스트 델리게이트를 외우기보다, 먼저 코드가 어떤 규칙으로 생겼는지를 이해해야 이후 문서가 쉬워진다.

## Example

```cpp
// Standard C++
class DamageSystem
{
public:
    bool CanAttack = true;
};

// Unreal C++
UCLASS()
class UEPROJECT_API UDamageSystem : public UObject
{
    GENERATED_BODY()

public:
    UPROPERTY(EditAnywhere, Category = "Combat")
    bool bCanAttack = true;
};
```

## Explanation

왼쪽 코드는 일반 C++ 클래스다. 오른쪽 코드는 Unreal 엔진 시스템과 연결된 UObject 클래스다.

차이는 문법 장식이 아니라 기능 차이다.

* `UCLASS()`는 이 타입을 리플렉션 시스템에 등록한다.
* `UEPROJECT_API`는 모듈 경계를 넘는 심볼 노출에 쓰인다.
* `GENERATED_BODY()`는 UnrealHeaderTool이 만든 코드를 클래스 내부에 연결한다.
* `UPROPERTY()`는 이 멤버를 에디터, 직렬화, GC 같은 엔진 시스템에 연결한다.
* `bCanAttack`의 `b`는 bool 멤버라는 뜻이다.

Unreal 코드를 읽을 때는 "왜 이런 표기가 붙었는가"를 먼저 해석해야 한다. 이 감각이 잡히면 문법 난이도보다 구조 이해가 훨씬 빨라진다.

## Common Mistakes

* Unreal C++를 그냥 "Epic 스타일로 꾸민 일반 C++"라고 생각한다.
* 리플렉션 매크로와 접두사를 단순 취향 문제로 보고 무시한다.
* 같은 API 안에서 `std::vector`와 `TArray`, raw pointer와 `TObjectPtr`를 아무 기준 없이 섞는다.

## Related Topics

* [일반 C++와 Unreal C++의 차이](/unreal-cpp-vs-standard-cpp)
* [접두사와 이름 규칙](/prefixes-and-naming)
* [Unreal 클래스 헤더 해부](/class-header-anatomy)
* [Unreal 타입 선택 기준](/engine-types)
