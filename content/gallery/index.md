# Gallery

This directory contains photos and images from my life with AI-generated captions and context.

## Structure

### Organization
- `YYYY/MM/` - Photos organized by year and month
- `events/` - Special events and occasions
- `travel/` - Travel photos
- `daily/` - Daily life snapshots

### File Naming Convention
- `YYYY-MM-DD-description.jpg` - Individual photo files
- `YYYY-MM-DD-event-name/` - Event photo collections

## Metadata Template

Each photo will have associated metadata:

```markdown
---
filename: "2025-01-11-morning-coffee.jpg"
date_taken: "2025-01-11"
location: "Home Office"
camera: "iPhone 15 Pro"
categories: ["daily", "coffee", "morning"]
tags: ["routine", "workspace", "productivity"]
---

# Morning Coffee

## AI-Generated Caption
A thoughtful moment captured during the morning routine...

## Context
Personal notes about the moment or what was happening...

## Technical Details
- Camera: iPhone 15 Pro
- Settings: Auto
- Editing: None
```

## LAYZ Integration

The LAYZ framework will automatically:
- Generate descriptive captions for photos
- Extract EXIF data and metadata
- Organize photos by date and theme
- Create photo collections and albums
- Optimize images for web display
- Generate alt text for accessibility

## Future Features

- Automatic tagging based on image content
- Location mapping for travel photos
- Timeline view of life events
- Search functionality by content, date, or location
- Integration with social media posts