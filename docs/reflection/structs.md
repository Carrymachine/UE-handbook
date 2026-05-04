---
sidebar_position: 5
---

# 구조체

## Summary

`USTRUCT`는 값 타입을 유지하면서도 에디터, 블루프린트, 직렬화와 연결하고 싶을 때 쓰는 Unreal 방식의 구조체다. 데이터 묶음을 표현할 때 매우 자주 등장한다.

## 포함된 공식 주제

* `Structs`

## When You Use This

무기 스탯, 저장 데이터 조각, 테이블 행처럼 객체보다 가벼운 데이터 단위를 표현해야 할 때 읽는다.

## Core Concept

`USTRUCT(BlueprintType)`는 구조체를 블루프린트와 에디터에서 쓸 수 있게 한다. UObject처럼 별도 수명 관리가 붙지는 않지만, 내부 멤버에 UObject 참조가 있다면 그 멤버는 여전히 `UPROPERTY`로 선언해야 안전하다.

## Example

```cpp
USTRUCT(BlueprintType)
struct FWeaponStats
{
    GENERATED_BODY()

    UPROPERTY(EditAnywhere, BlueprintReadWrite)
    int32 Damage = 10;
};
```

## Explanation

이런 구조체는 데이터 테이블, 데이터 에셋, 컴포넌트 멤버 안에서 매우 잘 어울린다. 객체 계층을 만들기엔 과하고, 값 묶음이 필요한 상황에서 가장 실용적이다.

## Common Mistakes

* USTRUCT 안의 UObject 참조 멤버를 일반 포인터로만 둔다.
* 단순 데이터 묶음이면 충분한데 불필요하게 UObject 클래스로 만든다.

## Related Topics

* [프로퍼티](/reflection/properties)
* [데이터 에셋과 데이터 검증](/architecture/data-assets-and-validation)

