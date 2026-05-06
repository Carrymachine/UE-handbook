---
sidebar_position: 2
---

# 리플렉션 매크로 읽는 법

## Summary

`UCLASS`, `UPROPERTY`, `UFUNCTION`은 서로 다른 대상을 등록하지만, 괄호 안을 읽는 방식은 거의 같다. Unreal C++ 입문에서는 개별 키워드를 외우기 전에 `specifier`, `key=value`, `meta=(...)`가 각각 무엇을 뜻하는지 먼저 잡아 두는 편이 훨씬 빠르다.

## When You Use This

헤더 파일을 열었는데 `EditAnywhere`, `BlueprintCallable`, `Category`, `meta=(ClampMin="0")` 같은 항목이 쉼표로 길게 붙어 있어 읽기 어려울 때 먼저 읽는다.

## Core Concept

리플렉션 매크로의 괄호 안에는 크게 두 종류의 정보가 들어간다.

* specifier: 엔진 동작을 바꾸는 선언이다.
* `meta=(...)`: 주로 에디터와 블루프린트 표시 방식을 조정하는 메타데이터다.

같은 괄호 안에 섞여 있지만 역할은 다르다. 보통 Unreal 입문자가 헷갈리는 지점도 바로 여기다.

## Example

```cpp
UCLASS(Blueprintable, ClassGroup=(Custom), meta=(BlueprintSpawnableComponent))
class UEPROJECT_API UHealthComponent : public UActorComponent
{
    GENERATED_BODY()
};

UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Combat", meta = (ClampMin = "0", Units = "cm"))
float AttackRange = 300.f;

UFUNCTION(BlueprintCallable, Category = "Combat", meta = (DisplayName = "Apply Damage"))
void ApplyDamage(int32 Amount);
```

## Explanation

위 세 선언은 모두 같은 패턴을 가진다.

| 형태 | 예시 | 의미 |
| --- | --- | --- |
| 플래그형 specifier | `Blueprintable`, `EditAnywhere`, `BlueprintCallable` | 켜짐/꺼짐처럼 동작하는 옵션이다 |
| 값이 있는 specifier | `Category = "Combat"` | 이름이 있는 설정이다 |
| 목록형 specifier | `ClassGroup=(Custom)` | 여러 값 또는 그룹 정보를 넣는다 |
| 메타데이터 묶음 | `meta=(ClampMin="0", Units="cm")` | 에디터와 블루프린트 표시 규칙을 추가한다 |

핵심은 `meta=(...)`와 그 바깥을 구분해서 읽는 것이다. 예를 들어 `Category = "Combat"`는 메타데이터가 아니라 specifier다. 반대로 `ClampMin`, `DisplayName`, `Keywords` 같은 항목은 보통 `meta=(...)` 안에 들어간다.

## 읽는 순서

1. 어떤 선언을 꾸미는지 본다. 클래스인지, 멤버 변수인지, 함수인지에 따라 허용되는 키워드가 다르다.
2. 바깥쪽 specifier를 본다. 에디터 편집 가능 여부, 블루프린트 노출 여부, 네트워크/직렬화 규칙이 여기서 결정된다.
3. `meta=(...)`를 본다. 노드 이름, 범위 슬라이더, 툴팁, 조건부 노출 같은 UI 성격의 규칙이 많다.
4. 타입과 조합이 맞는지 본다. 예를 들어 `BlueprintAssignable`은 멀티캐스트 델리게이트 프로퍼티에서만 쓸 수 있다.

## 기존 C++ 문법과 다른 점

표준 C++의 어트리뷰트나 템플릿과 달리, 이 매크로들은 `UnrealHeaderTool`이 별도로 읽는다. 그래서 일반 C++ 컴파일러만 기준으로 보면 맞아 보여도 Unreal 규칙에는 어긋날 수 있다. `UFUNCTION`을 `.cpp` 정의부에 붙여도 의미가 없고, `generated.h` 포함 순서를 어기면 UHT가 실패하는 이유가 여기에 있다.

## Common Mistakes

* `meta=(...)`에 들어간 항목도 모두 런타임 로직에 영향을 준다고 생각한다.
* 모든 키워드를 한 페이지에서 외우려 한다.
* 일반 C++ 매크로처럼 아무 위치에나 붙여도 된다고 생각한다.

## Related Topics

* [리플렉션 시스템 개요](/reflection/overview)
* [UPROPERTY와 프로퍼티 지정자](/reflection/properties)
* [UCLASS와 클래스 메타데이터](/reflection/class-and-metadata-specifiers)
* [UFUNCTION과 함수 지정자](/reflection/ufunctions)
