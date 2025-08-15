<template>
  <article class="card" style="display:grid; gap:.7rem;">
    <header style="display:flex; justify-content:space-between; align-items:center; gap:1rem;">
      <h3 style="margin:.2rem 0;">
        <RouterLink :to="{ name:'project', params:{ slug: project.slug } }">{{ project.title }}</RouterLink>
      </h3>
      <a v-if="project.link" class="badge" :href="project.link" target="_blank" rel="noopener">Live ↗</a>
    </header>
    <p style="color:var(--muted); margin:0;">{{ project.description }}</p>
    <div style="display:flex; flex-wrap:wrap; gap:.4rem;">
      <span v-for="t in project.tech" :key="t" class="badge">{{ t }}</span>
    </div>
    <div class="nav">
      <RouterLink class="btn" :to="{ name:'project', params:{ slug: project.slug } }">Details</RouterLink>
    </div>
  </article>
</template>
<script setup>
import { RouterLink } from 'vue-router'
defineProps({ project: Object })
</script>
