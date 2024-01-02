import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import CartView from '../views/CartView.vue'
import CategotyView from '../views/CategoryView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,

    },
    {
      path: '/store/:slug',
      name: 'store',
      component: CategotyView,
      props: true,
      
    },
  ],
});


export default router