# Portfolio Full Stack — Vue 3 + Laravel 12

Projet personnel générique de portfolio moderne, responsive et prêt à personnaliser.

## Stack

- **Front-end :** Vue.js 3, Composition API, Vue Router, Axios, Vite, Tailwind CSS
- **Back-end :** Laravel 12, PHP 8.3+, API REST
- **Base de données :** MySQL
- **Outils :** Git, GitHub, Composer, Node.js, npm, Postman, VS Code

## Fonctionnalités

- Sept pages : Accueil, À propos, Compétences, Projets, Formations, Expériences et Contact
- Architecture Vue par composants, vues, services, données et layout
- Navigation SPA avec Vue Router
- Mode clair / sombre persistant
- Design responsive et animations discrètes
- Formulaire de contact avec validation client
- Envoi Axios vers une API Laravel
- Validation serveur, stockage MySQL et réponses JSON
- Limitation à cinq messages par minute et par adresse IP
- Tests PHPUnit pour l’API
- Collection Postman incluse
- Configuration Vercel incluse pour le front-end
- Documentation d’installation et de déploiement

## Démarrage rapide

### 1. Front-end

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

Le front-end est disponible sur `http://localhost:5173`.

### 2. Back-end

```bash
cd backend
cp .env.example .env
composer install
php artisan key:generate
```

Créez une base MySQL appelée `portfolio`, configurez `.env`, puis lancez :

```bash
php artisan migrate
php artisan serve
```

L’API est disponible sur `http://127.0.0.1:8000/api`.

### 3. Relier les deux applications

Dans `frontend/.env` :

```env
VITE_API_URL=http://127.0.0.1:8000/api
```

Dans `backend/.env` :

```env
FRONTEND_URLS=http://localhost:5173
```

## Personnalisation

Modifiez principalement :

```text
frontend/src/data/portfolio.js
```

Remplacez également :

- `frontend/public/avatar.svg`
- les images dans `frontend/public/projects/`
- `frontend/public/cv-placeholder.txt`
- les liens GitHub, LinkedIn et email
- `frontend/index.html` pour le titre et la description SEO

## Documentation

- [Architecture](docs/ARCHITECTURE.md)
- [Installation détaillée](docs/INSTALLATION.md)
- [Tests Postman](docs/POSTMAN.md)
- [Déploiement](docs/DEPLOYMENT.md)
- [Commandes Git](docs/GIT.md)
- [Personnalisation](docs/PERSONNALISATION.md)
- [Vérifications](docs/VERIFICATION.md)

## Arborescence abrégée

```text
portfolio-fullstack-vue-laravel/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── composables/
│   │   ├── data/
│   │   ├── layouts/
│   │   ├── router/
│   │   ├── services/
│   │   └── views/
│   └── ...
├── backend/
│   ├── app/
│   ├── bootstrap/
│   ├── config/
│   ├── database/
│   ├── public/
│   ├── resources/
│   ├── routes/
│   ├── storage/
│   ├── tests/
│   └── ...
├── docs/
└── postman/
```

## Important

Ce projet contient volontairement des informations génériques et des marqueurs
`[À PERSONNALISER]`. Il n’utilise aucune donnée provenant d’un autre utilisateur
ou d’une autre conversation.


## Références officielles

- Vue.js : https://vuejs.org/guide/quick-start
- Laravel 12 : https://laravel.com/docs/12.x
- Tailwind CSS avec Vite : https://tailwindcss.com/docs/installation/using-vite
- Vite sur Vercel : https://vercel.com/docs/frameworks/frontend/vite
- GitHub : https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github
