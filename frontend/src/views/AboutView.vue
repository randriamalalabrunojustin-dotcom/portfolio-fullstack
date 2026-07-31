<script setup>
import SectionTitle from '@/components/SectionTitle.vue'
import { about, profile } from '@/data/portfolio'
</script>

<template>
  <section class="container-page section-space">
    <SectionTitle
      eyebrow="À propos"
      title="Découvrez mon parcours et mes objectifs"
      description="Étudiant en informatique, je développe mes compétences à travers des formations et des projets concrets."
    />

    <div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <article class="surface-card rounded-3xl p-7 sm:p-9">
        <h2 class="text-2xl font-bold text-slate-950 dark:text-white">Présentation</h2>
        <p
          v-for="paragraph in about.paragraphs"
          :key="paragraph"
          class="mt-5 leading-8 text-slate-600 dark:text-slate-300"
        >
          {{ paragraph }}
        </p>
        <div class="mt-7 rounded-2xl bg-sky-50 p-5 text-sky-900 dark:bg-sky-950/50 dark:text-sky-100">
          <strong class="block">Localisation</strong>
          <span>{{ profile.location }}</span>
        </div>
      </article>

      <div class="grid gap-8">
        <article class="surface-card rounded-3xl p-7">
          <h2 class="text-2xl font-bold text-slate-950 dark:text-white">Objectifs professionnels</h2>
          <ul class="mt-5 space-y-4">
            <li v-for="goal in about.goals" :key="goal" class="flex gap-3 text-slate-600 dark:text-slate-300">
              <span class="mt-2 size-2 shrink-0 rounded-full bg-sky-500" />
              <span class="leading-7">{{ goal }}</span>
            </li>
          </ul>
        </article>

        <article class="surface-card rounded-3xl p-7">
          <h2 class="text-2xl font-bold text-slate-950 dark:text-white">Centres d’intérêt</h2>
          <div class="mt-5 flex flex-wrap gap-3">
            <span
              v-for="interest in about.interests"
              :key="interest"
              class="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
            >
              {{ interest }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
