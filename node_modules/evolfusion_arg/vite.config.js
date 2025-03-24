import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://149.50.149.3:3000', // URL de tu backend
        changeOrigin: true,
        secure: false, // Permite HTTP sin SSL
      },
    },
  },
})
