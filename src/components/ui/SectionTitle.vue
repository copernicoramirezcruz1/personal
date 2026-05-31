<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' }
})
</script>

<template>
  <div class="mb-16 md:mb-20">
    <p v-if="subtitle" class="text-xs md:text-sm font-mono tracking-widest text-blue-400 uppercase mb-4 reveal">
      {{ subtitle }}
    </p>
    <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white reveal reveal-delay-1">
      {{ title }}
    </h2>
    <div class="mt-4 h-px w-20 bg-gradient-to-r from-blue-500 to-transparent reveal reveal-delay-2" />
  </div>
</template>
