<template>
  <div>
    <!-- Hero section comes from components/Hero.vue -->
    <Hero />

    <!-- About -->
    <section class="section container">
      <h2 class="h2">About</h2>
      <p class="muted about-text">
        I design and deliver business‑critical applications, from API to UI. Comfortable leading features end‑to‑end:
        gathering requirements, designing data models, writing clean backend services in ASP.NET or Node/Express,
        and building fast, accessible interfaces in Vue 3 or Angular. I value reliability, performance, and
        human‑centered UX.
      </p>
    </section>

    <!-- Featured Projects -->
    <section class="section container">
      <div class="feat-head">
        <h2 class="h2">Featured projects</h2>
        <!-- Optional link on the right for larger screens -->
        <RouterLink class="btn ghost only-lg" :to="{ name: 'projects' }" aria-label="See all projects">
          See all projects
        </RouterLink>
      </div>

      <div class="grid cards">
        <ProjectCard v-for="p in featured" :key="p.slug" :project="p" />
      </div>

      <!-- For small screens, show CTA below the grid -->
      <div class="cta-sm">
        <RouterLink class="btn" :to="{ name: 'projects' }" aria-label="See all projects">
          See all projects
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import Hero from '../components/Hero.vue'
import ProjectCard from '../components/ProjectCard.vue'
import { default as projects } from '../data/projects'
import { RouterLink } from 'vue-router'

const featured = projects.slice(0, 6)
</script>

<!-- <style scoped>
.h2 {
  font-size: clamp(1.25rem, 2.5vw, 1.6rem);
  line-height: 1.2;
  margin: 0 0 .8rem 0;
}

.muted {
  color: var(--muted);
}

.about-text {
  max-width: 75ch;
  margin: 0;
}

/* Featured header: title + link on larger screens */
.feat-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .8rem;
  margin-bottom: .6rem;
}

.only-lg {
  display: inline-flex;
}

@media (max-width: 700px) {
  .only-lg {
    display: none;
  }
}

/* Cards grid: 1 → 2 → 3 responsive columns */
.grid.cards {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
}

@media (min-width: 640px) {
  .grid.cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .grid.cards {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

/* Small‑screen CTA below grid */
.cta-sm {
  margin-top: 1rem;
}

@media (min-width: 700px) {
  .cta-sm {
    display: none;
  }
}

/* Button variants (keeps with your existing theme) */
.btn {
  display: inline-flex;
  align-items: center;
  gap: .6rem;
  padding: .8rem 1.1rem;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: linear-gradient(180deg, rgba(255, 255, 255, .06), rgba(255, 255, 255, .02));
  transition: transform .12s ease, border-color .2s ease;
}

.btn:hover {
  transform: translateY(-1px);
  border-color: rgba(255, 255, 255, .18);
}

.btn.ghost {
  background: transparent;
}
</style>
  -->