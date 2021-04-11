import { ref } from '@nuxtjs/composition-api'

export const useAddingTask = (tasksRef) => {
  const taskNameRef = ref('')

  const addTask = () => {
    tasksRef.value.push({
      name: taskNameRef.value,
      status: false,
    })
    taskNameRef.value = ''
  }

  return {
    taskNameRef,
    addTask,
  }
}
