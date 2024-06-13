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
        <li v-for="todo in todos" :key="todo.id">
          <div class="view">
            <input type="checkbox" :id="todo.id" class="toggle" />
            <label :for="todo.id">{{ todo.title }}</label>
          </div>
        </li>
      </ul>
    </main>
    <!-- Liste des tâches -->

    <TodoFooter />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TodoHeader from '@/components/TodoHeader.vue'
import TodoFooter from '@/components/TodoFooter.vue'
import type { Todo } from '@/@types'

const todos = ref<Todo[]>([
  { id: '888e49c6-39e3-4ae5-88fa-582e3371c96e', title: 'Ma tâche 1', completed: false },
  { id: 'bd6673fd-ff73-4f6e-9552-1e009cbfbd3d', title: 'Ma tâche 2', completed: false },
  { id: '6615b6d1-9e66-4843-8b8c-f0125e74aa66', title: 'Ma tâche 3', completed: false }
])
</script>
<style></style>
