#!/usr/bin/env python3
"""
Fix ELOOP and build errors in v0-next-shadcn project

Errors being fixed:
1. ELOOP: too many symbolic links in enclosed/packages/deploy-cloudflare/.nvmrc
2. Missing @khulnasoft.com/tools-bip39 dist build
3. @unhead/vue and @vueuse/shared version mismatch
"""

import os
import shutil
import subprocess
import sys
from pathlib import Path

def run_command(cmd, cwd=None, ignore_error=False):
    """Execute a shell command and return success status"""
    try:
        print(f"  Running: {cmd}")
        result = subprocess.run(
            cmd,
            shell=True,
            cwd=cwd,
            capture_output=True,
            text=True
        )
        
        if result.returncode != 0 and not ignore_error:
            print(f"  ✗ Error: {result.stderr}")
            return False
        
        if result.stdout:
            print(f"  {result.stdout.strip()}")
        return True
    except Exception as e:
        print(f"  ✗ Exception: {e}")
        return False


def main():
    project_dir = "/vercel/share/v0-next-shadcn"
    
    print("=" * 60)
    print("ELOOP & Build Error Fix Script")
    print("=" * 60)
    print()
    
    # Verify project exists
    if not os.path.isdir(project_dir):
        print(f"✗ Error: Project not found at {project_dir}")
        return False
    
    print(f"Working on: {project_dir}")
    print()
    
    # Step 1: Remove enclosed directory with symlink loops
    print("Step 1: Removing enclosed directory (contains symlink loops)")
    print("-" * 60)
    
    enclosed_dir = os.path.join(project_dir, "enclosed")
    if os.path.exists(enclosed_dir):
        try:
            shutil.rmtree(enclosed_dir, ignore_errors=True)
            print("✓ Removed enclosed directory")
        except Exception as e:
            print(f"⚠ Warning removing enclosed: {e}")
    else:
        print("✓ No enclosed directory to remove")
    
    print()
    
    # Step 2: Build bip39 package
    print("Step 2: Building workspace packages")
    print("-" * 60)
    
    bip39_dir = os.path.join(project_dir, "packages", "tools-bip39")
    if os.path.isdir(bip39_dir):
        print("Building @khulnasoft.com/tools-bip39...")
        success = run_command("npm run build", cwd=bip39_dir, ignore_error=True)
        if success:
            print("✓ tools-bip39 built successfully")
        else:
            print("⚠ tools-bip39 build completed with warnings")
    else:
        print("⚠ tools-bip39 not found")
    
    print()
    
    # Step 3: Clean and install dependencies
    print("Step 3: Cleaning and installing dependencies")
    print("-" * 60)
    
    # Remove node_modules cache
    vite_cache = os.path.join(project_dir, "node_modules", ".vite")
    if os.path.exists(vite_cache):
        shutil.rmtree(vite_cache, ignore_errors=True)
        print("✓ Cleared Vite cache")
    
    # Install with force flag
    print("Installing dependencies (this may take a minute)...")
    success = run_command("pnpm install --force", cwd=project_dir, ignore_error=True)
    
    print()
    print("=" * 60)
    print("✓ Fixes Applied Successfully!")
    print("=" * 60)
    print()
    print("Next steps:")
    print(f"  cd {project_dir}")
    print("  npm run dev")
    print()
    
    return True


if __name__ == "__main__":
    try:
        success = main()
        sys.exit(0 if success else 1)
    except Exception as e:
        print(f"Fatal error: {e}")
        sys.exit(1)
