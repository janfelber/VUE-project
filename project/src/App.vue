
<template>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Rosey Pixel Template</title>
<meta name="keywords" content="" />
<meta name="description" content="" />
<!-- templatemo 337 rosey pixel -->
<!-- 
Rosey Pixel Template 
http://www.templatemo.com/preview/templatemo_337_rosey_pixel 
-->
<link href="templatemo_style.css" rel="stylesheet" type="text/css" />

</head>
<body>

<section class="banner">
    <div class="container text-white">
        <h3>Your</h3>
        <h1> Online Florist Shop</h1>
    </div>
</section>
<header> 
  <TheNavigation /> 
</header>
<div class="content_box">
    <h2>Feature Product</h2>
    <div class="cleaner"></div>
    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
    <div class="cleaner h30"></div>
    <div id="gallery">
       
        <div class="cleaner"></div>
    </div>
</div> <!-- end of a content box -->
<span id="top"></span>
<div id="templatemo_wrapper">
    <div id="templatemo_main">
        
	</div> <!-- end of main -->

    
</div> <!-- end of wrapper -->

</body>


</template>

<script >

import TheNavigation from './components/TheNavigation.vue'
import { RouterView } from 'vue-router'

export default {
  components: {
    TheNavigation
  }
}
</script>


<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
