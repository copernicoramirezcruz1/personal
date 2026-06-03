<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: { type: String, required: true },
  level: { type: Number, required: true },
  index: { type: Number, default: 0 }
})

const delay = computed(() => `${props.index * 100 + 200}ms`)
</script>

<template>
  <div
    class="group relative reveal"
    :style="{ transitionDelay: delay }"
  >
    <div class="flex items-center justify-between mb-2">
      <span class="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors duration-300">
        {{ name }}
      </span>
      <span class="text-xs font-mono text-zinc-500 group-hover:text-amber-400 transition-colors duration-300">
        {{ level }}%
      </span>
    </div>
    <div class="h-1.5 rounded-full bg-zinc-800 overflow-hidden">
      <div
        class="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-1000 ease-out"
        :style="{ width: `${level}%`, transitionDelay: `${parseInt(delay) + 300}ms` }"
      />
    </div>
  </div>
</template>
