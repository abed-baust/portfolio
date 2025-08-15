<template>
  <section class="section container hero">
    <div>
      <span class="badge">Full‑Stack Engineer • ASP.NET • Vue 3 • Angular • Node</span>
      <h1 style="font-size: clamp(2rem, 5vw, 3rem); line-height:1.05; margin:.6rem 0 1rem 0;">
        I build robust, scalable web apps for real business impact.
      </h1>
      <p style="color:var(--muted); max-width: 65ch;">
        4+ years shipping production software: ASP.NET backends, Node/Express services, and Vue 3/Angular frontends.
        Worked on Webalive projects (Clubeez, Mining Bull, Business Plaza, Chamera), Nintendo internal tooling, Locumwest, Webalive ERP, and Lantech.
      </p>
      <div class="nav" style="margin-top:1rem;">
        <RouterLink class="btn primary" :to="{name:'projects'}">See Projects</RouterLink>
        <RouterLink class="btn" :to="{name:'contact'}">Hire Me</RouterLink>
      </div>
    </div>
    <div class="photo-wrap" style="justify-self:end;">
      <img class="photo" :src="base + 'images/abed.png'" alt="Md Abedur Rahman" />
    </div>
  </section>

  <section class="section container">
    <h2>Featured Projects</h2>
    <div class="grid cols-3">
      <ProjectCard v-for="p in featured" :key="p.slug" :project="p" />
    </div>
  </section>
</template>
<script setup>
import { RouterLink } from 'vue-router'
import ProjectCard from '../components/ProjectCard.vue'
import projects from './projects.data'
const featured = projects.slice(0,6)
const base = import.meta.env.BASE_URL
</script>
