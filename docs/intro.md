---
sidebar_position: 1
---

# UE5 C++ 핸드북 소개

## Summary

이 핸드북은 Epic의 `Programming with C++` 문서군을 한국어 학습 흐름에 맞게 다시 정리한 문서 모음이다. 목표는 공식 문서를 그대로 번역하는 것이 아니라, Unreal C++를 처음 배우는 개발자가 개념과 실무 흐름을 함께 익히게 만드는 것이다.

## 포함된 공식 주제

* `Programming with C++`

## When You Use This

Blueprint 중심으로 Unreal을 써 왔지만 C++를 본격적으로 시작하려고 할 때 읽는다. 또는 표준 C++ 경험은 있지만 `UCLASS()`, 빌드 타깃, 에디터 연동 같은 Unreal 고유 요소가 낯설 때 출발점으로 쓴다.

## Core Concept

Unreal C++는 단순히 `cpp` 파일을 작성하는 작업이 아니다. UnrealHeaderTool, UnrealBuildTool, 리플렉션 시스템, 에디터 노출, 자산 참조, 게임플레이 프레임워크가 한 묶음으로 동작한다.

이 핸드북은 공식 섹션을 네 갈래로 재구성한다. 먼저 개발 환경과 반복 작업 흐름을 정리하고, 그다음 컨테이너와 델리게이트 같은 언리얼식 C++ 문법을 익힌다. 이후 모듈, 자산, 설정 파일, 서브시스템을 다루고, 마지막으로 UObject와 리플렉션 시스템을 집중적으로 설명한다.

## Example

```cpp
// MyActor.h
#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "MyActor.generated.h"

UCLASS()
class UEPROJECT_API AMyActor : public AActor
{
    GENERATED_BODY()
};
```

## Explanation

같은 `class` 선언이라도 Unreal에서는 `UCLASS()`와 `GENERATED_BODY()`가 붙어야 리플렉션과 에디터 기능이 연결된다. 이 한 줄 차이가 표준 C++ 클래스와 Unreal C++ 클래스의 출발점이다.

## Common Mistakes

* Unreal C++를 표준 C++ 문법만 익히면 충분하다고 생각한다.
* Blueprint를 완전히 대체해야만 C++를 쓰는 것이라고 오해한다.

## Related Topics

* [개발 환경 개요](/docs/development-setup/overview)
* [컨테이너 개요](/docs/containers/overview)
* [언리얼 아키텍처 개요](/docs/architecture/overview)
* [리플렉션 시스템 개요](/docs/reflection/overview)
