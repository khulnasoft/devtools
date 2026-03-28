# Vite Configuration Fix for ELOOP Error

## Problem
Vite's file watcher encounters circular symbolic links in the `enclosed/packages/deploy-cloudflare/.nvmrc` path, causing:
```
Error: ELOOP: too many symbolic links encountered, stat '/vercel/share/v0-next-shadcn/enclosed/packages/deploy-cloudflare/.nvmrc'
```

## Solution: Update vite.config.ts

Add `server.watch.ignored` configuration to prevent Vite from watching problematic directories.

### File: `/vercel/share/v0-next-shadcn/vite.config.ts`

**Add this before the closing `});`:**

```typescript
export default defineConfig({
  plugins: [
    // ... existing plugins ...
  ],
  base: baseUrl,
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  define: {
    'import.meta.env.PACKAGE_VERSION': JSON.stringify(process.env.npm_package_version),
  },
  // ADD THIS SECTION:
  server: {
    watch: {
      ignored: [
        '**/enclosed/**',        // Ignore the enclosed directory with symlink loops
        '**/node_modules/**',    // Ignore node_modules (best practice)
        '**/.git/**',            // Ignore git directory
        '**/dist/**',            // Ignore build outputs
        '**/.vercel/**',         // Ignore Vercel config
      ],
    },
  },
  // END ADDITION
  test: {
    exclude: [...configDefaults.exclude, '**/*.e2e.spec.ts'],
  },
  build: {
    target: 'esnext',
  },
});
```

## Alternative: Remove Enclosed Directory

If the `enclosed` directory is not needed for the project, simply remove it:

```bash
rm -rf /vercel/share/v0-next-shadcn/enclosed
```

This also eliminates the root cause of the ELOOP error.

## Package Fixes Required

### 1. Build Missing Workspace Package

The `@khulnasoft.com/tools-bip39` package needs to be built:

```bash
cd /vercel/share/v0-next-shadcn/packages/tools-bip39
npm run build
```

### 2. Fix Dependency Version Mismatch

**File: `/vercel/share/v0-next-shadcn/package.json`**

Update the following dependencies:

```json
{
  "dependencies": {
    "@unhead/vue": "^1.3.0",
    "@vueuse/core": "^10.3.0",
    "@vueuse/shared": "^10.3.0"
  }
}
```

The issue: `@unhead/vue` v0.5.1 expects `resolveUnref` to be exported from `@vueuse/shared`, but v14.2.1 doesn't have this export. Upgrading to compatible versions resolves this.

Then reinstall:

```bash
pnpm install
```

## Complete Fix Sequence

```bash
cd /vercel/share/v0-next-shadcn

# 1. Remove problematic directory
rm -rf enclosed

# 2. Build workspace package
cd packages/tools-bip39
npm run build
cd ../..

# 3. Update and reinstall dependencies
# (Update package.json with version changes above)
pnpm install

# 4. Start dev server
npm run dev
```

## Verification

After applying these fixes, the dev server should start without errors:

```
✓ vite v4.4.9 building for development...
✓ ready in 1234 ms

➜  Local:   http://localhost:5173/
➜  press h to show help
```

If issues persist, check:
- `node_modules/.vite/` cache is cleared: `rm -rf node_modules/.vite/`
- All package builds completed: Check for `dist/` folders in `packages/*/`
- Dependencies are properly resolved: `pnpm why @vueuse/shared`
