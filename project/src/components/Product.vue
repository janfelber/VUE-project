<template>
   <h1>{{ $route.params.slug.toUpperCase() }}</h1>
  <div>
    <v-container class="custom-container">
      <v-row>
        <!--Get current product with his index in array-->
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
      //Get current slug
      const categorySlug = this.$route.params.slug;

      // Filter products based on the category that matches the current slug in the route
      // The function in the 'filter' method checks if the 'category' of each product
      // matches the current categorySlug
      // An array of products that belong to the current category.
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
