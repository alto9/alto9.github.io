# Kube9 Operator

::: info Status
Open source — actively maintained
:::

## Overview

The Kube9 Operator is an open source Kubernetes operator that runs in your cluster. It performs scheduled Well-Architected Framework validation, stores assessments and events locally (SQLite with optional persistent volume for events), exposes operator status through a ConfigMap for clients such as the VS Code extension, and supports optional ArgoCD and Trivy integrations via Helm values.

This Helm chart does **not** configure API keys, kube9-server registration, or outbound product telemetry. Paid experiences (for example **Kube9 Desktop**) are separate products. See the [operator repository](https://github.com/alto9/kube9-operator) for full details.

## Key Features

### Core (default install)

- Scheduled Well-Architected Framework assessments (configurable interval and mode)
- In-cluster persistence: assessment data and event history (event storage uses a PVC by default)
- Status published to a ConfigMap for the VS Code extension and other consumers
- Health and Prometheus metrics on the operator pod (`/healthz`, `/readyz`, `/metrics`)
- Optional ArgoCD detection and status in the published operator state
- Optional Trivy server detection and workload image scanning when `trivy.serverUrl` is set (outbound HTTP to your Trivy endpoint only)

### Integrations

- **ArgoCD:** Auto-detect installation and surface GitOps context in status for connected tools.
- **Trivy:** When you set a Trivy server URL, the operator can probe it and run configured scan cycles (see chart values and [assessment user guide](https://github.com/alto9/kube9-operator/blob/main/docs/assessment/user-guide.md)).

## How It Works

1. **Runs inside your cluster** with RBAC you control via the chart.
2. **Runs assessments and housekeeping** on a schedule and persists results locally.
3. **Publishes status to a ConfigMap** (for example `kube9-operator-status` in the install namespace) for local consumers.
4. **Optional HTTP** only where you configure it (for example Trivy health/version and scans).

## Installation

```bash
helm repo add kube9 https://charts.kube9.io
helm repo update
helm install kube9-operator kube9/kube9-operator \
  --namespace kube9-system \
  --create-namespace
```

You can install in any namespace; the operator discovers its namespace via the pod environment. The VS Code extension can auto-detect the operator or use the `kube9.operatorNamespace` setting when you use a custom namespace.

## Configuration

The operator is configured through Helm values. Important groups:

| Setting | Description |
| -------- | ----------- |
| `logLevel` | Log verbosity (`debug`, `info`, `warn`, `error`). |
| `statusUpdateIntervalSeconds` | How often status is written to the ConfigMap. |
| `assessment.enabled` / `assessment.intervalSeconds` / `assessment.mode` | Scheduled assessment runs (for example daily full assessment). |
| `events.persistence.*` / `events.retention.*` | PVC for the event database and retention windows. |
| `metrics.intervals.*` | Intervals for metadata, inventory, and workload image scan cycles (minimums enforced). |
| `argocd.*` | ArgoCD detection behavior and namespace. |
| `trivy.*` | Trivy server URL, probe paths, scan limits, and vulnerability thresholds. |
| `resources.*` | CPU and memory (defaults use Guaranteed QoS with 500m CPU and 1Gi memory). |

For the authoritative parameter list and examples, see the [chart README](https://github.com/alto9/kube9-operator/blob/main/charts/kube9-operator/README.md) in the kube9-operator repository.

## Privacy & data

- **In-cluster by default:** Assessments, SQLite data, and the status ConfigMap stay in your cluster.
- **No chart-managed remote registration:** This chart does not ship API keys or kube9-server reporting.
- **Optional Trivy:** Outbound calls go to the Trivy base URL you configure.

## Links

- [GitHub Repository](https://github.com/alto9/kube9-operator)
- [Helm Chart](https://github.com/alto9/charts)
- [Report Issues](https://github.com/alto9/kube9-operator/issues)
