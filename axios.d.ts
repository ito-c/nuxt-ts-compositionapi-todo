import { NuxtAxiosInstance } from '@nuxtjs/axios'

declare module '@nuxt/types' {
  interface Context {
    $axios: NuxtAxiosInstance
  }
}

declare module '@nuxtjs/composition-api' {
  interface Context {
    $axios: NuxtAxiosInstance
  }
}
