import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Product from '../components/Product.vue'
import Cart from '../components/Cart.vue'
import Order from '../components/Order.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,

    },
    {
      path: '/orders',
      name: 'orders',
      component: Order
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