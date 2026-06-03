<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { personal } from '@/data/cv'
import AnimatedBackground from '@/components/ui/AnimatedBackground.vue'

const typedText = ref('')
const fullText = personal.profession
const typedIndex = ref(0)
const isDeleting = ref(false)
let timer = null

function typeEffect() {
  if (!isDeleting.value) {
    typedText.value = fullText.substring(0, typedIndex.value + 1)
    typedIndex.value++

    if (typedIndex.value === fullText.length) {
      timer = setTimeout(() => {
        isDeleting.value = true
        typeEffect()
      }, 3000)
      return
    }
  } else {
    typedText.value = fullText.substring(0, typedIndex.value - 1)
    typedIndex.value--

    if (typedIndex.value === 0) {
      isDeleting.value = false
      timer = setTimeout(typeEffect, 500)
      return
    }
  }

  timer = setTimeout(typeEffect, isDeleting.value ? 30 : 60)
}

onMounted(() => {
  timer = setTimeout(typeEffect, 500)
})

onUnmounted(() => {
  clearTimeout(timer)
})

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <AnimatedBackground />

    <div class="absolute inset-0 grid-pattern opacity-30" />

    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-[128px] animate-pulse-glow" />
    <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-[128px] animate-pulse-glow" style="animation-delay: 1.5s;" />

    <div class="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-32 text-center">
      <div class="mb-8 md:mb-10 inline-block">
        <div class="relative">
          <div class="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-zinc-700/50 glow mx-auto">
            <img
              :src="personal.photo"
              :alt="personal.fullName"
              class="w-full h-full object-cover"
              loading="eager"
            />
          </div>
          <div class="absolute -bottom-2 -right-2 w-8 h-8 md:w-10 md:h-10 bg-emerald-500 rounded-full border-4 border-zinc-950 flex items-center justify-center">
            <svg class="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
          </div>
        </div>
      </div>

      <div class="space-y-1 mb-4">
        <p class="text-xs md:text-sm font-mono tracking-[0.3em] text-amber-400 uppercase animate-fade-in">
          Hola, soy
        </p>
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight">
          {{ personal.firstName }}
          <span class="text-gradient">{{ personal.lastName }}</span>
        </h1>
      </div>

      <div class="h-8 md:h-10 mb-6">
        <p class="text-lg md:text-xl lg:text-2xl text-zinc-400 font-light">
          <span>{{ typedText }}</span>
          <span class="inline-block w-0.5 h-5 md:h-6 bg-amber-500 ml-1 animate-pulse align-middle" />
        </p>
      </div>

      <p class="max-w-2xl mx-auto text-sm md:text-base text-zinc-500 leading-relaxed mb-10">
        {{ personal.tagline }}. {{ personal.bio }}
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="/cv.pdf" download class="btn-primary w-full sm:w-auto justify-center">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
          Descargar CV
        </a>
        <button @click="scrollTo('contact')" class="btn-secondary w-full sm:w-auto justify-center">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          Contactarme
        </button>
        <button @click="scrollTo('projects')" class="btn-ghost w-full sm:w-auto justify-center">
          Ver Proyectos
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </button>
      </div>
    </div>

    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
    </div>
  </section>
</template>
