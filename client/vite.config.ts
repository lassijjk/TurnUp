import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";
import replace from '@rollup/plugin-replace'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType:'prompt',
    manifest:{
      name:"Turn Up",
      short_name:"turn-up",
      description:"A repository for Tampere University course COMP.SE.610/620 on the Turn Up project topic referred by Knowit.",
      icons:[{
        src: '/android-chrome-192x192.png',
        sizes:'192x192',
        type:'image/png',
        purpose:'favicon'
      },
      {
        src:'/android-chrome-512x512.png',
        sizes:'512x512',
        type:'image/png',
        purpose:'favicon'
      },
      {
        src: '/apple-touch-icon.png',
        sizes:'180x180',
        type:'image/png',
        purpose:'apple touch icon',
      },
      {
        src: '/safari-pinned-tab.svg',
        sizes:'512x512',
        type:'image/svg+xml',
        purpose:'any maskable',
      }
    ],
    theme_color:'#171717',
    background_color:'#f0e7db',
    display:"standalone",
    scope:'/',
    start_url:"/",
    orientation:'portrait'
    }
  }),
    replace({'process.env.VITE_DIGI_TRANSIT_API_KEY': JSON.stringify(process.env.VITE_DIGI_TRANSIT_API_KEY), preventAssignment: true})
  ],
  define: {
    global: {},
  },
  server: {
    port: 3000
  },
  preview: {
    port: 8080
  }
})
