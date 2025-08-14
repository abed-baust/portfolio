<template>
  <div>
    <Hero />
    <section class="section container">
      <h2>About</h2>
      <p style="color:var(--muted); max-width:75ch;">
        I design and deliver business‑critical applications, from API to UI. Comfortable leading features end‑to‑end:
        gathering requirements, designing data models, writing clean backend services in ASP.NET or Node/Express,
        and building fast, accessible interfaces in Vue 3 or Angular. I value reliability, performance, and human‑
        centered UX.
      </p>
    </section>
    <section class="section container">
      <h2>Featured projects</h2>
      <div class="grid cols-3">
        <ProjectCard v-for="p in featured" :key="p.slug" :project="p" />
      </div>
      <div style="margin-top:1rem"><RouterLink class="btn" to="/projects">See all projects</RouterLink></div>
    </section>
  </div>
</template>
<script setup>
import Hero from '../components/Hero.vue'
import ProjectCard from '../components/ProjectCard.vue'
import { default as projects } from '../data/projects'
const featured = projects.slice(0,6)
import { RouterLink } from 'vue-router'
</script>
<style scoped>.muted{ color: var(--muted); }</style>