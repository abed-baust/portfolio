<template>
  <article class="card" style="display:grid; gap:.7rem;">
    <header style="display:flex; justify-content:space-between; align-items:center; gap:1rem;">
      <h3 style="margin:.2rem 0;">{{ project.title }}</h3>
      <a v-if="project.link" class="badge" :href="project.link" target="_blank" rel="noopener">Live ↗</a>
    </header>
    <p style="color:var(--muted); margin:0;">{{ project.description }}</p>
    <div style="display:flex; flex-wrap:wrap; gap:.4rem;">
      <span v-for="t in project.tech" :key="t" class="badge">{{ t }}</span>
    </div>
  </article>
</template>
<script setup>
defineProps({ project: Object })
</script>
