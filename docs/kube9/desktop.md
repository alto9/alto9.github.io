# Kube9 Desktop

::: info Status
In Development - Coming Soon
:::

## Overview

Kube9 Desktop is a cross-platform desktop application for AI-powered Kubernetes management. It provides an intelligent AI agent that uses historical cluster data to deliver expert Kubernetes guidance through your preferred AI provider.

## Key Features

### 🤖 AI Agent with Historical Context
Desktop Pro includes an embedded AI agent that examines your questions, retrieves relevant historical data from the operator, and builds context-rich prompts sent to your preferred AI provider (OpenAI, Anthropic, etc.). Get expert Kubernetes guidance with full historical context.

### 🎯 Your AI Provider
Works with your preferred AI provider - no vendor lock-in. You control your AI costs and provider choice. Bring your own API keys from OpenAI, Anthropic, or other providers.

### 📊 Intelligent Prompt Engineering
The Desktop AI agent automatically builds optimal prompts with relevant historical context. No manual data gathering required - the agent retrieves what's needed from your cluster's history.

### 🖥️ Cross-Platform IDE
Native desktop application that works on Windows, macOS, and Linux. Provides advanced cluster management beyond basic kubectl operations.

### 🔄 Operator Integration
Seamless integration with kube9-operator for automatic historical data access. The operator collects and stores cluster history, making it available to the AI agent.

### 🔐 Security & Privacy
Historical data is sanitized before storage. Zero-trust architecture maintained. All data stored securely with no sensitive cluster information exposed.

## How the AI Agent Works

1. **You Ask a Question**: Interact with the AI agent through conversational chat
   - "Why is my deployment failing?"
   - "How can I optimize this pod's resources?"
   - "What security issues exist in this namespace?"

2. **Agent Examines Your Request**: The Desktop AI agent analyzes your question to understand what information is needed

3. **Retrieves Historical Data**: The agent queries the operator for relevant historical data
   - Past events and errors
   - Resource usage trends
   - Configuration changes
   - Previous assessments

4. **Builds Context-Rich Prompt**: The agent constructs an optimal prompt that includes:
   - Your original question
   - Relevant historical context
   - Current cluster state
   - Kubernetes best practices

5. **Sends to Your AI Provider**: The prompt is sent to your configured AI provider (OpenAI, Anthropic, etc.)

6. **Returns Expert Guidance**: You receive Kubernetes expertise enhanced with your cluster's historical context

## Pricing

### Desktop Free Tier
**$0/month** - Free now, free forever

- Cross-Platform IDE
- Advanced Cluster Management
- Multi-Cluster Support
- AWS EKS Integration
- All VS Code Extension features

**AI Features:** None

### Desktop Pro Tier
**$20/month** (or $10/month with annual billing - 50% savings)

Everything in Desktop Free, plus:

- 🤖 **Conversational AI Agent** - Embedded AI with Kubernetes expertise
- 📊 **Historical Context** - AI agent accesses cluster history from operator
- 🎯 **Your AI Provider** - Works with OpenAI, Anthropic, and other providers
- 🛠️ **Kubernetes Agent Tools** - Specialized tools for Kubernetes operations
- 📧 **Email Support** - Direct support from the Kube9 team

### Enterprise Tier
**$40/month** (or $20/month with annual billing - 50% savings)

Everything in Desktop Pro, plus:

- 👥 **Team Collaboration** - Share configurations and assessments
- 📊 **Volume Discounts** - For teams of 26+ users
- 🎯 **Dedicated Support & SLA** - Priority support with guaranteed response times
- 💳 **Pay via Invoice** - Enterprise billing options

## Why Kube9 Desktop?

### Competitive Advantages

- **AI Agent with Historical Context**: Uses historical cluster data to enhance prompts, not just reactive queries on current state
- **Your AI Provider**: No vendor lock-in - use OpenAI, Anthropic, or any provider you prefer
- **Intelligent Prompt Engineering**: Agent automatically builds context-rich prompts - no manual data gathering
- **Cross-Platform**: Works on Windows, macOS, and Linux
- **Affordable Pricing**: $20/month vs. competitors' $25+/user/month pricing

### vs. Competitors

- **vs. Lens**: Desktop Pro AI agent with historical context vs. Lens Prism reactive queries. Lower pricing ($20/month vs. $25/user/month)
- **vs. Robusta/Komodor**: Desktop Pro provides AI agent with historical context at $20/month vs. enterprise-only pricing
- **vs. Cursor/Claude**: Desktop Pro AI agent specializes in Kubernetes with historical cluster data - complements your coding assistant
- **vs. Direct AI APIs**: Desktop Pro provides intelligent prompt engineering and historical context integration automatically

## Getting Started

::: tip Coming Soon
Kube9 Desktop is currently in development. Sign up for early access at [alto9.com](https://alto9.com)
:::

### Prerequisites

- Kubernetes cluster (1.24+)
- kube9-operator installed (for historical data access)
- AI provider API key (OpenAI, Anthropic, etc.)

### Installation

Desktop application installers will be available for:
- Windows (EXE installer)
- macOS (DMG installer)
- Linux (AppImage, DEB, RPM)

## Links

- [Alto9 Website](https://alto9.com) - Product information and early access signup
- [Pricing Details](https://alto9.com/pricing) - Full pricing and feature comparison
- [kube9-operator](https://github.com/alto9/kube9-operator) - Required for historical data access


