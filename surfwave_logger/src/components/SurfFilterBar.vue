<script setup lang="ts">
import { ref } from 'vue'

const spotFilter = ref('')
const boardFilter = ref('')
const moodFilter = ref('')

const moodOptions = ['Any', 'Stoked', 'Chill', 'Adrenaline', 'Tired']
const boardOptions = ['Any', 'Shortboard', 'Longboard', 'Fish', 'Funboard']
const spotOptions = ['Any', 'Malibu Beach', 'Ocean Beach', 'Pipeline']
</script>

<template>
  <div class="filterbar">
    <label>
      <span>Spot</span>
      <select v-model="spotFilter">
        <option v-for="spot in spotOptions" :key="spot">{{ spot }}</option>
      </select>
    </label>
    <label>
      <span>Board</span>
      <select v-model="boardFilter">
        <option v-for="b in boardOptions" :key="b">{{ b }}</option>
      </select>
    </label>
    <label>
      <span>Mood</span>
      <select v-model="moodFilter">
        <option v-for="m in moodOptions" :key="m">{{ m }}</option>
      </select>
    </label>
    <button>Apply</button>
  </div>
</template>

<style scoped>
.filterbar {
  display: flex;
  gap: 2.2em;
  margin-bottom: 1.3em;
  background: #e1f7fd;
  border-radius: 14px;
  padding: 0.8em 1.5em;
  align-items: center;
  box-shadow: 0 1px 6px #76bada11;
}
label {
  display: flex;
  flex-direction: column;
  font-size: 1.09em;
  gap: 0.15em;
}
select {
  background: #fff;
  border-radius: 5px;
  border: 1.5px solid #4FC3F7;
  color: #008080;
  font-size: 1.08em;
  padding: 3px 12px;
}
button {
  background: #4FC3F7;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 1em;
  padding: 7px 18px;
  cursor: pointer;
  font-weight: 500;
}
</style>
