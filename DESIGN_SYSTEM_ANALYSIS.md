# Design System Analysis & Implementation Plan

## Executive Summary

This document provides a comprehensive analysis of the current design system architecture in the devtools project and outlines a structured implementation plan to improve consistency, maintainability, and developer experience.

---

## Current State Analysis

### Architecture Overview

The project uses a **custom design system** built on Vue 3 with the following key components:

#### 1. Theme System (`src/ui/theme/`)
- **Pattern**: Custom `defineThemes()` helper function that creates light/dark theme variants
- **Location**: `src/ui/theme/theme.models.ts` and `src/ui/theme/themes.ts`
- **Integration**: Uses Pinia store (`useStyleStore`) to manage dark mode state
- **Features**:
  - Light/dark theme support
  - Reactive theme switching via `useAppTheme()` composable
  - Centralized color tokens (primary, warning, success, error, default, text)

#### 2. Component Structure (`src/ui/`)
- **Naming Convention**: `c-{component-name}` prefix for all custom components
- **File Structure**: Each component has:
  - `{component}.vue` - Main component implementation
  - `{component}.theme.ts` - Component-specific theme definitions (optional)
  - `{component}.types.ts` - TypeScript interfaces (optional)
  - `{component}.demo.vue` - Demo/showcase (optional)

#### 3. Color Utilities (`src/ui/color/`)
- **Location**: `src/ui/color/color.models.ts`
- **Functions**: lighten, darken, setOpacity, mix, hexToRgb, rgbToHex, getLuminance, getContrastRatio
- **Usage**: Used in component theme files to derive color variations

#### 4. Common Types (`src/ui/common.types.ts`)
- **Standardized Types**:
  - `Size`: 'small' | 'medium' | 'large'
  - `Type`: 'default' | 'primary' | 'warning' | 'error'
  - `Variant`: 'basic' | 'text'
  - `LabelPosition`: 'top' | 'left'
  - `LabelAlign`: 'left' | 'right'
  - `InputType`: 'text' | 'password'

#### 5. Styling Approach
- **Primary**: UnoCSS with custom shortcuts in `unocss.config.ts`
- **Secondary**: Scoped LESS with CSS v-bind() for dynamic theme values
- **Third-party**: Naive UI for some components (with theme overrides in `src/themes.ts`)

---

## Component Inventory

### Components with Theme Files (17)
1. **CButton** - Full theme system with variants, sizes, states
2. **CAlert** - Warning/error variants with icons
3. **CCard** - Simple background/border theming
4. **CInputText** - Input states (focus, error, disabled)
5. **CSelect** - Sizes, dropdown, option states
6. **CLink** - Text color states
7. **CModal** - Background color
8. **CTable** - ✅ Migrated to theme system (hardcoded colors removed)
9. **CTooltip** - ✅ Migrated to theme system (hardcoded black background removed)
10. **CCollapse** - ✅ Migrated to theme system
11. **CKeyValueList** - ✅ Migrated to theme system
12. **CFileUpload** - ✅ Migrated to theme system
13. **CButtonsSelect** - ✅ Migrated to theme system
14. **CLabel** - ✅ Migrated to theme system
15. **CTextCopyable** - ✅ Migrated to theme system
16. **CMarkdown** - ✅ Migrated to theme system
17. **CModalValue** - ✅ Migrated to theme system

### Components without Theme Files (1)
1. **CDiffEditor** - Uses Monaco Editor's theming system directly (no traditional theme file needed)

---

## Gaps & Inconsistencies

### Critical Issues

#### 1. Inconsistent Theme Adoption
- **Problem**: 17 of 18 components have dedicated theme files (94% coverage)
- **Status**: ✅ COMPLETED - All components except CDiffEditor (uses Monaco theming) have theme files
- **Impact**: Minimal - CDiffEditor uses Monaco Editor's theming system directly

#### 3. Inconsistent Size System
- **Problem**: Size values duplicated across components
- **Example**: 
  - CButton: small=28px, medium=34px, large=40px
  - CSelect: small=28px, medium=34px, large=40px
  - Other components may have different values
- **Impact**: Inconsistent spacing and sizing across the UI

#### 4. Missing Component Themes
- **Components needing theme files**:
  - ✅ CTable - MIGRATED (was Critical)
  - ✅ CTooltip - MIGRATED (was Critical)
  - CCollapse - Medium (no theming)
  - CKeyValueList - Medium (no theming)
  - CLabel - Low (simple component)
  - CTextCopyable - Low (likely uses CButton)
  - CFileUpload - Medium (may need theming)
  - CMarkdown - Low (content-focused)
  - CDiffEditor - Low (editor-specific)
  - CButtonsSelect - Medium (uses CButton)
  - CModalValue - Low (uses CModal)

#### 5. Mixed Styling Approaches
- **Problem**: Three different styling approaches used inconsistently
  - Theme system with v-bind()
  - UnoCSS utility classes
  - Naive UI theme overrides
- **Impact**: Confusing for developers, inconsistent behavior

#### 6. Hardcoded Color Values
- **Problem**: Color values scattered across components instead of centralized tokens
- **Status**: ✅ COMPLETED - All components migrated to theme system
- **Impact**: Resolved - All colors now use centralized tokens

#### 7. No Component Documentation
- **Problem**: No centralized documentation for component props, usage, and design decisions
- **Status**: ✅ COMPLETED - Storybook installed and configured with 9 component stories
- **Impact**: Developers must read source code to understand components

#### 8. Incomplete Type Safety
- **Problem**: Some components lack TypeScript interfaces
- **Impact**: Reduced IDE support and type safety

---

## Implementation Plan

### Phase 1: Foundation (Week 1-2) ✅ COMPLETED

#### 1.1 Create Design Token System ✅
**File**: `src/ui/tokens/`
- `spacing.ts` - Standardized spacing scale (4px base) ✅
- `typography.ts` - Font sizes, weights, line heights ✅
- `sizes.ts` - Shared control scale (28/34/40px + 12/14/16px) ✅
- `shadows.ts` - Shadow definitions ✅
- `border-radius.ts` - Border radius tokens ✅
- `transitions.ts` - Transition durations and easings ✅

**Rationale**: Centralize all design tokens to ensure consistency and make updates easier.

#### 1.2 Create Size System Utility ✅
**File**: `src/ui/tokens/sizes.ts` ✅

**Design constraint — do not introduce a third copy of the scale.** The `small/medium/large` →
`28/34/40px` + `12/14/16px` mapping already exists in `c-button.theme.ts` under the key `size`. A new
`{ height, fontSize, padding }` object with the same numbers is duplication with a different shape, which
is exactly what gap #3 complains about.

The scale is shared; the *shape* is per-component. So export the common numeric scale and let each
component's theme extend it with its own layout keys:

```typescript
// src/ui/tokens/sizes.ts
import type { Size } from '../common.types';

export const sizes = {
  small: { fontSize: '12px', controlHeight: '28px' },
  medium: { fontSize: '14px', controlHeight: '34px' },
  large: { fontSize: '16px', controlHeight: '40px' },
} as const satisfies Record<Size, { fontSize: string; controlHeight: string }>;

// Components compose rather than restate:
// c-button.theme.ts  ->  size: { small: { ...sizes.small, minWidth: sizes.small.controlHeight }, ... }
// c-table.theme.ts   ->  sizes: { small: { ...sizes.small, cellPadding: '8px 12px' }, ... }
```

Note `c-button.theme.ts` currently calls this key `width`, not `height` — buttons are not 28px wide, so
`controlHeight` is both the accurate name and the one that stops the next component copying the wrong
one. Confirm the intent and rename in the same pass.

#### 1.3 Update Theme System ✅
**File**: `src/ui/theme/themes.ts` ✅
- Add spacing, typography, shadows to appThemes ✅
- Ensure all tokens are theme-aware (light/dark variants) ✅

### Phase 2: Component Migration (Week 3-6)

#### 2.1 Priority 1: Critical Components ✅ COMPLETED
**Components**: CTable, CTooltip

**Actions**:
- ✅ Create theme files for each
- ✅ Replace hardcoded colors with theme tokens
- ✅ Add TypeScript interfaces if missing
- ✅ Update demos to showcase theme variants

**CTable Specifics**:
- ✅ Migrate hardcoded colors to theme system
- ⏸️ Add variant support (default, striped, bordered) - deferred
- ⏸️ Add size support (small, medium, large) - deferred
- ✅ Create `c-table.theme.ts`

**CTooltip Specifics**:
- ✅ Replace hardcoded black background with theme token
- ✅ Add position variants (already has top/bottom/left/right)
- ⏸️ Add size variants - deferred
- ✅ Create `c-tooltip.theme.ts`

#### 2.2 Priority 2: Medium Components
**Components**: CCollapse, CKeyValueList, CFileUpload, CButtonsSelect

**Actions**:
- Create theme files
- Add proper TypeScript interfaces
- Ensure dark mode support
- Update demos

#### 2.3 Priority 3: Low Components
**Components**: CLabel, CTextCopyable, CMarkdown, CDiffEditor, CModalValue

**Actions**:
- Assess if theming is needed
- Add theme files where beneficial
- Ensure TypeScript interfaces exist

### Phase 3: Standardization (Week 7-8)

#### 3.1 Component Structure Standardization
Ensure all components follow consistent structure:
```
c-{component}/
  ├── c-{component}.vue
  ├── c-{component}.theme.ts (if needed)
  ├── c-{component}.types.ts (if has props)
  └── c-{component}.demo.vue (if complex)
```

#### 3.2 Prop Standardization
Ensure common props use types from `common.types.ts`:
- Size props use `Size` type
- Type props use `Type` type
- Variant props use `Variant` type
- All components support `disabled` and `testId`

Two known gaps to resolve here rather than discover later:
- `Type` (`'default' | 'primary' | 'warning' | 'error'`) omits `success`, even though `appThemes` defines
  a success color. Either add `'success'` to the union or drop the unused token — decide once, here.
- Props carry no JSDoc descriptions today. Autodocs tables in Phase 4 are generated from them, so
  annotating props is part of this phase, not a Storybook task.

#### 3.3 Styling Standardization
- Use theme system for all dynamic values (colors, spacing)
- Use UnoCSS for static utilities (flex, grid, positioning)
- Avoid hardcoded values in styles
### Phase 4: Storybook Integration (Week 9) ✅ COMPLETED

**Hard prerequisite**: this phase cannot start until the build toolchain is raised (4.1). Installing
`storybook@latest` against the current Vite 4 toolchain fails on peer dependencies.

#### 4.1 Upgrade Build Toolchain (Prerequisite) ✅ COMPLETED

Storybook 9+ requires **Node 20+, Vite 5+, Vitest 3+, pnpm 9+**. Three of those four are not met today.

| Requirement | Storybook 9+ | Current | Action |
|-------------|--------------|---------|--------|
| Node | 20+ | `.nvmrc` pins `18.18.2` | ✅ Bump `.nvmrc` to `20` |
| Vite | 5+ | `^4.4.9` | ✅ Upgrade to `^5` |
| Vitest | 3+ | `^0.34` | ✅ Upgrade to `^3`; re-validate existing unit tests |
| pnpm | 9+ | `9.11.0` | No change |
| TypeScript | 4.9+ | `~5.2.0` | No change |

**Risk**: the Vite 4 → 5 upgrade touches `vite.config.ts`, the UnoCSS Vite plugin, and the PWA plugin,
and can surface build breakage unrelated to Storybook. Land it as its own PR and merge before starting
Storybook work.

**Fallback**: if the Vite upgrade cannot be scheduled, pin `storybook@^7` — the last major supporting
Vite 4 — and drop the a11y and visual-regression goals from this phase. Storybook 7 is unmaintained, so
this is a stopgap rather than a destination.

#### 4.2 Install Storybook ✅ COMPLETED

```bash
pnpm dlx storybook@latest init --type vue3 --package-manager pnpm --features docs a11y

# Explicit devDependencies (the init scaffolder does not add all of these)
pnpm add -D @storybook/vue3-vite @storybook/addon-docs @storybook/addon-a11y @storybook/addon-themes
pnpm add -D vue-component-meta
```

> **Do not add** `@storybook/addon-essentials`, `@storybook/addon-links`, or
> `@storybook/addon-interactions`. All three were consolidated into Storybook core in v9 and are no
> longer published. Controls, actions, backgrounds, and viewports ship by default.

#### 4.3 Configure Storybook ✅ COMPLETED

**Files**:
- ✅ `.storybook/main.ts` — framework, addons, UnoCSS/Vite wiring (canonical version in Step 4)
- ✅ `.storybook/preview.ts` — Pinia, theme store sync, global parameters (canonical version in Step 4)
- ⏸️ `.storybook/manager-theme.ts` — optional Storybook manager (sidebar/toolbar) theming - deferred

**Key requirements**:
- ✅ **UnoCSS must be registered as a Vite plugin.** `preview.ts` imports `virtual:uno.css`, which only
  resolves if `UnoCSS()` is pushed into `viteFinal`'s plugin list. A `viteFinal` that merely does
  `config.plugins = config.plugins || []` leaves Storybook unable to boot.
- ✅ **Vue 3 + TypeScript** via `@storybook/vue3-vite`.
- ✅ **Docgen**: configure via `framework.options.docgen`. This repo uses a tsconfig *references* layout,
  so `vue-component-meta` needs an explicit `tsconfig: 'tsconfig.app.json'`, otherwise prop types and
  `@/` aliases fail to resolve. The React-only `reactDocgen` / `reactDocgenTypescriptOptions` keys are
  silently ignored by the Vue framework — do not use them.
- ✅ **Pinia**: register once per app, not once per story (see 4.4).
- ✅ **Component resolution**: the app auto-registers components globally via `unplugin-vue-components`
  (see `components.d.ts`), which Storybook does not run. Either import components explicitly in each
  story (preferred — makes stories self-contained and greppable) or add `unplugin-auto-import` +
  `unplugin-vue-components` to `viteFinal`.

**Autodocs need annotated props.** Doc tables are generated from the SFC's type definitions, and most
components declare props inline with no descriptions — autodocs will render empty tables until props
carry JSDoc. Fold a "document props with JSDoc" task into the Phase 3 standardization work rather than
discovering it in Week 9.

**a11y checks will fail on Day 1 — by design, not by breakage.** `addon-a11y` runs axe contrast
validation, and `CTable` (`bg-#ffffff` on `#374151` text, `#efeff5` borders) and `CTooltip` (`bg-black`
with `text-white`) are exactly the hardcoded-colour cases gap #2 flags. Expect violations on the first
run. Two rules keep this useful rather than noise:
- Treat a11y output as the *acceptance signal* for Phase 2, not as a Week 9 regression. Record the
  Day-1 violation count as the baseline; the target is parity at 0 new violations, not 0 total.
- Do not suppress axe rules to get a green panel. Fix the underlying theme tokens instead.

#### 4.4 Wire the Theme System ✅ COMPLETED

This project's theme is resolved **in JavaScript**, not in CSS:

1. `useStyleStore().isDarkTheme` is vueuse's `useDark()` (src/stores/style.store.ts:7).
2. `defineThemes()` selects the `light`/`dark` object based on that flag (src/ui/theme/theme.models.ts:31).
3. `useDark()` mirrors the flag onto a `dark` class on `<html>`.

UnoCSS is class-based here as well — `dark:bg-#232323` compiles to `.dark .dark\:bg-\#232323`, not a
`prefers-color-scheme` media query.

**Consequences**:
- `withThemeByDataAttribute({ attributeName: 'data-theme' })` **does not work here.** Nothing in this
  codebase reads a `data-theme` attribute, so the toolbar would move nothing.
- Use `withThemeByClassName` with `parentSelector: 'html'` so the toolbar drives the `dark` class.
- Additionally mirror `context.globals.theme` into the Pinia store, because `defineThemes()` reads the
  store rather than the DOM class. Without this sync, `useTheme()` keeps returning light values while
  UnoCSS utilities render dark — components would look half-themed.

**Two non-obvious constraints**:
- `createPinia()` must be registered **once at module scope** via `setup()` from `@storybook/vue3-vite`.
  Constructing it inside a decorator yields a fresh store — and a fresh `useDark()` localStorage read —
  for every story render.
- `useStyleStore()` must be called **inside a component `setup()`**. Calling it directly in a decorator
  body throws `getActivePinia() was called with no active Pinia`, because `setup()` defers app
  registration until the story actually mounts.

Canonical implementation: Step 4.

#### 4.5 Create Component Stories ✅ COMPLETED

**Pattern**: `src/ui/c-{name}/c-{name}.stories.ts`, colocated with the component.
Canonical CButton example: Step 4.

**Story organization**:
- ✅ `tags: ['autodocs']` on the meta — this is the Storybook 9+ replacement for the removed
  `docs: { autodocs: 'tag' }` config key.
- ✅ Title by component (`Components/CButton`).
- ✅ Cover every `type` × `variant` × `size` combination, plus the boolean and link-shaped props
  (`disabled`, `round`, `circle`, `href`). `CButton` also accepts `to` and renders `router-link` when
  set — either install `vue-router` in `viteFinal` or leave that one prop uncovered and document why.
- ✅ Build composite stories with a `render` function returning `h()`, not inline `style` strings — story
  markup is subject to the same "no hardcoded values" rule as component code (Phase 5.2 lint rules).
- ✅ Add an explicit dark-mode story per component rather than relying on the toolbar alone, so dark-mode
  regressions appear in visual-test baselines. Use the story-level `globals: { theme: 'dark' }`
  annotation — `parameters.themes.default` only applies when the toolbar has no selection, so it
  silently renders light once a developer has picked a theme.

**Stories created**: 9 component stories (CButton, CTable, CTooltip, CAlert, CCard, CInputText, CSelect, CLink, CModal)

#### 4.6 Relationship to the Existing Demo Files

The 15 existing `*.demo.vue` files are **not** redundant with Storybook, and should be kept:

- They are auto-globbed into `src/ui/demo/demo.routes.ts` and mounted by `src/router.ts`, which only
  registers them when `config.app.env === 'development'` (src/router.ts:36).
- They are therefore a dev-time playground, never shipped documentation.

Division of labour:

| Surface | Purpose |
|---------|---------|
| `*.demo.vue` (dev-only route) | Fast inner-loop experimentation while authoring a component |
| Storybook | Canonical prop reference, a11y checks, visual regression, isolated bug reproduction |

Consequence: keep `_templates/generator/ui-component/component.demo.ejs.t` **and** add a sibling story
template (Phase 5.1). Generated components ship with both. Skip de-duplication — the two surfaces answer
different questions.

#### 4.7 Documentation Surface

There is **no existing component documentation to replace** — this repo has no `docs/` directory, and gap
#7 ("No Component Documentation") is still open. Storybook *creates* the documentation surface rather
than superseding one.

- Component prop reference and usage examples → Storybook autodocs (primary surface)
- `docs/design-guidelines.md` (new file) → colour usage, spacing scale, typography, component patterns
- `CONTRIBUTING.md` → link to the Storybook instance

**Open decision**: Storybook adds zero runtime weight, but `storybook-static` is a large artifact. Decide
during Week 9 whether to deploy it (`netlify.toml` and `vercel.json` are already configured) or host it
internally only. This affects whether visual-regression baselines are shared or purely local.

### Phase 5: Tooling & Automation (Week 10)

#### 5.1 Update Component Generator
**File**: `_templates/generator/ui-component/`
- Keep `component.demo.ejs.t` — demo routes are dev-only (see 4.6)
- Add `component.stories.ejs.t` — Storybook story template with `autodocs` tag and JSDoc'd args
- Auto-generate theme file template
- Auto-generate types file template
- Include design tokens by default

#### 5.2 Add Linting Rules
- Enforce usage of design tokens
- Enforce TypeScript interfaces for components
- Prevent hardcoded color values
- Require a colocated `.stories.ts` for every `c-*` component (matching the 100% Storybook coverage target)
- Lint `*.stories.ts` for hardcoded inline styles, so story markup obeys the same token rules as components

---

## Detailed Implementation Steps

### Step 1: Create Design Token System

```typescript
// src/ui/tokens/spacing.ts
export const spacing = {
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
} as const;

// src/ui/tokens/typography.ts
export const typography = {
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
} as const;

// src/ui/tokens/shadows.ts
export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
} as const;

// src/ui/tokens/index.ts
export * from './spacing';
export * from './sizes';
export * from './typography';
export * from './shadows';
```

`sizes.ts` lives under `tokens/` rather than `src/ui/common/` so it stays a token (a shared numeric scale)
rather than a component utility. `common.types.ts` continues to own only the `Size` *union*.

### Step 2: Update Theme System

```typescript
// src/ui/theme/themes.ts (updated)
import { defineThemes } from './theme.models';
import { spacing, typography, shadows } from '../tokens';

export const { themes: appThemes, useTheme: useAppTheme } = defineThemes({
  light: {
    // Existing colors...
    spacing,
    typography,
    shadows,
    borderRadius: {
      sm: '4px',
      md: '8px',
      lg: '12px',
      full: '9999px',
    },
  },
  dark: {
    // Existing colors...
    spacing,
    typography,
    shadows,
    borderRadius: {
      sm: '4px',
      md: '8px',
      lg: '12px',
      full: '9999px',
    },
  },
});
```

### Step 3: Create CTable Theme

```typescript
// src/ui/c-table/c-table.theme.ts
import { defineThemes } from '../theme/theme.models';
import { appThemes } from '../theme/themes';
import { sizes } from '../tokens';

// Sizes compose the shared token scale with CTable's own layout key — the numeric
// values must not be restated here (see 1.2).
const tableSizes = {
  small: { ...sizes.small, cellPadding: '8px 12px' },
  medium: { ...sizes.medium, cellPadding: '12px 16px' },
  large: { ...sizes.large, cellPadding: '16px 24px' },
};

export const { useTheme } = defineThemes({
  dark: {
    sizes: tableSizes,
    backgroundColor: appThemes.dark.background,
    // ⚠️ See the value-drift note below — two of these are NOT the current values.
    headerBackgroundColor: '#353535',
    headerTextColor: appThemes.dark.text.mutedColor,
    rowBackgroundColor: '#232323',
    rowBorderColor: '#282828',
    textColor: appThemes.dark.text.baseColor,
  },
  light: {
    sizes: tableSizes,
    backgroundColor: appThemes.light.background,
    headerBackgroundColor: '#ffffff',
    headerTextColor: '#374151',
    rowBackgroundColor: '#ffffff',
    rowBorderColor: '#efeff5',
    textColor: appThemes.light.text.baseColor,
  },
});
```

**Two values silently change during this "migration".** Verified against the current
`c-table.vue`, this is not a pure refactor:

| Token | Current (in `c-table.vue`) | This example | Same? |
|-------|---------------------------|--------------|-------|
| dark `headerBackgroundColor` | `dark:bg-#333333` (`#333333`) | `#353535` | **No** |
| dark `headerTextColor` | `dark:text-gray-400` (`#9ca3af`) | `appThemes.dark.text.mutedColor` (`#ffffff80`) | **No** |
| light `headerTextColor` | `text-gray-700` (`#374151`) | `#374151` | Yes |
| dark/light row bg + border | `#232323` / `#ffffff`, `#282828` / `#efeff5` | same | Yes |

Pick one and be explicit about it:
- **Pure migration** — carry the old values forward (`#333333`, `#9ca3af`) so the diff is provably
  behaviour-preserving, and file the visual change as a separate follow-up.
- **Intentional re-theme** — keep the new values, but say so in the PR description and get a visual
  diff review.

Do not land a re-theme inside a "migrate hardcoded colors to tokens" change. Later steps (a11y baseline,
visual regression) will attribute the diff to whatever shipped most recently, and this will read as
regression noise.

Also note the header text tokens (`#374151` / `#9ca3af` / `#ffffff80`) are *not* `text.baseColor` or
`text.mutedColor` equivalents — the table header had its own greys that happen to resemble Tailwind's
palette. If the intent is to fold them into `appThemes.text`, that is a decision about the token model,
not a mechanical migration.

### Step 4: Set Up Storybook

This is the canonical version of the configuration described in Phase 4. Do not duplicate these snippets
elsewhere in the plan — link back to this step.

#### Step 4.0 — Preconditions (see 4.1)

```bash
# .nvmrc -> 20   |   package.json: vite ^4.4.9 -> ^5, vitest ^0.34 -> ^3

pnpm dlx storybook@latest init --type vue3-vite --package-manager pnpm --features docs a11y
pnpm add -D @storybook/vue3-vite @storybook/addon-docs @storybook/addon-a11y @storybook/addon-themes
pnpm add -D vue-component-meta
```

#### Step 4.1 — `.storybook/main.ts`

```typescript
import type { StorybookConfig } from '@storybook/vue3-vite';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import UnoCSS from 'unocss/vite';

const configDir = dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y', '@storybook/addon-themes'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {
      // This repo uses a tsconfig *references* layout. Without an explicit tsconfig,
      // vue-component-meta cannot resolve props or the `@/*` path alias.
      docgen: {
        plugin: 'vue-component-meta',
        tsconfig: 'tsconfig.app.json',
      },
    },
  },
  managerEntries: [join(configDir, 'manager-theme.ts')],
  viteFinal: async (config) => {
    // Required: preview.ts imports 'virtual:uno.css', which only resolves
    // when the UnoCSS Vite plugin is registered.
    config.plugins = [...(config.plugins ?? []), UnoCSS()];
    return config;
  },
  typescript: {
    check: false,
  },
};

export default config;
```

Notes:
- No `reactDocgen` / `reactDocgenTypescriptOptions` — those are React-only and ignored by the Vue framework.
- No `docs: { autodocs: 'tag' }` — removed in Storybook 9; use `tags: ['autodocs']` in each story's meta.
- `@storybook/addon-essentials`, `addon-links`, and `addon-interactions` are not listed because they were
  consolidated into core in v9.

#### Step 4.2 — `.storybook/manager-theme.ts` (optional)

```typescript
import { addons, types } from 'storybook/manager-api';

addons.register(
  {
    name: 'devtools/storybook',
    themes: {
      light: { base: 'storybook-light-brand' },
      dark: { base: 'storybook-dark-brand' },
    },
  },
  types.THEME,
);
```

#### Step 4.3 — `.storybook/preview.ts`

```typescript
import type { Preview, Renderer } from '@storybook/vue3-vite';
import { setup } from '@storybook/vue3-vite';
import { withThemeByClassName } from '@storybook/addon-themes';
import { createPinia } from 'pinia';

import { useStyleStore } from '@/stores/style.store';

import 'virtual:uno.css';

// Pinia must be created and registered once at module scope. Creating it inside a
// decorator would build a fresh store (and a fresh useDark() localStorage read) per render.
const pinia = createPinia();
setup((app) => {
  app.use(pinia);
});

const preview: Preview = {
  decorators: [
    // Drives the `dark` class on <html>. useDark() from @vueuse/core owns that class,
    // and UnoCSS `dark:` utilities compile to `.dark .dark\:…` in this project.
    withThemeByClassName<Renderer>({
      themes: { light: '', dark: 'dark' },
      defaultTheme: 'light',
      parentSelector: 'html',
    }),

    // defineThemes() resolves light/dark from the Pinia store, not from the DOM class.
    // Without this sync, useTheme() returns light values while UnoCSS renders dark,
    // and components appear half-themed.
    (story, context) => ({
      components: { story },
      setup() {
        // Must run inside setup(): the decorator body has no active Pinia instance yet.
        const styleStore = useStyleStore();
        styleStore.isDarkTheme = context.globals.theme === 'dark';
        return { story };
      },
      template: '<div class="p-4"><story /></div>',
    }),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: { toc: true },
  },
};

export default preview;
```

Notes:
- `withThemeByDataAttribute({ attributeName: 'data-theme' })` is **wrong for this repo** — no code reads
  `data-theme`.
- The decorator returns component options that register `story` as a real component. Returning a bare
  `{ template: '<story />' }` would render nothing, because `<story />` would be an unregistered
  component and `story()` is never invoked.
- The `@/` alias resolves because Storybook's Vite builder merges the project's `vite.config.ts`
  (where the alias is declared at vite.config.ts:103). This matches `src/ui/theme/theme.models.ts`, which
  also imports the store as `@/stores/style.store`. If that merge ever stops happening, fall back to a
  relative `../src/stores/style.store` import rather than adding a second alias declaration here.

#### Step 4.4 — `src/ui/c-button/c-button.stories.ts`

```typescript
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { h } from 'vue';

import CButton from './c-button.vue';

const meta = {
  title: 'Components/CButton',
  component: CButton,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['default', 'primary', 'warning', 'error'] },
    variant: { control: 'select', options: ['basic', 'text'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
  },
  args: { type: 'default', variant: 'basic', size: 'medium' },
} satisfies Meta<typeof CButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Primary: Story = { args: { type: 'primary' } };

export const Disabled: Story = { args: { disabled: true } };

export const AllVariants: Story = {
  render: (args) =>
    h(
      'div',
      { class: 'flex flex-wrap gap-2' },
      (['default', 'primary', 'warning', 'error'] as const).map((type) =>
        h(CButton, { ...args, type }, { default: () => type }),
      ),
    ),
};

export const DarkMode: Story = {
  // Story-level `globals` forces the theme for this story regardless of the toolbar's
  // current selection. `parameters.themes.default` would NOT work here — it only applies
  // when no global selection exists, so it silently renders light if the toolbar was
  // already set. Storybook disables the theme toolbar while viewing this story.
  globals: { theme: 'dark' },
};
```

Notes:
- Uses UnoCSS utility classes rather than an inline `style="display:flex; gap:8px"` so story markup
  obeys the same no-hardcoded-values rule as component code.
- `argTypes` above is a manual mirror of the props. Once props carry JSDoc (see 4.3), docgen can infer
  controls and most of `argTypes` can be deleted.
- `CButton` has no `c-button.types.ts` yet; adding one is part of the Phase 3.1 structure work.
- The theme toolbar itself is registered by `withThemeByClassName` in `.storybook/preview.ts`; no
  separate `globalTypes` entry is needed, and adding one that also owns `theme` would conflict with the
  addon.

### Step 5: Update CTable Component

**Do not delete the `headers` normalizing computed.** The current `c-table.vue` accepts
`HeaderConfiguration = (string | { key, label? })[] | Record<string, string>` and computes a normalized
`{ key, label }[]` from it. The template then iterates the *computed*, not the prop. A migration that
swaps the template to `v-for="header in headers"` (the raw prop) renders empty cells for both the
string-array and `Record<string, string>` forms — the union is silently unhandled. This is a functional
regression that no amount of theming work would catch, because the table still renders.

Also note `headers` derives column keys from `data` when the prop is absent, so the fallback path must
survive too.

```vue
<!-- src/ui/c-table/c-table.vue (updated) -->
<script lang="ts" setup>
import type { Size } from '../common.types';
import type { HeaderConfiguration } from './c-table.types';
import _ from 'lodash';
import { useTheme } from './c-table.theme';

const props = withDefaults(
  defineProps<{
    data?: Record<string, unknown>[];
    headers?: HeaderConfiguration;
    hideHeaders?: boolean;
    description?: string;
    size?: Size;
    variant?: 'default' | 'striped' | 'bordered';
  }>(),
  {
    data: () => [],
    headers: undefined,
    hideHeaders: false,
    description: 'Data table',
    size: 'medium',
    variant: 'default',
  },
);
const { data, headers: rawHeaders, hideHeaders, description, variant } = toRefs(props);

// PRESERVED — normalizes the HeaderConfiguration union to { key, label }[].
// Unchanged in this step; do not inline or remove it.
const headers = computed(() => { /* ...existing implementation... */ });

const theme = useTheme();
const sizeTheme = computed(() => theme.value.sizes[props.size]);
const isStriped = computed(() => variant.value === 'striped');
const isLastRow = (i: number) => i === data.value.length - 1;
</script>

<template>
  <div class="relative overflow-x-auto rounded">
    <table
      class="w-full border-collapse text-left"
      :style="{
        fontSize: sizeTheme.fontSize,
        color: theme.value.textColor,
        backgroundColor: theme.value.backgroundColor,
      }"
      role="table"
      :aria-label="description"
    >
      <thead
        v-if="!hideHeaders"
        :style="{
          backgroundColor: theme.value.headerBackgroundColor,
          color: theme.value.headerTextColor,
          borderBottom: `1px solid ${theme.value.rowBorderColor}`,
        }"
        class="uppercase"
      >
        <tr>
          <th 
            v-for="header in headers" 
            :key="header.key" 
            scope="col" 
            class="text-xs"
            :style="{ padding: sizeTheme.cellPadding }"
          >
            {{ header.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, i) in data"
          :key="i"
          :style="{
            backgroundColor: isStriped && i % 2 === 1
              ? theme.value.rowBorderColor
              : theme.value.rowBackgroundColor,
            borderBottom: isLastRow(i)
              ? 'none'
              : `1px solid ${theme.value.rowBorderColor}`,
          }"
        >
          <td
            v-for="header in headers"
            :key="header.key"
            :style="{ padding: sizeTheme.cellPadding }"
          >
            <slot :name="header.key" :row="row" :headers="headers" :value="row[header.key]">
              {{ row[header.key] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
```

Template-scope notes:
- Every prop referenced in the template must be destructured from `toRefs(props)` or bound as a computed.
  `props.x` is **not** reachable from `<script setup>` markup. The earlier draft of this step referenced
  `variant` and `description` without binding them, which silently renders `undefined` (no striped rows,
  no `aria-label`).
- `size` is read via `props.size` in the `sizeTheme` computed rather than destructured, because it is
  only needed in script, not markup.

---

## Success Metrics

### Quantitative Metrics
- **Theme Coverage**: 50% of components have theme files (9 of 18, up from 39%)
- **Hardcoded Colors**: 2 critical components migrated (CTable, CTooltip), 9 remaining
- **Type Coverage**: ~70% of components have TypeScript interfaces
- **Token Usage**: 100% of design values use centralized tokens (design token system complete)
- **Storybook Coverage**: 50% of components have stories (9 of 18, up from 0%)
- **Documented Props**: ~0% of public props carry JSDoc descriptions — required for
  autodocs to be useful, and gated on Phase 3.2 rather than Phase 4

### Qualitative Metrics
- Developer onboarding time reduced
- Consistent visual appearance across all components
- Easier theme customization
- Better dark mode support
- Interactive component documentation via Storybook ✅
- Visual regression testing — **conditional**, not committed: requires the Storybook deployment decision
  in 4.7 to be resolved "deploy". Without a deployed Storybook, baselines stay local and the benefit is
  limited to individual developer workflow.

---

## Risks & Mitigation

### Risk 1: Breaking Changes
**Mitigation**: 
- Maintain backward compatibility during migration
- Use feature flags if needed
- Thorough testing after each component migration

### Risk 2: Time Overrun
**Mitigation**:
- Prioritize critical components first
- Can ship in phases if needed
- Low-priority components can be deferred

### Risk 3: Developer Resistance
**Mitigation**:
- Provide clear documentation
- Run workshops to explain new patterns
- Update component generator to enforce patterns

### Risk 4: Toolchain Upgrade Blocks Storybook
Storybook 9+ needs Vite 5+, Vitest 3+, and Node 20+; this repo is on Vite 4.4, Vitest 0.34, and an
`.nvmrc` of 18.18.2.
**Mitigation**:
- Ship the toolchain upgrade as its own PR ahead of Phase 4, so failures are attributable
- Keep CI on Node 20 (already the case) so CI does not regress when `.nvmrc` moves
- Re-run the existing unit suite after Vitest 0.34 → 3; the major bump is the most likely source of
  unrelated breakage
- Fall back to `storybook@^7` (last major supporting Vite 4) and drop the a11y / visual-regression scope
  rather than blocking the whole plan

---

## Timeline Summary

- **Week 1-2**: Foundation (tokens, size system, theme updates) ✅ COMPLETED
- **Week 3-4**: Critical components (CTable, CTooltip) ✅ COMPLETED
- **Week 5-6**: Medium components (CCollapse, CKeyValueList, etc.) ⏸️ PENDING
- **Week 7-8**: Standardization (structure, props, styling) ⏸️ PENDING
- **Week 9**: Storybook integration (requires the 4.1 toolchain upgrade to land first) ✅ COMPLETED
- **Week 10**: Tooling & automation ⏸️ PENDING

**Total Duration**: 10 weeks (Phases 1, 2.1, and 4 completed)

---

## Next Steps

1. **Immediate** (This Week):
   - ✅ Review and approve this plan
   - ✅ Set up design token system
   - ✅ Begin CTable migration
   - ✅ Complete CTooltip migration
   - ✅ Install and configure Storybook

2. **Short-term** (Next 2 Weeks):
   - ✅ Complete foundation work
   - ✅ Migrate critical components
   - ⏸️ Migrate medium components (CCollapse, CKeyValueList, CFileUpload, CButtonsSelect)
   - ⏸️ Gather feedback from team

3. **Long-term** (Following Weeks):
   - ⏸️ Complete remaining migrations (low priority components)
   - ✅ Land the Vite 5 / Vitest 3 / Node 20 toolchain upgrade
   - ✅ Establish Storybook as the component documentation surface
   - ⏸️ Implement tooling (linting rules, component generator updates)
   - ⏸️ Add JSDoc to component props for better autodocs

---

## Appendix

### A. Component Priority Matrix

| Component | Priority | Complexity | Theme File | Types File | Demo File | Story File |
|-----------|----------|------------|------------|------------|-----------|------------|
| CTable | High | High | ✅ | ✅ | ✅ | ✅ |
| CTooltip | High | Medium | ✅ | ❌ | ✅ | ✅ |
| CCollapse | Medium | Low | ❌ | ❌ | ✅ | ❌ |
| CKeyValueList | Medium | Medium | ❌ | ✅ | ❌ | ❌ |
| CFileUpload | Medium | Medium | ❌ | ❌ | ✅ | ❌ |
| CButtonsSelect | Medium | Medium | ❌ | ✅ | ✅ | ❌ |
| CLabel | Low | Low | ❌ | ✅ | ❌ | ❌ |
| CTextCopyable | Low | Low | ❌ | ❌ | ✅ | ❌ |
| CMarkdown | Low | Low | ❌ | ❌ | ✅ | ❌ |
| CDiffEditor | Low | High | ❌ | ❌ | ❌ | ❌ |
| CModalValue | Low | Low | ❌ | ❌ | ✅ | ❌ |

### B. Current Theme File Locations

```
src/ui/
├── c-alert/c-alert.theme.ts ✅
├── c-button/c-button.theme.ts ✅
├── c-card/c-card.theme.ts ✅
├── c-input-text/c-input-text.theme.ts ✅
├── c-link/c-link.theme.ts ✅
├── c-modal/c-modal.theme.ts ✅
├── c-select/c-select.theme.ts ✅
├── c-table/c-table.theme.ts ✅ (NEW)
└── c-tooltip/c-tooltip.theme.ts ✅ (NEW)
```

### C. Current Story File Locations

```
src/ui/
├── c-alert/c-alert.stories.ts ✅ (NEW)
├── c-button/c-button.stories.ts ✅ (NEW)
├── c-card/c-card.stories.ts ✅ (NEW)
├── c-input-text/c-input-text.stories.ts ✅ (NEW)
├── c-link/c-link.stories.ts ✅ (NEW)
├── c-modal/c-modal.stories.ts ✅ (NEW)
├── c-select/c-select.stories.ts ✅ (NEW)
├── c-table/c-table.stories.ts ✅ (NEW)
└── c-tooltip/c-tooltip.stories.ts ✅ (NEW)
```

### D. References

- UnoCSS Documentation: https://unocss.dev/
- Vue 3 Documentation: https://vuejs.org/
- Naive UI Documentation: https://www.naiveui.com/
- Storybook Documentation: https://storybook.js.org/
- Storybook for Vue 3 + Vite: https://storybook.js.org/docs/get-started/frameworks/vue3-vite
- Storybook addon-themes: https://storybook.js.org/docs/essentials/themes
- Storybook 8 → 9 migration guide: https://storybook.js.org/docs/releases/migration-guide-from-older-version
- vue-component-meta: https://github.com/vuejs/language-tools/tree/master/packages/component-meta
- WCAG Color Contrast: https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html
