---
sidebar_position: 4
---

# 코드 생성과 컴파일 흐름

## Summary

Unreal의 코드 워크플로는 클래스 생성, 모듈 위치, 타깃 빌드, 에디터 반영까지 한 흐름으로 묶여 있다. 이 흐름을 이해하면 새 클래스를 추가할 때마다 프로젝트가 흔들리는 문제를 줄일 수 있다.

## 포함된 공식 주제

* `Managing Game Code`
* `C++ Class Wizard`
* `Compiling Game Projects`

## When You Use This

Blueprint 프로젝트에 C++를 처음 추가하거나, 새 클래스를 만든 뒤 파일 위치와 빌드 대상을 정리할 때 읽는다.

## Core Concept

`C++ Class Wizard`는 새 클래스를 올바른 모듈과 폴더에 배치하는 가장 안전한 시작점이다. Unreal 프로젝트는 `Source/<ModuleName>/` 아래에서 모듈 단위로 관리되며, 실제 빌드는 UnrealBuildTool이 `.Build.cs`와 `.Target.cs`를 읽어 구성한다.

컴파일은 IDE에서 해도 되고 에디터의 `Compile` 버튼으로 해도 되지만, 결국 중요한 것은 어떤 타깃을 빌드했는지다. 에디터 안에서 변경을 확인하려면 대개 `Editor` 타깃이 기준이 된다.

## Example

```csharp
public class MyGame : ModuleRules
{
    public MyGame(ReadOnlyTargetRules Target) : base(Target)
    {
        PublicDependencyModuleNames.AddRange(new[] {"Core", "CoreUObject", "Engine"});
    }
}
```

## Explanation

이 파일은 모듈의 빌드 의존성을 정의한다. 새 클래스를 추가해도 포함 모듈이 맞지 않으면 헤더를 못 찾거나 링크 단계에서 실패한다. Unreal C++에서 파일 배치와 의존성 정의는 문법만큼 중요하다.

## Common Mistakes

* 새 클래스를 `Source` 바깥에 두고 왜 빌드에 안 잡히는지 혼란스러워한다.
* 에디터에서 테스트하면서 `ProjectNameEditor` 대신 다른 타깃을 빌드한다.

## Related Topics

* [IDE 설정과 선택](/docs/development-setup/editors)
* [Live Coding](/docs/development-setup/live-coding)
* [모듈과 API 지정자](/docs/architecture/modules)
