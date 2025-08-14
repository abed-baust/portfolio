<template>
  <article class="card reveal" style="display:grid; gap:.8rem;">
    <header style="display:flex; justify-content:space-between; align-items:center; gap:1rem;">
      <h3 style="margin:.2rem 0;">{{ project.title }}</h3>
      <a v-if="project.link" class="badge" :href="project.link" target="_blank" rel="noopener">Live ↗</a>
    </header>
    <p style="color:var(--muted); margin:0;">{{ project.description }}</p>
    <div style="display:flex; flex-wrap:wrap; gap:.4rem;">
      <span v-for="t in project.tech" :key="t" class="badge">{{ t }}</span>
    </div>
    <div style="display:flex; gap:.6rem; flex-wrap:wrap;">
      <a class="btn" v-if="project.role" title="Role">👤 {{ project.role }}</a>
      <a class="btn" v-if="project.stack" title="Stack">🧰 {{ project.stack }}</a>
    </div>
  </article>
</template>

<script setup>
defineProps({ project: Object })
</script>