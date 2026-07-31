<script setup>
import { reactive, ref } from 'vue'
import SectionTitle from '@/components/SectionTitle.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import { profile } from '@/data/portfolio'
import { sendContactMessage } from '@/services/contactService'

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const form = reactive({ ...initialForm })
const fieldErrors = reactive({})
const statusMessage = ref('')
const statusType = ref('')
const isSubmitting = ref(false)

function clearErrors() {
  Object.keys(fieldErrors).forEach((key) => delete fieldErrors[key])
  statusMessage.value = ''
  statusType.value = ''
}

function validateClient() {
  clearErrors()

  if (form.name.trim().length < 2) {
    fieldErrors.name = 'Le nom doit contenir au moins deux caractères.'
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    fieldErrors.email = 'Saisissez une adresse email valide.'
  }

  if (form.subject.trim().length < 3) {
    fieldErrors.subject = 'Le sujet doit contenir au moins trois caractères.'
  }

  if (form.message.trim().length < 10) {
    fieldErrors.message = 'Le message doit contenir au moins dix caractères.'
  }

  return Object.keys(fieldErrors).length === 0
}

async function submitForm() {
  if (!validateClient()) return

  isSubmitting.value = true

  try {
    const result = await sendContactMessage({
      name: form.name.trim(),
      email: form.email.trim(),
      subject: form.subject.trim(),
      message: form.message.trim(),
    })

    statusType.value = 'success'
    statusMessage.value = result.message || 'Votre message a bien été envoyé.'
    Object.assign(form, initialForm)
  } catch (error) {
    if (error.response?.status === 422) {
      const errors = error.response.data.errors ?? {}

      Object.entries(errors).forEach(([field, messages]) => {
        fieldErrors[field] = Array.isArray(messages) ? messages[0] : messages
      })

      statusMessage.value = 'Veuillez corriger les champs indiqués.'
    } else if (error.response?.status === 429) {
      statusMessage.value =
        error.response.data.message || 'Trop de tentatives. Réessayez dans une minute.'
    } else {
      statusMessage.value =
        error.friendlyMessage || 'Une erreur est survenue. Veuillez réessayer.'
    }

    statusType.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section class="container-page section-space">
    <SectionTitle
      eyebrow="Contact"
      title="Mes compétences techniques"
      description="Les langages, technologies et outils que j’utilise dans mes projets informatiques."
    />

    <div class="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
      <aside class="surface-card h-fit rounded-3xl p-7">
        <h2 class="text-2xl font-bold text-slate-950 dark:text-white">Coordonnées</h2>
        <dl class="mt-6 space-y-5 text-sm">
          <div>
            <dt class="font-bold text-slate-950 dark:text-white">Email</dt>
            <dd class="mt-1 text-slate-600 dark:text-slate-300">{{ profile.email }}</dd>
          </div>
          <div>
            <dt class="font-bold text-slate-950 dark:text-white">Téléphone</dt>
            <dd class="mt-1 text-slate-600 dark:text-slate-300">{{ profile.phone }}</dd>
          </div>
          <div>
            <dt class="font-bold text-slate-950 dark:text-white">Localisation</dt>
            <dd class="mt-1 text-slate-600 dark:text-slate-300">{{ profile.location }}</dd>
          </div>
        </dl>
      </aside>

      <form class="surface-card rounded-3xl p-7 sm:p-9" novalidate @submit.prevent="submitForm">
        <div class="grid gap-6 sm:grid-cols-2">
          <div>
            <label for="name" class="mb-2 block text-sm font-bold">Nom</label>
            <input
              id="name"
              v-model="form.name"
              name="name"
              type="text"
              autocomplete="name"
              maxlength="100"
              class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 dark:border-slate-700 dark:bg-slate-900"
              :aria-invalid="Boolean(fieldErrors.name)"
              :aria-describedby="fieldErrors.name ? 'name-error' : undefined"
            />
            <p v-if="fieldErrors.name" id="name-error" class="mt-2 text-sm text-red-600 dark:text-red-400">
              {{ fieldErrors.name }}
            </p>
          </div>

          <div>
            <label for="email" class="mb-2 block text-sm font-bold">Email</label>
            <input
              id="email"
              v-model="form.email"
              name="email"
              type="email"
              autocomplete="email"
              maxlength="150"
              class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 dark:border-slate-700 dark:bg-slate-900"
              :aria-invalid="Boolean(fieldErrors.email)"
              :aria-describedby="fieldErrors.email ? 'email-error' : undefined"
            />
            <p v-if="fieldErrors.email" id="email-error" class="mt-2 text-sm text-red-600 dark:text-red-400">
              {{ fieldErrors.email }}
            </p>
          </div>
        </div>

        <div class="mt-6">
          <label for="subject" class="mb-2 block text-sm font-bold">Sujet</label>
          <input
            id="subject"
            v-model="form.subject"
            name="subject"
            type="text"
            maxlength="150"
            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 dark:border-slate-700 dark:bg-slate-900"
            :aria-invalid="Boolean(fieldErrors.subject)"
            :aria-describedby="fieldErrors.subject ? 'subject-error' : undefined"
          />
          <p v-if="fieldErrors.subject" id="subject-error" class="mt-2 text-sm text-red-600 dark:text-red-400">
            {{ fieldErrors.subject }}
          </p>
        </div>

        <div class="mt-6">
          <label for="message" class="mb-2 block text-sm font-bold">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            name="message"
            rows="7"
            maxlength="5000"
            class="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 dark:border-slate-700 dark:bg-slate-900"
            :aria-invalid="Boolean(fieldErrors.message)"
            :aria-describedby="fieldErrors.message ? 'message-error' : undefined"
          />
          <p v-if="fieldErrors.message" id="message-error" class="mt-2 text-sm text-red-600 dark:text-red-400">
            {{ fieldErrors.message }}
          </p>
        </div>

        <div
          v-if="statusMessage"
          class="mt-6 rounded-xl border px-4 py-3 text-sm"
          :class="
            statusType === 'success'
              ? 'border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-200'
              : 'border-red-200 bg-red-50 text-red-800 dark:border-red-900 dark:bg-red-950/50 dark:text-red-200'
          "
          role="status"
        >
          {{ statusMessage }}
        </div>

        <button
          type="submit"
          class="mt-7 inline-flex min-w-44 items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-slate-950 dark:hover:bg-sky-300"
          :disabled="isSubmitting"
        >
          <LoadingSpinner v-if="isSubmitting" />
          {{ isSubmitting ? 'Envoi en cours…' : 'Envoyer le message' }}
        </button>
      </form>
    </div>
  </section>
</template>
