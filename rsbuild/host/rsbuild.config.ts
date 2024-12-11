import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';

export default defineConfig({
  plugins: [
    pluginVue(),
    pluginModuleFederation({
      name: 'host',
      remotes: {
        patrimonio: 'patrimonio@http://localhost:3000/mf-manifest.json',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 2000,
  },
});
