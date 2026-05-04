---
sidebar_position: 3
---

# TMap과 TSet

## Summary

`TMap`은 키로 값을 찾는 구조이고, `TSet`은 중복 없는 원소 집합이다. 배열보다 조회 의미가 더 중요할 때 선택한다.

## 포함된 공식 주제

* `TMap`
* `TSet`

## When You Use This

아이템 ID별 데이터, 태그 집합, 중복 없는 참조 목록처럼 검색과 유일성이 중요할 때 읽는다.

## Core Concept

`TMap`은 "무엇으로 찾을 것인가"가 먼저 정해진 자료구조다. `TSet`은 값 자체가 키 역할을 한다. 두 컨테이너 모두 순서를 계약처럼 믿지 않는 편이 좋고, 커스텀 타입을 키로 쓸 때는 비교와 해시 규칙을 같이 생각해야 한다.

## Example

```cpp
TMap<FName, int32> AmmoByType;
AmmoByType.Add(TEXT("Rifle"), 30);

TSet<FName> UnlockedTags;
UnlockedTags.Add(TEXT("DoubleJump"));
```

## Explanation

탄약처럼 이름으로 바로 찾는 데이터는 배열보다 `TMap`이 자연스럽다. 반대로 잠금 해제 기능 여부처럼 "존재하느냐"만 중요하면 `TSet`이 더 직접적이다.

## Common Mistakes

* `TMap`과 `TSet`의 순회 순서를 게임 로직의 기준으로 삼는다.
* 키 타입을 바꾸면서 해시 안정성을 전혀 검토하지 않는다.

## Related Topics

* [컨테이너 개요](/containers/overview)
* [FName](/architecture/fstring-fname-ftext)

