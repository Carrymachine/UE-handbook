---
sidebar_position: 2
---

# IDE 설정과 선택

## Summary

Unreal은 Windows에서 Visual Studio를 기본 경로로 가정하고, macOS에서는 Xcode, 가벼운 편집기로는 VS Code를 지원한다. 중요한 것은 에디터 자체보다 Unreal이 기대하는 컴파일러와 프로젝트 파일 생성 흐름을 맞추는 것이다.

## 포함된 공식 주제

* `Setting Up Visual Studio`
* `UnrealVS Extension`
* `Visual Studio Tips and Tricks`
* `Modernized Xcode Workflow`
* `Setting Up VS Code for Unreal Engine`

## When You Use This

프로젝트는 생성되는데 IntelliSense, 빌드, 디버깅, 프로젝트 파일 갱신이 불안정할 때 읽는다.

## Core Concept

UE 5.6 기준으로 Windows 개발은 Visual Studio 2022 17.8 이상이 기본이다. UE 5.3은 VS 2019도 지원했지만, 5.4 이상 흐름에서는 VS 2022 기준으로 생각하는 편이 안전하다.

Visual Studio는 가장 깊은 통합을 제공하고, Xcode는 macOS 표준 흐름에 맞는다. VS Code는 가볍지만 프로젝트 파일을 별도로 생성하고 빌드 구성을 더 주의해서 맞춰야 한다. `UnrealVS`는 선택 사항이지만 타깃 전환과 명령 실행을 단축해 준다.

## Example

```powershell
GenerateProjectFiles.bat -vscode
```

## Explanation

VS Code를 쓰는 경우 위처럼 프로젝트 파일을 VS Code 형식으로 다시 생성해야 한다. Visual Studio에서는 설치 단계에서 Unreal 관련 워크로드와 SDK를 맞추는 일이 더 중요하고, Xcode는 엔진이 생성한 워크스페이스를 기준으로 열어야 빌드 타깃이 어긋나지 않는다.

## Common Mistakes

* IDE를 최신 버전으로만 설치하고 Unreal이 요구하는 SDK와 워크로드를 빼먹는다.
* VS Code에서 기본 빌드 구성을 그대로 둔 채 `Editor` 대신 다른 타깃을 빌드한다.

## Related Topics

* [개발 환경 개요](/development-setup/overview)
* [코드 생성과 컴파일 흐름](/development-setup/code-workflow)
* [Live Coding](/development-setup/live-coding)

