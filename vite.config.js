import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Using a relative base ('./') so the build works out of the box on
// GitHub Pages (including project sub-paths), Netlify, Vercel and
// Cloudflare Pages without any extra configuration.
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
})
