<template>
  <div>
    <div class="flex items-center justify-between mb-4 bg-background-200 rounded-lg p-4">
      <p class="text-lg text-text-600">
        Showing results for <span class="font-bold">{{ searchStore.query }}</span
        >, Total Results: <span class="font-bold">{{ searchStore.results.length }}</span>
      </p>
      <div class="flex items-center gap-2">
        <button @click="showFilters = !showFilters" class="flex items-center gap-1">
          <AdjustmentsHorizontalIcon class="w-5 h-5" />
          Filters
        </button>
        <LoadingSpinner v-if="searchStore.loading" />
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <!-- Filters Sidebar -->
      <aside class="col-span-1" v-show="showFilters">
        <SearchFilters />
      </aside>

      <!-- Search Results -->
      <main class="col-span-1 sm:col-span-2 md:col-span-3">
        <div v-if="searchStore.loading" class="flex justify-center py-8">
          <LoadingSpinner />
        </div>

        <div v-else-if="!searchStore.results.length" class="text-center py-8">
          <p class="text-lg text-text-600">No results found for "{{ searchStore.query }}"</p>
          <p class="text-text-500 mt-2">Try adjusting your search terms or filters</p>
        </div>

        <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <ResultCard
            v-for="result in searchStore.results"
            :key="result.id"
            :result="result"
            class="sm:col-span-1 md:col-span-1"
          />

          <div
            v-if="searchStore.hasMore"
            v-intersection-observer="handleIntersection"
            class="col-span-1 sm:col-span-2 md:col-span-3 py-4 text-center"
          >
            <AppButton
              v-if="!searchStore.loading"
              variant="secondary"
              @click="searchStore.loadMore"
            >
              Load More
            </AppButton>
            <LoadingSpinner v-else />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useSearchStore } from '@/stores/search'
import SearchFilters from '@/components/search/SearchFilters.vue'
import ResultCard from '@/components/search/ResultCard.vue'
import LoadingSpinner from '@/components/ui/LoadingSpinner.vue'
import AppButton from '@/components/ui/AppButton.vue'
import { AdjustmentsHorizontalIcon } from '@heroicons/vue/24/outline'

const route = useRoute()
const searchStore = useSearchStore()
const showFilters = ref(false)

onMounted(() => {
  const query = route.query.q as string
  if (query) {
    searchStore.search(query)
  }
})

function handleIntersection(entries: IntersectionObserverEntry[]) {
  const [entry] = entries
  if (entry.isIntersecting) {
    searchStore.loadMore()
  }
}
</script>
