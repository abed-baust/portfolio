<template>
  <section id="contact" class="grid">
    <div class="card">
      <h2 style="margin-top:0;">Contact</h2>
      <form class="grid" @submit.prevent="submit">
        <input v-model="name" placeholder="Your name" required
               style="padding:12px;border-radius:12px;border:1px solid rgba(148,163,184,.25);background:transparent;color:var(--text);" />
        <input v-model="email" placeholder="Your email" type="email" required
               style="padding:12px;border-radius:12px;border:1px solid rgba(148,163,184,.25);background:transparent;color:var(--text);" />
        <textarea v-model="message" placeholder="Message" rows="5" required
               style="padding:12px;border-radius:12px;border:1px solid rgba(148,163,184,.25);background:transparent;color:var(--text);"></textarea>
        <button class="btn" type="submit">Send</button>
      </form>
      <p v-if="sent" class="muted" style="margin-top:10px;">Thanks! This demo form just shows a success message.</p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const name = ref('')
const email = ref('')
const message = ref('')
const sent = ref(false)
const submit = () => { sent.value = true }
</script>
