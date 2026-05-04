---
sidebar_position: 10
---

# 설정 파일, 커맨드라인, 패키지 버전 관리

## Summary

프로젝트 설정은 에디터 UI 안에만 있지 않다. `ini` 기반 설정, 커맨드라인 인자, 자산/패키지 버전 전략까지 포함해 배포와 호환성을 다루는 층이 따로 존재한다.

## 포함된 공식 주제

* `Configuration Files`
* `Command-Line Arguments`
* `Command-Line Arguments Reference`
* `Versioning of Assets and Packages`

## When You Use This

기능 플래그를 설정 파일에서 읽고 싶거나, 실행 인자로 모드를 바꾸거나, 자산 포맷 변경 후 호환성 정책을 세워야 할 때 읽는다.

## Core Concept

설정 파일은 영속 설정, 커맨드라인은 실행 시점 오버라이드, 패키지 버전 관리는 데이터 호환성 문제를 담당한다. 셋을 섞지 않고 역할별로 나누는 것이 중요하다.

## Example

```cpp
UCLASS(Config=Game, DefaultConfig)
class UEPROJECT_API UMyRuntimeSettings : public UObject
{
    GENERATED_BODY()

public:
    UPROPERTY(Config, EditAnywhere, Category = "Debug")
    bool bEnableVerboseLogs = false;
};
```

## Explanation

`Config` 프로퍼티는 `DefaultGame.ini` 같은 설정 파일과 연결된다. 여기에 더해 `FParse::Param(FCommandLine::Get(), TEXT("MyFlag"))` 형태로 실행 인자를 읽으면, 저장형 설정과 일회성 실행 옵션을 분리해서 쓸 수 있다.

## Common Mistakes

* 매번 실행할 때 달라지는 테스트 값을 `ini`에만 의존해 관리한다.
* 자산 포맷이 바뀌었는데 버전 전략 없이 기존 데이터를 그대로 열려고 한다.

## Related Topics

* [콘솔 변수와 콘솔 명령](/architecture/console-and-commands)
* [Core Redirects](/architecture/core-redirects)

