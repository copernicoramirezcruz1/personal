<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'

const props = defineProps({
  end: { type: Number, required: true },
  suffix: { type: String, default: '' },
  duration: { type: Number, default: 2000 }
})

const { isVisible, target } = useIntersectionObserver({ threshold: 0.5 })
const displayValue = ref(0)

let animationFrame = null
let startTime = null

function animate(timestamp) {
  if (!startTime) startTime = timestamp
  const elapsed = timestamp - startTime
  const progress = Math.min(elapsed / props.duration, 1)

  const eased = 1 - Math.pow(1 - progress, 3)
  displayValue.value = Math.floor(eased * props.end)

  if (progress < 1) {
    animationFrame = requestAnimationFrame(animate)
  } else {
    displayValue.value = props.end
  }
}

onMounted(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      startTime = null
      animationFrame = requestAnimationFrame(animate)
      observer.unobserve(entry.target)
    }
  }, { threshold: 0.5 })

  if (target.value) {
    observer.observe(target.value)
  }
})

onUnmounted(() => {
  if (animationFrame) cancelAnimationFrame(animationFrame)
})
</script>

<template>
  <div ref="target" class="text-center reveal">
    <span class="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient tabular-nums">
      {{ displayValue }}{{ suffix }}
    </span>
  </div>
</template>
