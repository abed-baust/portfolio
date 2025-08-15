<template>
  <section class="section container">
    <h2>Contact</h2>
    <p class="muted">I’m available for freelance and full‑time collaborations. Let’s build something great.</p>
    <form @submit.prevent="submit" class="card" style="display:grid; gap:.8rem;">
      <input v-model="name" required placeholder="Your name" class="input" />
      <input v-model="email" type="email" required placeholder="you@example.com" class="input" />
      <textarea v-model="message" rows="6" required placeholder="Tell me about your project..." class="input"></textarea>
      <div class="nav">
        <button class="btn primary" type="submit">Send</button>
        <a class="btn" href="tel:+8801737885732">Call</a>
        <a class="btn" href="mailto:abed.baust@gmail.com">Email</a>
      </div>
    </form>
  </section>
</template>
<script setup>
import { ref } from 'vue'
const name = ref(''); const email = ref(''); const message = ref('')
const submit = () => {
  const subject = encodeURIComponent('New project inquiry from ' + name.value)
  const body = encodeURIComponent(message.value + '\n\n' + 'Reply to: ' + email.value)
  const url = `mailto:abed.baust@gmail.com?subject=${subject}&body=${body}`
  window.location.href = url
}
</script>
