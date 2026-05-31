<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const cursorX = ref(0)
const cursorY = ref(0)
const isHovering = ref(false)
const isVisible = ref(false)

function onMouseMove(e) {
  cursorX.value = e.clientX
  cursorY.value = e.clientY
  if (!isVisible.value) isVisible.value = true
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

  document.querySelectorAll('a, button, [role="button"], input, textarea, select').forEach(el => {
    el.addEventListener('mouseenter', () => { isHovering.value = true })
    el.addEventListener('mouseleave', () => { isHovering.value = false })
  })
})
</script>

<template>
  <Teleport to="body">
    <div
      class="hidden md:block fixed top-0 left-0 pointer-events-none z-[200] mix-blend-difference"
      :class="{ 'opacity-100': isVisible, 'opacity-0': !isVisible }"
      style="transition: opacity 0.3s, transform 0.1s ease-out;"
      :style="{ transform: `translate(${cursorX - 16}px, ${cursorY - 16}px)` }"
    >
      <div
        class="rounded-full bg-white transition-all duration-300 ease-out"
        :class="isHovering ? 'w-10 h-10 scale-100' : 'w-6 h-6 scale-75'"
      />
    </div>
  </Teleport>
</template>
