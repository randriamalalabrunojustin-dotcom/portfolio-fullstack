# Vérifications effectuées

Les contrôles suivants ont été exécutés sur le livrable :

- validation syntaxique de tous les fichiers PHP avec `php -l`
- validation de tous les fichiers JSON
- validation syntaxique des fichiers JavaScript
- validation syntaxique des blocs `<script setup>` des composants Vue
- recherche de données personnelles provenant d’autres conversations

Aucune erreur n’a été détectée lors de ces contrôles.

## Contrôle à effectuer sur votre ordinateur

L’environnement de génération ne permettait pas de télécharger les dépendances
npm depuis son registre interne. Le build Vite doit donc être confirmé localement :

```bash
cd frontend
npm install
npm run build
```

Puis, pour le back-end :

```bash
cd ../backend
composer install
php artisan key:generate
php artisan test
```

Ces commandes installent les dépendances réelles et exécutent les tests dans
votre environnement.
