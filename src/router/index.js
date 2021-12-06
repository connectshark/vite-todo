import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/notFound',
      name: 'notFound',
      component: () => import('../views/notFound.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: {
        path: '/notFound'
      }
    }
  ]
})

export default router
