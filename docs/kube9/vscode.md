# Kube9 VS Code Extension

::: info Status
MVP - Available Now
:::

## Overview

The Kube9 VS Code extension provides intelligent Kubernetes cluster management directly within VS Code. It offers real-time cluster visualization, context-aware analysis, and troubleshooting assistance for your clusters.

## Key Features

### 📊 Context-Aware Analysis
Intelligent cluster analysis and troubleshooting assistance. Understand your resources, diagnose deployment issues, and receive actionable recommendations.

### 🗂️ Multi-Cluster Management
Manage multiple clusters and contexts from one place. The extension uses your local kubeconfig and keeps all cluster data on your machine.

### 👁️ Real-Time Visualization
View pods, services, deployments, and other resources in real-time with an intuitive tree view interface.

### 🔍 Resource Details
Click any resource to get detailed information and analysis. Understand deployment status, pod health, resource consumption, and cluster state.

### 🔐 Privacy-First Design
Routine cluster operations use your kubeconfig and the Kubernetes API from your machine; manifests, resource names, and log content are not uploaded for normal management. The extension may emit **optional product telemetry** (governed by your VS Code / marketplace telemetry settings) for coarse feature usage and outcomes—never cluster names, kubeconfig paths, manifests, log lines, or API bodies. See the [extension README](https://github.com/alto9/kube9-vscode#privacy-and-product-telemetry).

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

### Optional: Install Kube9 Operator for Enhanced Monitoring

```bash
helm repo add kube9 https://charts.kube9.io
helm repo update
helm install kube9-operator kube9/kube9-operator \
  --namespace kube9-system \
  --create-namespace
```

## Configuration

Configure Kube9 in VS Code **Settings**. Common options:

```json
{
  "kube9.debugMode": false,
  "kube9.serverUrl": "https://api.kube9.io",
  "kube9.operatorNamespace": null,
  "kube9.timeout.connection": 10000,
  "kube9.timeout.apiRequest": 30000,
  "kube9.errors.showDetails": false,
  "kube9.errors.throttleWindow": 5000
}
```

- **`kube9.operatorNamespace`:** Leave unset for auto-detection, or set a string (all clusters) or an object mapping context name → namespace if the operator is not in the default location.
- **Operator features:** Assessment and operator health views are available when the kube9-operator is installed and its status ConfigMap is readable with your kubeconfig.

[Pod logs viewer](/kube9/features/pod-logs/) — stream and inspect pod logs inside VS Code.

## First Steps

1. Open **Kube9 Cluster Manager** in the Activity Bar, then the **Clusters** view.
2. Confirm your kubeconfig is available (default: `~/.kube/config`).
3. Expand a cluster and namespaces, or switch the active context from the tree.
4. Use context menus or the Command Palette for actions such as **View Logs**, assessments, ArgoCD sync, and port forwarding.

## Links

- [GitHub Repository](https://github.com/alto9/kube9-vscode)
- [Report Issues](https://github.com/alto9/kube9-vscode/issues)

