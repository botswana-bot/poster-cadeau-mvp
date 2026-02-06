# Tech roadmap (du prototype vers le produit)

## Prototype actuel (ce repo)
- Statique HTML/CSS/JS
- localStorage
- placeholders images
- checkout simulé

## Étape 1 — Déploiement preview
- Deno Deploy : déployer ce repo avec `main.ts` (serveDir)

## Étape 2 — Upload photo
- Remplacer URL par upload fichier
- Stockage : S3/R2 ou Supabase Storage

## Étape 3 — Génération images
- Choisir provider images (API)
- Pipeline :
  - 2 previews (moyenne résolution + watermark)
  - final HD (print ready)
- Logs + monitoring coûts

## Étape 4 — Paiement
- Stripe checkout + webhooks

## Étape 5 — POD
- Choisir Gelato/Printful/Printify
- Créer commande POD via API
- Calcul shipping France
- Statuts commande + tracking

## Étape 6 — Qualité print
- Export print‑ready A4 (marges, safe areas, DPI)
- Templates “poster layout”
