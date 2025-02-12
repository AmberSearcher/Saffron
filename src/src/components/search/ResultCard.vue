<template>
  <AppCard clickable @click="navigateToResult" class="flex gap-4">
    <div v-if="result.thumbnail" class="flex-shrink-0">
      <img :src="result.thumbnail" :alt="result.title" class="w-24 h-24 object-cover rounded" />
    </div>
    <div class="flex flex-col flex-grow">
      <h3 class="text-lg font-semibold text-primary-700 mb-1">
        {{ result.title }}
      </h3>
      <p class="text-sm text-text-600 mb-2">{{ result.url }}</p>
      <p class="text-text-700 line-clamp-2">{{ result.description }}</p>
      <span class="text-xs text-text-500 mt-2">
        {{ formatDate(result.timestamp) }}
      </span>
    </div>
  </AppCard>
</template>

<script setup lang="ts">
import type { SearchResult } from '@/types'
import AppCard from '@/components/ui/AppCard.vue'

interface Props {
  result: SearchResult
}

const props = defineProps<Props>()

function formatDate(timestamp: string): string {
  return new Date(timestamp).toLocaleDateString()
}

function navigateToResult() {
  window.open(props.result.url, '_blank')
}
</script>
