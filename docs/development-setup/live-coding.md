---
sidebar_position: 3
---

# Live Coding

## Summary

Live Coding은 에디터를 닫지 않고 C++ 바이너리를 다시 패치하는 반복 작업 기능이다. 빠른 실험에는 강력하지만, 모든 변경을 안전하게 반영하는 만능 기능은 아니다.

## 포함된 공식 주제

* `Live Coding`

## When You Use This

`Tick`, 일반 함수 본문, 계산 로직처럼 런타임 구현을 자주 바꾸는 구간을 빠르게 확인하고 싶을 때 쓴다.

## Core Concept

Live Coding은 전체 재시작 없이 변경된 코드를 패치해 준다. 그래서 게임플레이 로직, UI 반응, 계산식 수정에는 매우 빠르다. 반면 헤더 구조 변경, `UCLASS`/`UPROPERTY`/`UFUNCTION` 매크로 변경, 생성자에서 기본 서브오브젝트 구성을 바꾸는 일은 전체 재컴파일과 에디터 재시작이 더 안전하다.

## Example

```cpp
void AMyActor::Tick(float DeltaTime)
{
    Super::Tick(DeltaTime);
    CurrentAngle += DeltaTime * RotationSpeed;
}
```

## Explanation

이런 식의 함수 본문 수정은 Live Coding으로 확인하기 좋다. 반대로 프로퍼티를 새로 추가해 디테일 패널 노출까지 검증해야 한다면 UHT가 다시 도는 전체 빌드 흐름으로 생각해야 한다.

## Common Mistakes

* 리플렉션이 관여하는 구조 변경까지 Live Coding만으로 해결하려고 한다.
* 너무 많은 모듈을 프리로드해서 에디터 시작 시간을 불필요하게 늘린다.

## Related Topics

* [코드 생성과 컴파일 흐름](/development-setup/code-workflow)
* [프로그래밍 도구](/development-setup/programming-tools)

