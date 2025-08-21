import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true,
        // 백엔드가 /api/** 로 받는다면 rewrite 불필요
        // 백엔드가 /health 로 받는다면 아래 줄 활성화:
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})