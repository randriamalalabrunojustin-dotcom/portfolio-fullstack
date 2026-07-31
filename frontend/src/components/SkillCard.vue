<script setup>
defineProps({
  skill: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="surface-card rounded-2xl p-6 transition duration-300 hover:-translate-y-1">
    <div class="mb-4 flex items-start justify-between gap-4">
      <div>
        <p class="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
          {{ skill.category }}
        </p>
        <h2 class="mt-1 text-xl font-bold text-slate-950 dark:text-white">{{ skill.name }}</h2>
      </div>
      <span class="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
        {{ skill.level }}%
      </span>
    </div>
    <p class="min-h-12 text-sm leading-6 text-slate-600 dark:text-slate-300">
      {{ skill.description }}
    </p>
    <div
      class="mt-5 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700"
      role="progressbar"
      :aria-label="`Niveau en ${skill.name}`"
      aria-valuemin="0"
      aria-valuemax="100"
      :aria-valuenow="skill.level"
    >
      <div
        class="h-full rounded-full bg-gradient-to-r from-sky-500 to-violet-600 transition-all duration-700"
        :style="{ width: `${skill.level}%` }"
      />
    </div>
  </article>
</template>
