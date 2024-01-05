<template>
  <div>
    <nav id="nav">
      <router-link to="/">Home </router-link>
      <router-link
        v-for="category in store"
        :key="category.id"
        :to="{ name: 'store', params: { slug: category.slug } }"
        class="nav-link"
      >
        {{ category.name }}
      </router-link>

      <router-link to="/cart" class="cart-link">
        <v-icon>mdi-cart</v-icon>
        <span class="cart-badge" v-if="cartItemCount > 0">{{ cartItemCount }}</span>
      </router-link>
      <router-link to="/orders" class="orders-link">
        <v-icon>mdi-script-text</v-icon>
        <span class="orders-badge" v-if="ordersCount > 0">{{ ordersCount }}</span>
      </router-link>
    </nav>
  </div>
</template>

<style scoped>
#nav {
  padding: 40px;
  display: flex;
  justify-content: space-between;
}

a, a:link, a:visited { 
	color: #fe3203; 
	font-weight: 700;
  font-size: 16px;
  text-decoration: none;
  margin-right: 20px;
}

a:hover { 
	text-decoration: none; 
}

.router-link {
  color: #fff;
  text-decoration: none; 
}

.router-link:hover {
  text-decoration: underline; 
}

.cart-link,
.orders-link {
  position: relative;
}

.cart-link {
  margin-left: auto;
}

.cart-badge,
.orders-badge {
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 5px;
  font-size: 12px;
  position: absolute;
  top: -5px;
  right: -5px;
  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.router-link-exact-active {
  text-decoration: none;
}
</style>

<script>
import Store from '../data.json';
import { useCartStore } from "../stores/CartStore"

export default {
  data() {
    return {
      name: 'TheNavigation',
      store: Store.store,
      cartStore: useCartStore(),
    };
  },
  computed: {
    cartItemCount() {
      return this.cartStore.getCartItemCount;
    },
    ordersCount () {
      return this.cartStore.ordersCount;
    }
  }
};
</script>
