<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <div class="surf-app">
    <header class="surf-header">
      <div class="surf-nav-content">
        <RouterLink to="/" class="surf-logo-link">
          <img
            src="https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F30A.svg"
            alt="SurfSync Logo" class="surf-logo"
          />
          <span class="surf-app-title">SurfSync</span>
        </RouterLink>
        <nav>
          <RouterLink to="/" class="surf-nav-link" exact>Sessions</RouterLink>
          <RouterLink to="/dashboard" class="surf-nav-link">Stats</RouterLink>
          <RouterLink to="/about" class="surf-nav-link">About</RouterLink>
        </nav>
      </div>
    </header>
    <div class="surf-main-bg">
      <main class="surf-main-content">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
/* Ocean-inspired theme */
.surf-app {
  background: linear-gradient(120deg, #4FC3F7 35%, #008080 100%);
  min-height: 100vh;
  color: #021C1E;
}
.surf-header {
  background: rgba(255,255,255,0.99);
  border-bottom: 2px solid #4FC3F7;
  padding: 0.5rem 0;
  box-shadow: 0 1px 6px rgba(0,0,0,0.04);
  position: sticky;
  top: 0;
  z-index: 50;
}
.surf-nav-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
}
.surf-logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 2px;
  color: #008080;
  font-size: 1.45rem;
  gap: 12px;
}
.surf-logo {
  width: 44px;
  height: 44px;
  vertical-align: middle;
  background: #e0f7fa;
  border-radius: 50%;
  border: 2px solid #4FC3F7;
  box-shadow: 0 1px 10px #4FC3F722;
}
.surf-app-title {
  font-family: 'Montserrat', Arial, sans-serif;
  font-size: 1.45rem;
  color: #008080;
  letter-spacing: 1.2px;
}
nav {
  display: flex;
  gap: 1rem;
}
.surf-nav-link {
  font-size: 1rem;
  color: #008080;
  padding: 6px 18px;
  text-decoration: none;
  border-radius: 6px;
  transition: background 0.15s, color 0.15s;
  font-weight: 500;
}
.surf-nav-link.router-link-active,
.surf-nav-link.router-link-exact-active {
  background: #4FC3F7;
  color: #fff;
}
.surf-main-bg {
  background: linear-gradient(120deg, #4FC3F7 0%, #b2ebf2 98%);
  min-height: 90vh;
  padding-bottom: 48px;
}
.surf-main-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1.2rem;
}
@media (max-width: 800px) {
  .surf-main-content {
    padding: 1.3rem 2vw;
  }
  .surf-header {
    padding: 0.35rem 0;
  }
}
</style>
