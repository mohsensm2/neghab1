import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: "/neghab1/", // ⭐ بسیار مهم برای GitHub Pages

  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Neghab App',
        short_name: 'Neghab',
        start_url: '/neghab1/', // ⭐ برای PWA نیز مسیر صحیح
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#1e40af',
        icons: [
          {
            src: '/neghab1/icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/neghab1/icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
})
