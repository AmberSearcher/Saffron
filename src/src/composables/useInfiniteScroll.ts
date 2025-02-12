import { ref, onMounted, onUnmounted } from 'vue'

export function useInfiniteScroll(callback: () => void, options = {}) {
  const observer = ref<IntersectionObserver | null>(null)
  const targetRef = ref<HTMLElement | null>(null)

  onMounted(() => {
    observer.value = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback()
      }
    }, options)

    if (targetRef.value) {
      observer.value.observe(targetRef.value)
    }
  })

  onUnmounted(() => {
    if (observer.value) {
      observer.value.disconnect()
    }
  })

  return {
    targetRef,
  }
}
