<template>
  <div class="FormPlayGroundPage">
    <h1 class="title">FormPlayGroundPage</h1>
    <FormPlaySync
      :form-data="state.formData"
      @updateFormData="updateFormData"
    />
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

    const updateFormData = (input: string) => {
      state.formData = input
    }

    return {
      state,
      updateFormData,
    }
  },
})
</script>

<style lang="scss" scoped></style>
