<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="surface-card group overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-1.5">
    <div class="overflow-hidden bg-slate-100 dark:bg-slate-800">
      <img
        :src="project.image"
        :alt="`Aperçu du projet ${project.title}`"
        class="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        loading="lazy"
      />
    </div>
    <div class="p-6">
      <p class="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
        {{ project.type }}
      </p>
      <h2 class="mt-2 text-2xl font-bold text-slate-950 dark:text-white">{{ project.title }}</h2>
      <p class="mt-3 leading-7 text-slate-600 dark:text-slate-300">{{ project.description }}</p>

      <ul class="mt-5 flex flex-wrap gap-2" aria-label="Technologies utilisées">
        <li
          v-for="technology in project.technologies"
          :key="technology"
          class="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
        >
          {{ technology }}
        </li>
      </ul>

      <div class="mt-6 flex gap-3">
        <a
          :href="project.githubUrl"
          target="_blank"
          rel="noreferrer"
          class="rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-700 dark:bg-white dark:text-slate-950 dark:hover:bg-sky-300"
        >
          GitHub
        </a>
        <a
          :href="project.demoUrl"
          target="_blank"
          rel="noreferrer"
          class="rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-sky-500 hover:text-sky-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-sky-400 dark:hover:text-sky-400"
        >
          Démonstration
        </a>
      </div>
    </div>
  </article>
</template>
