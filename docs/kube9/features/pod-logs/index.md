# Pod logs viewer

Stream and inspect logs from Kubernetes pods directly inside VS Code. Logs are read through your local kubeconfig; nothing is sent to Alto9 servers.

## Open the viewer

1. Open the **Kube9** view in the Activity Bar.
2. Expand a cluster and namespace, then find a **Pod**.
3. Use **View Pod Logs** (command or context action on the pod).

For multi-container pods, choose a container or **All containers** when prompted.

## Toolbar and controls

| Control | Purpose |
| -------- | -------- |
| **Container** | Switch container, or view **All containers** (multiplexed streams). |
| **Line limit** | How many recent lines to fetch (e.g. 50–5000, **All**, or **Custom**). |
| **Timestamps** | Show or hide API-provided timestamps on each line. |
| **Follow** | When on, new log lines append as they arrive; turn off to freeze the view. |
| **Previous logs** | Shown only when a container has restarted; includes logs from the previous instance. |

## Header actions

- **Search** — Filter and jump between matches in the current buffer (**Ctrl+F** / **Cmd+F** in the webview).
- **Help** — Opens this documentation page in your browser.

## Multiple viewers

You can open **more than one** pod log panel at a time (for example side‑by‑side). Each panel is tied to its kubectl **context**, namespace, pod, and container selection. Closing one panel stops only that stream.

## Privacy

Log content and cluster access use **your machine’s kubectl configuration** and the Kubernetes API. The extension does not upload your logs to Alto9.

## Related

- [Kube9 VS Code Extension](/kube9/vscode) — Install, settings, and overview  
- [Report an issue](https://github.com/alto9/kube9-vscode/issues) — Bugs or feature requests for the extension  
