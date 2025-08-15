<template>
  <section class="section container">
    <h2>Resume</h2>
    <div class="nav" style="margin-bottom: 1rem;">
      <a class="btn primary" :href="base + 'Md-Abedur-Rahman-Resume.pdf'" download>⬇ Download PDF</a>
      <a class="btn" :href="base + 'Md-Abedur-Rahman-Resume.pdf'" target="_blank" rel="noopener">Open in new tab</a>
    </div>
    <div class="card">
      <object :data="base + 'Md-Abedur-Rahman-Resume.pdf'" type="application/pdf" width="100%" height="800px">
        <p>Unable to display PDF. <a :href="base + 'Md-Abedur-Rahman-Resume.pdf'">Download instead</a>.</p>
      </object>
    </div>
  </section>
</template>
<script setup>
const base = import.meta.env.BASE_URL
</script>
