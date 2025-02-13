<template>
  <div class="relative">
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      class="w-full px-4 py-2 rounded-md border border-text-200 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-background-50"
      :class="{ 'pl-10': icon, 'pr-10': searchIcon }"
      v-bind="$attrs"
    />
    <slot name="icon" class="absolute left-3 top-1/2 transform -translate-y-1/2" />
    <div v-if="searchIcon" class="absolute right-3 top-1/2 transform -translate-y-1/2">
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
interface Props {
  modelValue: string
  icon?: boolean
  searchIcon?: boolean
}

withDefaults(defineProps<Props>(), {
  icon: false,
  searchIcon: false,
})

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>
