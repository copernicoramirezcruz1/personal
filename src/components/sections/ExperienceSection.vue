<script setup>
import { ref, computed } from 'vue'
import { experience } from '@/data/cv'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import TimelineItem from '@/components/ui/TimelineItem.vue'

const showAll = ref(false)

const displayedExperience = computed(() => {
  return showAll.value ? experience : experience.slice(0, 5)
})

function toggleShowAll() {
  showAll.value = !showAll.value
  setTimeout(() => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, 100)
}
</script>

<template>
  <section id="experience" class="relative py-24 md:py-32 overflow-hidden">
    <div class="absolute top-1/3 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[128px]" />

    <div class="section-container relative z-10">
      <SectionTitle title="Experiencia Profesional" subtitle="Trayectoria" />

      <div class="max-w-3xl mx-auto">
        <TimelineItem
          v-for="(exp, i) in displayedExperience"
          :key="exp.id"
          :role="exp.role"
          :company="exp.company"
          :period="exp.period"
          :description="exp.description"
          :achievements="exp.achievements"
          :technologies="exp.technologies"
          :index="i"
          :isLast="i === displayedExperience.length - 1"
        />

        <div v-if="experience.length > 5" class="text-center reveal">
          <button @click="toggleShowAll" class="btn-secondary">
            {{ showAll ? 'Mostrar menos' : `Ver toda la experiencia (${experience.length - 5} más)` }}
            <svg class="w-4 h-4 transition-transform duration-300" :class="{ 'rotate-180': showAll }" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
