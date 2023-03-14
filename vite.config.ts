import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import nodePolyfills from 'rollup-plugin-polyfill-node'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'
import Checker from 'vite-plugin-checker'
import tsconfigPaths from 'vite-tsconfig-paths'

const shouldAnalyze = process.env.ANALYZE === 'true'
const isProduction = process.env.NODE_ENV === 'production'

const buildPlugins = shouldAnalyze
  ? [visualizer({ open: true, filename: './bundle-size/bundle.html' })]
  : []

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
  },
  plugins: [
    react(),
    tsconfigPaths(),
    Checker({
      typescript: true,
      overlay: true,
    }),
    // ↓ Needed for development mode
    !isProduction &&
      nodePolyfills({
        include: ['node_modules/**/*.js', new RegExp('node_modules/.vite/.*js')],
      }),
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      plugins: [...buildPlugins, nodePolyfills()],
    },
    sourcemap: !!shouldAnalyze,
  },
})
