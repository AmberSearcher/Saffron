<template>
  <header class="bg-background-100 shadow-md">
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between gap-4">
        <router-link to="/" class="flex items-center gap-2">
          <img src="@/assets/icons/logo.png" alt="AmberSearch" class="w-8 h-8" />
          <span class="text-xl font-bold text-primary-600">AmberSearch</span>
        </router-link>

        <SearchBar v-if="route.name !== 'home'" class="flex-grow max-w-3xl" />

        <div class="flex items-center gap-4">
          <ThemeToggle />
          <ProfileMenu />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import SearchBar from '@/components/search/SearchBar.vue'
import ThemeToggle from '@/components/molecules/ThemeToggle.vue'
import ProfileMenu from '@/components/molecules/ProfileMenu.vue'

const route = useRoute()
</script>
