# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start local dev server at localhost:4321
npm run build     # Build for production (outputs to ./dist/)
npm run preview   # Preview production build locally
```

## Architecture

Single-page Astro site for Arman Prangere, behavioral scientist/researcher.

**i18n** — Client-side EN/FR toggle using `data-en` / `data-fr` attributes on every text element. The `LanguageToggle` component's `<script>` walks all `[data-en]` elements and swaps `.textContent` on click. Language preference is persisted in `localStorage`. All translation strings live in `src/i18n/translations.ts` — add new strings there in both languages before using them in a component.

**Page structure** — `src/pages/index.astro` composes all section components in order. Each section is its own component in `src/components/`. Every component imports from `translations.ts` and renders English by default; the client-side script hydrates the correct language after load.

**Styling** — Tailwind CSS via `@astrojs/tailwind`. Custom `salmon` / `salmon-dark` colors are defined in `tailwind.config.mjs`. Global styles and Barlow font import are in `src/styles/global.css`.

**Images** — Drop `me.jpg`, `tea.jpg`, `citeo.jpg`, `wfp.png` into `public/`. The hero image falls back to a UI Avatars placeholder if the file is missing.

## Adding/editing content

- Text changes: edit `src/i18n/translations.ts` (both `en` and `fr` keys)
- New section: create a component in `src/components/`, import it in `src/pages/index.astro`, add strings to `translations.ts`
- Color/design tokens: `tailwind.config.mjs`
