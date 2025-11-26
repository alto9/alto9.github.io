# Alto9 GitHub Pages - Public Documentation Site

Public-facing documentation website for Alto9 open source projects, hosted on GitHub Pages.

## Overview

This repository contains the static HTML documentation site for Alto9's open source projects. The site is built with **Tailwind CSS** and **DaisyUI** using a shared theme configuration, and is organized by product.

## Structure

```
alto9.github.io/
├── index.html              # Main landing page
├── forge/                  # Forge documentation
├── kube9/                  # Kube9 documentation
├── kube9-operator/         # Kube9 Operator documentation
├── synth9/                 # Synth9 documentation
├── src/                    # Source CSS files
│   └── input.css          # Tailwind CSS input file
├── dist/                   # Compiled CSS output
│   └── output.css        # Generated CSS (gitignored)
├── tailwind.config.js      # Tailwind + DaisyUI configuration
├── postcss.config.js       # PostCSS configuration
├── SHARED_THEME.md         # Theme documentation
└── package.json            # Dependencies and scripts
```

## Products Documented

- **Forge** - Context engineering framework for AI-assisted development
- **Kube9** - Visual Kubernetes management VS Code extension
- **Kube9 Operator** - Kubernetes operator for Kube9 Pro features
- **Synth9** - (Coming soon)

## Technology Stack

- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library built on Tailwind CSS
- **PostCSS** - CSS processing
- **Static HTML** - No build step required, just CSS compilation

## Development

### Prerequisites

- Node.js 22+ (managed via NVM)
- npm

### Setup

```bash
# Install dependencies
npm install

# Build CSS for production
npm run build:css

# Watch CSS changes during development
npm run watch:css

# Serve site locally
npm run serve
# or
npm run dev
```

The site will be available at `http://localhost:8080`

### Adding New Product Documentation

1. Create a new directory for your product (e.g., `my-product/`)
2. Add an `index.html` file with the product landing page
3. Include the shared CSS: `<link href="../dist/output.css" rel="stylesheet">`
4. Use the `alto9` theme: `<html data-theme="alto9">`
5. Follow the structure and styling patterns of existing product pages

### Theme Configuration

This repository uses a shared Alto9 theme configuration. See [SHARED_THEME.md](./SHARED_THEME.md) for:
- Theme setup and usage
- Brand colors and custom components
- DaisyUI component examples
- How to use the theme in other projects

## Design Theme

**Current State:** The site uses Tailwind CSS + DaisyUI with a custom Alto9 theme.

**Future Vision:** Eventually align the design theme with kube9-portal for consistency across Alto9 properties. This may involve migrating to a shared design system or component library.

## Deployment

This repository is configured for GitHub Pages. The site is automatically deployed when changes are pushed to the main branch.

**Note:** Make sure to run `npm run build:css` and commit the `dist/output.css` file before deploying, or set up a GitHub Actions workflow to build CSS automatically.

## Contributing

When adding or updating documentation:

1. Follow the existing structure and styling patterns
2. Use the shared Alto9 theme components
3. Ensure all links are relative paths
4. Test locally before committing
5. Build CSS before committing: `npm run build:css`

## Related Repositories

- [kube9-vscode](https://github.com/alto9/kube9-vscode) - VS Code extension
- [kube9-operator](https://github.com/alto9/kube9-operator) - Kubernetes operator
- [forge](https://github.com/alto9/forge) - Context engineering framework
- [kube9-portal](https://github.com/alto9/kube9-portal) - User portal (future design theme reference)

## License

MIT License - see [LICENSE](./LICENSE) file for details.

---

**Built with ❤️ by Alto9 - Open source DevOps tools for modern development**
