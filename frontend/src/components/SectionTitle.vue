<script setup>
defineProps({
  eyebrow: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  centered: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <header :class="['mb-12 max-w-3xl', centered && 'mx-auto text-center']">
    <p v-if="eyebrow" class="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
      {{ eyebrow }}
    </p>
    <h1 class="text-3xl font-black tracking-tight text-slate-950 sm:text-5xl dark:text-white">
      {{ title }}
    </h1>
    <p v-if="description" class="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
      {{ description }}
    </p>
  </header>
</template>
