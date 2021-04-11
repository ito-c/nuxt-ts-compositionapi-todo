import { computed, ref } from '@nuxtjs/composition-api'

export default function useSearcher(tasksRef) {
  const searchTextRef = ref('')
  const search = computed(() => {
    return tasksRef.value.filter((t) => t.name.includes(searchTextRef.value))
  })

  return {
    searchTextRef,
    search,
  }
}
