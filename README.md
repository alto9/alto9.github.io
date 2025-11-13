# Alto9 GitHub Pages Site

Documentation site for Alto9 open source projects, built with Tailwind CSS and DaisyUI.

## Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Build CSS**:
   ```bash
   npm run build:css
   ```

3. **Serve locally**:
   ```bash
   npm run serve
   # or
   npm run dev
   ```

## Development

Watch for CSS changes during development:
```bash
npm run watch:css
```

## Using Tailwind/DaisyUI

This site uses a shared Tailwind CSS + DaisyUI theme configuration. See [SHARED_THEME.md](./SHARED_THEME.md) for details.

### Current Implementation

- `index.html` - Original version with custom CSS
- `index-tailwind.html` - New version using Tailwind/DaisyUI (example)

To switch to the Tailwind version:
1. Build CSS: `npm run build:css`
2. Rename `index-tailwind.html` to `index.html` (backup the original first)

### DaisyUI Components

You can use any DaisyUI component. Examples:

```html
<!-- Buttons -->
<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-secondary">Secondary Button</button>

<!-- Cards -->
<div class="card bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <p>Card content</p>
  </div>
</div>

<!-- Badges -->
<span class="badge badge-primary">Badge</span>
<span class="badge badge-success">Success</span>
```

## Theme

The site uses the `alto9` theme by default. You can switch themes:

```html
<html data-theme="alto9">  <!-- Custom Alto9 theme -->
<html data-theme="light">  <!-- Light theme -->
<html data-theme="dark">   <!-- Dark theme -->
```

## Deployment

The site is deployed to GitHub Pages. The `dist/output.css` file should be committed to the repository.

