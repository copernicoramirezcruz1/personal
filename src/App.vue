<script setup>
import { onMounted, onUnmounted } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import LoadingScreen from '@/components/layout/LoadingScreen.vue'
import CustomCursor from '@/components/layout/CustomCursor.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

function handleIntersection() {
  document.querySelectorAll('.reveal').forEach(el => {
    const rect = el.getBoundingClientRect()
    const windowHeight = window.innerHeight || document.documentElement.clientHeight

    if (rect.top <= windowHeight * 0.85) {
      el.classList.add('visible')
    }
  })
}

onMounted(() => {
  handleIntersection()
  window.addEventListener('scroll', handleIntersection, { passive: true })
  window.addEventListener('resize', handleIntersection, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleIntersection)
  window.removeEventListener('resize', handleIntersection)
})
</script>

<template>
  <LoadingScreen />
  <CustomCursor />

  <div class="min-h-screen bg-zinc-950">
    <AppHeader />

    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>

    <AppFooter />
  </div>
</template>
