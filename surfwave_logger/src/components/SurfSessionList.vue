<script setup lang="ts">
import { ref } from 'vue'
import SurfSessionCard from './SurfSessionCard.vue'

// Sample sessions to visualize; in future would be paged in from store/db.
const sampleSessions = ref([
  {
    id: 1,
    date: '2024-05-31',
    spot: 'Malibu Beach',
    board: 'Longboard',
    mood: 'Stoked',
    waves: 'Clean',
    notes: 'Great swell, dolphins spotted!',
    surfTime: '1h 40m',
    stars: 5,
    photo: '', // Placeholder
  },
  {
    id: 2,
    date: '2024-06-01',
    spot: 'Ocean Beach',
    board: 'Fish',
    mood: 'Chill',
    waves: 'Windy',
    notes: 'Windy but fun with friends.',
    surfTime: '55m',
    stars: 3,
    photo: '',
  },
  {
    id: 3,
    date: '2024-06-02',
    spot: 'Pipeline',
    board: 'Shortboard',
    mood: 'Adrenaline',
    waves: 'Barrels',
    notes: 'Gnarly barrels and wipeouts.',
    surfTime: '1h 10m',
    stars: 4,
    photo: '',
  }
])
</script>

<template>
  <div>
    <h2 class="surf-section-title">Recent Sessions</h2>
    <div class="surf-session-list">
      <template v-for="session in sampleSessions" :key="session.id">
        <SurfSessionCard :session="session" />
      </template>
    </div>
  </div>
</template>

<style scoped>
.surf-section-title {
  font-size: 2rem;
  font-weight: 600;
  color: #008080;
  margin-bottom: 1.2rem;
  margin-top: 0.2rem;
  letter-spacing: 1px;
}
.surf-session-list {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
</style>
