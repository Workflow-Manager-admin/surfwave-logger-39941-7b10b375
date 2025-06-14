<script setup lang="ts">
import { ref } from 'vue'
import SurfSessionForm from './SurfSessionForm.vue'
const newSessionOpen = ref(false)
function openForm() { newSessionOpen.value = true }
function closeForm() { newSessionOpen.value = false }
</script>

<template>
  <div class="new-session-btn-bar">
    <button class="new-session-btn" @click="openForm">
      <span class="plus">＋</span>
      Log New Session
    </button>
    <SurfSessionForm v-if="newSessionOpen" @close="closeForm" />
  </div>
</template>

<style scoped>
.new-session-btn-bar {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1.4em;
}
.new-session-btn {
  background: linear-gradient(90deg, #4FC3F7 60%, #008080 120%);
  color: #fff;
  border: none;
  border-radius: 50px;
  padding: 0.75em 2.3em;
  font-size: 1.17em;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 1.5px 10px #b2ebf2dd;
  transition: filter 0.12s;
  display: flex;
  align-items: center;
  gap: 0.5em;
}
.new-session-btn:hover {
  filter: brightness(1.08) saturate(1.1);
}
.plus {
  font-size: 1.25em;
  margin-right: 0.15em;
}
</style>
