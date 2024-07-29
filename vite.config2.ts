import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
      inject: {
        injectData: {
          title: 'My App',
        },
      },
      template: './index.html',
    }),
  ],
  build: {
    rollupOptions: {
      input: 'index.jsx',
      output: {
        entryFileNames: '[name]-[hash].js',
        assetFileNames: '[name]-[hash].[ext]',
        chunkFileNames: '[name]-[hash].js',
      }
    },
    outDir: './static',
    sourcemap: true,
    minify: true
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/global.scss";`
      },
    },
  },
  server: {
    port: 3000,
  },
  publicDir: './static',
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.svg', '**/*.woff']
})
