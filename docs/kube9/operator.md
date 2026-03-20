# Kube9 Operator

::: warning Status
In Development - Active Preview
:::

## Overview

The Kube9 Operator is an open source Kubernetes operator that runs in your cluster. It performs scheduled Well-Architected Framework validation, exposes operator status for clients such as the VS Code extension, and enables optional Pro-tier reporting when an API key is configured.

## Key Features

### ✅ Free Tier (No API Key)
- Scheduled Well-Architected Framework validation
- Point-in-time assessment outputs
- Local operator status exposure through ConfigMap
- Cluster tier and health signaling for client tools
- No external communication required

### ✨ Pro Tier (With API Key)
- All Free tier features
- Operator registration and scheduled reporting to kube9-server
- Sanitized telemetry flow for enhanced insights
- Enables advanced features in connected clients

### 🔄 ArgoCD Awareness
The operator can detect ArgoCD installation state and publish that status so connected tools can conditionally enable GitOps-focused views.

## How It Works

1. **Runs inside your cluster** to access Kubernetes state securely.
2. **Performs scheduled checks** and computes operator status.
3. **Publishes status to ConfigMap** for local consumers.
4. **Reports outbound only (Pro tier)** when API key-based integration is enabled.

## Installation

```bash
# Free tier (recommended)
helm repo add kube9 https://charts.kube9.io
helm repo update
helm install kube9-operator kube9/kube9-operator \
  --namespace kube9-system \
  --create-namespace
```

```bash
# Pro tier (with API key)
helm install kube9-operator kube9/kube9-operator \
  --set apiKey=kdy_prod_YOUR_KEY_HERE \
  --namespace kube9-system \
  --create-namespace
```

## Configuration

The operator is configured through Helm values.

| Setting | Description | Default |
|---|---|---|
| `apiKey` | API key for Pro tier | `""` |
| `logLevel` | Log verbosity | `info` |
| `statusUpdateIntervalSeconds` | Status refresh interval | `60` |
| `serverUrl` | Pro reporting endpoint | `https://api.kube9.dev` |
| `argocd.autoDetect` | Auto-detect ArgoCD | `true` |
| `argocd.namespace` | ArgoCD namespace | `argocd` |
| `argocd.detectionInterval` | Detection interval (hours) | `6` |

## Privacy & Data

::: tip Complete Privacy
Free tier operation stays inside your cluster. Pro tier sends sanitized data outbound only.
:::

- **Location:** Runs inside your Kubernetes cluster
- **Access:** Uses Kubernetes RBAC to read required cluster state
- **Privacy:** Local checks by default; outbound reporting only when Pro tier is enabled
- **Open Source:** Completely free with full source code transparency

## Links

- [GitHub Repository](https://github.com/alto9/kube9-operator)
- [Helm Chart](https://github.com/alto9/charts)
- [Report Issues](https://github.com/alto9/kube9-operator/issues)

