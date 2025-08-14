<template>
  <section class="section container">
    <h2>Contact</h2>
    <p class="muted">I’m available for freelance and full‑time collaborations. Let’s build something great.</p>
    <ContactForm />
  </section>
</template>

<script setup>
import ContactForm from '../components/ContactForm.vue'
</script>

<style scoped>
.muted{ color: var(--muted); }
</style>