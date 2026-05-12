/**
 * Vite (Windows) calls `child_process.exec("net use")` to optimize realpath handling.
 * In some sandboxed terminals (including certain AI agent shells on Windows),
 * spawning `net.exe` can throw synchronously with `EPERM`, which breaks `vite build`
 * while loading the config.
 *
 * This patch wraps that exec call in a try/catch so the optimization becomes best-effort.
 * It is safe because Vite already treats the `net use` result as optional.
 */

const fs = require('node:fs')
const path = require('node:path')

const target = path.join(
  process.cwd(),
  'node_modules',
  'vite',
  'dist',
  'node',
  'chunks',
  'node.js',
)

if (!fs.existsSync(target)) {
  process.exit(0)
}

const src = fs.readFileSync(target, 'utf8')
if (src.includes('try { exec("net use"')) {
  process.exit(0)
}

const needle = 'exec("net use", (error, stdout) => {'
const idx = src.indexOf(needle)
if (idx === -1) {
  process.exit(0)
}

// Insert a try/catch around the exec call. We keep the callback body identical and
// only add a best-effort guard for environments where spawning `net` is blocked.
const patched = src.replace(
  needle,
  'try { ' + needle,
).replace(
  /exec\("net use", \(error, stdout\) => \{\s*([\s\S]*?)\n\t\}\);\n\}/m,
  (match) => {
    // Wrap just the exec statement with a catch. If this regex fails to match
    // (Vite changed formatting), fall back to the simple prefix replacement above.
    if (!match.includes('exec("net use"')) return match
    return match.replace(
      /\n\t\}\);\n\}/m,
      '\n\t}); } catch (e) { /* best-effort: ignore spawn EPERM */ }\n}',
    )
  },
)

fs.writeFileSync(target, patched, 'utf8')
console.log('[postinstall] Patched Vite to tolerate EPERM from `net use` (Windows sandbox).')
