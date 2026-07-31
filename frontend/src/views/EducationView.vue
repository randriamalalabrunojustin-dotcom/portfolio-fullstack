<script setup>
import SectionTitle from '@/components/SectionTitle.vue'
import TimelineItem from '@/components/TimelineItem.vue'
import { education } from '@/data/portfolio'
</script>

<template>
  <section class="container-page section-space">
    <SectionTitle
      eyebrow="Formations"
      title="Mon parcours académique"
      description="Les différentes étapes de ma formation en informatique générale."
    />
    <div class="space-y-8">
      <TimelineItem
        v-for="(item, index) in education"
        :key="`${item.period}-${item.title}`"
        :item="item"
        :is-last="index === education.length - 1"
      />
    </div>
  </section>
</template>
