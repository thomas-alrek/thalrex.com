<script setup>
  import Navbar from './components/Navbar.vue'
  import Footer from './components/Footer.vue'
</script>

<template>
  <Navbar class="position-sticky sticky-top"></Navbar>
  <router-view></router-view>
  <Footer></Footer>
</template>
