---
sidebar_position: 10
---

# 심화 과정 안내

## Summary

심화 과정은 공식 문서 요약보다 한 단계 더 들어가, Unreal 리플렉션 시스템의 내부 구조와 실전 설계 판단을 다루는 영역이다. 이 파트에는 엔진 소스 기반 해설, 직접 작성한 아티클, 버전 차이를 포함한 주제별 분석 문서를 모으는 것을 목표로 한다.

## When You Use This

`UCLASS`, `UPROPERTY`, `UFUNCTION`의 기본 사용법은 이미 익혔고, 이제 UHT가 실제로 무엇을 생성하는지, 왜 어떤 설계가 더 안전한지, 엔진 내부가 어떤 제약을 만드는지까지 이해하고 싶을 때 읽는다.

## Core Concept

심화 과정은 "키워드 사용법"보다 "엔진이 왜 그렇게 동작하는가"에 초점을 둔다. 따라서 단순 문법 설명보다 생성 코드, 런타임 타입 정보, 직렬화 경로, 가비지 컬렉션 추적 구조, 에디터 확장 포인트 같은 내부 메커니즘이 중심이 된다.

## 이 과정에 들어올 주제

* `UnrealHeaderTool`과 `generated.h`가 실제로 만드는 코드
* `UClass`, `UFunction`, `FProperty`가 런타임에서 보관하는 정보
* 리플렉션과 직렬화, 복제, GC의 연결 구조
* Details 패널 커스터마이징과 메타데이터 설계 패턴
* 엔진 소스를 읽으며 정리한 실전 설계 사례

## 먼저 알고 있어야 할 것

심화 글은 아래 내용을 이미 이해하고 있다는 전제로 작성하는 편이 좋다.

* [리플렉션 시스템 개요](/reflection/overview)
* [리플렉션 매크로 읽는 법](/reflection/macro-anatomy)
* [UPROPERTY와 프로퍼티 지정자](/reflection/properties)
* [UCLASS와 클래스 메타데이터](/reflection/class-and-metadata-specifiers)
* [UFUNCTION과 함수 지정자](/reflection/ufunctions)

## 작성 원칙

심화 과정 문서는 공식 문서를 그대로 옮기지 않고, 엔진 동작을 직접 확인한 결과와 실전 코드 패턴을 바탕으로 작성하는 편이 좋다. 버전 차이가 있는 내용은 반드시 버전 범위를 표시하고, 가능하면 관련 헤더나 모듈 경로까지 함께 적어 두는 것이 안전하다.

## Related Topics

* [리플렉션 시스템 개요](/reflection/overview)
* [오브젝트 처리와 가비지 컬렉션](/reflection/object-handling-and-gc)
* [스마트 포인터](/reflection/smart-pointers)
