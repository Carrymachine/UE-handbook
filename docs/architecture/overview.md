---
sidebar_position: 1
---

# 언리얼 아키텍처 개요

## Summary

언리얼 아키텍처 섹션은 "코드를 어디에 두고, 자산을 어떻게 참조하고, 런타임 시스템을 어떻게 나누는가"를 다룬다. 이 구간을 이해하면 프로젝트가 커져도 구조를 통제하기 쉬워진다.

## 포함된 공식 주제

* `Unreal Architecture`

## When You Use This

게임플레이 로직은 작성할 수 있는데 모듈 분리, 자산 참조 방식, 설정 파일, 서브시스템 같은 구조적 판단이 어려울 때 읽는다.

## Core Concept

이 챕터의 공통 질문은 세 가지다. 첫째, 이 코드는 어느 모듈에 들어가야 하는가. 둘째, 이 자산은 즉시 로드할 것인가 지연 참조할 것인가. 셋째, 이 시스템은 액터에 둘 것인가 서브시스템에 둘 것인가.

Unreal은 이런 질문에 대해 이미 모듈, Asset Manager, Subsystem, Config, Console Variable 같은 기본 도구를 제공한다. 아키텍처 문서는 이 도구들의 역할 분담을 익히는 과정이다.

## Example

```csharp
PublicDependencyModuleNames.AddRange(
    new[] {"Core", "CoreUObject", "Engine", "DeveloperSettings"}
);
```

## Explanation

구조 설계는 결국 의존성 설계다. 어떤 모듈을 참조하는지, 어떤 시스템이 초기화 책임을 갖는지, 어떤 자산을 경로로만 들고 있는지가 유지보수성과 로딩 성능을 좌우한다.

## Common Mistakes

* 편한 곳에 코드를 몰아넣다가 모듈 경계가 사라진다.
* 모든 자산을 하드 참조해 초기 로딩 비용을 키운다.

## Related Topics

* [자산 로딩과 자산 참조](/docs/architecture/asset-loading-and-references)
* [모듈과 API 지정자](/docs/architecture/modules)
* [서브시스템과 태스크](/docs/architecture/subsystems-and-tasks)
