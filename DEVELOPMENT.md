# Development Guidelines

## Overview
This document outlines development practices and guidelines for the johnsteer personal site and its integration with the LAYZ framework.

## Project Structure

### Core Files
- `index.html` - Main site structure with responsive navigation
- `styles.css` - Modern CSS with mobile-first responsive design
- `script.js` - Navigation logic and LAYZ integration hooks
- `package.json` - Build scripts and dependencies

### Content Organization
```
content/
├── vignettes/          # Personal blog posts and thoughts
├── archive/            # Curated content from external sources
│   ├── youtube/        # Video content with takeaways
│   ├── papers/         # Research papers and analysis
│   └── podcasts/       # Podcast episodes and notes
└── gallery/            # Photos with AI-generated captions
```

### LAYZ Integration
```
.layz/
├── config.json         # Site configuration and content types
├── templates/          # Content templates for different types
└── workflows/          # GitHub Actions for content processing
```

## Development Workflow

### Local Development
1. **Setup**: Clone repository and install dependencies
2. **Preview**: Use `npm start` to serve locally on port 8000
3. **Build**: Use `npm run build` to create distribution files
4. **Test**: Validate responsive design across devices

### Content Creation
1. **Manual**: Create markdown files in appropriate content directories
2. **LAYZ**: Use framework API to process and generate content
3. **Review**: Validate generated content before committing
4. **Deploy**: Automatic deployment via CloudFlare Pages

### Code Standards

#### HTML
- Semantic HTML5 elements
- Proper heading hierarchy (h1 → h6)
- Accessible navigation with ARIA labels
- Meta tags for SEO and social sharing

#### CSS
- Mobile-first responsive design
- CSS Grid and Flexbox for layouts
- Custom properties for consistent theming
- Progressive enhancement principles

#### JavaScript
- ES6+ modern syntax
- Progressive enhancement (graceful degradation)
- Event delegation for dynamic content
- Modular code organization

### Content Guidelines

#### Vignettes
- Personal thoughts and observations
- Conversational but thoughtful tone
- Clear structure: intro, content, reflection
- Appropriate categorization and tagging

#### Archive Content
- Accurate metadata and source links
- Personal takeaways and analysis
- Clear summary of source material
- Actionable insights when applicable

#### Gallery
- High-quality images with proper optimization
- Descriptive captions and alt text
- Organized by date and theme
- Privacy-conscious content selection

## LAYZ Framework Integration

### Content Processing
- Input validation and sanitization
- Template-based content generation
- Automatic metadata extraction
- Cross-reference generation

### Site Updates
- Dynamic content loading via JavaScript
- Progressive enhancement for new content
- SEO optimization for generated content
- Responsive image handling

### Version Control
- Descriptive commit messages
- Automatic content commits via LAYZ
- Branch protection for main branch
- Review process for major changes

## Performance Optimization

### Frontend
- Optimized images (WebP, responsive sizes)
- Minified CSS and JavaScript
- Lazy loading for images and content
- CDN delivery for assets

### Content
- Efficient markdown processing
- Compressed assets and media
- Cached API responses
- Optimized build process

## Security Considerations

### Content Security
- Input sanitization for all user content
- Safe markdown rendering
- XSS prevention in dynamic content
- HTTPS enforcement

### API Security
- Secure API key management
- Rate limiting for content processing
- Validation of all input data
- Audit trail for all changes

## Testing Strategy

### Manual Testing
- Cross-browser compatibility
- Mobile responsiveness
- Navigation functionality
- Content display accuracy

### Automated Testing
- HTML validation
- CSS linting
- JavaScript error checking
- Accessibility testing

### Performance Testing
- Page load speed optimization
- Image optimization validation
- JavaScript performance monitoring
- Core Web Vitals tracking

## Deployment Process

### Development Environment
- Local development server
- Hot reload for rapid iteration
- Development build with source maps
- Testing environment for LAYZ integration

### Production Deployment
- CloudFlare Pages automatic deployment
- Production build optimization
- Asset optimization and compression
- CDN distribution

### Monitoring
- Performance monitoring
- Error tracking and alerts
- Usage analytics
- Content quality monitoring

## Accessibility Standards

### WCAG Compliance
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigation support

### Progressive Enhancement
- Content accessible without JavaScript
- Graceful degradation for older browsers
- Screen reader compatibility
- High contrast mode support

## Content Management

### Manual Content Creation
- Markdown files with frontmatter
- Consistent naming conventions
- Proper categorization and tagging
- Quality review process

### LAYZ-Generated Content
- Template-based generation
- Automatic metadata extraction
- Quality validation before publish
- Human review for sensitive content

## Future Enhancements

### Phase 1: Core Functionality
- Complete LAYZ framework integration
- Automated content processing
- Enhanced search functionality
- Improved mobile experience

### Phase 2: Advanced Features
- Dynamic content recommendations
- Social sharing integration
- Advanced analytics
- Performance optimization

### Phase 3: Community Features
- Comment system integration
- Newsletter signup
- RSS feed generation
- Social media automation

## Troubleshooting

### Common Issues
- Build failures: Check Node.js version compatibility
- CSS issues: Validate responsive design breakpoints
- JavaScript errors: Check browser console for details
- Content not displaying: Verify file paths and permissions

### Debug Process
1. Check browser console for errors
2. Validate HTML and CSS
3. Test JavaScript functionality
4. Review content file structure
5. Check deployment logs

## Contributing Guidelines

### Code Contributions
- Follow existing code style and patterns
- Add appropriate comments for complex logic
- Test changes across multiple browsers
- Update documentation as needed

### Content Contributions
- Follow content guidelines and templates
- Maintain consistent tone and style
- Provide proper attribution for sources
- Review for accuracy and clarity

---

*This document should be updated regularly as the project evolves and new patterns emerge.*