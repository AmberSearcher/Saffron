<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="flex-grow w-full mx-auto p-4 md:px-12 md:py-8">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
</script>
