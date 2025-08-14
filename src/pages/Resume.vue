<template>
  <section class="section container">
    <h2>Resume</h2>
    <p class="muted">Download or view my latest resume below.</p>
    <div style="display:flex; gap:.6rem; flex-wrap:wrap; margin-bottom: 1rem;">
      <a class="btn primary" href="/Md-Abedur-Rahman-Resume.pdf" download>⬇ Download PDF</a>
      <a class="btn" href="/Md-Abedur-Rahman-Resume.pdf" target="_blank" rel="noopener">Open in new tab</a>
    </div>
    <div class="card">
      <object data="/Md-Abedur-Rahman-Resume.pdf" type="application/pdf" width="100%" height="800px" aria-label="Resume PDF">
        <p>Unable to display PDF. <a href="/Md-Abedur-Rahman-Resume.pdf">Download instead</a>.</p>
      </object>
    </div>
  </section>
</template>

<style scoped>
.muted{ color: var(--muted); }
</style>