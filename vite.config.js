import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.fokostudio.com',
        changeOrigin: true,
        secure: false, // set true if using valid SSL cert
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
    },
    port: 3000,
    host: true
  }
})
