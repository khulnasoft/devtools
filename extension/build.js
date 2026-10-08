#!/usr/bin/env node

/**
 * Build script for packaging the browser extension
 * This script creates a zip file ready for upload to Chrome Web Store or Firefox Add-ons
 */

import { execSync } from 'child_process';
import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync, cpSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const extensionDir = join(rootDir, 'extension');
const distDir = join(rootDir, 'dist-extension');

console.log('🔨 Building Dev Tools Browser Extension...\n');

// Clean dist directory
console.log('🧹 Cleaning dist directory...');
rmSync(distDir, { recursive: true, force: true });
mkdirSync(distDir, { recursive: true });

// Copy extension files
console.log('📦 Copying extension files...');
const filesToCopy = [
  'manifest.json',
  'browser-polyfill.js',
  'background.js',
  'content-script.js',
  'popup.html',
  'popup.js',
  'inject-tool.js',
  'toolbar.html',
  'toolbar.js',
  'options.html',
  'options.js',
];

filesToCopy.forEach((file) => {
  const src = join(extensionDir, file);
  const dest = join(distDir, file);
  const content = readFileSync(src, 'utf-8');
  writeFileSync(dest, content);
  console.log(`  ✓ ${file}`);
});

// Copy icons directory
console.log('📦 Copying icons...');
cpSync(join(extensionDir, 'icons'), join(distDir, 'icons'), { recursive: true });
console.log('  ✓ icons/');

// Update manifest version from package.json
console.log('📝 Updating manifest version...');
const packageJson = JSON.parse(readFileSync(join(rootDir, 'package.json'), 'utf-8'));
const manifestPath = join(distDir, 'manifest.json');
const manifest = JSON.parse(readFileSync(manifestPath, 'utf-8'));
manifest.version = packageJson.version;
writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
console.log(`  ✓ Version: ${packageJson.version}`);

console.log('\n✅ Build complete!');
console.log(`📁 Extension built in: ${distDir}`);
console.log('\nTo load the extension in Chrome:');
console.log('1. Open chrome://extensions/');
console.log('2. Enable "Developer mode"');
console.log('3. Click "Load unpacked"');
console.log(`4. Select the ${distDir} directory`);
console.log('\nTo load the extension in Firefox:');
console.log('1. Open about:debugging');
console.log('2. Click "This Firefox"');
console.log('3. Click "Load Temporary Add-on"');
console.log(`4. Select the manifest.json file in ${distDir}`);
