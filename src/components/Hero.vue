<template>
  <section class="section container" style="padding-top:56px; display:grid; gap:1.4rem; align-items:center; grid-template-columns: 1.2fr .8fr;">
    <div class="reveal">
      <span class="badge">Full‑Stack Engineer • ASP.NET • Vue 3 • Angular • Node</span>
      <h1 style="font-size: clamp(2rem, 5vw, 3rem); line-height:1.05; margin:.6rem 0 1rem 0;">
        Building robust, scalable web apps for business impact.
      </h1>
      <p style="color:var(--muted); max-width: 60ch;">
        3+ years shipping production software at Bit Mascot and Webalive‑powered projects. Expertise across
        ASP.NET, Node/Express, Vue 3, and Angular with modern CI/CD and quality‑first practices.
      </p>
      <div style="display:flex; gap:.6rem; flex-wrap:wrap; margin-top:1rem;">
        <a class="btn primary" href="/portfolio/Md-Abedur-Rahman-Resume.pdf" download>⬇ Download Resume</a>
        <RouterLink class="btn" to="/portfolio/projects">View Projects</RouterLink>
        <RouterLink class="btn" to="/portfolio/contact">Hire Me</RouterLink>
      </div>
    </div>
    <div class="reveal" style="justify-self:end;">
      <div class="card" style="width:min(420px, 90vw);">
        <h3 style="margin:.2rem 0 1rem 0;">Quick facts</h3>
        <ul style="list-style:none; padding:0; margin:0; display:grid; gap:.6rem;">
          <li>🏢 Software Engineer @ Bit Mascot (2021–Present)</li>
          <li>🛠 OOP • .NET • Node • Vue 3 • Angular • Laravel</li>
          <li>🏆 ICPC Dhaka onsite — Honourable Mentions (2018, 2019)</li>
          <li>🎓 B.Tech in CSE — BAUST (2016–2021)</li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script setup>
import { RouterLink } from 'vue-router'
</script>