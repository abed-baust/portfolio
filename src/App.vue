<template>
  <div>
    <nav class="nav">
      <div class="nav-inner container">
        <div class="brand">🚀 Portfolio</div>
        <button class="menu-btn" @click="open = !open" aria-label="Toggle Menu">
          ☰
        </button>
        <div class="links">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/projects">Projects</RouterLink>
          <RouterLink to="/resume">Resume</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
        </div>
      </div>
      <div class="mobile-menu container" :class="{ open }">
        <RouterLink @click.native="open=false" to="/">Home</RouterLink>
        <RouterLink @click.native="open=false" to="/projects">Projects</RouterLink>
        <RouterLink @click.native="open=false" to="/resume">Resume</RouterLink>
        <RouterLink @click.native="open=false" to="/contact">Contact</RouterLink>
      </div>
    </nav>

    <main class="container" style="padding-top: 18px;">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>
