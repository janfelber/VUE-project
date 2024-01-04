import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Product from '../components/Product.vue'
import Cart from '../components/Cart.vue'


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
      component: Cart,

    },
    {
      path: '/store/:slug',
      name: 'store',
      component: Product,
      props: true,
      
    },
  ],
});


export default router