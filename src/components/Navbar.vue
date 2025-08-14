<template>
  <header style="position:sticky; top:0; z-index:50; backdrop-filter: blur(9px); background: rgba(11,16,32,.6); border-bottom:1px solid var(--border)">
    <div class="container" style="display:flex; align-items:center; justify-content:space-between; padding:.9rem 0;">
      <div style="display:flex; align-items:center; gap:.7rem;">
        <img src="/favicon.svg" alt="Logo" style="width:34px; height:34px; border-radius:8px;" />
        <strong style="letter-spacing:.3px;">Md Abedur Rahman</strong>
      </div>
      <nav style="display:flex; gap:.6rem; align-items:center;">
        <RouterLink class="btn" to="/">Home</RouterLink>
        <RouterLink class="btn" to="/projects">Projects</RouterLink>
        <RouterLink class="btn" to="/resume">Resume</RouterLink>
        <RouterLink class="btn" to="/contact">Contact</RouterLink>
        <button class="btn" @click="toggleTheme" aria-label="Toggle theme">🌓</button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { useTheme } from '../store/theme'
import { RouterLink } from 'vue-router'
const theme = useTheme()
const toggleTheme = () => theme.toggle()
</script>