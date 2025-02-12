<template>
  <div class="w-full max-w-3xl mx-auto flex items-center">
    <AppInput
      v-model="searchQuery"
      placeholder="Search AmberSearch..."
      class="w-full"
      @keyup.enter="handleSearch"
    />
    <div class="ml-2">
      <svg class="w-5 h-5 text-text-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useSearchStore } from '@/stores/search'
import AppInput from '@/components/ui/AppInput.vue'

const router = useRouter()
const searchStore = useSearchStore()
const searchQuery = ref('')

onMounted(() => {
  searchQuery.value = searchStore.query
})

async function handleSearch() {
  if (!searchQuery.value.trim()) return

  await router.push({
    name: 'search',
    query: { q: searchQuery.value },
  })

  searchStore.search(searchQuery.value)
}
</script>
