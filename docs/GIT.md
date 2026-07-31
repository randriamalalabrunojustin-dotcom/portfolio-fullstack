# Commandes Git et GitHub

## Initialiser le dépôt

```bash
git init
git add .
git commit -m "feat: initialiser le portfolio full stack"
git branch -M main
git remote add origin https://github.com/VOTRE-UTILISATEUR/portfolio-fullstack.git
git push -u origin main
```

## Flux de travail recommandé

```bash
git checkout -b feature/contact-form
git add .
git commit -m "feat: connecter le formulaire à l API"
git push -u origin feature/contact-form
```

Créez ensuite une Pull Request sur GitHub.

## Exemples de commits

```text
feat: ajouter une nouvelle fonctionnalité
fix: corriger une erreur
docs: mettre à jour la documentation
style: modifier uniquement la présentation
refactor: réorganiser le code sans changer le comportement
test: ajouter ou corriger des tests
chore: maintenance du projet
```

## Mettre à jour la branche principale

```bash
git checkout main
git pull origin main
git merge feature/contact-form
git push origin main
```
