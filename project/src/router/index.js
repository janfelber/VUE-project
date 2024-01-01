import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TheNavigation from '../components/TheNavigation.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
    },
    {
      path: '/nav/:slug',
      component: TheNavigation,
      name: 'nav'
    },
  ]
})

export default router
