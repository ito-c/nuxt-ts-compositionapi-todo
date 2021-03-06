export const useAddingTask = (tasksRef) => {
  const addTask = (taskName) => {
    tasksRef.value.push({
      name: taskName,
      status: false,
    })
  }

  return {
    addTask,
  }
}
