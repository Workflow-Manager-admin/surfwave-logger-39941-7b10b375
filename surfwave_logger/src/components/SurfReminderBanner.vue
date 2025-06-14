<script setup lang="ts">
import { ref } from 'vue'

const dismissedToday = ref(false);
function dismiss() {
  dismissedToday.value = true;
}
</script>

<template>
  <div v-if="!dismissedToday" class="reminder-banner">
    <span class="reminder-icon">🔔</span>
    Don't forget to log your surf session today!
    <button class="close-btn" @click="dismiss" aria-label="Close">×</button>
  </div>
</template>

<style scoped>
.reminder-banner {
  background: linear-gradient(90deg, #FFE082 70%, #4FC3F7 120%);
  color: #004d40;
  border-radius: 11px;
  box-shadow: 0 2px 10px #ffe08222;
  padding: 0.55em 1.2em;
  display: flex;
  align-items: center;
  gap: 1em;
  font-size: 1.08em;
  margin-bottom: 1.2em;
  position: relative;
  font-weight: 500;
}
.reminder-icon {
  font-size: 1.33em;
  margin-right: 0.05em;
}
.close-btn {
  background: transparent;
  border: none;
  color: #008080;
  font-size: 1.6em;
  font-weight: bold;
  margin-left: auto;
  cursor: pointer;
  outline: none;
  padding: 0 .2em 0 .5em;
  line-height: 1;
}
.close-btn:hover {
  color: #009688;
}
</style>
