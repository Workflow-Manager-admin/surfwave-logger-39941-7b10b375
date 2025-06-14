<template>
  <div class="about">
    <h1>About SurfSync</h1>
    <p>
      SurfSync helps you effortlessly log and analyze your surf sessions. Developed by ocean lovers, for ocean lovers.
    </p>
    <ul>
      <li>Log detailed sessions with mood, conditions & notes</li>
      <li>View/edit/delete any session with highlights</li>
      <li>See stats and trends in the dashboard</li>
      <li>Ocean-inspired minimal UI</li>
    </ul>
  </div>
</template>

<style scoped>
.about {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  background: linear-gradient(120deg, #4FC3F7 20%, #008080 80%);
  color: #fff;
  border-radius: 12px;
  margin-top: 40px;
}
.about h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.about ul {
  margin: 0.5rem 0 0 1.5rem;
  padding: 0;
}
.about li {
  margin-bottom: 0.25rem;
}
</style>
