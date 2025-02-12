<template>
  <div class="flex flex-col items-center justify-center min-h-[90vh] gap-8">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-primary-600 mb-4">AmberSearch</h1>
      <p class="text-lg text-text-600">Discover what you're looking for</p>
    </div>

    <div class="w-full max-w-2xl">
      <SearchBar />
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
      <div
        v-for="category in categories"
        :key="category.name"
        class="p-4 bg-background-100 rounded-lg text-center cursor-pointer hover:bg-background-200 transition-colors"
      >
        <component :is="category.icon" class="w-8 h-8 mx-auto mb-2" />
        <span class="text-text-700">{{ category.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SearchBar from '@/components/search/SearchBar.vue'
import { PhotoIcon, VideoCameraIcon, NewspaperIcon, GlobeAltIcon } from '@heroicons/vue/24/outline'

const categories = [
  { name: 'Images', icon: PhotoIcon },
  { name: 'Videos', icon: VideoCameraIcon },
  { name: 'Articles', icon: NewspaperIcon },
  { name: 'Web', icon: GlobeAltIcon },
]
</script>
