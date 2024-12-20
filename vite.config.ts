import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import path from 'path'

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  css: {
      modules: {
         generateScopedName: "[name]__[local]__[hash:base64:5]" 
      },
  },
  build: {
    target: 'esnext',
  },
  resolve: {
      alias: {
          '@': path.resolve(__dirname, 'src')
      }
  },
});
