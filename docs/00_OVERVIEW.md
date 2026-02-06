# Poster cadeau — notes projet (overview)

## Objectif
Créer un service en **français** (lancement **France métropolitaine**) où un utilisateur :
1) envoie une photo d’une personne,
2) choisit un style (humoristique mais rendu premium),
3) obtient **2 aperçus**,
4) paye,
5) reçoit un **poster A4** imprimé (print‑on‑demand), avec option d’évolutions (A3, cadre…).

## Positionnement
- Cible : **cadeau humour**.
- Rendu souhaité : **ressemblance forte, photoréaliste**.
- Attention : “photoréaliste + ressemblance forte” est la zone la plus fragile (refus fournisseur, uncanny, demandes limites). On vend plutôt comme **“portrait studio/ciné ultra réaliste”** (toujours photo‑like) pour améliorer la stabilité.

## Offre MVP validée
- Format : **A4**
- Produit de base : **poster sans cadre**
- Prix : **19€** (le cadre n’est pas inclus ; trop dur économiquement à ce prix)
- **Frais de livraison en plus**
- Papier : **standard** au début
- Aperçus : **2 previews avant achat**
- Texte : **tagline autorisée**
- Ton : l’utilisateur peut choisir **gentil** ou **sarcastique**

## Print‑on‑Demand (POD)
- POD pas encore choisi (candidats : **Gelato**, **Printful**, **Printify**).
- Besoin : l’utilisateur doit voir un **aperçu avant d’acheter**.

## Décisions / règles clés
- À 19€ : lancement **sans cadre** obligatoire pour conserver une marge (sinon shipping + casse + SAV rendent le modèle intenable).
- “2 previews” doivent être **vraies variantes** (pose / décor / éclairage) pour être utiles.
- Pour éviter l’abus : previews **watermarkées** et pas d’HD avant paiement.

## MVP technique “visualisation”
Pour visualiser rapidement sans DB/Stripe/POD, un MVP statique a été créé (HTML/CSS/JS) :
- Flow : create → preview (2 images) → checkout (simulé) → order
- Données : **localStorage** (pas de backend)
- Images : placeholders (picsum)

Repo GitHub : https://github.com/botswana-bot/poster-cadeau-mvp

## À faire ensuite
1) Déploiement sur Deno Deploy (via dashboard / Browser Relay).
2) Brancher upload photo(s).
3) Brancher génération images (provider API) + watermark previews.
4) Brancher Stripe.
5) Brancher POD + calcul shipping France.
