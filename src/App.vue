<template>
  <div>
    <Navbar />
    <main><router-view /></main>
    <FooterBar />
    <button class="btn" style="position:fixed; right:16px; bottom:16px" @click="scrollTop" aria-label="Back to top">↑</button>
  </div>
</template>
<script setup>
import Navbar from './components/Navbar.vue'
import FooterBar from './components/FooterBar.vue'
const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
</script>