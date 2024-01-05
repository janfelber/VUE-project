<template>
  <div id="app">
    <header>
      <TheNavigation />
    </header>
    <div class="content flex-grow">
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

export default {
  components: {
    TheNavigation,
    Footer,
    RouterView
  }
}
</script>
