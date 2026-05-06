---
title: 초급 과정
description: Unreal C++를 처음 읽는 개발자를 위한 초급 과정입니다. 개발 환경, Unreal식 C++ 표기, UCLASS, UPROPERTY, UFUNCTION 같은 리플렉션 기본기를 순서대로 익힙니다.
keywords:
  - Unreal C++ 입문
  - UE5 C++ 초급
  - UCLASS
  - UPROPERTY
  - UFUNCTION
---

# 초급 과정

## Summary

초급 과정은 Unreal C++를 "처음 읽을 수 있게 만드는 단계"다. 개발 환경, Unreal식 C++ 표기, 리플렉션 매크로를 먼저 이해해서 낯선 헤더 파일을 해석할 수 있게 만드는 데 초점을 둔다.

## When You Use This

표준 C++ 경험은 있지만 Unreal C++는 아직 낯설거나, Blueprint로는 작업해 봤지만 C++ 문서를 어디부터 읽어야 할지 모르겠을 때 이 과정부터 시작한다.

## Core Concept

초급에서는 복잡한 시스템 설계보다 코드 표면을 읽는 능력이 먼저다. `AActor`, `UCLASS()`, `UPROPERTY()`, `TObjectPtr`, `GENERATED_BODY()`가 어떤 의미인지 모르면 뒤쪽 문서의 설명도 계속 끊긴다.

따라서 초급 과정은 아래 세 덩어리로 이어진다.

1. 개발 환경과 기본 컴파일 흐름을 잡는다.
2. Unreal C++가 표준 C++와 어떻게 다르게 보이는지 익힌다.
3. 리플렉션 시스템의 기본 매크로와 선언 규칙을 이해한다.

## 이 과정을 마치면 할 수 있어야 하는 것

* `Editor` 타깃과 `Game` 타깃의 차이를 설명할 수 있다.
* Unreal 클래스 헤더를 열었을 때 접두사와 매크로를 읽을 수 있다.
* `UPROPERTY(...)`, `UCLASS(...)`, `UFUNCTION(...)` 괄호 안의 핵심 specifier를 해석할 수 있다.
* UObject 참조를 raw pointer처럼 다루면 왜 위험한지 설명할 수 있다.

## 추천 읽기 순서

1. [개발 환경 개요](/development-setup/overview)
2. [IDE 설정과 선택](/development-setup/editors)
3. [코드 생성과 컴파일 흐름](/development-setup/code-workflow)
4. [Live Coding](/development-setup/live-coding)
5. [Unreal C++ 입문 가이드](/coding-standard)
6. [일반 C++와 Unreal C++의 차이](/unreal-cpp-vs-standard-cpp)
7. [접두사와 이름 규칙](/prefixes-and-naming)
8. [Unreal 클래스 헤더 해부](/class-header-anatomy)
9. [Unreal 타입 선택 기준](/engine-types)
10. [오브젝트 포인터](/object-pointers)
11. [리플렉션 시스템 개요](/reflection/overview)
12. [리플렉션 매크로 읽는 법](/reflection/macro-anatomy)
13. [오브젝트와 생성](/reflection/objects)
14. [UPROPERTY와 프로퍼티 지정자](/reflection/properties)
15. [UCLASS와 클래스 메타데이터](/reflection/class-and-metadata-specifiers)
16. [UFUNCTION과 함수 지정자](/reflection/ufunctions)

## Common Mistakes

* 초반부터 모듈 분리나 자산 로딩 전략 같은 구조 설계로 바로 들어간다.
* Unreal의 접두사와 매크로를 단순 스타일 문제로 보고 넘긴다.
* 빌드 실패 원인을 C++ 문법 오류로만 생각하고 UHT 규칙을 놓친다.

## Related Topics

* [핸드북 의도](/)
* [중급 과정](/intermediate-course)
