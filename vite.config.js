import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
  server: {
    host: '0.0.0.0', // Permet les connexions depuis toutes les interfaces réseau
    port: 5173, // Port fixe pour plus de facilité
    strictPort: true, // N'essaye pas de trouver un autre port si celui-ci est occupé
    open: false, // Ne pas ouvrir automatiquement le navigateur
    hmr: {
      host: 'localhost',
      protocol: 'ws',
    },
    // Configuration pour le routage côté client avec React Router
    historyApiFallback: true,
    // Configuration pour le proxy si nécessaire
    proxy: {
      // Exemple de configuration de proxy si nécessaire
      // '/api': {
      //   target: 'http://localhost:3000',
      //   changeOrigin: true,
      //   secure: false,
      // },
    },
  },
  // Amélioration des performances pour le développement
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
})
