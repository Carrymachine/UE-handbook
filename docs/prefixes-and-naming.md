---
sidebar_position: 5
---

# 접두사와 이름 규칙

## Summary

Unreal 코드에서 이름 앞 글자는 거의 항상 의미를 가진다. `AActor`, `UObject`, `FString`, `TArray`, `bIsDead`는 단순 스타일이 아니라 "이 타입이 어떤 계열인지"를 즉시 알려 주는 표식이다.

이 문서는 Unreal C++ 입문자가 가장 먼저 익혀야 하는 접두사 체계를 설명한다. 문서를 읽다가 `A`, `U`, `F`, `T`, `b`가 반복해서 보이는 이유를 여기서 정리한다.

## When You Use This

엔진 코드를 읽을 때 타입 이름만 보고도 "월드에 놓이는 객체인지", "그냥 값 타입인지", "템플릿인지", "불리언인지"를 빠르게 구분하고 싶을 때 읽는다.

## Core Concept

Unreal의 접두사는 문법 기능이 아니라 코딩 규칙이다. 하지만 이 규칙이 너무 널리 쓰이기 때문에, 실제로는 Unreal 코드를 읽는 기본 문법처럼 동작한다.

가장 많이 보는 접두사는 아래와 같다.

| 접두사 | 주로 붙는 대상 | 예시 | 뜻 |
| --- | --- | --- | --- |
| `A` | `AActor` 파생 클래스 | `ACharacter`, `APlayerController` | 월드에 배치되거나 스폰되는 액터 계열 |
| `U` | `UObject` 파생 클래스 | `UActorComponent`, `UTexture2D` | 엔진 리플렉션 시스템에 속한 UObject 계열 |
| `F` | 대부분의 구조체, 값 타입, 비-UObject 헬퍼 타입 | `FVector`, `FHitResult`, `FString` | 값처럼 다루는 엔진 타입 |
| `T` | 템플릿 타입 | `TArray`, `TMap`, `TSubclassOf` | 제네릭 컨테이너나 템플릿 래퍼 |
| `I` | 인터페이스 본체 | `IAbilitySourceInterface` | 구현 클래스가 따라야 하는 C++ 인터페이스 |
| `E` | enum 타입 | `ECollisionChannel`, `EWeaponState` | 열거형 타입 |
| `S` | Slate UI 위젯 타입 | `SButton`, `SVerticalBox` | Slate UI 계열 |
| `b` | bool 변수 | `bIsDead`, `bCanJump` | 불리언 멤버 또는 지역 변수 |

여기서 중요한 점은 "접두사가 변수명이 아니라 타입 계열을 설명한다"는 것이다. 예를 들어 `FPlayerStats PlayerStats;`에서 `F`는 타입 `FPlayerStats`에 붙고, 인스턴스 이름은 그냥 `PlayerStats`가 된다.

## Step By Step

Unreal 코드를 처음 읽을 때는 아래 순서로 해석하면 편하다.

1. 타입 이름 첫 글자를 본다.
2. 이 타입이 월드 액터인지, UObject인지, 값 타입인지 구분한다.
3. bool이면 `b` 접두사가 붙는지 본다.
4. enum이면 `E`, 컨테이너면 `T`가 붙는지 본다.
5. 접두사만 보고도 생성 방식과 수명 관리가 달라질 수 있음을 기억한다.

예를 들어 `AWeapon`, `UAnimInstance`, `FTransform`, `TArray<FName>`는 이름만 봐도 성격이 전부 다르다.

## Example

```cpp
UENUM(BlueprintType)
enum class EWeaponState : uint8
{
    Idle,
    Firing,
    Reloading,
};

USTRUCT(BlueprintType)
struct FWeaponConfig
{
    GENERATED_BODY()

    UPROPERTY(EditAnywhere, Category = "Weapon")
    bool bUseSpread = true;
};

UCLASS()
class UEPROJECT_API AWeaponPickup : public AActor
{
    GENERATED_BODY()

public:
    UPROPERTY(EditAnywhere, Category = "Weapon")
    TArray<FName> SocketNames;
};
```

## Explanation

이 예시에는 Unreal에서 자주 만나는 접두사가 거의 한 번에 들어 있다.

* `EWeaponState`는 enum 타입이므로 `E`가 붙는다.
* `FWeaponConfig`는 값 타입 구조체이므로 `F`가 붙는다.
* `bUseSpread`는 bool 멤버이므로 `b`가 붙는다.
* `AWeaponPickup`은 `AActor` 파생 클래스이므로 `A`가 붙는다.
* `TArray<FName>`은 템플릿 컨테이너 `TArray` 안에 값 타입 `FName`을 담는 형태다.

이 규칙은 일반 C++의 네이밍 감각과 다르다. 일반 C++에서는 타입 이름에 굳이 `A`, `U`, `F` 같은 계열 표식을 붙이지 않는 경우가 많지만, Unreal에서는 이 표식이 타입의 사용처를 매우 빠르게 알려 준다.

추가로 기억할 만한 규칙도 있다.

* bool을 반환하는 함수는 보통 `IsVisible`, `HasAuthority`, `CanFire`처럼 질문형 이름을 쓴다.
* 함수가 참조 인자를 출력 용도로 채우면 `OutHitResult`, `OutLocation`처럼 `Out` 접두사를 붙이기도 한다.
* bool 출력 인자는 `bOutSuccess`처럼 `b`와 `Out`을 함께 쓸 수 있다.

## Common Mistakes

* `class PlayerCharacter : public ACharacter`처럼 액터 클래스에 `A` 접두사를 빼먹는다.
* `bool Dead;`처럼 bool 변수에 `b`를 붙이지 않는다.
* `TArray` 인스턴스 이름에도 `T`를 붙여 `TPlayerNames`처럼 짓는다.
* `F`, `U`, `A` 접두사를 "헝가리안 표기법" 정도로만 보고 수명 관리 차이까지 놓친다.

## Related Topics

* [Unreal C++ 입문 가이드](/coding-standard)
* [Unreal 클래스 헤더 해부](/class-header-anatomy)
* [Unreal 타입 선택 기준](/engine-types)
* [오브젝트와 생성](/reflection/objects)
