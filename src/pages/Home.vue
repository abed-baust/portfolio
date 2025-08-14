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
      <h2>Core skills</h2>
      <div class="grid cols-3">
        <div class="card"><h3>.NET / C#</h3><p class="muted">ASP.NET Core, EF Core, REST APIs, Identity</p></div>
        <div class="card"><h3>Frontend</h3><p class="muted">Vue 3, Vue Router, Pinia, Vite, Angular</p></div>
        <div class="card"><h3>Node & PHP</h3><p class="muted">Node/Express, Laravel, MySQL/Postgres</p></div>
        <div class="card"><h3>Cloud & DevOps</h3><p class="muted">CI/CD, Docker, Nginx, PM2</p></div>
        <div class="card"><h3>Quality</h3><p class="muted">Component tests, API tests, code review</p></div>
        <div class="card"><h3>Collaboration</h3><p class="muted">Agile, Jira, ADRs, documentation</p></div>
      </div>
    </section>

    <section class="section container">
      <h2>Featured projects</h2>
      <div class="grid cols-3">
        <ProjectCard v-for="p in featured" :key="p.slug" :project="p" />
      </div>
      <div style="margin-top:1rem">
        <RouterLink class="btn" to="/projects">See all projects</RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import Hero from '../components/Hero.vue'
import ProjectCard from '../components/ProjectCard.vue'
import projects from '../data/projects'

const featured = projects.slice(0,6)
</script>

<style scoped>
.muted{ color: var(--muted); }
</style>