# Forge

::: info Status
MVP - VS Code & Cursor Extension
:::

## Overview

Forge is a toolkit for context engineering and agentic development. It helps teams maintain product vision, technical concepts, and roadmaps—then turns milestones into actionable, implementation-ready issues via a staged agent workflow.

## Key Features

### Vision to Implementation
Track product direction in `vision.json`, maintain domain contracts in `.forge/`, and sync roadmaps with GitHub milestones. Forge agents guide work from strategy through code review.

### Staged Agent Workflow
Six phases—Vision → Architect → Plan → Refine → Build → Review—with specialized agents at each step. Each agent has clear responsibilities and handoffs.

### Domain Subject Matter Experts
The Architect delegates to six domain subagents (Runtime, Business Logic, Data, Interface, Integration, Operations) that own their respective contract documents.

### Commands and Chat Participants
Run commands like `/architect-this`, `/plan-roadmap`, `/refine-issue`, `/build-from-github`, and `/review-pr`. Use chat participants such as `@forge`, `@forge-refine`, and `@forge-build-issue` for guided workflows.

## The Workflow

Forge follows a six-step flow: **Market Input → Vision → Knowledge → Roadmap → Implementation → Review**.

[Learn about each agent and phase →](/forge/workflow)

## Installation

### For Users
1. Open VS Code or Cursor.
2. Go to Extensions (`Ctrl/Cmd + Shift + X`).
3. Search for `forge studio`.
4. Click Install.

### Quick Start
1. Open a project in Cursor or VS Code.
2. Run **Forge: Initialize Agents** from the Command Palette (`Cmd/Ctrl+Shift+P`).
3. Forge creates `~/.cursor/` (agents, commands, skills) and `.forge/` (vision, project config, schemas) in your project.

## Links

- [GitHub Repository](https://github.com/alto9/forge)
- [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=alto9.forge)
