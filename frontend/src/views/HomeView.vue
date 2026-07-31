<script setup>
import { RouterLink } from 'vue-router'
import { profile, projects, skills } from '@/data/portfolio'
import ProjectCard from '@/components/ProjectCard.vue'

const featuredProjects = projects.slice(0, 2)
</script>

<template>
  <section class="container-page grid min-h-[calc(100vh-4.5rem)] items-center gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr]">
    <div class="fade-up">
      <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700 dark:border-sky-900 dark:bg-sky-950/50 dark:text-sky-300">
        <span class="size-2 rounded-full bg-emerald-500" />
        {{ profile.availability }}
      </div>

      <h1 class="max-w-4xl text-4xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl dark:text-white">
        Bonjour, je suis
        <span class="gradient-text">{{ profile.fullName }}</span>
      </h1>

      <p class="mt-6 text-xl font-semibold text-slate-700 dark:text-slate-200">{{ profile.title }}</p>
      <p class="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">{{ profile.tagline }}</p>

      <div class="mt-9 flex flex-wrap gap-3">
        <RouterLink
          to="/projets"
          class="rounded-xl bg-slate-950 px-6 py-3.5 font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-sky-700 dark:bg-white dark:text-slate-950 dark:hover:bg-sky-300"
        >
          Voir mes projets
        </RouterLink>
        <a
          :href="profile.cvUrl"
          download
          class="rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-sky-500 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-sky-400 dark:hover:text-sky-400"
        >
          Télécharger mon CV
        </a>
        <RouterLink
          to="/contact"
          class="rounded-xl px-6 py-3.5 font-semibold text-sky-700 transition hover:bg-sky-50 dark:text-sky-300 dark:hover:bg-sky-950/50"
        >
          Me contacter →
        </RouterLink>
      </div>
    </div>

    <div class="fade-up-delay relative mx-auto w-full max-w-md">
      <div class="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-sky-400/25 via-violet-400/15 to-pink-400/20 blur-2xl" />
      <div class="surface-card overflow-hidden rounded-[2.25rem] p-4">
        <img
          :src="profile.avatarUrl"
          :alt="`Avatar de ${profile.fullName}`"
          class="aspect-square w-full rounded-[1.75rem] object-cover"
        />
        <div class="grid grid-cols-3 gap-3 p-3 pt-6 text-center">
          <div>
            <strong class="block text-xl text-slate-950 dark:text-white">{{ skills.length }}</strong>
            <span class="text-xs text-slate-500 dark:text-slate-400">Compétences</span>
          </div>
          <div>
            <strong class="block text-xl text-slate-950 dark:text-white">{{ projects.length }}</strong>
            <span class="text-xs text-slate-500 dark:text-slate-400">Projets</span>
          </div>
          <div>
            <strong class="block text-xl text-slate-950 dark:text-white">100%</strong>
            <span class="text-xs text-slate-500 dark:text-slate-400">Motivation</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="border-y border-slate-200/80 bg-white/60 dark:border-slate-800 dark:bg-slate-900/30">
    <div class="container-page section-space">
      <div class="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p class="text-sm font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">Sélection</p>
          <h2 class="mt-2 text-3xl font-black tracking-tight text-slate-950 dark:text-white">Projets récents</h2>
        </div>
        <RouterLink to="/projets" class="font-semibold text-sky-700 hover:underline dark:text-sky-400">
          Tous les projets →
        </RouterLink>
      </div>
      <div class="grid gap-7 lg:grid-cols-2">
        <ProjectCard v-for="project in featuredProjects" :key="project.id" :project="project" />
      </div>
    </div>
  </section>
</template>
