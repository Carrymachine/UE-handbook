---
sidebar_position: 5
---

# 데이터 에셋과 데이터 검증

## Summary

`UDataAsset`와 `UPrimaryDataAsset`는 코드와 별도로 게임 데이터를 다루는 언리얼식 방법이다. 여기에 데이터 검증을 붙이면 디자이너가 만든 에셋의 오류를 빌드 전에 빨리 잡을 수 있다.

## 포함된 공식 주제

* `Data Assets`
* `Data Validation`

## When You Use This

아이템 정의, 스킬 표, 몬스터 설정처럼 런타임 로직과 분리된 데이터를 다뤄야 할 때 읽는다.

## Core Concept

데이터 에셋은 "코드가 소비하는 에디터 제작 데이터"를 표현한다. 검증 시스템은 이 데이터가 비어 있거나 범위를 벗어나거나 잘못 참조했는지 자동 검사하게 만든다.

## Example

```cpp
UCLASS()
class UEPROJECT_API UWeaponData : public UPrimaryDataAsset
{
    GENERATED_BODY()

public:
    UPROPERTY(EditAnywhere, Category = "Weapon")
    int32 Damage = 10;
};
```

## Explanation

이런 타입은 블루프린트 클래스보다 "정적 정의 데이터"에 가깝다. 실제 전투 중 바뀌는 상태까지 데이터 에셋에 저장하는 것이 아니라, 상태는 런타임 객체에 두고 데이터 에셋은 기본 설정값과 참조 정보를 들고 있게 하는 패턴이 일반적이다.

## Common Mistakes

* 데이터 에셋을 런타임 상태 저장소처럼 사용한다.
* 필수 자산 참조가 비어 있어도 검증 단계를 따로 만들지 않는다.

## Related Topics

* [자산 로딩과 자산 참조](/architecture/asset-loading-and-references)
* [프로퍼티](/reflection/properties)

