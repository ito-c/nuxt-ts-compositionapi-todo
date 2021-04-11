<template>
  <div class="test">
    <p>User FullName: {{ fullName }}</p>
    <p>User Message: {{ message.message }}</p>
    <p>awesome {{ awesomeName }}</p>
    <button @click="changeMessage">メッセージの文字を変える</button>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  PropType,
  reactive,
} from '@nuxtjs/composition-api'

// 型推論用。渡ってきた値自体のチェックはpropsのtype指定に任せる
interface User {
  familyName: string
  givenName: number
}

export default defineComponent({
  props: {
    user: {
      type: Object as PropType<User>,
      required: true,
    },
    propAwesomeName: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const message = reactive<{ message: string }>({
      message: 'This is a message. ',
    })

    const changeMessage = (): string =>
      (message.message =
        message.message === 'This is a message. '
          ? 'change message'
          : 'This is a message. ')

    const fullName = computed((): string => {
      return `${props.user.familyName} ${props.user.givenName}`
    })

    const awesomeName = computed((): string => {
      return `hogehoge ${props.propAwesomeName}`
    })

    return {
      message,
      changeMessage,
      fullName,
      awesomeName,
    }
  },
})
</script>

<style>
.user-name {
  font-size: 16px;
  color: #35495e;
}
.test {
  border: 1px solid;
}
</style>
