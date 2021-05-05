<template>
  <div class="FormPlayGroundPage">
    <h1 class="title">FormPlayGroundPage</h1>
    <FormPlaySync :form-data.sync="state.formData" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'
import FormPlaySync from '~/components/FormPlaySync.vue'

export default defineComponent({
  components: {
    FormPlaySync,
  },

  setup() {
    const state = reactive({
      formData: '',
    })

    return {
      state,
    }
  },
})
</script>

<style lang="scss" scoped></style>
