import { createRouter, createWebHistory } from 'vue-router'
import { profile } from '@/data/portfolio'

import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import SkillsView from '@/views/SkillsView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import EducationView from '@/views/EducationView.vue'
import ExperienceView from '@/views/ExperienceView.vue'
import ContactView from '@/views/ContactView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Accueil' },
  },
  {
    path: '/a-propos',
    name: 'about',
    component: AboutView,
    meta: { title: 'À propos' },
  },
  {
    path: '/competences',
    name: 'skills',
    component: SkillsView,
    meta: { title: 'Compétences' },
  },
  {
    path: '/projets',
    name: 'projects',
    component: ProjectsView,
    meta: { title: 'Projets' },
  },
  {
    path: '/formations',
    name: 'education',
    component: EducationView,
    meta: { title: 'Formations' },
  },
  {
    path: '/experiences',
    name: 'experience',
    component: ExperienceView,
    meta: { title: 'Expériences' },
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: { title: 'Contact' },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView,
    meta: { title: 'Page introuvable' },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,

  scrollBehavior() {
    return {
      top: 0,
      behavior: 'smooth',
    }
  },
})

router.afterEach((to) => {
  document.title = `${to.meta.title ?? 'Portfolio'} — ${profile.fullName}`
})

export default router