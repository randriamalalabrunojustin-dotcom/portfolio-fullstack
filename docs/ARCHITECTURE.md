# Architecture du projet

## 1. Vue d’ensemble

Le dépôt est organisé en deux applications indépendantes :

```text
Navigateur
   │
   ▼
Vue 3 + Vite ── Axios/JSON ──► API Laravel 12 ── Eloquent ──► MySQL
```

Cette séparation permet de déployer le front-end sur Vercel et le back-end sur
un hébergement PHP compatible Laravel.

## 2. Front-end

### `src/components/`

Composants réutilisables :

- `AppNavbar.vue` : navigation principale et menu mobile
- `AppFooter.vue` : liens sociaux et copyright
- `ThemeToggle.vue` : mode clair / sombre
- `SectionTitle.vue` : titre cohérent pour les pages
- `ProjectCard.vue` : présentation d’un projet
- `SkillCard.vue` : compétence et niveau
- `TimelineItem.vue` : élément de formation ou d’expérience
- `LoadingSpinner.vue` : indicateur d’envoi

### `src/views/`

Chaque route possède sa propre vue. Les vues ne contiennent pas de logique
d’accès API, sauf `ContactView.vue`, qui appelle le service de contact.

### `src/services/`

- `api.js` configure Axios
- `contactService.js` expose une fonction métier claire

### `src/data/portfolio.js`

Source unique pour les informations affichées. Cela évite de dupliquer le
contenu dans plusieurs composants.

### `src/composables/useTheme.js`

Gère le thème, `localStorage` et la classe `dark` sur `<html>`.

## 3. Back-end

### Flux d’une requête de contact

1. `POST /api/contact-messages`
2. Middleware `throttle:contact`
3. `StoreContactMessageRequest`
4. `ContactMessageController`
5. Modèle Eloquent `ContactMessage`
6. Table MySQL `contact_messages`
7. Réponse JSON avec le statut HTTP approprié

### Validation

La validation est centralisée dans une Form Request. Laravel retourne
automatiquement une réponse JSON `422` pour les requêtes Axios invalides.

### Sécurité de base

- Validation stricte
- Mass assignment contrôlé avec `$fillable`
- Limitation du nombre de requêtes
- CORS configurable par variable d’environnement
- Aucune donnée sensible stockée dans Git

## 4. Évolutions possibles

- Tableau de bord administrateur
- Authentification avec Laravel Sanctum
- Envoi d’email après enregistrement
- Gestion dynamique des projets depuis MySQL
- Upload d’images
- Internationalisation français / anglais
