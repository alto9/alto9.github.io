# Alto9 Documentation

Official documentation for Alto9 open source projects, built with [VitePress](https://vitepress.dev/).

## Projects

- **Forge Studio** — VS Code/Cursor extension: `.forge/` context, staged agents, GitHub refine/build/review workflow, skill registry, and automated test/lint gates before commit.
- **Kube9** — Kubernetes management ecosystem
  - **VS Code Extension** — Intelligent Kubernetes management in your IDE
  - **Operator** — In-cluster validation and monitoring
  - **Desktop** — AI-powered desktop app (see [docs](/kube9/desktop))

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run docs:dev

# Build for production
npm run docs:build

# Preview production build
npm run docs:preview
```

## Documentation Structure

```
docs/
├── .vitepress/
│   └── config.js          # VitePress configuration
├── index.md               # Homepage
├── forge/                 # Forge Studio documentation
├── kube9/                 # Kube9 ecosystem documentation
│   ├── index.md          # Ecosystem overview
│   ├── vscode.md         # VS Code extension
│   └── operator.md       # Operator
```

## Deployment

This site is deployed to GitHub Pages using GitHub Actions.

### Initial Setup (One-Time)

1. Go to your repository settings
2. Navigate to **Settings → Pages**
3. Under **Source**, select **GitHub Actions**
4. Push changes to the default branch

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:

- Build the VitePress site
- Deploy to GitHub Pages
- Make it available at `https://alto9.github.io`

### Manual Deployment

If needed, you can manually trigger the deployment:

1. Go to **Actions** tab in GitHub
2. Select **Deploy VitePress site to Pages**
3. Click **Run workflow**

## Related repositories

- [forge](https://github.com/alto9/forge) — Forge Studio (VS Code/Cursor extension)
- [kube9-vscode](https://github.com/alto9/kube9-vscode) — Kube9 VS Code extension
- [kube9-operator](https://github.com/alto9/kube9-operator) — Kubernetes operator
- [kube9-portal](https://github.com/alto9/kube9-portal) — User portal (future design theme reference)

## License

MIT License - See individual projects for their licenses.
