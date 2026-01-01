# Graphigo

A modern Next.js application with Tailwind CSS v4.0 and Aceternity UI components.

## Tech Stack

- **Framework**: Next.js 16.1.1 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4.0
- **UI Components**: Aceternity UI
- **Animations**: Framer Motion

## Getting Started

1. **Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

2. **Build for Production**:
   ```bash
   npm run build
   npm start
   ```

## Project Structure

```
Graphigo/
├── src/
│   ├── app/              # App Router pages
│   │   ├── globals.css   # Global styles with CSS variables
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/       # React components (create as needed)
│   └── lib/
│       └── utils.ts      # Utility functions (cn for class merging)
├── public/               # Static assets
└── package.json
```

## Using Aceternity UI

Visit [Aceternity UI](https://ui.aceternity.com/) to browse components. To add a component:

1. Browse the component library
2. Copy the component code
3. Create a new file in `src/components/ui/`
4. Import and use in your pages

Example:
```tsx
import { ComponentName } from "@/components/ui/component-name";
```

## CSS Variables

The project uses CSS variables for theming with automatic dark mode support:
- `--background`, `--foreground`
- `--primary`, `--secondary`, `--accent`
- `--muted`, `--card`, `--popover`
- And more...

## Next Steps

- Add Aceternity UI components from [ui.aceternity.com](https://ui.aceternity.com/)
- Build your landing page
- Customize the color scheme in `globals.css`
- Add more pages in `src/app/`

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4.0](https://tailwindcss.com/docs)
- [Aceternity UI](https://ui.aceternity.com/)
- [Framer Motion](https://www.framer.com/motion/)
