# Agentic Coding Guidelines

This document provides instructions for AI agents and developers working on this repository. Follow these guidelines to ensure consistency, quality, and adherence to project standards.

## 1. Environment & Verification

### Build & Verification
**Crucial:** This project enforces strict script usage. Do **not** use `npm run dev` or `npm run build` directly for verification.

- **Primary Verification Command:**
  ```bash
  npm run lint
  ```
  This command performs a comprehensive check:
  - TypeScript type checking (`tsgo`/`tsc`)
  - Linting via Biome (`npx biome lint`)
  - Custom rule checks (`.rules/check.sh`)
  - Tailwind CSS processing check
  - Build test (`.rules/testBuild.sh`)

**Always run `npm run lint` after making changes to verify your work.**

### Testing
- **Current State:** There are currently no dedicated unit test files (e.g., `*.test.ts`) in the repository.
- **Verification:** Rely on strict type checking and the lint command to verify correctness.
- **Future:** If adding tests, place them colocated with components/logic (e.g., `Component.test.tsx`) and use a standard runner if introduced. For now, focus on static analysis verification.

## 2. Code Style & Conventions

### Technology Stack
- **Framework:** React 18 + Vite
- **Language:** TypeScript (Strict mode enabled)
- **Styling:** Tailwind CSS + Radix UI Primitives
- **UI Library:** shadcn/ui components (located in `src/components/ui`)
- **Routing:** React Router DOM
- **Linting:** Biome

### Directory Structure
- `src/components/ui/`: Reusable UI components (buttons, inputs, etc.) - follow shadcn/ui patterns.
- `src/components/common/`: Application-specific shared components.
- `src/pages/`: Page components corresponding to routes.
- `src/lib/`: Utility functions (e.g., `utils.ts` for `cn`).
- `src/hooks/`: Custom React hooks.

### Imports
- **Path Aliases:** Always use the `@/` alias for imports from `src/`.
  ```typescript
  // ✅ Good
  import { Button } from "@/components/ui/button";
  import { cn } from "@/lib/utils";

  // ❌ Bad
  import { Button } from "../../components/ui/button";
  ```
- **Order:**
  1. React / External libraries
  2. Internal components (using `@/`)
  3. Utils / Hooks / Types
  4. Styles (if any separate css files, though Tailwind is preferred)

### Component Patterns
- **Definition:** Prefer functional components. Use `forwardRef` for UI components to ensure accessibility and composition.
- **Typing:** Explicitly define Props interfaces.
  ```typescript
  // Example: src/components/ui/example.tsx
  import * as React from "react"
  import { cn } from "@/lib/utils"

  interface ExampleProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "outline";
  }

  const Example = React.forwardRef<HTMLDivElement, ExampleProps>(
    ({ className, variant = "default", ...props }, ref) => {
      return (
        <div
          ref={ref}
          className={cn("base-styles", className)}
          {...props}
        />
      )
    }
  )
  Example.displayName = "Example"
  export { Example }
  ```
- **`React.FC`:** While `App.tsx` uses `React.FC`, newer UI components (like in `components/ui`) generally avoid it in favor of direct function definition or `forwardRef` for better generic support and prop handling. Follow the pattern of the specific directory you are working in.

### Styling (Tailwind CSS)
- **Utility First:** Use Tailwind classes for all styling. Avoid `.css` files unless absolutely necessary.
- **ClassName Merging:** Always use the `cn()` utility (clsx + tailwind-merge) when accepting `className` props to allow overrides.
  ```typescript
  className={cn("text-red-500 p-4", className)}
  ```
- **Responsiveness:** Use standard Tailwind breakpoints (`sm`, `md`, `lg`, `xl`).
- **Variables:** Use CSS variables defined in `index.css` (via Tailwind config) for colors (e.g., `bg-primary`, `text-primary-foreground`) to support theming.

### TypeScript Rules
- **Strict Mode:** `strict: true` is enabled in `tsconfig.app.json`.
- **No Any:** Avoid `any`. Use `unknown` if necessary, or better yet, proper generics.
- **Unused Locals:** The compiler will error on unused locals (`noUnusedLocals: true`). Remove them.
- **Type Definitions:** prefer `interface` for object shapes and `type` for unions/intersections.

### Linting (Biome)
- **Configuration:** `biome.json` is used.
- **Rules:**
  - `noUndeclaredDependencies`: Ensure all imports are in `package.json`.
  - `noRedeclare`: Avoid redeclaring variables.
  - `noCommonJs`: Use ESM (`import`/`export`) syntax only.
- **Formatting:** Formatting is currently disabled in `biome.json`. Follow the existing indentation (2 spaces) and style manually, or match surrounding code.

## 3. Error Handling & State

- **Async Operations:** Use `try/catch` blocks for async operations, especially API calls.
- **UI Feedback:** Use `sonner` (via `src/components/ui/sonner.tsx` / `toast`) for user notifications on success/error.
- **Forms:** Use `react-hook-form` combined with `zod` for schema validation.
  ```typescript
  import { useForm } from "react-hook-form"
  import { zodResolver } from "@hookform/resolvers/zod"
  import * as z from "zod"
  ```

## 4. Workflows

### Creating New Components
1. **Location:** Decide if it's a generic UI component (`components/ui`) or domain-specific (`components/common` or `components/features`).
2. **Structure:** Create the file. If complex, create a directory with `index.tsx`.
3. **Implementation:** Implement using Shadcn/Radix patterns.
4. **Export:** Ensure it is exported cleanly.

### Modifying Existing Code
1. **Read:** Read the file and understood the context.
2. **Conform:** Match the existing coding style (imports, naming).
3. **Lint:** Run `npm run lint` to verify no regressions.

## 5. Summary of Restrictions
- DO NOT edit `package.json` scripts.
- DO NOT use `console.log` in production code (linting might catch it, or it's bad practice).
- DO NOT disable lint rules unless strictly necessary and documented.
- DO NOT verify with `dev` or `build`. Use `lint`.
