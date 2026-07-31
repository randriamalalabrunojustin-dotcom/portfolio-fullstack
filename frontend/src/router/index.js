import { createRouter, createWebHistory } from 'vue-router'
import { profile } from '@/data/portfolio'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: { title: 'Accueil' },
  },
  {
    path: '/a-propos',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
    meta: { title: 'À propos' },
  },
  {
    path: '/competences',
    name: 'skills',
    component: () => import('@/views/SkillsView.vue'),
    meta: { title: 'Compétences' },
  },
  {
    path: '/projets',
    name: 'projects',
    component: () => import('@/views/ProjectsView.vue'),
    meta: { title: 'Projets' },
  },
  {
    path: '/formations',
    name: 'education',
    component: () => import('@/views/EducationView.vue'),
    meta: { title: 'Formations' },
  },
  {
    path: '/experiences',
    name: 'experience',
    component: () => import('@/views/ExperienceView.vue'),
    meta: { title: 'Expériences' },
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/ContactView.vue'),
    meta: { title: 'Contact' },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue'),
    meta: { title: 'Page introuvable' },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

router.afterEach((to) => {
  document.title = `${to.meta.title ?? 'Portfolio'} — ${profile.fullName}`
})

export default router
