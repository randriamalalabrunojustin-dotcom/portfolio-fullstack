<script setup>
import SectionTitle from '@/components/SectionTitle.vue'
import SkillCard from '@/components/SkillCard.vue'
import { skills } from '@/data/portfolio'
</script>

<template>
  <section class="container-page section-space">
    <SectionTitle
      eyebrow="Compétences"
      title="Mes compétences techniques"
      description="Les langages, technologies et outils que j’utilise dans mes projets informatiques."
    />
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <SkillCard v-for="skill in skills" :key="skill.name" :skill="skill" />
    </div>
  </section>
</template>
