<template>
  <section class="section container">
    <h2>All Projects</h2>
    <div class="grid cols-3">
      <ProjectCard v-for="p in projects" :key="p.slug" :project="p" />
    </div>
  </section>
</template>
<script setup>
import ProjectCard from '../components/ProjectCard.vue'
import projects from './projects.data'
</script>
