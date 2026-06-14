import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Brotli compression (best ratio)
    compression({ algorithm: 'brotliCompress', ext: '.br' }),
    // Gzip fallback
    compression({ algorithm: 'gzip', ext: '.gz' }),
  ],
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // Split framer-motion into its own chunk: only loads when needed
          'framer-motion': ['framer-motion'],
          // Split React runtime separately for better caching
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
  },
})
