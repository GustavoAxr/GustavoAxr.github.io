# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CODEGAHP is a Spanish-language (es-MX) company website for a software development firm based in , Ciudad del Carmen, Campeche. It showcases services (web development, hosting, domains, custom software products like LIDIA and KODEXA, IT support, and cloud services).

## Commands

```bash
pnpm install          # Install dependencies
pnpm dev              # Start dev server on http://localhost:3000
pnpm build            # Production build
pnpm preview          # Preview production build locally
pnpm postinstall      # Run nuxt prepare (auto-runs after install)
```

No test framework is configured. No linter/formatter is configured.

## Tech Stack

- **Framework**: Nuxt 3 (Vue 3, TypeScript)
- **Package manager**: pnpm
- **Styling**: Tailwind CSS 3 with `tailwindcss-animate` plugin
- **UI components**: shadcn-vue (via `shadcn-nuxt` module), using `radix-vue` / `reka-ui` primitives
- **Icons**: `lucide-vue-next`
- **Color mode**: `@nuxtjs/color-mode` (system preference, class-based dark mode)

## Architecture

- `app/app.vue` — Root component, wraps `<NuxtLayout>` + `<NuxtPage>`
- `layouts/default.vue` — Single layout with AppHeader, AppFooter, MouseGlowEffect, and lazy-loaded CircuitLinesEffect
- `pages/` — File-based routing. Pages are in Spanish: `index.vue`, `servicios/`, `contacto.vue`, `proyectos.vue`, `privacidad.vue`, `terminos.vue`, `cookies.vue`
- `pages/servicios/` — Individual service pages (landing-page, corporativo, dominio, hosting, email, aws, lidia, kodexa, equipos, redes)
- `components/` — Three groups:
  - `ui/` — shadcn-vue components (e.g., `button/`). Add new ones via `npx shadcn-vue@latest add <component>`
  - `landing/` — Homepage sections (AboutHero, BookingSection, ProudProducts, TimelineSection, WhatDefinesUs)
  - `layout/` — AppHeader, AppFooter
  - Root-level: visual effects (CircuitLinesEffect, MouseGlowEffect, BackgroundLogo, Hero3DLogo, LoadingScreen, AIChatDrawer, ThemeToggle)
- `composables/useServices.ts` — Central services catalog with categories and slugs, used for navigation menus and service lookup
- `types/index.ts` — Shared TypeScript interfaces (`Service`, `ServiceItem`)
- `lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)
- `app.html` — Custom loading screen shown before Vue hydration (branded CODEGAHP spinner)

## Styling Conventions

- Brand primary color: `#2DCE9A` (green-turquoise), used as `primary` in Tailwind config
- Dark theme base: `#1A1A2E` (deep navy), used as `secondary`
- Circuit-themed color palette: `circuit-cyan`, `circuit-teal`, `circuit-mint`, `circuit-turquoise`, `circuit-light`
- Custom animations: `circuit-pulse`, `circuit-flow`, `circuit-glow`, `fade-in-up`
- Dark mode uses Tailwind `class` strategy with `dark:` prefixed utilities
- shadcn-vue configured without prefix, components in `components/ui/`, CSS variables disabled (`cssVariables: false`)

## Key Conventions

- All user-facing content is in Spanish (Mexico)
- Path aliases: `~/` and `@/` both resolve to project root
- The `AGENT.MD` contains a standing instruction (in Spanish): always consider the owner's style and improvements in each interaction
