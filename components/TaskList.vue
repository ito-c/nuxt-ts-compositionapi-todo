<template>
  <div class="task-list-wrapper">
    <div>
      <input v-model="state.taskName" type="text" />
      <button @click="addTask">タスク追加</button>
    </div>
    <div><input v-model="state.searchText" type="text" />Search</div>
    <div class="task-list">
      <ul>
        <h3>Doing</h3>
        <li v-for="(task, index) in state.doingTasks" :key="index">
          <input type="checkbox" :checked="task.status" disabled />
          <label>{{ task.name }}</label>
          <button @click="toggleTask(task, true)">toggle</button>
        </li>
      </ul>
      <ul>
        <h3>Completed</h3>
        <li v-for="(task, index) in state.completedTasks" :key="index">
          <input type="checkbox" :checked="tasl.status" disabled />
          <label>{{ task.name }}</label>
          <button @click="toggleTask(task, false)">toggle</button>
        </li>
      </ul>
    </div>
    <pre>{{ state.tasks }}</pre>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  ref,
} from '@nuxtjs/composition-api'

interface Task {
  tasks: {
    taskName: string
    status: boolean
  }
}

const useTaskList = () => {
  // タスクの一覧？
  const tasksRef = ref([])

  const toggleTask = (task, status) => {
    const index = tasksRef.value.indexOf(task)
    tasksRef.tasks.splice(index, 1, { ...task, status })
  }

  return {
    tasksRef,
    toggleTask,
  }
}

export default defineComponent({
  setup() {
    const state = reactive({
      taskName: '',
      searchText: '',
      tasks: [],
      doingTasks: computed(() =>
        state.searchedTasks.filter((t: Task) => !t.status)
      ),
      completedTasks: computed(() =>
        state.searchedTasks.filter((t: Task) => t.status)
      ),
      searchedTasks: computed(() =>
        state.tasks.filter((t: Task) => t.name.includes(state.searchtext))
      ),
    })

    const addTask = () => {
      state.tasks.push({
        name: state.taskName,
        status: false,
      })
      state.taskName = ''
    }

    const toggleTask = (task, status) => {
      const index = state.tasks.indexOf(task)
      state.tasks.splice(index, 1, { ...task, status })
    }

    return {
      state,
      addTask,
      toggleTask,
    }
  },
})
</script>

<style scoped>
.task-list-wrapper {
  border-top: 1px solid gray;
}
.task-list {
  display: flex;
  justify-content: center;
}
</style>
