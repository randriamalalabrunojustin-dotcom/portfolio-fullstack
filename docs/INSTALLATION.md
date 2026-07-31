# Installation détaillée

## Prérequis

Installez :

- PHP 8.3 ou supérieur
- Composer 2
- MySQL 8 ou MariaDB compatible
- Node.js LTS et npm
- Git
- Visual Studio Code
- Postman

Vérification :

```bash
php -v
composer --version
mysql --version
node -v
npm -v
git --version
```

## 1. Cloner le projet

```bash
git clone https://github.com/VOTRE-UTILISATEUR/portfolio-fullstack.git
cd portfolio-fullstack
```

## 2. Installer le front-end

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

Sous Windows PowerShell :

```powershell
Copy-Item .env.example .env
npm install
npm run dev
```

Variables disponibles :

```env
VITE_API_URL=http://127.0.0.1:8000/api
```

## 3. Préparer MySQL

```sql
CREATE DATABASE portfolio
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;
```

Optionnel :

```sql
CREATE USER 'portfolio_user'@'localhost' IDENTIFIED BY 'mot_de_passe_solide';
GRANT ALL PRIVILEGES ON portfolio.* TO 'portfolio_user'@'localhost';
FLUSH PRIVILEGES;
```

## 4. Installer Laravel

```bash
cd ../backend
cp .env.example .env
composer install
php artisan key:generate
```

Configurez les valeurs suivantes :

```env
DB_DATABASE=portfolio
DB_USERNAME=root
DB_PASSWORD=
FRONTEND_URLS=http://localhost:5173
```

Puis :

```bash
php artisan migrate
php artisan serve
```

## 5. Vérifier l’API

Dans le navigateur :

```text
http://127.0.0.1:8000/api/health
```

Résultat attendu :

```json
{
  "success": true,
  "message": "API opérationnelle"
}
```

## 6. Commandes de développement utiles

Front-end :

```bash
npm run dev
npm run build
npm run preview
```

Back-end :

```bash
php artisan serve
php artisan route:list
php artisan migrate:status
php artisan test
php artisan optimize:clear
```

## 7. Problèmes fréquents

### Erreur CORS

Ajoutez l’URL exacte du front-end dans `FRONTEND_URLS`, puis :

```bash
php artisan config:clear
```

### Erreur de connexion MySQL

Vérifiez le service MySQL, le port, la base, l’utilisateur et le mot de passe.

### Erreur 422

La requête est arrivée au serveur, mais un ou plusieurs champs ne respectent
pas les règles de validation. Les erreurs sont affichées sous le formulaire.

### Route Vue en 404 après actualisation

En production, le serveur doit rediriger toutes les routes du front-end vers
`index.html`. Le fichier `frontend/vercel.json` fournit cette règle sur Vercel.
