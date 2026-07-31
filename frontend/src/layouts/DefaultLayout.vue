<script setup>
import AppNavbar from '@/components/AppNavbar.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <div
    class="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100"
  >
    <div
      class="pointer-events-none fixed inset-x-0 top-0 -z-0 h-[34rem] bg-[radial-gradient(circle_at_15%_10%,rgba(14,165,233,0.16),transparent_35%),radial-gradient(circle_at_85%_5%,rgba(124,58,237,0.14),transparent_30%)]"
      aria-hidden="true"
    />
    <AppNavbar />
    <main class="relative z-10 min-h-[70vh]">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
