import { ref } from '@nuxtjs/composition-api'

export const useTaskList = () => {
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
