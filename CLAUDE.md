# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm start` - Start local development server on port 8000
- `npm run build` - Build for production (copies files to dist/)

### Deployment
- Automatic deployment via Cloudflare Pages from main branch
- Build command: `npm run build`
- Output directory: `dist/`

## Architecture

This is a static personal website with a clean, responsive design:

### Core Structure
- **Frontend**: Pure HTML/CSS/JS with mobile-first responsive design
- **Content**: Static content organized in markdown files for documentation
- **Deployment**: Cloudflare Pages with automatic builds

### Key Files
- `index.html` - Single-page application with section-based navigation
- `script.js` - Navigation logic, smooth scrolling, and tab functionality
- `styles.css` - Modern CSS with CSS Grid/Flexbox layouts and custom properties
- `wrangler.toml` - Cloudflare Pages configuration

### Content Organization
```
content/
├── vignettes/          # Personal blog posts and thoughts
├── archive/            # Curated external content
│   ├── youtube/        # Video content with takeaways
│   ├── papers/         # Research papers and analysis  
│   └── podcasts/       # Podcast episodes and notes
└── gallery/            # Photos and images
```

### Development Patterns
- Mobile-first responsive design with CSS Grid and Flexbox
- Progressive enhancement (works without JavaScript)
- Semantic HTML5 with proper ARIA labels for accessibility
- Event delegation and smooth scrolling navigation
- Tab-based content organization in archive section

### Content Structure
- **Vignettes**: Personal thoughts with intro/content/reflection structure
- **Archive**: Curated content with metadata, takeaways, and source attribution
- **Gallery**: Photos with descriptive captions and alt text

### Performance Features
- Static site generation for fast loading
- Minimal JavaScript footprint with vanilla JS
- CDN delivery through Cloudflare
- Responsive design optimized for all devices