<template>
  <div>
    <div v-for="(product, index) in cartItems" :key="index" class="cart-item">
      <div class="image-container">
        <img :src="product.image" :alt="product.name" class="product-image">
      </div>
      <div class="product-details">
        <div class="title-price-container">
          <h4 class="product-name">{{ product.name }}</h4>
          <span class="price-value">{{ product.price }} €</span>
        </div>
        <button @click="cartStore.removeFromCart(product.id)" class="remove-button">Remove</button>
      </div>
    </div>

    <div class="cart-summary">
      <p v-if="cartTotalSum" class="total-sum">Total Sum: {{ cartTotalSum }} €</p>
      <p v-else>Your cart is empty.</p>
    </div>
  </div>
</template>

<style scoped>
.cart-item {
  margin: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.image-container {
  width: 100px;
  margin-right: 10px;
  overflow: hidden;
  border-radius: 10px;
}

.product-image {
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: 10px;
}

.product-details {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.title-price-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-name {
  margin-bottom: 5px;
}

.price-value {
  font-weight: bold;
}

.remove-button {
  background-color: #ff4d4d;
  color: white;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  margin-left: auto;
  border-radius: 5px;
}

.remove-button:hover {
  background-color: #ff1a1a;
}

.cart-summary {
  margin-top: 20px;
  font-weight: bold;
}

.total-sum {
  font-size: 18px;
}
</style>

<script>
import { useCartStore } from "../stores/CartStore";

export default {
  data() {
    return {
      cartStore: useCartStore(),
    };
  },
  computed: {
    cartItems() {
      return this.cartStore.getCart();
    },
    cartTotalSum() {
      return this.cartStore.totalSum;
    }
  },
};
</script>
