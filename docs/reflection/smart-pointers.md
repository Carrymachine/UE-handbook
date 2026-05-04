---
sidebar_position: 9
---

# 스마트 포인터

## Summary

Unreal의 스마트 포인터 라이브러리는 주로 UObject가 아닌 일반 C++ 타입을 위한 소유권 모델이다. `TSharedPtr`, `TSharedRef`, `TWeakPtr`는 강력하지만 UObject 수명 관리와는 별개라는 점이 가장 중요하다.

## 포함된 공식 주제

* `Unreal Smart Pointer Library`
* `Shared Pointers`
* `Shared References`
* `Weak Pointers`

## When You Use This

UI 모델, 비UObject 서비스, 파서 결과물처럼 순수 C++ 객체를 여러 곳에서 공유해야 할 때 읽는다.

## Core Concept

`TSharedPtr`는 nullable 공유 소유권, `TSharedRef`는 null이 될 수 없는 공유 참조, `TWeakPtr`는 순환 참조를 끊거나 생존 여부만 확인하는 약한 참조다. 이들은 레퍼런스 카운팅 기반이며, UObject GC와는 다른 체계다.

## Example

```cpp
TSharedPtr<FInventoryViewModel> ViewModel = MakeShared<FInventoryViewModel>();
TWeakPtr<FInventoryViewModel> WeakViewModel = ViewModel;
```

## Explanation

이 패턴은 Slate, 에디터 도구, 순수 C++ 데이터 모델에서 자주 보인다. 반대로 UObject를 같은 방식으로 감싸면 언리얼의 GC 모델과 충돌하므로, UObject는 `TObjectPtr` 계열로 생각하는 편이 맞다.

## Common Mistakes

* UObject까지 `TSharedPtr`로 관리하려 한다.
* 약한 포인터를 잠그기 전에 항상 유효성을 확인해야 한다는 점을 잊는다.

## Related Topics

* [오브젝트 포인터](/docs/object-pointers)
* [오브젝트 처리와 가비지 컬렉션](/docs/reflection/object-handling-and-gc)
