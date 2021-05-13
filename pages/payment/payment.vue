<template>
  <div>
    <h1>payment</h1>
    <h2>テストカード</h2>
    <p>4242424242424242</p>
    <div ref="payjpAreaRef"></div>
    <nuxt-link to="/">form</nuxt-link>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const payjpAreaRef = ref()
    let scriptEl

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

      scriptEl = document.createElement('script')

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

    // CSR時に都度payjpのDOMを取り除くことで、複数のDOMが存在してしまう事象を防ぐ
    onBeforeUnmount(() => {
      // checkoutのiframe要素を取得
      const payjpCheckoutIframeEl = document.getElementById(
        'payjp-checkout-iframe'
      )

      // 親のdiv要素ごとcheckoutのiframe要素を取り除く
      payjpCheckoutIframeEl.parentElement.remove()
      // appendPayJpScriptTag()で追加したscript要素を取り除く
      payjpAreaRef.value.removeChild(scriptEl)
      window.PayjpCheckout = null
      window.onTokenCreated = null
      window.onTokenFailed = null
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
