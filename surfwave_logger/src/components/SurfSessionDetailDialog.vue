<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

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

const emits = defineEmits(['close'])

function closeModal() {
  emits('close')
}

function editSession() {
  alert('Edit surf session feature coming soon!')
}
function deleteSession() {
  if (window.confirm('Delete this session?')) {
    alert('Session deleted! (feature coming soon)')
    closeModal()
  }
}
</script>

<template>
  <div class="modal-overlay" @click.self="closeModal">
    <div class="detail-modal">
      <header>
        <h3>
          <span style="font-size:1.3em;vertical-align:-.18em">🏄‍♂️</span> {{ session.spot }}
        </h3>
        <span class="session-date">{{ session.date }}</span>
      </header>
      <section>
        <p><b>Board:</b> {{ session.board }}</p>
        <p><b>Waves:</b> {{ session.waves }}</p>
        <p><b>Mood:</b> {{ session.mood }}</p>
        <p><b>Notes:</b> {{ session.notes }}</p>
        <p v-if="session.surfTime"><b>Time:</b> {{ session.surfTime }}</p>
        <p v-if="session.stars"><b>Session Score:</b>
          <span v-for="i in 5" :key="i" :style="{color: i <= (session.stars||0) ? '#FFE082' : '#b0bec5'}">★</span>
        </p>
      </section>
      <footer>
        <button @click="editSession">Edit</button>
        <button @click="deleteSession" class="danger">Delete</button>
        <button @click="closeModal" class="secondary">Close</button>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 39, 57, 0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}
.detail-modal {
  background: #fff;
  min-width: 295px;
  max-width: 97vw;
  border-radius: 20px;
  box-shadow: 0 0 32px #00808055;
  padding: 2.2rem 1.7rem 1.2rem 1.7rem;
  color: #042e36;
  min-height: 230px;
  position: relative;
  animation: modalpop 0.24s cubic-bezier(.59,1.7,.66,1.13);
}
@keyframes modalpop {
  0% {opacity:0; transform:scale(0.95);}
  100% {opacity:1; transform:scale(1);}
}
.detail-modal header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #4FC3F7;
  font-size: 1.2rem;
  padding-bottom: 0.5em;
  margin-bottom: .75em;
}
.session-date {
  color: #008080;
  font-weight: 450;
  font-size: 1.08em;
}
.detail-modal section p {
  margin: 0.3em 0;
  font-size: 1.06rem;
}
.detail-modal footer {
  display: flex;
  justify-content: flex-end;
  gap: 1em;
  margin-top: 1.1em;
}
button {
  background: #4FC3F7;
  color: #fff;
  padding: 7px 18px;
  font-size: 1em;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  margin-left: .5em;
}
button.danger {
  background: #FF8177;
}
button.secondary {
  background: #eee;
  color: #027181;
}
</style>
