import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      plugins: [
        {
          name: 'exclude-inline-svg',
          enforce: 'pre',
          resolveId(source) {
            if (source.endsWith('.svg')) {
              return null;
            }
          },
          load(id) {
            if (id.endsWith('.svg')) {
              return null;
            }
          },
        },
      ],
    },
  },
  server: {
    port: 7777,
  },
  plugins: [react(), svgr()]
});