import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'

type ThemeMode = 'light' | 'dark'
type ThemeVariant = 'normal' | 'pastel'

export const useThemeStore = defineStore('theme', () => {
  const mode = ref<ThemeMode>((localStorage.getItem('theme-mode') as ThemeMode) || 'light')
  const variant = ref<ThemeVariant>(
    (localStorage.getItem('theme-variant') as ThemeVariant) || 'normal',
  )

  const current = computed(() => `${mode.value}-${variant.value}`)

  function toggleMode() {
    mode.value = mode.value === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme-mode', mode.value)
  }

  function setVariant(newVariant: ThemeVariant) {
    variant.value = newVariant
    localStorage.setItem('theme-variant', variant.value)
  }

  return {
    mode,
    variant,
    current,
    toggleMode,
    setVariant,
  }
})
