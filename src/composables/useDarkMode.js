import { ref, watch, onMounted } from 'vue'

export function useDarkMode() {
  const isDark = ref(true)

  function applyTheme() {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }

  function toggle() {
    isDark.value = !isDark.value
    applyTheme()
  }

  onMounted(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'light') {
      isDark.value = false
    } else if (saved === 'dark') {
      isDark.value = true
    } else {
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    applyTheme()
  })

  return { isDark, toggle }
}
