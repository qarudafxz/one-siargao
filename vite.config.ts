import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
 plugins: [
  react(),
  VitePWA({
   registerType: 'autoUpdate',
   devOptions: {
    enabled: false
   },
   includeAssets: ['LargeTile.scale-125.png'],
   manifest: {
    name: 'One Siargao',
    short_name: 'GIS',
    description:
     'Best Routing GIS for finding the best tourist spots in Siargao according to your availibity',
    theme_color: '#1154FF',
    background_color: '#1154FF',
    start_url: '/gis',
    icons: [
     {
      src: '/LargeTile.scale-125.png',
      sizes: '125x125',
      type: 'image/png'
     }
    ],
    display: 'standalone'
   }
  })
 ],
 resolve: {
  alias: {
   '@': '/src'
  }
 }
})
