# Kube9 VS Code Extension

::: info Status
MVP - Available Now
:::

## Overview

The Kube9 VS Code extension is a desktop application with an embedded AI agent for intelligent Kubernetes cluster management. It provides real-time cluster visualization, intelligent analysis, and troubleshooting assistance directly within VS Code.

## Key Features

### 🤖 Embedded AI Agent
Local AI agent provides intelligent analysis and troubleshooting without sending data externally. Ask questions, get explanations, and receive actionable recommendations.

### 🗂️ Multi-Cluster Management
Import and manage multiple kubeconfig files. Switch between clusters with ease and view all your Kubernetes environments in one place.

### 👁️ Real-Time Visualization
View pods, services, deployments, and other resources in real-time with an intuitive tree view interface.

### 🔍 Context-Aware Analysis
Click any resource to get instant AI analysis. Understand why deployments fail, why pods consume high resources, and get actionable recommendations.

### 🔐 Privacy-First Design
All cluster data stays local - your kubeconfig, resource names, and cluster information never leave your machine. The embedded AI agent runs entirely within VS Code.

### 🔄 ArgoCD Integration
Seamless integration with ArgoCD for enhanced drift detection and GitOps visibility.

### ✅ Well-Architected Framework
When paired with the Kube9 Operator, view comprehensive Well-Architected Framework assessments directly in VS Code.

## Installation

### For Users

1. Open VS Code
2. Go to Extensions (`Ctrl/Cmd + Shift + X`)
3. Search for "kube9"
4. Click Install

### For Developers

```bash
# Clone the repository
git clone https://github.com/alto9/kube9-vscode.git
cd kube9-vscode

# Install dependencies (requires Node.js 22+)
npm install

# Compile TypeScript
npm run compile

# Press F5 in VS Code to open Extension Development Host
```

## Configuration

Configure Kube9 in your VS Code settings:

```json
{
  "kube9.debugMode": false,
  "kube9.refreshInterval": 5000
}
```

## First Steps

1. Open the kube9 view in the Activity Bar (sidebar)
2. Import your kubeconfig file: `Ctrl/Cmd + Shift + P` → "kube9: Import kubeconfig"
3. Select a cluster from the kube9 sidebar
4. Start exploring your cluster or ask AI for analysis

## Links

- [GitHub Repository](https://github.com/alto9/kube9-vscode)
- [Report Issues](https://github.com/alto9/kube9-vscode/issues)

