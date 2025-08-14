<template>
  <footer style="border-top:1px solid var(--border); margin-top:40px;">
    <div class="container" style="display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:1rem; padding:1.2rem 0;">
      <small style="color:var(--muted)">© {{year}} Abedur Rahman — All rights reserved.</small>
      <div style="display:flex; gap:.6rem; align-items:center;">
        <a class="btn" href="mailto:abed.baust@gmail.com" target="_blank" rel="noopener">Email</a>
        <a class="btn" href="https://www.linkedin.com/in/md-abedur-rahman-042784166" target="_blank" rel="noopener">LinkedIn</a>
        <a class="btn" href="https://github.com/Abed0711" target="_blank" rel="noopener">GitHub</a>
      </div>
    </div>
  </footer>
</template>
<script setup>
const year = new Date().getFullYear()
</script>