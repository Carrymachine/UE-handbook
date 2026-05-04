---
sidebar_position: 6
---

# 모듈과 API 지정자

## Summary

모듈은 Unreal C++ 프로젝트의 물리적, 논리적 경계다. 코드베이스가 커질수록 어떤 의존성을 어느 모듈에 둘지, 어떤 심볼을 외부에 공개할지 결정하는 일이 중요해진다.

## 포함된 공식 주제

* `Unreal Engine Modules`
* `Module API Specifiers`
* `Creating a Gameplay Module`

## When You Use This

런타임 코드와 에디터 코드를 분리하거나, 기능 단위를 플러그인/모듈 수준으로 나누고 싶을 때 읽는다.

## Core Concept

모듈은 `.Build.cs`로 의존성을 선언하고, 필요하면 별도 `Runtime`, `Editor`, `Developer` 성격으로 나눈다. `MYMODULE_API` 같은 API 지정자는 다른 모듈에서 심볼을 링크할 수 있게 내보내는 역할을 한다.

## Example

```cpp
UCLASS()
class MYGAME_API UInventoryComponent : public UActorComponent
{
    GENERATED_BODY()
};
```

## Explanation

같은 프로젝트 안의 클래스라도 모듈 경계를 넘는 순간 export/import 규칙이 필요하다. 작은 프로젝트에서는 잘 안 보이다가, 플러그인화하거나 에디터 확장을 만들면 바로 중요해진다.

## Common Mistakes

* 에디터 전용 의존성을 런타임 모듈에 넣어 패키징 문제를 만든다.
* 다른 모듈에서 써야 하는 공개 클래스를 export하지 않아 링크 오류를 만든다.

## Related Topics

* [코드 생성과 컴파일 흐름](/docs/development-setup/code-workflow)
* [언리얼 아키텍처 개요](/docs/architecture/overview)
