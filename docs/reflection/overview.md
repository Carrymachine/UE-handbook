---
sidebar_position: 1
---

# 리플렉션 시스템 개요

## Summary

Unreal C++의 차별점은 리플렉션 시스템이 클래스 정의를 에디터, 블루프린트, 직렬화, GC와 연결한다는 점이다. `UCLASS`, `UPROPERTY`, `UFUNCTION`은 문법 장식이 아니라 엔진과의 계약이다.

## 포함된 공식 주제

* `Unreal Engine Reflection System`

## When You Use This

왜 같은 C++ 클래스라도 어떤 것은 에디터에 보이고 어떤 것은 안 보이는지 이해하고 싶을 때 읽는다.

## Core Concept

리플렉션 시스템은 UnrealHeaderTool이 소스 코드를 스캔해 메타데이터와 보조 코드를 생성하는 구조다. 그래서 헤더 배치, 매크로 선언, `generated.h` 포함 순서까지 모두 의미를 갖는다.

## Example

```cpp
UCLASS()
class UEPROJECT_API AMyPickup : public AActor
{
    GENERATED_BODY()

public:
    UPROPERTY(EditAnywhere, Category = "Pickup")
    int32 Score = 10;
};
```

## Explanation

위 예제에서 `Score`는 단순 멤버가 아니라 에디터가 인식하는 프로퍼티가 된다. Unreal C++에서 "보인다, 저장된다, 가비지 컬렉션이 안다"는 것은 대부분 리플렉션을 거친 결과다.

## Common Mistakes

* `generated.h` 포함 위치를 일반 헤더처럼 다룬다.
* 리플렉션이 필요한 멤버인데 매크로를 빼고도 같은 동작을 기대한다.

## Related Topics

* [오브젝트와 생성](/reflection/objects)
* [프로퍼티](/reflection/properties)
* [UFunctions](/reflection/ufunctions)

