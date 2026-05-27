# Kube9 VS Code Extension

::: info Status
Available on the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=Alto9.kube9-vscode) — actively maintained (open source).
:::

## Overview

**Kube9 – Kubernetes Cluster Manager** runs locally against your kubeconfig: cluster tree navigation, YAML editing and workloads, dashboards and terminals, **Helm**, streaming **pod logs**, **events**, **port forwarding**, drift-aware **Argo CD** actions, metrics/monitoring uplift when kube9-operator is present, cluster organizer tooling, workload launch/apply, and more—the marketplace description reads *“Proactive Kubernetes Intelligence – Right in Your IDE.”*

With [kube9-operator](/kube9/operator) installed, tooling unlocks scheduled **Well-Architected Framework** assessments and operator health summaries from in-cluster metadata (see the repository for full behavior).

**Optional product telemetry**, when VS Code/marketplace settings allow it, is limited to coarse feature usage/outcomes—not cluster-identifying details, manifests, log lines, kubeconfig paths, or API bodies ([privacy section in README](https://github.com/alto9/kube9-vscode#privacy-and-product-telemetry)).

## Key Features (high level)

- **Multi-cluster explorer** — Navigate clusters namespaces and workloads via kubeconfig. Without kube9-operator installs you still operate clusters normally; the Helm chart activates **operated** mode surfaced by persisted assessment/metrics status (see kube9-operator chart README).
- **Resource lifecycle** — Describe view/edit YAML scale restart logs delete workloads from tree context menus and the palette.
- **Helm & Argo CD** — Helm tooling plus Argo CD application sync/actions when clusters include Argo CD.
- **[Pod logs](/kube9/features/pod-logs/) & events** — kubectl-backed log streams and configurable cluster events workflows.
- **Port forwards dashboards terminals** — Port-forward dashboards and terminal tooling where bundled.

Privacy summaries appear in **Overview**; authoritative detail stays in the [upstream README](https://github.com/alto9/kube9-vscode/blob/main/README.md).

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

- [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=Alto9.kube9-vscode)
- [GitHub Repository](https://github.com/alto9/kube9-vscode)
- [Report Issues](https://github.com/alto9/kube9-vscode/issues)

