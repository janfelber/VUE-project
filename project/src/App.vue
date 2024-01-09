<template>
  <div id="app">
    <header>
      <TheNavigation />
    </header>
    <div class="content flex-grow">
      <Cart />
      <RouterView />
      <div>
       
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.flex-grow {
  flex: 1;
  min-height: 0;
}
</style>

<script>
import { RouterView } from 'vue-router'
import TheNavigation from './components/TheNavigation.vue'
import Footer from './components/Footer.vue'

//The code exports an object that contains component definitions used in this Vue component or page.
export default {
  components: {
    TheNavigation,
    Footer,
    RouterView
  }
}
</script>
