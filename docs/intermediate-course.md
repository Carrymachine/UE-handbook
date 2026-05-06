---
title: 중급 과정
---

# 중급 과정

## Summary

중급 과정은 "코드를 읽을 수 있다"에서 "시스템을 연결하고 구조를 나눌 수 있다"로 넘어가는 단계다. 컨테이너, 델리게이트, 구조체, GC, 자산 참조, 모듈, 서브시스템처럼 실제 프로젝트 구조를 만드는 주제가 중심이 된다.

## When You Use This

간단한 Actor, Component, 리플렉션 매크로는 읽고 쓸 수 있지만, 프로젝트가 커질수록 어떤 타입과 구조를 선택해야 할지 헷갈릴 때 읽는다.

## Core Concept

중급에서 중요한 질문은 문법이 아니라 설계다.

* 이 데이터는 `USTRUCT`가 맞는가, `UObject`가 맞는가
* 이 호출은 델리게이트가 맞는가, 인터페이스가 맞는가
* 이 참조는 하드 참조여야 하는가, 소프트 참조여야 하는가
* 이 시스템은 액터에 둘 것인가, 서브시스템에 둘 것인가
* 이 코드는 어느 모듈 경계 안에 있어야 하는가

즉 중급 과정은 개별 문법보다 "왜 이 구조를 택하는가"를 훈련하는 단계다.

## 이 과정을 마치면 할 수 있어야 하는 것

* `TArray`, `TMap`, `TSet`의 사용 기준을 설명할 수 있다.
* `USTRUCT`, `TSubclassOf`, 인터페이스, 델리게이트를 역할에 따라 고를 수 있다.
* UObject 수명과 GC 추적 경로를 고려해 참조를 설계할 수 있다.
* 자산 참조, 데이터 에셋, 모듈, 서브시스템을 프로젝트 구조 관점에서 배치할 수 있다.

## 추천 읽기 순서

1. [문자열 시스템 개요](/architecture/string-overview)
2. [FString, FName, FText](/architecture/fstring-fname-ftext)
3. [컨테이너 개요](/containers/overview)
4. [TArray](/containers/tarray)
5. [TMap과 TSet](/containers/tmap-and-tset)
6. [구조체](/reflection/structs)
7. [델리게이트 개요](/delegates/overview)
8. [동적 델리게이트와 멀티캐스트](/delegates/dynamic-and-multicast)
9. [TSubclassOf와 인터페이스](/reflection/tsubclassof-and-interfaces)
10. [오브젝트 처리와 가비지 컬렉션](/reflection/object-handling-and-gc)
11. [스마트 포인터](/reflection/smart-pointers)
12. [언리얼 아키텍처 개요](/architecture/overview)
13. [모듈과 API 지정자](/architecture/modules)
14. [자산 로딩과 자산 참조](/architecture/asset-loading-and-references)
15. [데이터 에셋과 데이터 검증](/architecture/data-assets-and-validation)
16. [서브시스템과 태스크](/architecture/subsystems-and-tasks)
17. [설정 파일, 커맨드라인, 패키지 버전 관리](/architecture/config-and-versioning)
18. [콘솔 변수와 콘솔 명령](/architecture/console-and-commands)
19. [Core Redirects](/architecture/core-redirects)
20. [프로그래밍 도구](/development-setup/programming-tools)

## Common Mistakes

* 초급 문서를 건너뛰고 `Asset Manager`나 `Subsystem`부터 이해하려 한다.
* 컨테이너, 인터페이스, 델리게이트를 모두 "비슷한 연결 도구"로만 뭉뚱그린다.
* UObject 수명 문제를 일반 C++ 스마트 포인터 감각으로만 해결하려 한다.

## Related Topics

* [초급 과정](/beginner-course)
* [심화 과정](/advanced-course)
