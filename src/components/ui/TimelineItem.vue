<script setup>
defineProps({
  role: { type: String, required: true },
  company: { type: String, required: true },
  period: { type: String, required: true },
  description: { type: String, required: true },
  achievements: { type: Array, default: () => [] },
  technologies: { type: Array, default: () => [] },
  index: { type: Number, default: 0 },
  isLast: { type: Boolean, default: false }
})
</script>

<template>
  <div class="relative pl-8 md:pl-12 pb-12 md:pb-16 reveal" :style="{ transitionDelay: `${index * 100}ms` }">
    <div class="absolute left-0 top-1 w-px h-full bg-gradient-to-b from-amber-500/50 via-zinc-700 to-transparent" :class="{ 'h-8': isLast }" />

    <div class="absolute left-[-4px] top-1 w-2.5 h-2.5 rounded-full bg-amber-500 shadow-lg shadow-amber-500/50 ring-4 ring-zinc-950" />

    <div class="group p-5 md:p-6 rounded-2xl glass-light card-hover cursor-default">
      <span class="inline-block text-xs font-mono text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full mb-3">
        {{ period }}
      </span>

      <h3 class="text-lg md:text-xl font-semibold text-white mb-1 group-hover:text-amber-300 transition-colors duration-300">
        {{ role }}
      </h3>

      <p class="text-sm md:text-base text-amber-400/80 mb-3 font-medium">
        {{ company }}
      </p>

      <p class="text-sm text-zinc-400 leading-relaxed mb-4">
        {{ description }}
      </p>

      <ul v-if="achievements.length" class="space-y-2 mb-4">
        <li v-for="(achievement, i) in achievements" :key="i" class="flex items-start gap-2 text-sm text-zinc-400">
          <span class="text-amber-400 mt-0.5 flex-shrink-0">&#11208;</span>
          {{ achievement }}
        </li>
      </ul>

      <div v-if="technologies.length" class="flex flex-wrap gap-2">
        <span
          v-for="tech in technologies"
          :key="tech"
          class="text-xs font-mono px-2.5 py-1 rounded-lg bg-zinc-800 text-zinc-400 border border-zinc-700/50"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>
