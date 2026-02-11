# Guide — intégrer le visage d’une personne (dans ChatGPT Image / inpainting)

But : partir d’une image **base** (superhéros full body + environnement) et remplacer **uniquement** le visage pour ressembler à la personne (avec son accord), sans changer le décor / tenue / pose.

## Pré-requis (pour de bons résultats)
- Une photo source nette du visage (lumière douce, pas de lunettes si possible, pas de motion blur).
- Les images base en **2:3** (vertical) avec visage visible et dégagé.

## Méthode recommandée (Inpainting / Edit)
1) Ouvre une image base.
2) Passe en mode **Edit**.
3) **Sélectionne uniquement** la zone du visage (et un peu de cou). Évite de sélectionner les cheveux/oreilles si tu veux garder ceux de l’image base.
4) Fournis la **photo de référence** (la personne) si l’outil le propose.
5) Utilise un prompt d’édition "verrouillé" (ci-dessous).

### Prompt d’édition (template)
> Replace the character’s face with the face from the reference photo. Keep the **same lighting direction**, color grading, and film grain as the original image. Keep the **same pose, head size, camera angle**, and **do not change** the outfit or background. Photorealistic. Seamless blending at the jawline and neck. Preserve sharp focus. No artifacts.

### Variantes utiles
- Si le visage sort trop "mode beauté":
  > keep natural skin texture, realistic pores, no beauty retouching
- Si l’outil modifie trop le reste :
  > do not change anything outside the selected area

## Méthode alternative (si l’édition échoue)
- Génère une nouvelle image en fournissant la photo comme **reference image**, et décris :
  - même pose / même environnement
  - full body
  - tenue inchangée

## Checklist qualité (avant de montrer au client)
- Visage reconnaissable, proportions naturelles
- Pas d’artefacts sur la bouche/yeux
- Cou et mâchoire bien fusionnés
- Lumière cohérente (ombres)
- Couleurs cohérentes (teinte peau)
