<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">todo</h1>
      <h2 class="subtitle">My epic Nuxt.js project</h2>

      <nuxt-link to="/">TOPへ</nuxt-link>

      <nuxt-child />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'
import Logo from '~/components/Logo.vue'

export default defineComponent({
  components: {
    Logo,
  },

  setup(_) {
    // data
    const state = reactive({
      a: 'a',
    })

    return {
      state,
    }
  },
})
</script>

<style></style>
