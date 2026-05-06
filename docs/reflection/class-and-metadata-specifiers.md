---
sidebar_position: 7
---

# UCLASS와 클래스 메타데이터

## Summary

`UCLASS`는 C++ 클래스를 Unreal의 타입 시스템에 등록하는 출발점이다. 괄호 안에는 "이 클래스를 블루프린트가 어떻게 다루는가", "에디터에서 어떻게 보이는가", "인스턴스를 어떻게 만들 수 있는가" 같은 타입 정책이 들어간다.

## 포함된 공식 주제

* `Class Specifiers`
* `Metadata Specifiers`

## When You Use This

`Blueprintable`, `BlueprintType`, `Abstract`, `ClassGroup`, `meta=(BlueprintSpawnableComponent)`의 차이를 정리하고 싶을 때 읽는다.

## Core Concept

`UCLASS`의 공통 형태는 아래처럼 읽으면 된다.

```cpp
UCLASS([Class Specifiers], meta=(Metadata Specifiers))
```

class specifier는 타입의 성격을 정하고, `meta=(...)`는 주로 에디터와 블루프린트에서 보이는 방식을 조정한다. 공식 메타데이터 문서도 메타데이터는 주로 에디터 전용 정보이며, 게임플레이 로직을 거기에 기대지 말라고 설명한다.

## Example

```cpp
UCLASS(Blueprintable, ClassGroup=(Custom), meta=(BlueprintSpawnableComponent))
class UEPROJECT_API UHealthComponent : public UActorComponent
{
    GENERATED_BODY()
};
```

## Explanation

이 선언은 세 가지 의미를 동시에 가진다. `Blueprintable`은 이 클래스를 기반으로 블루프린트를 만들 수 있게 하고, `ClassGroup=(Custom)`은 컴포넌트 목록의 그룹을 정하며, `meta=(BlueprintSpawnableComponent)`는 블루프린트 에디터에서 이 컴포넌트를 추가 가능한 타입으로 노출한다. 즉 `UCLASS(...)` 안은 "이 타입을 엔진이 어떻게 취급해야 하는가"를 선언하는 자리다.

## 괄호 안에서 먼저 볼 것

1. 블루프린트가 이 타입을 상속할 수 있는지 본다. `Blueprintable`이 여기에 해당한다.
2. 블루프린트가 이 타입을 변수 타입으로 쓸 수 있는지 본다. `BlueprintType`이 이 역할이다.
3. 직접 인스턴스화하거나 레벨에 둘 수 있는지 본다. `Abstract`, `EditInlineNew`, `DefaultToInstanced`가 여기에 걸린다.
4. 에디터 분류와 표시 정책을 본다. `ClassGroup=(...)`, `HideCategories=(...)`, `meta=(...)` 같은 항목이다.

## 자주 쓰는 Class Specifier

| specifier | 언제 쓰는가 | 의미 |
| --- | --- | --- |
| `Abstract` | 기반 클래스만 제공할 때 | 직접 배치하거나 인스턴스화하는 용도로 쓰지 않게 한다 |
| `Blueprintable` | 이 클래스를 부모로 하는 블루프린트를 만들게 할 때 | 블루프린트 상속을 허용한다 |
| `BlueprintType` | 블루프린트 변수 타입으로 쓰게 할 때 | 타입 자체를 블루프린트에서 참조 가능하게 한다 |
| `ClassGroup=(Custom)` | 컴포넌트 추가 메뉴를 정리할 때 | 에디터의 클래스 그룹을 지정한다 |
| `EditInlineNew` | 프로퍼티 창에서 하위 UObject를 바로 만들게 할 때 | 에디터에서 인라인 생성이 가능해진다 |
| `DefaultToInstanced` | 참조보다 개별 인스턴스처럼 다뤄야 할 때 | 객체를 인스턴스형으로 복제/소유하는 흐름과 잘 맞는다 |
| `Config=Game` | 클래스 설정을 `.ini`에 저장할 때 | `Config` 프로퍼티가 어느 설정 파일을 쓰는지 정한다 |
| `Transient` | 이 클래스의 오브젝트를 저장하지 않을 때 | 비영속 오브젝트로 다룬다 |

## 자주 쓰는 메타데이터

| metadata | 언제 쓰는가 | 의미 |
| --- | --- | --- |
| `BlueprintSpawnableComponent` | 컴포넌트를 블루프린트에서 추가 가능하게 할 때 | Add Component 목록에 노출되게 한다 |
| `DisplayName="..."` | 표시 이름을 바꾸고 싶을 때 | 에디터와 블루프린트에서 더 읽기 쉬운 이름을 쓴다 |
| `ShortTooltip="..."` | 짧은 도움말이 필요할 때 | 선택 UI 등에서 짧은 설명을 제공한다 |
| `ToolTip="..."` | 타입 용도를 자세히 설명할 때 | 더 긴 설명을 제공한다 |

## `Blueprintable`과 `BlueprintType`의 차이

둘은 비슷해 보이지만 목적이 다르다.

* `Blueprintable`: 이 클래스를 부모로 하는 블루프린트 클래스를 만들 수 있다.
* `BlueprintType`: 이 클래스를 블루프린트 변수 타입이나 핀 타입으로 쓸 수 있다.

어떤 타입은 블루프린트 변수 타입으로는 노출하고 싶지만, 상속 기반 블루프린트 클래스는 만들지 못하게 하고 싶을 수 있다. 이때 둘을 구분해서 써야 한다.

## 컴포넌트에서 자주 보는 조합

컴포넌트는 아래 조합이 자주 나온다.

```cpp
UCLASS(ClassGroup=(Custom), meta=(BlueprintSpawnableComponent))
```

여기서 `ClassGroup`은 메뉴 분류고, `BlueprintSpawnableComponent`는 추가 가능 여부다. 둘은 같은 역할이 아니다.

## 기존 C++와 다른 점

일반 C++에서는 클래스 선언이 타입 자체만 정의한다. Unreal C++에서는 `UCLASS(...)`가 타입 정책까지 선언한다. 따라서 "어떤 부모를 상속했는가"만으로는 부족하고, 에디터/블루프린트 관점에서 이 타입이 어떤 표면을 가지는지도 함께 설계해야 한다.

## Common Mistakes

* `Blueprintable`과 `BlueprintType`을 같은 뜻으로 이해한다.
* 런타임 의미가 거의 없는 메타데이터를 로직 제어 수단처럼 사용한다.
* 컴포넌트 클래스에 `BlueprintSpawnableComponent`를 빼먹고 에디터 노출 문제를 디버깅한다.

## Related Topics

* [리플렉션 시스템 개요](/reflection/overview)
* [리플렉션 매크로 읽는 법](/reflection/macro-anatomy)
* [UPROPERTY와 프로퍼티 지정자](/reflection/properties)
* [구조체](/reflection/structs)
