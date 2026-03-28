# ELOOP Error and Build Issues - Complete Fix Guide

## Root Causes Identified

Three distinct issues are occurring in the `/vercel/share/v0-next-shadcn` project:

### 1. ELOOP Error - Too Many Symbolic Links
**Location**: `/vercel/share/v0-next-shadcn/enclosed/packages/deploy-cloudflare/.nvmrc`
**Cause**: Circular symbolic link in the `enclosed` directory that Vite file watcher is trying to stat
**Solution**: Configure Vite to ignore the `enclosed` directory

### 2. Missing Package Build
**Issue**: `@khulnasoft.com/tools-bip39` package.json expects `dist/index.js` but dist folder doesn't exist
**Location**: `/vercel/share/v0-next-shadcn/packages/tools-bip39/dist` (missing)
**Cause**: Package hasn't been built with `npm run build`
**Solution**: Build the bip39 package before dev server starts

### 3. Dependency Version Mismatch
**Issue**: @unhead/vue v0.5.1 tries to import `resolveUnref` from @vueuse/shared but it's not exported
**Locations**:
- `node_modules/.pnpm/@unhead+vue@0.5.1_vue@3.3.4/node_modules/@unhead/vue/dist/index.mjs:1:9`
- `node_modules/.pnpm/@vueuse+shared@14.2.1_vue@3.3.4/node_modules/@vueuse/shared/dist/index.js`
**Cause**: Version incompatibility between @unhead/vue and @vueuse/shared
**Solution**: Update package versions

## Fix Implementation

### Step 1: Update vite.config.ts
Add server configuration to ignore the `enclosed` directory from Vite's file watcher:

```typescript
server: {
  watch: {
    ignored: ['**/enclosed/**', '**/node_modules/**', '**/.git/**'],
  },
},
```

This prevents Vite from attempting to stat files in the problematic enclosed directory with circular symlinks.

### Step 2: Build the bip39 Package
Before running the dev server, ensure the workspace package is built:

```bash
# In /vercel/share/v0-next-shadcn
cd packages/tools-bip39
npm run build
cd ../..
```

This generates the `dist/` folder with properly exported `index.js` and `index.d.ts`.

### Step 3: Fix Dependency Versions
Update package.json to use compatible versions:

- Upgrade `@unhead/vue` to `^1.0.0` (or latest compatible with @vueuse/shared)
- Ensure `@vueuse/shared` and `@vueuse/core` are aligned (currently 14.2.1)

```json
{
  "@unhead/vue": "^1.0.0",
  "@vueuse/core": "^10.3.0",
  "@vueuse/shared": "^10.3.0"
}
```

Then reinstall:
```bash
pnpm install
```

### Step 4: Clean and Rebuild
```bash
# Clear node_modules cache
rm -rf node_modules/.vite
pnpm install
npm run dev
```

## Prevention

To prevent similar issues:

1. **Vite Configuration**: Always exclude problematic directories in watch config
2. **Monorepo Setup**: Ensure all workspace packages have built dist folders before dev
3. **Dependency Management**: Regularly audit dependencies for version mismatches using `pnpm outdated`
4. **Git**: Add `enclosed/` to `.gitignore` if it's a temporary directory

## Verification

After applying fixes, verify:
- ✓ Dev server starts without ELOOP errors
- ✓ No "Failed to resolve entry" errors for @khulnasoft.com/tools-bip39
- ✓ No "No matching export" errors for @vueuse/shared imports
- ✓ Application loads successfully at http://localhost:5173
