<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const cursorX = ref(0)
const cursorY = ref(0)
const dotX = ref(0)
const dotY = ref(0)
const isHovering = ref(false)
const isVisible = ref(false)
let requestRef = null

function onMouseMove(e) {
  cursorX.value = e.clientX
  cursorY.value = e.clientY
  if (!isVisible.value) isVisible.value = true
}

function animate() {
  // Smooth follow for the outer ring
  dotX.value += (cursorX.value - dotX.value) * 0.15
  dotY.value += (cursorY.value - dotY.value) * 0.15
  requestRef = requestAnimationFrame(animate)
}

function onMouseLeave() {
  isVisible.value = false
}

function onMouseEnter() {
  isVisible.value = true
}

onMounted(() => {
  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseleave', onMouseLeave)
  document.addEventListener('mouseenter', onMouseEnter)
  
  requestRef = requestAnimationFrame(animate)

  document.querySelectorAll('a, button, [role="button"], input, textarea, select, .card-hover').forEach(el => {
    el.addEventListener('mouseenter', () => { isHovering.value = true })
    el.addEventListener('mouseleave', () => { isHovering.value = false })
  })
})

onUnmounted(() => {
  cancelAnimationFrame(requestRef)
})
</script>

<template>
  <Teleport to="body">
    <!-- Outer trailing ring -->
    <div
      class="hidden md:block fixed top-0 left-0 pointer-events-none z-[200]"
      :class="{ 'opacity-100': isVisible, 'opacity-0': !isVisible }"
      style="transition: opacity 0.3s ease-out;"
      :style="{ transform: `translate(${dotX - 24}px, ${dotY - 24}px)` }"
    >
      <div
        class="border-2 rounded-full transition-all duration-300 ease-out flex items-center justify-center"
        :class="isHovering ? 'w-16 h-16 border-amber-400 bg-amber-500/10 scale-110 shadow-[0_0_15px_rgba(245,158,11,0.5)]' : 'w-12 h-12 border-amber-500/50 scale-100'"
      ></div>
    </div>
    
    <!-- Inner dot -->
    <div
      class="hidden md:block fixed top-0 left-0 pointer-events-none z-[200] mix-blend-screen"
      :class="{ 'opacity-100': isVisible, 'opacity-0': !isVisible }"
      style="transition: opacity 0.15s ease-out;"
      :style="{ transform: `translate(${cursorX - 4}px, ${cursorY - 4}px)` }"
    >
      <div
        class="w-2 h-2 bg-amber-300 rounded-full shadow-[0_0_8px_rgba(253,211,77,0.8)] transition-transform duration-200"
        :class="isHovering ? 'scale-0' : 'scale-100'"
      ></div>
    </div>
  </Teleport>
</template>
