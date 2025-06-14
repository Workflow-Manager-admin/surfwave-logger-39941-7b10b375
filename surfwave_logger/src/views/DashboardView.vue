<script setup lang="ts">
import { ref } from 'vue'
const stats = ref({
  totalSessions: 13,
  avgStars: 4.1,
  mostVisited: 'Malibu Beach',
  moodBreakdown: {
    Stoked: 6, Chill: 3, Adrenaline: 2, Tired: 2
  }
})
</script>

<template>
  <div class="dashboard">
    <h1>Surf Insights</h1>
    <div class="stats-row">
      <div class="stat-card">
        <span class="stat-label">Total Sessions</span>
        <span class="stat-value">{{ stats.totalSessions }}</span>
      </div>
      <div class="stat-card">
        <span class="stat-label">Avg. Score</span>
        <span class="stat-value">{{ stats.avgStars.toFixed(1) }} ★</span>
      </div>
      <div class="stat-card">
        <span class="stat-label">Favorite Spot</span>
        <span class="stat-value">{{ stats.mostVisited }}</span>
      </div>
    </div>
    <h2 class="mt2">Mood Breakdown</h2>
    <!-- Simple SVG bar chart -->
    <div class="bar-chart-container">
      <svg viewBox="0 0 180 70" width="180" height="70">
        <g v-for="(num, mood, idx) in stats.moodBreakdown" :key="mood">
          <rect
            :x="idx * 44"
            :y="65 - num*10"
            width="32"
            :height="num*10"
            :fill="['#4FC3F7','#008080','#FFE082','#77e3c2'][idx%4]"
            rx="8"
          />
          <text :x="idx * 44 + 16" y="68" text-anchor="middle" font-size="14" fill="#008080">
            {{ mood }}
          </text>
          <text :x="idx * 44 + 16" :y="65 - num*10 - 4" text-anchor="middle" font-size="13" fill="#0094b3">
            {{ num }}
          </text>
        </g>
      </svg>
    </div>
    <p class="bottom-tip">Charts & stats use sample data.</p>
  </div>
</template>

<style scoped>
.dashboard {
  border-radius: 14px;
  padding: 2rem 2.5rem;
  background: linear-gradient(108deg, #f2fdff 80%, #b2ebf2 100%);
  color: #027181;
  max-width: 660px;
  margin: 2rem auto;
  box-shadow: 0 2px 15px #18b8c315;
}
.dashboard h1 {
  color: #008080;
  margin-bottom: 1.5rem;
  font-size: 2.3rem;
}
.stats-row {
  display: flex;
  gap: 2em;
  margin-bottom: 1.4em;
}
.stat-card {
  background: #e0f7fa;
  border-radius: 12px;
  padding: 1em 1.5em;
  text-align: center;
  box-shadow: 0 2px 8px #b1dac511;
  min-width: 120px;
}
.stat-label {
  display: block;
  font-size: 1.04em;
  color: #008080;
  margin-bottom: 0.38em;
}
.stat-value {
  font-size: 1.35em;
  font-weight: 600;
  color: #038ca1;
}
.bar-chart-container {
  margin: 2.1em 0 0.5em 0;
  width: 200px;
}
.mt2 {
  margin-top: 1.8em;
}
.bottom-tip {
  color: #03484a;
  font-size: .94em;
  margin-top: 1.7em;
  text-align: right;
}
</style>
