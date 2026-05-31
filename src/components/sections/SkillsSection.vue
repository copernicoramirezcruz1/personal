<script setup>
import { ref } from 'vue'
import { skillCategories } from '@/data/cv'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import SkillBar from '@/components/ui/SkillBar.vue'

const activeCategory = ref('frontend')
const currentCategory = ref(skillCategories[0])

function selectCategory(cat) {
  activeCategory.value = cat.id
  currentCategory.value = cat
}

const icons = {
  window: '\u{1F4BB}',
  server: '\u{1F5A5}',
  database: '\u{1F4BE}',
  terminal: '\u{2328}',
  wrench: '\u{1F527}',
  brain: '\u{1F9E0}'
}
</script>

<template>
  <section id="skills" class="relative py-24 md:py-32 overflow-hidden">
    <div class="absolute bottom-0 left-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-[128px]" />

    <div class="section-container relative z-10">
      <SectionTitle title="Skills & Tecnologías" subtitle="Lo que domino" />

      <div class="flex flex-wrap gap-3 mb-12 reveal">
        <button
          v-for="cat in skillCategories"
          :key="cat.id"
          @click="selectCategory(cat)"
          class="px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300"
          :class="activeCategory === cat.id
            ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
            : 'text-zinc-500 hover:text-zinc-300 border border-zinc-800 hover:border-zinc-700'"
        >
          <span class="mr-2">{{ icons[cat.icon] || '&#9679;' }}</span>
          {{ cat.title }}
        </button>
      </div>

      <div class="grid md:grid-cols-2 gap-8 md:gap-12">
        <div class="space-y-2">
          <span class="text-xs font-mono tracking-widest text-blue-400 uppercase reveal">
            {{ currentCategory.title }}
          </span>
          <h3 class="text-2xl md:text-3xl font-bold text-white mb-2 reveal reveal-delay-1">
            {{ currentCategory.description }}
          </h3>
          <p class="text-sm text-zinc-500 leading-relaxed reveal reveal-delay-2">
            Habilidades técnicas desarrolladas a través de formación continua y experiencia profesional en proyectos reales.
          </p>
        </div>

        <div class="space-y-5">
          <SkillBar
            v-for="(skill, i) in currentCategory.skills"
            :key="skill.name"
            :name="skill.name"
            :level="skill.level"
            :index="i"
          />
        </div>
      </div>
    </div>
  </section>
</template>
