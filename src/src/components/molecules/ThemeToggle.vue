<template>
  <div class="relative">
    <button
      @click="showMenu = !showMenu"
      class="p-2 rounded-full hover:bg-background-200 transition-colors"
    >
      <svg
        v-if="theme.mode === 'light'"
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
      <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </button>

    <div
      v-if="showMenu"
      class="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-background-50 ring-1 ring-black ring-opacity-5"
    >
      <div class="py-1">
        <button @click="toggleMode" class="w-full px-4 py-2 text-left hover:bg-background-100">
          Toggle {{ theme.mode === 'light' ? 'Dark' : 'Light' }} Mode
        </button>
        <button
          @click="setVariant('normal')"
          class="w-full px-4 py-2 text-left hover:bg-background-100"
          :class="{ 'text-primary-500': theme.variant === 'normal' }"
        >
          Normal Theme
        </button>
        <button
          @click="setVariant('pastel')"
          class="w-full px-4 py-2 text-left hover:bg-background-100"
          :class="{ 'text-primary-500': theme.variant === 'pastel' }"
        >
          Pastel Theme
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useThemeStore } from '@/stores/theme'
import { onClickOutside } from '@vueuse/core'

const theme = useThemeStore()
const showMenu = ref(false)

function toggleMode() {
  theme.toggleMode()
  showMenu.value = false
}

function setVariant(variant: 'normal' | 'pastel') {
  theme.setVariant(variant)
  showMenu.value = false
}

const menuRef = ref<HTMLElement | null>(null)
onClickOutside(menuRef, () => {
  showMenu.value = false
})
</script>
