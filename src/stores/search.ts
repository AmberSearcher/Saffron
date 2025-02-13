import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { SearchResult, SearchFilters } from '@/types'

export const useSearchStore = defineStore('search', () => {
  const query = ref('')
  const results = ref<SearchResult[]>([])
  const filters = ref<SearchFilters>({
    sortBy: 'relevance',
    timeRange: 'any',
    type: 'all',
  })
  const loading = ref(false)
  const page = ref(1)
  const hasMore = ref(true)
  const testingMode = ref(true)

  const totalResults = computed(() => results.value.length)

  async function search(newQuery: string) {
    query.value = newQuery
    loading.value = true
    page.value = 1
    try {
      if (testingMode.value) {
        // Mock API response for testing
        results.value = Array(20)
          .fill(null)
          .map((_, i) => ({
            id: `${i}`,
            title: `Result ${i}`,
            description: `This is a example result ${i}`,
            url: `https://example.com/result/${i}`,
            thumbnail: `https://picsum.photos/200/300?random=${i}`,
            timestamp: new Date(Date.now() - i * 1000).toISOString(),
          }))
        hasMore.value = true
      } else {
        // Backend API call here
      }
    } finally {
      loading.value = false
    }
  }

  async function loadMore() {
    if (loading.value || !hasMore.value) return

    loading.value = true
    page.value++
    try {
      if (testingMode.value) {
        // Mock API response for testing
        results.value = [
          ...results.value,
          ...Array(20)
            .fill(null)
            .map((_, i) => ({
              id: `${page.value * 10 + i}`,
              title: `Result ${page.value * 10 + i}`,
              description: `This is a example result ${page.value * 10 + i}`,
              url: `https://example.com/result/${page.value * 10 + i}`,
              thumbnail: `https://picsum.photos/200/300?random=${page.value * 10 + i}`,
              timestamp: new Date(Date.now() - (page.value * 10 + i) * 1000).toISOString(),
            })),
        ]
        hasMore.value = true
      } else {
        // Backend API call here
      }
    } finally {
      loading.value = false
    }
  }

  function updateFilters(newFilters: Partial<SearchFilters>) {
    filters.value = { ...filters.value, ...newFilters }
    search(query.value)
  }

  function toggleTestingMode() {
    testingMode.value = !testingMode.value
  }

  return {
    query,
    results,
    filters,
    loading,
    hasMore,
    totalResults,
    search,
    loadMore,
    updateFilters,
    testingMode,
    toggleTestingMode,
  }
})
