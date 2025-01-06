import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // Listen on all addresses, including LAN
    port: 5500,  // Specify the port, e.g., 3000
  },
})
