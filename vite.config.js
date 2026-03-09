import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.glb', '**/*.hdr', '**/*.mp4'],
  build: {
    assetsInlineLimit: 0,
  },
  server: {
    port: 7777,
  },
  plugins: [react()]
});