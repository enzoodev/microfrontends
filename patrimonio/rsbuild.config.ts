import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';

export default defineConfig({
  plugins: [
    pluginVue(),
    pluginModuleFederation({
      name: 'patrimonio',
      exposes: {
        './App': './src/App.vue',
      },
    }),
  ],
  server: {
    port: 3000,
  },
});
