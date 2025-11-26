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

This Next.js application follows the App Router architecture pattern:

### Directory Structure
- **`app/`**: Contains the application routes and layouts using Next.js 13+ App Router
  - `page.tsx`: Main landing page component
  - `layout.tsx`: Root layout with global configurations
- **`public/`**: Static assets served directly
- **`src/`**: Additional source code (if applicable)

### Key Technologies
- **Next.js 14+**: React framework with server-side rendering and static generation
- **React**: UI component library
- **TypeScript**: Type-safe JavaScript
- **Geist Font**: Optimized font loading via `next/font`

### Rendering Strategy
The application utilizes Next.js App Router capabilities including:
- Server Components by default for optimal performance
- Client Components where interactivity is needed
- Automatic code splitting and lazy loading

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
