<script setup>
import { ref } from 'vue'
import { personal, stats, education } from '@/data/cv'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import StatCounter from '@/components/ui/StatCounter.vue'

const { isVisible, target } = useIntersectionObserver()
</script>

<template>
  <section id="about" class="relative py-24 md:py-32 overflow-hidden">
    <div class="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[128px]" />

    <div class="section-container relative z-10">
      <SectionTitle title="Sobre Mí" subtitle="Conóceme" />

      <div ref="target" class="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-20">
        <div class="relative reveal">
          <div class="relative rounded-3xl overflow-hidden border border-zinc-800/50 glow aspect-[3/4] max-w-md mx-auto">
            <img
              :src="personal.photoMin"
              :alt="personal.fullName"
              class="w-full h-full object-cover"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
          </div>
          <div class="absolute -bottom-4 -right-4 glass-light rounded-2xl p-4 hidden md:block">
            <p class="text-3xl font-bold text-gradient">36+</p>
            <p class="text-xs text-zinc-400">años de exp.</p>
          </div>
        </div>

        <div class="space-y-6">
          <div class="space-y-4 reveal reveal-delay-1">
            <p class="text-sm md:text-base text-zinc-400 leading-relaxed">
              {{ personal.bio }}
            </p>
            <p class="text-sm md:text-base text-zinc-400 leading-relaxed">
              A lo largo de más de tres décadas, he trabajado en consultoría IT, desarrollo de software, administración de sistemas, docencia universitaria y gestión de proyectos tecnológicos. Mi enfoque combina solidez técnica con una visión estratégica orientada a resultados.
            </p>
            <p class="text-sm md:text-base text-zinc-400 leading-relaxed">
              Actualmente me desempeño como Programador III en SENASAG Nacional, desarrollando y manteniendo sistemas críticos para la sanidad animal e inocuidad alimentaria en Bolivia.
            </p>
          </div>

          <div class="flex flex-col sm:flex-row gap-3 reveal reveal-delay-2">
            <div class="flex items-center gap-2 text-sm text-zinc-400">
              <svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              {{ personal.email }}
            </div>
            <div class="flex items-center gap-2 text-sm text-zinc-400">
              <svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              {{ personal.location }}
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-20">
        <div v-for="stat in stats" :key="stat.label" class="glass-light rounded-2xl p-6 md:p-8 text-center">
          <StatCounter :end="stat.value" :suffix="stat.suffix" />
          <p class="text-xs md:text-sm text-zinc-500 mt-2 font-medium">{{ stat.label }}</p>
        </div>
      </div>

      <div class="reveal">
        <h3 class="text-xl md:text-2xl font-bold text-white mb-8 text-center">Formación Académica</h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="(edu, i) in education"
            :key="i"
            class="glass-light rounded-2xl p-6 card-hover"
            :class="{ 'lg:col-span-2': i === 0, 'opacity-60 hover:opacity-100': i > 3 }"
            :style="{ transitionDelay: `${i * 100}ms` }"
          >
            <span class="text-xs font-mono text-amber-400 mb-2 block">{{ edu.period }}</span>
            <h4 class="text-base font-semibold text-white mb-1">{{ edu.degree }}</h4>
            <p class="text-sm text-zinc-500 mb-2">{{ edu.institution }}</p>
            <p class="text-xs text-zinc-600 leading-relaxed">{{ edu.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
