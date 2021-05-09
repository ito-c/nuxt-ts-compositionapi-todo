import { shallowMount, createLocalVue } from '@vue/test-utils'
import Element from 'element-ui'
import AxiosPage from '@/pages/form/axios.vue'

const localVue = createLocalVue()
localVue.use(Element)

const mockAxios = {
  post: jest.fn(),
}

describe('Axios', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(AxiosPage, {
      localVue,
      mocks: {
        $nuxt: {
          context: {
            $axios: mockAxios,
          },
        },
      },
    })
  })

  describe('単体テスト', () => {
    describe('axiosMethod', () => {
      it('POST api/hogeが叩かれる', async () => {
        await wrapper.vm.axiosMethod()
        expect(mockAxios.post).toHaveBeenCalledTimes(1)
      })
    })
  })
})
