<template>
  <div>
    <h1 class="title">pages/form/index.vue</h1>
    <nuxt-link to="/form/play-ground">playgroundはここから</nuxt-link>
    <hr />
    <Form
      :hoge-number="state.hogeNumber"
      :fuga-form-data="state.fugaFormData"
      :selected-index="state.selectedIndex"
      @updateSelectedIndex="updateSelectedIndex"
    />
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
    const state = reactive({
      hogeNumber: 99999,
      fugaFormData: [
        { key: 1000, val: 10000 },
        { key: 2000, val: 20000 },
        { key: 3000, val: 30000 },
      ],
      selectedIndex: 0,
    })

    const updateSelectedIndex = (index: number) => {
      state.selectedIndex = index
    }

    return {
      state,
      updateSelectedIndex,
    }
  },
})
</script>

<style lang="scss" scoped></style>
