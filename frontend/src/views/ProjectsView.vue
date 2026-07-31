<script setup>
import SectionTitle from '@/components/SectionTitle.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { projects } from '@/data/portfolio'
</script>

<template>
  <section class="container-page section-space">
    <SectionTitle
      eyebrow="Projets"
      title="Mes réalisations académiques"
      description="Découvrez les applications et les configurations réseau réalisées durant ma formation."
    />
    <div class="grid gap-8 lg:grid-cols-2">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </section>
</template>
