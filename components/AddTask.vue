<template>
  <div>
    <input v-model="taskNameRef" type="text" />
    <button @click="addTask(taskNameRef)">タスク追加</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    addTask: Function,
  },

  setup() {
    const taskNameRef = ref('')

    return {
      taskNameRef,
    }
  },
})
</script>

<style></style>
