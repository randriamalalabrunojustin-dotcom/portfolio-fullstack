<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
  isLast: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <article class="relative grid gap-5 pl-12 sm:grid-cols-[10rem_1fr] sm:pl-0">
    <div
      v-if="!isLast"
      class="absolute left-[0.69rem] top-7 h-[calc(100%+1.25rem)] w-px bg-slate-300 sm:left-[11.42rem] dark:bg-slate-700"
      aria-hidden="true"
    />
    <div class="font-semibold text-sky-700 dark:text-sky-400">{{ item.period }}</div>
    <div class="surface-card relative rounded-2xl p-6">
      <span
        class="absolute -left-[2.02rem] top-6 size-4 rounded-full border-4 border-slate-50 bg-sky-500 sm:-left-[2.1rem] dark:border-slate-950"
        aria-hidden="true"
      />
      <h2 class="text-xl font-bold text-slate-950 dark:text-white">{{ item.title }}</h2>
      <p class="mt-1 font-medium text-slate-500 dark:text-slate-400">{{ item.organization }}</p>
      <p class="mt-4 leading-7 text-slate-600 dark:text-slate-300">{{ item.description }}</p>
      <div v-if="item.tags" class="mt-4 flex flex-wrap gap-2">
        <span
          v-for="tag in item.tags"
          :key="tag"
          class="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 dark:bg-sky-950/50 dark:text-sky-300"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </article>
</template>
