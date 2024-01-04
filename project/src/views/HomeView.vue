<template>
  <div>
    <v-app>
    <section class="banner">
      <div class="container text-white">
        <h3>Your</h3>
        <h1> Online Florist Shop</h1>
      </div>
    </section>

    <div class="content_box">
      <h2>Feature Product</h2>
      <div class="cleaner"></div>
      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
      <div class="cleaner h30"></div>
      <div id="gallery">
        <main>
          <v-container class="custom-container">
        <v-row>
          <v-col v-for="(item, index) in cartStore.products.slice(0, 6)" :key="index" cols="12" md="4">
            <v-card>
              <v-img :src="item.image" :alt="item.name"></v-img>
              <v-card-title>{{ item.name }}</v-card-title>
              <v-card-subtitle>Price: {{ item.price }}</v-card-subtitle>
              <v-card-actions>
                <v-btn @click="cartStore.addToCart(item.id)" color="primary">Add to Cart</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
        </main>
        <div class="cleaner"></div>
      </div>
    </div> <!-- end of a content box -->
  </v-app>
    <span id="top"></span>
    <div id="templatemo_wrapper">
      <div id="templatemo_main">
      </div> <!-- end of main -->
    </div> <!-- end of wrapper -->
  </div>

</template>

<style scoped>

</style>

<script>
import { useCartStore } from "../stores/CartStore"

export default {
  data() {
    return {
      cartStore: useCartStore(),
    }
  },
}
</script>
