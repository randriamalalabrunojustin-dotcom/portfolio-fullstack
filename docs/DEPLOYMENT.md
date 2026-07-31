# Déploiement

## 1. Déployer le front-end sur Vercel

### Depuis GitHub

1. Poussez le projet sur GitHub.
2. Dans Vercel, créez un nouveau projet depuis le dépôt.
3. Définissez `frontend` comme **Root Directory**.
4. Utilisez :
   - Build Command : `npm run build`
   - Output Directory : `dist`
5. Ajoutez la variable :

```env
VITE_API_URL=https://api.votre-domaine.com/api
```

6. Déployez.

Le fichier `vercel.json` redirige les routes Vue vers `index.html`.

### Avec la CLI Vercel

```bash
npm install -g vercel
cd frontend
vercel
vercel --prod
```

## 2. Déployer Laravel

Choisissez un hébergement qui permet :

- PHP 8.3+
- Composer
- MySQL
- accès SSH ou panneau de contrôle
- document root configurable vers `backend/public`

### Variables essentielles

```env
APP_ENV=production
APP_DEBUG=false
APP_URL=https://api.votre-domaine.com

DB_CONNECTION=mysql
DB_HOST=...
DB_PORT=3306
DB_DATABASE=...
DB_USERNAME=...
DB_PASSWORD=...

FRONTEND_URLS=https://votre-portfolio.vercel.app
```

Plusieurs domaines peuvent être séparés par une virgule :

```env
FRONTEND_URLS=https://votre-portfolio.vercel.app,https://www.votre-domaine.com
```

### Commandes de production

```bash
composer install --no-dev --optimize-autoloader
php artisan key:generate --force
php artisan migrate --force
php artisan storage:link
php artisan optimize
```

Assurez-vous que Laravel peut écrire dans :

```text
storage/
bootstrap/cache/
```

### Document root

Le domaine de l’API doit pointer vers :

```text
backend/public
```

Ne pointez jamais le domaine vers la racine `backend`, car le fichier `.env`
et les sources ne doivent pas être accessibles publiquement.

## 3. Après déploiement

Testez :

```text
https://api.votre-domaine.com/api/health
```

Puis mettez à jour `VITE_API_URL` sur Vercel et relancez un déploiement.

## 4. Déployer sur un hébergement mutualisé

Lorsque le panneau ne permet pas de changer le document root :

1. Placez le projet Laravel hors du dossier public.
2. Copiez uniquement le contenu de `backend/public` dans `public_html`.
3. Adaptez les chemins de `public_html/index.php` vers le projet Laravel.
4. Protégez `.env` et les dossiers internes.
5. Exécutez les migrations depuis SSH ou l’outil prévu par l’hébergeur.

La méthode exacte dépend de l’hébergeur ; privilégiez toujours un document root
configurable.
