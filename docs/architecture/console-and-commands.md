---
sidebar_position: 3
---

# 콘솔 변수와 콘솔 명령

## Summary

콘솔 변수와 콘솔 명령은 디버그, 튜닝, 런타임 실험을 위한 언리얼의 표준 제어 인터페이스다. 설정 파일보다 빠르고, UI를 만들기 전에도 기능 토글을 즉시 확인할 수 있다.

## 포함된 공식 주제

* `Console Variables and Commands`
* `Console Variables Reference`
* `Console Commands Reference`

## When You Use This

렌더링 옵션, AI 디버그 플래그, 개발자용 기능 토글, 테스트용 명령을 빠르게 만들고 싶을 때 읽는다.

## Core Concept

콘솔 변수는 값이 있는 스위치이고, 콘솔 명령은 실행 행위 자체를 노출한다. 둘 다 개발 편의성에 매우 유용하지만, 사용자 노출 범위와 빌드별 보안성을 구분해야 한다.

## Example

```cpp
static TAutoConsoleVariable<int32> CVarCombatDebug(
    TEXT("mygame.Combat.Debug"),
    0,
    TEXT("Enable combat debug drawing")
);
```

## Explanation

이 변수는 런타임 중 `mygame.Combat.Debug 1` 같은 식으로 값을 바꿀 수 있다. 콘솔 명령은 `Exec` 함수나 명령 등록을 통해 별도 액션을 노출할 수 있고, 레벨 디버그나 테스트 루틴 실행에 자주 쓴다.

## Common Mistakes

* 디버그용 콘솔 명령을 배송 빌드에서도 그대로 열어 둔다.
* 콘솔 변수 값을 저장용 설정처럼 사용해 영속성을 기대한다.

## Related Topics

* [설정 파일과 커맨드라인](/docs/architecture/config-and-versioning)
* [모듈과 API 지정자](/docs/architecture/modules)
