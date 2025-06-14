<script setup lang="ts">
import { defineProps, ref } from 'vue'

const props = defineProps<{
  session: {
    id: number
    date: string
    spot: string
    board: string
    mood: string
    waves: string
    notes: string
    surfTime?: string
    stars?: number
    photo?: string
  }
}>()

const sessionDetailOpen = ref(false)
function openDetails() {
  sessionDetailOpen.value = true
}
function closeDetails() {
  sessionDetailOpen.value = false
}
// For icons: emoji as ocean-y placeholders
const moodIcons: Record<string, string> = {
  'Stoked': '🌊',
  'Chill': '😎',
  'Adrenaline': '🤙',
  'Focused': '🏄‍♂️',
  'Tired': '😅',
}
</script>

<template>
  <div class="surf-session-card">
    <div class="surf-session-header">
      <span class="surf-session-date">
        <span class="calendar-emoji">📅</span>
        {{ session.date }}
      </span>
      <span class="surf-session-mood" :title="session.mood">
        {{ moodIcons[session.mood] || '🌊' }} {{ session.mood }}
      </span>
    </div>
    <div class="surf-session-main">
      <div class="surf-session-spot">
        <span class="wave-emoji">🏄</span>
        <b>{{ session.spot }}</b>
        <span v-if="session.board" class="surf-session-board">· {{ session.board }}</span>
      </div>
      <div class="surf-session-waves">
        <span class="wave-emoji">🌬️</span>
        <span>Waves: </span>
        {{ session.waves }}
      </div>
      <div class="surf-session-notes">
        <span class="note-emoji">📝</span>
        {{ session.notes }}
      </div>
    </div>
    <div class="surf-session-footer">
      <span class="surf-session-stars" title="Session highlight score">
        <template v-for="i in 5" :key="i">
          <span :style="{color: i <= (session.stars||0) ? '#FFE082' : '#b0bec5'}">★</span>
        </template>
      </span>
      <span class="surf-session-time" v-if="session.surfTime">
        <span style="margin-right:0.1em;">⏱️</span>{{ session.surfTime }}
      </span>
      <button class="card-btn" @click="openDetails" aria-label="View Details">Details</button>
    </div>
    <SurfSessionDetailDialog v-if="sessionDetailOpen" :session="session" @close="closeDetails" />
  </div>
</template>

<script lang="ts">
// Lazy-inline registration of details modal so as not to error out before generated.
import SurfSessionDetailDialog from './SurfSessionDetailDialog.vue'
export default {
  components: { SurfSessionDetailDialog }
}
</script>

<style scoped>
.surf-session-card {
  background: linear-gradient(104deg, #f7fafc 80%, #b2ebf2 100%) !important;
  border: 2px solid #4FC3F7;
  border-radius: 18px;
  padding: 1.1rem 1.6rem;
  box-shadow: 0 2px 12px #00808015;
  animation: wave-in 0.6s cubic-bezier(.44,1.7,.65,1.22);
  transition: box-shadow 0.12s;
  position: relative;
}
.surf-session-card:hover {
  box-shadow: 0 4px 18px #4FC3F755, 0 1.5px 0.5px #4FC3F7;
}
.surf-session-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.04rem;
  margin-bottom: 0.5rem;
}
.surf-session-date, .surf-session-mood {
  display: flex;
  align-items: center;
  gap: 0.45em;
}
.surf-session-main {
  margin: 0.2em 0 0.4em 0;
  display: flex;
  flex-direction: column;
  gap: 0.1em;
  font-size: 1.025rem;
}
.surf-session-spot, .surf-session-waves, .surf-session-notes {
  margin-bottom: 0.2em;
}
.surf-session-board {
  font-size: 0.95em;
  color: #039be5;
}
.surf-session-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.25em;
  font-size: 1.06rem;
}
.surf-session-stars {
  letter-spacing: 1px;
  font-size: 1.3em;
  margin-right: 1em;
}
.surf-session-time {
  color: #008080;
  margin-left: 1em;
}
.card-btn {
  background: #4FC3F7;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 7px 18px;
  font-size: 1em;
  font-weight: 500;
  cursor: pointer;
  margin-left: auto;
  transition: background 0.13s;
}
.card-btn:hover {
  background: #008080;
}
@keyframes wave-in {
  0% { opacity: 0; transform: translateY(18px);}
  100% {opacity: 1; transform: translateY(0);}
}
</style>
