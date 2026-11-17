import react from '@vitejs/plugin-react'
// From vitest/config instead of vite so the `test` section is type-checked
import { defineConfig } from 'vitest/config'

// https://vite.dev/config/
export default defineConfig(({ command, isPreview }) => ({
  plugins: [react()],
  // GitHub Pages serves the app from /mesura/, not from the domain root, so
  // the build must point every asset there. Only for the build and its local
  // preview (which must serve it the same way); the dev server and tests keep
  // working at plain "/".
  base: command === 'build' || isPreview ? '/mesura/' : '/',
  // Tests live in this same file so they reuse the app's Vite setup
  // (JSX, TypeScript, CSS Modules) instead of a second config to keep in sync.
  test: {
    // The app only ever runs in a browser, so tests run in a simulated one;
    // in plain Node, code touching `document` (like the i18n setup) breaks.
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
  },
}))
