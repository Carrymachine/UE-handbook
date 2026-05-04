---
sidebar_position: 4
---

# Core Redirects

## Summary

클래스, 구조체, 패키지, 프로퍼티 이름을 바꿀 때 기존 에셋 참조를 살리는 장치가 `Core Redirects`다. 대규모 리팩터링에서 데이터 호환성을 지키는 핵심 도구다.

## 포함된 공식 주제

* `Core Redirects`

## When You Use This

C++ 타입이나 콘텐츠 경로를 바꾸려는 순간, 기존 블루프린트와 에셋이 깨지지 않게 유지해야 한다면 읽는다.

## Core Concept

리다이렉트는 "예전 이름을 만나면 새 이름으로 해석하라"는 규칙을 엔진에 알려 주는 설정이다. 코드 리팩터링 자체보다 데이터 마이그레이션 관점에서 이해하는 것이 중요하다.

## Example

```ini
[/Script/Engine.Engine]
+ActiveClassRedirects=(OldClassName="/Script/MyGame.OldEnemy",NewClassName="/Script/MyGame.NewEnemy")
```

## Explanation

위와 같은 규칙을 두면 예전 클래스 이름을 참조하는 자산이 새 클래스로 해석된다. 이름 변경 직후에는 매우 유용하지만, 장기간 누적되면 프로젝트 히스토리를 복잡하게 만들 수 있으므로 정리 시점도 같이 계획해야 한다.

## Common Mistakes

* 모듈 경로까지 포함한 전체 이름을 맞추지 않아 리다이렉트가 동작하지 않는다.
* 일시적 마이그레이션 규칙을 영구 설정처럼 방치한다.

## Related Topics

* [모듈과 API 지정자](/architecture/modules)
* [설정 파일과 커맨드라인](/architecture/config-and-versioning)

