# Tests avec Postman

Importez :

```text
postman/Portfolio_API.postman_collection.json
```

La collection contient trois requêtes.

## 1. Santé de l’API

```http
GET {{base_url}}/health
```

Résultat attendu : `200 OK`.

## 2. Envoyer un message valide

```http
POST {{base_url}}/contact-messages
Content-Type: application/json
Accept: application/json
```

Corps :

```json
{
  "name": "Utilisateur Test",
  "email": "test@example.com",
  "subject": "Demande de collaboration",
  "message": "Bonjour, je souhaite échanger au sujet de votre portfolio."
}
```

Résultat attendu : `201 Created`.

## 3. Tester la validation

Envoyez des chaînes vides. Résultat attendu : `422 Unprocessable Entity` avec
un objet `errors`.

## Contrôle dans MySQL

```sql
USE portfolio;
SELECT id, name, email, subject, created_at
FROM contact_messages
ORDER BY id DESC;
```

## Test de la limitation

Envoyez plus de cinq requêtes en moins d’une minute depuis la même adresse IP.
Le serveur doit répondre `429 Too Many Requests`.
