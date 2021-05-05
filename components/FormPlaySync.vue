<template>
  <div class="FormPlaySync">
    <h2 class="title">FormPlaySync</h2>
    <el-input :value="props.formData" @input="updateFormData"></el-input>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    formData: {
      type: String,
      required: true,
      default: '',
    },
  },

  setup(props, { emit }) {
    const updateFormData = (input: string) => {
      emit('updateFormData', input)
    }

    return {
      props,
      updateFormData,
    }
  },
})
</script>

<style lang="scss" scoped></style>
