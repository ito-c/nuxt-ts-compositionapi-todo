<template>
  <div>
    <div class="test">test</div>
    <Form />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'
import Form from '~/components/Form.vue'

export default defineComponent({
  components: {
    Form,
  },

  setup() {
    const state = reactive({})
    return {
      state,
    }
  },
})
</script>

<style lang="scss" scoped>
.test {
  font-size: 100px;
}
</style>
