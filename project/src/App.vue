<template>
  <header>
    <TheNavigation />
  </header>
  <div class="container">
    <RouterView />
  </div>
  <Footer />
</template>

<script>
import { RouterView } from 'vue-router'
import TheNavigation from './components/TheNavigation.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    TheNavigation,
    Footer,
  }
}
</script>