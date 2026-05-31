<script setup>
const particles = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 1,
  duration: Math.random() * 3 + 2,
  delay: Math.random() * 2,
  opacity: Math.random() * 0.4 + 0.1
}))
</script>

<template>
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <div
      v-for="p in particles"
      :key="p.id"
      class="absolute rounded-full bg-blue-500 animate-float"
      :style="{
        left: `${p.x}%`,
        top: `${p.y}%`,
        width: `${p.size}px`,
        height: `${p.size}px`,
        opacity: p.opacity,
        animationDuration: `${p.duration}s`,
        animationDelay: `${p.delay}s`
      }"
    />
    <div class="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950" />
  </div>
</template>
