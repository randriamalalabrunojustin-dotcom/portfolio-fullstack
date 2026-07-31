<script setup>
import SectionTitle from '@/components/SectionTitle.vue'
import TimelineItem from '@/components/TimelineItem.vue'
import { experiences } from '@/data/portfolio'
</script>

<template>
  <section class="container-page section-space">
    <SectionTitle
      eyebrow="Expériences"
      title="Mes expériences académiques"
      description="Les projets réalisés durant ma formation m’ont permis de développer mes compétences techniques et pratiques."
    />
    <div class="space-y-8">
      <TimelineItem
        v-for="(item, index) in experiences"
        :key="`${item.period}-${item.title}`"
        :item="item"
        :is-last="index === experiences.length - 1"
      />
    </div>
  </section>
</template>
