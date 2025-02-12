<template>
  <div class="relative">
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      class="w-full px-4 py-2 rounded-md border border-text-200 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-background-50"
      :class="{ 'pl-10': icon }"
      v-bind="$attrs"
    />
    <slot name="icon" class="absolute left-3 top-1/2 transform -translate-y-1/2" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue: string
  icon?: boolean
}

withDefaults(defineProps<Props>(), {
  icon: false,
})

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>
