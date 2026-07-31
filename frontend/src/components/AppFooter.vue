<script setup>
import { profile } from '@/data/portfolio'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="relative z-10 border-t border-slate-200/80 bg-white/70 dark:border-slate-800 dark:bg-slate-950/70">
    <div class="container-page flex flex-col gap-5 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between dark:text-slate-400">
      <p>© {{ year }} {{ profile.fullName }}. Tous droits réservés.</p>
      <div class="flex flex-wrap items-center gap-4">
        <a :href="profile.githubUrl" target="_blank" rel="noreferrer" class="hover:text-sky-600 dark:hover:text-sky-400">GitHub</a>
        <a :href="profile.linkedinUrl" target="_blank" rel="noreferrer" class="hover:text-sky-600 dark:hover:text-sky-400">LinkedIn</a>
        <a :href="`mailto:${profile.email}`" class="hover:text-sky-600 dark:hover:text-sky-400">
          Email
        </a>
      </div>
    </div>
  </footer>
</template>
