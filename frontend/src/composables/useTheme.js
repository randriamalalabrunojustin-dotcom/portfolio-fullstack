import { ref } from 'vue'

const storedTheme = localStorage.getItem('portfolio-theme')
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
const isDark = ref(storedTheme ? storedTheme === 'dark' : prefersDark)

function applyTheme() {
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('portfolio-theme', isDark.value ? 'dark' : 'light')
}

applyTheme()

export function useTheme() {
  const toggleTheme = () => {
    isDark.value = !isDark.value
    applyTheme()
  }

  return {
    isDark,
    toggleTheme,
  }
}
