<template>

<div class="categoty">
    <h1>category name: {{ $route.params.slug }}</h1>
    <h1>category name: {{ $route.params.slug }}</h1>
    <h1>category name: {{ $route.params.slug }}</h1>
    <h1>category name: {{ $route.params.slug }}</h1>
    <h1>category name: {{ $route.params.slug }}</h1>
    <h1>category name: {{ $route.params.slug }}</h1>
    <h1>category name: {{ $route.params.slug }}</h1>
    <h1>category name: {{ $route.params.slug }}</h1>
    <h1>category name: {{ $route.params.slug }}</h1>
    <h1>category name: {{ $route.params.slug }}</h1>
    <h1>category name: {{ $route.params.slug }}</h1>
    

    
</div>

<div class="category">
    <h1>Category Name: {{ $route.params.slug }}</h1>
    <div v-for="(product, index) in filteredProducts" :key="index">
      <h2>{{ product.name }}</h2>
      <img :src="product.image" :alt="product.name" style="width: 35%;">
      <h3>Price: {{ product.price }}</h3>
    </div>
  </div>

</template>

<script>
import productsData from '../products.json';

export default {
  computed: {
    filteredProducts() {
      const categorySlug = this.$route.params.slug;
      return this.products.filter(product => product.category === categorySlug);
    }
  },
  data() {
    return {
      products: productsData
    };
  }
  // ... rest of your component options
}
</script>
