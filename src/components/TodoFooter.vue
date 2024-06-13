<template>
  <footer class="footer">
    <span class="todo-count"> <strong>10</strong> tâches restantes </span>

    <ul class="filters">
      <li>
        <RouterLink to="#">Tous</RouterLink>
      </li>
      <li>
        <RouterLink to="#">En cours</RouterLink>
      </li>
      <li>
        <RouterLink to="#">Terminé</RouterLink>
      </li>

      <button class="clear-completed">Sup. tâches terminées</button>
    </ul>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
