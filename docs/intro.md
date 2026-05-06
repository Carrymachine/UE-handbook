---
slug: /
title: UE5 C++ 핸드북
description: Unreal Engine 5 C++를 한국어로 단계적으로 학습하기 위한 핸드북입니다. 초급부터 중급, 심화까지 UE5 C++ 문서를 학습 흐름 기준으로 재구성합니다.
keywords:
  - Unreal Engine 5
  - UE5
  - Unreal C++
  - UE5 C++ 핸드북
  - 한국어 Unreal 문서
---

# 핸드북 의도

## Summary

이 핸드북은 Epic의 `Programming with C++` 문서군을 한국어 학습 흐름에 맞게 다시 정리한 문서 모음이다. 목표는 공식 문서를 그대로 번역하는 것이 아니라, Unreal C++를 처음 배우는 개발자가 개념과 실무 흐름을 함께 익히게 만드는 것이다.

## 포함된 공식 주제

* `Programming with C++`

## When You Use This

Blueprint 중심으로 Unreal을 써 왔지만 C++를 본격적으로 시작하려고 할 때 읽는다. 또는 표준 C++ 경험은 있지만 `UCLASS()`, 빌드 타깃, 에디터 연동 같은 Unreal 고유 요소가 낯설 때 출발점으로 쓴다.

## Core Concept

Unreal C++는 단순히 `cpp` 파일을 작성하는 작업이 아니다. UnrealHeaderTool, UnrealBuildTool, 리플렉션 시스템, 에디터 노출, 자산 참조, 게임플레이 프레임워크가 한 묶음으로 동작한다.

TypeScript 한국어 핸드북처럼 읽기 위한 문서 흐름을 먼저 세우고, 그 위에 UE 문서를 다시 배치하는 것이 이 프로젝트의 핵심 방향이다. 그래서 공식 문서의 섹션 경계를 그대로 따르기보다, 학습 순서가 자연스럽도록 주제를 재배치한다.

현재 문서 구조도 단순 주제 나열보다 학습 단계 중심으로 재편한다. 초급에서는 개발 환경, Unreal식 C++ 표기, 리플렉션 기본기를 먼저 익히고, 중급에서는 컨테이너, 델리게이트, GC, 자산 참조, 모듈, 서브시스템처럼 실제 프로젝트 구조를 만드는 주제를 다룬다. 심화에는 엔진 소스와 내부 메커니즘을 해설하는 직접 작성 아티클을 쌓아 가는 방향을 잡는다.

## Why This Exists

Epic 문서는 정확하고 범위가 넓지만, 초심자 입장에서는 항목 간 연결이 느슨하게 보일 수 있다. 특히 "왜 이 순서로 배워야 하는가", "표준 C++ 경험이 Unreal에서 어디서 깨지는가", "에디터와 코드가 어떤 경계에서 연결되는가"를 한 문서 흐름 안에서 따라가기는 쉽지 않다.

이 프로젝트는 그 간격을 메우기 위해 만들어졌다. 설명은 한국어로 쓰고, API 이름과 코드 식별자는 원형을 유지하며, 예제는 UE5 기준으로 바로 읽히는 최소 코드만 남긴다.

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

* [Contributor List](/contributors)
* [Unreal Engine 역사](/unreal-engine-history)
* [초급 과정](/beginner-course)
* [중급 과정](/intermediate-course)
* [심화 과정](/advanced-course)
