This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Architecture

This Next.js application follows the App Router architecture pattern with a modern, scalable design.

### Directory Structure
- **`app/`**: Contains the application routes and layouts using Next.js 13+ App Router
  - `page.tsx`: Main landing page component with server-side rendering
  - `layout.tsx`: Root layout with global configurations, metadata, and font loading
  - `globals.css`: Global styles and CSS variables
  - **Route Groups**: Organize routes without affecting URL structure
  - **Nested Layouts**: Share UI across route segments
- **`public/`**: Static assets served directly (images, fonts, icons)
  - Accessible via root URL path (e.g., `/file.svg`)
  - Cached and optimized by CDN
- **`src/`**: Additional source code (if applicable)
  - Components, utilities, hooks, and business logic
  - Separates application code from configuration

### Key Technologies
- **Next.js 14+**: React framework with server-side rendering and static generation
  - App Router for file-system based routing
  - Built-in optimization for images, fonts, and scripts
  - API routes for serverless functions
- **React 18+**: UI component library with concurrent rendering
- **TypeScript**: Type-safe JavaScript for enhanced developer experience
- **Geist Font**: Optimized font loading via `next/font` with automatic subsetting
- **pnpm**: Fast, disk space efficient package manager

### Rendering Strategy
The application utilizes Next.js App Router capabilities including:
- **Server Components** by default for optimal performance
  - Reduced JavaScript bundle size
  - Direct database/API access without client exposure
  - Enhanced security and SEO
- **Client Components** where interactivity is needed
  - Marked with `'use client'` directive
  - Access to browser APIs and React hooks
  - Event handlers and stateful UI
- **Automatic code splitting** and lazy loading
- **Streaming SSR** for progressive page rendering
- **Static Generation** for pages that can be pre-rendered at build time

### Data Flow
- **Server-to-Client**: Data fetched in Server Components is serialized and streamed to the client
- **Client-to-Server**: Form actions and API routes handle mutations and server-side logic
- **Parallel Data Fetching**: Multiple fetch requests are automatically deduplicated and batched
- **Caching**: Automatic request memoization and response caching at multiple levels

### Build & Deployment
- **Development**: Hot module replacement with Turbopack (fast refresh)
- **Production**: Optimized builds with minification, tree-shaking, and compression
- **Output**: Hybrid static/dynamic pages based on route configuration
- **Edge Runtime**: Optional edge deployment for global low-latency responses

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
