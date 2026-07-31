<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="container-page grid min-h-[65vh] place-items-center py-20 text-center">
    <div>
      <p class="gradient-text text-8xl font-black">404</p>
      <h1 class="mt-4 text-3xl font-black text-slate-950 dark:text-white">Page introuvable</h1>
      <p class="mt-4 text-slate-600 dark:text-slate-300">
        La page demandée n’existe pas ou a été déplacée.
      </p>
      <RouterLink
        to="/"
        class="mt-8 inline-flex rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white dark:bg-white dark:text-slate-950"
      >
        Retour à l’accueil
      </RouterLink>
    </div>
  </section>
</template>
