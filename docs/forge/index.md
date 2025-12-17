# Forge

::: info Status
MVP - VS Code Extension & MCP Server
:::

## Overview

Forge is a comprehensive toolkit for structured context engineering in AI-assisted development. It provides both a VSCode extension and an MCP server to help engineers create well-structured prompts with complete context.

Traditional prompting can be ad-hoc and miss important context. Forge helps you:

- **Build Comprehensive Context** - Systematically gather all relevant information
- **Maintain Consistency** - Use standardized formats across your project
- **Improve AI Accuracy** - Provide complete context for better AI-generated code
- **Create Traceable Documentation** - Link decisions, features, specs, and tasks
- **Reduce Rework** - Get it right the first time with well-structured prompts

## What is Context Engineering?

Context engineering is the practice of systematically designing, organizing, and maintaining the information you provide to AI assistants. By using Forge's session-driven workflow, you ensure that every implementation story has access to the complete context it needs - from user requirements (Features) to technical specifications (Specs) to implementation guidance (Contexts).

## Key Features

### Session-Driven Design
Track design changes during focused sessions. Start with a problem statement, make changes, then distill into actionable stories.

### Structured File Formats
Use Gherkin for features, Nomnoml for diagrams, and standardized frontmatter for all file types. Consistency across your entire project.

### Intelligent Linkages
Connect features to specs, specs to contexts, and everything to actors. Forge follows these links to gather complete context automatically.

### Forge Studio
Full-featured visual interface for creating and managing all Forge files. Create nested folders, edit files, and manage sessions all in one place.

### Minimal Stories
Break work into <30 minute implementation stories. Each story includes complete context from linked features, specs, and guidance.

### MCP Integration
Model Context Protocol server exposes Forge capabilities to AI assistants like Claude Desktop and Cursor.

## Installation

### For Users
1. Open VS Code
2. Go to Extensions (`Ctrl/Cmd + Shift + X`)
3. Search for "forge"
4. Click Install

### For Developers

```bash
# Clone the repository
git clone https://github.com/alto9/forge.git
cd forge

# Install dependencies
npm install

# Run in development mode
# Press F5 in VS Code to open Extension Development Host
```

## Links

- [GitHub Repository](https://github.com/alto9/forge)
- [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=alto9.forge)

