<template>
  <div>
    <h1>axios</h1>
    <el-button round @click="axiosMethod">button</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { $axios } = useContext()

    const axiosMethod = async () => {
      await $axios.post('api/hoge')
    }

    return {
      axiosMethod,
    }
  },
})
</script>

<style></style>
