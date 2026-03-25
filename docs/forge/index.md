# Forge Studio

::: info Status
MVP — VS Code & Cursor extension
:::

## Overview

**Forge Studio** is a VS Code and Cursor extension for **context engineering** and **agentic development**. It helps teams keep product vision and technical contracts in `.forge/`, sync roadmaps with GitHub, and move issues through refinement, implementation, and review with explicit agents and skills.

## Key features

### Vision to implementation

Track direction in `vision.json`, maintain domain contracts under `.forge/` (knowledge map + SME-owned folders), and sync milestones and issues on GitHub. Agents read the same context so implementation stays aligned with what you documented.

### Staged agent workflow

Six phases—**Product Owner → Architect → Planner → Technical Writer → Engineer → Quality Assurance**—with clear handoffs. Slash commands and chat participants invoke each phase.

### Branch and quality discipline

- **Technical Writer** (`/refine-issue`): creates the **parent** issue branch from `main`, pushes it, and links it to the parent issue. Optional **sub-issues** exist only on GitHub—no separate git branch per sub-issue during refine.
- **Engineer** (`/build-from-github`): creates or checks out `feature/issue-<N>` for the issue being built (from `main` or the parent branch for sub-issues), links it to that issue, implements, then runs **unit-test**, **integration-test**, and **lint-test** from `.forge/skill_registry.json` until all pass **before** commit and PR.

### Domain subject matter experts

The Architect delegates to six domain agents—**Runtime**, **Business Logic**, **Data**, **Interface**, **Integration**, **Operations**—that own their `.forge/<domain>/` contracts.

### Commands and chat participants

Commands: `/architect-this`, `/plan-roadmap`, `/refine-issue`, `/build-from-github`, `/build-from-pr-review`, `/review-pr`. Chat: `@forge-help`, `@product-owner`, `@architect`, `@planner`, `@technical-writer`, `@engineer`, `@quality-assurance`.

## The workflow

Forge follows: **Market input → Vision → Knowledge → Roadmap → Refining → Building → Reviewing**.

[Agent and phase details →](/forge/workflow)

## Installation

### Marketplace

1. Open VS Code or Cursor.
2. Extensions (`Ctrl/Cmd + Shift + X`).
3. Search for **Forge Studio** (`alto9.forge`).
4. Install.

### Quick start (after install)

1. Open a repository.
2. Command Palette → **Forge: Initialize Cursor Agents**.
3. Confirm `~/.cursor/` (agents, commands, skills, hooks) and project `.forge/` (vision, `skill_registry.json`, schemas, knowledge map).

## Links

- [GitHub repository](https://github.com/alto9/forge)
- [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=alto9.forge)
