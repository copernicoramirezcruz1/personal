<script setup>
import { ref, computed } from 'vue'
import { projects, projectCategories } from '@/data/cv'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import ProjectCard from '@/components/ui/ProjectCard.vue'

const activeFilter = ref('all')

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return projects
  return projects.filter(p => p.category === activeFilter.value)
})
</script>

<template>
  <section id="projects" class="relative py-24 md:py-32 overflow-hidden">
    <div class="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-[128px]" />
    <div class="absolute bottom-0 right-1/3 w-96 h-96 bg-amber-500/5 rounded-full blur-[128px]" />

    <div class="section-container relative z-10">
      <SectionTitle title="Proyectos" subtitle="Portfolio" />

      <div class="flex flex-wrap gap-3 mb-10 reveal">
        <button
          v-for="cat in projectCategories"
          :key="cat.id"
          @click="activeFilter = cat.id"
          class="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300"
          :class="activeFilter === cat.id
            ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
            : 'text-zinc-500 hover:text-zinc-300 border border-zinc-800 hover:border-zinc-700'"
        >
          {{ cat.label }}
        </button>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <ProjectCard
          v-for="(project, i) in filteredProjects"
          :key="project.id"
          :title="project.title"
          :description="project.description"
          :technologies="project.technologies"
          :features="project.features"
          :link="project.link"
          :github="project.github"
          :index="i"
          :featured="project.featured"
        />
      </div>

      <div v-if="filteredProjects.length === 0" class="text-center py-20 reveal">
        <p class="text-zinc-500">No hay proyectos en esta categoría aún.</p>
      </div>
    </div>
  </section>
</template>
