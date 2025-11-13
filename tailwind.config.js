/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    "./**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        // Alto9 brand colors
        'alto9': {
          'blue': '#3b82f6',
          'blue-dark': '#1e40af',
          'blue-light': '#60a5fa',
          'green': '#10b981',
          'purple': '#8b5cf6',
          'orange': '#f59e0b',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        alto9: {
          "primary": "#3b82f6",
          "primary-focus": "#2563eb",
          "primary-content": "#ffffff",
          "secondary": "#8b5cf6",
          "secondary-focus": "#7c3aed",
          "secondary-content": "#ffffff",
          "accent": "#10b981",
          "accent-focus": "#059669",
          "accent-content": "#ffffff",
          "neutral": "#1e293b",
          "neutral-focus": "#0f172a",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f8fafc",
          "base-300": "#e2e8f0",
          "base-content": "#1a202c",
          "info": "#3b82f6",
          "success": "#10b981",
          "warning": "#f59e0b",
          "error": "#ef4444",
        },
      },
      "light",
      "dark",
    ],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
}

