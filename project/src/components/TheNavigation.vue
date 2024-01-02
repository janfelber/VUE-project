<template>
    <div>
      <nav id="nav">
        <router-link to="/">HOME</router-link>
        <router-link v-for="category in store" :key="category.id"
                     :to="{ name: 'store', params: { slug: category.slug } }">
          {{ category.name }}
        </router-link>
      </nav>
    </div>  
</template>

<script>
import Store from '../data.json';

export default {
  data() {
    return {
      name: 'TheNavigation',
      store: Store.store,
    };
  },
};
</script>
