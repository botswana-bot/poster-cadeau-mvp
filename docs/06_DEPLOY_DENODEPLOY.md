# Déploiement Deno Deploy (manuel)

## Pourquoi manuel ?
Le déploiement nécessite d’être connecté au compte Deno Deploy (autorisation GitHub). Sans accès à ton navigateur, l’agent ne peut pas cliquer à ta place.

## Étapes
1) Aller sur https://dash.deno.com/
2) New Project
3) Deploy from GitHub
4) Choisir le repo : `botswana-bot/poster-cadeau-mvp`
5) Entrypoint : `main.ts`
6) Deploy

## Routes
- `/` landing
- `/create.html`
- `/preview.html?id=...`
- `/checkout.html?id=...`
- `/order.html?id=...`
- `/health`
