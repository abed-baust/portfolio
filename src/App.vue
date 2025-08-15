<template>
  <div>
    <header class="header">
      <div class="container" style="display:flex; align-items:center; justify-content:space-between; padding:.9rem 0;">
        <div class="row">
          <img :src="base + 'favicon.svg'" alt="Logo" style="width:34px; height:34px; border-radius:8px;" />
          <strong style="letter-spacing:.3px;">Md Abedur Rahman</strong>
        </div>
        <nav class="nav">
          <RouterLink class="btn" :to="{name:'home'}">Home</RouterLink>
          <RouterLink class="btn" :to="{name:'projects'}">Projects</RouterLink>
          <RouterLink class="btn" :to="{name:'resume'}">Resume</RouterLink>
          <RouterLink class="btn" :to="{name:'contact'}">Contact</RouterLink>
        </nav>
      </div>
    </header>
    <main><router-view /></main>
    <footer>
      <div class="container" style="display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:1rem; padding:1.2rem 0;">
        <small class="muted">© {{year}} Abedur Rahman — All rights reserved.</small>
        <div class="nav">
          <a class="btn" href="mailto:abed.baust@gmail.com" target="_blank" rel="noopener">Email</a>
          <a class="btn" href="https://www.linkedin.com/in/md-abedur-rahman-042784166" target="_blank" rel="noopener">LinkedIn</a>
          <a class="btn" href="https://github.com/abed-baust" target="_blank" rel="noopener">GitHub</a>
        </div>
      </div>
    </footer>
  </div>
</template>
<script setup>
import { RouterLink } from 'vue-router'
const base = import.meta.env.BASE_URL
const year = new Date().getFullYear()
</script>
