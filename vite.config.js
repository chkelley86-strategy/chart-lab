import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { readdirSync, existsSync } from 'node:fs';

// Every lessons/<name>/index.html and solution.html becomes its own page in the build.
const lessonsDir = resolve(__dirname, 'lessons');
const input = { main: resolve(__dirname, 'index.html') };
for (const name of readdirSync(lessonsDir)) {
  for (const page of ['index', 'solution']) {
    const file = resolve(lessonsDir, name, `${page}.html`);
    if (existsSync(file)) input[`${name}-${page}`] = file;
  }
}

export default defineConfig({
  // Lets the built site work on GitHub Pages under /chart-lab/
  base: './',
  build: { rollupOptions: { input } },
});
