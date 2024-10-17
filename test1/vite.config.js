import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api': 'https://bn4htph2o4.execute-api.ap-south-1.amazonaws.com/dev/authenticate'
    }
  },
  plugins: [react()],
})
