---
sidebar_position: 4
---

# UPROPERTY와 프로퍼티 지정자

## Summary

`UPROPERTY`는 멤버 변수를 Unreal의 프로퍼티 시스템에 등록하는 선언이다. 변수 타입만 보는 것으로는 부족하고, 괄호 안에 어떤 specifier를 넣었는지가 에디터 편집 가능 여부, 블루프린트 접근, 저장, 복제, GC 추적까지 결정한다.

## 포함된 공식 주제

* `Properties`

## When You Use This

헤더에서 `UPROPERTY(...)`를 봤는데 `EditDefaultsOnly`, `ReplicatedUsing`, `Category`, `meta=(ClampMin="0")`가 각각 무엇을 뜻하는지 정리하고 싶을 때 읽는다.

## Core Concept

`UPROPERTY`의 공통 형태는 아래처럼 생각하면 된다.

```cpp
UPROPERTY([Property Specifiers], meta=(Metadata Specifiers))
```

바깥쪽 specifier는 프로퍼티의 역할을 정하고, `meta=(...)`는 주로 에디터와 블루프린트 표시 방식을 조정한다. UE5에서는 UObject 참조 멤버를 `TObjectPtr`와 함께 선언하는 패턴도 기본 전제로 보는 편이 좋다.

## Example

```cpp
UCLASS()
class UEPROJECT_API AWeapon : public AActor
{
    GENERATED_BODY()

private:
    UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category = "Weapon", meta = (AllowPrivateAccess = "true", ClampMin = "0"))
    int32 MaxAmmo = 30;

    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Weapon", meta = (AllowPrivateAccess = "true"))
    TObjectPtr<USkeletalMeshComponent> WeaponMesh;
};
```

## Explanation

`MaxAmmo`는 기본값만 수정 가능한 정수 프로퍼티이고, `WeaponMesh`는 에디터에서 보이지만 직접 교체하지 않는 컴포넌트 참조다. 둘 다 `UPROPERTY`지만 편집 정책과 블루프린트 접근 정책이 다르다. Unreal C++에서는 이 차이를 괄호 안 specifier로 선언한다.

## 괄호 안을 읽는 순서

1. 에디터에서 편집 가능한지 본다. `Edit*`와 `Visible*` 계열이 먼저 눈에 들어온다.
2. 블루프린트에서 읽기/쓰기 가능한지 본다. `BlueprintReadOnly`, `BlueprintReadWrite`를 확인한다.
3. 저장, 복제, 설정 파일, 세이브 데이터 같은 런타임 규칙을 본다. `Replicated`, `SaveGame`, `Config`, `Transient`가 여기에 들어간다.
4. UObject 참조라면 `UPROPERTY`와 포인터 타입 조합이 적절한지 본다.
5. 마지막으로 `Category`와 `meta=(...)`를 보고 에디터 노출 방식을 읽는다.

## 자주 쓰는 Property Specifier

| specifier | 언제 쓰는가 | 의미 |
| --- | --- | --- |
| `EditAnywhere` | 어디서든 값을 조정해야 할 때 | 클래스 기본값과 인스턴스 모두에서 수정 가능하다 |
| `EditDefaultsOnly` | 설계값만 바꿔야 할 때 | 클래스 기본값만 수정 가능하고 배치된 인스턴스에서는 수정하지 않는다 |
| `EditInstanceOnly` | 레벨마다 값이 달라야 할 때 | 인스턴스에서만 수정 가능하다 |
| `VisibleAnywhere` | 읽기만 하고 직접 바꾸면 안 될 때 | 디테일 패널에는 보이지만 수정은 막는다 |
| `BlueprintReadOnly` | 블루프린트에서 읽기만 허용할 때 | 변수 노출은 하되 쓰기는 막는다 |
| `BlueprintReadWrite` | 블루프린트가 값을 바꿔야 할 때 | 읽기와 쓰기를 모두 허용한다 |
| `Replicated` | 네트워크 동기화가 필요할 때 | 값이 네트워크로 복제된다 |
| `ReplicatedUsing=OnRep_Function` | 복제 후 후처리가 필요할 때 | 값이 갱신되면 지정한 콜백을 호출한다 |
| `Transient` | 저장하면 안 되는 런타임 상태일 때 | 디스크 직렬화 대상에서 제외된다 |
| `SaveGame` | 세이브 시스템에 포함해야 할 때 | 저장용 직렬화 경로에 포함한다 |
| `Config` | `.ini`에서 읽어야 할 때 | 클래스의 설정 파일과 연결된다 |
| `Instanced` | 서브오브젝트 인스턴스를 직접 소유할 때 | 참조가 아니라 인스턴스형 오브젝트로 다룬다 |
| `BlueprintAssignable` | 이벤트 델리게이트를 바인딩하게 할 때 | 멀티캐스트 델리게이트를 블루프린트에서 연결할 수 있게 한다 |

## 자주 쓰는 메타데이터

| metadata | 언제 쓰는가 | 의미 |
| --- | --- | --- |
| `ClampMin`, `ClampMax` | 값 범위를 강제할 때 | 입력 가능한 최소/최대 값을 제한한다 |
| `UIMin`, `UIMax` | 슬라이더 범위만 조정할 때 | UI 범위만 바꾸고 실제 값 범위는 열어 둘 수 있다 |
| `EditCondition="bCanEdit"` | 특정 조건에서만 수정 가능하게 할 때 | 다른 프로퍼티 값에 따라 비활성화한다 |
| `AllowPrivateAccess="true"` | private 멤버를 블루프린트에 노출할 때 | 캡슐화를 유지하면서 접근을 허용한다 |
| `Units="cm"` | 단위를 명시할 때 | 에디터에 단위 정보를 보여 준다 |
| `ToolTip="..."` | 설명이 필요한 값일 때 | 디테일 패널 툴팁을 제공한다 |

`Category = "Weapon"`은 메타데이터가 아니라 property specifier다. 입문자들이 가장 자주 헷갈리는 부분이라 구분해서 기억하는 편이 좋다.

## `UPROPERTY()`만 붙이는 경우

아무 specifier 없이 `UPROPERTY()`만 붙이는 선언도 있다. 이 패턴은 에디터 노출이 목적이 아니라, 리플렉션과 직렬화 경로에 포함하거나 UObject 참조를 GC가 추적하게 만들고 싶을 때 자주 쓴다.

```cpp
UPROPERTY()
TObjectPtr<UAnimMontage> CachedMontage;
```

## 기존 C++와 다른 점

일반 C++에서는 멤버 변수에 이런 수준의 엔진 정책을 선언하지 않는다. Unreal C++에서는 같은 `int32`라도 `UPROPERTY`가 없으면 에디터도, 블루프린트도, 복제 시스템도 그 변수를 모른다. 특히 UObject 참조는 `TObjectPtr`와 `UPROPERTY` 조합으로 수명 추적 경로에 올려 두는 습관이 중요하다.

## Common Mistakes

* UObject 참조 멤버를 `UPROPERTY` 없이 선언한다.
* 런타임에만 쓰는 임시 상태까지 무조건 `EditAnywhere`로 열어 둔다.
* `VisibleAnywhere`와 `BlueprintReadOnly`를 같은 개념으로 생각한다.
* `Category`와 `meta=(...)`를 구분하지 못한다.

## Related Topics

* [리플렉션 시스템 개요](/reflection/overview)
* [리플렉션 매크로 읽는 법](/reflection/macro-anatomy)
* [UCLASS와 클래스 메타데이터](/reflection/class-and-metadata-specifiers)
* [오브젝트 처리와 가비지 컬렉션](/reflection/object-handling-and-gc)
