# Deployment Instructions

## What Changed

The site has been migrated from static HTML to **VitePress** (a Vue-powered static site generator).

### Files Modified:
- ✅ Updated VitePress configuration (`docs/.vitepress/config.js`)
- ✅ Fixed dead links in documentation
- ✅ Removed Kube9 UI references (replaced with Kube9 Desktop freemium product)
- ✅ Cleaned up all old HTML, Tailwind CSS, and DaisyUI files
- ✅ Added GitHub Actions workflow for automatic deployment

### Files Added:
- ✅ `.github/workflows/deploy.yml` - Automated deployment workflow
- ✅ Updated `.gitignore` for VitePress
- ✅ Updated `README.md` with deployment instructions

## Next Steps - Required Actions

### 1. GitHub Pages Configuration (REQUIRED)

Before pushing these changes, you need to configure GitHub Pages:

1. Go to: https://github.com/alto9/alto9.github.io/settings/pages
2. Under **Source**, change from "Deploy from a branch" to **GitHub Actions**
3. Save the settings

### 2. Push Changes

Once GitHub Pages is configured for Actions:

```bash
cd /home/danderson/code/alto9/opensource/alto9.github.io

# Stage all changes
git add .

# Commit
git commit -m "Migrate to VitePress and update Kube9 ecosystem docs

- Migrate from static HTML to VitePress
- Remove Kube9 UI references (replaced with Desktop freemium product)
- Clean up all Tailwind/DaisyUI code
- Add GitHub Actions workflow for automatic deployment
- Update documentation to reflect current architecture"

# Push to main (or master, depending on your default branch)
git push origin master  # or 'main' if that's your default branch
```

### 3. Verify Deployment

After pushing:

1. Go to: https://github.com/alto9/alto9.github.io/actions
2. Watch the "Deploy VitePress site to Pages" workflow run
3. Once complete (about 1-2 minutes), visit: https://alto9.github.io
4. Your new VitePress site should be live! 🎉

## Build Verification

✅ Local build successful:
```
✓ building client + server bundles...
✓ rendering pages...
build complete in 2.05s.
```

The build generates:
- `docs/.vitepress/dist/index.html` - Homepage
- `docs/.vitepress/dist/forge/` - Forge documentation
- `docs/.vitepress/dist/kube9/` - Kube9 ecosystem documentation
- Static assets (CSS, JS, etc.)

## Troubleshooting

If the site doesn't load after deployment:

1. Check Actions tab for any build errors
2. Ensure GitHub Pages source is set to "GitHub Actions" (not branch)
3. Check that the repository is public or has Pages enabled for private repos
4. Wait a few minutes - DNS propagation can take time

## Local Development

To preview locally:
```bash
npm run docs:dev     # Start dev server at http://localhost:5173
npm run docs:build   # Build for production
npm run docs:preview # Preview production build
```

