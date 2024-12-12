import federation from "@originjs/vite-plugin-federation";
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'host-app',
      remotes: {
        remote_app: "http://localhost:5173/assets/remoteEntry.js",
      },
      shared: ['vue']
    }),
  ],
    build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})
