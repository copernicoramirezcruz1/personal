import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollReveal() {
  const scrollY = ref(0)
  const scrollProgress = ref(0)
  const isScrolled = ref(false)

  function onScroll() {
    scrollY.value = window.scrollY
    scrollProgress.value = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
    isScrolled.value = window.scrollY > 50
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })

  return { scrollY, scrollProgress, isScrolled }
}
