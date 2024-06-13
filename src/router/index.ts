import TodoView from "@/views/TodoView.vue";
import { createMemoryHistory, createRouter } from 'vue-router';


const routes = [
  {
    path: '/',
    component: TodoView
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;