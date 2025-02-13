<template>
  <div
    class="bg-background-100 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200"
    :class="{ 'cursor-pointer': clickable }"
    @click="clickable && $emit('click')"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  clickable?: boolean
}

withDefaults(defineProps<Props>(), {
  clickable: false,
})

defineEmits<{
  (e: 'click'): void
}>()
</script>
