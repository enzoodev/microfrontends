import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./Home.vue'),
    },
    {
      path: '/patrimonio',
      component: () => import('patrimonio/App'),
    },
  ],
});
