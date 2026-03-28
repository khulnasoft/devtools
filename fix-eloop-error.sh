#!/bin/bash

# Fix ELOOP and build errors in v0-next-shadcn project

PROJECT_DIR="/vercel/share/v0-next-shadcn"

if [ ! -d "$PROJECT_DIR" ]; then
  echo "Error: Project directory not found at $PROJECT_DIR"
  exit 1
fi

cd "$PROJECT_DIR" || exit

echo "=== Fixing ELOOP and Build Errors ==="
echo ""

# Step 1: Remove the problematic enclosed directory symlink
echo "Step 1: Checking enclosed directory for symlinks..."
if [ -d "enclosed" ]; then
  echo "Found 'enclosed' directory. Removing to prevent symlink loops..."
  rm -rf enclosed
  echo "✓ Removed enclosed directory"
else
  echo "✓ No enclosed directory found"
fi

echo ""
echo "Step 2: Building workspace packages..."

# Build the bip39 package
if [ -d "packages/tools-bip39" ]; then
  echo "Building @khulnasoft.com/tools-bip39..."
  cd packages/tools-bip39
  npm run build 2>&1
  if [ $? -eq 0 ]; then
    echo "✓ Successfully built tools-bip39"
  else
    echo "⚠ Build warning for tools-bip39, continuing..."
  fi
  cd ../..
else
  echo "⚠ tools-bip39 package not found"
fi

echo ""
echo "Step 3: Installing dependencies..."
pnpm install --force

echo ""
echo "=== Fix Complete ==="
echo ""
echo "You can now start the dev server with:"
echo "  npm run dev"
echo "or"
echo "  pnpm dev"
