---
sidebar_position: 8
---

# FString, FName, FText

## Summary

세 타입은 모두 문자열처럼 보이지만 역할이 완전히 다르다. "가공", "식별", "표시"를 구분해서 써야 언리얼 코드가 자연스럽고 성능도 안정적이다.

## 포함된 공식 주제

* `FString`
* `FName`
* `FText`

## When You Use This

같은 값을 어떤 곳에서는 UI에 보여 주고, 어떤 곳에서는 키로 쓰고, 어떤 곳에서는 파싱해야 할 때 어떤 타입을 써야 할지 고민된다면 읽는다.

## Core Concept

`FString`은 수정 가능한 일반 문자열이다. `FName`은 비교와 식별에 유리한 이름 타입으로, 태그나 소켓 이름, 데이터 키에 잘 맞는다. `FText`는 로컬라이제이션을 염두에 둔 표시용 텍스트라서 UI 문장에 사용해야 한다.

## Example

```cpp
FString SaveSlotName = TEXT("Profile01");
FName SocketName = TEXT("Muzzle");
FText DisplayName = NSLOCTEXT("Weapon", "RifleName", "Rifle");
```

## Explanation

저장 슬롯 이름은 조작 가능하므로 `FString`, 소켓 이름은 식별이 목적이므로 `FName`, 화면 표시 문구는 번역과 문화권 처리 대상이므로 `FText`가 자연스럽다. 이 구분을 지키면 코드 의도가 타입에 드러난다.

## Common Mistakes

* UI 문자열을 모두 `FString`으로만 처리해 로컬라이제이션 경로를 닫아 버린다.
* `FName`을 사람이 읽는 문장처럼 가공하려 한다.

## Related Topics

* [문자열 시스템 개요](/architecture/string-overview)
* [프로퍼티](/reflection/properties)

