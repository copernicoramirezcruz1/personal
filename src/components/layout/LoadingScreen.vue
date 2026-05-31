<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(true)
const isExiting = ref(false)

onMounted(() => {
  setTimeout(() => {
    isExiting.value = true
    setTimeout(() => {
      isVisible.value = false
    }, 800)
  }, 2000)
})
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isVisible"
      class="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950 transition-opacity duration-700"
      :class="{ 'opacity-0 pointer-events-none': isExiting }"
    >
      <div class="flex flex-col items-center gap-6">
        <div class="relative">
          <div class="w-16 h-16 rounded-full border-2 border-blue-500/30 border-t-blue-500 animate-spin" />
          <div class="absolute inset-0 w-16 h-16 rounded-full border-2 border-violet-500/20 border-b-violet-500 animate-spin" style="animation-direction: reverse; animation-duration: 1.5s;" />
        </div>
        <p class="text-sm text-zinc-500 font-mono tracking-widest uppercase animate-pulse">
          Cargando
        </p>
      </div>
    </div>
  </Teleport>
</template>
