import { ref } from '@nuxtjs/composition-api'

export const useTaskList = () => {
  const tasksRef = ref([])

  const toggleTask = (task, status) => {
    const index = tasksRef.value.indexOf(task)
    tasksRef.value.splice(index, 1, { ...task, status })
  }

  return {
    tasksRef,
    toggleTask,
  }
}
