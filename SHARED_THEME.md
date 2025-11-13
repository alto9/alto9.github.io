# Shared Alto9 Theme Configuration

This project uses a shared Tailwind CSS + DaisyUI theme configuration that can be used across all Alto9 projects.

## Theme Configuration

The theme is defined in `tailwind.config.js` and includes:

- **Alto9 Brand Colors**: Custom color palette matching Alto9 branding
- **DaisyUI Integration**: Pre-configured DaisyUI component library
- **Custom Theme**: `alto9` theme with consistent color scheme

## Usage

### For Static HTML Sites (like alto9.github.io)

1. **Build the CSS**:
   ```bash
   npm install
   npm run build:css
   ```

2. **Include in HTML**:
   ```html
   <link href="./dist/output.css" rel="stylesheet">
   <html data-theme="alto9">
   ```

3. **Use DaisyUI Components**:
   ```html
   <button class="btn btn-primary">Click me</button>
   <div class="card bg-base-100 shadow-xl">
     <div class="card-body">
       <h2 class="card-title">Card title</h2>
     </div>
   </div>
   ```

### For React/Next.js Projects (like kube9-portal)

1. **Install dependencies**:
   ```bash
   npm install -D tailwindcss daisyui
   ```

2. **Copy `tailwind.config.js`** to your project root

3. **Copy `src/input.css`** to your project

4. **Import CSS in your main entry**:
   ```tsx
   import './input.css'
   ```

5. **Set theme in your app**:
   ```tsx
   <html data-theme="alto9">
   ```

## Shared Components

The theme includes custom utility classes:

- `.alto9-gradient` - Brand gradient background
- `.alto9-card` - Styled card component
- `.alto9-badge` - Badge component
- `.alto9-badge-mvp` - MVP status badge
- `.alto9-badge-dev` - Development status badge

## Brand Colors

- **Primary Blue**: `#3b82f6` (alto9-blue)
- **Green**: `#10b981` (alto9-green)
- **Purple**: `#8b5cf6` (alto9-purple)
- **Orange**: `#f59e0b` (alto9-orange)

## DaisyUI Themes

The configuration includes three themes:
- `alto9` - Custom Alto9 theme (default)
- `light` - Standard light theme
- `dark` - Standard dark theme

Switch themes dynamically:
```html
<html data-theme="dark">
```

## Development

Watch for CSS changes:
```bash
npm run watch:css
```

Build for production:
```bash
npm run build:css
```

