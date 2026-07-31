# Personnaliser le portfolio

Toutes les informations sont volontairement génériques. Le projet ne contient
aucune identité réelle provenant d’une autre conversation ou d’un autre profil.

## 1. Modifier le contenu principal

Ouvrez :

```text
frontend/src/data/portfolio.js
```

Remplacez notamment :

- `fullName` et `initials`
- le titre professionnel et la présentation
- l’adresse email, le téléphone et la localisation
- les liens GitHub et LinkedIn
- les compétences et leurs niveaux
- les projets, leurs images, dépôts et démonstrations
- les formations et expériences

## 2. Remplacer les médias

```text
frontend/public/avatar.svg
frontend/public/projects/
frontend/public/cv-placeholder.txt
```

Placez votre CV dans `frontend/public/`, par exemple :

```text
frontend/public/cv.pdf
```

Puis modifiez dans `portfolio.js` :

```js
cvUrl: '/cv.pdf'
```

## 3. Modifier le référencement

Ouvrez `frontend/index.html` et adaptez :

- le titre de la page
- la description
- les mots-clés
- l’auteur
- les balises Open Graph

Le titre de chaque route est géré automatiquement dans :

```text
frontend/src/router/index.js
```

## 4. Ajouter une compétence

Ajoutez un objet dans le tableau `skills` :

```js
{
  name: 'Docker',
  category: 'Outils',
  level: 60,
  description: 'Conteneurisation des environnements de développement.',
}
```

## 5. Ajouter un projet

Ajoutez un objet dans le tableau `projects` :

```js
{
  id: 4,
  title: 'Nom du projet',
  type: 'Projet personnel',
  description: 'Description courte et concrète.',
  image: '/projects/mon-projet.webp',
  technologies: ['Vue.js', 'Laravel'],
  githubUrl: 'https://github.com/...',
  demoUrl: 'https://...',
}
```

Utilisez de préférence des images WebP ou AVIF optimisées.

## 6. Configurer le formulaire

Développement local :

```env
# frontend/.env
VITE_API_URL=http://127.0.0.1:8000/api
```

```env
# backend/.env
FRONTEND_URLS=http://localhost:5173
```

En production, remplacez ces valeurs par les domaines réellement déployés.
