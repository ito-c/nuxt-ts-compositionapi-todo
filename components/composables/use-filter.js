import { computed, isRef, ref } from '@nuxtjs/composition-api'

export const useFilter = (tasks = []) => {
  const tasksRef = isRef(tasks) ? tasks : ref(tasks)
  // 配列か
  const valid = Array.isArray(tasksRef.value)

  const doingTasks = valid
    ? computed(() => tasksRef.value.filter((t) => !t.status))
    : () => {
        return []
      }
  const completedTasks = valid
    ? computed(() => tasksRef.value.filter((t) => t.status))
    : () => {
        return []
      }

  return {
    doingTasks,
    completedTasks,
  }
}
