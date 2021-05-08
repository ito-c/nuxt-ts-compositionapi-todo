<template>
  <div class="formComponent">
    <h2 class="title">form component</h2>
    <p>computed</p>
    {{ filterCommaComputed }}
    <hr />
    <p>method</p>
    <li v-for="(formData, index) in props.fugaFormData" :key="index">
      <label>
        <input
          type="radio"
          :checked="index === props.selectedIndex"
          name="name"
          @change="updateSelectedIndex(index)"
        />
        {{ filterCommaMethod(formData.val) }}
      </label>
    </li>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    hogeNumber: {
      type: Number,
      required: true,
      default: 0,
    },
    fugaFormData: {
      type: Array,
      required: true,
      default: () => [],
    },
    selectedIndex: {
      type: Number,
      required: true,
      default: 0,
    },
  },

  setup(props, { emit }) {
    const filterCommaComputed = computed(() => {
      console.log('computed')
      return props.hogeNumber.toLocaleString()
    })

    const filterCommaMethod = (formData: number) => {
      console.log('method')
      return formData.toLocaleString()
    }

    const updateSelectedIndex = (index: number) => {
      emit('updateSelectedIndex', index)
    }

    return {
      props,
      filterCommaComputed,
      filterCommaMethod,
      updateSelectedIndex,
    }
  },
})
</script>

<style lang="scss" scoped>
.formComponent {
  li {
    @apply list-none;
  }
}
</style>
