# Portfolio Redesign 2025 �

![Project Preview](./public/preview.png) <!-- Add a preview image if available -->

A modern, performant portfolio website showcasing my skills, projects, and professional journey. Built with cutting-edge web technologies to demonstrate frontend development expertise.

## Features ✨

- 🖥️ Responsive design for all screen sizes
- 🌓 Dark/Light mode toggle
- 🚀 Blazing fast performance (98+ Lighthouse score)
- 🎨 Custom animations and micro-interactions
- 📂 Project showcase with filtering capabilities
- 📝 Markdown-powered blog integration
- 📧 Contact form with email integration
- 🔍 SEO-optimized pages and metadata
- ♿ Full accessibility compliance (WCAG 2.1)

## Technologies Used 🛠️

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS + CSS Modules
- **Animation**: Framer Motion / Motion
- **Icons**: Lucide React
- **UI Components**: Radix UI + Custom Components
- **Theme**: Next Themes
- **Type Safety**: TypeScript
- **Code Quality**: Biome (ESLint + Prettier alternative)
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## Deployment 🚀

This portfolio is automatically deployed to GitHub Pages using GitHub Actions. The deployment workflow:

1. **Build**: Generates static files using `next build` with `output: export`
2. **Deploy**: Uploads to GitHub Pages on every push to `master` branch
3. **Live Site**: Available at [fsuknaic.github.io](https://fsuknaic.github.io)

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Build specifically for GitHub Pages
npm run build:gh-pages
```
