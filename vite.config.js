import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'sitemap.xml'],
      manifest: {
        name: 'ELPEAP Group',
        short_name: 'ELPEAP',
        description: 'Digital Solutions & Business Services',
        theme_color: '#45a049',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,jpg}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/cdn\.jsdelivr\.net\/npm\/bootstrap-icons@.*/,
            handler: 'CacheFirst'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      'bootstrap-icons': path.resolve(__dirname, 'node_modules/bootstrap-icons')
    }
  },
  build: {
    chunkSizeWarningLimit: 1600,
    commonjsOptions: {
      transformMixedEsModules: true
    },
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          bootstrap: ['bootstrap', 'react-bootstrap'],
         
        }
      }
    }
  }
})