---
sidebar_position: 3
---

# Unreal C++ 코딩 표준

## Summary

Epic의 코딩 표준은 문법 취향보다 도구 호환성과 가독성을 위한 규칙에 가깝다. 네이밍, 파일 구성, 매크로 사용, UE 타입 선택이 일정해야 코드 검색과 유지보수가 쉬워진다.

## 포함된 공식 주제

* `Coding Standard`

## When You Use This

새 프로젝트의 기본 스타일을 정하거나, 팀 코드 리뷰에서 "왜 언리얼식으로 안 썼는가"를 설명해야 할 때 읽는다.

## Core Concept

대표 규칙은 `A`, `U`, `F`, `I`, `E` 접두사, `b`로 시작하는 `bool`, PascalCase, Unreal 컨테이너와 문자열 타입 우선 사용이다. UE5에서는 UObject 멤버를 `UPROPERTY()`와 `TObjectPtr`로 관리하는 흐름도 중요하다.

## Example

```cpp
UCLASS()
class UEPROJECT_API ACombatCharacter : public ACharacter
{
    GENERATED_BODY()

public:
    UPROPERTY(EditAnywhere, Category = "Combat")
    bool bCanAttack = true;
};
```

## Explanation

이 예시는 접두사, PascalCase, `b` 접두 불리언, `UPROPERTY` 노출 규칙이 한 번에 들어 있다. 표준을 맞추면 언리얼 코드베이스 전체에서 비슷한 패턴으로 읽히기 때문에 온보딩 비용이 낮아진다.

## Common Mistakes

* UObject를 `new`/`delete`로 관리하는 일반 C++ 습관을 그대로 가져온다.
* `std::string`, `std::vector`를 무조건 피해야 한다고 오해하거나, 반대로 Unreal 타입을 전혀 안 쓴다.

## Related Topics

* [컨테이너 개요](/containers/overview)
* [오브젝트 포인터](/object-pointers)
* [프로퍼티](/reflection/properties)

