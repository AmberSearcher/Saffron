<template>
  <div class="flex flex-col gap-4 p-4 bg-background-100 rounded-lg">
    <div class="flex flex-col gap-2">
      <h3 class="text-lg font-semibold">Sort By</h3>
      <select
        v-model="filters.sortBy"
        class="w-full p-2 rounded bg-background-50 border border-text-200"
      >
        <option value="relevance">Relevance</option>
        <option value="date">Date</option>
        <option value="popularity">Popularity</option>
      </select>
    </div>

    <div class="flex flex-col gap-2">
      <h3 class="text-lg font-semibold">Time Range</h3>
      <select
        v-model="filters.timeRange"
        class="w-full p-2 rounded bg-background-50 border border-text-200"
      >
        <option value="any">Any Time</option>
        <option value="day">Past 24 Hours</option>
        <option value="week">Past Week</option>
        <option value="month">Past Month</option>
        <option value="year">Past Year</option>
      </select>
    </div>

    <div class="flex flex-col gap-2">
      <h3 class="text-lg font-semibold">Type</h3>
      <select
        v-model="filters.type"
        class="w-full p-2 rounded bg-background-50 border border-text-200"
      >
        <option value="all">All Types</option>
        <option value="image">Images</option>
        <option value="video">Videos</option>
        <option value="article">Articles</option>
      </select>
    </div>

    <AppButton @click="applyFilters">Apply Filters</AppButton>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useSearchStore } from '@/stores/search'
import type { SearchFilters } from '@/types'
import AppButton from '@/components/ui/AppButton.vue'

const searchStore = useSearchStore()
const filters = reactive<SearchFilters>({ ...searchStore.filters })

function applyFilters() {
  searchStore.updateFilters(filters)
}
</script>
