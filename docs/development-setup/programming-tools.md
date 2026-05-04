---
sidebar_position: 5
---

# 프로그래밍 도구

## Summary

Unreal의 프로그래밍 도구 문서는 코드 작성 자체보다 대규모 프로젝트 운영에 필요한 지원 기능을 다룬다. 특히 메모리 최적화와 계측 도구는 프로젝트가 커질수록 가치가 커진다.

## 포함된 공식 주제

* `Programming Tools`
* `Sparse Class Data`
* `Low-Level Memory Tracker`

## When You Use This

프로젝트 규모가 커져 기본 클래스의 메모리 낭비가 보이거나, 런타임 할당 패턴을 추적해야 할 때 읽는다.

## Core Concept

`Sparse Class Data`는 모든 인스턴스에 항상 둘 필요 없는 클래스 기본값을 분리해 메모리를 줄이는 기능이다. `Low-Level Memory Tracker`는 어떤 시스템이 메모리를 얼마나 쓰는지 태그 기반으로 추적하는 도구다.

이 두 기능은 초반 학습용 프로젝트보다 시스템성 코드나 엔진 확장, 대규모 게임 코드에서 더 자주 등장한다. 그래서 "지금 당장 많이 쓰는 기능"이라기보다 "언리얼이 왜 대형 프로젝트에 강한가"를 보여 주는 문서로 이해하면 좋다.

## Example

```cpp
UCLASS(SparseClassDataTypes = MyActorSparseData)
class UEPROJECT_API AMyActor : public AActor
{
    GENERATED_BODY()
};
```

## Explanation

위와 같은 형태는 클래스 메타데이터 차원에서 스파스 데이터를 분리하겠다는 뜻이다. 일상적인 Actor 작성에서는 자주 보이지 않지만, 인스턴스 수가 많은 타입의 메모리 부담을 줄일 때 검토할 수 있다.

## Common Mistakes

* 학습 초기에 모든 클래스에 스파스 데이터를 도입해야 한다고 생각한다.
* 메모리 사용량을 추측으로만 판단하고 추적 도구를 먼저 켜 보지 않는다.

## Related Topics

* [개발 환경 개요](/docs/development-setup/overview)
* [코딩 표준](/docs/coding-standard)
