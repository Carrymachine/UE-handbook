---
sidebar_position: 8
---

# UFUNCTION과 함수 지정자

## Summary

`UFUNCTION`은 함수를 Unreal의 호출 표면에 올리는 선언이다. 괄호 안에 무엇을 넣는지에 따라 블루프린트 노드가 될 수도 있고, 서버 RPC가 될 수도 있고, 에디터 버튼이나 이벤트 확장 지점이 될 수도 있다.

## 포함된 공식 주제

* `UFunctions`

## When You Use This

`BlueprintCallable`, `BlueprintPure`, `Server`, `NetMulticast`, `BlueprintNativeEvent`, `CallInEditor`가 어떻게 다른지 정리하고 싶을 때 읽는다.

## Core Concept

`UFUNCTION`의 공통 형태는 아래처럼 읽으면 된다.

```cpp
UFUNCTION([Function Specifiers], meta=(Metadata Specifiers))
```

function specifier는 호출 경로와 실행 규칙을 정하고, `meta=(...)`는 블루프린트 노드의 표시와 핀 동작을 조정한다. 특히 RPC와 `BlueprintNativeEvent`는 선언만으로 끝나지 않고 `_Implementation` 규칙까지 함께 따라온다.

## Example

```cpp
UFUNCTION(BlueprintCallable, Category = "Combat", meta = (DisplayName = "Apply Damage", Keywords = "hit damage attack"))
void ApplyDamage(int32 Amount);

UFUNCTION(Server, Reliable)
void ServerReload();

UFUNCTION(BlueprintNativeEvent, Category = "Interaction")
void Interact(AActor* InstigatorActor);
```

## Explanation

첫 함수는 블루프린트에서 직접 호출할 공개 API고, 두 번째는 서버에서 실행되어야 하는 RPC이며, 세 번째는 C++ 기본 구현을 둘 수 있으면서 블루프린트가 덮어쓸 수 있는 이벤트다. 셋 모두 `UFUNCTION`이지만, 누가 호출하고 어디서 실행되며 어떤 보조 코드가 생성되는지가 완전히 다르다.

## 괄호 안을 읽는 순서

1. 이 함수가 블루프린트에서 보이는지 본다. `BlueprintCallable`, `BlueprintPure`가 가장 먼저 보인다.
2. 실행 위치가 네트워크와 연결되는지 본다. `Server`, `Client`, `NetMulticast`가 여기에 해당한다.
3. 이벤트 확장 지점인지 본다. `BlueprintImplementableEvent`, `BlueprintNativeEvent`가 대표적이다.
4. 에디터나 콘솔에서 특별히 호출되는지 본다. `CallInEditor`, `Exec` 같은 항목이다.
5. 마지막으로 `Category`와 `meta=(...)`를 보고 블루프린트 노드 형태를 읽는다.

## 자주 쓰는 Function Specifier

| specifier | 언제 쓰는가 | 의미 |
| --- | --- | --- |
| `BlueprintCallable` | 블루프린트에서 직접 호출할 때 | 실행 핀이 있는 함수 노드로 노출한다 |
| `BlueprintPure` | 상태를 바꾸지 않는 조회 함수일 때 | 실행 핀 없는 순수 함수 노드로 노출한다 |
| `BlueprintImplementableEvent` | C++ 선언만 두고 블루프린트가 구현하게 할 때 | 블루프린트 구현 지점을 만든다 |
| `BlueprintNativeEvent` | C++ 기본 구현과 블루프린트 확장을 함께 허용할 때 | `_Implementation` 기반 기본 구현을 둔다 |
| `Server` | 서버에서 실행되어야 할 때 | 서버 RPC로 동작한다 |
| `Client` | 특정 클라이언트에서 실행되어야 할 때 | 클라이언트 RPC로 동작한다 |
| `NetMulticast` | 서버 호출 후 모든 클라이언트에 전파할 때 | 멀티캐스트 RPC로 동작한다 |
| `Reliable` | 반드시 전달되어야 할 RPC일 때 | 재전송을 보장하는 RPC로 표시한다 |
| `Unreliable` | 자주 호출되지만 일부 손실을 감수할 수 있을 때 | 가벼운 RPC로 사용한다 |
| `CallInEditor` | 에디터에서 버튼처럼 실행하고 싶을 때 | 디테일 패널에서 호출할 수 있다 |
| `Exec` | 콘솔 명령으로 노출할 때 | 특정 클래스 컨텍스트에서 콘솔 명령처럼 호출된다 |
| `BlueprintAuthorityOnly` | 블루프린트에서는 권한 있는 측만 실행하게 할 때 | 권한 없는 Blueprint 실행을 막는다 |

## 자주 쓰는 메타데이터

| metadata | 언제 쓰는가 | 의미 |
| --- | --- | --- |
| `DisplayName="..."` | 노드 이름을 더 읽기 좋게 바꿀 때 | 블루프린트 표시 이름을 바꾼다 |
| `Keywords="..."` | 검색어를 추가하고 싶을 때 | 블루프린트 검색 편의성을 높인다 |
| `CompactNodeTitle="..."` | 짧은 노드 제목이 필요할 때 | 시각적으로 축약된 노드를 만든다 |
| `AutoCreateRefTerm="ParamName"` | 참조 파라미터 기본값 노드를 덜 번거롭게 할 때 | 입력 핀 연결이 없어도 임시 값을 만들어 준다 |
| `DefaultToSelf="ParamName"` | self를 기본 연결 대상으로 삼을 때 | 블루프린트 사용성을 높인다 |
| `WorldContext="ParamName"` | 월드 컨텍스트를 숨기고 자동 연결할 때 | 함수 라이브러리 노드에서 자주 쓴다 |

## `_Implementation`이 붙는 경우

`BlueprintNativeEvent`와 RPC는 선언만 보고 끝내면 안 된다. UHT가 별도 thunk와 구현 함수를 연결하므로, 실제 구현은 `_Implementation` 이름으로 작성한다.

```cpp
void AMyCharacter::ServerReload_Implementation()
{
    // 서버에서 실행될 실제 로직
}

void AInteractableActor::Interact_Implementation(AActor* InstigatorActor)
{
    // BlueprintNativeEvent의 기본 C++ 구현
}
```

이 패턴은 일반 C++ 함수 선언과 가장 크게 다른 부분이다.

## 기존 C++와 다른 점

일반 C++ 함수는 호출 규칙을 주로 코드 흐름으로만 표현한다. Unreal C++ 함수는 선언부에서 호출 표면까지 함께 설명한다. 같은 `void Reload()`라도 `UFUNCTION(Server, Reliable)`가 붙으면 단순 멤버 함수가 아니라 네트워크 호출 규칙을 가진 엔진 함수가 된다.

## Common Mistakes

* `BlueprintPure`에 실제 상태 변경 로직을 넣는다.
* RPC나 `BlueprintNativeEvent`에 필요한 `_Implementation` 규칙을 빠뜨린다.
* `Reliable`을 모든 RPC에 습관적으로 붙인다.
* `UFUNCTION`을 `.cpp` 정의부에서만 생각하고 헤더 선언부 규칙을 놓친다.

## Related Topics

* [동적 델리게이트와 멀티캐스트](/delegates/dynamic-and-multicast)
* [리플렉션 매크로 읽는 법](/reflection/macro-anatomy)
* [UCLASS와 클래스 메타데이터](/reflection/class-and-metadata-specifiers)
* [TSubclassOf와 인터페이스](/reflection/tsubclassof-and-interfaces)
