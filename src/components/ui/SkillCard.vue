<script setup>
defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, default: '' },
  index: { type: Number, default: 0 }
})
</script>

<template>
  <div
    class="relative group p-6 rounded-2xl glass card-hover reveal"
    :style="{ transitionDelay: `${index * 100}ms` }"
  >
    <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div class="relative z-10">
      <div class="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center mb-4 group-hover:bg-amber-600/20 transition-colors duration-300">
        <span class="text-lg">{{ icon }}</span>
      </div>
      <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-amber-300 transition-colors duration-300">
        {{ title }}
      </h3>
      <p class="text-sm text-zinc-400 leading-relaxed">
        {{ description }}
      </p>
    </div>
  </div>
</template>
