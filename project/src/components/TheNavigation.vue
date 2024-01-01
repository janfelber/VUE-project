<template>
    <div id="nav">
      <router-link to="/"> Home </router-link>
      <router-link v-for="nav in navbar1" :key="nav.id" :to="{ name: 'nav', params: { slug: nav.slug } }">
        {{ nav.name }}
      </router-link>
    </div>
  </template>
  
  <script>
  import dataDestinations from '../navigation.json'
  
  export default {
    name: 'TheNavigation',
    data() {
      return {
        navbar1: dataDestinations.navbar1
      }
    }
  }
  </script>
  