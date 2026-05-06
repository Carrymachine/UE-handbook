---
sidebar_position: 4
---

# 일반 C++와 Unreal C++의 차이

## Summary

Unreal C++는 표준 C++ 위에 엔진 규칙이 덧붙은 형태다. 문법 자체는 익숙해도, 객체 수명, 타입 이름, 에디터 노출, 빌드 파이프라인이 일반 C++ 프로젝트와 다르게 움직인다.

이 문서는 "같은 C++인데 왜 선언이 이렇게 길어지는가"를 설명한다. Unreal 코드를 처음 읽는 사람이 가장 먼저 잡아야 할 차이만 골라 정리한다.

## When You Use This

`class AMyActor : public AActor` 같은 선언을 봤을 때, 상속 자체보다 `A`, `UCLASS`, `GENERATED_BODY`, `TObjectPtr`가 무엇을 추가하는지 감이 안 올 때 읽는다.

## Core Concept

표준 C++와 Unreal C++의 가장 큰 차이는 "엔진이 코드를 읽는다"는 점이다.

| 관점 | 일반 C++ | Unreal C++ |
| --- | --- | --- |
| 클래스 선언 | 컴파일러가 이해하면 된다 | 컴파일러와 UnrealHeaderTool이 함께 이해해야 한다 |
| 객체 수명 | RAII, smart pointer, 수동 관리 중심 | GC, UObject 규칙, 엔진 생성 함수까지 고려한다 |
| 타입 선택 | 표준 라이브러리 중심 | `FString`, `TArray`, `TObjectPtr` 같은 엔진 타입을 우선 고려한다 |
| 에디터 연동 | 별도 도구가 없으면 연결되지 않는다 | `UPROPERTY`, `UFUNCTION`으로 에디터와 블루프린트에 연결한다 |
| 빌드 구조 | CMake, Visual Studio 프로젝트 등 | 모듈, `.Build.cs`, generated code, reflection 파이프라인이 함께 움직인다 |

즉, Unreal C++는 문법을 "더 많이 외우는" 문제가 아니라, 엔진 시스템과 연결되는 선언 방식을 배우는 문제다.

## Example

```cpp
// DamageVolume.h
#pragma once

#include "CoreMinimal.h"
#include "Components/BoxComponent.h"
#include "GameFramework/Actor.h"
#include "DamageVolume.generated.h"

UCLASS()
class UEPROJECT_API ADamageVolume : public AActor
{
    GENERATED_BODY()

public:
    ADamageVolume();

protected:
    UPROPERTY(VisibleAnywhere, Category = "Collision")
    TObjectPtr<UBoxComponent> BoxComponent;
};
```

```cpp
// DamageVolume.cpp
#include "DamageVolume.h"

ADamageVolume::ADamageVolume()
{
    BoxComponent = CreateDefaultSubobject<UBoxComponent>(TEXT("BoxComponent"));
    RootComponent = BoxComponent;
}
```

## Explanation

이 코드는 문법만 보면 C++ 클래스 상속과 멤버 초기화다. 하지만 Unreal 쪽 요소가 추가되어 있다.

* `UCLASS()`와 `GENERATED_BODY()`는 이 타입을 리플렉션 시스템에 등록한다.
* `AActor`를 상속했기 때문에 클래스 이름이 `A`로 시작한다.
* 컴포넌트는 `new` 대신 `CreateDefaultSubobject`로 생성한다.
* 멤버 포인터는 UE5 기준으로 `TObjectPtr`를 우선 고려한다.
* `UPROPERTY`를 붙여야 에디터와 GC가 이 참조를 안정적으로 다룰 수 있다.

같은 "클래스 하나 만든다"는 행위라도 Unreal에서는 선언과 생성 시점에 엔진 규칙이 더 많이 붙는다. 그래서 일반 C++ 감각만으로 보면 문장이 길어 보이지만, 실제로는 엔진과의 계약 정보를 한 줄씩 명시하는 셈이다.

## Common Mistakes

* `AActor` 기반 클래스도 일반 C++ 객체처럼 `new`/`delete` 감각으로 다루려 한다.
* `generated.h`를 일반 include 중 하나로 생각한다.
* 에디터에서 보여야 하는 값을 그냥 멤버 변수로만 선언한다.

## Related Topics

* [접두사와 이름 규칙](/prefixes-and-naming)
* [Unreal 클래스 헤더 해부](/class-header-anatomy)
* [오브젝트와 생성](/reflection/objects)
* [프로퍼티](/reflection/properties)
