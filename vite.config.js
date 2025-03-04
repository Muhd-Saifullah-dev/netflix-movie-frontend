import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  assetsInclude: ['**/*.m4v'],
  server:{
    proxy:{
      "/api":{
        target:"http://localhost:8000"
      }
    }
  }
})
