<template>
  <form @submit.prevent="submit" class="card reveal" style="display:grid; gap:.8rem;">
    <div style="display:grid; gap:.4rem;">
      <label for="name">Name</label>
      <input id="name" v-model="name" required placeholder="Your name"
             style="padding:.8rem; border-radius:12px; border:1px solid var(--border); background:transparent; color:var(--text);" />
    </div>
    <div style="display:grid; gap:.4rem;">
      <label for="email">Email</label>
      <input id="email" v-model="email" type="email" required placeholder="you@example.com"
             style="padding:.8rem; border-radius:12px; border:1px solid var(--border); background:transparent; color:var(--text);" />
    </div>
    <div style="display:grid; gap:.4rem;">
      <label for="msg">Message</label>
      <textarea id="msg" v-model="message" rows="6" required placeholder="Tell me about your project..."
                style="padding:.8rem; border-radius:12px; border:1px solid var(--border); background:transparent; color:var(--text);"></textarea>
    </div>
    <div style="display:flex; gap:.6rem; flex-wrap:wrap;">
      <button class="btn primary" type="submit">Send</button>
      <a class="btn" href="tel:+8801737885732">Call: +880 1737-885-732</a>
      <a class="btn" href="mailto:abed.baust@gmail.com">Email</a>
    </div>
  </form>
</template>
<script setup>
import { ref } from 'vue'
const name = ref('')
const email = ref('')
const message = ref('')
const submit = () => {
  const subject = encodeURIComponent('New project inquiry from ' + name.value)
  const body = encodeURIComponent(message.value + '\n\n' + 'Reply to: ' + email.value)
  const url = `mailto:abed.baust@gmail.com?subject=${subject}&body=${body}`
  window.location.href = url
}
</script>