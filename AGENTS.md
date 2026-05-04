# AGENTS.md

## Project Overview

This repository is a Korean Unreal Engine 5 C++ handbook site inspired by the structure and reading experience of https://typescript-kr.github.io/.

The goal is not to reproduce Epic Games documentation. The goal is to create a beginner-friendly, structured Korean handbook that explains Unreal Engine 5 C++ concepts, syntax patterns, engine-specific macros, gameplay framework concepts, and practical coding workflows.

The target reader is a Korean learner who already has some programming experience but is new to Unreal Engine C++.

---

## Primary Reference Model

Use https://typescript-kr.github.io/ as the product reference.

Replicate its strengths:

* Handbook-style progression
* Clear chapter-based navigation
* Short conceptual pages
* Practical code examples
* Korean-first explanations
* Terminology consistency
* Beginner-friendly but technically accurate tone

Do not copy its content or structure verbatim.

---

## Content Language

* All explanations: Korean
* Code / API / identifiers: English

Examples:

UCLASS, UPROPERTY, UFUNCTION, AActor, BeginPlay, Tick, CreateDefaultSubobject

---

## Documentation Style

Prefer:

* Short paragraphs
* Concrete examples
* Step-by-step explanation
* Tables when useful
* Unreal-specific context

Avoid:

* Pure C++ theory without Unreal context
* Long introductions
* Copying official docs

---

## Tone

Use a direct, technical Korean tone.

Bad:
언리얼은 정말 멋진 엔진입니다!

Good:
Unreal C++의 클래스는 리플렉션 시스템에 등록되며, 이를 위해 UCLASS() 매크로가 필요하다.

---

## Source Accuracy Rules

Priority:

1. Epic official docs
2. Engine source code
3. Header comments
4. Trusted community sources
5. Interpretation

Default version:

* UE 5.3+
* Prefer UE 5.4+
* Mark version differences explicitly

---

## Copyright Rules

* Do not copy large sections from official docs
* Rewrite in original Korean
* API names are allowed

---

## Information Architecture

docs/
intro/
what-is-unreal-cpp.md
unreal-cpp-vs-standard-cpp.md
project-structure.md

cpp-basics-for-unreal/
classes.md
pointers.md
templates.md

unreal-object-system/
uobject.md
uclass.md
uproperty.md
ufunction.md
reflection.md
garbage-collection.md

gameplay-framework/
actor.md
pawn.md
character.md
controller.md
gamemode.md

lifecycle/
constructor.md
beginplay.md
tick.md

coding-patterns/
spawn-actor.md
line-trace.md
input.md
delegates.md

---

## Page Template

# Title

## Summary

2~4 sentence explanation

## When You Use This

When this appears in Unreal

## Core Concept

Main explanation

## Example

```
// MyActor.h
UCLASS()
class AMyActor : public AActor
{
    GENERATED_BODY()
};
```

## Explanation

Explain code

## Common Mistakes

* mistake 1
* mistake 2

## Related Topics

* links

---

## Code Rules

* Minimal
* UE5 compatible
* Realistic
* Prefer .h + .cpp pairs

Avoid fake APIs.

---

## Unreal C++ Conventions

* A: Actor
* U: UObject
* F: struct
* I: interface
* E: enum

Rules:

* PascalCase
* bPrefix for bool
* Use UPROPERTY for GC
* Use TObjectPtr in UE5
* Use CreateDefaultSubobject in constructor
* Avoid raw new/delete for UObject

---

## Terminology

Reflection → 리플렉션
Garbage Collection → 가비지 컬렉션
Actor → 액터
Component → 컴포넌트
Pawn → 폰
Character → 캐릭터
Controller → 컨트롤러
Replication → 리플리케이션
Property → 프로퍼티

---

## Navigation Rules

* Keep progressive flow
* Avoid forward dependency
* Link related topics

---

## Formatting Rules

* Markdown only
* Code blocks
* Tables where needed

---

## Content Priorities

1. Correctness
2. Clarity
3. Practical usage
4. Link quality
5. Conciseness

---

## Build Commands

pnpm install
pnpm dev
pnpm build
pnpm lint

(or npm/yarn depending on project)

---

## Validation Checklist

* Build success
* Navigation updated
* Korean natural
* Code valid
* Links valid
* No copyright violation

---

## Recommended First Pages

* intro/what-is-unreal-cpp.md
* intro/unreal-cpp-vs-standard-cpp.md
* unreal-object-system/uclass.md
* unreal-object-system/uproperty.md
* gameplay-framework/actor.md
* lifecycle/beginplay.md

---

## Do Not Do

* Do not create empty docs
* Do not copy official docs
* Do not oversimplify
* Do not treat Unreal C++ as pure C++

---

## Codex Behavior

When adding content:

1. Locate docs
2. Add minimal files
3. Include real examples
4. Update navigation
5. Validate build

When refactoring:

* Preserve meaning
* Improve structure
* Remove duplication
* Keep Korean natural

When adding new sections:

* Add concept
* Add example
* Add mistakes
* Add links

---
