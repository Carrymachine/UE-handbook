---
sidebar_position: 6
---

# Unreal 클래스 헤더 해부

## Summary

Unreal 헤더 파일은 일반 C++ 헤더보다 지켜야 할 자리가 더 많다. include 순서, `generated.h`, API 매크로, `UCLASS`, `GENERATED_BODY`, `UPROPERTY`, `UFUNCTION`이 각각 정해진 역할을 가진다.

이 문서는 Unreal 헤더 한 장을 위에서 아래로 읽는 방법을 설명한다. 접두사를 이해한 뒤 바로 이어서 읽으면 가장 효과적이다.

## When You Use This

`MyActor.generated.h`가 왜 항상 마지막 include인지, `PROJECT_API`가 왜 클래스 이름 앞에 붙는지, `GENERATED_BODY()`가 왜 꼭 필요한지 헷갈릴 때 읽는다.

## Core Concept

Unreal 헤더는 보통 아래 순서를 따른다.

1. `#pragma once`
2. `CoreMinimal.h`
3. 부모 클래스나 필요한 타입의 헤더
4. 자기 파일 이름의 `generated.h`를 마지막 include로 배치
5. `UCLASS`, `USTRUCT`, `UENUM` 같은 리플렉션 매크로
6. `PROJECT_API` 매크로와 클래스 선언
7. 클래스 내부 첫 부분의 `GENERATED_BODY()`
8. `UPROPERTY`, `UFUNCTION`, `override` 선언

일반 C++ 헤더에서는 4번부터 8번이 없다. 그래서 Unreal 헤더는 "C++ 헤더 + 엔진 메타데이터"라고 이해하는 편이 빠르다.

## Example

```cpp
// PickupSpawner.h
#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "PickupSpawner.generated.h"

UCLASS()
class UEPROJECT_API APickupSpawner : public AActor
{
    GENERATED_BODY()

public:
    APickupSpawner();

protected:
    virtual void BeginPlay() override;

    UPROPERTY(EditAnywhere, Category = "Spawn")
    float SpawnInterval = 5.0f;

    UPROPERTY(EditAnywhere, Category = "Spawn")
    TSubclassOf<AActor> PickupClass;

private:
    UFUNCTION()
    void SpawnPickup();
};
```

```cpp
// PickupSpawner.cpp
#include "PickupSpawner.h"

APickupSpawner::APickupSpawner()
{
    PrimaryActorTick.bCanEverTick = false;
}

void APickupSpawner::BeginPlay()
{
    Super::BeginPlay();
    SpawnPickup();
}
```

## Explanation

이 헤더는 Unreal 클래스 선언에서 자주 보이는 핵심 요소를 모두 담고 있다.

* `PickupSpawner.generated.h`는 반드시 include 목록의 마지막에 둔다.
* `UCLASS()`는 이 클래스를 리플렉션 시스템에 등록한다.
* `UEPROJECT_API`는 이 모듈 바깥에서도 심볼을 참조할 수 있게 하는 export 매크로다.
* `GENERATED_BODY()`는 UnrealHeaderTool이 생성한 선언을 클래스 내부에 끼워 넣는 자리다.
* `UPROPERTY`는 멤버를 에디터와 런타임 시스템에 연결한다.
* `UFUNCTION`은 함수에도 메타데이터를 붙일 수 있게 한다.

초심자 기준으로 가장 중요한 감각은 "일반 C++ 헤더에서는 필요 없는 줄들이 Unreal에서는 기능을 가진다"는 점이다. 이 줄들을 지우면 보기만 깔끔해지는 것이 아니라, 엔진 기능이 빠진다.

## Common Mistakes

* `MyClass.generated.h`를 마지막 include로 두지 않는다.
* `GENERATED_BODY()`를 빼먹고 클래스만 선언한다.
* 에디터에서 건드려야 하는 값을 plain 멤버로 선언한다.
* 컴포넌트 멤버를 선언만 하고 생성자에서 `CreateDefaultSubobject`로 만들지 않는다.

## Related Topics

* [접두사와 이름 규칙](/prefixes-and-naming)
* [프로퍼티](/reflection/properties)
* [UFunctions](/reflection/ufunctions)
* [오브젝트와 생성](/reflection/objects)
