<template>
  <div>
    <!-- En-tête (titre, input) -->
    <TodoHeader />
    <!-- En-tête (titre, input) -->

    <!-- Liste des tâches -->
    <main class="main">
      <div class="">
        <input type="checkbox" id="toggle-all-input" />
        <label for="toggle-all-input" class="toggle-all-label">Tout afficher</label>
      </div>
      <ul class="todo-list">
        <li>
          <div class="view">
            <input type="checkbox" id="" class="toggle" />
            <label for="">Tâche 1</label>
          </div>
        </li>
        <li>
          <div class="view">
            <input type="checkbox" id="" class="toggle" />
            <label for="">Tâche 2</label>
          </div>
        </li>
        <li>
          <div class="view">
            <input type="checkbox" id="" class="toggle" />
            <label for="">Tâche 3</label>
          </div>
        </li>
      </ul>
    </main>
    <!-- Liste des tâches -->

    <TodoFooter />
  </div>
</template>

<script setup lang="ts">
import TodoHeader from '@/components/TodoHeader.vue'
import TodoFooter from '@/components/TodoFooter.vue'
</script>
<style></style>
