<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">nuxt_typescript_app</h1>
      <h2 class="subtitle">My epic Nuxt.js project</h2>

      <user-name :user="userName" :prop-awesome-name="awesomeNameRef" />
      <nuxt-link to="todo">TODOへ</nuxt-link>

      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
      <button @click="increment(1)">増やすよ</button>
      <button @click="decrement(1)">減らすよ</button>
      <div>
        {{ state.count }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from '@nuxtjs/composition-api'
import Logo from '~/components/Logo.vue'
import UserName from '~/components/UserName.vue'

export default defineComponent({
  components: {
    Logo,
    UserName,
  },

  setup(_) {
    // data
    const state = reactive({
      familyName: 'yoshida',
      givenName: 'itoka',
      count: 0,
    })
    const awesomeNameRef = ref('hogemori')

    const increment = (count: number): void => {
      state.count += count

      if (state.count >= 0) {
        console.log('プラスだよ')
      }
    }

    const decrement = (count: number): void => {
      state.count -= count

      if (state.count < 0) {
        console.log('マイナスだよ')
      }
    }

    return {
      // templeteで使う
      userName: {
        familyName: state.familyName,
        givenName: state.givenName,
      },
      awesomeNameRef,
      state,
      increment,
      decrement,
    }
  },
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
