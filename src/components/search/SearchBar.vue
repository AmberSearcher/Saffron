<template>
  <div class="w-full max-w-3xl mx-auto flex items-center">
    <AppInput
      v-model="searchQuery"
      placeholder="Search AmberSearch..."
      class="w-full"
      :search-icon="true"
      @keyup.enter="handleSearch"
    />
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
