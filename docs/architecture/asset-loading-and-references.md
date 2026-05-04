---
sidebar_position: 2
---

# 자산 로딩과 자산 참조

## Summary

언리얼에서 자산을 참조하는 방식은 메모리 사용량과 로딩 타이밍을 직접 바꾼다. 하드 참조, 소프트 참조, 비동기 로딩, Asset Registry는 같은 문제를 다른 층위에서 푸는 도구다.

## 포함된 공식 주제

* `Asynchronous Asset Loading`
* `Referencing Assets`
* `Asset Registry`

## When You Use This

메시, 텍스처, 데이터 에셋을 필요한 시점에만 로드하고 싶거나, 에디터와 런타임에서 자산을 검색해야 할 때 읽는다.

## Core Concept

하드 참조는 편하지만 로딩 연쇄를 만들기 쉽다. 소프트 참조는 경로만 들고 있다가 필요할 때 로드할 수 있다. 비동기 로딩은 게임 스레드를 멈추지 않고 자산을 준비하게 해 주고, Asset Registry는 실제 로드 전에도 자산 메타데이터를 찾게 해 준다.

## Example

```cpp
UPROPERTY(EditAnywhere, Category = "Assets")
TSoftObjectPtr<UStaticMesh> PreviewMesh;

UAssetManager::GetStreamableManager().RequestAsyncLoad(
    PreviewMesh.ToSoftObjectPath(),
    FStreamableDelegate::CreateLambda([this]()
    {
        UStaticMesh* LoadedMesh = PreviewMesh.Get();
        MeshComponent->SetStaticMesh(LoadedMesh);
    })
);
```

## Explanation

여기서는 자산을 즉시 메모리에 올리지 않고 경로로만 들고 있다가, 필요 시점에 비동기로 로드한다. 메뉴 화면, 코스메틱 콘텐츠, 대규모 아이템 데이터처럼 한 번에 다 올리면 비싼 자산군에 특히 유용하다.

## Common Mistakes

* 런타임 경로 조회가 필요한 곳에서도 `ConstructorHelpers` 하드 참조만 사용한다.
* Asset Registry 검색 결과를 곧바로 로드된 UObject처럼 취급한다.

## Related Topics

* [오브젝트 포인터](/object-pointers)
* [데이터 에셋과 데이터 검증](/architecture/data-assets-and-validation)

