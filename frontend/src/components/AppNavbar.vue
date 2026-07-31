<script setup>
import { ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import ThemeToggle from './ThemeToggle.vue'
import { profile } from '@/data/portfolio'

const isOpen = ref(false)
const route = useRoute()

const links = [
  { name: 'Accueil', to: '/' },
  { name: 'À propos', to: '/a-propos' },
  { name: 'Compétences', to: '/competences' },
  { name: 'Projets', to: '/projets' },
  { name: 'Formations', to: '/formations' },
  { name: 'Expériences', to: '/experiences' },
  { name: 'Contact', to: '/contact' },
]

watch(
  () => route.fullPath,
  () => {
    isOpen.value = false
  },
)
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/80">
    <nav class="container-page flex h-18 items-center justify-between" aria-label="Navigation principale">
      <RouterLink
        to="/"
        class="flex items-center gap-3 rounded-xl font-bold tracking-tight focus-visible:outline-2 focus-visible:outline-sky-500"
        aria-label="Retour à l’accueil"
      >
        <span
          class="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-sky-500 to-violet-600 text-sm text-white shadow-lg shadow-sky-500/20"
        >
          {{ profile.initials }}
        </span>
        <span class="hidden sm:inline">{{ profile.fullName }}</span>
      </RouterLink>

      <div class="hidden items-center gap-1 lg:flex">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
          active-class="!bg-sky-50 !text-sky-700 dark:!bg-sky-950/60 dark:!text-sky-300"
        >
          {{ link.name }}
        </RouterLink>
      </div>

      <div class="flex items-center gap-2">
        <ThemeToggle />
        <button
          type="button"
          class="grid size-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-100 lg:hidden dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
          :aria-expanded="isOpen"
          aria-label="Ouvrir ou fermer le menu"
          @click="isOpen = !isOpen"
        >
          <svg v-if="!isOpen" viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          <svg v-else viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" d="m6 6 12 12M18 6 6 18" />
          </svg>
        </button>
      </div>
    </nav>

    <Transition
      enter-active-class="transition duration-200"
      enter-from-class="-translate-y-2 opacity-0"
      leave-active-class="transition duration-150"
      leave-to-class="-translate-y-2 opacity-0"
    >
      <div v-if="isOpen" class="border-t border-slate-200 bg-white px-4 py-4 lg:hidden dark:border-slate-800 dark:bg-slate-950">
        <div class="container-page grid gap-1">
          <RouterLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="rounded-xl px-4 py-3 font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
            active-class="!bg-sky-50 !text-sky-700 dark:!bg-sky-950/60 dark:!text-sky-300"
          >
            {{ link.name }}
          </RouterLink>
        </div>
      </div>
    </Transition>
  </header>
</template>
