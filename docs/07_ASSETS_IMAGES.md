# 07_ASSETS_IMAGES.md — Catalogue d’images (enfants) + génération IA

Ce fichier sert de mémoire de travail pour la partie **assets** du projet `poster-cadeau-mvp`.

## Contexte produit (résumé)

- Le projet permet à un utilisateur d’**uploader une photo** (en pratique : une photo/visage d’enfant).
- L’utilisateur **choisit une image/scène** dans une galerie.
- L’app **intègre** la photo uploadée dans la scène choisie (photomontage / face replacement).
- Cible prioritaire (MVP) : **enfants** (ex : un parent offre un cadeau original à son enfant).

## Direction : catégories + plusieurs scènes par catégorie

Objectif : proposer au client une **liste de catégories**, et pour chaque catégorie **plusieurs images possibles**.

Contraintes décidées :
- Style : **photo réaliste** (cinématique), pas cartoon.
- MVP : **4 images par catégorie**.

## Catégories proposées (v1)

> NB : la liste est ajustable (6–8 catégories pour MVP, ou 10–12 pour un catalogue plus large).

1. **Super‑héros (réaliste)**
2. **Espace / Astronaute**
3. Pirate / Trésor
4. Chevalier / Dragon (fantasy réaliste)
5. Aventurier / Jungle
6. Dinosaures
7. Sport / Champion
8. Star de scène / Musique
9. Métiers (rêves d’enfant)
10. Magie / Sorcier

## IMPORTANT — décision sur les casques/visières

- Tentative initiale : scènes astronaute avec **casque/visière** (plus crédible visuellement).
- Retour utilisateur : **ne pas utiliser de scènes avec casque**.
  - Raison : l’intégration de la photo/visage dans un casque est trop difficile (reflets, déformation, bord du casque).

➡️ **Décision : pour le MVP, éviter les casques/visières** sur les scènes où le visage doit être remplacé.

## Standard “compatibilité face replacement” (pour tous les fonds)

Pour rendre l’intégration de visage fiable :
- Pose visage : **face caméra** (ou léger 3/4), éviter profils / angles extrêmes.
- Éclairage visage : **homogène**, pas d’ombres dures sur le visage.
- Arrière-plan : cinématique mais **pas trop chargé** autour de la tête.
- Éviter : cheveux qui masquent le visage, éléments qui croisent le visage (lunettes, visière, mains), textures complexes au niveau du visage.
- Éviter : texte, logos, watermark, numéros.

## Génération IA (Replicate)

- Modèle : `google/nano-banana-pro`
- Version : `0acb550957f20951ffab7592a64c4da1305179e9f9bf413d4bf99f932dce3ffe`
- Ratio : `2:3`
- Résolution : Replicate accepte `1K | 2K | 4K` (pas `HD` / `1080p`).
  - Pour itérer vite : utiliser `1K`.

### Notes sur la modération Replicate

- Une génération astronaute a été **flagged sensitive (E005)** quand le prompt mentionnait explicitement `kid`.
- Contournement : reformuler en `person in an astronaut EVA suit` (sans changer l’intention visuelle).

## Test initial demandé

Test “2‑2” (pour comparer fun vs premium) :
- Catégories : **Super‑héros** + **Astronaute**
- Scènes :
  - SH4 : portrait blockbuster super‑héros
  - ES4 : portrait studio astronaute
- Variantes :
  - A = fun/coloré
  - B = premium sobre
- Résolution test : `1K`.

### Évolution ensuite

Après test : décision de **retirer les casques** (même si crédibilité visuelle >). Donc prochaines itérations :
- Super‑héros : OK sans casque.
- “Astronaute” : privilégier des variantes **pilote spatial / training / mission control** sans casque, ou combinaisons sci‑fi.

## TODO (prochaines actions)

- Définir 4 scènes **sans casque** pour la catégorie Espace (réaliste) compatibles avec l’intégration du visage.
- Générer 4 images par catégorie (à commencer par Super‑héros + Espace), en 1K, puis upscale 2K/4K quand validé.
- Organiser les assets dans `public/` (ou `public/lovable-assets/`) + mettre à jour la galerie dans l’app.
