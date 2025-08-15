<template>
  <section class="section container" v-if="project">
    <div class="card" style="display:grid; gap:1rem;">
      <div style="display:flex; align-items:center; justify-content:space-between; gap:1rem; flex-wrap:wrap;">
        <h2 style="margin:0">{{ project.title }}</h2>
        <div class="nav">
          <a v-if="project.link" class="btn" :href="project.link" target="_blank" rel="noopener">Live ↗</a>
          <RouterLink class="btn" :to="{name:'projects'}">Back</RouterLink>
        </div>
      </div>
      <p style="color:var(--muted); margin:0;">{{ project.description }}</p>
      <div class="nav">
        <span class="badge" v-if="project.role">👤 {{ project.role }}</span>
        <span class="badge" v-if="project.stack">🧰 {{ project.stack }}</span>
        <span class="badge" v-if="project.company">🏢 {{ project.company }}</span>
      </div>
      <div style="display:flex; flex-wrap:wrap; gap:.4rem;">
        <span v-for="t in project.tech" :key="t" class="badge">{{ t }}</span>
      </div>
    </div>
  </section>
  <section v-else class="section container">
    <h2>Project not found</h2>
    <RouterLink class="btn" :to="{name:'projects'}">Back to all projects</RouterLink>
  </section>
</template>
<script setup>
import { useRoute, RouterLink } from 'vue-router'
import projects from './projects.data'
const route = useRoute()
const project = projects.find(p => p.slug === route.params.slug)
</script>
