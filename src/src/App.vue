<template>
  <div :data-theme="theme.current" class="min-h-screen bg-background-50 text-text-900">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'
const theme = useThemeStore()
</script>
