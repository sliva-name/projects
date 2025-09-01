<template>
  <div class="inline-flex items-center gap-2">
    <span class="font-bold text-3xl lg:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{{ displayValue }}</span>
    <span class="text-lg lg:text-xl text-gray-600 font-medium">{{ suffix }}</span>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  value: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    default: 2000
  },
  suffix: {
    type: String,
    default: ''
  }
})

const displayValue = ref(0)

const animateValue = (start, end, duration) => {
  const startTime = performance.now()
  const difference = end - start

  const animate = (currentTime) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)

    // Easing function for smooth animation
    const easeOutCubic = 1 - Math.pow(1 - progress, 3)
    displayValue.value = Math.floor(start + difference * easeOutCubic)

    if (progress < 1) {
      requestAnimationFrame(animate)
    } else {
      displayValue.value = end
    }
  }

  requestAnimationFrame(animate)
}

onMounted(() => {
  animateValue(0, props.value, props.duration)
})

watch(() => props.value, (newValue) => {
  animateValue(displayValue.value, newValue, props.duration)
})
</script>
