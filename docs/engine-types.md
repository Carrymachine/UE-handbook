---
sidebar_position: 7
---

# Unreal 타입 선택 기준

## Summary

Unreal 프로젝트에서는 "C++에서 되느냐"보다 "엔진 흐름에 자연스럽게 맞느냐"가 더 중요할 때가 많다. 그래서 정수형, 문자열, 컨테이너, 포인터를 고를 때도 표준 라이브러리 대신 Unreal 타입을 먼저 검토한다.

이 문서는 초심자가 가장 자주 묻는 "왜 `int` 대신 `int32`를 쓰고, 왜 `std::string` 대신 `FString`을 쓰는가"를 정리한다.

## When You Use This

새 멤버 변수를 선언하거나 함수 시그니처를 만들 때, 일반 C++ 습관대로 `int`, `std::string`, `std::vector`, raw pointer를 써도 되는지 고민될 때 읽는다.

## Core Concept

Unreal에서 자주 쓰는 타입은 보통 아래 기준으로 선택한다.

| 목적 | Unreal에서 먼저 보는 타입 | 이유 |
| --- | --- | --- |
| 정수 크기 명시 | `int32`, `uint8`, `int64` | 플랫폼 차이, 직렬화, 네트워크 복제에서 폭이 명확하다 |
| 일반 문자열 가공 | `FString` | 엔진 API와 자연스럽게 연결된다 |
| 식별자, 키, 태그 | `FName` | 비교와 식별에 유리하다 |
| 화면 표시 텍스트 | `FText` | 로컬라이제이션을 고려한다 |
| 동적 배열 | `TArray` | 엔진 API, 리플렉션, 에디터와 잘 맞는다 |
| 맵/집합 | `TMap`, `TSet` | Unreal 컨테이너 계열로 일관성이 좋다 |
| UObject 참조 | `TObjectPtr`, `TWeakObjectPtr`, `TSoftObjectPtr` | GC, 자산 로딩, 수명 관리 규칙을 반영한다 |

핵심은 "엔진이 이 값을 어떻게 다뤄야 하는가"다. 특히 에디터 노출, 블루프린트, 직렬화, 로딩, GC와 연결되는 값이라면 Unreal 타입을 쓰는 편이 자연스럽다.

## Example

```cpp
USTRUCT(BlueprintType)
struct FWeaponSlot
{
    GENERATED_BODY()

    UPROPERTY(EditAnywhere, Category = "Weapon")
    int32 SlotIndex = 0;

    UPROPERTY(EditAnywhere, Category = "Weapon")
    FName SocketName;

    UPROPERTY(EditAnywhere, Category = "Weapon")
    FText DisplayName;

    UPROPERTY(EditAnywhere, Category = "Weapon")
    TArray<FName> GrantedTags;
};
```

## Explanation

이 예시에서 각 타입은 역할이 다르다.

* `int32`는 폭이 명확한 정수다.
* `FName`은 사람이 읽는 문장보다 "식별자"에 가깝다.
* `FText`는 UI에 보여 주는 텍스트에 맞다.
* `TArray<FName>`은 엔진과 함께 쓰는 기본 동적 배열이다.

일반 C++에서는 `int`, `std::string`, `std::vector<std::string>`로도 같은 형태를 만들 수 있다. 하지만 Unreal 코드베이스 안에서는 엔진 API와 더 자연스럽게 맞는 타입이 따로 있다.

이 말이 "표준 라이브러리를 절대 쓰지 말라"는 뜻은 아니다. 표준 알고리즘이나 외부 라이브러리 interop가 필요한 곳에서는 표준 타입이 더 알맞을 수 있다. 다만 게임플레이 API, reflected property, 에디터 연동 데이터에서는 Unreal 타입을 기본값으로 보는 편이 안전하다.

## Common Mistakes

* 직렬화나 복제될 값을 `int`와 `unsigned int`로 대충 선언한다.
* UI에 보여 줄 문자열도 모두 `FString`으로만 처리한다.
* Unreal API 중심의 구조체 안에서 `std::vector`와 `TArray`를 아무 기준 없이 섞는다.
* UObject 참조를 그냥 raw pointer로만 다루며 타입 선택 문제가 아니라고 생각한다.

## Related Topics

* [FString, FName, FText](/architecture/fstring-fname-ftext)
* [컨테이너 개요](/containers/overview)
* [오브젝트 포인터](/object-pointers)
* [오브젝트 처리와 가비지 컬렉션](/reflection/object-handling-and-gc)
