---
sidebar_position: 1
---

# 리플렉션 시스템 개요

## Summary

Unreal C++의 핵심 차이는 클래스 선언이 엔진의 데이터 시스템으로 연결된다는 점이다. `UCLASS`, `UPROPERTY`, `UFUNCTION`은 단순 태그가 아니라 에디터, 블루프린트, 직렬화, GC, 네트워크 기능을 여는 진입점이다.

## 포함된 공식 주제

* `Unreal Engine Reflection System`

## When You Use This

왜 같은 C++ 코드라도 어떤 멤버는 에디터에 보이고, 어떤 함수는 블루프린트 노드가 되며, 어떤 참조는 GC가 추적하는지 이해하고 싶을 때 읽는다.

## Core Concept

리플렉션 시스템은 `UnrealHeaderTool`이 헤더를 스캔해 메타데이터와 보조 코드를 생성하는 구조다. 따라서 Unreal C++에서는 타입 선언 자체보다 "어떤 매크로를 붙였는가", "괄호 안에 어떤 지정자를 넣었는가", "`generated.h`를 어디에 포함했는가"가 함께 의미를 가진다.

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

위 코드에서 `AMyPickup`은 단순 C++ 클래스가 아니라 `UClass` 정보를 가진 액터 타입이 되고, `Score`는 에디터와 직렬화 시스템이 인식하는 프로퍼티가 된다. Unreal C++에서 "보인다", "저장된다", "복제된다", "GC가 참조를 안다"는 말은 대부분 리플렉션을 통과했다는 뜻이다.

## 리플렉션 시스템이 실제로 하는 일

| 영역 | 주로 보는 매크로 | 결과 |
| --- | --- | --- |
| 타입 등록 | `UCLASS`, `USTRUCT`, `UENUM` | 에디터와 런타임이 타입 정보를 안다 |
| 멤버 변수 등록 | `UPROPERTY` | 디테일 패널, 저장, 복제, GC 추적과 연결된다 |
| 함수 등록 | `UFUNCTION` | 블루프린트, RPC, 에디터 버튼, 콘솔 명령과 연결된다 |
| 보조 코드 생성 | `GENERATED_BODY()` | 등록 함수, 오프셋 정보, thunk 함수 등이 생성된다 |

## 리플렉션 매크로를 읽을 때 먼저 볼 것

1. 어떤 매크로인지 본다. `UCLASS`, `UPROPERTY`, `UFUNCTION`은 연결되는 시스템이 다르다.
2. 괄호 안의 specifier를 본다. 이 부분이 런타임과 에디터 동작을 결정한다.
3. `meta=(...)`가 있는지 본다. 메타데이터는 주로 에디터 표시와 블루프린트 노드 형태를 조정한다.
4. 선언 위치를 본다. 리플렉션 매크로는 주로 헤더 선언부에서 해석된다.

## Common Mistakes

* `generated.h` 포함 위치를 일반 헤더처럼 다룬다.
* 리플렉션이 필요한 멤버인데 매크로를 빼고도 같은 동작을 기대한다.
* `meta=(...)`를 런타임 로직 제어 장치로 오해한다.

## Related Topics

* [리플렉션 매크로 읽는 법](/reflection/macro-anatomy)
* [오브젝트와 생성](/reflection/objects)
* [UPROPERTY와 프로퍼티 지정자](/reflection/properties)
* [UFUNCTION과 함수 지정자](/reflection/ufunctions)
