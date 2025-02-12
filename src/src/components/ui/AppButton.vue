<template>
  <button
    :class="[
      'px-4 py-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2',
      variant === 'primary' && 'bg-primary-500 text-white hover:bg-primary-600',
      variant === 'secondary' && 'bg-secondary-500 text-white hover:bg-secondary-600',
      variant === 'outline' && 'border-2 border-primary-500 text-primary-500 hover:bg-primary-50',
      disabled && 'opacity-50 cursor-not-allowed',
    ]"
    :disabled="disabled"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline'
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  disabled: false,
})
</script>
