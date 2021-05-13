<template>
  <div>
    <h1>payment</h1>
    <h2>テストカード</h2>
    <p>4242424242424242</p>
    <div ref="payjpAreaRef"></div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  nextTick,
  onMounted,
  ref,
  useContext,
  useRouter,
} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const payjpAreaRef = ref()

    const onTokenCreated = () => {
      console.log('onTokenCreated')
      const token = document.getElementsByName('payjp-token')[0].value
      console.log(token)
    }

    const onTokenFailed = (res) => {
      console.log('onTokenFailed')
      console.log(res)
    }

    const appendPayJpScriptTag = () => {
      const attrs = {
        id: 'payjp-script',
        src: 'https://checkout.pay.jp/',
        class: 'payjp-button',
        'data-key': 'pk_test_87371bd56a6ec93ec3e0ced6',
        'data-partial': true,
        'data-text': 'カード情報を入力する',
        'data-submit-text': '注文を確定する',
        'data-lang': 'ja',
        'data-on-created': 'onTokenCreated',
        'data-on-failed': 'onTokenFailed',
        'data-name-placeholder': 'YAMADA TARO',
      }

      const scriptEl = document.createElement('script')
      Object.keys(attrs).forEach((key) => {
        scriptEl.setAttribute(key, attrs[key])
      })

      payjpAreaRef.value.appendChild(scriptEl)
    }

    onMounted(() => {
      nextTick(() => {
        appendPayJpScriptTag()
      })

      // appendPayJpScriptTagでscriptタグをappendとpayjpのscript実行後に処理したい
      window.onTokenCreated = onTokenCreated
      window.onTokenFailed = onTokenFailed
    })

    return {
      payjpAreaRef,
      onTokenCreated,
      onTokenFailed,
    }
  },
})
</script>

<style></style>
