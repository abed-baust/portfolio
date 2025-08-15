<template>
  <section class="hero">
    <div class="card">
      <div class="grid" style="gap: 12px;">
        <span class="tag">Hi, I'm Buzz 👋</span>
        <h1 style="margin:0;font-size:clamp(26px,4vw,40px);line-height:1.1;">
          Software Developer • Researcher • Builder
        </h1>
        <p class="muted" style="margin:0;">
          I build fast, reliable web apps and love data-heavy problems. Scroll to see selected work or jump to the Projects page.
        </p>
        <div style="display:flex; gap:12px; flex-wrap:wrap; margin-top:6px;">
          <RouterLink class="btn" to="/projects">View Projects</RouterLink>
          <a class="btn" style="background:transparent;color:var(--text);border:1px solid rgba(148,163,184,.25)"
             href="#contact">Contact</a>
        </div>
      </div>
    </div>
    <div class="card" style="text-align:center;">
      <img class="avatar" src="/src/assets/profile.png" alt="Profile photo" />
      <p class="muted" style="margin-top:10px;">Based in Bangladesh • Open to work</p>
    </div>
  </section>

  <section style="margin-top:24px;">
    <div class="grid cols-3">
      <div class="card">
        <h3>YOLOv8 Traffic Analytics</h3>
        <p class="muted">Real-time vehicle detection and congestion metrics from Dhaka traffic feeds.</p>
      </div>
      <div class="card">
        <h3>MiningHub</h3>
        <p class="muted">Data pipeline fixes, bulk update & alias mapping, performance tuning.</p>
      </div>
      <div class="card">
        <h3>SPR-based PCF Sensor</h3>
        <p class="muted">Dual-peak detection with Au/AZO layers, high WS & AS performance.</p>
      </div>
    </div>
  </section>
</template>
