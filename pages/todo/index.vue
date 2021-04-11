<template>
  <div>this is index</div>
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
