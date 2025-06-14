<script setup lang="ts">
import SurfSessionList from '../components/SurfSessionList.vue'
import SurfNewSessionButton from '../components/SurfNewSessionButton.vue'
import SurfFilterBar from '../components/SurfFilterBar.vue'
import SurfReminderBanner from '../components/SurfReminderBanner.vue'
</script>

<template>
  <main>
    <section style="padding-top: 2.5rem;">
      <SurfReminderBanner />
      <SurfFilterBar />
      <SurfNewSessionButton />
      <SurfSessionList />
    </section>
  </main>
</template>
