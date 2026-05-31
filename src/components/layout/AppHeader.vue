<script setup>
import { ref, computed } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { useDarkMode } from '@/composables/useDarkMode'
import { navLinks } from '@/data/cv'

const { isScrolled, scrollProgress } = useScrollReveal()
const { isDark, toggle: toggleDarkMode } = useDarkMode()
const mobileOpen = ref(false)

function scrollTo(id) {
  mobileOpen.value = false
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const headerClass = computed(() => ({
  'translate-y-0': true,
  'glass': isScrolled.value,
  'bg-transparent': !isScrolled.value
}))

function closeMenu() {
  mobileOpen.value = false
}
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="headerClass"
  >
    <div class="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent w-full transition-opacity duration-500" :class="{ 'opacity-100': isScrolled, 'opacity-0': !isScrolled }" />

    <div class="max-w-6xl mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 md:h-20">
        <button @click="scrollTo('hero')" class="flex items-center gap-2 group">
          <span class="text-lg md:text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
            Copérnico<span class="text-blue-500">.</span>
          </span>
        </button>

        <nav class="hidden md:flex items-center gap-1">
          <button
            v-for="link in navLinks"
            :key="link.id"
            @click="scrollTo(link.id)"
            class="btn-ghost text-sm"
          >
            {{ link.label }}
          </button>

          <div class="w-px h-6 bg-zinc-700 mx-2" />

          <button
            @click="toggleDarkMode"
            class="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all duration-200"
            :aria-label="isDark ? 'Activar modo claro' : 'Activar modo oscuro'"
          >
            <svg v-if="isDark" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
            <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
          </button>

          <a href="/cv.pdf" download class="ml-2 btn-primary text-sm !py-2 !px-4">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            Descargar CV
          </a>
        </nav>

        <button
          @click="mobileOpen = !mobileOpen"
          class="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all duration-200"
          aria-label="Menú"
        >
          <svg v-if="!mobileOpen" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
    </div>

    <div
      class="md:hidden overflow-hidden transition-all duration-300"
      :class="mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'"
    >
      <nav class="glass mx-4 mb-4 rounded-2xl p-4 flex flex-col gap-1">
        <button
          v-for="link in navLinks"
          :key="link.id"
          @click="scrollTo(link.id)"
          class="px-4 py-2.5 rounded-lg text-left text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all duration-200"
        >
          {{ link.label }}
        </button>
        <a
          href="/cv.pdf"
          download
          class="mt-2 btn-primary text-sm justify-center"
          @click="closeMenu"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
          Descargar CV
        </a>
      </nav>
    </div>
  </header>
</template>
