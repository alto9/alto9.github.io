# Forge

::: info Status
MVP - VS Code Extension & MCP Server
:::

## Overview

Forge is a toolkit for structured context engineering in AI-assisted development. It helps teams move from ad-hoc prompts to a session-driven workflow with linked features, specs, actors, and contexts.

## Key Features

### Session-Driven Design
Track feature changes in focused design sessions, then distill those sessions into implementation stories and tasks.

### Intelligent Linkages
Link features, specs, contexts, and actors so prompts include the right context automatically.

### Forge Studio
Use a visual interface to manage Forge files, nested folders, and session-aware editing workflows.

### Minimal Implementation Stories
Break work into focused stories that are small enough for fast, reliable AI-assisted implementation.

### MCP Integration
Expose Forge capabilities through MCP so AI assistants can consume structured context.

## Installation

### For Users
1. Open VS Code.
2. Go to Extensions (`Ctrl/Cmd + Shift + X`).
3. Search for `forge studio`.
4. Click Install.

### For Developers

```bash
git clone https://github.com/alto9/forge.git
cd forge
npm install
npm run build -w forge
# Press F5 in VS Code to open Extension Development Host
```

### Install from VSIX

```bash
code --install-extension forge-0.1.0.vsix
```

## Links

- [GitHub Repository](https://github.com/alto9/forge)
- [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=alto9.forge)
- [Using AI Agents with Forge](https://github.com/alto9/forge/blob/main/docs/USING-AI-AGENTS.md)

