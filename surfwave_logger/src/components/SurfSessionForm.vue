<script setup lang="ts">
import { ref, defineEmits } from 'vue'
const emits = defineEmits(['close'])

const today = new Date().toISOString().slice(0,10)
const formData = ref({
  date: today,
  spot: '',
  board: '',
  mood: '',
  waves: '',
  notes: '',
  stars: 3,
  surfTime: '',
})
const moodOptions = ['Stoked', 'Chill', 'Adrenaline', 'Tired']
const boardOptions = ['Shortboard', 'Longboard', 'Fish', 'Funboard']
const spotOptions = ['Malibu Beach', 'Ocean Beach', 'Pipeline', 'Other']

function submitForm() {
  alert('Session submitted!\n'+JSON.stringify(formData.value, null, 2))
  emits('close')
}
</script>

<template>
  <div class="modal-overlay" @click.self="emits('close')">
    <form @submit.prevent="submitForm" class="surf-form-modal">
      <h2>Log New Surf Session</h2>
      <label>Date
        <input type="date" v-model="formData.date" required />
      </label>
      <label>Spot
        <select v-model="formData.spot" required>
          <option value="" disabled selected>Select</option>
          <option v-for="spot in spotOptions" :key="spot">{{ spot }}</option>
        </select>
      </label>
      <label>Board
        <select v-model="formData.board" required>
          <option value="" disabled selected>Select</option>
          <option v-for="board in boardOptions" :key="board">{{ board }}</option>
        </select>
      </label>
      <label>Mood
        <select v-model="formData.mood" required>
          <option value="" disabled selected>Select</option>
          <option v-for="mood in moodOptions" :key="mood">{{ mood }}</option>
        </select>
      </label>
      <label>Wave Conditions
        <input v-model="formData.waves" placeholder="Clean, Choppy, Barrels…" required />
      </label>
      <label>Session Score
        <input type="range" min="1" max="5" v-model="formData.stars" />
        <span class="stars">
          <span v-for="i in 5" :key="i"
            :style="{color: i <= formData.stars ? '#FFE082' : '#b0bec5'}"
            >★</span>
        </span>
      </label>
      <label>Notes
        <textarea v-model="formData.notes" rows="2" />
      </label>
      <label>Surf Duration
        <input v-model="formData.surfTime" type="text" placeholder="e.g. 1h 20m" />
      </label>
      <div class="form-actions">
        <button type="submit">Submit</button>
        <button @click.prevent="emits('close')" class="secondary">Cancel</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,39,57,0.21);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2050;
}
.surf-form-modal {
  background: #e1faff;
  border-radius: 20px;
  box-shadow: 0 0 32px #4FC3F755;
  padding: 2.1rem 2.3rem 1.3rem 2.15rem;
  color: #074749;
  min-width: 325px;
  max-width: 94vw;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.9em;
  animation: modalpop 0.28s cubic-bezier(.59,1.7,.66,1.13);
}
@keyframes modalpop {
  0% {opacity:0; transform:scale(0.95);}
  100% {opacity:1; transform:scale(1);}
}
h2 {
  text-align: center;
  font-weight: 600;
  color: #008080;
  margin-bottom: .4em;
  letter-spacing: 1px;
}
label {
  display: flex;
  flex-direction: column;
  font-size: 1.08em;
  color: #016067;
  margin-bottom: .2em;
}
input[type="text"], select, input[type="date"], textarea {
  margin-top: .16em;
  padding: 7px 13px;
  border-radius: 7px;
  border: 1.5px solid #4FC3F7;
  color: #008080;
  background: #fff;
  font-size: 1.09em;
  outline: none;
}
textarea {
  resize: vertical;
  min-height: 37px;
}
input[type="range"] {
  margin-top: .25em;
  width: 155px;
}
.stars {
  margin-left: 0.8em;
  font-size: 1.15em;
  letter-spacing: 2px;
}
.form-actions {
  margin-top: 1em;
  display: flex;
  gap: 1.1em;
  justify-content: flex-end;
}
button {
  background: #4FC3F7;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px 20px;
  font-size: 1em;
  font-weight: 500;
  cursor: pointer;
  margin-left: .5em;
  transition: background 0.13s;
}
button.secondary {
  background: #eee;
  color: #008080;
}
button:hover {
  filter: brightness(1.07) saturate(1.1);
}
</style>
