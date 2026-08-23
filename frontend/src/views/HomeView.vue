<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'
import { profile, projects, skills } from '@/data/portfolio'
import ProjectCard from '@/components/ProjectCard.vue'

const featuredProjects = projects.slice(0, 2)

/* =========================================================
   TEXTE DYNAMIQUE / EFFET MACHINE À ÉCRIRE
========================================================= */

const roles = [
  'Étudiant en Informatique',
  'Développeur Web',
  'Passionné par les nouvelles technologies',
]

const typedRole = ref('')

let roleIndex = 0
let charIndex = 0
let deleting = false
let typingTimer = null

const typeRole = () => {
  const currentRole = roles[roleIndex]

  if (!deleting) {
    charIndex++
    typedRole.value = currentRole.substring(0, charIndex)

    if (charIndex === currentRole.length) {
      deleting = true

      typingTimer = setTimeout(typeRole, 1800)
      return
    }
  } else {
    charIndex--
    typedRole.value = currentRole.substring(0, charIndex)

    if (charIndex === 0) {
      deleting = false
      roleIndex = (roleIndex + 1) % roles.length
    }
  }

  typingTimer = setTimeout(
    typeRole,
    deleting ? 45 : 80
  )
}

onMounted(() => {
  typeRole()
})

onBeforeUnmount(() => {
  clearTimeout(typingTimer)
})
</script>

<template>

  <!-- =====================================================
       HERO
  ====================================================== -->

  <section
    class="container-page relative grid min-h-[calc(100vh-4.5rem)]
    items-center gap-12 overflow-hidden py-16
    lg:grid-cols-[1.15fr_0.85fr]"
  >

    <!-- Formes animées en arrière-plan -->

    <div
      class="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div class="blob blob-one"></div>

      <div class="blob blob-two"></div>

      <div class="blob blob-three"></div>
    </div>


    <!-- =========================
         TEXTE
    ========================== -->

    <div class="fade-up">

      <!-- Disponibilité -->

      <div
        class="mb-6 inline-flex items-center gap-2
        rounded-full border border-sky-200 bg-sky-50
        px-4 py-2 text-sm font-semibold text-sky-700
        dark:border-sky-900 dark:bg-sky-950/50
        dark:text-sky-300"
      >

        <span class="relative flex size-3">

          <span
            class="absolute inline-flex size-full
            animate-ping rounded-full
            bg-emerald-400 opacity-75"
          ></span>

          <span
            class="relative inline-flex size-3
            rounded-full bg-emerald-500"
          ></span>

        </span>

        {{ profile.availability }}

      </div>


      <!-- Nom -->

      <h1
        class="max-w-4xl text-4xl font-black
        leading-[1.08] tracking-tight
        text-slate-950 sm:text-6xl lg:text-7xl
        dark:text-white"
      >

        Bonjour, je suis

        <span class="gradient-text">
          {{ profile.fullName }}
        </span>

      </h1>


      <!-- Titre dynamique -->

      <div class="mt-6 min-h-[2.5rem]">

        <p
          class="text-xl font-semibold
          text-slate-700 dark:text-slate-200
          sm:text-2xl"
        >

          {{ typedRole }}

          <span class="typing-cursor">|</span>

        </p>

      </div>


      <!-- Présentation -->

      <p
        class="mt-5 max-w-2xl text-lg
        leading-8 text-slate-600
        dark:text-slate-300"
      >

        {{ profile.tagline }}

      </p>


      <!-- Boutons -->

      <div class="mt-9 flex flex-wrap gap-3">

        <RouterLink
          to="/projets"
          class="hero-button rounded-xl
          bg-slate-950 px-6 py-3.5
          font-semibold text-white
          shadow-lg shadow-slate-900/15
          transition
          hover:-translate-y-1
          hover:bg-sky-700
          dark:bg-white
          dark:text-slate-950
          dark:hover:bg-sky-300"
        >

          Voir mes projets

        </RouterLink>


        <a
          :href="profile.cvUrl"
          download
          class="rounded-xl border
          border-slate-300 bg-white
          px-6 py-3.5 font-semibold
          text-slate-700 transition
          hover:-translate-y-1
          hover:border-sky-500
          hover:text-sky-600
          dark:border-slate-700
          dark:bg-slate-900
          dark:text-slate-200
          dark:hover:border-sky-400
          dark:hover:text-sky-400"
        >

          Télécharger mon CV

        </a>


        <RouterLink
          to="/contact"
          class="rounded-xl px-6 py-3.5
          font-semibold text-sky-700
          transition
          hover:-translate-y-1
          hover:bg-sky-50
          dark:text-sky-300
          dark:hover:bg-sky-950/50"
        >

          Me contacter →

        </RouterLink>

      </div>

    </div>


    <!-- =================================================
         PHOTO
    ================================================== -->

    <div
      class="fade-up-delay relative mx-auto
      w-full max-w-md"
    >

      <!-- Glow -->

      <div
        class="avatar-glow absolute -inset-6
        -z-10 rounded-[2.5rem]
        bg-gradient-to-br
        from-sky-400/25
        via-violet-400/15
        to-pink-400/20
        blur-2xl"
      />


      <!-- Carte -->

      <div
        class="floating-avatar surface-card
        overflow-hidden rounded-[2.25rem] p-4"
      >

        <div class="overflow-hidden rounded-[1.75rem]">

          <img
            :src="profile.avatarUrl"
            :alt="`Avatar de ${profile.fullName}`"
            class="profile-image
            aspect-square w-full
            rounded-[1.75rem]
            object-cover"
          />

        </div>


        <!-- Statistiques -->

        <div
          class="grid grid-cols-3
          gap-3 p-3 pt-6 text-center"
        >

          <div class="stat-item">

            <strong
              class="block text-xl
              text-slate-950 dark:text-white"
            >
              {{ skills.length }}
            </strong>

            <span
              class="text-xs text-slate-500
              dark:text-slate-400"
            >
              Compétences
            </span>

          </div>


          <div class="stat-item">

            <strong
              class="block text-xl
              text-slate-950 dark:text-white"
            >
              {{ projects.length }}
            </strong>

            <span
              class="text-xs text-slate-500
              dark:text-slate-400"
            >
              Projets
            </span>

          </div>


          <div class="stat-item">

            <strong
              class="block text-xl
              text-slate-950 dark:text-white"
            >
              100%
            </strong>

            <span
              class="text-xs text-slate-500
              dark:text-slate-400"
            >
              Motivation
            </span>

          </div>

        </div>

      </div>

    </div>

  </section>


  <!-- =====================================================
       PROJETS RÉCENTS
  ====================================================== -->

  <section
    class="border-y border-slate-200/80
    bg-white/60
    dark:border-slate-800
    dark:bg-slate-900/30"
  >

    <div class="container-page section-space">

      <div
        class="mb-10 flex flex-col gap-4
        sm:flex-row
        sm:items-end
        sm:justify-between"
      >

        <div>

          <p
            class="text-sm font-bold uppercase
            tracking-[0.2em]
            text-sky-600
            dark:text-sky-400"
          >
            Sélection
          </p>


          <h2
            class="mt-2 text-3xl font-black
            tracking-tight text-slate-950
            dark:text-white"
          >
            Projets récents
          </h2>

        </div>


        <RouterLink
          to="/projets"
          class="font-semibold text-sky-700
          transition hover:translate-x-1
          hover:underline dark:text-sky-400"
        >

          Tous les projets →

        </RouterLink>

      </div>


      <div class="grid gap-7 lg:grid-cols-2">

        <ProjectCard
          v-for="(project, index) in featuredProjects"
          :key="project.id"
          :project="project"
          class="project-animation"
          :style="{
            animationDelay: `${index * 180}ms`
          }"
        />

      </div>

    </div>

  </section>

</template>


<style scoped>

/* =========================================================
   BACKGROUND BLOBS
========================================================= */

.blob {
  position: absolute;
  border-radius: 9999px;
  filter: blur(70px);
  opacity: 0.22;

  animation:
    blobMovement 10s
    ease-in-out infinite;
}


.blob-one {
  width: 320px;
  height: 320px;

  background: #38bdf8;

  top: 3%;
  left: -80px;
}


.blob-two {
  width: 280px;
  height: 280px;

  background: #8b5cf6;

  top: 25%;
  right: -80px;

  animation-delay: 2s;
}


.blob-three {
  width: 230px;
  height: 230px;

  background: #ec4899;

  bottom: 3%;
  left: 42%;

  animation-delay: 4s;
}


@keyframes blobMovement {

  0%,
  100% {
    transform:
      translate(0, 0)
      scale(1);
  }

  33% {
    transform:
      translate(30px, -25px)
      scale(1.08);
  }

  66% {
    transform:
      translate(-20px, 20px)
      scale(0.95);
  }

}


/* =========================================================
   AVATAR FLOTTANT
========================================================= */

.floating-avatar {
  animation:
    floatingAvatar 5s
    ease-in-out infinite;

  transition:
    transform 0.4s ease,
    box-shadow 0.4s ease;
}


.floating-avatar:hover {
  transform:
    translateY(-10px)
    scale(1.02);
}


@keyframes floatingAvatar {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-12px);
  }

}


/* =========================================================
   IMAGE
========================================================= */

.profile-image {
  transition:
    transform 0.6s ease;
}


.floating-avatar:hover
.profile-image {
  transform: scale(1.04);
}


/* =========================================================
   GLOW AUTOUR DE LA PHOTO
========================================================= */

.avatar-glow {
  animation:
    glowAnimation 6s
    ease-in-out infinite;
}


@keyframes glowAnimation {

  0%,
  100% {
    transform: scale(1);
    opacity: 0.7;
  }

  50% {
    transform: scale(1.1);
    opacity: 1;
  }

}


/* =========================================================
   MACHINE À ÉCRIRE
========================================================= */

.typing-cursor {
  display: inline-block;

  color: #0ea5e9;

  animation:
    cursorBlink 0.8s
    infinite;
}


@keyframes cursorBlink {

  0%,
  50% {
    opacity: 1;
  }

  51%,
  100% {
    opacity: 0;
  }

}


/* =========================================================
   STATISTIQUES
========================================================= */

.stat-item {
  padding: 8px;
  border-radius: 12px;

  transition:
    transform 0.3s ease,
    background-color 0.3s ease;
}


.stat-item:hover {
  transform: translateY(-4px);

  background:
    rgba(14, 165, 233, 0.08);
}


/* =========================================================
   PROJETS
========================================================= */

.project-animation {
  opacity: 0;

  animation:
    projectReveal
    0.8s ease forwards;
}


@keyframes projectReveal {

  from {
    opacity: 0;
    transform:
      translateY(30px);
  }

  to {
    opacity: 1;
    transform:
      translateY(0);
  }

}


/* =========================================================
   ACCESSIBILITÉ
   Désactive les animations si l'utilisateur le demande
========================================================= */

@media
(prefers-reduced-motion: reduce) {

  .blob,
  .floating-avatar,
  .avatar-glow,
  .typing-cursor,
  .project-animation {
    animation: none;
  }

  .project-animation {
    opacity: 1;
  }

}

</style>