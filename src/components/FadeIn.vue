<template>
  <div
    ref="element"
    :class="[
      'transition-all duration-700 ease-out',
      isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
    ]"
  >
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const element = ref(null)
const isVisible = ref(false)

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.unobserve(entry.target)
      }
    })
  },
  {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }
)

onMounted(() => {
  if (element.value) {
    observer.observe(element.value)
  }
})

onUnmounted(() => {
  if (element.value) {
    observer.unobserve(element.value)
  }
})
</script>
