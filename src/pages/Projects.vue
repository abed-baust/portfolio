<template>
  <section class="section container">
    <h2>All projects</h2>
    <div style="display:flex; gap:.4rem; flex-wrap:wrap; margin-bottom:.8rem;">
      <button class="btn" :class="{primary: active==='all'}" @click="setFilter('all')">All</button>
      <button class="btn" :class="{primary: active==='vue'}" @click="setFilter('vue')">Vue 3</button>
      <button class="btn" :class="{primary: active==='.net'}" @click="setFilter('.net')">ASP.NET</button>
      <button class="btn" :class="{primary: active==='angular'}" @click="setFilter('angular')">Angular</button>
      <button class="btn" :class="{primary: active==='node'}" @click="setFilter('node')">Node/Express</button>
      <button class="btn" :class="{primary: active==='php'}" @click="setFilter('php')">Laravel/PHP</button>
    </div>
    <div class="grid cols-3">
      <ProjectCard v-for="p in filtered" :key="p.slug" :project="p" />
    </div>
  </section>
</template>
<script setup>
import { ref, computed } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import projects from '../data/projects'
const active = ref('all')
const setFilter = (v) => active.value = v
const filtered = computed(() => active.value === 'all' ? projects : projects.filter(p => p.tags?.includes(active.value)))
</script>