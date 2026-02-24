# Portfolio & Blog Platform

![Portfolio & Blog Platform](https://imgix.cosmicjs.com/d4f7a030-119a-11f1-9b1d-01a3fa4a4153-photo-1558655146-9f40138edfeb-1771949211683.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern portfolio and blog platform built with Next.js 16 and [Cosmic](https://www.cosmicjs.com). Dynamically displays your skills, blog posts with rich markdown content, author profiles, and categories — all managed through Cosmic's headless CMS.

## Features

- 📝 **Full Blog System** — Blog listing and individual post pages with rendered markdown
- ⚡ **Skills Showcase** — Skills organized by category with proficiency indicators
- 👤 **Author Profiles** — Author cards with avatars, bios, and website links
- 🏷️ **Category Organization** — Posts organized by categories with color-coded badges
- 📱 **Fully Responsive** — Mobile-first design for all screen sizes
- 🖼️ **Image Optimization** — Automatic image optimization via imgix
- 🚀 **Server Components** — Fast, SEO-friendly pages with Next.js Server Components
- 🎨 **Modern Design** — Clean, minimal aesthetic with Tailwind CSS

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=699d5c021ba5a5e6126778ae&clone_repository=699dcea6c17a6dfd89f04820)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Add 2 blog posts, 2 authors, and 2 categoreis"

### Code Generation Prompt

> "Build a Next.js website that uses my existing objects in this bucket"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/) — React framework with App Router and Server Components
- [Cosmic](https://www.cosmicjs.com) — Headless CMS for content management ([docs](https://www.cosmicjs.com/docs))
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) — Type-safe JavaScript
- [react-markdown](https://github.com/remarkjs/react-markdown) — Markdown rendering

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+
- A [Cosmic](https://www.cosmicjs.com) account with bucket configured

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-blog-platform
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
Create a `.env.local` file with:
```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Cosmic SDK Examples

### Fetching Blog Posts with Related Authors and Categories
```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: posts } = await cosmic.objects
  .find({ type: 'blog-posts' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Skills by Category
```typescript
const { objects: skills } = await cosmic.objects
  .find({ type: 'skills' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This app uses the following Cosmic object types:

| Object Type | Description |
|---|---|
| **Blog Posts** | Articles with excerpt, markdown content, featured images, publish dates, author and category relationships |
| **Authors** | Writer profiles with name, bio, avatar image, and website URL |
| **Categories** | Blog categories with name and description |
| **Skills** | Technical skills with name, category (Frontend/Backend/Design/DevOps/Language), and proficiency level |
| **Projects** | Portfolio projects with description, featured image, project URL, and skills used |
| **Work Experience** | Employment history with company, role, dates, description, and company logo |

## Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Add environment variables (COSMIC_BUCKET_SLUG, COSMIC_READ_KEY, COSMIC_WRITE_KEY)
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Import the repository in [Netlify](https://netlify.com)
3. Set the build command to `bun run build`
4. Add environment variables
5. Deploy!

<!-- README_END -->