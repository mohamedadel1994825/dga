import fs from 'fs';
import path from 'path';

function stripPlatformscodeCss(targetPath) {
  if (!fs.existsSync(targetPath)) return { changed: false, reason: 'missing' };
  const original = fs.readFileSync(targetPath, 'utf8');

  // 1) If the vendor file is minified with leading @import then CSS, keep from first ruleset
  const marker = 'html,body';
  const markerIdx = original.indexOf(marker);
  let working = markerIdx !== -1 ? original.slice(markerIdx) : original;

  // 2) Remove any remaining @import statements anywhere in the file (defensive)
  let sanitized = working.replace(/@import[^;]+;\s*/g, '');

  // 3) Remove legacy CSS hacks that modern parsers reject (e.g., *margin-left, IE backslash hacks)
  //    - Star-hack declarations like ; *prop: value;
  sanitized = sanitized.replace(/;\s*\*[a-zA-Z-]+\s*:[^;}]+;?/g, ';');
  //    - Declarations ending with \9 or \0 hacks
  sanitized = sanitized.replace(/\b[a-zA-Z-]+\s*:[^;{}]*\\[90]\s*;?/g, '');
  //    - Remove stray duplicated semicolons
  sanitized = sanitized.replace(/;;+/g, ';');

  if (sanitized !== original) {
    fs.writeFileSync(targetPath, sanitized, 'utf8');
    return { changed: true, reason: markerIdx !== -1 ? 'sliced+regex' : 'regex' };
  }
  return { changed: false, reason: 'no-op' };
}

const root = process.cwd();

function findPnpmStoreTargets(pkgDirPrefix, relativeFile) {
  const storeDir = path.join(root, 'node_modules/.pnpm');
  const results = [];
  if (!fs.existsSync(storeDir)) return results;
  for (const entry of fs.readdirSync(storeDir)) {
    if (!entry.startsWith(pkgDirPrefix)) continue;
    const candidate = path.join(storeDir, entry, 'node_modules', relativeFile);
    if (fs.existsSync(candidate)) {
      results.push(candidate);
    }
  }
  return results;
}

const targets = [
  // direct hoisted/symlink paths
  path.join(root, 'node_modules/@platformscode/core/dist/core/core.css'),
  path.join(root, 'node_modules/platformscode-new-react/dist/style.css'),
  // pnpm store copies
  ...findPnpmStoreTargets('@platformscode+core@', '@platformscode/core/dist/core/core.css'),
  ...findPnpmStoreTargets('platformscode-new-react@', 'platformscode-new-react/dist/style.css'),
];

let changedAny = false;
let lastWritten = '';
for (const t of targets) {
  try {
    const result = stripPlatformscodeCss(t);
    if (result.changed) {
      console.log(`Removed @import from: ${t} (${result.reason})`);
      changedAny = true;
      lastWritten = t;
    } else {
      console.log(`No change: ${t} (${result.reason})`);
    }
  } catch (e) {
    console.warn(`Failed to process ${t}:`, e.message);
  }
}

if (!changedAny) {
  console.log('No files updated by strip-platformscode-css');
}

// Copy a cleaned core.css to public so we can include via <link>
try {
  const publicCssDir = path.join(root, 'public', 'vendor');
  if (!fs.existsSync(publicCssDir)) fs.mkdirSync(publicCssDir, { recursive: true });
  // Prefer pnpm cleaned copy if exists
  const pnpmCore = targets.find(p => p.includes('.pnpm/@platformscode+core@'))
    || path.join(root, 'node_modules/@platformscode/core/dist/core/core.css');
  if (fs.existsSync(pnpmCore)) {
    const dest = path.join(publicCssDir, 'platformscode-core.css');
    fs.copyFileSync(pnpmCore, dest);
    console.log(`Copied cleaned core.css to: ${dest}`);
  }
} catch (e) {
  console.warn('Failed to copy cleaned CSS to public:', e.message);
}

