<template>
  <section class="section container">
    <h2>All Projects</h2>

    <div class="controls">
      <button class="btn" :class="{primary: active==='all'}" @click="setFilter('all')">All</button>
      <button class="btn" :class="{primary: active==='vue'}" @click="setFilter('vue')">Vue 3</button>
      <button class="btn" :class="{primary: active==='.net'}" @click="setFilter('.net')">ASP.NET</button>
      <button class="btn" :class="{primary: active==='angular'}" @click="setFilter('angular')">Angular</button>
      <button class="btn" :class="{primary: active==='node'}" @click="setFilter('node')">Node/Express</button>
      <button class="btn" :class="{primary: active==='php'}" @click="setFilter('php')">Laravel/PHP</button>

      <select v-model="sortKey" title="Sort projects">
        <option value="title-asc">Title A–Z</option>
        <option value="title-desc">Title Z–A</option>
        <option value="tech-desc">Tech count ↓</option>
        <option value="tech-asc">Tech count ↑</option>
      </select>

      <input type="search" v-model="q" placeholder="Search (title/stack/tech)" />
    </div>

    <div class="grid cols-3">
      <ProjectCard v-for="p in finalList" :key="p.slug" :project="p" />
    </div>
  </section>
</template>
<script setup>
import { ref, computed } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import all from './projects.data'

const active = ref('all')
const sortKey = ref('title-asc')
const q = ref('')

const setFilter = v => active.value = v

const filtered = computed(() => {
  let arr = active.value === 'all' ? all : all.filter(p => p.tags?.includes(active.value))
  if (q.value.trim()) {
    const s = q.value.trim().toLowerCase()
    arr = arr.filter(p =>
      p.title.toLowerCase().includes(s) ||
      (p.stack || '').toLowerCase().includes(s) ||
      (p.tech?.join(' ').toLowerCase().includes(s))
    )
  }
  return arr
})

const finalList = computed(() => {
  const arr = [...filtered.value]
  switch (sortKey.value) {
    case 'title-desc': arr.sort((a,b)=> b.title.localeCompare(a.title)); break
    case 'tech-desc': arr.sort((a,b)=> (b.tech?.length||0)-(a.tech?.length||0)); break
    case 'tech-asc':  arr.sort((a,b)=> (a.tech?.length||0)-(b.tech?.length||0)); break
    default:          arr.sort((a,b)=> a.title.localeCompare(b.title))
  }
  return arr
})
</script>
