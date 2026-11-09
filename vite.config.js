import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/absproxy/15346/',
  server: {
host: '0.0.0.0',
port:15346,
strictPort:true,
},
})
