<template>
  <div class="task-list-wrapper">
    <div>
      <AddTask :add-task="addTask" />
    </div>
    <div><input v-model="searchTextRef" type="text" />Search</div>
    <div class="task-list">
      <TaskRow title="DOING" :tasks="doingTasks" :toggle-task="toggleTask" />
      <TaskRow
        title="COMPLETED"
        :tasks="completedTasks"
        :toggle-task="toggleTask"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import TaskRow from './TaskRow.vue'
import AddTask from './AddTask.vue'
import useFilter from './composables/use-filter'
import { useTaskList } from './composables/use-task-list'
import { useAddingTask } from './composables/use-adding-task'
import useSearcher from './composables/use-searcher'

export default defineComponent({
  components: {
    TaskRow,
    AddTask,
  },

  setup() {
    const { tasksRef, toggleTask } = useTaskList()
    const { addTask } = useAddingTask(tasksRef)
    const { searchTextRef, search } = useSearcher(tasksRef)
    const { doingTasks, completedTasks } = useFilter(search)

    return {
      // Mutable state
      tasksRef, // タスク一覧
      searchTextRef, // 検索するタスク名
      // Functions
      addTask,
      toggleTask,
      // Computed
      doingTasks,
      completedTasks,
    }
  },
  // setup() {
  //   const state = reactive({
  //     taskName: '',
  //     searchText: '',
  //     tasks: [],
  //     doingTasks: computed(() =>
  //       state.searchedTasks.filter((t: Task) => !t.status)
  //     ),
  //     completedTasks: computed(() =>
  //       state.searchedTasks.filter((t: Task) => t.status)
  //     ),
  //     searchedTasks: computed(() =>
  //       state.tasks.filter((t: Task) => t.name.includes(state.searchtext))
  //     ),
  //   })
  //   const addTask = () => {
  //     state.tasks.push({
  //       name: state.taskName,
  //       status: false,
  //     })
  //     state.taskName = ''
  //   }
  //   const toggleTask = (task, status) => {
  //     const index = state.tasks.indexOf(task)
  //     state.tasks.splice(index, 1, { ...task, status })
  //   }
  //   return {
  //     state,
  //     addTask,
  //     toggleTask,
  //   }
  // },
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
