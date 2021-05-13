<template>
  <div>
    <p>TOPページ</p>
    <nuxt-link to="todo">todo</nuxt-link>
    <nuxt-link to="form">form</nuxt-link>
    <nuxt-link to="payment/payment">payment</nuxt-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({})
</script>

<style></style>
