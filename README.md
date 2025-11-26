# Test Web UI

A modern, production-ready [Next.js](https://nextjs.org) application built with TypeScript, React 19, and the App Router architecture. This project demonstrates best practices for building scalable web applications with comprehensive testing and linting configurations.

## Project Overview

This is a Next.js 15 application bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), featuring:
- ⚡ Next.js 15.5.4 with App Router
- ⚛️ React 19.1.0 with concurrent rendering
- 📘 TypeScript 5 for type safety
- 🧪 Jest testing framework with React Testing Library
- 🔍 ESLint for code quality
- 📦 pnpm for efficient package management

## Getting Started

### Prerequisites

- Node.js 20+ (recommended)
- pnpm 8+ (install via `npm install -g pnpm`)

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file thanks to Fast Refresh.

### Available Scripts

- **`pnpm dev`** - Start the development server with hot module replacement
- **`pnpm build`** - Create an optimized production build
- **`pnpm start`** - Start the production server (requires build first)
- **`pnpm lint`** - Run ESLint to check code quality
- **`pnpm test`** - Run Jest tests in watch mode
- **`pnpm test:watch`** - Run tests with file watcher
- **`pnpm test:run`** - Run tests in CI mode with JUnit reporter

### Font Optimization

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel. Fonts are automatically subset and self-hosted for optimal performance.

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

### Testing Strategy
This project includes a comprehensive testing setup:
- **Jest 30**: Modern JavaScript testing framework with snapshot testing
- **React Testing Library**: User-centric testing utilities for React components
- **@testing-library/user-event**: Simulates real browser interactions
- **jest-environment-jsdom**: DOM simulation for component testing
- **CI Integration**: JUnit reporter for CircleCI and other CI platforms
- **Test Location**: Tests are co-located with components (e.g., `page.test.tsx`)

Example test structure:
```typescript
import { render, screen } from '@testing-library/react'
import Page from './page'

test('renders component', () => {
  render(<Page />)
  expect(screen.getByRole('heading')).toBeInTheDocument()
})
```

### Code Quality
- **ESLint**: Configured with Next.js recommended rules
- **TypeScript**: Strict type checking enabled
- **Configuration Files**:
  - `eslint.config.mjs`: ESLint configuration
  - `tsconfig.json`: TypeScript compiler options
  - `next.config.ts`: Next.js build configuration
  - `jest.config.ts`: Jest test configuration

### Project Structure
```
test-web-ui/
├── app/                    # Next.js App Router
│   ├── components/         # Reusable React components
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── page.test.tsx       # Page component tests
│   └── globals.css         # Global styles
├── public/                 # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── .circleci/              # CI/CD configuration
├── eslint.config.mjs       # Linting rules
├── jest.config.ts          # Test configuration
├── jest.setup.ts           # Jest setup file
├── next.config.ts          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## Performance Optimizations

This application includes several built-in performance optimizations:

### Image Optimization
- Automatic image optimization via `next/image`
- Lazy loading and responsive images
- Modern format conversion (WebP, AVIF)

### Font Loading
- Self-hosted fonts with `next/font`
- Automatic subsetting for reduced file size
- Zero layout shift with `font-display: swap`

### Code Splitting
- Automatic route-based code splitting
- Dynamic imports for large components
- Optimized vendor bundles

### Caching
- Aggressive caching for static assets
- Request deduplication for data fetching
- Revalidation strategies for dynamic content

## Deployment

### Vercel (Recommended)

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com/new):

```bash
# Deploy to Vercel
vercel
```

### Self-Hosting

Build and start the production server:

```bash
pnpm build
pnpm start
```

The application will be available at `http://localhost:3000`.

### Docker

Create a `Dockerfile` for containerized deployment:

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile
COPY . .
RUN pnpm build
EXPOSE 3000
CMD ["pnpm", "start"]
```

### Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
# Add your environment variables here
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests (`pnpm test`)
5. Run linter (`pnpm lint`)
6. Commit your changes (`git commit -m 'Add amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

## Learn More

### Next.js Resources

- [Next.js Documentation](https://nextjs.org/docs) - comprehensive Next.js features and API reference
- [Learn Next.js](https://nextjs.org/learn) - interactive tutorial for beginners
- [Next.js GitHub](https://github.com/vercel/next.js) - source code and community

### React Resources

- [React Documentation](https://react.dev) - official React documentation
- [React 19 Release Notes](https://react.dev/blog/2024/12/05/react-19) - latest features and improvements

### Testing Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started) - testing framework guide
- [React Testing Library](https://testing-library.com/react) - component testing best practices

### TypeScript Resources

- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - TypeScript handbook
- [TypeScript with React](https://react-typescript-cheatsheet.netlify.app/) - React + TypeScript cheatsheet

## License

This project is private and not licensed for public use.
