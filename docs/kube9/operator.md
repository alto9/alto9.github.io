# Kube9 Operator

::: warning Status
In Development - Early Preview
:::

## Overview

The Kube9 Operator is an open source Kubernetes operator that runs inside your cluster. It performs Well-Architected Framework validation, event tracking, and security scanning. All operator features are completely free and open source.

## Key Features

### ✅ Event Tracking (Available)
Comprehensive event recording system that captures Kubernetes events (Pod failures, node issues, OOMKills) and operator activities in a local SQLite database.

### 💻 CLI Query Interface (Available)
Powerful CLI for querying events with filtering by type, severity, date range, and Kubernetes objects. Supports JSON, YAML, and table output formats.

### ⏰ Event Retention (Available)
Automatic cleanup with configurable retention policies: 7 days for info/warning events, 30 days for error/critical events.

### 🔐 Security Scanning (Planned)
Comprehensive CVE vulnerability scanning with Trivy/Grype, plus configuration security analysis.

### 💡 Automated Recommendations (Planned)
Generate actionable recommendations for performance and cost efficiency based on Well-Architected Framework assessments.

### 👥 Team Collaboration (Planned)
Share assessment results, recommendations, and configurations across your team through custom resources.

## How It Works

1. **Operator runs in your cluster** - Full access to resources and real data
2. **Performs scheduled assessments** - Well-Architected Framework checks
3. **Stores results as CRDs** - Data stays in your cluster
4. **VS Code extension reads CRDs** - Displays assessments in your IDE

## Installation

```bash
# Using Helm (recommended)
helm repo add kube9 https://charts.kube9.io
helm repo update
helm install kube9-operator kube9/kube9-operator \
  --namespace kube9-system \
  --create-namespace

# Or using kubectl
kubectl apply -f https://github.com/alto9/kube9-operator/releases/latest/download/install.yaml
```

## Configuration

```yaml
apiVersion: kube9.alto9.com/v1alpha1
kind: OperatorConfig
metadata:
  name: kube9-config
spec:
  eventRetention:
    infoDays: 7
    warningDays: 7
    errorDays: 30
  assessmentSchedule: "0 2 * * *"  # Daily at 2 AM
```

## Privacy & Data

::: tip Complete Privacy
The operator runs entirely in your cluster. All data stays local. No external transmission.
:::

- **Location:** Runs inside your Kubernetes cluster
- **Access:** Full access to real resource names and configurations
- **Privacy:** All checks happen locally, results stored in CRDs
- **Open Source:** Completely free with full source code transparency

## Links

- [GitHub Repository](https://github.com/alto9/kube9-operator)
- [Helm Chart](https://github.com/alto9/charts)
- [Report Issues](https://github.com/alto9/kube9-operator/issues)

