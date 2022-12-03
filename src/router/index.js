import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../views/main/Index.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/product/Index.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/contact/Index.vue')
    }
  ]
})

export default router
