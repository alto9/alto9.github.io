# Kube9 Operator

::: info Status
Open source — actively maintained
:::

## Overview

The **kube9-operator** Helm chart installs an open source Kubernetes controller. It schedules **Well-Architected Framework** validation, stores assessments and workload events locally (**SQLite**, with PVC-backed event storage enabled by default), and publishes **`kube9-operator-status`** (`ConfigMap`) for clients such as the [Kube9 VS Code extension](/kube9/vscode) and [Kube9 Desktop](/kube9/desktop).

Optional Helm values enable **Argo CD** drift awareness and **Trivy** workload scanning. Outbound HTTP is limited to what you configure (notably when you supply a **Trivy** server URL).

The chart **does not** bundle API keys, Alto9-hosted sign-in or reporting, or other chart-managed cloud hooks. Paid products including **Kube9 Desktop** ship and bill separately ([chart README](https://github.com/alto9/kube9-operator/blob/main/charts/kube9-operator/README.md)).

### Basic vs operated (Kube9 VS Code)

The kube9-operator README describes how tooling sees your cluster:

- **Basic mode** — No operator installed; extension focuses on kubectl-centric workflows from your kubeconfig.
- **Operated mode** — Operator installed; persisted assessments/metadata and richer extension views for monitoring assessments (exact views change with releases—see kube9-operator).

Install guidance including cluster version prerequisites lives in [chart prerequisites](https://github.com/alto9/kube9-operator/blob/main/charts/kube9-operator/README.md).

## Key Features

### Core (default install)

- Scheduled Well-Architected Framework assessments (interval/mode configurable through values).
- In-cluster SQLite storage for assessments and events (PVC for events by default; retention and sizing are chart values).

- **`kube9-operator-status` ConfigMap** published for tools that query status using Kubernetes RBAC compatible with your kubeconfig.
- Health and Prometheus text metrics on pod (`/healthz`, `/readyz`, `/metrics`). The chart may omit a Prometheus `Service`; scrape the pod or add annotations according to upstream chart notes.
- Optional Argo CD detection reflected in published operator JSON.
- Optional Trivy workload scans via `trivy.serverUrl` (outbound HTTP to your configured endpoint only).

### Integrations

- **Argo CD:** Auto-detect Argo deployments and expose GitOps context in status (`argocd.*` values).
- **Trivy:** When you set `trivy.serverUrl`, probing and scans run per thresholds in values ([user guide](https://github.com/alto9/kube9-operator/blob/main/docs/assessment/user-guide.md)).

## How It Works

1. **Runs inside your cluster** with RBAC you control via the chart.
2. **Runs assessments and housekeeping** on a schedule and persists results locally.
3. **Publishes status to a ConfigMap** (`kube9-operator-status` in the install namespace) for local consumers.
4. **Optional outbound HTTP** only where you configure it (notably toward a Trivy server URL).

## Installation

```bash
helm repo add kube9 https://charts.kube9.io
helm repo update
helm install kube9-operator kube9/kube9-operator \
  --namespace kube9-system \
  --create-namespace
```

You may install into any namespace (`kube9-system` in the snippet above); the pod discovers namespace from Helm. VS Code **`kube9.operatorNamespace`** accepts a plain string or per-context map when the chart installs elsewhere.

## Configuration

Abbreviated knobs below—for full tables and install snippets see the upstream [chart README](https://github.com/alto9/kube9-operator/blob/main/charts/kube9-operator/README.md).

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

## Privacy & data

- **In-cluster by default:** Assessments SQLite data and the status ConfigMap stay inside your Kubernetes cluster under your RBAC.
- **No Alto9 backends from Helm alone:** Default chart wiring does not add API keys, remote login, or report telemetry back to Alto9; Desktop and other SaaS tiers ship independently (OSS chart README aligns this boundary).
- **Optional Trivy egress:** Calls go only to the Trivy URL you set in Helm.

## Links

- [GitHub repository](https://github.com/alto9/kube9-operator)
- [Helm chart README (source)](https://github.com/alto9/kube9-operator/blob/main/charts/kube9-operator/README.md)
- [Chart repository index](https://charts.kube9.io)
- [Report issues](https://github.com/alto9/kube9-operator/issues)
