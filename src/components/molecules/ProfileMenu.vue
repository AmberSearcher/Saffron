<template>
  <div class="relative" ref="menuRef">
    <button
      @click="showMenu = !showMenu"
      class="flex items-center gap-2 p-2 rounded-full hover:bg-background-200 transition-colors"
    >
      <img
        :src="profile?.avatar || '/default-avatar.png'"
        alt="Profile"
        class="w-8 h-8 rounded-full"
      />
      <span class="hidden md:block">{{ profile?.name || 'Guest' }}</span>
    </button>

    <div
      v-if="showMenu"
      class="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-background-200 ring-1 ring-black ring-opacity-5"
    >
      <div class="py-1">
        <a href="#" class="block px-4 py-2 text-text-700 hover:bg-background-100">
          Profile Settings
        </a>
        <a href="#" class="block px-4 py-2 text-text-700 hover:bg-background-100">
          Search History
        </a>
        <a href="#" class="block px-4 py-2 text-text-700 hover:bg-background-100"> Preferences </a>
        <hr class="my-1 border-text-200" />
        <button
          @click="logout"
          class="w-full px-4 py-2 text-left text-red-600 hover:bg-background-100"
        >
          Sign Out
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { UserProfile } from '@/types'
import { onClickOutside } from '@vueuse/core'

// Mock profile data
const profile = ref<UserProfile | null>({
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  preferences: {
    theme: 'light',
    language: 'en',
  },
})

const showMenu = ref(false)
const menuRef = ref<HTMLElement | null>(null)

function logout() {
  showMenu.value = false
}

onClickOutside(menuRef, () => {
  showMenu.value = false
})
</script>
