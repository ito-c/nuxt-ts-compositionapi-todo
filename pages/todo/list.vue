<template>
  <div>this is list</div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const state = reactive({})
    return {
      state,
    }
  },
})
</script>

<style></style>
