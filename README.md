# Alto9 Documentation

Official documentation for Alto9 open source projects, built with [VitePress](https://vitepress.dev/).

## Projects

- **Forge** - Context engineering framework for AI-assisted development
- **Kube9** - Kubernetes management ecosystem
  - VS Code Extension - Desktop app with embedded AI agent
  - Operator - In-cluster validation and monitoring

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
├── forge/                 # Forge documentation
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
4. Push changes to `main` branch

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
- Build the VitePress site
- Deploy to GitHub Pages
- Make it available at `https://alto9.github.io`

### Manual Deployment

If needed, you can manually trigger the deployment:
1. Go to **Actions** tab in GitHub
2. Select **Deploy VitePress site to Pages**
3. Click **Run workflow**

## License

MIT License - See individual projects for their licenses. 
