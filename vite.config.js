import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  // assetsInclude: ['**/*.glb', '**/*.hdr', '**/*.glsl'],
  // build: {
  //   assetsInlineLimit: 1024,
  //   outDir: 'dist', // Ensure your build output directory is correctly set
  // },
  server: {
    port: 7777,
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  plugins: [react()]
});