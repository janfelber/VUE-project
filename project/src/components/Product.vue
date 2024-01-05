<template>
   <h1>{{ $route.params.slug.toUpperCase() }}</h1>
  <div>
    <v-container class="custom-container">
      <v-row>
        <v-col v-for="(product, index) in filteredProducts" :key="index" cols="12" md="4">
          <v-card>
            <v-img :src="product.image" :alt="product.name"></v-img>
            <v-card-title>{{ product.name }}</v-card-title>
            <v-card-subtitle>Price: {{ product.price }} €</v-card-subtitle>
            <v-card-actions>
              <v-btn @click="cartStore.addToCart(product.id)" color="primary">Add to Cart</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>

.custom-container {
  max-width: 1200px; 
  margin: auto; 
  padding: 20px; 
}
</style>

<script>
import productsData from '../products.json';
import { useCartStore } from "../stores/CartStore"

export default {
  computed: {
    filteredProducts() {
      const categorySlug = this.$route.params.slug;
      return this.products.filter(product => product.category === categorySlug);
    }
  },
  data() {
    return {
      products: productsData,
      cartStore: useCartStore(),
    };
  }
}
</script>
