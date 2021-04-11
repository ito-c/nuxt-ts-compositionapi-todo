<template>
  <div>
    <TaskList />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'
import TaskList from '~/components/TaskList.vue'

export default defineComponent({
  components: { TaskList },

  setup() {
    const state = reactive({})
    return {
      state,
    }
  },
})
</script>

<style></style>
