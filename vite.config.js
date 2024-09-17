/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: process.env.VITE_HOST,   // Utilisation de la variable d'environnement pour le host
    port: 5173,   // Utilisation de la variable d'environnement pour le port
    hmr: {
      host: process.env.HOST, // HMR utilise également le domaine personnalisé
      port: process.env.PORT, // HMR utilise le même port
    }
  }
})
